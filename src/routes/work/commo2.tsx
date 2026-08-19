import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'
export const Route = createFileRoute('/work/commo2')({
  component: Commo2Page,
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
      <a href="/projects" style={{ position: 'fixed', top: '1.4rem', left: '1.8rem', zIndex: 100,
        fontFamily: "'Outfit', sans-serif", fontSize: '0.65rem', fontWeight: 500,
        letterSpacing: '0.2em', textTransform: 'uppercase', color: '#ffffff',
        textDecoration: 'none' }}>← Back to projects</a>
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
          <button style={{ position: 'absolute', top: '2rem', right: '2.5rem', background: 'none', border: 'none', color: 'rgba(255,255,255,0.6)', fontSize: '1.5rem', cursor: 'pointer', zIndex: 2 }} onClick={() => setOpen(false)}>✕</button>
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
          <p style={{ position: 'absolute', bottom: '2.5rem', fontSize: '0.6rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', zIndex: 2 }}>Itxaso Muntión — Content Creator & Digital Strategist</p>
        </div>
      )}
    </>
  )
}
function Commo2Page() {
  const tags = ['Home Optimisation', 'Sustainability', 'Emotional Wellbeing', 'Affiliate Marketing', 'Content Strategy', 'SEO', 'Brand Positioning', 'Shared Living']
  return (
    <div style={{ minHeight: '100vh', background: 'transparent', color: '#ffffff', position: 'relative' }}>
      <FloatingNav />
      <article style={{ maxWidth: 860, margin: '0 auto', padding: '10rem 3.5rem 8rem', position: 'relative', zIndex: 2 }}>
        <div style={{ marginBottom: '4rem' }}>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.62rem', fontWeight: 600, letterSpacing: '0.38em', textTransform: 'uppercase', color: '#ffffff', marginBottom: '2rem' }}>Master's Final Project · 2024—2025</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '2.5rem' }}>
            <img src="/photos/commo2/commo2-main-logo.png" alt="Commo2" style={{ height: '80px', width: 'auto', objectFit: 'contain' }} />
            <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '64px', fontWeight: 400, color: '#ffffff', lineHeight: 1, letterSpacing: '0.02em', margin: 0 }}>Commo2</h1>
          </div>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '18.4px', fontWeight: 300, lineHeight: '34.96px', color: 'rgba(255,255,255,0.9)' }}>
            A content brand for people who share flats and deserve to feel at home.
          </p>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '5rem' }}>
          {tags.map((tag, i) => (
            <span key={i} style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.62rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', border: '1px solid rgba(255,255,255,0.2)', padding: '0.5rem 1rem' }}>
              {tag}
            </span>
          ))}
        </div>
        <div style={{ marginBottom: '5rem', paddingBottom: '5rem', borderBottom: '1px solid rgba(255,255,255,0.12)' }}>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.62rem', fontWeight: 600, letterSpacing: '0.38em', textTransform: 'uppercase', color: '#ffffff', marginBottom: '2rem' }}>What it is</p>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '18.4px', fontWeight: 300, lineHeight: '34.96px', color: 'rgba(255,255,255,0.9)', marginBottom: '1.6rem' }}>
            Commo2 is a digital content brand centred on home optimisation, sustainability and emotional wellbeing — built specifically for young people living in shared rental flats. Part blog, part community, part affiliate strategy.
          </p>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '18.4px', fontWeight: 300, lineHeight: '34.96px', color: 'rgba(255,255,255,0.9)' }}>
            The model is built around affiliate marketing in year one, growing into brand collaborations and original content in year two — with a community philosophy at the centre of everything.
          </p>
        </div>
        <div style={{ marginBottom: '5rem', paddingBottom: '5rem', borderBottom: '1px solid rgba(255,255,255,0.12)' }}>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.62rem', fontWeight: 600, letterSpacing: '0.38em', textTransform: 'uppercase', color: '#ffffff', marginBottom: '2rem' }}>Why it's necessary</p>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '18.4px', fontWeight: 300, lineHeight: '34.96px', color: 'rgba(255,255,255,0.9)', marginBottom: '1.6rem' }}>
            Most home content is aspirational to the point of being useless. It assumes you own the place, have budget to renovate and live alone. The reality for a huge part of a generation is the opposite: shared kitchens, landlords who won't let you drill a single hole, and the constant feeling of adapting to someone else's rules.
          </p>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '18.4px', fontWeight: 300, lineHeight: '34.96px', color: 'rgba(255,255,255,0.9)' }}>
            Nobody was talking about this seriously. Commo2 does.
          </p>
        </div>
        <blockquote style={{ borderLeft: '3px solid #d9737a', padding: '1.2rem 0 1.2rem 2rem', margin: '0 0 5rem', fontFamily: "'Outfit', sans-serif", fontSize: '18.4px', fontWeight: 300, color: 'rgba(255,255,255,0.7)', lineHeight: '34.96px' }}>
          &ldquo;A life that feels comfortable, even just within your own home, means more peace, fewer distractions and greater happiness.&rdquo;
        </blockquote>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem' }}>
          {[
            { num: '3', label: 'Competitors analysed' },
            { num: '2yr', label: 'Business roadmap' },
            { num: '8', label: 'Final score' },
          ].map(({ num, label }, i) => (
            <div key={i} style={{ border: '1px solid rgba(255,255,255,0.15)', padding: '2rem 1.5rem' }}>
              <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '3rem', color: '#ffffff', margin: '0 0 0.3rem', lineHeight: 1 }}>{num}</p>
              <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.65rem', fontWeight: 400, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', margin: 0 }}>{label}</p>
            </div>
          ))}
        </div>
        <div style={{ marginTop: '5rem', paddingTop: '3rem', borderTop: '1px solid rgba(255,255,255,0.12)' }}>
          <Link to="/projects" style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#ffffff', textDecoration: 'none' }}>← Back to projects</Link>
        </div>
      </article>
    </div>
  )
}
