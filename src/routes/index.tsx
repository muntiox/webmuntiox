import { createFileRoute, Link } from '@tanstack/react-router'
import { useEffect, useRef, useState } from 'react'
import { markClueFound } from '../lib/clues'
import HeartbeatSound from '../components/HeartbeatSound'
import { useLanguage } from '../lib/i18n'
import { usePageMeta } from '../lib/usePageMeta'
import LanguageSwitcher from '../components/LanguageSwitcher'
export const Route = createFileRoute('/')(
  { component: Portfolio }
)
// ── Home page copy — English + Spanish. Every other language keeps
// falling back to English until it gets its own entry here.
const copy = {
  en: {
    metaTitle: 'MUNTIOX — Itxaso Muntión | Creative Strategy for Brands That Want to Change the World',
    metaDescription: 'Content creator and digital strategist helping conscious brands and organisations craft messages that inspire, transform and connect.',
    nav: { purpose: 'Purpose', projects: 'Projects', blog: 'Blog', contact: 'Contact', openMenu: 'Open menu', close: 'Close', bottom: 'Itxaso Muntión — Content Creator & Digital Strategist' },
    correction: { wrong: 'for brands', only: 'only for brands', onlyWord: 'only' },
    hero: {
      line1: 'Creative strategy',
      line3: 'that want to make',
      line4: 'a difference',
      tagline: "Until 'responsible brand' becomes redundant.",
      ctaProjects: 'Projects',
      ctaContact: "Let's talk",
    },
    ticker: "Open to what's next",
    manifesto: {
      title1: 'This is a Portfolio...',
      title2: "but I'm not looking to be chosen",
      body1: 'The main purpose of this website is simple: to showcase my work and convince people to choose me. But I also want to choose my next job. Does that sound unusual?',
      body2: "I don't believe in working with everyone. I believe in working with the right people. The projects we choose become part of who we are. They shape our perspective, influence our decisions, and define the impact we leave behind.",
      body3: "That's why I choose to collaborate with brands and organisations whose values align with my own, or with those that genuinely want to make a more positive impact. Not because they're perfect, but because meaningful work starts with the willingness to grow.",
      body4: "Every project is an opportunity to leave the world a little better than we found it. That's the kind of work I want to be part of.",
      body5: "And that's why I want to choose you, too.",
    },
    video: {
      eyebrow: 'The kind of work I dream about',
      aside: "(though I'm open to what life teaches me)",
      boxes: [
        { title: 'Ethical brands, done right.', body: 'Ethical, lifestyle projects that deserve a voice as strong as their values.' },
        { title: 'Travel with a conscience.', body: 'Responsible agencies and conscious stays — content that moves people to go, gently. I care about travelling quietly, and wish travel could always be this ethical.' },
        { title: 'People with something to say.', body: 'Helping changemakers and quiet disruptors get seen, and heard.' },
        { title: 'Animal justice, non-negotiable.', body: 'NGOs and grassroots organisations fighting for the voiceless. Not an add-on to an ethics brief — a cause I show up for fully.' },
        { title: 'A planet worth defending.', body: 'Environmental NGOs and organisations doing the work the planet actually needs — content and strategy for people fighting for it.' },
      ],
    },
    skills: {
      eyebrow: 'What I do',
      years: 'years across audiovisual content',
      yearsLine2: '& digital strategy',
      groups: [
        ['Content Strategy', 'Brand Identity', 'Digital Communities', 'Social Campaigns'],
        ['Creative Direction', 'Storytelling', 'Photo & Video Content', 'Content Creation'],
      ],
    },
    about: {
      eyebrow: 'Not the LinkedIn version',
      title: 'Not exactly according to plan.',
      copyPre: "A few years ago I decided to run, badly, with no real reason to keep going except that I'd started. Turns out that's how I work: once something becomes part of my life, I don't do it by halves. I don't wait to feel ready. I ask the obvious question, get it wrong, ",
      copyStrong: 'try again, try again and try again',
      copyPost: ", and somewhere in that mess, I prove to myself I can. We're never ready, and at the same time, we always are. I'm not the best, and at the same time, I for surely am.",
      closing: "I don't wait for the right opportunity. I create it.",
    },
    featured: {
      eyebrow: 'Featured',
      rccoonSub: 'Citizen Action · Digital Strategy · Community · 2020—2026',
      rccoonCta: 'Come snoop around →',
      commo2Sub: 'Strategy · Branding · Digital Ecosystem · 2024—2025',
      commo2Cta: 'Move in →',
      ctaEyebrow: 'Not a project. Not yet.',
      ctaTitle: 'Something you and I could build.',
      ctaSub: "The best work doesn't always start as a brief — sometimes it starts with two people who see the world the same way. If you've got an idea, and values to match, I'd love to hear it. This could be the next one.",
      ctaLink: 'Come find me →',
    },
    latest: {
      eyebrow: 'Latest writing',
      essay: 'Essay · 13/08/26',
      postTitle: 'Make your time count',
      postExcerpt: 'We are going to spend a huge portion of our lives working. So why not point that time at something that actually matters?',
      read: 'Read →',
    },
  },
  es: {
    metaTitle: 'MUNTIOX — Itxaso Muntión | Estrategia Creativa para Marcas que Quieren Cambiar el Mundo',
    metaDescription: 'Creadora de contenido y estratega digital que ayuda a marcas y organizaciones conscientes a crear mensajes que inspiran, transforman y conectan.',
    nav: { purpose: 'Propósito', projects: 'Proyectos', blog: 'Blog', contact: 'Contacto', openMenu: 'Abrir menú', close: 'Cerrar', bottom: 'Itxaso Muntión — Creadora de Contenido y Estratega Digital' },
    correction: { wrong: 'para marcas', only: 'solo para marcas', onlyWord: 'solo' },
    hero: {
      line1: 'Estrategia creativa',
      line3: 'que quieren marcar',
      line4: 'la diferencia',
      tagline: "Hasta que 'marca responsable' sea redundante.",
      ctaProjects: 'Proyectos',
      ctaContact: 'Hablemos',
    },
    ticker: 'Abierta a lo que viene',
    manifesto: {
      title1: 'Esto es un Portfolio...',
      title2: 'pero no busco que me elijan',
      body1: 'El propósito principal de esta web es sencillo: mostrar mi trabajo y convencerte de que me elijas. Pero yo también quiero elegir mi próximo trabajo. ¿Suena raro?',
      body2: 'No creo en trabajar con cualquiera. Creo en trabajar con las personas adecuadas. Los proyectos que elegimos forman parte de quiénes somos. Moldean nuestra perspectiva, influyen en nuestras decisiones y definen el impacto que dejamos.',
      body3: 'Por eso elijo colaborar con marcas y organizaciones cuyos valores se alinean con los míos, o con aquellas que realmente quieren generar un impacto más positivo. No porque sean perfectas, sino porque el trabajo con sentido empieza con la voluntad de crecer.',
      body4: 'Cada proyecto es una oportunidad de dejar el mundo un poco mejor de como lo encontramos. Ese es el tipo de trabajo del que quiero formar parte.',
      body5: 'Y por eso yo también quiero elegirte a ti.',
    },
    video: {
      eyebrow: 'El tipo de trabajo con el que sueño',
      aside: '(aunque estoy abierta a lo que la vida me enseñe)',
      boxes: [
        { title: 'Marcas éticas, bien hechas.', body: 'Proyectos de estilo de vida y ética que merecen una voz tan fuerte como sus valores.' },
        { title: 'Viajar con conciencia.', body: 'Agencias responsables y alojamientos conscientes: contenido que anima a viajar, con suavidad. Me importa viajar sin dejar huella, y ojalá viajar fuera siempre así de ético.' },
        { title: 'Personas con algo que decir.', body: 'Ayudo a quienes impulsan el cambio y a quienes remueven las cosas en silencio a que se les vea y se les escuche.' },
        { title: 'Justicia animal, innegociable.', body: 'ONGs y organizaciones de base que luchan por quienes no tienen voz. No es un añadido a un brief ético: es una causa a la que me entrego por completo.' },
        { title: 'Un planeta que merece la pena defender.', body: 'ONGs y organizaciones ambientales que hacen el trabajo que el planeta realmente necesita: contenido y estrategia para quienes luchan por él.' },
      ],
    },
    skills: {
      eyebrow: 'A qué me dedico',
      years: 'años entre contenido audiovisual',
      yearsLine2: 'y estrategia digital',
      groups: [
        ['Estrategia de Contenido', 'Identidad de Marca', 'Comunidades Digitales', 'Campañas Sociales'],
        ['Dirección Creativa', 'Storytelling', 'Contenido Foto y Vídeo', 'Creación de Contenido'],
      ],
    },
    about: {
      eyebrow: 'La versión que no está en LinkedIn',
      title: 'No exactamente como estaba previsto.',
      copyPre: 'Hace unos años decidí empezar a correr, mal, sin más razón para seguir que haber empezado. Resulta que así es como funciono: cuando algo pasa a formar parte de mi vida, no lo hago a medias. No espero a sentirme preparada. Me hago la pregunta obvia, me equivoco, ',
      copyStrong: 'lo intento otra vez, y otra vez, y otra vez',
      copyPost: ', y en algún punto de ese caos, me demuestro a mí misma que puedo. Nunca estamos preparadas, y al mismo tiempo, siempre lo estamos. No soy la mejor, y al mismo tiempo, claro que lo soy.',
      closing: 'No espero a que llegue la oportunidad perfecta. La creo.',
    },
    featured: {
      eyebrow: 'Destacado',
      rccoonSub: 'Acción Ciudadana · Estrategia Digital · Comunidad · 2020—2026',
      rccoonCta: 'Ven a curiosear →',
      commo2Sub: 'Estrategia · Branding · Ecosistema Digital · 2024—2025',
      commo2Cta: 'Múdate →',
      ctaEyebrow: 'Todavía no es un proyecto.',
      ctaTitle: 'Algo que tú y yo podríamos construir.',
      ctaSub: 'El mejor trabajo no siempre empieza con un brief; a veces empieza con dos personas que ven el mundo de la misma manera. Si tienes una idea, y valores que encajen, me encantaría escucharla. Este podría ser el siguiente.',
      ctaLink: 'Ven a buscarme →',
    },
    latest: {
      eyebrow: 'Lo último que he escrito',
      essay: 'Ensayo · 13/08/26',
      postTitle: 'Haz que tu tiempo cuente',
      postExcerpt: 'Vamos a pasar una parte enorme de nuestras vidas trabajando. Entonces, ¿por qué no dirigir ese tiempo hacia algo que realmente importa?',
      read: 'Leer →',
    },
  },
}
// ── Clue: click every tag in "What I do" ────────────────────────────
// Each tag becomes "selected" (and stays that way) the moment it's
// clicked. Nothing hints that collecting all eight does anything —
// it just quietly does, once the last one lands.
function SkillsPicker({ groups }: { groups: string[][] }) {
  const total = groups.reduce((n, g) => n + g.length, 0)
  const [selected, setSelected] = useState<Set<string>>(new Set())
  useEffect(() => {
    if (selected.size === total) markClueFound('skills-all')
  }, [selected, total])
  const toggle = (tag: string) => {
    setSelected((prev) => {
      if (prev.has(tag)) return prev
      const next = new Set(prev)
      next.add(tag)
      return next
    })
  }
  return (
    <div className="mxo-skills-groups">
      {groups.map((group, gi) => (
        <div key={gi} className="mxo-skills-group">
          {group.map((tag) => {
            const isSel = selected.has(tag)
            return (
              <button
                key={tag}
                type="button"
                onClick={() => toggle(tag)}
                className="mxo-skill-tag"
                style={{
                  cursor: 'pointer',
                  textAlign: 'left',
                  width: '100%',
                  background: isSel ? 'rgba(217,115,122,0.14)' : 'transparent',
                  borderColor: isSel ? '#d9737a' : undefined,
                  color: isSel ? '#fff' : undefined,
                  boxShadow: isSel ? '0 0 16px rgba(217,115,122,0.2)' : 'none',
                }}
              >
                {tag}
              </button>
            )
          })}
        </div>
      ))}
    </div>
  )
}
// ── Keyboard click ───────────────────────────────────────────────────
function playKeyClick() {}
// ── Correction animation ─────────────────────────────────────────────
type CorrectionPhase = 'idle' | 'typing-wrong' | 'striking' | 'erasing' | 'typing-only' | 'done'
function CorrectionOnly() {
  const { lang } = useLanguage()
  const c = copy[lang].correction
  const [phase, setPhase] = useState<CorrectionPhase>('idle')
  const [wrongText, setWrongText] = useState('')
  const [onlyText, setOnlyText] = useState('')
  const wrong = c.wrong; const only = c.only
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
  // the "only" word (the first word) renders in the brand's pink; the rest stays white
  const onlyWord = c.onlyWord
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
  const { lang } = useLanguage()
  const c = copy[lang].nav
  const [open, setOpen] = useState(false)
  const links = [
    { href: '/purpose', label: c.purpose },
    { href: '/projects', label: c.projects },
    { href: '/blog', label: c.blog },
    { href: '/contact', label: c.contact },
  ]
  return (
    <>
      <div style={{ position: 'fixed', top: '1.4rem', right: '1.8rem', zIndex: 100, display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <LanguageSwitcher />
        <button onClick={() => setOpen(true)} aria-label={c.openMenu}
          style={{ background: 'none', border: 'none', cursor: 'pointer',
            display: 'flex', flexDirection: 'column', gap: '5px', padding: '8px' }}>
          <span style={{ display: 'block', width: '24px', height: '1.5px', background: '#F2EEE7' }}/>
          <span style={{ display: 'block', width: '24px', height: '1.5px', background: '#F2EEE7' }}/>
          <span style={{ display: 'block', width: '24px', height: '1.5px', background: '#F2EEE7' }}/>
        </button>
      </div>
      {open && (
        <div className="mxo-fullnav" onClick={() => setOpen(false)}>
          <button className="mxo-fullnav-close" onClick={() => setOpen(false)} aria-label={c.close}>&#x2715;</button>
          <div className="mxo-fullnav-links" onClick={e => e.stopPropagation()}>
            {links.map((l, i) => (
              <a key={l.href} href={l.href} className="mxo-fullnav-link" onClick={() => setOpen(false)}
                style={{ animationDelay: `${i * 0.08}s` }}>
                <span className="mxo-fullnav-num">0{i + 1}</span>
                {l.label}
              </a>
            ))}
          </div>
          <p className="mxo-fullnav-bottom">{c.bottom}</p>
        </div>
      )}
    </>
  )
}
// ── Hero con cabecera de foto a todo el ancho ─────────────────────────
function Hero() {
  const { lang } = useLanguage()
  const c = copy[lang].hero
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
          {c.line1}<br/>
          <CorrectionOnly /><br/>
          {c.line3}<br/>
          {c.line4}
        </p>
        <p className="mxo-tagline">
          <span className="highlighter">
            <span className="highlighter__text">{c.tagline}</span>
          </span>
        </p>
        <div style={{ display: 'flex', gap: '1rem', marginTop: '2.5rem', flexWrap: 'wrap' }}>
          <a href="/projects" style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#ffffff', background: '#d9737a', padding: '1rem 2.5rem', textDecoration: 'none', minWidth: '190px', textAlign: 'center', display: 'inline-block' }}>{c.ctaProjects}</a>
          <a href="/contact" style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#ffffff', background: '#d9737a', padding: '1rem 2.5rem', textDecoration: 'none', minWidth: '190px', textAlign: 'center', display: 'inline-block' }}>{c.ctaContact}</a>
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
  const { lang } = useLanguage()
  const c = copy[lang]
  usePageMeta(c.metaTitle, c.metaDescription)
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
                {c.ticker}
              </span>
            ))}
          </div>
        </div>
        <Reveal><div className="mxo-manifesto">
          <h2 className="mxo-manifesto-title">{c.manifesto.title1}<br/>{c.manifesto.title2}</h2>
          <p className="mxo-manifesto-body">{c.manifesto.body1}</p>
          <p className="mxo-manifesto-body">{c.manifesto.body2}</p>
          <p className="mxo-manifesto-body">{c.manifesto.body3}</p>
          <p className="mxo-manifesto-body">{c.manifesto.body4}</p>
          <p className="mxo-manifesto-body">{c.manifesto.body5}</p>
        </div></Reveal>
        <Reveal><div className="mxo-video-section">
          <video src="/videos/pruebavideoindex2.mp4" autoPlay muted loop playsInline aria-hidden="true" />
          <HeartbeatSound />
          <div className="mxo-video-overlay">
            <div className="mxo-video-overlay-heading">
              <p className="mxo-eyebrow">{c.video.eyebrow}</p>
              <span className="mxo-video-overlay-aside">{c.video.aside}</span>
            </div>
            <div className="mxo-video-boxes">
            {c.video.boxes.map(box => (
              <div key={box.title} className="mxo-video-box">
                <h3>{box.title}</h3>
                <p>{box.body}</p>
              </div>
            ))}
            </div>
          </div>
        </div></Reveal>
        <Reveal><div className="mxo-skills">
          <p className="mxo-eyebrow">{c.skills.eyebrow}</p>
          <div style={{ display: 'flex', alignItems: 'stretch', gap: '1.5rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
            <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(3.5rem, 8vw, 6rem)', fontWeight: 400, color: '#edeae2', lineHeight: 0.85, letterSpacing: '0.02em' }}>6+</span>
            <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(1.7rem, 3.4vw, 2.7rem)', fontWeight: 400, color: '#edeae2', lineHeight: 0.92, letterSpacing: '0.03em', display: 'block' }}>{c.skills.years}<br/>{c.skills.yearsLine2}</span>
          </div>
          <SkillsPicker groups={c.skills.groups} />
        </div></Reveal>
        <Reveal><section className="mxo-about-me">
          <div className="mxo-about-me-inner">
            <div className="mxo-about-me-card">
              <p className="mxo-eyebrow">{c.about.eyebrow}</p>
              <h2 className="mxo-about-me-title">{c.about.title}</h2>
              <span className="mxo-about-me-rule" aria-hidden="true" />
              <p className="mxo-about-me-copy">{c.about.copyPre}<strong>{c.about.copyStrong}</strong>{c.about.copyPost}</p>
              <p className="mxo-about-me-closing">{c.about.closing}</p>
            </div>
            <div className="mxo-about-me-photo-wrap">
              <img className="mxo-about-me-photo" src="/photos/me-index.jpg" alt="Itxaso Muntión" />
            </div>
          </div>
        </section></Reveal>
        <Reveal><div className="mxo-featured">
          <p className="mxo-eyebrow">{c.featured.eyebrow}</p>
          <div className="mxo-featured-grid">
            <a href="/work/rccoon" className="mxo-featured-item">
              <img src="/photos/rccoon-logo.png" alt="RCCOON" style={{ width: '80px', height: '80px', objectFit: 'contain', display: 'block', marginBottom: '1.2rem' }} />
              <h3 className="mxo-featured-title">RCCOON</h3>
              <p className="mxo-featured-sub">{c.featured.rccoonSub}</p>
              <span className="mxo-featured-cta">{c.featured.rccoonCta}</span>
            </a>
            <a href="/work/commo2" onClick={e => { e.preventDefault(); window.location.href='/work/commo2' }} className="mxo-featured-item">
              <img src="/photos/commo2-logo.png" alt="Commo2" style={{ width: '80px', height: '80px', objectFit: 'contain', display: 'block', marginBottom: '1.2rem' }} />
              <h3 className="mxo-featured-title">Commo2</h3>
              <p className="mxo-featured-sub">{c.featured.commo2Sub}</p>
              <span className="mxo-featured-cta">{c.featured.commo2Cta}</span>
            </a>
            <a href="/purpose" className="mxo-featured-item mxo-featured-item--cta">
              <p className="mxo-featured-item-eyebrow">{c.featured.ctaEyebrow}</p>
              <h3 className="mxo-featured-title">{c.featured.ctaTitle}</h3>
              <p className="mxo-featured-sub">{c.featured.ctaSub}</p>
              <span className="mxo-featured-cta">{c.featured.ctaLink}</span>
            </a>
          </div>
        </div></Reveal>
        <Reveal><div className="mxo-latest-post" style={{ position: 'relative', zIndex: 2, borderTop: '1px solid rgba(237,234,226,0.08)', paddingTop: '5rem' }}>
          <p className="mxo-eyebrow" style={{ display: 'block', paddingLeft: 'clamp(1.5rem, 5vw, 5rem)', marginBottom: '2rem' }}>{c.latest.eyebrow}</p>
          <a href="/blog" className="mxo-latest-post-link"
            style={{ textDecoration: 'none', color: 'inherit', display: 'grid', gridTemplateColumns: '40% 1fr', alignItems: 'stretch', background: 'rgba(7,7,9,0.55)', border: '1px solid rgba(237,234,226,0.08)', width: '100%' }}>
            <img src="/photos/who-am-i/activist-me.jpg" alt="" style={{ width: '100%', height: '100%', minHeight: '420px', objectFit: 'cover', display: 'block', filter: 'brightness(0.9) contrast(1.05)' }} />
            <div style={{ padding: '4rem clamp(2rem, 6vw, 6rem)' }}>
              <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(237,234,226,0.4)', marginBottom: '1rem' }}>{c.latest.essay}</p>
              <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.5rem, 5vw, 5rem)', fontWeight: 400, color: '#edeae2', lineHeight: 1.0, letterSpacing: '0.02em', marginBottom: '1.5rem' }}>{c.latest.postTitle}</h3>
              <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '18.4px', fontWeight: 300, color: 'rgba(237,234,226,0.72)', lineHeight: '34.96px', marginBottom: '2rem' }}>{c.latest.postExcerpt}</p>
              <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(237,234,226,0.4)' }}>{c.latest.read}</span>
            </div>
          </a>
        </div></Reveal>
      </main>
    </>
  )
}
