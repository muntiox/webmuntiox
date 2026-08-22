import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'
import ClueHold from '../components/ClueHold'
export const Route = createFileRoute('/projects')({
  component: ProjectsPage,
})
function FloatingNav() {
  const [open, setOpen] = useState(false)
  const links = [
    { href: '/', label: 'Back home' },
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
          <p style={{ position: 'absolute', bottom: '2.5rem', fontSize: '0.6rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', zIndex: 2 }}>Itxaso Muntión — Content Creator & Digital Strategist</p>
        </div>
      )}
    </>
  )
}
function ProjectsPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'transparent', color: '#ffffff', position: 'relative' }}>
      <FloatingNav />
      <div style={{ maxWidth: 1300, margin: '0 auto', padding: '10rem 3.5rem 6rem', position: 'relative', zIndex: 2 }}>
        <div style={{ marginBottom: '5rem' }}>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.62rem', fontWeight: 600, letterSpacing: '0.38em', textTransform: 'uppercase', color: '#ffffff', marginBottom: '2rem' }}>Projects</p>
          <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '64px', fontWeight: 400, color: '#ffffff', lineHeight: 1, letterSpacing: '0.02em', marginBottom: '1.2rem' }}>Selected Work</h1>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '18.4px', fontWeight: 300, lineHeight: '34.96px', color: 'rgba(255,255,255,0.9)', marginBottom: '0.5rem' }}>This is <ClueHold id="projects-hold">who</ClueHold> I am and where I come from.</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {/* RCCOON */}
          <div style={{ textDecoration: 'none', color: 'inherit', display: 'block', padding: '3.5rem 0', borderTop: '1px solid rgba(255,255,255,0.15)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1rem' }}>
              <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.62rem', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase' }}>2020 — 2026</span>
              <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.55rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#ffffff', border: '1px solid rgba(255,255,255,0.35)', padding: '0.15rem 0.5rem' }}>Non-profit</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.6rem' }}>
              <img src="/photos/rccoon-logo.png" alt="RCCOON" style={{ height: '50px', width: 'auto', objectFit: 'contain' }} />
              <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '40px', fontWeight: 300, lineHeight: '44px', color: '#ffffff', margin: 0 }}>RCCOON</h3>
            </div>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '18.4px', fontWeight: 300, color: 'rgba(255,255,255,0.9)', lineHeight: '34.96px', marginBottom: '1.2rem' }}>Citizen Action · Digital Strategy · Community</p>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '18.4px', fontWeight: 300, color: 'rgba(255,255,255,0.9)', lineHeight: '34.96px', maxWidth: 680, marginBottom: '1rem' }}>A grassroots movement turning awareness into action — social, environmental and animal justice. Brand identity, content, editorial planning, volunteer coordination and campaign visibility from the ground up.</p>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontStyle: 'italic', fontSize: '18.4px', fontWeight: 300, color: 'rgba(255,255,255,0.9)', lineHeight: '34.96px', marginBottom: '1.5rem' }}>&quot;Turn empathy into responsibility, and responsibility into action.&quot;</p>
            <Link to="/work/rccoon" style={{ fontFamily: "'Outfit', sans-serif", fontSize: '18.4px', fontWeight: 700, color: '#ffffff', textDecoration: 'none' }}>Come snoop around →</Link>
          </div>
          {/* Sopelazabalik */}
          <div style={{ padding: '3.5rem 0', borderTop: '1px solid rgba(255,255,255,0.15)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1rem' }}>
              <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.62rem', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase' }}>May 2021 — Jan 2022</span>
              <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.55rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#ffffff', border: '1px solid rgba(255,255,255,0.35)', padding: '0.15rem 0.5rem' }}>Freelance</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.6rem' }}>
              <img src="/photos/sopelazabalik-logo.jpg" alt="@sopelazabalik" style={{ height: '50px', width: 'auto', objectFit: 'contain' }} />
              <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '40px', fontWeight: 300, lineHeight: '44px', color: '#ffffff', margin: 0 }}>@sopelazabalik</h3>
            </div>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '18.4px', fontWeight: 300, color: 'rgba(255,255,255,0.9)', lineHeight: '34.96px', marginBottom: '1rem' }}>Community Manager · Creative Content · Local Promotion</p>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '18.4px', fontWeight: 300, color: 'rgba(255,255,255,0.9)', lineHeight: '34.96px', maxWidth: 680, marginBottom: '1rem' }}>A community account for Sopelana — a small town in the Basque Country. The idea was to give the place a bit of life online: promoting local businesses in a creative way, dropping hints, building curiosity around what was already there but nobody was talking about.</p>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '18.4px', fontWeight: 300, color: 'rgba(255,255,255,0.9)', lineHeight: '34.96px', maxWidth: 680 }}>A local account that someone trusted me with. I managed it for eight months, learned what it means to build an audience from zero, and left it in better shape than I found it.</p>
            <a href="https://www.instagram.com/sopelazabalik/" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'Outfit', sans-serif", fontSize: '18.4px', fontWeight: 700, color: '#ffffff', lineHeight: '34.96px', textDecoration: 'none', display: 'inline-block', marginTop: '1rem' }}>@sopelazabalik →</a>
          </div>
          {/* Casa l'Espiga */}
          <div style={{ padding: '3.5rem 0', borderTop: '1px solid rgba(255,255,255,0.15)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1rem' }}>
              <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.62rem', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase' }}>2023</span>
              <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.55rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#ffffff', border: '1px solid rgba(255,255,255,0.35)', padding: '0.15rem 0.5rem' }}>Freelance</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.6rem' }}>
              <img src="/photos/laespiga-logo.png" alt="Casa l'Espiga" style={{ height: '50px', width: 'auto', objectFit: 'contain' }} />
              <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '40px', fontWeight: 300, lineHeight: '44px', color: '#ffffff', margin: 0 }}>Casa l&apos;Espiga</h3>
            </div>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '18.4px', fontWeight: 300, color: 'rgba(255,255,255,0.9)', lineHeight: '34.96px', marginBottom: '1rem' }}>Photo & Video Content · Rural Tourism · Delta del Ebro</p>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '18.4px', fontWeight: 300, color: 'rgba(255,255,255,0.9)', lineHeight: '34.96px', maxWidth: 680, marginBottom: '1rem' }}>They gave me the house for a whole weekend — just me, a camera, and a rural retreat in the Delta del Ebro. My first job like this. I shot photos and videos across two days, and I loved every second of it. It confirmed something I already suspected: travelling to work is my thing.</p>
            <Link to="/work/espiga" style={{ fontFamily: "'Outfit', sans-serif", fontSize: '18.4px', fontWeight: 700, color: '#ffffff', lineHeight: '34.96px', textDecoration: 'none', display: 'inline-block', marginTop: '1.5rem' }}>Check in(side the project) →</Link>
          </div>
          {/* Commo2 */}
          <div style={{ padding: '3.5rem 0', borderTop: '1px solid rgba(255,255,255,0.15)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1rem' }}>
              <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.62rem', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase' }}>2024 — 2025</span>
              <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.55rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#ffffff', border: '1px solid rgba(255,255,255,0.35)', padding: '0.15rem 0.5rem' }}>Academic</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.6rem' }}>
              <img src="/photos/commo2-logo.png" alt="Commo2" style={{ height: '50px', width: 'auto', objectFit: 'contain' }} />
              <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '40px', fontWeight: 300, lineHeight: '44px', color: '#ffffff', margin: 0 }}>Commo2</h3>
            </div>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '18.4px', fontWeight: 300, color: 'rgba(255,255,255,0.9)', lineHeight: '34.96px', marginBottom: '1.2rem' }}>Strategy · Branding · Digital Ecosystem</p>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '18.4px', fontWeight: 300, color: 'rgba(255,255,255,0.9)', lineHeight: '34.96px', maxWidth: 680, marginBottom: '1rem' }}>A full brand concept for an ethical home label built around sustainability, emotional wellbeing and affiliate-driven content — making shared living affordable, conscious, and feel like home.</p>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontStyle: 'italic', fontSize: '18.4px', fontWeight: 300, color: 'rgba(255,255,255,0.9)', lineHeight: '34.96px', marginBottom: '1.5rem' }}>&quot;Conscious living, made accessible.&quot;</p>
            <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: '18.4px', fontWeight: 300, color: 'rgba(255,255,255,0.9)', display: 'block', marginBottom: '1rem' }}>Master&apos;s Final Project · 2025</span>
            <a href="/work/commo2" style={{ fontFamily: "'Outfit', sans-serif", fontSize: '18.4px', fontWeight: 700, color: '#ffffff', textDecoration: 'none' }}>Move in →</a>
          </div>
          {/* Club Open Minded */}
          <div style={{ padding: '3.5rem 0', borderTop: '1px solid rgba(255,255,255,0.15)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1rem' }}>
              <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.62rem', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase' }}>Dec 2025 — Jun 2026</span>
              <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.55rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#ffffff', border: '1px solid rgba(255,255,255,0.35)', padding: '0.15rem 0.5rem' }}>Content & Production</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.6rem' }}>
              <img src="/photos/open-logo.png" alt="Club Open Minded" style={{ height: '40px', width: 'auto', objectFit: 'contain' }} />
              <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '40px', fontWeight: 300, lineHeight: '44px', color: '#ffffff', margin: 0 }}>Club Open Minded</h3>
            </div>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '18.4px', fontWeight: 300, color: 'rgba(255,255,255,0.9)', lineHeight: '34.96px', marginBottom: '0.5rem' }}>Content Director</p>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '18.4px', fontWeight: 300, color: 'rgba(255,255,255,0.9)', lineHeight: '34.96px', maxWidth: 680, marginBottom: '1rem' }}>Podcast editing, social media content and full ownership of the venue&apos;s visual screens — deciding what played, when and how. At the same time, responsible for developing entertainment ideas and programming concepts for the space.</p>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '18.4px', fontWeight: 300, color: 'rgba(255,255,255,0.9)', lineHeight: '34.96px', maxWidth: 680 }}>A place where I pushed my editing skills further and learned to think about content not just for screens, but for rooms full of people.</p>
          </div>
          {/* Rawena */}
          <div style={{ padding: '3.5rem 0', borderTop: '1px solid rgba(255,255,255,0.15)' }}>
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '0.8rem', flexWrap: 'wrap' }}>
              <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.62rem', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase' }}>2026</span>
              <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.55rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#ffffff', border: '1px solid rgba(255,255,255,0.35)', padding: '0.15rem 0.5rem' }}>Video & Editing</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.4rem' }}>
              <img src="/photos/rawena-logo.png" alt="Rawena" style={{ height: '40px', width: 'auto', objectFit: 'contain' }} />
              <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '40px', fontWeight: 300, lineHeight: '44px', color: '#ffffff', margin: 0 }}>Rawena</h3>
            </div>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '18.4px', fontWeight: 300, color: 'rgba(255,255,255,0.9)', lineHeight: '34.96px', marginBottom: '0.8rem' }}>Presentation video for an upcoming software product — currently in development. Full video production and editing.</p>
            <a href="https://rawenatech.com/" target="_blank" rel="noopener noreferrer"
              style={{ fontFamily: "'Outfit', sans-serif", fontSize: '18.4px', fontWeight: 700, color: '#ffffff', textDecoration: 'none', lineHeight: '34.96px' }}>rawenatech.com →</a>
          </div>
          {/* CIBA */}
          <div style={{ padding: '3.5rem 0', borderTop: '1px solid rgba(255,255,255,0.15)' }}>
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '0.8rem', flexWrap: 'wrap' }}>
              <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.62rem', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase' }}>2019 — 2020</span>
              <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.55rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#ffffff', border: '1px solid rgba(255,255,255,0.35)', padding: '0.15rem 0.5rem' }}>Television</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.4rem' }}>
              <img src="/photos/cienycia-logo.jpg" alt="Cien&Cia" style={{ height: '40px', width: 'auto', objectFit: 'contain' }} />
              <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '40px', fontWeight: 300, lineHeight: '44px', color: '#ffffff', margin: 0 }}>Video Editor & Audiovisual Producer</h3>
            </div>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.7rem', fontWeight: 400, letterSpacing: '0.1em', color: 'rgba(255,255,255,0.55)', textTransform: 'uppercase', marginBottom: '1rem' }}>CIBA / I+D+i · Universidad de Burgos · Burgos</p>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '18.4px', fontWeight: 300, color: 'rgba(255,255,255,0.9)', lineHeight: '34.96px', marginBottom: '1rem' }}>Full post-production of <em>Cien&amp;Cia</em> (CyL7, RTVCyL, La 8 Burgos) and multicamera editing for @UBUInvestiga.</p>
            <a href="https://www.youtube.com/watch?v=ZIrBI3mqTxI" target="_blank" rel="noopener noreferrer"
              style={{ fontFamily: "'Outfit', sans-serif", fontSize: '18.4px', fontWeight: 700, color: '#ffffff', textDecoration: 'none', lineHeight: '34.96px' }}>Watch the Season 4 recap →</a>
          </div>
          {/* Hospitality */}
          <div style={{ padding: '3.5rem 0', borderTop: '1px solid rgba(255,255,255,0.15)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1rem' }}>
              <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.62rem', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase' }}>2015 — 2026</span>
              <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.55rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#ffffff', border: '1px solid rgba(255,255,255,0.35)', padding: '0.15rem 0.5rem' }}>Hospitality</span>
            </div>
            <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '40px', fontWeight: 300, lineHeight: '44px', color: '#ffffff', margin: '0 0 0.6rem' }}>Lessons from unexpected places</h3>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '18.4px', fontWeight: 300, color: 'rgba(255,255,255,0.9)', lineHeight: '34.96px', maxWidth: 680, marginBottom: '1.2rem' }}>From the hospitality industry, I&apos;ve learnt to find my calm again, not to give up when I&apos;m tired, to be resilient, to work under pressure, to understand what people want, to work as part of a team, to be genuinely happy for my colleagues&apos; achievements, not to compare myself to others, to enjoy myself even when I didn&apos;t feel like working, to accept constructive criticism, and above all, how to show up every day asking: <em>&quot;How can I make this place a little better because I was here?&quot;</em></p>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '18.4px', fontWeight: 300, color: 'rgba(255,255,255,0.9)', lineHeight: '34.96px', maxWidth: 680 }}>Those lessons have shaped the way I approach every creative project today — and I think they deserve to be here.</p>
          </div>
          {/* Courses */}
          <div style={{ padding: '3.5rem 0', borderTop: '1px solid rgba(255,255,255,0.15)' }}>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.38em', textTransform: 'uppercase', color: '#ffffff', marginBottom: '2rem' }}>Courses & Other Info</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
              <div style={{ border: '2px solid rgba(255,255,255,0.15)', padding: '1.5rem' }}>
                <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.2rem', color: '#ffffff', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>Neuromarketing</p>
                <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.65rem', fontWeight: 400, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', marginBottom: '0.5rem' }}>2021</p>
              </div>
              <div style={{ border: '2px solid rgba(255,255,255,0.15)', padding: '1.5rem' }}>
                <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.2rem', color: '#ffffff', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>After Effects</p>
                <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.65rem', fontWeight: 400, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', marginBottom: '0.5rem' }}>2022</p>
              </div>
              <div style={{ border: '2px solid rgba(255,255,255,0.15)', padding: '1.5rem' }}>
                <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.2rem', color: '#ffffff', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>Final Project</p>
                <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.65rem', fontWeight: 400, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', marginBottom: '0.8rem' }}>Narrative music video · 8/10</p>
                <a href="https://www.youtube.com/watch?v=qFEYbfOfNpI" target="_blank" rel="noopener noreferrer"
                  style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#ffffff', textDecoration: 'none' }}>Watch →</a>
              </div>
              <div style={{ border: '2px solid rgba(255,255,255,0.15)', padding: '1.5rem' }}>
                <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.2rem', color: '#ffffff', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>Stock Video Edits</p>
                <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.65rem', fontWeight: 400, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', marginBottom: '0.8rem' }}>Cinematic edits with stock footage & music</p>
                <a href="https://www.youtube.com/watch?v=3OZsmRnIIUk&list=PLrDfvnUUMDRpwRBky-0hveo-pVJwWDbmO&index=4" target="_blank" rel="noopener noreferrer"
                  style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#ffffff', textDecoration: 'none' }}>Watch playlist →</a>
              </div>
            </div>
          </div>
          <div style={{ marginTop: '3rem' }}>
            <a href="/docs/IMG_CV_ENG.pdf" download style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#ffffff', background: '#d9737a', padding: '1rem 2.5rem', textDecoration: 'none', display: 'inline-block', marginRight: '1rem' }}>Download CV — EN →</a>
            <a href="/docs/IMG_CV_ES.pdf" download style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#ffffff', background: '#d9737a', padding: '1rem 2.5rem', textDecoration: 'none', display: 'inline-block', }}>Download CV — ES →</a>
          </div>
        </div>
      </div>
    </div>
  )
}
