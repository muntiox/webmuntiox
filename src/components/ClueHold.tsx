import { useRef, useState } from 'react'
import { markClueFound } from '../lib/clues'
import type { ClueId } from '../lib/clues'

// ── Clue: hold it ────────────────────────────────────────────────
// Nothing looks different about this word. Press and hold it for a
// beat — a thin coral line fills in underneath as proof you're still
// there — and it counts. Let go early and it resets.
export default function ClueHold({
  children,
  id,
  holdMs = 1200,
}: {
  children: string
  id: ClueId
  holdMs?: number
}) {
  const [holding, setHolding] = useState(false)
  const [solved, setSolved] = useState(false)
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const start = () => {
    if (solved) return
    setHolding(true)
    timer.current = setTimeout(() => {
      setSolved(true)
      setHolding(false)
      markClueFound(id)
    }, holdMs)
  }
  const cancel = () => {
    setHolding(false)
    if (timer.current) {
      clearTimeout(timer.current)
      timer.current = null
    }
  }

  return (
    <span
      onPointerDown={start}
      onPointerUp={cancel}
      onPointerLeave={cancel}
      onPointerCancel={cancel}
      className={solved ? undefined : 'mxo-clue-shine'}
      style={{
        position: 'relative',
        display: 'inline-block',
        cursor: solved ? 'default' : 'pointer',
        color: solved ? '#d9737a' : 'inherit',
        userSelect: 'none',
        WebkitUserSelect: 'none',
        touchAction: 'none',
      }}
    >
      {children}
      <span
        aria-hidden="true"
        style={{
          position: 'absolute',
          left: 0,
          bottom: '-3px',
          height: '2px',
          background: '#d9737a',
          width: solved ? '100%' : holding ? '100%' : '0%',
          transition: holding ? `width ${holdMs}ms linear` : 'width 0.2s ease',
        }}
      />
    </span>
  )
}
