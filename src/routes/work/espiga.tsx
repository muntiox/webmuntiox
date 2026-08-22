import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'
export const Route = createFileRoute('/work/espiga')({
  component: EspigaPage,
})
function FloatingNav() {
  const [open, setOpen] = useState(false)
  const links = [
    { href: '/', label: 'Muntiox' },
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
        <div style={{ position: 'fixed', inset: 0, background: '#04020a', zIndex: 999, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', overflowY: 'auto', padding: '3rem 0' }} onClick={() => setOpen(false)}>
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
function EspigaPage() {
  const [selected, setSelected] = useState<number | null>(null)
  const total = 24
  const photos = [1,2,3,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]
  return (
    <div style={{ minHeight: '100vh', background: 'transparent', color: '#ffffff', position: 'relative' }}>
      <FloatingNav />
      <div style={{ maxWidth: 1300, margin: '0 auto', padding: '8rem 3.5rem 6rem', position: 'relative', zIndex: 2 }}>
        <div style={{ marginBottom: '4rem' }}>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.62rem', fontWeight: 600, letterSpacing: '0.38em', textTransform: 'uppercase', color: '#ffffff', marginBottom: '1rem' }}>2023 · Freelance</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1.2rem' }}>
            <img src="/photos/laespiga-logo.png" alt="Casa l'Espiga" style={{ height: '80px', width: 'auto', objectFit: 'contain' }} />
            <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '64px', fontWeight: 400, color: '#ffffff', lineHeight: 1, letterSpacing: '0.02em', margin: 0 }}>Casa l&apos;Espiga</h1>
          </div>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '18.4px', fontWeight: 300, lineHeight: '34.96px', color: 'rgba(255,255,255,0.9)', maxWidth: 620 }}>A full weekend in a rural retreat in the Delta del Ebro — just me and a camera. Photo &amp; video content for a place that deserved to be seen.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '0.75rem' }}>
          {photos.map(n => (
            <img key={n} src={`/photos/espiga/espiga-photo-${n}.jpg`} alt=""
              onClick={() => setSelected(n)}
              style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover', cursor: 'pointer', display: 'block', transition: 'opacity 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.75')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            />
          ))}
        </div>
      </div>
      {selected !== null && (
        <div onClick={() => setSelected(null)}
          style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.92)', zIndex: 999, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
          <button onClick={(e) => { e.stopPropagation(); setSelected(s => s! > 1 ? s! - 1 : total) }}
            style={{ position: 'absolute', left: '2rem', background: 'none', border: 'none', color: '#fff', fontSize: '2rem', cursor: 'pointer', opacity: 0.6 }}>‹</button>
          <img src={`/photos/espiga/espiga-photo-${selected}.jpg`} alt=""
            style={{ maxHeight: '90vh', maxWidth: '90vw', objectFit: 'contain' }}
            onClick={e => e.stopPropagation()}/>
          <button onClick={(e) => { e.stopPropagation(); setSelected(s => s! < total ? s! + 1 : 1) }}
            style={{ position: 'absolute', right: '2rem', background: 'none', border: 'none', color: '#fff', fontSize: '2rem', cursor: 'pointer', opacity: 0.6 }}>›</button>
          <button onClick={() => setSelected(null)}
            style={{ position: 'absolute', top: '1.5rem', right: '2rem', background: 'none', border: 'none', color: '#fff', fontSize: '1.5rem', cursor: 'pointer', opacity: 0.6 }}>✕</button>
          <p style={{ position: 'absolute', bottom: '1.5rem', fontFamily: "'Outfit', sans-serif", fontSize: '0.65rem', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.4)' }}>{selected} / {total}</p>
        </div>
      )}
    <div style={{ position: 'relative', zIndex: 2, maxWidth: 1300, margin: '0 auto', padding: '0 3.5rem 6rem' }}>
        <div style={{ paddingTop: '3rem', borderTop: '1px solid rgba(255,255,255,0.12)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link to="/projects" style={{ fontFamily: "'Outfit', sans-serif", fontSize: '18.4px', fontWeight: 300, color: '#ffffff', lineHeight: '34.96px', textDecoration: 'none' }}>← Back to projects</Link>
          <a href="https://www.instagram.com/casalespiga/" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'Outfit', sans-serif", fontSize: '18.4px', fontWeight: 300, color: '#ffffff', lineHeight: '34.96px', textDecoration: 'none' }}>@casalespiga →</a>
        </div>
      </div>
    </div>
  )
}
