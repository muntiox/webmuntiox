import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'
import LanguageSwitcher from '../../components/LanguageSwitcher'
import { useLanguage } from '../../lib/i18n'
export const Route = createFileRoute('/work/commo2')({
  component: Commo2Page,
})
// ── Page copy — English + Spanish ────────────────────────────────────
const navCopy = {
  en: { home: 'Back home', purpose: 'Purpose', projects: 'Projects', blog: 'Blog', contact: 'Contact', openMenu: 'Open menu', bottom: 'Itxaso Muntión — Content Creator & Digital Strategist' },
  es: { home: 'Inicio', purpose: 'Propósito', projects: 'Proyectos', blog: 'Blog', contact: 'Contacto', openMenu: 'Abrir menú', bottom: 'Itxaso Muntión — Creadora de Contenido y Estratega Digital' },
}
const copy = {
  en: {
    eyebrow: "Master's Final Project · 2024—2025",
    tagline: 'A content brand for people who share flats and deserve to feel at home.',
    tags: ['Home Optimisation', 'Sustainability', 'Emotional Wellbeing', 'Affiliate Marketing', 'Content Strategy', 'SEO', 'Brand Positioning', 'Shared Living'],
    whatItIs: 'What it is',
    whatBody1: 'Commo2 is a digital content brand centred on home optimisation, sustainability and emotional wellbeing — built specifically for young people living in shared rental flats. Part blog, part community, part affiliate strategy.',
    whatBody2: 'The model is built around affiliate marketing in year one, growing into brand collaborations and original content in year two — with a community philosophy at the centre of everything.',
    whyTitle: "Why it's necessary",
    whyBody1: "Most home content is aspirational to the point of being useless. It assumes you own the place, have budget to renovate and live alone. The reality for a huge part of a generation is the opposite: shared kitchens, landlords who won't let you drill a single hole, and the constant feeling of adapting to someone else's rules.",
    whyBody2: 'Nobody was talking about this seriously. Commo2 does.',
    quote: 'A life that feels comfortable, even just within your own home, means more peace, fewer distractions and greater happiness.',
    stats: [
      { num: '3', label: 'Competitors analysed' },
      { num: '2yr', label: 'Business roadmap' },
      { num: '8', label: 'Final score' },
    ],
    back: '← Back to projects',
  },
  es: {
    eyebrow: 'Trabajo Fin de Máster · 2024—2025',
    tagline: 'Una marca de contenido para quienes comparten piso y merecen sentirse en casa.',
    tags: ['Optimización del Hogar', 'Sostenibilidad', 'Bienestar Emocional', 'Marketing de Afiliación', 'Estrategia de Contenido', 'SEO', 'Posicionamiento de Marca', 'Vida Compartida'],
    whatItIs: 'Qué es',
    whatBody1: 'Commo2 es una marca de contenido digital centrada en la optimización del hogar, la sostenibilidad y el bienestar emocional — creada específicamente para jóvenes que viven en pisos compartidos de alquiler. Parte blog, parte comunidad, parte estrategia de afiliación.',
    whatBody2: 'El modelo se construye en torno al marketing de afiliación durante el primer año, evolucionando hacia colaboraciones de marca y contenido original en el segundo — con una filosofía de comunidad en el centro de todo.',
    whyTitle: 'Por qué es necesario',
    whyBody1: 'La mayoría del contenido sobre el hogar es aspiracional hasta el punto de ser inútil. Asume que eres propietaria, que tienes presupuesto para reformar y que vives sola. La realidad para gran parte de una generación es la contraria: cocinas compartidas, caseros que no te dejan hacer ni un solo agujero, y la sensación constante de adaptarte a las normas de otra persona.',
    whyBody2: 'Nadie hablaba de esto en serio. Commo2 sí.',
    quote: 'Una vida que se siente cómoda, aunque solo sea dentro de tu propia casa, significa más paz, menos distracciones y más felicidad.',
    stats: [
      { num: '3', label: 'Competidores analizados' },
      { num: '2 años', label: 'Hoja de ruta del negocio' },
      { num: '8', label: 'Nota final' },
    ],
    back: '← Volver a proyectos',
  },
}
function FloatingNav() {
  const { lang } = useLanguage()
  const n = navCopy[lang]
  const [open, setOpen] = useState(false)
  const links = [
    { href: '/', label: n.home },
    { href: '/purpose', label: n.purpose },
    { href: '/projects', label: n.projects },
    { href: '/blog', label: n.blog },
    { href: '/contact', label: n.contact },
  ]
  return (
    <>
      <div style={{ position: 'fixed', top: '1.4rem', right: '1.8rem', zIndex: 100, display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <LanguageSwitcher />
        <button onClick={() => setOpen(true)} aria-label={n.openMenu}
          style={{ background: 'none', border: 'none', cursor: 'pointer',
            display: 'flex', flexDirection: 'column', gap: '5px', padding: '8px' }}>
          <span style={{ display: 'block', width: '24px', height: '1.5px', background: '#ffffff' }}/>
          <span style={{ display: 'block', width: '24px', height: '1.5px', background: '#ffffff' }}/>
          <span style={{ display: 'block', width: '24px', height: '1.5px', background: '#ffffff' }}/>
        </button>
      </div>
      {open && (
        <div style={{ position: 'fixed', inset: 0, background: '#04020a', zIndex: 999, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', overflowY: 'auto', padding: '2rem 0' }} onClick={() => setOpen(false)}>
          <button style={{ position: 'absolute', top: '2rem', right: '2.5rem', background: 'none', border: 'none', color: 'rgba(255,255,255,0.6)', fontSize: '1.5rem', cursor: 'pointer', zIndex: 2 }} onClick={() => setOpen(false)}>✕</button>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.3rem', zIndex: 2 }} onClick={e => e.stopPropagation()}>
            {links.map((l, i) => (
              <a key={l.href} href={l.href} className="mxo-fullnav-link"
                style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '92px', fontWeight: 300, lineHeight: '92px', color: '#ffffff', textDecoration: 'none', display: 'flex', alignItems: 'baseline', gap: '1.2rem', transition: 'color 0.15s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#d9737a')}
                onMouseLeave={e => (e.currentTarget.style.color = '#ffffff')}>
                <span style={{ fontSize: '0.55em', color: '#d9737a', letterSpacing: '0.2em' }}>0{i+1}</span>
                {l.label}
              </a>
            ))}
          </div>
          <p style={{ position: 'absolute', bottom: '2.5rem', fontSize: '0.6rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', zIndex: 2 }}>{n.bottom}</p>
        </div>
      )}
    </>
  )
}
function Commo2Page() {
  const { lang } = useLanguage()
  const c = copy[lang]
  return (
    <div style={{ minHeight: '100vh', background: 'transparent', color: '#ffffff', position: 'relative' }}>
      <FloatingNav />
      <article style={{ maxWidth: 1300, margin: '0 auto', padding: '10rem 3.5rem 8rem', position: 'relative', zIndex: 2 }}>
        <div style={{ marginBottom: '4rem' }}>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.62rem', fontWeight: 600, letterSpacing: '0.38em', textTransform: 'uppercase', color: '#ffffff', marginBottom: '2rem' }}>{c.eyebrow}</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '2.5rem' }}>
            <img src="/photos/commo2/commo2-main-logo.png" alt="Commo2" style={{ height: '80px', width: 'auto', objectFit: 'contain' }} />
            <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '64px', fontWeight: 400, color: '#ffffff', lineHeight: 1, letterSpacing: '0.02em', margin: 0 }}>Commo2</h1>
          </div>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '18.4px', fontWeight: 300, lineHeight: '34.96px', color: 'rgba(255,255,255,0.9)' }}>
            {c.tagline}
          </p>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '5rem' }}>
          {c.tags.map((tag, i) => (
            <span key={i} style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.62rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', border: '1px solid rgba(255,255,255,0.2)', padding: '0.5rem 1rem' }}>
              {tag}
            </span>
          ))}
        </div>
        <div style={{ marginBottom: '5rem', paddingBottom: '5rem', borderBottom: '1px solid rgba(255,255,255,0.12)' }}>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.62rem', fontWeight: 600, letterSpacing: '0.38em', textTransform: 'uppercase', color: '#ffffff', marginBottom: '2rem' }}>{c.whatItIs}</p>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '18.4px', fontWeight: 300, lineHeight: '34.96px', color: 'rgba(255,255,255,0.9)', marginBottom: '1.6rem' }}>
            {c.whatBody1}
          </p>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '18.4px', fontWeight: 300, lineHeight: '34.96px', color: 'rgba(255,255,255,0.9)' }}>
            {c.whatBody2}
          </p>
        </div>
        <div style={{ marginBottom: '5rem', paddingBottom: '5rem', borderBottom: '1px solid rgba(255,255,255,0.12)' }}>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.62rem', fontWeight: 600, letterSpacing: '0.38em', textTransform: 'uppercase', color: '#ffffff', marginBottom: '2rem' }}>{c.whyTitle}</p>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '18.4px', fontWeight: 300, lineHeight: '34.96px', color: 'rgba(255,255,255,0.9)', marginBottom: '1.6rem' }}>
            {c.whyBody1}
          </p>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '18.4px', fontWeight: 300, lineHeight: '34.96px', color: 'rgba(255,255,255,0.9)' }}>
            {c.whyBody2}
          </p>
        </div>
        <blockquote style={{ borderLeft: '3px solid #d9737a', padding: '1.2rem 0 1.2rem 2rem', margin: '0 0 5rem', fontFamily: "'Outfit', sans-serif", fontSize: '18.4px', fontWeight: 300, color: 'rgba(255,255,255,0.7)', lineHeight: '34.96px' }}>
          &ldquo;{c.quote}&rdquo;
        </blockquote>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem' }}>
          {c.stats.map(({ num, label }, i) => (
            <div key={i} style={{ border: '1px solid rgba(255,255,255,0.15)', padding: '2rem 1.5rem' }}>
              <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '3rem', color: '#ffffff', margin: '0 0 0.3rem', lineHeight: 1 }}>{num}</p>
              <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.65rem', fontWeight: 400, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', margin: 0 }}>{label}</p>
            </div>
          ))}
        </div>
        <div style={{ marginTop: '5rem', paddingTop: '3rem', borderTop: '1px solid rgba(255,255,255,0.12)' }}>
          <Link to="/projects" style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#ffffff', textDecoration: 'none' }}>{c.back}</Link>
        </div>
      </article>
    </div>
  )
}
