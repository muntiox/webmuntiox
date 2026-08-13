import { createFileRoute, Link } from '@tanstack/react-router'
import { useEffect, useRef, useState } from 'react'

export const Route = createFileRoute('/')(
  { component: Portfolio }
)

// ── Keyboard click ───────────────────────────────────────────────────
function playKeyClick() {
  try {
    const kctx = new (window.AudioContext || (window as any).webkitAudioContext)()
    const buf = kctx.createBuffer(1, kctx.sampleRate * 0.04, kctx.sampleRate)
    const d = buf.getChannelData(0)
    for (let i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1) * Math.exp(-i / (kctx.sampleRate * 0.008))
    const src = kctx.createBufferSource(); src.buffer = buf
    const g = kctx.createGain(); g.gain.value = 0.18
    const f = kctx.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = 4500; f.Q.value = 0.8
    src.connect(f); f.connect(g); g.connect(kctx.destination); src.start()
  } catch(e) {}
}

// ── Correction animation ─────────────────────────────────────────────
type CorrectionPhase = 'idle' | 'typing-wrong' | 'striking' | 'erasing' | 'typing-only' | 'done'
function CorrectionOnly() {
  const [phase, setPhase] = useState<CorrectionPhase>('idle')
  const [wrongText, setWrongText] = useState('')
  const [onlyText, setOnlyText] = useState('')
  const wrong = 'for brands'; const only = 'only for brands'
  useEffect(() => {
    const start = () => setTimeout(() => setPhase('typing-wrong'), 600)
    // Already triggered (return visitor via sessionStorage)
    if (document.body.classList.contains('flash-triggered')) { start(); return }
    // Wait for flash trigger
    const obs = new MutationObserver(() => {
      if (document.body.classList.contains('flash-triggered')) { obs.disconnect(); start() }
    })
    obs.observe(document.body, { attributes: true, attributeFilter: ['class'] })
    return () => obs.disconnect()
  }, [])
  useEffect(() => {
    if (phase === 'typing-wrong') {
      let i = 0
      const iv = setInterval(() => { i++; setWrongText(wrong.slice(0, i)); playKeyClick(); if (i >= wrong.length) { clearInterval(iv); setTimeout(() => setPhase('striking'), 500) } }, 75)
      return () => clearInterval(iv)
    }
    if (phase === 'striking') { setTimeout(() => setPhase('erasing'), 800) }
    if (phase === 'erasing') {
      let i = wrong.length
      const iv = setInterval(() => { i--; setWrongText(wrong.slice(0, i)); playKeyClick(); if (i <= 0) { clearInterval(iv); setWrongText(''); setTimeout(() => setPhase('typing-only'), 150) } }, 40)
      return () => clearInterval(iv)
    }
    if (phase === 'typing-only') {
      let i = 0
      const iv = setInterval(() => { i++; setOnlyText(only.slice(0, i)); playKeyClick(); if (i >= only.length) { clearInterval(iv); setTimeout(() => setPhase('done'), 200) } }, 70)
      return () => clearInterval(iv)
    }
  }, [phase])
  const showCursor = phase !== 'idle' && phase !== 'done'
  return (
    <span className="correction-wrapper">
      {phase !== 'idle' && (
        <>
          {phase !== 'typing-only' && phase !== 'done' && wrongText && <span className={phase === 'striking' ? 'correction-strike' : ''}>{wrongText}</span>}
          {(phase === 'typing-only' || phase === 'done') && onlyText && <span>{onlyText}</span>}
          {showCursor && <span className="correction-cursor" />}
        </>
      )}
    </span>
  )
}

// ── Grain ────────────────────────────────────────────────────────────
function Grain() {
  return (
    <svg className="mxo-grain" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <filter id="grain-f"><feTurbulence type="fractalNoise" baseFrequency="0.68" numOctaves="4" stitchTiles="stitch"/><feColorMatrix type="saturate" values="0"/></filter>
      <rect width="100%" height="100%" filter="url(#grain-f)"/>
    </svg>
  )
}

