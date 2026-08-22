import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'
import ClueHold from '../components/ClueHold'
import LanguageSwitcher from '../components/LanguageSwitcher'
import { useLanguage } from '../lib/i18n'
import { usePageMeta } from '../lib/usePageMeta'
export const Route = createFileRoute('/projects')({
  component: ProjectsPage,
})
// ── Page copy — English + Spanish ────────────────────────────────────
const navCopy = {
  en: { home: 'Back home', purpose: 'Purpose', projects: 'Projects', blog: 'Blog', contact: 'Contact', openMenu: 'Open menu', bottom: 'Itxaso Muntión — Content Creator & Digital Strategist' },
  es: { home: 'Inicio', purpose: 'Propósito', projects: 'Proyectos', blog: 'Blog', contact: 'Contacto', openMenu: 'Abrir menú', bottom: 'Itxaso Muntión — Creadora de Contenido y Estratega Digital' },
}
const copy = {
  en: {
    metaTitle: 'Projects — Itxaso Muntión',
    metaDescription: 'Selected work in content strategy, campaigns and digital storytelling for brands and organisations that want to make a real difference.',
    eyebrow: 'Projects',
    title: 'Selected Work',
    introPre: 'This is ',
    introHold: 'who I am',
    introPost: ' and where I come from.',
    rccoon: {
      tag: 'Non-profit',
      sub: 'Citizen Action · Digital Strategy · Community',
      body: 'A grassroots movement turning awareness into action — social, environmental and animal justice. Brand identity, content, editorial planning, volunteer coordination and campaign visibility from the ground up.',
      quote: 'Turn empathy into responsibility, and responsibility into action.',
      cta: 'Come snoop around →',
    },
    sopela: {
      tag: 'Freelance',
      sub: 'Community Manager · Creative Content · Local Promotion',
      body1: 'A community account for Sopelana — a small town in the Basque Country. The idea was to give the place a bit of life online: promoting local businesses in a creative way, dropping hints, building curiosity around what was already there but nobody was talking about.',
      body2: 'A local account that someone trusted me with. I managed it for eight months, learned what it means to build an audience from zero, and left it in better shape than I found it.',
    },
    espiga: {
      tag: 'Freelance',
      sub: 'Photo & Video Content · Rural Tourism · Delta del Ebro',
      body: 'They gave me the house for a whole weekend — just me, a camera, and a rural retreat in the Delta del Ebro. My first job like this. I shot photos and videos across two days, and I loved every second of it. It confirmed something I already suspected: travelling to work is my thing.',
      cta: 'Check in(side the project) →',
    },
    commo2: {
      tag: 'Academic',
      sub: 'Strategy · Branding · Digital Ecosystem',
      body: 'A full brand concept for an ethical home label built around sustainability, emotional wellbeing and affiliate-driven content — making shared living affordable, conscious, and feel like home.',
      quote: 'Conscious living, made accessible.',
      note: "Master's Final Project · 2025",
      cta: 'Move in →',
    },
    openMinded: {
      tag: 'Content & Production',
      sub: 'Content Director',
      body1: "Podcast editing, social media content and full ownership of the venue's visual screens — deciding what played, when and how. At the same time, responsible for developing entertainment ideas and programming concepts for the space.",
      body2: 'A place where I pushed my editing skills further and learned to think about content not just for screens, but for rooms full of people.',
    },
    rawena: {
      tag: 'Video & Editing',
      body: 'Presentation video for an upcoming software product — currently in development. Full video production and editing.',
    },
    ciba: {
      tag: 'Television',
      title: 'Video Editor & Audiovisual Producer',
      sub: 'CIBA / I+D+i · Universidad de Burgos · Burgos',
      bodyPre: 'Full post-production of ',
      bodyItalic: 'Cien&Cia',
      bodyPost: ' (CyL7, RTVCyL, La 8 Burgos) and multicamera editing for @UBUInvestiga.',
      cta: 'Watch the Season 4 recap →',
    },
    hospitality: {
      tag: 'Hospitality',
      title: 'Lessons from unexpected places',
      bodyPre: "From the hospitality industry, I've learnt to find my calm again, not to give up when I'm tired, to be resilient, to work under pressure, to understand what people want, to work as part of a team, to be genuinely happy for my colleagues' achievements, not to compare myself to others, to enjoy myself even when I didn't feel like working, to accept constructive criticism, and above all, how to show up every day asking: ",
      bodyQuote: '"How can I make this place a little better because I was here?"',
      body2: 'Those lessons have shaped the way I approach every creative project today — and I think they deserve to be here.',
    },
    coursesEyebrow: 'Courses & Other Info',
    courses: [
      { title: 'Neuromarketing', sub: '2021' },
      { title: 'After Effects', sub: '2022' },
      { title: 'Final Project', sub: 'Narrative music video · 8/10', cta: 'Watch →' },
      { title: 'Stock Video Edits', sub: 'Cinematic edits with stock footage & music', cta: 'Watch playlist →' },
    ],
    cvEn: 'Download CV — EN →',
    cvEs: 'Download CV — ES →',
  },
  es: {
    metaTitle: 'Proyectos — Itxaso Muntión',
    metaDescription: 'Trabajo seleccionado en estrategia de contenido, campañas y narrativa digital para marcas y organizaciones que quieren generar un impacto real.',
    eyebrow: 'Proyectos',
    title: 'Trabajo Seleccionado',
    introPre: 'Esto es ',
    introHold: 'quién soy',
    introPost: ' y de dónde vengo.',
    rccoon: {
      tag: 'Sin ánimo de lucro',
      sub: 'Acción Ciudadana · Estrategia Digital · Comunidad',
      body: 'Un movimiento de base que convierte la concienciación en acción — justicia social, medioambiental y animal. Identidad de marca, contenido, planificación editorial, coordinación de voluntariado y visibilidad de campañas desde cero.',
      quote: 'Convertir la empatía en responsabilidad, y la responsabilidad en acción.',
      cta: 'Ven a curiosear →',
    },
    sopela: {
      tag: 'Freelance',
      sub: 'Community Manager · Contenido Creativo · Promoción Local',
      body1: 'Una cuenta de comunidad para Sopelana — un pequeño pueblo del País Vasco. La idea era darle un poco de vida al pueblo en internet: promocionar los negocios locales de forma creativa, dejar pistas, generar curiosidad sobre lo que ya existía pero de lo que nadie hablaba.',
      body2: 'Una cuenta local que alguien confió en mí para llevar. La gestioné durante ocho meses, aprendí lo que significa construir una audiencia desde cero, y la dejé en mejor forma de la que la encontré.',
    },
    espiga: {
      tag: 'Freelance',
      sub: 'Contenido Foto y Vídeo · Turismo Rural · Delta del Ebro',
      body: 'Me dejaron la casa entera para un fin de semana — solo yo, una cámara, y un retiro rural en el Delta del Ebro. Mi primer trabajo así. Grabé fotos y vídeos durante dos días, y disfruté cada segundo. Confirmó algo que ya sospechaba: viajar para trabajar es lo mío.',
      cta: 'Entra (dentro del proyecto) →',
    },
    commo2: {
      tag: 'Académico',
      sub: 'Estrategia · Branding · Ecosistema Digital',
      body: 'Un concepto de marca completo para un sello de hogar ético construido en torno a la sostenibilidad, el bienestar emocional y el contenido de afiliación — haciendo que vivir compartiendo piso sea asequible, consciente, y se sienta como en casa.',
      quote: 'Vida consciente, hecha accesible.',
      note: 'Trabajo Fin de Máster · 2025',
      cta: 'Múdate →',
    },
    openMinded: {
      tag: 'Contenido y Producción',
      sub: 'Directora de Contenido',
      body1: 'Edición de podcast, contenido para redes sociales y responsabilidad total de las pantallas visuales del local — decidiendo qué se reproducía, cuándo y cómo. Al mismo tiempo, encargada de desarrollar ideas de entretenimiento y conceptos de programación para el espacio.',
      body2: 'Un lugar donde llevé mis habilidades de edición más lejos y aprendí a pensar el contenido no solo para pantallas, sino para salas llenas de gente.',
    },
    rawena: {
      tag: 'Vídeo y Edición',
      body: 'Vídeo de presentación para un producto de software próximo a lanzarse — actualmente en desarrollo. Producción y edición de vídeo completas.',
    },
    ciba: {
      tag: 'Televisión',
      title: 'Editora de Vídeo y Productora Audiovisual',
      sub: 'CIBA / I+D+i · Universidad de Burgos · Burgos',
      bodyPre: 'Postproducción completa de ',
      bodyItalic: 'Cien&Cia',
      bodyPost: ' (CyL7, RTVCyL, La 8 Burgos) y edición multicámara para @UBUInvestiga.',
      cta: 'Ver el resumen de la Temporada 4 →',
    },
    hospitality: {
      tag: 'Hostelería',
      title: 'Lecciones de lugares inesperados',
      bodyPre: 'De la hostelería he aprendido a recuperar la calma, a no rendirme cuando estoy cansada, a ser resiliente, a trabajar bajo presión, a entender lo que la gente quiere, a trabajar en equipo, a alegrarme de verdad por los logros de mis compañeros, a no compararme con los demás, a disfrutar incluso cuando no me apetecía trabajar, a aceptar la crítica constructiva, y sobre todo, a presentarme cada día preguntándome: ',
      bodyQuote: '"¿Cómo puedo hacer que este lugar sea un poco mejor porque yo estuve aquí?"',
      body2: 'Esas lecciones han moldeado la forma en que abordo cada proyecto creativo hoy — y creo que merecen estar aquí.',
    },
    coursesEyebrow: 'Cursos y Otra Información',
    courses: [
      { title: 'Neuromarketing', sub: '2021' },
      { title: 'After Effects', sub: '2022' },
      { title: 'Proyecto Final', sub: 'Videoclip narrativo · 8/10', cta: 'Ver →' },
      { title: 'Montajes con Vídeo de Stock', sub: 'Montajes cinematográficos con material de stock y música', cta: 'Ver playlist →' },
    ],
    cvEn: 'Descargar CV — EN →',
    cvEs: 'Descargar CV — ES →',
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
function ProjectsPage() {
  const { lang } = useLanguage()
  const c = copy[lang]
  usePageMeta(c.metaTitle, c.metaDescription)
  return (
    <div style={{ minHeight: '100vh', background: 'transparent', color: '#ffffff', position: 'relative' }}>
      <FloatingNav />
      <div style={{ maxWidth: 1300, margin: '0 auto', padding: '10rem 3.5rem 6rem', position: 'relative', zIndex: 2 }}>
        <div style={{ marginBottom: '5rem' }}>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.62rem', fontWeight: 600, letterSpacing: '0.38em', textTransform: 'uppercase', color: '#ffffff', marginBottom: '2rem' }}>{c.eyebrow}</p>
          <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '64px', fontWeight: 400, color: '#ffffff', lineHeight: 1, letterSpacing: '0.02em', marginBottom: '1.2rem' }}>{c.title}</h1>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '18.4px', fontWeight: 300, lineHeight: '34.96px', color: 'rgba(255,255,255,0.9)', marginBottom: '0.5rem' }}>{c.introPre}<ClueHold id="projects-hold">{c.introHold}</ClueHold>{c.introPost}</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {/* RCCOON */}
          <div style={{ textDecoration: 'none', color: 'inherit', display: 'block', padding: '3.5rem 0', borderTop: '1px solid rgba(255,255,255,0.15)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1rem' }}>
              <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.62rem', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase' }}>2020 — 2026</span>
              <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.55rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#ffffff', border: '1px solid rgba(255,255,255,0.35)', padding: '0.15rem 0.5rem' }}>{c.rccoon.tag}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.6rem' }}>
              <img src="/photos/rccoon-logo.png" alt="RCCOON" style={{ height: '50px', width: 'auto', objectFit: 'contain' }} />
              <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '40px', fontWeight: 300, lineHeight: '44px', color: '#ffffff', margin: 0 }}>RCCOON</h3>
            </div>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '18.4px', fontWeight: 300, color: 'rgba(255,255,255,0.9)', lineHeight: '34.96px', marginBottom: '1.2rem' }}>{c.rccoon.sub}</p>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '18.4px', fontWeight: 300, color: 'rgba(255,255,255,0.9)', lineHeight: '34.96px', maxWidth: 680, marginBottom: '1rem' }}>{c.rccoon.body}</p>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontStyle: 'italic', fontSize: '18.4px', fontWeight: 300, color: 'rgba(255,255,255,0.9)', lineHeight: '34.96px', marginBottom: '1.5rem' }}>&quot;{c.rccoon.quote}&quot;</p>
            <Link to="/work/rccoon" style={{ fontFamily: "'Outfit', sans-serif", fontSize: '18.4px', fontWeight: 700, color: '#ffffff', textDecoration: 'none' }}>{c.rccoon.cta}</Link>
          </div>
          {/* Sopelazabalik */}
          <div style={{ padding: '3.5rem 0', borderTop: '1px solid rgba(255,255,255,0.15)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1rem' }}>
              <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.62rem', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase' }}>May 2021 — Jan 2022</span>
              <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.55rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#ffffff', border: '1px solid rgba(255,255,255,0.35)', padding: '0.15rem 0.5rem' }}>{c.sopela.tag}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.6rem' }}>
              <img src="/photos/sopelazabalik-logo.jpg" alt="@sopelazabalik" style={{ height: '50px', width: 'auto', objectFit: 'contain' }} />
              <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '40px', fontWeight: 300, lineHeight: '44px', color: '#ffffff', margin: 0 }}>@sopelazabalik</h3>
            </div>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '18.4px', fontWeight: 300, color: 'rgba(255,255,255,0.9)', lineHeight: '34.96px', marginBottom: '1rem' }}>{c.sopela.sub}</p>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '18.4px', fontWeight: 300, color: 'rgba(255,255,255,0.9)', lineHeight: '34.96px', maxWidth: 680, marginBottom: '1rem' }}>{c.sopela.body1}</p>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '18.4px', fontWeight: 300, color: 'rgba(255,255,255,0.9)', lineHeight: '34.96px', maxWidth: 680 }}>{c.sopela.body2}</p>
            <a href="https://www.instagram.com/sopelazabalik/" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'Outfit', sans-serif", fontSize: '18.4px', fontWeight: 700, color: '#ffffff', lineHeight: '34.96px', textDecoration: 'none', display: 'inline-block', marginTop: '1rem' }}>@sopelazabalik →</a>
          </div>
          {/* Casa l'Espiga */}
          <div style={{ padding: '3.5rem 0', borderTop: '1px solid rgba(255,255,255,0.15)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1rem' }}>
              <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.62rem', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase' }}>2023</span>
              <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.55rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#ffffff', border: '1px solid rgba(255,255,255,0.35)', padding: '0.15rem 0.5rem' }}>{c.espiga.tag}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.6rem' }}>
              <img src="/photos/laespiga-logo.png" alt="Casa l'Espiga" style={{ height: '50px', width: 'auto', objectFit: 'contain' }} />
              <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '40px', fontWeight: 300, lineHeight: '44px', color: '#ffffff', margin: 0 }}>Casa l&apos;Espiga</h3>
            </div>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '18.4px', fontWeight: 300, color: 'rgba(255,255,255,0.9)', lineHeight: '34.96px', marginBottom: '1rem' }}>{c.espiga.sub}</p>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '18.4px', fontWeight: 300, color: 'rgba(255,255,255,0.9)', lineHeight: '34.96px', maxWidth: 680, marginBottom: '1rem' }}>{c.espiga.body}</p>
            <Link to="/work/espiga" style={{ fontFamily: "'Outfit', sans-serif", fontSize: '18.4px', fontWeight: 700, color: '#ffffff', lineHeight: '34.96px', textDecoration: 'none', display: 'inline-block', marginTop: '1.5rem' }}>{c.espiga.cta}</Link>
          </div>
          {/* Commo2 */}
          <div style={{ padding: '3.5rem 0', borderTop: '1px solid rgba(255,255,255,0.15)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1rem' }}>
              <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.62rem', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase' }}>2024 — 2025</span>
              <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.55rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#ffffff', border: '1px solid rgba(255,255,255,0.35)', padding: '0.15rem 0.5rem' }}>{c.commo2.tag}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.6rem' }}>
              <img src="/photos/commo2-logo.png" alt="Commo2" style={{ height: '50px', width: 'auto', objectFit: 'contain' }} />
              <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '40px', fontWeight: 300, lineHeight: '44px', color: '#ffffff', margin: 0 }}>Commo2</h3>
            </div>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '18.4px', fontWeight: 300, color: 'rgba(255,255,255,0.9)', lineHeight: '34.96px', marginBottom: '1.2rem' }}>{c.commo2.sub}</p>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '18.4px', fontWeight: 300, color: 'rgba(255,255,255,0.9)', lineHeight: '34.96px', maxWidth: 680, marginBottom: '1rem' }}>{c.commo2.body}</p>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontStyle: 'italic', fontSize: '18.4px', fontWeight: 300, color: 'rgba(255,255,255,0.9)', lineHeight: '34.96px', marginBottom: '1.5rem' }}>&quot;{c.commo2.quote}&quot;</p>
            <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: '18.4px', fontWeight: 300, color: 'rgba(255,255,255,0.9)', display: 'block', marginBottom: '1rem' }}>{c.commo2.note}</span>
            <a href="/work/commo2" style={{ fontFamily: "'Outfit', sans-serif", fontSize: '18.4px', fontWeight: 700, color: '#ffffff', textDecoration: 'none' }}>{c.commo2.cta}</a>
          </div>
          {/* Club Open Minded */}
          <div style={{ padding: '3.5rem 0', borderTop: '1px solid rgba(255,255,255,0.15)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1rem' }}>
              <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.62rem', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase' }}>Dec 2025 — Jun 2026</span>
              <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.55rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#ffffff', border: '1px solid rgba(255,255,255,0.35)', padding: '0.15rem 0.5rem' }}>{c.openMinded.tag}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.6rem' }}>
              <img src="/photos/open-logo.png" alt="Club Open Minded" style={{ height: '40px', width: 'auto', objectFit: 'contain' }} />
              <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '40px', fontWeight: 300, lineHeight: '44px', color: '#ffffff', margin: 0 }}>Club Open Minded</h3>
            </div>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '18.4px', fontWeight: 300, color: 'rgba(255,255,255,0.9)', lineHeight: '34.96px', marginBottom: '0.5rem' }}>{c.openMinded.sub}</p>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '18.4px', fontWeight: 300, color: 'rgba(255,255,255,0.9)', lineHeight: '34.96px', maxWidth: 680, marginBottom: '1rem' }}>{c.openMinded.body1}</p>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '18.4px', fontWeight: 300, color: 'rgba(255,255,255,0.9)', lineHeight: '34.96px', maxWidth: 680 }}>{c.openMinded.body2}</p>
          </div>
          {/* Rawena */}
          <div style={{ padding: '3.5rem 0', borderTop: '1px solid rgba(255,255,255,0.15)' }}>
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '0.8rem', flexWrap: 'wrap' }}>
              <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.62rem', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase' }}>2026</span>
              <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.55rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#ffffff', border: '1px solid rgba(255,255,255,0.35)', padding: '0.15rem 0.5rem' }}>{c.rawena.tag}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.4rem' }}>
              <img src="/photos/rawena-logo.png" alt="Rawena" style={{ height: '40px', width: 'auto', objectFit: 'contain' }} />
              <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '40px', fontWeight: 300, lineHeight: '44px', color: '#ffffff', margin: 0 }}>Rawena</h3>
            </div>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '18.4px', fontWeight: 300, color: 'rgba(255,255,255,0.9)', lineHeight: '34.96px', marginBottom: '0.8rem' }}>{c.rawena.body}</p>
            <a href="https://rawenatech.com/" target="_blank" rel="noopener noreferrer"
              style={{ fontFamily: "'Outfit', sans-serif", fontSize: '18.4px', fontWeight: 700, color: '#ffffff', textDecoration: 'none', lineHeight: '34.96px' }}>rawenatech.com →</a>
          </div>
          {/* CIBA */}
          <div style={{ padding: '3.5rem 0', borderTop: '1px solid rgba(255,255,255,0.15)' }}>
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '0.8rem', flexWrap: 'wrap' }}>
              <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.62rem', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase' }}>2019 — 2020</span>
              <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.55rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#ffffff', border: '1px solid rgba(255,255,255,0.35)', padding: '0.15rem 0.5rem' }}>{c.ciba.tag}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.4rem' }}>
              <img src="/photos/cienycia-logo.jpg" alt="Cien&Cia" style={{ height: '40px', width: 'auto', objectFit: 'contain' }} />
              <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '40px', fontWeight: 300, lineHeight: '44px', color: '#ffffff', margin: 0 }}>{c.ciba.title}</h3>
            </div>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.7rem', fontWeight: 400, letterSpacing: '0.1em', color: 'rgba(255,255,255,0.55)', textTransform: 'uppercase', marginBottom: '1rem' }}>{c.ciba.sub}</p>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '18.4px', fontWeight: 300, color: 'rgba(255,255,255,0.9)', lineHeight: '34.96px', marginBottom: '1rem' }}>{c.ciba.bodyPre}<em>{c.ciba.bodyItalic}</em>{c.ciba.bodyPost}</p>
            <a href="https://www.youtube.com/watch?v=ZIrBI3mqTxI" target="_blank" rel="noopener noreferrer"
              style={{ fontFamily: "'Outfit', sans-serif", fontSize: '18.4px', fontWeight: 700, color: '#ffffff', textDecoration: 'none', lineHeight: '34.96px' }}>{c.ciba.cta}</a>
          </div>
          {/* Hospitality */}
          <div style={{ padding: '3.5rem 0', borderTop: '1px solid rgba(255,255,255,0.15)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1rem' }}>
              <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.62rem', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase' }}>2015 — 2026</span>
              <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.55rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#ffffff', border: '1px solid rgba(255,255,255,0.35)', padding: '0.15rem 0.5rem' }}>{c.hospitality.tag}</span>
            </div>
            <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '40px', fontWeight: 300, lineHeight: '44px', color: '#ffffff', margin: '0 0 0.6rem' }}>{c.hospitality.title}</h3>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '18.4px', fontWeight: 300, color: 'rgba(255,255,255,0.9)', lineHeight: '34.96px', maxWidth: 680, marginBottom: '1.2rem' }}>{c.hospitality.bodyPre}<em>{c.hospitality.bodyQuote}</em></p>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '18.4px', fontWeight: 300, color: 'rgba(255,255,255,0.9)', lineHeight: '34.96px', maxWidth: 680 }}>{c.hospitality.body2}</p>
          </div>
          {/* Courses */}
          <div style={{ padding: '3.5rem 0', borderTop: '1px solid rgba(255,255,255,0.15)' }}>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.38em', textTransform: 'uppercase', color: '#ffffff', marginBottom: '2rem' }}>{c.coursesEyebrow}</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
              <div style={{ border: '2px solid rgba(255,255,255,0.15)', padding: '1.5rem' }}>
                <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.2rem', color: '#ffffff', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>{c.courses[0].title}</p>
                <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.65rem', fontWeight: 400, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', marginBottom: '0.5rem' }}>{c.courses[0].sub}</p>
              </div>
              <div style={{ border: '2px solid rgba(255,255,255,0.15)', padding: '1.5rem' }}>
                <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.2rem', color: '#ffffff', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>{c.courses[1].title}</p>
                <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.65rem', fontWeight: 400, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', marginBottom: '0.5rem' }}>{c.courses[1].sub}</p>
              </div>
              <div style={{ border: '2px solid rgba(255,255,255,0.15)', padding: '1.5rem' }}>
                <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.2rem', color: '#ffffff', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>{c.courses[2].title}</p>
                <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.65rem', fontWeight: 400, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', marginBottom: '0.8rem' }}>{c.courses[2].sub}</p>
                <a href="https://www.youtube.com/watch?v=qFEYbfOfNpI" target="_blank" rel="noopener noreferrer"
                  style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#ffffff', textDecoration: 'none' }}>{c.courses[2].cta}</a>
              </div>
              <div style={{ border: '2px solid rgba(255,255,255,0.15)', padding: '1.5rem' }}>
                <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.2rem', color: '#ffffff', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>{c.courses[3].title}</p>
                <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.65rem', fontWeight: 400, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', marginBottom: '0.8rem' }}>{c.courses[3].sub}</p>
                <a href="https://www.youtube.com/watch?v=3OZsmRnIIUk&list=PLrDfvnUUMDRpwRBky-0hveo-pVJwWDbmO&index=4" target="_blank" rel="noopener noreferrer"
                  style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#ffffff', textDecoration: 'none' }}>{c.courses[3].cta}</a>
              </div>
            </div>
          </div>
          <div style={{ marginTop: '3rem' }}>
            <a href="/docs/IMG_CV_ENG.pdf" download style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#ffffff', background: '#d9737a', padding: '1rem 2.5rem', textDecoration: 'none', display: 'inline-block', marginRight: '1rem' }}>{c.cvEn}</a>
            <a href="/docs/IMG_CV_ES.pdf" download style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#ffffff', background: '#d9737a', padding: '1rem 2.5rem', textDecoration: 'none', display: 'inline-block', }}>{c.cvEs}</a>
          </div>
        </div>
      </div>
    </div>
  )
}
