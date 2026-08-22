import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import ClueDoubleClick from '../components/ClueDoubleClick'
import LanguageSwitcher from '../components/LanguageSwitcher'
import { useLanguage } from '../lib/i18n'
import { usePageMeta } from '../lib/usePageMeta'
export const Route = createFileRoute('/contact')({
  component: ContactPage,
})
// ── Page copy — English + Spanish ────────────────────────────────────
const navCopy = {
  en: { home: 'Back home', purpose: 'Purpose', projects: 'Projects', blog: 'Blog', contact: 'Contact', openMenu: 'Open menu', bottom: 'Itxaso Muntión — Content Creator & Digital Strategist' },
  es: { home: 'Inicio', purpose: 'Propósito', projects: 'Proyectos', blog: 'Blog', contact: 'Contacto', openMenu: 'Abrir menú', bottom: 'Itxaso Muntión — Creadora de Contenido y Estratega Digital' },
}
const copy = {
  en: {
    metaTitle: 'Contact — Itxaso Muntión',
    metaDescription: "Get in touch about a project that seeks to connect authentically and generate real impact.",
    titleLine1: "Let's make something",
    titleWorth: 'worth making',
    intro: "If your project seeks to connect authentically and generate real impact, I'd love to hear from you.",
    receivedTitle: 'Message received.',
    receivedBody: "Thank you for writing. I'll be in touch soon.",
    labelName: 'Name',
    placeholderName: 'Your name',
    labelEmail: 'Email',
    placeholderEmail: 'you@email.com',
    labelMessage: 'Message',
    placeholderMessage: 'Tell me about your project, your vision, your world...',
    send: 'Send message',
    sending: 'Sending…',
    sendError: "Something went wrong and the message didn't go through. Try again, or write directly to imungar@protonmail.com.",
  },
  es: {
    metaTitle: 'Contacto — Itxaso Muntión',
    metaDescription: 'Escríbeme si tu proyecto busca conectar de forma auténtica y generar un impacto real.',
    titleLine1: 'Hagamos algo',
    titleWorth: 'que merezca la pena hacer',
    intro: 'Si tu proyecto busca conectar de forma auténtica y generar un impacto real, me encantaría saber de ti.',
    receivedTitle: 'Mensaje recibido.',
    receivedBody: 'Gracias por escribir. Me pondré en contacto pronto.',
    labelName: 'Nombre',
    placeholderName: 'Tu nombre',
    labelEmail: 'Email',
    placeholderEmail: 'tu@email.com',
    labelMessage: 'Mensaje',
    placeholderMessage: 'Cuéntame sobre tu proyecto, tu visión, tu mundo...',
    send: 'Enviar mensaje',
    sending: 'Enviando…',
    sendError: 'Algo ha fallado y el mensaje no ha llegado. Inténtalo de nuevo, o escribe directamente a imungar@protonmail.com.',
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
function ContactPage() {
  const { lang } = useLanguage()
  const c = copy[lang]
  usePageMeta(c.metaTitle, c.metaDescription)
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          name: data.get('name'),
          email: data.get('email'),
          message: data.get('message'),
        }),
      })
      if (!res.ok) throw new Error('send failed')
      setStatus('sent')
      form.reset()
    } catch {
      setStatus('error')
    }
  }
  return (
    <div style={{ minHeight: '100vh', background: 'transparent', color: '#ffffff', position: 'relative' }}>
      <FloatingNav />
      <div style={{ maxWidth: '1300px', margin: '0 auto', padding: '10rem 2rem 6rem', position: 'relative', zIndex: 2 }}>
      <div style={{ maxWidth: '640px' }}>
        <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 300, color: '#ffffff', lineHeight: 1.1, marginBottom: '1.5rem' }}>
          {c.titleLine1}<br /><ClueDoubleClick id="contact-dblclick">{c.titleWorth}</ClueDoubleClick>
        </h1>
        <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '18.4px', fontWeight: 300, color: 'rgba(255,255,255,0.82)', lineHeight: '34.96px', marginBottom: '3rem' }}>
          {c.intro}
        </p>
        {status === 'sent' ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '3rem 0' }}>
            <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.6rem', color: '#ffffff' }}>{c.receivedTitle}</p>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.9rem', fontWeight: 300, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8 }}>{c.receivedBody}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <label style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.62rem', fontWeight: 600, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)' }}>{c.labelName}</label>
              <input name="name" type="text" required placeholder={c.placeholderName}
                style={{ background: 'transparent', border: 'none', borderBottom: '1px solid rgba(255,255,255,0.3)', padding: '0.8rem 0', fontFamily: "'Outfit', sans-serif", fontSize: '0.95rem', fontWeight: 300, color: '#ffffff', outline: 'none', width: '100%' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <label style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.62rem', fontWeight: 600, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)' }}>{c.labelEmail}</label>
              <input name="email" type="email" required placeholder={c.placeholderEmail}
                style={{ background: 'transparent', border: 'none', borderBottom: '1px solid rgba(255,255,255,0.3)', padding: '0.8rem 0', fontFamily: "'Outfit', sans-serif", fontSize: '0.95rem', fontWeight: 300, color: '#ffffff', outline: 'none', width: '100%' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <label style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.62rem', fontWeight: 600, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)' }}>{c.labelMessage}</label>
              <textarea name="message" required placeholder={c.placeholderMessage} rows={5}
                style={{ background: 'transparent', border: 'none', borderBottom: '1px solid rgba(255,255,255,0.3)', padding: '0.8rem 0', fontFamily: "'Outfit', sans-serif", fontSize: '0.95rem', fontWeight: 300, color: '#ffffff', outline: 'none', width: '100%', resize: 'none' }} />
            </div>
            {status === 'error' && (
              <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.8rem', fontWeight: 300, color: '#d9737a', lineHeight: 1.6 }}>{c.sendError}</p>
            )}
            <button type="submit" disabled={status === 'sending'}
              style={{ alignSelf: 'flex-start', fontFamily: "'Outfit', sans-serif", fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#ffffff', background: '#d9737a', border: 'none', padding: '1rem 2.5rem', cursor: status === 'sending' ? 'default' : 'pointer', opacity: status === 'sending' ? 0.6 : 1 }}>
              {status === 'sending' ? c.sending : c.send}
            </button>
          </form>
        )}
      </div>
      </div>
    </div>
  )
}
