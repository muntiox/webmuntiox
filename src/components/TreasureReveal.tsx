import { useEffect, useRef, useState } from 'react'
import { useNavigate } from '@tanstack/react-router'
import { CLUE_EVENT, CLUE_TOTAL, getFoundCount } from '../lib/clues'
import { useLanguage, langPath } from '../lib/i18n'
import PixelHeart from './PixelHeart'
import GuestbookPanel from './GuestbookPanel'

// ── The payoff — a self-contained moment, independent of whatever
// page you're on when the sixth clue lands. Doesn't touch that page's
// own content (the contact page stays exactly the contact page).
// Stage 1: the map unfurls full-screen — waits for a click, no rush.
// Stage 2: the note and the guestbook, with a way back to the site.
// Shown once per browser, ever.
const SEEN_KEY = 'mxo_treasure_seen'

const copy = {
  en: {
    continueLabel: 'Continue',
    foundIt: 'You found it.',
    tapToContinue: 'tap to continue',
    noteText:
      "Curiosity is a virtue — and a rare one. X marks the spot, and you found it. You stopped. Seven times. I like people who look twice — that kind of attention is rare. Thank you for looking closely. Leave your own grain of sand below, and share something with the others who stopped too, if you'd like.",
    backHome: '← Back to home',
  },
  es: {
    continueLabel: 'Continuar',
    foundIt: 'Lo encontraste.',
    tapToContinue: 'toca para continuar',
    noteText:
      'La curiosidad es una virtud — y de las poco comunes. La X marca el lugar, y lo encontraste. Te detuviste. Siete veces. Me gusta la gente que mira dos veces — esa clase de atención es rara. Gracias por mirar de cerca. Deja tu propio grano de arena aquí abajo, y comparte algo con quienes también se detuvieron, si te apetece.',
    backHome: '← Volver al inicio',
  },
}

function RevealOverlay({ onDone }: { onDone: () => void }) {
  const { lang } = useLanguage()
  const c = copy[lang]
  const [dismissing, setDismissing] = useState(false)
  const [showHint, setShowHint] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setShowHint(true), 1400)
    return () => clearTimeout(t)
  }, [])

  const dismiss = () => {
    if (dismissing) return
    setDismissing(true)
    setTimeout(onDone, 450)
  }

  return (
    // Wrapper carries no background of its own — a global inner-page rule
    // forces #root's direct-child divs transparent (see MapBackground in
    // __root.tsx for the full explanation), which would strip this
    // overlay's opaque background too. Nesting one level deeper keeps the
    // real, colored div outside that selector's reach.
    <div className="mxo-treasure-portal">
      <div
        className={`mxo-treasure-overlay${dismissing ? ' is-dismissing' : ''}`}
        onClick={dismiss}
        role="button"
        tabIndex={0}
        aria-label={c.continueLabel}
        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && dismiss()}
      >
        <div className="mxo-treasure-overlay-map" aria-hidden="true" />
        <div className="mxo-treasure-overlay-inner">
          <p className="mxo-treasure-overlay-text">{c.foundIt}</p>
          <p className={`mxo-treasure-overlay-hint${showHint ? ' is-visible' : ''}`}>{c.tapToContinue}</p>
        </div>
      </div>
    </div>
  )
}

function NoteScreen({ onHome }: { onHome: () => void }) {
  const { lang } = useLanguage()
  const c = copy[lang]
  return (
    // Same escape-hatch wrapper as RevealOverlay above.
    <div className="mxo-treasure-portal">
      <div className="mxo-treasure-note-screen">
        <div className="mxo-treasure-note-inner">
          <div className="mxo-treasure-note-hearts" aria-hidden="true">
            {Array.from({ length: CLUE_TOTAL }).map((_, i) => (
              <PixelHeart key={i} filled size={12} />
            ))}
          </div>
          <p className="mxo-treasure-note-label">{c.foundIt}</p>
          <p className="mxo-treasure-note-text">{c.noteText}</p>
          <GuestbookPanel />
          <button type="button" className="mxo-treasure-home-btn" onClick={onHome}>
            {c.backHome}
          </button>
        </div>
      </div>
    </div>
  )
}

export default function TreasureReveal() {
  const { lang } = useLanguage()
  const [stage, setStage] = useState<'hidden' | 'overlay' | 'note'>('hidden')
  const triggeredRef = useRef(false)
  const navigate = useNavigate()

  useEffect(() => {
    const maybeTrigger = () => {
      if (triggeredRef.current) return
      if (getFoundCount() !== CLUE_TOTAL) return
      let seen = false
      try {
        seen = localStorage.getItem(SEEN_KEY) === '1'
      } catch {
        /* noop */
      }
      if (seen) return
      triggeredRef.current = true
      try {
        localStorage.setItem(SEEN_KEY, '1')
      } catch {
        /* noop */
      }
      setStage('overlay')
    }
    maybeTrigger()
    window.addEventListener(CLUE_EVENT, maybeTrigger)
    return () => window.removeEventListener(CLUE_EVENT, maybeTrigger)
  }, [])

  if (stage === 'hidden') return null

  const goHome = () => {
    setStage('hidden')
    navigate({ to: langPath(lang, '/') })
  }

  return (
    <>
      {stage === 'overlay' && <RevealOverlay onDone={() => setStage('note')} />}
      {stage === 'note' && <NoteScreen onHome={goHome} />}
    </>
  )
}
