// ── Contact form API — Vercel Edge Function ─────────────────────────
// Sends the contact form to imungar@protonmail.com via Resend
// (resend.com). Requires a RESEND_API_KEY environment variable set in
// the Vercel project (Settings → Environment Variables), then a
// redeploy. Until that's set this endpoint replies with a clear 500
// and the form shows an error with a fallback email address — it
// never pretends to have sent something it didn't.
//
// FROM_EMAIL uses Resend's shared onboarding@resend.dev sender, which
// works without any domain setup but has lower sending limits and can
// land in spam more often. For better deliverability, verify
// muntiox.com in the Resend dashboard and switch FROM_EMAIL to
// something like 'MUNTIOX <contacto@muntiox.com>'.

export const config = { runtime: 'edge' }

const TO_EMAIL = 'imungar@protonmail.com'
const FROM_EMAIL = 'MUNTIOX Website <onboarding@resend.dev>'

const MAX_NAME_LEN = 100
const MAX_EMAIL_LEN = 200
const MAX_MESSAGE_LEN = 5000

function clean(input: unknown, maxLen: number): string {
  return String(input ?? '')
    .replace(/[<>]/g, '')
    .trim()
    .slice(0, maxLen)
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function jsonResponse(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' },
  })
}

export default async function handler(request: Request): Promise<Response> {
  if (request.method !== 'POST') return jsonResponse({ error: 'method not allowed' }, 405)

  let body: any
  try {
    body = await request.json()
  } catch {
    return jsonResponse({ error: 'invalid JSON body' }, 400)
  }

  const name = clean(body?.name, MAX_NAME_LEN)
  const email = clean(body?.email, MAX_EMAIL_LEN)
  const message = clean(body?.message, MAX_MESSAGE_LEN)

  if (!name || !email || !message) return jsonResponse({ error: 'missing fields' }, 400)
  if (!isValidEmail(email)) return jsonResponse({ error: 'invalid email' }, 400)

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) return jsonResponse({ error: 'email service not configured yet' }, 500)

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [TO_EMAIL],
        reply_to: email,
        subject: `New message from ${name} — muntiox.com`,
        text: `${message}\n\n—\n${name} <${email}>`,
      }),
    })
    if (!res.ok) {
      return jsonResponse({ error: 'failed to send' }, 502)
    }
    return jsonResponse({ ok: true })
  } catch {
    return jsonResponse({ error: 'failed to send' }, 502)
  }
}
