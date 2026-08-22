import { useEffect, useRef, useState } from 'react'
import { markClueFound } from '../lib/clues'
import type { ClueId } from '../lib/clues'
import { useLanguage } from '../lib/i18n'

// ── Clue: scratch it off ────────────────────────────────────────────
// A small, unmarked dark panel — could be a broken image, could be
// nothing. Drag across it (mouse or finger) and it wears away like a
// scratch card, revealing a solid coral panel underneath. Past about
// half cleared, it finishes itself and counts.
export default function ClueScratch({
  id,
  width = 168,
  height = 104,
}: {
  id: ClueId
  width?: number
  height?: number
}) {
  const { lang } = useLanguage()
  const foundLabel = lang === 'es' ? 'Encontrado.' : 'Found it.'
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const drawing = useRef(false)
  const [solved, setSolved] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || solved) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    ctx.clearRect(0, 0, width, height)
    ctx.fillStyle = '#0a0209'
    ctx.fillRect(0, 0, width, height)
  }, [solved, width, height])

  const checkProgress = (ctx: CanvasRenderingContext2D) => {
    const data = ctx.getImageData(0, 0, width, height).data
    let cleared = 0
    let sampled = 0
    for (let i = 3; i < data.length; i += 4 * 6) {
      sampled++
      if (data[i] < 40) cleared++
    }
    if (sampled > 0 && cleared / sampled > 0.5) {
      setSolved(true)
      markClueFound(id)
    }
  }

  const scratchAt = (x: number, y: number) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    ctx.globalCompositeOperation = 'destination-out'
    ctx.beginPath()
    ctx.arc(x, y, 15, 0, Math.PI * 2)
    ctx.fill()
    checkProgress(ctx)
  }

  const getPos = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    return { x: e.clientX - rect.left, y: e.clientY - rect.top }
  }

  return (
    <div style={{ position: 'relative', width, height }}>
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: '#d9737a',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1rem', letterSpacing: '0.04em', color: '#2a0c12' }}>
          {foundLabel}
        </span>
      </div>
      {!solved && (
        <canvas
          ref={canvasRef}
          width={width}
          height={height}
          aria-hidden="true"
          style={{ position: 'absolute', inset: 0, cursor: 'crosshair', touchAction: 'none' }}
          onPointerDown={(e) => {
            ;(e.target as HTMLElement).setPointerCapture(e.pointerId)
            drawing.current = true
            const p = getPos(e)
            scratchAt(p.x, p.y)
          }}
          onPointerMove={(e) => {
            if (!drawing.current) return
            const p = getPos(e)
            scratchAt(p.x, p.y)
          }}
          onPointerUp={() => {
            drawing.current = false
          }}
          onPointerCancel={() => {
            drawing.current = false
          }}
        />
      )}
    </div>
  )
}
