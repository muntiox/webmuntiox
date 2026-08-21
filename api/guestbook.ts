// ── Guestbook API — Vercel Edge Function ────────────────────────────
// Backs the "who else made it here" list shown once someone finds all
// six hidden clues. Storage is Redis via Upstash, which must be
// provisioned once from the Vercel dashboard: Project → Storage →
// Create Database → Redis (Marketplace, powered by Upstash), then
// redeploy — that connects the integration and sets the
// KV_REST_API_URL / KV_REST_API_TOKEN env vars this file reads.
// Until that's done this endpoint fails gracefully (500 with a clear
// error) — the guestbook UI on the site handles that quietly and
// never breaks the page.
import { Redis } from '@upstash/redis'

export const config = { runtime: 'edge' }

const LIST_KEY = 'mxo_guestbook'
const MAX_ENTRIES = 200
const MAX_NAME_LEN = 40
const MAX_MESSAGE_LEN = 160

function getRedis(): Redis {
  // Vercel's Upstash Redis integration sets KV_REST_API_URL / KV_REST_API_TOKEN
  // (some setups instead use UPSTASH_REDIS_REST_URL / _TOKEN) — support both.
  const url = process.env.KV_REST_API_URL ?? process.env.UPSTASH_REDIS_REST_URL
  const token = process.env.KV_REST_API_TOKEN ?? process.env.UPSTASH_REDIS_REST_TOKEN
  if (!url || !token) throw new Error('redis env vars not set')
  return new Redis({ url, token })
}

type Entry = { name: string; message: string; ts: number }

function clean(input: unknown, maxLen: number): string {
  return String(input ?? '')
    .replace(/[<>]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, maxLen)
}

function jsonResponse(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' },
  })
}

export default async function handler(request: Request): Promise<Response> {
  if (request.method === 'GET') {
    try {
      const kv = getRedis()
      const raw = await kv.lrange<Entry | string>(LIST_KEY, 0, MAX_ENTRIES - 1)
      const entries: Entry[] = (raw ?? []).map((item) => {
        if (typeof item === 'string') {
          try {
            return JSON.parse(item) as Entry
          } catch {
            return { name: item, message: '', ts: 0 }
          }
        }
        return item
      })
      return jsonResponse({ entries })
    } catch (err) {
      return jsonResponse({ entries: [], error: 'guestbook storage not configured yet' }, 500)
    }
  }

  if (request.method === 'POST') {
    let body: any
    try {
      body = await request.json()
    } catch {
      return jsonResponse({ error: 'invalid JSON body' }, 400)
    }
    const name = clean(body?.name, MAX_NAME_LEN)
    const message = clean(body?.message, MAX_MESSAGE_LEN)
    if (!name) return jsonResponse({ error: 'name is required' }, 400)

    const entry: Entry = { name, message, ts: Date.now() }
    try {
      const kv = getRedis()
      await kv.lpush(LIST_KEY, JSON.stringify(entry))
      await kv.ltrim(LIST_KEY, 0, MAX_ENTRIES - 1)
      return jsonResponse({ ok: true, entry })
    } catch (err) {
      return jsonResponse({ error: 'guestbook storage not configured yet' }, 500)
    }
  }

  return jsonResponse({ error: 'method not allowed' }, 405)
}
