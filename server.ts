import 'dotenv/config';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json());

// Helper function to create Retell Web Call
async function createRetellWebCall(agentId: string) {
  if (!process.env.RETELL_API_KEY) {
    throw new Error('RETELL_API_KEY is missing. Please add it from the "Settings -> API Keys" menu.');
  }

  console.log(`Creating Retell web call for agent: ${agentId}`);
  
  const response = await fetch('https://api.retellai.com/v2/create-web-call', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.RETELL_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      agent_id: agentId,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error(`Retell API error (${response.status}):`, errorText);
    throw new Error(`Retell API error: ${errorText}`);
  }

  return response.json();
}

// Function to verify Turnstile token
async function verifyTurnstile(token: string, hostname: string) {
  const isDev = hostname.includes('run.app') || hostname.includes('localhost') || !process.env.CLOUDFLARE_SECRET_KEY;
  const secretKey = isDev ? '1x0000000000000000000000000000000AA' : process.env.CLOUDFLARE_SECRET_KEY;

  const verifyForm = new URLSearchParams();
  verifyForm.append('secret', secretKey!);
  verifyForm.append('response', token);

  const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    body: verifyForm,
  });

  const data = await response.json();
  return data.success;
}

// API endpoint for Cloudflare Turnstile + Retell Web Call (German)
app.post('/api/create-web-call', async (req, res) => {
  try {
    const { turnstileToken } = req.body;
    if (!turnstileToken) {
      return res.status(400).json({ error: 'Turnstile token missing' });
    }

    const isVerified = await verifyTurnstile(turnstileToken, req.hostname);
    if (!isVerified) {
      return res.status(403).json({ error: 'Turnstile validation failed' });
    }

    const agentId = process.env.DE_RETELL_AGENT_ID || process.env.NEXT_PUBLIC_RETELL_AGENT_ID || "agent_f18e9d300e84b1192e42426615";
    const retellData = await createRetellWebCall(agentId);

    return res.status(200).json({ access_token: retellData.access_token });
  } catch (error: any) {
    console.error('Error in /api/create-web-call:', error.message);
    return res.status(500).json({ error: error.message || 'Internal Server Error' });
  }
});

// API endpoint for Cloudflare Turnstile + Retell Web Call (US)
app.post('/api/create-web-call-us', async (req, res) => {
  try {
    const { turnstileToken } = req.body;
    if (!turnstileToken) {
      return res.status(400).json({ error: 'Turnstile token missing' });
    }

    const isVerified = await verifyTurnstile(turnstileToken, req.hostname);
    if (!isVerified) {
      return res.status(403).json({ error: 'Turnstile validation failed' });
    }

    // Determine agent ID, using fallback if environment variable is missing or looks like placeholder
    let agentId = process.env.US_RETELL_AGENT_ID;
    if (!agentId || agentId === 'YOUR_ENGLISH_AGENT_ID') {
      agentId = "agent_dce479d483cc8952c7a417a622";
    }

    const retellData = await createRetellWebCall(agentId);

    return res.status(200).json({ access_token: retellData.access_token });
  } catch (error: any) {
    console.error('Error in /api/create-web-call-us:', error.message);
    return res.status(500).json({ error: error.message || 'Internal Server Error' });
  }
});

// Serve static files (HTML, CSS, JS) from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Blog page
app.get('/blog', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'blog.html'));
});

// Blog detail pages
app.get('/blog/ki-revolutioniert-kundenservice', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'blog-posts', 'ki-revolutioniert-kundenservice.html'));
});

app.get('/blog/bettwanzen-mehrfamilienhaus-ki-disposition', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'blog-posts', 'bettwanzen-mehrfamilienhaus-ki-disposition.html'));
});

app.get('/blog/hoffmann-kammerjaeger-40-mehr-auftraege', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'blog-posts', 'hoffmann-kammerjaeger-40-mehr-auftraege.html'));
});

// Clean URL routes (without .html extension)
app.get('/impressum', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'impressum.html'));
});

app.get('/datenschutz', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'datenschutz.html'));
});

app.get('/privacy', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'privacy.html'));
});

app.get('/legal', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'legal.html'));
});

app.get('/us', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'us.html'));
});

// Fallback to index.html for undefined routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

export default app;
