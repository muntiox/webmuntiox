import { useEffect, useRef, useState } from 'react'
import { markClueFound } from '../lib/clues'
import type { ClueId } from '../lib/clues'
import { useLanguage } from '../lib/i18n'

// ── Clue: scratch it off ────────────────────────────────────────────
// A small, unmarked dark panel — could be a broken image, could be
// nothing. Drag across it (mouse or finger) and it wears away like a
// scratch card, revealing a solid coral panel underneath. Past about
// half cleared, it finishes itself and counts.
const REVEAL_QUOTE = {
  en: {
    text: 'If you would convince a man that he does wrong, do right. But do not care to convince him. Men will believe what they see. Let them see.',
    author: '— Henry David Thoreau',
  },
  es: {
    text: 'Si quieres convencer a alguien de que se equivoca, haz lo correcto. Pero no te empeñes en convencerlo. La gente creerá lo que ve. Deja que lo vea.',
    author: '— Henry David Thoreau',
  },
}

export default function ClueScratch({
  id,
  width = 320,
  height = 200,
}: {
  id: ClueId
  width?: number
  height?: number
}) {
  const { lang } = useLanguage()
  const quote = REVEAL_QUOTE[lang]
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
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.9rem',
          padding: '1.6rem',
          textAlign: 'center',
        }}
      >
        <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.82rem', fontWeight: 400, lineHeight: 1.55, color: '#2a0c12', margin: 0 }}>
          "{quote.text}"
        </p>
        <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '0.75rem', letterSpacing: '0.08em', color: 'rgba(42,12,18,0.7)' }}>
          {quote.author}
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
