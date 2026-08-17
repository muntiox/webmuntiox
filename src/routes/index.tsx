import { createFileRoute, Link } from '@tanstack/react-router'
import { useEffect, useRef, useState } from 'react'

export const Route = createFileRoute('/')(
  { component: Portfolio }
)

// ── Keyboard click ───────────────────────────────────────────────────
function playKeyClick() {}

// ── Correction animation ─────────────────────────────────────────────
// Ahora arranca sola al montar (ya no depende del click/flash inicial)
type CorrectionPhase = 'idle' | 'typing-wrong' | 'striking' | 'erasing' | 'typing-only' | 'done'
function CorrectionOnly() {
  const [phase, setPhase] = useState<CorrectionPhase>('idle')
  const [wrongText, setWrongText] = useState('')
  const [onlyText, setOnlyText] = useState('')
  const wrong = 'for brands'; const only = 'only for brands'

  useEffect(() => {
    const t = setTimeout(() => setPhase('typing-wrong'), 600)
    return () => clearTimeout(t)
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
    return () => { clearTimeout(timer); window.removeEventListener('resize', resize) }
  }, [])
  return <canvas ref={canvasRef} className="mxo-lightning" aria-hidden />
}

// ── Marquee ──────────────────────────────────────────────────────────
function Marquee() {
  const items = ['Creative Strategy', '×', 'Content Creation', '×', 'Digital Strategy', '×', 'Brand Identity', '×', 'Community Building', '×', 'MUNTIOX', '×', 'Ethical Brands', '×', 'Real Impact', '×']
  const doubled = [...items, ...items]
  return (
    <div className="mxo-marquee-outer">
      <div className="mxo-marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className="mxo-marquee-item">{item}</span>
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
    { href: '/projects', label: 'Projects' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ]
  return (
    <>
      <button onClick={() => setOpen(true)} aria-label="Open menu"
        style={{ position: 'fixed', top: '1.4rem', right: '1.8rem', zIndex: 100,
          background: 'none', border: 'none', cursor: 'pointer',
          display: 'flex', flexDirection: 'column', gap: '5px', padding: '8px' }}>
        <span style={{ display: 'block', width: '24px', height: '1.5px', background: '#F2EEE7' }}/>
        <span style={{ display: 'block', width: '24px', height: '1.5px', background: '#F2EEE7' }}/>
        <span style={{ display: 'block', width: '24px', height: '1.5px', background: '#F2EEE7' }}/>
      </button>
      {open && (
        <div className="mxo-fullnav" onClick={() => setOpen(false)}>
          <button className="mxo-fullnav-close" onClick={() => setOpen(false)} aria-label="Close">&#x2715;</button>
          <div className="mxo-fullnav-links" onClick={e => e.stopPropagation()}>
            {links.map((l, i) => (
              <a key={l.href} href={l.href} className="mxo-fullnav-link" onClick={() => setOpen(false)}
                style={{ animationDelay: `${i * 0.08}s` }}>
                <span className="mxo-fullnav-num">0{i + 1}</span>
                {l.label}
              </a>
            ))}
          </div>
          <p className="mxo-fullnav-bottom">Itxaso Muntión — Content Creator &amp; Digital Strategist</p>
        </div>
      )}
    </>
  )
}

// ── Hero (sin intro de click / flash) ──────────────────────────────────
function Hero() {
  const [ready, setReady] = useState(false)
  useEffect(() => {
    // Pequeño delay solo para permitir que la animación de entrada (Reveal-style)
    // se vea suave; el contenido ya está en el DOM desde el primer render.
    const t = setTimeout(() => setReady(true), 30)
    return () => clearTimeout(t)
  }, [])

  return (
    <section className="mxo-hero">
      <div className="mxo-hero-glow" />
      <div className="mxo-hero-content" style={{ opacity: ready ? 1 : 0, transition: 'opacity 0.5s ease' }}>
        <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.95rem', fontWeight: 300, letterSpacing: '0.2em', color: 'rgba(237,234,226,0.45)', marginBottom: '1.2rem' }}>MUNTIOX — Itxaso Muntión</p>
        <p className="mxo-statement">
          Creative strategy<br/>
          <CorrectionOnly /><br/>
          that want to make<br/>
          a difference
        </p>
        <p className="mxo-tagline">
          <span className="highlighter">
            <span className="highlighter__text">Until &apos;responsible brand&apos; becomes redundant.</span>
          </span>
        </p>
        <div style={{ display: 'flex', gap: '1rem', marginTop: '2.5rem', flexWrap: 'wrap' }}>
          <a href="/projects" style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#F2EEE7', background: '#C86A2A', padding: '1rem 2.5rem', textDecoration: 'none' }}>Projects</a>
          <a href="/contact" style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#F2EEE7', background: '#C86A2A', padding: '1rem 2.5rem', textDecoration: 'none' }}>Let&apos;s talk</a>
        </div>
      </div>
    </section>
  )
}

// ── Reveal on scroll ─────────────────────────────────────────────────
function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.15 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(40px)',
      transition: `opacity 0.9s ease ${delay}s, transform 0.9s ease ${delay}s`,
    }}>
      {children}
    </div>
  )
}

