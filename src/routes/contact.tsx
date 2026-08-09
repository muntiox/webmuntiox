import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/contact')({
  component: () => <div style={{background:'#070709', color:'white', minHeight:'100vh', padding:'2rem'}}>TEST</div>,
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
      {/* Home top left */}
      <a href="/" style={{ position: 'fixed', top: '1.4rem', left: '1.8rem', zIndex: 100,
        fontFamily: "'Outfit', sans-serif", fontSize: '0.65rem', fontWeight: 500,
        letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(237,234,226,0.6)',
        textDecoration: 'none' }}>← Home</a>
      <button onClick={() => setOpen(true)} aria-label="Open menu"
        style={{ position: 'fixed', top: '1.4rem', right: '1.8rem', zIndex: 100,
          background: 'none', border: 'none', cursor: 'pointer',
          display: 'flex', flexDirection: 'column', gap: '5px', padding: '8px' }}>
        <span style={{ display: 'block', width: '24px', height: '1.5px', background: '#edeae2' }}/>
        <span style={{ display: 'block', width: '24px', height: '1.5px', background: '#edeae2' }}/>
        <span style={{ display: 'block', width: '24px', height: '1.5px', background: '#edeae2' }}/>
      </button>
      {open && (
        <div style={{ position: 'fixed', inset: 0, background: '#04020a', zIndex: 999, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }} onClick={() => setOpen(false)}>
          <button style={{ position: 'absolute', top: '2rem', right: '2.5rem', background: 'none', border: 'none', color: 'rgba(237,234,226,0.5)', fontSize: '1.5rem', cursor: 'pointer', zIndex: 2 }} onClick={() => setOpen(false)}>✕</button>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', zIndex: 2 }} onClick={e => e.stopPropagation()}>
            {links.map((l, i) => (
              <a key={l.href} href={l.href} className="mxo-fullnav-link"
                style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '144px', fontWeight: 300, lineHeight: '144px', color: 'rgb(237, 234, 226)', textDecoration: 'none', display: 'flex', alignItems: 'baseline', gap: '1.5rem', transition: 'color 0.15s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#c86c2e')}
                onMouseLeave={e => (e.currentTarget.style.color = '#edeae2')}>
                <span style={{ fontSize: '0.55em', color: 'rgba(200,108,46,0.7)', letterSpacing: '0.2em' }}>0{i+1}</span>
                {l.label}
              </a>
            ))}
          </div>
          <p style={{ position: 'absolute', bottom: '2.5rem', fontSize: '0.6rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(237,234,226,0.2)', zIndex: 2 }}>Itxaso Muntión — Content Creator & Digital Strategist</p>
        </div>
      )}
    </>
  )
}

function ContactPage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
    const form = e.currentTarget
    const formData = new FormData(form)
    fetch('/contact.html', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
    })
      .then(() => setSubmitted(true))
      .catch(() => setSubmitted(true))
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#070709',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '6rem 2rem',
        position: 'relative',
      }}
    >
      <FloatingNav />

      <video autoPlay muted loop playsInline preload="none"
        style={{ position: 'fixed', inset: 0, width: '100%', height: '100%', objectFit: 'cover',
          mixBlendMode: 'normal', opacity: 0.5, filter: 'brightness(1)', zIndex: 0, pointerEvents: 'none' }}>
        <source src="/videos/contact.mp4" type="video/mp4"/>
      </video>
      <div style={{ maxWidth: '600px', width: '100%', position: 'relative', zIndex: 2 }}>

        {menuOpen && (
          <div style={{ position: 'fixed', inset: 0, background: 'rgba(4,2,10,0.97)', zIndex: 999, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
            onClick={() => setMenuOpen(false)}>
            <button onClick={() => setMenuOpen(false)}
              style={{ position: 'absolute', top: '2rem', right: '2.5rem', background: 'none', border: 'none', color: 'rgba(242,238,231,0.5)', fontSize: '1.5rem', cursor: 'pointer' }}>✕</button>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }} onClick={e => e.stopPropagation()}>
              {[['Purpose','/purpose'],['Projects','/projects'],['Blog','/blog'],['Contact','/contact']].map(([label, href], i) => (
                <Link key={href} to={href as any} className="mxo-fullnav-link"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(3.5rem, 10vw, 9rem)', letterSpacing: '0.06em', color: '#ffffff', textDecoration: 'none', lineHeight: 1, animationDelay: `${i * 0.08}s` }}>
                  <span style={{ fontSize: '0.55em', color: '#c86c2e', marginRight: '1.5rem' }}>0{i+1}</span>{label}
                </Link>
              ))}
            </div>
            <p style={{ position: 'absolute', bottom: '2.5rem', fontFamily: "'Outfit', sans-serif", fontSize: '0.6rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(242,238,231,0.2)' }}>Itxaso Muntión — Content Creator & Digital Strategist</p>
          </div>
        )}

        <h1
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 300,
            color: '#ffffff',
            lineHeight: 1.1,
            marginBottom: '1.5rem',
          }}
        >
          Let's make something<br /><span style={{ color: '#c86c2e' }}>worth making</span>
        </h1>
        <p
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: '0.95rem',
            fontWeight: 300,
            color: 'rgba(242,238,231,0.7)',
            lineHeight: 1.8,
            marginBottom: '3rem',
          }}
        >
          If your project seeks to connect authentically and generate real impact,
          I'd love to hear from you.
        </p>

        {submitted ? (
          <div className="success-message">
            <div className="success-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <p className="success-title">Message received.</p>
            <p className="success-text">
              Thank you for writing. I'll be in touch soon.
            </p>
          </div>
        ) : (
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            onSubmit={handleSubmit}
            className="contact-form"
          >
            <input type="hidden" name="form-name" value="contact" />

            <div className="form-group">
              <label htmlFor="name" className="form-label">Name</label>
              <input id="name" name="name" type="text" required placeholder="Your name" className="form-input" />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input id="email" name="email" type="email" required placeholder="you@email.com" className="form-input" />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea id="message" name="message" required placeholder="Tell me about your project, your vision, your world..." className="form-textarea" />
            </div>
            <button type="submit" className="form-submit" data-hover>
              Send message
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
