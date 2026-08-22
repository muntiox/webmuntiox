import { useRef, useState } from 'react'
import { markClueFound } from '../lib/clues'
import type { ClueId } from '../lib/clues'

// ── Clue: seven lives ─────────────────────────────────────────────
// Looks like ordinary punctuation. Click it — nothing happens, just a
// small pulse, like a cat blinking. Click it enough times (a cat has
// nine lives in most places, but seven works too) and the last one
// counts. Nothing before that gives away that it's counting at all.
export default function ClueSevenLives({
  children,
  id,
  lives = 7,
}: {
  children: string
  id: ClueId
  lives?: number
}) {
  const [count, setCount] = useState(0)
  const [solved, setSolved] = useState(false)
  const [pulse, setPulse] = useState(false)
  const pulseTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const onClick = () => {
    if (solved) return
    const next = count + 1
    setCount(next)
    setPulse(true)
    if (pulseTimer.current) clearTimeout(pulseTimer.current)
    pulseTimer.current = setTimeout(() => setPulse(false), 220)
    if (next >= lives) {
      setSolved(true)
      markClueFound(id)
    }
  }

  return (
    <span
      onClick={onClick}
      style={{
        color: solved ? '#d9737a' : 'inherit',
        cursor: 'default',
        display: 'inline-block',
        transform: pulse ? 'scale(1.7)' : 'scale(1)',
        transition: 'transform 0.2s cubic-bezier(0.3,1.5,0.4,1), color 0.4s ease, text-shadow 0.4s ease',
        textShadow: solved ? '0 0 12px rgba(217,115,122,0.75)' : 'none',
      }}
    >
      {children}
    </span>
  )
}
