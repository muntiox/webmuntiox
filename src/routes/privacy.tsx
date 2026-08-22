import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'
import LanguageSwitcher from '../components/LanguageSwitcher'
import { useLanguage, langPath } from '../lib/i18n'
import { usePageMeta } from '../lib/usePageMeta'
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
    metaTitle: 'Privacy Policy — Itxaso Muntión',
    metaDescription: 'What this site collects, why, and how to exercise your data protection rights.',
    eyebrow: 'Legal',
    title: 'Privacy Policy',
    controller: 'Data controller: Itxaso Muntión — contact at imungar@protonmail.com.',
    s1: 'What this site collects',
    s1body: 'This is a personal portfolio. It does not run analytics or advertising trackers, and it does not sell or share personal data with third parties. Personal data is only collected in two places: the contact form, and the guestbook you can sign after finding every hidden clue on the site.',
    s2: 'Contact form',
    s2body: 'If you fill in the contact form, the name, email address and message you submit are sent by email so I can read and reply to you. Nothing else is done with that information, and it is not stored in any database — it only exists as an email in my inbox.',
    s3: 'Guestbook',
    s3body: "If you find every hidden clue on the site and choose to sign the guestbook, the name (or initials) and optional message you submit are stored and shown publicly to other visitors, as a kind of shared signature. That data is stored with Upstash (a database provider) via Vercel, the company that hosts this site. If you'd like your entry removed, write to the email below and I'll take it down.",
    s4: 'Cookies and local storage',
    s4body: "No tracking or advertising cookies are set — in fact, this site doesn't use HTTP cookies at all. It does use your browser's local storage for a few strictly functional things you control directly: your language choice, your progress in the hidden clue hunt, and whether you've already signed the guestbook. None of that is shared with anyone or used to track you across sites.",
    s5: 'Fonts',
    s5body: 'The typefaces used on this site are self-hosted — served from this same domain rather than from a third-party font provider — so visiting this site does not send your IP address anywhere else just to display text.',
    s6: 'Hosting',
    s6body: 'This site is hosted on Vercel, which may process technical server logs (like IP address and browser type) as part of delivering the site — standard for any web host.',
    s7: 'Your rights',
    s7body: 'You can ask to access, correct or delete any personal data you have submitted through this site (contact form or guestbook), at any time, by writing to the email below.',
    s8: 'Questions',
    s8pre: 'If you have any questions about this policy or your data, reach out via the ',
    s8link: 'contact page',
    s8mid: ' or write directly to ',
    s8post: '. See also the ',
    s8legalLink: 'legal notice',
    s8end: ' for the full identification of who runs this site.',
    updated: 'Last updated:',
    locale: 'en-GB',
  },
  es: {
    metaTitle: 'Política de Privacidad — Itxaso Muntión',
    metaDescription: 'Qué recoge esta web, para qué, y cómo ejercer tus derechos de protección de datos.',
    eyebrow: 'Legal',
    title: 'Política de Privacidad',
    controller: 'Responsable del tratamiento: Itxaso Muntión — contacto en imungar@protonmail.com.',
    s1: 'Qué recoge esta web',
    s1body: 'Este es un portfolio personal. No utiliza analíticas ni rastreadores publicitarios, y no vende ni comparte datos personales con terceros. Solo se recogen datos personales en dos sitios: el formulario de contacto, y el libro de visitas que puedes firmar tras encontrar todas las pistas ocultas de la web.',
    s2: 'Formulario de contacto',
    s2body: 'Si rellenas el formulario de contacto, el nombre, la dirección de email y el mensaje que envíes se transmiten por correo electrónico para que pueda leerlos y responderte. No se hace ningún otro uso de esa información, y no se guarda en ninguna base de datos — solo existe como un email en mi bandeja de entrada.',
    s3: 'Libro de visitas',
    s3body: 'Si encuentras todas las pistas ocultas de la web y decides firmar el libro de visitas, el nombre (o iniciales) y el mensaje opcional que envíes se almacenan y se muestran públicamente a otras personas visitantes, como una especie de firma compartida. Esos datos se almacenan con Upstash (un proveedor de bases de datos) a través de Vercel, la empresa que aloja esta web. Si quieres que se elimine tu entrada, escribe al email de abajo y la retiraré.',
    s4: 'Cookies y almacenamiento local',
    s4body: 'No se instalan cookies de seguimiento ni publicitarias — de hecho, esta web no usa cookies HTTP en absoluto. Sí usa el almacenamiento local de tu navegador para algunas cosas estrictamente funcionales que tú mismo controlas: tu idioma elegido, tu progreso en la búsqueda de pistas ocultas, y si ya has firmado el libro de visitas. Nada de eso se comparte con nadie ni se usa para rastrearte por otras webs.',
    s5: 'Tipografías',
    s5body: 'Las tipografías de esta web están autoalojadas — se sirven desde este mismo dominio en vez de desde un proveedor externo de fuentes — así que visitar esta web no envía tu dirección IP a ningún otro sitio solo para mostrar el texto.',
    s6: 'Alojamiento',
    s6body: 'Esta web está alojada en Vercel, que puede procesar registros técnicos del servidor (como la IP y el tipo de navegador) como parte de servir la web — algo estándar en cualquier hosting.',
    s7: 'Tus derechos',
    s7body: 'Puedes pedir acceder, corregir o eliminar cualquier dato personal que hayas enviado a través de esta web (formulario de contacto o libro de visitas), en cualquier momento, escribiendo al email de abajo.',
    s8: 'Preguntas',
    s8pre: 'Si tienes alguna pregunta sobre esta política o tus datos, escríbeme desde la ',
    s8link: 'página de contacto',
    s8mid: ' o directamente a ',
    s8post: '. Consulta también el ',
    s8legalLink: 'aviso legal',
    s8end: ' para la identificación completa de quién gestiona esta web.',
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
              <a key={l.href} href={langPath(lang, l.href)} className="mxo-fullnav-link"
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
export function PrivacyPage() {
  const { lang } = useLanguage()
  const c = copy[lang]
  usePageMeta(c.metaTitle, c.metaDescription, { lang, path: '/privacy' })
  return (
    <div style={{ minHeight: '100vh', background: 'transparent', color: '#ffffff', position: 'relative' }}>
      <FloatingNav />
      <div style={{ maxWidth: '820px', margin: '0 auto', padding: '10rem 2rem 6rem', position: 'relative', zIndex: 2 }}>
        <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#d9737a', marginBottom: '1rem' }}>{c.eyebrow}</p>
        <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 300, color: '#ffffff', lineHeight: 1.1, marginBottom: '1rem' }}>
          {c.title}
        </h1>
        <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', marginBottom: '2.5rem' }}>{c.controller}</p>
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
          <p>{c.s5body}</p>
        </Section>
        <Section title={c.s6}>
          <p>{c.s6body}</p>
        </Section>
        <Section title={c.s7}>
          <p>{c.s7body}</p>
        </Section>
        <Section title={c.s8}>
          <p>{c.s8pre}<Link to={langPath(lang, '/contact')} style={{ color: '#d9737a' }}>{c.s8link}</Link>{c.s8mid}<a href="mailto:imungar@protonmail.com" style={{ color: '#d9737a' }}>imungar@protonmail.com</a>{c.s8post}<Link to={langPath(lang, '/legal')} style={{ color: '#d9737a' }}>{c.s8legalLink}</Link>{c.s8end}</p>
        </Section>
        <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', marginTop: '3rem' }}>{c.updated} {new Date().toLocaleDateString(c.locale, { year: 'numeric', month: 'long' })}</p>
      </div>
    </div>
  )
}
