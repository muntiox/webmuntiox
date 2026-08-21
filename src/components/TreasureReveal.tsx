import { useEffect, useRef, useState } from 'react'
import GuestbookPanel from './GuestbookPanel'

// ── The payoff — shown on /contact once all six clues are found.
// First time only, a full-screen overlay unfurls the treasure map
// from the center before fading away; underneath, a settled card
// with the note and the guestbook was there all along, so the
// overlay reads as the transition into it rather than a popup on
// top of it. Later visits skip straight to the settled card.
const SEEN_KEY = 'mxo_treasure_seen'

function RevealOverlay({ onDone }: { onDone: () => void }) {
  useEffect(() => {
    const t = setTimeout(onDone, 2400)
    return () => clearTimeout(t)
  }, [onDone])
  return (
    <div className="mxo-treasure-overlay" aria-hidden="true">
      <div className="mxo-treasure-overlay-map" />
      <p className="mxo-treasure-overlay-text">You found it.</p>
    </div>
  )
}

export default function TreasureReveal() {
  const [showOverlay, setShowOverlay] = useState(false)
  const initialized = useRef(false)

  useEffect(() => {
    if (initialized.current) return
    initialized.current = true
    let seen = false
    try {
      seen = localStorage.getItem(SEEN_KEY) === '1'
    } catch {
      /* noop */
    }
    if (!seen) {
      setShowOverlay(true)
      try {
        localStorage.setItem(SEEN_KEY, '1')
      } catch {
        /* noop */
      }
    }
  }, [])

  return (
    <>
      {showOverlay && <RevealOverlay onDone={() => setShowOverlay(false)} />}
      <div className="mxo-treasure-card">
        <div className="mxo-treasure-card-map" aria-hidden="true" />
        <div className="mxo-treasure-card-content">
          <p className="mxo-treasure-label">You found it.</p>
          <p className="mxo-treasure-note">
            Curiosity is a virtue — and a rare one. Most people scroll straight past a crooked letter, a photo out
            of place, a patch of canvas that's a little too dark. You stopped. Six times. That tells me more than
            a portfolio ever could.
          </p>
          <GuestbookPanel />
        </div>
      </div>
    </>
  )
}
