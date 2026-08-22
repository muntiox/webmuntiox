import { useEffect, useState } from 'react'
import PixelHeart from './PixelHeart'

// ── Guestbook — the small, shared trace left by everyone who found
// all six clues. Deliberately styled unlike the real contact form
// (boxed fields instead of underlines, a pixel heart standing in for
// a bullet) so it never reads as "another way to get in touch" —
// it's a signature on the map, not a lead form.
// Talks to /api/guestbook (a Vercel Function backed by Redis). If
// that storage isn't provisioned yet, every request fails quietly —
// the panel just shows nothing to sign into, rather than breaking.
type Entry = { name: string; message: string; ts: number }

const inputStyle: React.CSSProperties = {
  background: 'rgba(255,255,255,0.04)',
  border: '1px solid rgba(217,115,122,0.4)',
  padding: '0.75rem 0.9rem',
  fontFamily: "'Outfit', sans-serif",
  fontSize: '0.88rem',
  color: '#ffffff',
  outline: 'none',
  width: '100%',
}

export default function GuestbookPanel() {
  const [entries, setEntries] = useState<Entry[] | null>(null)
  const [unavailable, setUnavailable] = useState(false)
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const load = () => {
    fetch('/api/guestbook')
      .then((r) => {
        if (!r.ok) throw new Error('bad response')
        return r.json()
      })
      .then((data) => setEntries(Array.isArray(data.entries) ? data.entries : []))
      .catch(() => setUnavailable(true))
  }

  useEffect(() => {
    load()
  }, [])

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    const trimmed = name.trim()
    if (!trimmed) return
    setStatus('sending')
    fetch('/api/guestbook', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ name: trimmed, message: message.trim() }),
    })
      .then((r) => {
        if (!r.ok) throw new Error('failed')
        return r.json()
      })
      .then(() => {
        setStatus('sent')
        setName('')
        setMessage('')
        load()
      })
      .catch(() => setStatus('error'))
  }

  if (unavailable) return null

  return (
    <div className="mxo-guestbook">
      <p className="mxo-guestbook-label">
        <PixelHeart filled size={11} /> Who else made it here
      </p>

      {status === 'sent' ? (
        <p className="mxo-guestbook-sent">You're on the map now.</p>
      ) : (
        <form onSubmit={submit} className="mxo-guestbook-form">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name or initials"
            maxLength={40}
            required
            style={inputStyle}
          />
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="A message, if you'd like (optional)"
            maxLength={140}
            style={inputStyle}
          />
          <button type="submit" disabled={status === 'sending'} className="mxo-guestbook-submit">
            {status === 'sending' ? 'Signing…' : 'Sign the map'}
          </button>
          {status === 'error' && <p className="mxo-guestbook-error">Couldn't reach the guestbook right now — try again in a moment.</p>}
        </form>
      )}

      {entries && entries.length > 0 && (
        <ul className="mxo-guestbook-list">
          {entries.map((e, i) => (
            <li key={i}>
              <PixelHeart filled size={9} />
              <div>
                <span className="mxo-guestbook-name">{e.name}</span>
                {e.message && <p className="mxo-guestbook-message">{e.message}</p>}
              </div>
            </li>
          ))}
        </ul>
      )}
      {entries && entries.length === 0 && <p className="mxo-guestbook-empty">Nobody's signed yet. Be the first.</p>}
    </div>
  )
}
