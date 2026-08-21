import { useEffect, useState } from 'react'

// ── Guestbook — the small, shared trace left by everyone who found
// all six clues. Talks to /api/guestbook (a Vercel Function backed by
// Vercel KV). If that storage isn't provisioned yet, every request
// fails quietly — the panel just shows nothing to sign into, rather
// than breaking the page.
type Entry = { name: string; message: string; ts: number }

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
    <div style={{ marginTop: '2.2rem' }}>
      <p
        style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: '0.6rem',
          fontWeight: 600,
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          color: '#d9737a',
          marginBottom: '1rem',
        }}
      >
        Who else made it here
      </p>

      {status === 'sent' ? (
        <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', marginBottom: '1.6rem' }}>
          You're on the map now.
        </p>
      ) : (
        <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginBottom: '2rem', maxWidth: '420px' }}>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name or initials"
            maxLength={40}
            required
            style={{
              background: 'transparent',
              border: 'none',
              borderBottom: '1px solid rgba(255,255,255,0.3)',
              padding: '0.6rem 0',
              fontFamily: "'Outfit', sans-serif",
              fontSize: '0.9rem',
              color: '#ffffff',
              outline: 'none',
            }}
          />
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="A message, if you'd like (optional)"
            maxLength={140}
            style={{
              background: 'transparent',
              border: 'none',
              borderBottom: '1px solid rgba(255,255,255,0.3)',
              padding: '0.6rem 0',
              fontFamily: "'Outfit', sans-serif",
              fontSize: '0.9rem',
              color: '#ffffff',
              outline: 'none',
            }}
          />
          <button
            type="submit"
            disabled={status === 'sending'}
            style={{
              alignSelf: 'flex-start',
              background: 'transparent',
              border: '1px solid #d9737a',
              color: '#d9737a',
              fontFamily: "'Outfit', sans-serif",
              fontSize: '0.62rem',
              fontWeight: 600,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              padding: '0.7rem 1.4rem',
              cursor: status === 'sending' ? 'default' : 'pointer',
              opacity: status === 'sending' ? 0.6 : 1,
            }}
          >
            {status === 'sending' ? 'Signing…' : 'Sign the map'}
          </button>
          {status === 'error' && (
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)' }}>
              Couldn't reach the guestbook right now — try again in a moment.
            </p>
          )}
        </form>
      )}

      {entries && entries.length > 0 && (
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.7rem', maxWidth: '480px' }}>
          {entries.map((e, i) => (
            <li key={i} style={{ borderLeft: '2px solid rgba(217,115,122,0.4)', paddingLeft: '0.9rem' }}>
              <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.05rem', color: '#ffffff', letterSpacing: '0.02em' }}>
                {e.name}
              </span>
              {e.message && (
                <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.82rem', color: 'rgba(255,255,255,0.6)', marginTop: '0.2rem' }}>
                  {e.message}
                </p>
              )}
            </li>
          ))}
        </ul>
      )}
      {entries && entries.length === 0 && (
        <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.82rem', color: 'rgba(255,255,255,0.45)' }}>
          Nobody's signed yet. Be the first.
        </p>
      )}
    </div>
  )
}