function Portfolio() {
  return (
    <>
      <ElectricCursor/>
      <Grain/>
      <Nav/>
      <main>
        <Hero/>
        <div style={{ position: 'relative', zIndex: 2, borderTop: '1px solid rgba(242,238,231,0.08)', borderBottom: '1px solid rgba(242,238,231,0.08)', overflow: 'hidden', padding: '1rem 0' }}>
          <div style={{ display: 'flex', width: 'max-content', animation: 'ticker 18s linear infinite' }}>
            {Array.from({length: 6}).map((_, i) => (
              <span key={i} style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.62rem', fontWeight: 600, letterSpacing: '0.38em', textTransform: 'uppercase', color: 'rgba(242,238,231,0.35)', padding: '0 4rem', whiteSpace: 'nowrap' }}>
                Open to what&apos;s next
              </span>
            ))}
          </div>
        </div>
        <Reveal><div className="mxo-manifesto">
          <h2 className="mxo-manifesto-title">This is a Portfolio...<br/>but I&apos;m not looking to be chosen</h2>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '18.4px', fontWeight: 300, lineHeight: '34.96px', color: 'rgba(237,234,226,0.9)' }}>The main purpose of this website is simple: to showcase my work and convince people to choose me. But I also want to choose my next job. Does that sound unusual?</p>
          <p className="mxo-manifesto-body">I don&apos;t believe in working with everyone. I believe in working with the right people. The projects we choose become part of who we are. They shape our perspective, influence our decisions, and define the impact we leave behind.</p>
          <p className="mxo-manifesto-body">That&apos;s why I choose to collaborate with brands and organisations whose values align with my own, or with those that genuinely want to make a more positive impact. Not because they&apos;re perfect, but because meaningful work starts with the willingness to grow.</p>
          <p className="mxo-manifesto-body">Every project is an opportunity to leave the world a little better than we found it. That&apos;s the kind of work I want to be part of.</p>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '18.4px', fontWeight: 300, lineHeight: '34.96px', color: '#edeae2' }}>And that&apos;s why I want to choose you, too.</p>
        </div></Reveal>
        <Reveal><div className="mxo-skills">
          <p className="mxo-eyebrow">What I do</p>
          <div style={{ display: 'flex', alignItems: 'stretch', gap: '1.5rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
            <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(3.5rem, 8vw, 6rem)', fontWeight: 400, color: '#edeae2', lineHeight: 0.85, letterSpacing: '0.02em' }}>6+</span>
            <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(1.7rem, 3.4vw, 2.7rem)', fontWeight: 400, color: '#edeae2', lineHeight: 0.92, letterSpacing: '0.03em', display: 'block' }}>years across audiovisual content<br/>&amp; digital strategy</span>
          </div>
          <div className="mxo-skills-groups">
            <div className="mxo-skills-group">
              {['Content Strategy','Brand Identity','Digital Communities','Social Campaigns'].map(s => (
                <span key={s} className="mxo-skill-tag">{s}</span>
              ))}
            </div>
            <div className="mxo-skills-group">
              {['Creative Direction','Storytelling','Photo & Video Content','Content Creation'].map(s => (
                <span key={s} className="mxo-skill-tag">{s}</span>
              ))}
            </div>
          </div>
        </div></Reveal>
        <Reveal><div className="mxo-featured">
          <p className="mxo-eyebrow">Featured</p>
          <div className="mxo-featured-grid">
            <a href="/work/rccoon" className="mxo-featured-item">
              <img src="/photos/rccoon-logo.png" alt="RCCOON" style={{ width: '80px', height: '80px', objectFit: 'contain', display: 'block', marginBottom: '1.2rem' }} />
              <h3 className="mxo-featured-title">RCCOON</h3>
              <p className="mxo-featured-sub">Citizen Action · Digital Strategy · Community · 2020—2026</p>
              <span className="mxo-featured-cta">Come snoop around →</span>
            </a>
            <a href="/work/commo2" onClick={e => { e.preventDefault(); window.location.href='/work/commo2' }} className="mxo-featured-item">
              <img src="/photos/commo2-logo.png" alt="Commo2" style={{ width: '80px', height: '80px', objectFit: 'contain', display: 'block', marginBottom: '1.2rem' }} />
              <h3 className="mxo-featured-title">Commo2</h3>
              <p className="mxo-featured-sub">Strategy · Branding · Digital Ecosystem · 2024—2025</p>
              <span className="mxo-featured-cta">Move in →</span>
            </a>
          </div>
        </div></Reveal>
        <Reveal><div style={{ position: 'relative', zIndex: 2, borderTop: '1px solid rgba(237,234,226,0.08)', paddingTop: '5rem' }}>
          <p className="mxo-eyebrow" style={{ display: 'block', paddingLeft: 'clamp(1.5rem, 5vw, 5rem)', marginBottom: '2rem' }}>Latest writing</p>
          <a href="/blog"
            style={{ textDecoration: 'none', color: 'inherit', display: 'grid', gridTemplateColumns: '40% 1fr', alignItems: 'stretch', background: 'rgba(7,7,9,0.55)', width: '100%', transition: 'background 0.3s ease, box-shadow 0.3s ease' }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(200,108,46,0.06)'; e.currentTarget.style.boxShadow = '0 0 24px rgba(200,108,46,0.15)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(7,7,9,0.55)'; e.currentTarget.style.boxShadow = 'none' }}>
            <img src="/photos/who-am-i/activist-me.jpg" alt="" style={{ width: '100%', height: '100%', minHeight: '420px', objectFit: 'cover', display: 'block', filter: 'brightness(0.9) contrast(1.05)' }} />
            <div style={{ padding: '4rem clamp(2rem, 6vw, 6rem)' }}>
              <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(237,234,226,0.4)', marginBottom: '1rem' }}>Essay · 13/08/26</p>
              <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.5rem, 5vw, 5rem)', fontWeight: 400, color: '#edeae2', lineHeight: 1.0, letterSpacing: '0.02em', marginBottom: '1.5rem' }}>Make your time count</h3>
              <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '18.4px', fontWeight: 300, color: 'rgba(237,234,226,0.72)', lineHeight: '34.96px', marginBottom: '2rem' }}>We are going to spend a huge portion of our lives working. So why not point that time at something that actually matters?</p>
              <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(237,234,226,0.4)' }}>Read →</span>
            </div>
          </a>
        </div></Reveal>
      </main>
      <footer className="mxo-footer">
        <p className="mxo-footer-copy">© {new Date().getFullYear()} MUNTIOX — Itxaso Muntión</p>
      </footer>
    </>
  )
}
