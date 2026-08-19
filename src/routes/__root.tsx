import { Outlet, createRootRoute, useRouterState } from '@tanstack/react-router'
import { useEffect, useRef } from 'react'
import '../styles.css'

// ── Heartbeat background — fixed behind the whole site ────────────────
// Home ('/') = garnet core beating on black.
// Inner pages = white with a garnet ring + organic veins where blood flows on each beat.
function Heartbeat({ variant }: { variant: 'home' | 'inner' }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const variantRef = useRef(variant)
  useEffect(() => { variantRef.current = variant }, [variant])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    let W = 0, H = 0, DPR = 1

    const GARNET = [74, 12, 22], GARNET_HOME = [138, 35, 51], GARNET2 = [165, 50, 66], WINE = [74, 14, 26]
    const BLOOD = [150, 28, 42]
    const rgba = (c: number[], a: number) => `rgba(${c[0]},${c[1]},${c[2]},${a < 0 ? 0 : a})`
    const heartbeat = (t: number) => {
      const cy = t % 1
      const lub = Math.exp(-Math.pow((cy - 0.12) / 0.05, 2))
      const dub = Math.exp(-Math.pow((cy - 0.30) / 0.06, 2)) * 0.7
      return lub + dub
    }
    const rnd = (s: number) => { const x = Math.sin(s * 127.1) * 43758.5453; return x - Math.floor(x) }

    type Vein = { pts: { x: number, y: number }[], widths: number[], cum: number[], len: number, phase: number }
    let veins: Vein[] = []
    const VEIN_COUNT = 26, FLOW = 0.6, BLOOD_A = 0.9

    const buildVeins = () => {
      veins = []
      if (!W || !H) return
      const cx = W * 0.5, cy = H * 0.5
      const maxR = Math.sqrt(W * W + H * H) * 0.5
      let seed = 1
      for (let i = 0; i < VEIN_COUNT; i++) {
        const ang0 = (i / VEIN_COUNT) * Math.PI * 2 + (rnd(seed++) - 0.5) * 0.5
        const startR = maxR * (0.98 + rnd(seed++) * 0.04)
        let x = cx + Math.cos(ang0) * startR, y = cy + Math.sin(ang0) * startR
        let dir = Math.atan2(cy - y, cx - x) + (rnd(seed++) - 0.5) * 0.6
        const segs = 18 + Math.floor(rnd(seed++) * 14)
        const step = (startR - maxR * (0.42 + rnd(seed++) * 0.22)) / segs
        const pts = [{ x, y }]
        let width = 1.2 + rnd(seed++) * 1.6
        const widths = [width]
        for (let s = 0; s < segs; s++) {
          dir += (rnd(seed++) - 0.5) * 0.7
          dir += Math.atan2(cy - y, cx - x) * 0.02
          x += Math.cos(dir) * step; y += Math.sin(dir) * step
          width *= 0.94
          pts.push({ x, y }); widths.push(Math.max(0.3, width))
        }
        let len = 0; const cum = [0]
        for (let k = 1; k < pts.length; k++) { len += Math.hypot(pts[k].x - pts[k - 1].x, pts[k].y - pts[k - 1].y); cum.push(len) }
        veins.push({ pts, widths, cum, len, phase: rnd(seed++) })
        if (rnd(seed++) > 0.4) {
          const bi = Math.floor(pts.length * 0.4 + rnd(seed++) * pts.length * 0.3)
          const bp = pts[bi]
          let bx = bp.x, by = bp.y
          let bdir = Math.atan2(cy - by, cx - bx) + (rnd(seed++) - 0.5) * 1.4
          const bsegs = 8 + Math.floor(rnd(seed++) * 8)
          let bw = widths[bi] * 0.7
          const bpts = [{ x: bx, y: by }], bwidths = [bw]
          for (let s = 0; s < bsegs; s++) {
            bdir += (rnd(seed++) - 0.5) * 0.8
            bx += Math.cos(bdir) * step * 0.9; by += Math.sin(bdir) * step * 0.9
            bw *= 0.9; bpts.push({ x: bx, y: by }); bwidths.push(Math.max(0.3, bw))
          }
          let bl = 0; const bcum = [0]
          for (let k = 1; k < bpts.length; k++) { bl += Math.hypot(bpts[k].x - bpts[k - 1].x, bpts[k].y - bpts[k - 1].y); bcum.push(bl) }
          veins.push({ pts: bpts, widths: bwidths, cum: bcum, len: bl, phase: rnd(seed++) })
        }
      }
    }

    const resize = () => {
      DPR = Math.min(window.devicePixelRatio || 1, 2)
      W = window.innerWidth; H = window.innerHeight
      canvas.width = W * DPR; canvas.height = H * DPR
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0)
      buildVeins()
    }
    resize()
    window.addEventListener('resize', resize)

    const drawVein = (v: Vein, beat: number, flowHead: number) => {
      ctx.beginPath()
      for (let k = 0; k < v.pts.length; k++) { const p = v.pts[k]; if (k === 0) ctx.moveTo(p.x, p.y); else ctx.lineTo(p.x, p.y) }
      ctx.strokeStyle = rgba([170, 50, 66], 0.18 + beat * 0.08)
      ctx.lineWidth = 1.1; ctx.lineCap = 'round'; ctx.lineJoin = 'round'; ctx.stroke()
      if (flowHead <= 0) return
      const headLen = v.len * flowHead
      const tail = v.len * 0.35
      for (let k = 1; k < v.pts.length; k++) {
        const dist = headLen - v.cum[k]
        if (dist >= 0 && dist <= tail) {
          const a = (1 - dist / tail) * BLOOD_A * (0.5 + beat * 0.6)
          ctx.beginPath()
          ctx.moveTo(v.pts[k - 1].x, v.pts[k - 1].y)
          ctx.lineTo(v.pts[k].x, v.pts[k].y)
          ctx.strokeStyle = rgba(BLOOD, a)
          ctx.lineWidth = v.widths[k] + 0.6
          ctx.lineCap = 'round'; ctx.stroke()
        }
      }
    }

    let t = 0, lastCycle = 0, flow = 0, raf = 0
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
        g.addColorStop(0.35, rgba(GARNET_HOME, 0.18 + beat * 0.12))
        g.addColorStop(0.7, rgba(WINE, 0.10))
        g.addColorStop(1, rgba(WINE, 0))
        ctx.fillStyle = g; ctx.fillRect(0, 0, W, H)
      } else {
        // white base + garnet ring + flowing veins
        const cycle = (t * 0.9) % 1
        if (lastCycle > cycle) flow = 0
        lastCycle = cycle
        const target = Math.min(1, cycle / 0.5)
        flow += (target - flow) * 0.2

        ctx.fillStyle = '#2a0c12'; ctx.fillRect(0, 0, W, H)
        const outer = Math.sqrt(W * W + H * H) * 0.75
        const start = 0.28 * (1 - beat * 0.06)
        const RING = [150, 40, 55]
        const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, outer)
        g.addColorStop(0, rgba(RING, 0))
        g.addColorStop(Math.max(0.01, start), rgba(RING, 0))
        g.addColorStop(Math.min(0.99, start + 0.14), rgba(RING, 0.10 + beat * 0.10))
        g.addColorStop(Math.min(0.99, start + 0.30), rgba(RING, 0.30 + beat * 0.16))
        g.addColorStop(Math.min(0.99, start + 0.48), rgba(RING, 0.55 + beat * 0.16))
        g.addColorStop(1, rgba([120, 25, 38], 0.75))
        ctx.fillStyle = g; ctx.fillRect(0, 0, W, H)

        for (let i = 0; i < veins.length; i++) {
          const v = veins[i]
          const localFlow = Math.max(0, Math.min(1, flow * 1.1 - v.phase * 0.15))
          drawVein(v, beat, localFlow)
        }
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