// ── Electric cursor ──────────────────────────────────────────────────
function ElectricCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const dot = dotRef.current; const ring = ringRef.current
    if (!dot || !ring) return
    let raf: number; let mx = -100, my = -100, rx = -100, ry = -100
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t
    const onMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY
      dot.style.left = mx + 'px'; dot.style.top = my + 'px'
      const t = e.target as HTMLElement
      ring.classList.toggle('mxo-cursor-ring--hover', !!(t.closest('a') || t.closest('button') || t.closest('[data-hover]')))
    }
    const animate = () => { rx = lerp(rx, mx, 0.1); ry = lerp(ry, my, 0.1); ring.style.left = rx + 'px'; ring.style.top = ry + 'px'; raf = requestAnimationFrame(animate) }
    document.addEventListener('mousemove', onMove)
    raf = requestAnimationFrame(animate)
    return () => { document.removeEventListener('mousemove', onMove); cancelAnimationFrame(raf) }
  }, [])
  return (
    <>
      <div ref={dotRef} className="mxo-cursor-dot" />
      <div ref={ringRef} className="mxo-cursor-ring" />
    </>
  )
}

// ── Lightning canvas ─────────────────────────────────────────────────
function Lightning() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    const canvas = canvasRef.current; if (!canvas) return
    const ctx = canvas.getContext('2d')!
    canvas.width = window.innerWidth; canvas.height = window.innerHeight
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight }
    window.addEventListener('resize', resize)

    function bolt(ctx: CanvasRenderingContext2D, x1: number, y1: number, x2: number, y2: number, roughness: number, depth: number) {
      if (depth === 0) {
        ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke()
        return
      }
      const mx = (x1 + x2) / 2 + (Math.random() - 0.5) * roughness
      const my = (y1 + y2) / 2 + (Math.random() - 0.5) * roughness * 0.3
      bolt(ctx, x1, y1, mx, my, roughness / 2, depth - 1)
      bolt(ctx, mx, my, x2, y2, roughness / 2, depth - 1)
      if (Math.random() < 0.3) {
        const bx = mx + (Math.random() - 0.5) * roughness
        const by = my + Math.random() * roughness
        ctx.globalAlpha = 0.3
        bolt(ctx, mx, my, bx, by, roughness / 3, depth - 2)
        ctx.globalAlpha = 1
      }
    }

    let raf: number
    let timer: ReturnType<typeof setTimeout>

    const flash = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const x = Math.random() * canvas.width
      ctx.strokeStyle = Math.random() > 0.5 ? 'rgba(139,0,255,0.85)' : 'rgba(0,200,255,0.75)'
      ctx.lineWidth = 1.5
      ctx.shadowBlur = 12
      ctx.shadowColor = ctx.strokeStyle
      bolt(ctx, x, 0, x + (Math.random() - 0.5) * 200, canvas.height * (0.4 + Math.random() * 0.5), 120, 7)
      ctx.shadowBlur = 0
      setTimeout(() => ctx.clearRect(0, 0, canvas.width, canvas.height), 80)
      timer = setTimeout(flash, 3000 + Math.random() * 8000)
    }
    timer = setTimeout(flash, 1500 + Math.random() * 3000)
    return () => { clearTimeout(timer); cancelAnimationFrame(raf); window.removeEventListener('resize', resize) }
  }, [])
  return <canvas ref={canvasRef} className="mxo-lightning" aria-hidden />
}

// ── Wave divider ─────────────────────────────────────────────────────
function Wave({ flip = false }: { flip?: boolean }) {
  return (
    <div className={`mxo-wave ${flip ? 'mxo-wave--flip' : ''}`}>
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,40 C180,80 360,0 540,40 C720,80 900,0 1080,40 C1260,80 1350,20 1440,40 L1440,80 L0,80 Z" fill="rgba(139,0,255,0.06)"/>
        <path d="M0,50 C200,20 400,70 600,50 C800,30 1000,70 1200,50 C1320,38 1380,55 1440,50" fill="none" stroke="rgba(139,0,255,0.25)" strokeWidth="1"/>
      </svg>
    </div>
  )
}

// ── Marquee ──────────────────────────────────────────────────────────
function Marquee() {
  const items = ['Creative Strategy','×','Content Creation','×','Digital Strategy','×','Brand Identity','×','Community Building','×','MUNTIOX','×','Ethical Brands','×','Real Impact','×']
  const doubled = [...items, ...items]
  return (
    <div className="mxo-marquee-outer">
      <div className="mxo-marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className="mxo-marquee-item">{item === '×' ? <span>×</span> : item}</span>
        ))}
      </div>
    </div>
  )
}

