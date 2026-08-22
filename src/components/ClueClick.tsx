import { useState } from 'react'
import { markClueFound } from '../lib/clues'
import type { ClueId } from '../lib/clues'

// ── A small paw print — the reward for the click, not a hint before it.
function PawGlyph({ visible }: { visible: boolean }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      aria-hidden="true"
      style={{
        display: 'inline-block',
        marginLeft: '0.4em',
        verticalAlign: 'middle',
        opacity: visible ? 1 : 0,
        transform: visible ? 'scale(1) translateY(0)' : 'scale(0.3) translateY(4px)',
        transition: 'opacity 0.5s ease, transform 0.5s cubic-bezier(0.2,0.8,0.2,1.4)',
      }}
    >
      <circle cx="12" cy="15.5" r="5" fill="#d9737a" />
      <circle cx="4.5" cy="9.5" r="2.5" fill="#d9737a" />
      <circle cx="9.5" cy="4" r="2.5" fill="#d9737a" />
      <circle cx="14.5" cy="4" r="2.5" fill="#d9737a" />
      <circle cx="19.5" cy="9.5" r="2.5" fill="#d9737a" />
    </svg>
  )
}

// ── Clue: one click ─────────────────────────────────────────────────
// The easiest one on the site, on purpose — just ordinary text, and a
// single click on it counts. No hold, no drag, no double-click. The
// only sign anything happened is a little paw print blooming in right
// after, like it was left there for you.
export default function ClueClick({ children, id }: { children: string; id: ClueId }) {
  const [solved, setSolved] = useState(false)
  return (
    <span style={{ cursor: 'default' }}>
      <span
        onClick={() => {
          if (solved) return
          setSolved(true)
          markClueFound(id)
        }}
        style={{
          color: solved ? '#d9737a' : 'inherit',
          textShadow: solved ? '0 0 12px rgba(217,115,122,0.6)' : 'none',
          transition: 'color 0.5s ease, text-shadow 0.5s ease',
        }}
      >
        {children}
      </span>
      <PawGlyph visible={solved} />
    </span>
  )
}
