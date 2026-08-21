import { useEffect, useRef, useState } from 'react'

// ── Clue letter — part of the site's hidden trail ──────────────────
// One letter in this word sits slightly out of place, like a stray
// typo — nudged a few pixels off its baseline and tilted, easy to
// miss unless you're actually reading closely. Drag it back to where
// it belongs (its true resting position) and it settles in with a
// small glow, then quietly carries you to the next page. Nothing
// announces it; nothing explains it. You just have to notice.
export default function ClueLetter({
  children,
  start,
  rotate = 10,
  storageKey,
  nextHref,
}: {
  children: string
  start: { x: number; y: number }
  rotate?: number
  storageKey: string
  nextHref: string
}) {
  const [pos, setPos] = useState(start)
  const [dragging, setDragging] = useState(false)
  const [solved, setSolved] = useState(false)
  const drag = useRef<{ px: number; py: number; ox: number; oy: number } | null>(null)

  useEffect(() => {
    if (!solved) return
    try {
      sessionStorage.setItem(storageKey, '1')
    } catch {
      /* sessionStorage unavailable — the letter still settles, it just won't be remembered */
    }
    const t = setTimeout(() => {
      window.location.href = nextHref
    }, 950)
    return () => clearTimeout(t)
  }, [solved, storageKey, nextHref])

  const onPointerDown = (e: React.PointerEvent<HTMLSpanElement>) => {
    if (solved) return
    e.preventDefault()
    ;(e.target as HTMLElement).setPointerCapture(e.pointerId)
    drag.current = { px: e.clientX, py: e.clientY, ox: pos.x, oy: pos.y }
    setDragging(true)
  }
  const onPointerMove = (e: React.PointerEvent<HTMLSpanElement>) => {
    if (!drag.current) return
    setPos({ x: drag.current.ox + (e.clientX - drag.current.px), y: drag.current.oy + (e.clientY - drag.current.py) })
  }
  const endDrag = () => {
    if (!drag.current) return
    drag.current = null
    setDragging(false)
    setPos((p) => {
      const dist = Math.hypot(p.x, p.y)
      if (dist < 16) {
        setSolved(true)
        return { x: 0, y: 0 }
      }
      return start
    })
  }

  return (
    <span
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      onDragStart={(e) => e.preventDefault()}
      style={{
        position: 'relative',
        display: 'inline-block',
        touchAction: 'none',
        userSelect: 'none',
        WebkitUserSelect: 'none',
        cursor: solved ? 'default' : dragging ? 'grabbing' : 'grab',
        color: solved ? '#d9737a' : 'inherit',
        transform: `translate(${pos.x}px, ${pos.y}px) rotate(${solved ? 0 : rotate}deg)`,
        transition: dragging ? 'none' : 'transform 0.5s cubic-bezier(0.2,0.8,0.2,1.4), color 0.4s ease',
        textShadow: solved ? '0 0 12px rgba(217,115,122,0.7)' : 'none',
      }}
    >
      {children}
    </span>
  )
}
