export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { turnstileToken } = req.body;

    if (!turnstileToken) {
      return res.status(400).json({ error: 'Turnstile token missing' });
    }

    // 1. Cloudflare Turnstile verifizieren
    const verifyForm = new URLSearchParams();
    verifyForm.append('secret', process.env.CLOUDFLARE_SECRET_KEY);
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
      return res.status(retellRes.status).json({ error: 'Retell API error' });
    }

    const retellData = await retellRes.json();

    // 3. Access Token zurückgeben
    return res.status(200).json({ access_token: retellData.access_token });

  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
