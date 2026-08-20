import { createFileRoute, Link } from '@tanstack/react-router'
import { useEffect, useRef, useState } from 'react'
export const Route = createFileRoute('/')(
  { component: Portfolio }
)
// ── Keyboard click ───────────────────────────────────────────────────
function playKeyClick() {}
// ── Correction animation ─────────────────────────────────────────────
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
  // "only" (the first word) renders in the brand's pink; the rest stays white
  const onlyWord = 'only'
  const onlyPink = onlyText.slice(0, onlyWord.length)
  const onlyRest = onlyText.slice(onlyWord.length)
  return (
    <span className="correction-wrapper">
      {phase !== 'idle' && (
        <>
          {phase !== 'typing-only' && phase !== 'done' && wrongText && <span className={phase === 'striking' ? 'correction-strike' : ''}>{wrongText}</span>}
          {(phase === 'typing-only' || phase === 'done') && onlyText && (
            <>
              <span className="correction-only">{onlyPink}</span>
              {onlyRest && <span>{onlyRest}</span>}
            </>
          )}
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
// ── Hero con cabecera de foto a todo el ancho ─────────────────────────
function Hero() {
  const [ready, setReady] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setReady(true), 30)
    return () => clearTimeout(t)
  }, [])
  return (
    <section className="mxo-hero" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-start', padding: 0, overflow: 'hidden' }}>
      {/* Foto de fondo a todo el ancho */}
      <img src="/photos/index-fondo.jpg" alt="MUNTIOX" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block', zIndex: 0 }} />
      {/* Degradado oscuro para que el texto se lea encima */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(5,5,6,0.35) 0%, rgba(5,5,6,0.15) 35%, rgba(5,5,6,0.9) 100%)', zIndex: 1 }} />
      {/* Texto del hero, ENCIMA de la foto */}
      <div className="mxo-hero-content" style={{ position: 'relative', zIndex: 2, opacity: ready ? 1 : 0, transition: 'opacity 0.5s ease', padding: '3rem clamp(1.5rem, 4vw, 4rem) 5rem', maxWidth: '900px', marginLeft: 0, marginRight: 'auto', textAlign: 'left', width: '100%' }}>
        {/* The "MUNTIOX — Itxaso Muntión" label now lives in __root.tsx as a
            fixed top-left badge (BrandBadge) so it stays put through scroll. */}
        <p className="mxo-statement" style={{ marginTop: '2.2rem' }}>
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
          <a href="/projects" style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#ffffff', background: '#d9737a', padding: '1rem 2.5rem', textDecoration: 'none', minWidth: '190px', textAlign: 'center', display: 'inline-block' }}>Projects</a>
          <a href="/contact" style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#ffffff', background: '#d9737a', padding: '1rem 2.5rem', textDecoration: 'none', minWidth: '190px', textAlign: 'center', display: 'inline-block' }}>Let&apos;s talk</a>
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
        <Reveal><div className="mxo-video-section">
          <video src="/videos/pruebavideoindex2.mp4" autoPlay muted loop playsInline aria-hidden="true" />
          <div className="mxo-video-overlay">
            {['Purposeful.', 'Honest.', 'Alive.', 'Unmistakably yours.'].map(label => (
              <div key={label} className="mxo-video-box"><span>{label}</span></div>
            ))}
          </div>
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
        <Reveal><section className="mxo-about-me">
          <div className="mxo-about-me-photo">
            <img src="/photos/me-index.jpg" alt="Itxaso Muntión" />
          </div>
          <div className="mxo-about-me-text">
            <p className="mxo-eyebrow">Not the LinkedIn version</p>
            <h2 className="mxo-about-me-title">Definitely not conventional.</h2>
            <p className="mxo-about-me-body">My path hasn&apos;t been a straight line, and I stopped apologising for that a while ago. I get curious about too many things at once — photography, strategy, the way a community forms around an idea — so instead of picking one lane, I built a way of working that moves between all of them.</p>
            <p className="mxo-about-me-body">I don&apos;t wait to feel ready before I start something. Most of what actually matters in my work, I learned by doing it first and understanding it after. When something becomes part of my life, I find a way to make it mine — even when, at the start, it looks impossible.</p>
            <p className="mxo-about-me-body">I&apos;d rather understand something properly than have a fast opinion about it. I care about people as much as I care about the work, probably more — and I still believe, stubbornly, that a good story can move something real.</p>
            <p className="mxo-about-me-closing">I don&apos;t wait for the right opportunity. I create it.</p>
            <p className="mxo-about-me-aside">Also: vegan, curious, usually mid-idea.</p>
          </div>
        </section></Reveal>
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
        <Reveal><div className="mxo-latest-post" style={{ position: 'relative', zIndex: 2, borderTop: '1px solid rgba(237,234,226,0.08)', paddingTop: '5rem' }}>
          <p className="mxo-eyebrow" style={{ display: 'block', paddingLeft: 'clamp(1.5rem, 5vw, 5rem)', marginBottom: '2rem' }}>Latest writing</p>
          <a href="/blog" className="mxo-latest-post-link"
            style={{ textDecoration: 'none', color: 'inherit', display: 'grid', gridTemplateColumns: '40% 1fr', alignItems: 'stretch', background: 'rgba(7,7,9,0.55)', border: '1px solid rgba(237,234,226,0.08)', width: '100%' }}>
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
    </>
  )
}
