import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'
import LanguageSwitcher from '../components/LanguageSwitcher'
import { useLanguage } from '../lib/i18n'
import { usePageMeta } from '../lib/usePageMeta'
export const Route = createFileRoute('/legal')({
  component: LegalPage,
})
// ── Page copy — English + Spanish ────────────────────────────────────
// NOTE: the identifying details below (name/NIF/address) are
// placeholders — Itxaso needs to send the real ones before this page
// goes live. Search for "PENDIENTE" / "PENDING" to find every spot.
const navCopy = {
  en: { home: 'Back home', purpose: 'Purpose', projects: 'Projects', blog: 'Blog', contact: 'Contact', openMenu: 'Open menu', bottom: 'Itxaso Muntión — Content Creator & Digital Strategist' },
  es: { home: 'Inicio', purpose: 'Propósito', projects: 'Proyectos', blog: 'Blog', contact: 'Contacto', openMenu: 'Abrir menú', bottom: 'Itxaso Muntión — Creadora de Contenido y Estratega Digital' },
}
const copy = {
  en: {
    metaTitle: 'Legal Notice — Itxaso Muntión',
    metaDescription: 'Legal identification of the owner of this website, as required by Spanish law (LSSI-CE art. 10).',
    eyebrow: 'Legal',
    title: 'Legal Notice',
    pendingBanner: '⚠️ PENDING — this page is a placeholder until real identification details are added. Do not consider it complete.',
    s1: 'Ownership of this website',
    s1body: 'In compliance with article 10 of Spanish Law 34/2002 (LSSI-CE), on the Information Society Services, the following identifying details are provided:',
    name: 'Name / trading name: [PENDING — full legal name or trading name]',
    taxId: 'Tax ID (NIF): [PENDING]',
    address: 'Contact address: [PENDING — a city or postal address you\'re comfortable making public]',
    email: 'Email: imungar@protonmail.com',
    s2: 'Purpose of this website',
    s2body: 'This is a personal portfolio site showcasing creative and digital strategy work, writing, and ways to get in touch about potential collaborations.',
    s3: 'Intellectual property',
    s3body: 'The text, images, video and design on this site belong to their respective owners and may not be reproduced without permission, except for the personal, non-commercial use ordinarily permitted by law.',
    s4: 'More information',
    s4pre: 'For how personal data is handled, see the ',
    s4link: 'privacy policy',
    s4post: '.',
    updated: 'Last updated:',
    locale: 'en-GB',
  },
  es: {
    metaTitle: 'Aviso Legal — Itxaso Muntión',
    metaDescription: 'Identificación legal de la titular de esta web, según exige la LSSI-CE (art. 10).',
    eyebrow: 'Legal',
    title: 'Aviso Legal',
    pendingBanner: '⚠️ PENDIENTE — esta página es un borrador hasta que se añadan los datos de identificación reales. No la consideres completa.',
    s1: 'Titularidad de esta web',
    s1body: 'En cumplimiento del artículo 10 de la Ley 34/2002 (LSSI-CE), de Servicios de la Sociedad de la Información, se facilitan los siguientes datos identificativos:',
    name: 'Nombre / nombre comercial: [PENDIENTE — nombre legal completo o nombre comercial]',
    taxId: 'NIF: [PENDIENTE]',
    address: 'Dirección de contacto: [PENDIENTE — una ciudad o dirección postal que te parezca bien hacer pública]',
    email: 'Email: imungar@protonmail.com',
    s2: 'Finalidad de esta web',
    s2body: 'Esta es una web de portfolio personal que muestra trabajo de estrategia creativa y digital, escritura, y formas de contactar sobre posibles colaboraciones.',
    s3: 'Propiedad intelectual',
    s3body: 'Los textos, imágenes, vídeos y el diseño de esta web pertenecen a sus respectivos titulares y no pueden reproducirse sin permiso, salvo el uso personal y no comercial habitualmente permitido por la ley.',
    s4: 'Más información',
    s4pre: 'Sobre cómo se tratan los datos personales, consulta la ',
    s4link: 'política de privacidad',
    s4post: '.',
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
function LegalPage() {
  const { lang } = useLanguage()
  const c = copy[lang]
  usePageMeta(c.metaTitle, c.metaDescription)
  return (
    <div style={{ minHeight: '100vh', background: 'transparent', color: '#ffffff', position: 'relative' }}>
      <FloatingNav />
      <div style={{ maxWidth: '820px', margin: '0 auto', padding: '10rem 2rem 6rem', position: 'relative', zIndex: 2 }}>
        <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#d9737a', marginBottom: '1rem' }}>{c.eyebrow}</p>
        <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 300, color: '#ffffff', lineHeight: 1.1, marginBottom: '2rem' }}>
          {c.title}
        </h1>
        <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.8rem', fontWeight: 600, color: '#d9737a', background: 'rgba(217,115,122,0.1)', border: '1px solid rgba(217,115,122,0.35)', padding: '0.9rem 1.1rem', marginBottom: '2.5rem' }}>
          {c.pendingBanner}
        </p>
        <Section title={c.s1}>
          <p style={{ marginBottom: '1rem' }}>{c.s1body}</p>
          <p style={{ marginBottom: '0.3rem' }}>{c.name}</p>
          <p style={{ marginBottom: '0.3rem' }}>{c.taxId}</p>
          <p style={{ marginBottom: '0.3rem' }}>{c.address}</p>
          <p>{c.email}</p>
        </Section>
        <Section title={c.s2}>
          <p>{c.s2body}</p>
        </Section>
        <Section title={c.s3}>
          <p>{c.s3body}</p>
        </Section>
        <Section title={c.s4}>
          <p>{c.s4pre}<Link to="/privacy" style={{ color: '#d9737a' }}>{c.s4link}</Link>{c.s4post}</p>
        </Section>
        <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', marginTop: '3rem' }}>{c.updated} {new Date().toLocaleDateString(c.locale, { year: 'numeric', month: 'long' })}</p>
      </div>
    </div>
  )
}
