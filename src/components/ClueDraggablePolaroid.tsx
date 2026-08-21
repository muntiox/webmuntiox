import { useRef, useState } from 'react'
import { markClueFound } from '../lib/clues'
import type { ClueId } from '../lib/clues'

// ── Clue photo — one polaroid in the collage sits nowhere near its
// slot, tilted hard, like it fell out of the grid. A real click still
// opens the lightbox like every other photo; drag it back into its
// true spot and it settles in, no more restless than its siblings.
export default function ClueDraggablePolaroid({
  id,
  top,
  left,
  homeRotate,
  start,
  startRotate,
  onOpen,
  visible,
  delay,
  children,
}: {
  id: ClueId
  top: string
  left: string
  homeRotate: string
  start: { x: number; y: number }
  startRotate: number
  onOpen: () => void
  visible: boolean
  delay: string
  children: React.ReactNode
}) {
  const [pos, setPos] = useState(start)
  const [dragging, setDragging] = useState(false)
  const [solved, setSolved] = useState(false)
  const drag = useRef<{ px: number; py: number; ox: number; oy: number; moved: number } | null>(null)

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.preventDefault()
    ;(e.target as HTMLElement).setPointerCapture(e.pointerId)
    drag.current = { px: e.clientX, py: e.clientY, ox: pos.x, oy: pos.y, moved: 0 }
    setDragging(true)
  }
  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!drag.current) return
    const dx = e.clientX - drag.current.px
    const dy = e.clientY - drag.current.py
    drag.current.moved = Math.max(drag.current.moved, Math.hypot(dx, dy))
    setPos({ x: drag.current.ox + dx, y: drag.current.oy + dy })
  }
  const endDrag = () => {
    if (!drag.current) return
    const moved = drag.current.moved
    drag.current = null
    setDragging(false)
    if (moved < 6) {
      // a real click, not a drag — behave like every other photo
      onOpen()
      return
    }
    const dist = Math.hypot(pos.x, pos.y)
    if (dist < 40) {
      setPos({ x: 0, y: 0 })
      setSolved(true)
      markClueFound(id)
    } else {
      setPos(start)
    }
  }

  const rotate = solved ? homeRotate : `${startRotate}deg`

  return (
    <div
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      onDragStart={(e) => e.preventDefault()}
      style={{
        position: 'absolute',
        top,
        left,
        width: '185px',
        background: '#ffffff',
        padding: '7px 7px 32px',
        boxShadow: dragging ? '0 20px 50px rgba(0,0,0,0.7)' : '0 6px 20px rgba(0,0,0,0.4)',
        transform: `translate(${pos.x}px, ${pos.y}px) rotate(${rotate})`,
        transition: dragging ? 'none' : 'transform 0.55s cubic-bezier(0.2,0.8,0.2,1.3), box-shadow 0.3s ease',
        transitionDelay: visible && !dragging ? '0s' : undefined,
        cursor: dragging ? 'grabbing' : 'grab',
        opacity: visible ? 1 : 0,
        zIndex: dragging ? 20 : solved ? 1 : 15,
        touchAction: 'none',
        userSelect: 'none',
        WebkitUserSelect: 'none',
      }}
    >
      {children}
    </div>
  )
}
