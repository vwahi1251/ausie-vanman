// Vercel Serverless Function (Node.js)
// This proxies your request to Google Apps Script so the browser never hits cross-origin.

export default async function handler(req, res) {
  // CORS for safety (allows local dev too)
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method Not Allowed' });
  }

  try {
    const APPS_SCRIPT_URL =
      'https://script.google.com/macros/s/AKfycbysu7rKrNyvhAL28pwVOGJf3O1FeX9mAvpCAtxldZFOfjxGvBD42ikNnJqcyqXR0_jM/exec';

    // Forward the payload to Google Apps Script as text/plain (avoids its CORS issues)
    const upstream = await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(req.body || {}),
    });

    const text = await upstream.text(); // readable for debugging if needed

    // Respond to the browser with a clean JSON status
    res.setHeader('Access-Control-Allow-Origin', '*');
    return res.status(200).json({ ok: true, upstreamStatus: upstream.status, upstreamBody: text });
  } catch (err) {
    console.error(err);
    res.setHeader('Access-Control-Allow-Origin', '*');
    return res.status(500).json({ ok: false, error: 'Failed to call Google Script' });
  }
}
