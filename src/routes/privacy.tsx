import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
export const Route = createFileRoute('/privacy')({
  component: PrivacyPage,
})
function FloatingNav() {
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
        <span style={{ display: 'block', width: '24px', height: '1.5px', background: '#ffffff' }}/>
        <span style={{ display: 'block', width: '24px', height: '1.5px', background: '#ffffff' }}/>
        <span style={{ display: 'block', width: '24px', height: '1.5px', background: '#ffffff' }}/>
      </button>
      {open && (
        <div style={{ position: 'fixed', inset: 0, background: '#04020a', zIndex: 999, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }} onClick={() => setOpen(false)}>
          <button style={{ position: 'absolute', top: '2rem', right: '2.5rem', background: 'none', border: 'none', color: 'rgba(255,255,255,0.5)', fontSize: '1.5rem', cursor: 'pointer', zIndex: 2 }} onClick={() => setOpen(false)}>✕</button>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', zIndex: 2 }} onClick={e => e.stopPropagation()}>
            {links.map((l, i) => (
              <a key={l.href} href={l.href} className="mxo-fullnav-link"
                style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '144px', fontWeight: 300, lineHeight: '144px', color: '#ffffff', textDecoration: 'none', display: 'flex', alignItems: 'baseline', gap: '1.5rem', transition: 'color 0.15s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#d9737a')}
                onMouseLeave={e => (e.currentTarget.style.color = '#ffffff')}>
                <span style={{ fontSize: '0.55em', color: '#d9737a', letterSpacing: '0.2em' }}>0{i+1}</span>
                {l.label}
              </a>
            ))}
          </div>
          <p style={{ position: 'absolute', bottom: '2.5rem', fontSize: '0.6rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', zIndex: 2 }}>Itxaso Muntión — Content Creator &amp; Digital Strategist</p>
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
  return (
    <div style={{ minHeight: '100vh', background: 'transparent', color: '#ffffff', position: 'relative' }}>
      <FloatingNav />
      <div style={{ maxWidth: '820px', margin: '0 auto', padding: '10rem 2rem 6rem', position: 'relative', zIndex: 2 }}>
        <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#d9737a', marginBottom: '1rem' }}>Legal</p>
        <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 300, color: '#ffffff', lineHeight: 1.1, marginBottom: '2.5rem' }}>
          Privacy Policy
        </h1>
        <Section title="What this site collects">
          <p>This is a personal portfolio. It does not run analytics or advertising trackers, and it does not sell or share personal data with third parties.</p>
        </Section>
        <Section title="Contact form">
          <p>If you fill in the contact form, the name, email address and message you submit are sent via Netlify Forms so I can read and reply to your message. That's the only use of that information.</p>
        </Section>
        <Section title="Cookies">
          <p>No tracking or advertising cookies are set. The site may use strictly technical, session-level storage needed to make pages work correctly.</p>
        </Section>
        <Section title="Hosting">
          <p>This site is hosted on Netlify, which may process technical server logs (like IP address and browser type) as part of delivering the site — standard for any web host.</p>
        </Section>
        <Section title="Questions">
          <p>If you have any questions about this policy or your data, reach out via the <a href="/contact" style={{ color: '#d9737a' }}>contact page</a>.</p>
        </Section>
        <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', marginTop: '3rem' }}>Last updated: {new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long' })}</p>
      </div>
    </div>
  )
}
