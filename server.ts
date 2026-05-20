import 'dotenv/config';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { AccessToken, RoomServiceClient, AgentDispatchClient } from 'livekit-server-sdk';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// Startup-time warnings for missing environment variables
const ENV_VARS = ['LIVEKIT_URL', 'LIVEKIT_API_KEY', 'LIVEKIT_API_SECRET', 'RETELL_API_KEY', 'CLOUDFLARE_SECRET_KEY'];
for (const v of ENV_VARS) {
  if (!process.env[v]) {
    console.warn(`[WARN] Environment variable ${v} is not set.`);
  }
}

app.use(express.json());

// Helper function to create Retell Web Call
async function createRetellWebCall(agentId: string) {
  if (!process.env.RETELL_API_KEY) {
    const isVercel = !!process.env.VERCEL;
    const msg = isVercel
      ? 'Retell API key not configured. Add RETELL_API_KEY in Vercel Dashboard > Project Settings > Environment Variables, then redeploy.'
      : 'RETELL_API_KEY is not set in your .env file. Copy .env.example to .env and fill in the value.';
    throw new Error(msg);
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

// API endpoint for LiveKit Token
app.post('/api/livekit-token', async (req, res) => {
  try {
    const { turnstileToken } = req.body;
    if (!turnstileToken) {
      return res.status(400).json({ error: 'Turnstile token missing' });
    }

    const isVerified = await verifyTurnstile(turnstileToken, req.hostname);
    if (!isVerified) {
      return res.status(403).json({ error: 'Turnstile validation failed' });
    }

    const livekitUrl = process.env.LIVEKIT_URL;
    const apiKey = process.env.LIVEKIT_API_KEY;
    const apiSecret = process.env.LIVEKIT_API_SECRET;

    const missingLKVars: string[] = [];
    if (!livekitUrl) missingLKVars.push('LIVEKIT_URL');
    if (!apiKey) missingLKVars.push('LIVEKIT_API_KEY');
    if (!apiSecret) missingLKVars.push('LIVEKIT_API_SECRET');

    if (missingLKVars.length > 0) {
      const isVercel = !!process.env.VERCEL;
      const msg = isVercel
        ? `LiveKit credentials not configured in Vercel. Go to Vercel Dashboard > Project Settings > Environment Variables and add: ${missingLKVars.join(', ')}. Then redeploy.`
        : `LiveKit credentials missing from .env file: ${missingLKVars.join(', ')}. Copy .env.example to .env and fill in the values.`;
      console.error(msg);
      return res.status(500).json({ error: msg });
    }

    // 1. RoomServiceClient initialisieren
    const roomService = new RoomServiceClient(livekitUrl!, apiKey!, apiSecret!);

    // 2. Raum vorab erstellen (bevor das Token generiert wird)
    const roomName = `room-${Math.random().toString(36).substring(7)}`;

    try {
      await roomService.createRoom({
        name: roomName,
        emptyTimeout: 300,
      });
      console.log(`Raum ${roomName} wurde erstellt.`);
    } catch (error) {
      console.error('Raum konnte nicht erstellt werden:', error);
    }

    // 3. Token für den Nutzer erstellen
    const at = new AccessToken(apiKey, apiSecret, {
      identity: 'user-' + Math.random().toString(36).substring(7),
      name: 'Web-Nutzer',
    });
    at.addGrant({
      roomJoin: true,
      room: roomName,
      agent: true,
    });

    // Agent-Dispatch (ohne spezifischen Namen)
    (at as any).roomConfig = {
      agents: [{}],
    };

    // 5. Token an das Frontend senden
    return res.status(200).json({ token: await at.toJwt(), url: livekitUrl });
  } catch (error: any) {
    console.error('Error in /api/livekit-token:', error.message);
    return res.status(500).json({ error: error.message || 'Internal Server Error' });
  }
});

// API endpoint for LiveKit Token (US)
app.post('/api/livekit-token-us', async (req, res) => {
  try {
    const { turnstileToken } = req.body;
    if (!turnstileToken) {
      return res.status(400).json({ error: 'Turnstile token missing' });
    }

    const isVerified = await verifyTurnstile(turnstileToken, req.hostname);
    if (!isVerified) {
      return res.status(403).json({ error: 'Turnstile validation failed' });
    }

    const livekitUrl = process.env.LIVEKIT_URL;
    const apiKey = process.env.LIVEKIT_API_KEY;
    const apiSecret = process.env.LIVEKIT_API_SECRET;

    const missingLKVars: string[] = [];
    if (!livekitUrl) missingLKVars.push('LIVEKIT_URL');
    if (!apiKey) missingLKVars.push('LIVEKIT_API_KEY');
    if (!apiSecret) missingLKVars.push('LIVEKIT_API_SECRET');

    if (missingLKVars.length > 0) {
      const isVercel = !!process.env.VERCEL;
      const msg = isVercel
        ? `LiveKit credentials not configured in Vercel. Go to Vercel Dashboard > Project Settings > Environment Variables and add: ${missingLKVars.join(', ')}. Then redeploy.`
        : `LiveKit credentials missing from .env file: ${missingLKVars.join(', ')}. Copy .env.example to .env and fill in the values.`;
      console.error(msg);
      return res.status(500).json({ error: msg });
    }

    // 1. RoomServiceClient initialisieren
    const roomService = new RoomServiceClient(livekitUrl!, apiKey!, apiSecret!);

    // 2. Raum vorab erstellen
    const roomName = `room-us-${Math.random().toString(36).substring(7)}`;

    try {
      await roomService.createRoom({
        name: roomName,
        emptyTimeout: 300,
      });
      console.log(`US-Raum ${roomName} wurde erstellt.`);
    } catch (error) {
      console.error('US-Raum konnte nicht erstellt werden:', error);
    }

    // 3. Token für den Nutzer erstellen
    const at = new AccessToken(apiKey, apiSecret, {
      identity: 'user-us-' + Math.random().toString(36).substring(7),
      name: 'Web-User',
    });
    at.addGrant({
      roomJoin: true,
      room: roomName,
      agent: true,
    });

    // Agent-Dispatch mit US-Web-AI Agent via AgentDispatchClient
    try {
      const dispatchClient = new AgentDispatchClient(livekitUrl!, apiKey!, apiSecret!);
      await dispatchClient.createDispatch(roomName, 'US-Web-AI');
      console.log(`US-Web-AI Agent dispatched to room ${roomName}`);
    } catch (error) {
      console.error('Agent konnte nicht dispatched werden:', error);
    }

    // 5. Token an das Frontend senden
    return res.status(200).json({ token: await at.toJwt(), url: livekitUrl });
  } catch (error: any) {
    console.error('Error in /api/livekit-token-us:', error.message);
    return res.status(500).json({ error: error.message || 'Internal Server Error' });
  }
});

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

// Clean URL routes (without .html)
const cleanRoutes: [string, string][] = [
  ['/us', 'us.html'],
  ['/datenschutz', 'datenschutz.html'],
  ['/impressum', 'impressum.html'],
  ['/privacy', 'privacy.html'],
  ['/legal', 'legal.html'],
];
for (const [route, file] of cleanRoutes) {
  app.get(route, (req, res) => {
    res.sendFile(path.join(__dirname, 'public', file));
  });
}

// Fallback to index.html for undefined routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

export default app;
