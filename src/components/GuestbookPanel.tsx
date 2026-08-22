import { useEffect, useState } from 'react'
import { Link } from '@tanstack/react-router'
import PixelHeart from './PixelHeart'
import { useLanguage, langPath } from '../lib/i18n'

// ── Guestbook — the small, shared trace left by everyone who found
// every clue. Deliberately styled unlike the real contact form
// (boxed fields instead of underlines, a pixel heart standing in for
// a bullet) so it never reads as "another way to get in touch" —
// it's a signature on the map, not a lead form.
// Talks to /api/guestbook (a Vercel Function backed by Redis). If
// that storage isn't provisioned yet, every request fails quietly —
// the panel just shows nothing to sign into, rather than breaking.
type Entry = { name: string; message: string; ts: number }

// One signature per browser — same honor-system approach as the clue
// hunt itself (a localStorage flag, no accounts). Trivial to get
// around by clearing site data, but that's fine: this isn't meant to
// stop a determined visitor, just keep one person from signing twice
// by accident.
const SIGNED_KEY = 'mxo_guestbook_signed'

const copy = {
  en: {
    label: 'Who else made it here',
    sent: "You're on the map now.",
    alreadySigned: 'You already left your grain of sand. Time to leave it to the next person.',
    consentPre: 'Your name and message will be shown publicly on this page. See the',
    consentLink: 'privacy policy',
    namePlaceholder: 'Your name or initials',
    messagePlaceholder: "A message, if you'd like (optional)",
    signing: 'Signing…',
    sign: 'Sign the map',
    error: "Couldn't reach the guestbook right now — try again in a moment.",
    empty: "Nobody's signed yet. Be the first.",
  },
  es: {
    label: 'Quién más llegó hasta aquí',
    sent: 'Ya estás en el mapa.',
    alreadySigned: 'Ya dejaste tu grano de arena. Ahora le toca a la próxima persona.',
    consentPre: 'Tu nombre y mensaje se mostrarán públicamente en esta página. Consulta la',
    consentLink: 'política de privacidad',
    namePlaceholder: 'Tu nombre o iniciales',
    messagePlaceholder: 'Un mensaje, si quieres (opcional)',
    signing: 'Firmando…',
    sign: 'Firmar el mapa',
    error: 'No se pudo conectar con el libro de visitas ahora mismo — inténtalo de nuevo en un momento.',
    empty: 'Todavía nadie ha firmado. Sé la primera persona.',
  },
}

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
  const { lang } = useLanguage()
  const c = copy[lang]
  const [entries, setEntries] = useState<Entry[] | null>(null)
  const [unavailable, setUnavailable] = useState(false)
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [alreadySigned, setAlreadySigned] = useState(false)

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
    try {
      setAlreadySigned(localStorage.getItem(SIGNED_KEY) === '1')
    } catch {
      /* storage unavailable — just let them sign */
    }
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
        try {
          localStorage.setItem(SIGNED_KEY, '1')
        } catch {
          /* storage unavailable — the signature still went through */
        }
        load()
      })
      .catch(() => setStatus('error'))
  }

  if (unavailable) return null

  const signed = status === 'sent' || alreadySigned

  return (
    <div className="mxo-guestbook">
      <p className="mxo-guestbook-label">
        <PixelHeart filled size={11} /> {c.label}
      </p>

      {signed ? (
        <p className="mxo-guestbook-sent">
          {status === 'sent' ? c.sent : c.alreadySigned}
        </p>
      ) : (
        <form onSubmit={submit} className="mxo-guestbook-form">
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.68rem', fontWeight: 300, color: 'rgba(255,255,255,0.45)', lineHeight: 1.6, margin: '0 0 0.4rem' }}>
            {c.consentPre}{' '}
            <Link to={langPath(lang, '/privacy')} style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'underline' }}>{c.consentLink}</Link>.
          </p>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={c.namePlaceholder}
            maxLength={40}
            required
            style={inputStyle}
          />
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={c.messagePlaceholder}
            maxLength={140}
            style={inputStyle}
          />
          <button type="submit" disabled={status === 'sending'} className="mxo-guestbook-submit">
            {status === 'sending' ? c.signing : c.sign}
          </button>
          {status === 'error' && <p className="mxo-guestbook-error">{c.error}</p>}
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
      {entries && entries.length === 0 && <p className="mxo-guestbook-empty">{c.empty}</p>}
    </div>
  )
}