// ── Full-screen nav ──────────────────────────────────────────────────
function Nav() {
  const [open, setOpen] = useState(false)
  const links = [
    { href: '/purpose', label: 'Purpose' },
    { href: '/projects', label: 'Work' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ]
  return (
    <>
      <button onClick={() => setOpen(true)} aria-label="Open menu"
        style={{ position: 'fixed', top: '1.4rem', right: '1.8rem', zIndex: 100,
          background: 'none', border: 'none', cursor: 'pointer',
          display: 'flex', flexDirection: 'column', gap: '5px', padding: '8px' }}>
        <span style={{ display: 'block', width: '24px', height: '1.5px', background: '#ffffff' }}/>
        <span style={{ display: 'block', width: '24px', height: '1.5px', background: '#ffffff' }}/>
        <span style={{ display: 'block', width: '24px', height: '1.5px', background: '#ffffff' }}/>
      </button>

      {open && (
        <div className="mxo-fullnav" onClick={() => setOpen(false)}>
          <button className="mxo-fullnav-close" onClick={() => setOpen(false)} aria-label="Close">✕</button>
          <img src="/photos/mxo-neon.png" className="mxo-fullnav-bg" alt="" aria-hidden/>
          <div className="mxo-fullnav-links" onClick={e => e.stopPropagation()}>
            {links.map((l, i) => (
              <a key={l.href} href={l.href} className="mxo-fullnav-link" onClick={() => setOpen(false)}
                style={{ animationDelay: `${i * 0.08}s` }}>
                <span className="mxo-fullnav-num">0{i + 1}</span>
                {l.label}
              </a>
            ))}
          </div>
          <p className="mxo-fullnav-bottom">Itxaso Muntión — Content Creator & Digital Strategist</p>
        </div>
      )}
    </>
  )
}

// ── Hero ─────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="mxo-hero">
      {/* Background photos */}
      <video className="mxo-hero-video" autoPlay muted loop playsInline preload="none">
        <source src="/videos/hero.mp4" type="video/mp4"/>
      </video>
      <video className="mxo-hero-clouds" autoPlay muted loop playsInline preload="none">
        <source src="/videos/clouds.mp4" type="video/mp4"/>
      </video>
      <video className="mxo-hero-video" autoPlay muted loop playsInline preload="none">
        <source src="/videos/hero.mp4" type="video/mp4"/>
      </video>
      <video className="mxo-hero-clouds" autoPlay muted loop playsInline preload="none">
        <source src="/videos/clouds.mp4" type="video/mp4"/>
      </video>
      {/* Electric glow */}
      <div className="mxo-hero-glow" />

      <div className="mxo-hero-content pre-flash-hide">
        <p className="mxo-statement">
          Creative strategy <CorrectionOnly /><br/>
          that want to make a difference
        </p>
        <p className="mxo-tagline">
          <span className="highlighter">
            <span className="highlighter__text">Until 'responsible brand' becomes redundant.</span>
          </span>
        </p>
      </div>
    </section>
  )
}

// ── Portfolio root ───────────────────────────────────────────────────
function Portfolio() {
  return (
    <>
      <ElectricCursor/>
      <Grain/>
      <Nav/>
      <main>
        <Hero/>
        <div className="pre-flash-hide">
        </div>
      </main>
        <Reveal><div style={{ position: 'relative', zIndex: 2, padding: '5rem clamp(1.5rem, 5vw, 5rem)', borderTop: '1px solid rgba(237,234,226,0.08)' }} className="pre-flash-hide">
          <p className="mxo-eyebrow">Latest writing</p>
          <a href="/blog" style={{ textDecoration: 'none', color: 'inherit', display: 'block', padding: '2.5rem', border: '1px solid rgba(237,234,226,0.12)', background: 'rgba(7,7,9,0.55)', maxWidth: '720px', transition: 'border-color 0.3s ease, background 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#c86c2e'; e.currentTarget.style.background = 'rgba(200,108,46,0.08)'; e.currentTarget.style.boxShadow = '0 0 24px rgba(200,108,46,0.2)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(237,234,226,0.12)'; e.currentTarget.style.background = 'rgba(7,7,9,0.55)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)' }}>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(237,234,226,0.4)', marginBottom: '1rem' }}>Essay · 13/08/26</p>
            <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '2.5rem', fontWeight: 400, color: '#edeae2', lineHeight: 1.1, letterSpacing: '0.02em', marginBottom: '1rem' }}>Make your time count</h3>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '18.4px', fontWeight: 300, color: 'rgba(237,234,226,0.72)', lineHeight: '34.96px', maxWidth: '600px', marginBottom: '1.5rem' }}>We are going to spend a huge portion of our lives working. So why not point that time at something that actually matters?</p>
            <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(237,234,226,0.4)' }}>Read →</span>
          </a>
        </div></Reveal>
      <footer className="mxo-footer pre-flash-hide">
        <p className="mxo-footer-copy">© {new Date().getFullYear()} Itxaso Muntión — MUNTIOX</p>
      </footer>
    </>
  )
}
