import { createFileRoute } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import { CLUE_EVENT, CLUE_TOTAL, getFoundCount } from '../lib/clues'
import ClueDoubleClick from '../components/ClueDoubleClick'
import TreasureReveal from '../components/TreasureReveal'
export const Route = createFileRoute('/contact')({
  component: ContactPage,
})
// Land here having found every hidden clue across the site and a
// small reward reveals itself.
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
          <p style={{ position: 'absolute', bottom: '2.5rem', fontSize: '0.6rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', zIndex: 2 }}>Itxaso Muntión — Content Creator & Digital Strategist</p>
        </div>
      )}
    </>
  )
}
function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [foundTrail, setFoundTrail] = useState(false)
  useEffect(() => {
    setFoundTrail(getFoundCount() === CLUE_TOTAL)
    const onFound = () => setFoundTrail(getFoundCount() === CLUE_TOTAL)
    window.addEventListener(CLUE_EVENT, onFound)
    return () => window.removeEventListener(CLUE_EVENT, onFound)
  }, [])
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }
  return (
    <div style={{ minHeight: '100vh', background: 'transparent', color: '#ffffff', position: 'relative' }}>
      <FloatingNav />
      <div style={{ maxWidth: '1300px', margin: '0 auto', padding: '10rem 2rem 6rem', position: 'relative', zIndex: 2 }}>
      <div style={{ maxWidth: '640px' }}>
        <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 300, color: '#ffffff', lineHeight: 1.1, marginBottom: '1.5rem' }}>
          Let's make something<br /><ClueDoubleClick id="contact-dblclick">worth making</ClueDoubleClick>
        </h1>
        <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '18.4px', fontWeight: 300, color: 'rgba(255,255,255,0.82)', lineHeight: '34.96px', marginBottom: '3rem' }}>
          If your project seeks to connect authentically and generate real impact, I'd love to hear from you.
        </p>
        {foundTrail && <TreasureReveal />}
        {submitted ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '3rem 0' }}>
            <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.6rem', color: '#ffffff' }}>Message received.</p>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.9rem', fontWeight: 300, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8 }}>Thank you for writing. I'll be in touch soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <label style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.62rem', fontWeight: 600, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)' }}>Name</label>
              <input name="name" type="text" required placeholder="Your name"
                style={{ background: 'transparent', border: 'none', borderBottom: '1px solid rgba(255,255,255,0.3)', padding: '0.8rem 0', fontFamily: "'Outfit', sans-serif", fontSize: '0.95rem', fontWeight: 300, color: '#ffffff', outline: 'none', width: '100%' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <label style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.62rem', fontWeight: 600, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)' }}>Email</label>
              <input name="email" type="email" required placeholder="you@email.com"
                style={{ background: 'transparent', border: 'none', borderBottom: '1px solid rgba(255,255,255,0.3)', padding: '0.8rem 0', fontFamily: "'Outfit', sans-serif", fontSize: '0.95rem', fontWeight: 300, color: '#ffffff', outline: 'none', width: '100%' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <label style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.62rem', fontWeight: 600, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)' }}>Message</label>
              <textarea name="message" required placeholder="Tell me about your project, your vision, your world..." rows={5}
                defaultValue={foundTrail ? "Found your trail. Here's my idea:\n\n" : undefined}
                style={{ background: 'transparent', border: 'none', borderBottom: '1px solid rgba(255,255,255,0.3)', padding: '0.8rem 0', fontFamily: "'Outfit', sans-serif", fontSize: '0.95rem', fontWeight: 300, color: '#ffffff', outline: 'none', width: '100%', resize: 'none' }} />
            </div>
            <button type="submit"
              style={{ alignSelf: 'flex-start', fontFamily: "'Outfit', sans-serif", fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#ffffff', background: '#d9737a', border: 'none', padding: '1rem 2.5rem', cursor: 'pointer' }}>
              Send message
            </button>
          </form>
        )}
      </div>
      </div>
    </div>
  )
}
