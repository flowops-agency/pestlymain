import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json());

// API endpoint for Cloudflare Turnstile + Retell Web Call
app.post('/api/create-web-call', async (req, res) => {
  try {
    const { turnstileToken } = req.body;

    if (!turnstileToken) {
      return res.status(400).json({ error: 'Turnstile token missing' });
    }

    // 1. Cloudflare Turnstile verifizieren
    const verifyForm = new URLSearchParams();
    // Cloudflare secret key will be matched against the secrets user added to AI Studio
    verifyForm.append('secret', process.env.CLOUDFLARE_SECRET_KEY || '');
    verifyForm.append('response', turnstileToken);

    const turnstileRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      body: verifyForm,
    });

    const turnstileData = await turnstileRes.json();
    
    if (!turnstileData.success) {
      return res.status(403).json({ error: 'Turnstile validation failed' });
    }

    // 2. Retell Web Call erstellen
    const retellRes = await fetch('https://api.retellai.com/v2/create-web-call', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RETELL_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        agent_id: process.env.NEXT_PUBLIC_RETELL_AGENT_ID,
      }),
    });

    if (!retellRes.ok) {
      const errorText = await retellRes.text();
      console.error('Retell API error:', errorText);
      return res.status(retellRes.status).json({ error: 'Retell API error' });
    }

    const retellData = await retellRes.json();

    // 3. Access Token zurückgeben
    return res.status(200).json({ access_token: retellData.access_token });

  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Serve static files (HTML, CSS, JS) from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Fallback to index.html for undefined routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

export default app;
