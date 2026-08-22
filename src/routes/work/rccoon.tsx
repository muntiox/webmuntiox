import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'
import LanguageSwitcher from '../../components/LanguageSwitcher'
import { useLanguage } from '../../lib/i18n'
import { usePageMeta } from '../../lib/usePageMeta'
export const Route = createFileRoute('/work/rccoon')({
  component: RccoonProject,
})
// ── Page copy — English + Spanish ────────────────────────────────────
const navCopy = {
  en: { home: 'Back home', purpose: 'Purpose', projects: 'Projects', blog: 'Blog', contact: 'Contact', openMenu: 'Open menu', bottom: 'Itxaso Muntión — Content Creator & Digital Strategist' },
  es: { home: 'Inicio', purpose: 'Propósito', projects: 'Proyectos', blog: 'Blog', contact: 'Contacto', openMenu: 'Abrir menú', bottom: 'Itxaso Muntión — Creadora de Contenido y Estratega Digital' },
}
const copy = {
  en: {
    metaTitle: 'RCCOON · Citizen Action — Itxaso Muntión',
    metaDescription: "A grassroots movement turning awareness into action — social, environmental and animal justice. Digital identity built as a volunteer.",
    eyebrow: 'Volunteer Project · 2020 — 2026',
    title: 'RCCOON · Citizen Action',
    intro: "A grassroots movement turning awareness into action — social, environmental and animal justice. I've been building its digital identity from the ground up alongside a friend, as volunteers.",
    note: "This collaboration came to an end in 2026 — we're now focused on bigger things.",
    storyLabel: 'The story',
    storyPre1: 'It started in 2020 as ',
    storyBold1: 'Joves i Solidaris',
    storyPost1: ' — a volunteer portal focused purely on connecting people with local causes. Just volunteering. No campaigns, no activism.',
    storyPre2: 'Over time we realised something was missing. Volunteering wasn’t enough — citizens needed to take real action, step into the streets, and demand change. That’s how ',
    storyBold2: 'RCCOON',
    storyPost2: ' was born: a natural evolution from quiet support into active, citizen-led movement.',
    whatIDo: 'What I do',
    categories: [
      { title: 'Brand Identity', desc: "Logo design, visual system and brand assets for RCCOON's evolving identity. Building a recognisable presence across every touchpoint." },
      { title: 'Social Media Design', desc: 'Static and animated post designs, stories and visual templates. Crafted to communicate causes with clarity and emotion across Instagram and TikTok.' },
      { title: 'Editorial Planning', desc: 'Monthly content calendars and publication scheduling through Metricool. Strategic timing, narrative consistency and channel-specific adaptation.' },
      { title: 'Video Editing', desc: 'Documentary content, social campaign videos and short-form storytelling — edited in Premiere Pro. Visual stories that move people to act.' },
      { title: 'Social Campaigns', desc: 'Activist campaigns built to amplify urgent causes. From conceptualisation to execution — combining design, video, copy and timing to generate real impact.' },
      { title: 'Print & Outdoor', desc: 'Posters, flyers and street campaign materials. Physical pieces designed to stop people in their tracks and bring digital messages into the real world.' },
      { title: 'Community Coordination', desc: 'Volunteer team management — onboarding new members, assigning roles, organising responsibilities. Online coordination during the DANA emergency in Valencia.' },
      { title: 'Campaign Operations', desc: 'Signature collection campaigns, citizen mobilisation logistics, on-the-ground coordination. Where digital strategy meets street-level action.', pdfNote: 'During the DANA emergency in Valencia, we put together this document to help affected people and volunteers self-organise — coordinating resources, needs and actions in real time.' },
    ],
    downloadPdf: 'Download PDF →',
    toolsLabel: 'Tools & Production',
    quote: 'Turn empathy into responsibility, and responsibility into action.',
    learnMorePre: 'Learn more about the project at',
    back: '← Back to projects',
  },
  es: {
    metaTitle: 'RCCOON · Acción Ciudadana — Itxaso Muntión',
    metaDescription: 'Un movimiento de base que convierte la concienciación en acción — justicia social, medioambiental y animal. Identidad digital construida como voluntaria.',
    eyebrow: 'Proyecto de Voluntariado · 2020 — 2026',
    title: 'RCCOON · Acción Ciudadana',
    intro: 'Un movimiento de base que convierte la concienciación en acción — justicia social, medioambiental y animal. He estado construyendo su identidad digital desde cero junto a un amigo, como voluntarios.',
    note: 'Esta colaboración llegó a su fin en 2026 — ahora estamos centrados en cosas más grandes.',
    storyLabel: 'La historia',
    storyPre1: 'Empezó en 2020 como ',
    storyBold1: 'Joves i Solidaris',
    storyPost1: ' — un portal de voluntariado centrado únicamente en conectar a personas con causas locales. Solo voluntariado. Sin campañas, sin activismo.',
    storyPre2: 'Con el tiempo nos dimos cuenta de que faltaba algo. El voluntariado no era suficiente — la ciudadanía necesitaba pasar a la acción real, salir a la calle y exigir cambio. Así nació ',
    storyBold2: 'RCCOON',
    storyPost2: ': una evolución natural desde el apoyo silencioso hacia un movimiento activo, liderado por la ciudadanía.',
    whatIDo: 'Qué hago',
    categories: [
      { title: 'Identidad de Marca', desc: 'Diseño de logo, sistema visual y activos de marca para la identidad en evolución de RCCOON. Construyendo una presencia reconocible en cada punto de contacto.' },
      { title: 'Diseño para Redes Sociales', desc: 'Diseño de publicaciones estáticas y animadas, historias y plantillas visuales. Creadas para comunicar causas con claridad y emoción en Instagram y TikTok.' },
      { title: 'Planificación Editorial', desc: 'Calendarios de contenido mensuales y programación de publicaciones a través de Metricool. Timing estratégico, coherencia narrativa y adaptación específica por canal.' },
      { title: 'Edición de Vídeo', desc: 'Contenido documental, vídeos de campañas sociales y storytelling en formato corto — editado en Premiere Pro. Historias visuales que mueven a la gente a actuar.' },
      { title: 'Campañas Sociales', desc: 'Campañas activistas creadas para amplificar causas urgentes. De la conceptualización a la ejecución — combinando diseño, vídeo, copy y timing para generar un impacto real.' },
      { title: 'Impresión y Vía Pública', desc: 'Carteles, flyers y materiales de campaña callejera. Piezas físicas diseñadas para detener a la gente en seco y llevar los mensajes digitales al mundo real.' },
      { title: 'Coordinación de Comunidad', desc: 'Gestión del equipo de voluntariado — incorporación de nuevos miembros, asignación de roles, organización de responsabilidades. Coordinación online durante la emergencia de la DANA en Valencia.' },
      { title: 'Operaciones de Campaña', desc: 'Campañas de recogida de firmas, logística de movilización ciudadana, coordinación sobre el terreno. Donde la estrategia digital se encuentra con la acción en la calle.', pdfNote: 'Durante la emergencia de la DANA en Valencia, elaboramos este documento para ayudar a las personas afectadas y a los voluntarios a organizarse por sí mismos — coordinando recursos, necesidades y acciones en tiempo real.' },
    ],
    downloadPdf: 'Descargar PDF →',
    toolsLabel: 'Herramientas y Producción',
    quote: 'Convertir la empatía en responsabilidad, y la responsabilidad en acción.',
    learnMorePre: 'Descubre más sobre el proyecto en',
    back: '← Volver a proyectos',
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
          <p style={{ position: 'absolute', bottom: '2.5rem', fontSize: '0.6rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', zIndex: 2 }}>{n.bottom}</p>
        </div>
      )}
    </>
  )
}
function RccoonProject() {
  const { lang } = useLanguage()
  const c = copy[lang]
  usePageMeta(c.metaTitle, c.metaDescription)
  const categories = c.categories.map((cat, i) => {
    const media = [
      { images: ['/photos/rccoon-head.png', '/photos/rccoon-globe.png', '/photos/rccoon-colours.png', '/photos/rccoon-infographic.png'] },
      { images: [
        { src: '/photos/social-media/rccoon-new.png', type: 'image' },
        { src: '/photos/social-media/rccoon-leader.mp4', type: 'video' },
        { src: '/photos/social-media/rccoon-a.mp4', type: 'video' },
        { src: '/photos/social-media/rccoon-hands.mp4', type: 'video' },
        { src: '/photos/social-media/rccoon-mazon2.png', type: 'image' },
      ] },
      { images: ['/photos/calendar.png'] },
      { video: 'https://www.youtube.com/embed/u4fbJTcgwU4', video2: 'https://www.youtube.com/embed/m1akrtforyY', video3: 'https://www.youtube.com/embed/COU7LSEuiE0' },
      { images: [
        '/photos/social-campaigns/ice.png',
        '/photos/social-campaigns/ilp.png',
        '/photos/social-campaigns/bous-1.png',
        '/photos/social-campaigns/bous-3.png',
        '/photos/social-campaigns/bous-5.png',
      ] },
      { images: ['/photos/print-and-outdoor/mazon-poster.png', '/photos/print-and-outdoor/upv-speech.png'] },
      { images: ['/photos/community-coordination/posting.png'] },
      { pdf: '/docs/rccoon-campaign-ops.pdf' },
    ]
    return { ...cat, ...media[i] }
  })
  const tools = ['Premiere Pro', 'Canva', 'Metricool', 'Photoshop', 'Illustrator', 'Adobe Lightroom', 'After Effects', 'CapCut', 'WordPress']
  return (
    <div style={{ minHeight: '100vh', background: 'transparent', fontFamily: "'Bebas Neue', sans-serif" }}>
      <FloatingNav />
      <article style={{ maxWidth: '1300px', margin: '0 auto', padding: '10rem 3.5rem 6rem', position: 'relative', zIndex: 1 }}>
        <header style={{ marginBottom: '5rem' }}>
          <p style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.35em', textTransform: 'uppercase', color: '#ffffff', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ display: 'inline-block', width: 28, height: 1, background: '#d9737a' }} />
            {c.eyebrow}
          </p>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.8rem)', fontWeight: 400, color: '#ffffff', lineHeight: 1.15, marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <img src="/photos/rccoon-logo.png" alt="RCCOON logo" style={{ height: '80px', width: 'auto' }} />
            {c.title}
          </h1>
          <p style={{ fontSize: '1.1rem', fontWeight: 300, color: '#ffffff', lineHeight: 1.85, maxWidth: 720, marginBottom: '2rem' }}>
            {c.intro}
          </p>
          <p style={{ fontSize: '18.4px', fontWeight: 300, fontStyle: 'italic', color: 'rgba(255,255,255,0.9)', lineHeight: '34.96px', maxWidth: 720, marginBottom: '2rem' }}>
            {c.note}
          </p>
          {/* Story */}
          <div style={{ marginTop: '3rem', padding: '2rem 0 2rem 2rem', borderLeft: '2px solid rgba(255,255,255,0.3)', maxWidth: 720 }}>
            <p style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#ffffff', marginBottom: '1.2rem' }}>
              {c.storyLabel}
            </p>
            <p style={{ fontSize: '18.4px', fontWeight: 300, color: 'rgba(255,255,255,0.9)', lineHeight: '34.96px', marginBottom: '1rem' }}>
              {c.storyPre1}<strong style={{ fontWeight: 500, color: '#ffffff' }}>{c.storyBold1}</strong>{c.storyPost1}
            </p>
            <p style={{ fontSize: '18.4px', fontWeight: 300, color: 'rgba(255,255,255,0.9)', lineHeight: '34.96px' }}>
              {c.storyPre2}<strong style={{ fontWeight: 500, color: '#ffffff' }}>{c.storyBold2}</strong>{c.storyPost2}
            </p>
          </div>
        </header>
        <section>
          <p style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.35em', textTransform: 'uppercase', color: '#ffffff', marginBottom: '3rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ display: 'inline-block', width: 28, height: 1, background: '#d9737a' }} />
            {c.whatIDo}
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {categories.map((cat, i) => (
              <div
                key={cat.title}
                style={{
                  background: 'rgba(0,0,0,0.25)',
                  border: 'none',
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  position: 'relative',
                  transition: 'transform 0.25s, box-shadow 0.25s, border-color 0.25s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-3px)'
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(26,37,32,0.10)'
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.35)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 500, color: '#ffffff', letterSpacing: '0.1em' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 500, color: '#ffffff', lineHeight: 1.3 }}>{cat.title}</h3>
                </div>
                <p style={{ fontSize: '18.4px', fontWeight: 300, color: 'rgba(255,255,255,0.9)', lineHeight: '34.96px' }}>{cat.desc}</p>
                {'pdf' in cat && cat.pdf && (
                  <div style={{ marginTop: '1rem' }}>
                    {'pdfNote' in cat && cat.pdfNote && (
                      <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '18.4px', fontWeight: 300, color: 'rgba(255,255,255,0.9)', lineHeight: '34.96px', marginBottom: '1rem' }}>{cat.pdfNote as string}</p>
                    )}
                    <a href={cat.pdf as string} download
                      style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#ffffff', background: '#d9737a', padding: '0.8rem 2rem', textDecoration: 'none', display: 'inline-block' }}>
                      {c.downloadPdf}
                    </a>
                  </div>
                )}
                {'video' in cat && cat.video && (
                  <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', alignItems: 'flex-start' }}>
                    <iframe src={cat.video as string} style={{ height: '220px', aspectRatio: '16/9', border: 'none', flexShrink: 0 }}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                    {'video2' in cat && cat.video2 && (
                      <iframe src={cat.video2 as string} style={{ height: '220px', aspectRatio: '9/16', border: 'none', flexShrink: 0 }}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                    )}
                    {'video3' in cat && cat.video3 && (
                      <iframe src={cat.video3 as string} style={{ height: '220px', aspectRatio: '9/16', border: 'none', flexShrink: 0 }}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                    )}
                  </div>
                )}
                {'images' in cat && cat.images && (
                  <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', overflowX: 'auto', paddingBottom: '0.5rem' }}>
                    {(cat.images as any[]).map((item, j) => {
                      const src = typeof item === 'string' ? item : item.src
                      const type = typeof item === 'string' ? 'image' : item.type
                      return type === 'video' ? (
                        <video key={j} autoPlay muted loop playsInline
                          style={{ height: '420px', width: 'auto', minWidth: '280px', objectFit: 'cover', flexShrink: 0 }}>
                          <source src={src} type="video/mp4"/>
                        </video>
                      ) : (
                        <img key={j} src={src} alt=""
                          style={{ height: '420px', width: 'auto', minWidth: '364px', objectFit: 'contain', background: 'rgba(255,255,255,0.06)', padding: '1rem', flexShrink: 0 }} />
                      )
                    })}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
        <section style={{ marginTop: '5rem', paddingTop: '4rem', borderTop: '1px solid rgba(26,37,32,0.10)' }}>
          <p style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.35em', textTransform: 'uppercase', color: '#ffffff', marginBottom: '2.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ display: 'inline-block', width: 28, height: 1, background: '#d9737a' }} />
            {c.toolsLabel}
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.75rem' }}>
            {tools.map(t => (
              <div key={t} style={{
                background: '#d9737a',
                color: '#ffffff',
                padding: '0.8rem 0.8rem',
                fontSize: '0.65rem',
                fontWeight: 500,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                textAlign: 'center',
                boxShadow: '0 2px 8px rgba(255,255,255,0.15)',
              }}>{t}</div>
            ))}
          </div>
        </section>
        <blockquote style={{ background: 'rgba(0,0,0,0.25)', border: '1px solid rgba(255,255,255,0.2)', borderLeft: '3px solid #d9737a', padding: '2.5rem 2.5rem', fontSize: '1.35rem', fontStyle: 'italic', fontWeight: 300, color: '#ffffff', lineHeight: 1.5, margin: '5rem 0 4rem', maxWidth: 720 }}>
          {c.quote}
        </blockquote>
        <div style={{ marginTop: '4rem', paddingTop: '3rem', borderTop: '1px solid rgba(26,37,32,0.10)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ fontSize: '18.4px', fontWeight: 300, color: 'rgba(255,255,255,0.9)' }}>
            {c.learnMorePre}{' '}
            <a href="https://rccoon.org" target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff', textDecoration: 'none', borderBottom: '1px solid #8a2333' }}>rccoon.org</a>
          </p>
          <Link to="/projects" style={{ fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#ffffff', textDecoration: 'none' }}>{c.back}</Link>
        </div>
      </article>
    </div>
  )
}
