import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import LanguageSwitcher from '../components/LanguageSwitcher'
import { useLanguage } from '../lib/i18n'
export const Route = createFileRoute('/privacy')({
  component: PrivacyPage,
})
// ── Page copy — English + Spanish ────────────────────────────────────
const navCopy = {
  en: { home: 'Back home', purpose: 'Purpose', projects: 'Projects', blog: 'Blog', contact: 'Contact', openMenu: 'Open menu', bottom: 'Itxaso Muntión — Content Creator & Digital Strategist' },
  es: { home: 'Inicio', purpose: 'Propósito', projects: 'Proyectos', blog: 'Blog', contact: 'Contacto', openMenu: 'Abrir menú', bottom: 'Itxaso Muntión — Creadora de Contenido y Estratega Digital' },
}
const copy = {
  en: {
    eyebrow: 'Legal',
    title: 'Privacy Policy',
    s1: 'What this site collects',
    s1body: 'This is a personal portfolio. It does not run analytics or advertising trackers, and it does not sell or share personal data with third parties.',
    s2: 'Contact form',
    s2body: "If you fill in the contact form, the name, email address and message you submit are sent via Netlify Forms so I can read and reply to your message. That's the only use of that information.",
    s3: 'Cookies',
    s3body: 'No tracking or advertising cookies are set. The site may use strictly technical, session-level storage needed to make pages work correctly.',
    s4: 'Hosting',
    s4body: 'This site is hosted on Netlify, which may process technical server logs (like IP address and browser type) as part of delivering the site — standard for any web host.',
    s5: 'Questions',
    s5pre: 'If you have any questions about this policy or your data, reach out via the ',
    s5link: 'contact page',
    s5post: '.',
    updated: 'Last updated:',
    locale: 'en-GB',
  },
  es: {
    eyebrow: 'Legal',
    title: 'Política de Privacidad',
    s1: 'Qué recoge esta web',
    s1body: 'Este es un portfolio personal. No utiliza analíticas ni rastreadores publicitarios, y no vende ni comparte datos personales con terceros.',
    s2: 'Formulario de contacto',
    s2body: 'Si rellenas el formulario de contacto, el nombre, la dirección de email y el mensaje que envíes se transmiten a través de Netlify Forms para que pueda leer y responder tu mensaje. Ese es el único uso que se le da a esa información.',
    s3: 'Cookies',
    s3body: 'No se instalan cookies de seguimiento ni publicitarias. La web puede usar almacenamiento estrictamente técnico, a nivel de sesión, necesario para que las páginas funcionen correctamente.',
    s4: 'Alojamiento',
    s4body: 'Esta web está alojada en Netlify, que puede procesar registros técnicos del servidor (como la IP y el tipo de navegador) como parte de servir la web — algo estándar en cualquier hosting.',
    s5: 'Preguntas',
    s5pre: 'Si tienes alguna pregunta sobre esta política o tus datos, escríbeme desde la ',
    s5link: 'página de contacto',
    s5post: '.',
    updated: 'Última actualización:',
    locale: 'es-ES',
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
          <button style={{ position: 'absolute', top: '2rem', right: '2.5rem', background: 'none', border: 'none', color: 'rgba(255,255,255,0.5)', fontSize: '1.5rem', cursor: 'pointer', zIndex: 2 }} onClick={() => setOpen(false)}>✕</button>
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
          <p style={{ position: 'absolute', bottom: '2.5rem', fontSize: '0.6rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', zIndex: 2 }}>{n.bottom}</p>
        </div>
      )}
    </>
  )
}
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: '2.5rem' }}>
      <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(1.3rem, 2.5vw, 1.7rem)', fontWeight: 400, color: '#ffffff', marginBottom: '0.8rem', letterSpacing: '0.02em' }}>{title}</h2>
      <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.95rem', fontWeight: 300, color: 'rgba(255,255,255,0.75)', lineHeight: 1.85 }}>{children}</div>
    </div>
  )
}
function PrivacyPage() {
  const { lang } = useLanguage()
  const c = copy[lang]
  return (
    <div style={{ minHeight: '100vh', background: 'transparent', color: '#ffffff', position: 'relative' }}>
      <FloatingNav />
      <div style={{ maxWidth: '820px', margin: '0 auto', padding: '10rem 2rem 6rem', position: 'relative', zIndex: 2 }}>
        <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#d9737a', marginBottom: '1rem' }}>{c.eyebrow}</p>
        <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 300, color: '#ffffff', lineHeight: 1.1, marginBottom: '2.5rem' }}>
          {c.title}
        </h1>
        <Section title={c.s1}>
          <p>{c.s1body}</p>
        </Section>
        <Section title={c.s2}>
          <p>{c.s2body}</p>
        </Section>
        <Section title={c.s3}>
          <p>{c.s3body}</p>
        </Section>
        <Section title={c.s4}>
          <p>{c.s4body}</p>
        </Section>
        <Section title={c.s5}>
          <p>{c.s5pre}<a href="/contact" style={{ color: '#d9737a' }}>{c.s5link}</a>{c.s5post}</p>
        </Section>
        <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', marginTop: '3rem' }}>{c.updated} {new Date().toLocaleDateString(c.locale, { year: 'numeric', month: 'long' })}</p>
      </div>
    </div>
  )
}
