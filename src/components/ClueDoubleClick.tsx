import { useState } from 'react'
import { markClueFound } from '../lib/clues'
import type { ClueId } from '../lib/clues'

// ── Clue: click ─────────────────────────────────────────────────────
// Looks exactly like ordinary styled text. Click it once and it
// counts — no visible change beyond a soft glow to confirm it landed.
export default function ClueDoubleClick({ children, id }: { children: string; id: ClueId }) {
  const [solved, setSolved] = useState(false)
  return (
    <span
      onClick={() => {
        if (solved) return
        setSolved(true)
        markClueFound(id)
      }}
      className={solved ? undefined : 'mxo-clue-dbl-tick'}
      style={{
        color: '#d9737a',
        cursor: 'default',
        textShadow: solved ? '0 0 14px rgba(217,115,122,0.85)' : 'none',
        transition: 'text-shadow 0.5s ease',
      }}
    >
      {children}
    </span>
  )
}
