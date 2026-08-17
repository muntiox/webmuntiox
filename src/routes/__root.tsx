import { Outlet, createRootRoute } from '@tanstack/react-router'
import { useEffect, useRef } from 'react'
import '../styles.css'

// ── Heartbeat background ("Dentro") — fixed behind the whole site ──────
function Heartbeat() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    let W = 0, H = 0, DPR = 1
    const resize = () => {
      DPR = Math.min(window.devicePixelRatio || 1, 2)
      W = window.innerWidth; H = window.innerHeight
      canvas.width = W * DPR; canvas.height = H * DPR
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0)
    }
    resize()
    window.addEventListener('resize', resize)

    const GARNET = [122, 26, 38], GARNET2 = [150, 40, 55], WINE = [74, 14, 26]
    const rgba = (c: number[], a: number) => `rgba(${c[0]},${c[1]},${c[2]},${Math.max(0, a)})`
    const heartbeat = (t: number) => {
      const cycle = t % 1
      const lub = Math.exp(-Math.pow((cycle - 0.12) / 0.05, 2))
      const dub = Math.exp(-Math.pow((cycle - 0.30) / 0.06, 2)) * 0.7
      return lub + dub
    }

    let t = 0, raf = 0
    const frame = () => {
      t += 0.004
      ctx.clearRect(0, 0, W, H)
      ctx.fillStyle = '#050506'; ctx.fillRect(0, 0, W, H)
      const beat = heartbeat(t * 0.9)
      const cx = W * 0.5, cy = H * 0.46
      const base = Math.min(W, H) * 0.5, r = base * (1 + beat * 0.16)
      let g = ctx.createRadialGradient(cx, cy, 0, cx, cy, r * 1.8)
      g.addColorStop(0, rgba(GARNET2, 0.32 + beat * 0.22))
      g.addColorStop(0.35, rgba(GARNET, 0.18 + beat * 0.12))
      g.addColorStop(0.7, rgba(WINE, 0.10))
      g.addColorStop(1, rgba(WINE, 0))
      ctx.fillStyle = g; ctx.fillRect(0, 0, W, H)
      let g2 = ctx.createRadialGradient(cx, cy, 0, cx, cy, r * 0.5)
      g2.addColorStop(0, rgba([190, 70, 85], 0.10 + beat * 0.10))
      g2.addColorStop(1, rgba(GARNET, 0))
      ctx.fillStyle = g2; ctx.fillRect(0, 0, W, H)
      raf = requestAnimationFrame(frame)
    }
    raf = requestAnimationFrame(frame)
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize) }
  }, [])
  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      style={{ position: 'fixed', inset: 0, width: '100%', height: '100%', zIndex: -1, pointerEvents: 'none' }}
    />
  )
}

export const Route = createRootRoute({
  notFoundComponent: () => (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '2rem' }}>
      <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '6rem', color: '#edeae2', lineHeight: 1 }}>404</p>
      <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '18.4px', fontWeight: 300, color: 'rgba(237,234,226,0.72)' }}>This page doesn't exist.</p>
      <a href="/" style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#ffffff', background: '#d9737a', padding: '1rem 2.5rem', textDecoration: 'none' }}>← Home</a>
    </div>
  ),
  component: RootComponent,
})

function RootComponent() {
  useEffect(() => {
    document.body.classList.add('flash-triggered')
    document.body.classList.add('nav-lit')
  }, [])
  if (typeof document !== 'undefined') {
    document.body.classList.add('flash-triggered')
    document.body.classList.add('nav-lit')
  }
  return (
    <>
      <Heartbeat />
      <Outlet />
    </>
  )
}
