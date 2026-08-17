import { Outlet, createRootRoute, useRouterState } from '@tanstack/react-router'
import { useEffect, useRef } from 'react'
import '../styles.css'

// ── Heartbeat background — fixed behind the whole site ────────────────
function Heartbeat({ variant }: { variant: 'home' | 'inner' }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const variantRef = useRef(variant)
  useEffect(() => { variantRef.current = variant }, [variant])

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

    const GARNET = [138, 35, 51], GARNET2 = [165, 50, 66], WINE = [74, 14, 26]
    const PINK = [217, 115, 122]
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
      const beat = heartbeat(t * 0.9)
      const cx = W * 0.5, cy = H * 0.5
      ctx.clearRect(0, 0, W, H)

      if (variantRef.current === 'home') {
        ctx.fillStyle = '#050506'; ctx.fillRect(0, 0, W, H)
        const base = Math.min(W, H) * 0.5, r = base * (1 + beat * 0.16)
        const g = ctx.createRadialGradient(cx, cy * 0.92, 0, cx, cy * 0.92, r * 1.8)
        g.addColorStop(0, rgba(GARNET2, 0.32 + beat * 0.22))
        g.addColorStop(0.35, rgba(GARNET, 0.18 + beat * 0.12))
        g.addColorStop(0.7, rgba(WINE, 0.10))
        g.addColorStop(1, rgba(WINE, 0))
        ctx.fillStyle = g; ctx.fillRect(0, 0, W, H)
      } else {
        // Inner pages: WHITE base, soft pink wash, beating pink frame, calm centre
        ctx.fillStyle = '#ffffff'; ctx.fillRect(0, 0, W, H)
        const wash = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.max(W, H) * 0.75)
        wash.addColorStop(0, rgba([255, 255, 255], 1))
        wash.addColorStop(0.55, rgba(PINK, 0.10))
        wash.addColorStop(1, rgba(PINK, 0.20))
        ctx.fillStyle = wash; ctx.fillRect(0, 0, W, H)
        const inner = Math.min(W, H) * (0.32 - beat * 0.05)
        const outer = Math.max(W, H) * 0.88
        const fr = ctx.createRadialGradient(cx, cy, inner, cx, cy, outer)
        fr.addColorStop(0, rgba(PINK, 0))
        fr.addColorStop(0.6, rgba(PINK, 0.12 + beat * 0.10))
        fr.addColorStop(1, rgba(PINK, 0.38 + beat * 0.22))
        ctx.fillStyle = fr; ctx.fillRect(0, 0, W, H)
      }
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
      <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '6rem', color: '#8a2333', lineHeight: 1 }}>404</p>
      <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '18.4px', fontWeight: 300, color: '#8a2333' }}>This page doesn't exist.</p>
      <a href="/" style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#ffffff', background: '#8a2333', padding: '1rem 2.5rem', textDecoration: 'none' }}>← Home</a>
    </div>
  ),
  component: RootComponent,
})

function RootComponent() {
  const pathname = useRouterState({ select: (s) => s.location.pathname })
  const variant: 'home' | 'inner' = pathname === '/' ? 'home' : 'inner'

  useEffect(() => {
    document.body.classList.add('flash-triggered')
    document.body.classList.add('nav-lit')
  }, [])

  // Keep the body page-marker in sync on every navigation (reliable)
  useEffect(() => {
    document.body.setAttribute('data-page', variant)
  }, [variant])

  return (
    <>
      <Heartbeat variant={variant} />
      <Outlet />
    </>
  )
}
