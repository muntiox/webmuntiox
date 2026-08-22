import { createFileRoute, Link } from '@tanstack/react-router'
import { useState, useEffect, useRef } from 'react'
import type { ReactNode } from 'react'
import ClueLetter from '../components/ClueLetter'
import ClueDraggablePolaroid from '../components/ClueDraggablePolaroid'
import LanguageSwitcher from '../components/LanguageSwitcher'
import { useLanguage, langPath } from '../lib/i18n'
import { usePageMeta } from '../lib/usePageMeta'

// The bottom-row photo that ships visibly out of place — drag it home to find it.
const CLUE_PHOTO_INDEX = 5
const CLUE_PHOTO_START = { x: 165, y: -95 }
const CLUE_PHOTO_START_ROTATE = -22
export const Route = createFileRoute('/purpose')({
  component: PurposePage,
})
// ── Page copy — English + Spanish ────────────────────────────────────
const navCopy = {
  en: { home: 'Back home', purpose: 'Purpose', projects: 'Projects', blog: 'Blog', contact: 'Contact', openMenu: 'Open menu', bottom: 'Itxaso Muntión — Content Creator & Digital Strategist' },
  es: { home: 'Inicio', purpose: 'Propósito', projects: 'Proyectos', blog: 'Blog', contact: 'Contacto', openMenu: 'Abrir menú', bottom: 'Itxaso Muntión — Creadora de Contenido y Estratega Digital' },
}
const copy = {
  en: {
    metaTitle: 'Purpose — Itxaso Muntión',
    metaDescription: "Why I do what I do: attention, ethics, and choosing joy on purpose. The story behind Itxaso Muntión's work.",
    eyebrow: 'Purpose',
    titlePre: 'When creativity and strategy al',
    titleLetter: 'i',
    titlePost: 'gn with a higher purpose',
    ch1body1: 'When digital strategy meets creative content, the result is communication capable of connecting at deeper levels, inspiring and generating real impact.',
    ch1body2: "A commitment to a more ethical planet is not just a personal value — it is the principle behind every project. My experience was born managing digital communities within an association driven by essential values, where I learned that authentic communication doesn't just reach people, it moves them.",
    ch1accent: 'Today I work with brands and organisations that share the vision of a more conscious world, using creativity and digital strategy to craft messages that inspire, transform and connect.',
    personLabel: 'The person behind it',
    quote1: "I've always had an almost irrational urge to build things, projects, ideas, communities. Things that didn't exist yesterday.",
    quote2: 'Watching an idea slowly become something real, something that helps, inspires or moves someone, still feels like magic to me, not because I dream of building companies, but because I love building possibilities.',
    slides: [
      { body: 'Some of my earliest memories involve headphones far too big for my head. I only remember disappearing into whatever was playing — completely gone. That never really stopped.', pull: 'The medium changes. The intention never does.' },
      { body: "I've often been told I'm too sensitive. For a long time, I believed it was a flaw. Now I think it's the whole point.", accent: 'Attention is the purest form of love I know. Everything I create begins there.' },
      { body: "Every project taught me something I hadn't expected to learn. And the more I built, the more I started to understand where I actually wanted to go — and for whom. Paying attention changes you. Once you start seeing, you can't just sit with it.", accent: "That's why I don't want to work for just anyone. I believe the most ethical path is the only one worth taking." },
      { body: 'At some point I realised that compassion stops making sense the moment we start deciding who deserves it.', accent: "Suffering doesn't become acceptable just because we learn to look away from it." },
      { body: "The more I understand about what's wrong with the world, the more fiercely I want to protect what's still good in it. That's not contradiction — that's survival." },
      { body: 'People assume activism comes from anger. Mine comes from love — for animals, for people, for this complicated planet we all share.', accent: "I don't fight because I hate what is. I fight because I can see what could be." },
      { body: "I've spent years building alongside people who believed, like I do, that another world is actually possible. None of those projects were ever really about content or strategy.", accent: 'They were always about helping someone understand, feel, or care about something. Helping someone.' },
      { body: 'Sometimes the most important thing you can do is show up. Not with a plan. Not with the right words. Just — there.', accent: 'Presence is its own kind of message.' },
    ],
    closing1: "The older I get, the more I learn about the world's injustices, and strangely... the more determined I become to protect my joy.",
    closing2: "I've met people who know everything that's wrong with the world, but somewhere along the way, they forgot how to laugh. I never want that to happen to me.",
    closingAccent1: 'I think there\'s something quietly revolutionary about choosing to remain joyful. Not despite everything we know, but because of it.',
    closing3: 'People often ask me what I do. I edit videos, I write, I design, I tell stories... but those are just tools.',
    closingAccent2: 'What I really do is pay attention. Then I try to transform that attention into something another can feel.',
    closing4: "I don't believe content changes the world. I believe people do. If stories have any power at all, it's because they remind us why it's worth caring in the first place.",
    signature: "I'm Itxaso Muntión — still paying attention, on purpose.",
    prev: '← Prev',
    next: 'Next →',
    close: 'Close ✕',
  },
  es: {
    metaTitle: 'Propósito — Itxaso Muntión',
    metaDescription: 'Por qué hago lo que hago: atención, ética y elegir la alegría a propósito. La historia detrás del trabajo de Itxaso Muntión.',
    eyebrow: 'Propósito',
    titlePre: 'Cuando la creatividad y la estrategia se al',
    titleLetter: 'i',
    titlePost: 'nean con un propósito superior',
    ch1body1: 'Cuando la estrategia digital se encuentra con el contenido creativo, el resultado es una comunicación capaz de conectar a niveles más profundos, inspirar y generar un impacto real.',
    ch1body2: 'El compromiso con un planeta más ético no es solo un valor personal — es el principio detrás de cada proyecto. Mi experiencia nació gestionando comunidades digitales dentro de una asociación impulsada por valores esenciales, donde aprendí que la comunicación auténtica no solo llega a las personas, las conmueve.',
    ch1accent: 'Hoy trabajo con marcas y organizaciones que comparten la visión de un mundo más consciente, usando la creatividad y la estrategia digital para crear mensajes que inspiran, transforman y conectan.',
    personLabel: 'La persona detrás',
    quote1: 'Siempre he tenido un impulso casi irracional de construir cosas, proyectos, ideas, comunidades. Cosas que ayer no existían.',
    quote2: 'Ver cómo una idea se va convirtiendo poco a poco en algo real, algo que ayuda, inspira o conmueve a alguien, todavía me parece magia — no porque sueñe con construir empresas, sino porque me encanta construir posibilidades.',
    slides: [
      { body: 'Algunos de mis primeros recuerdos incluyen unos auriculares demasiado grandes para mi cabeza. Solo recuerdo desaparecer en lo que estuviera sonando — completamente ida. Eso nunca dejó de pasar.', pull: 'El medio cambia. La intención nunca.' },
      { body: 'Muchas veces me han dicho que soy demasiado sensible. Durante mucho tiempo, creí que era un defecto. Ahora creo que es precisamente el punto.', accent: 'La atención es la forma más pura de amor que conozco. Todo lo que creo empieza ahí.' },
      { body: 'Cada proyecto me enseñó algo que no esperaba aprender. Y cuanto más construía, más empezaba a entender hacia dónde quería ir realmente — y para quién. Prestar atención te cambia. Una vez que empiezas a ver, no puedes simplemente quedarte ahí sentada.', accent: 'Por eso no quiero trabajar para cualquiera. Creo que el camino más ético es el único que merece la pena tomar.' },
      { body: 'En algún momento me di cuenta de que la compasión deja de tener sentido en el momento en que empezamos a decidir quién la merece.', accent: 'El sufrimiento no se vuelve aceptable solo porque aprendamos a mirar hacia otro lado.' },
      { body: 'Cuanto más entiendo lo que está mal en el mundo, más ferozmente quiero proteger lo que todavía queda de bueno en él. Eso no es contradicción — es supervivencia.' },
      { body: 'La gente asume que el activismo nace de la rabia. El mío nace del amor — por los animales, por las personas, por este planeta complicado que todos compartimos.', accent: 'No lucho porque odie lo que es. Lucho porque puedo ver lo que podría ser.' },
      { body: 'He pasado años construyendo junto a personas que creían, como yo, que otro mundo es realmente posible. Ninguno de esos proyectos fue nunca realmente sobre contenido o estrategia.', accent: 'Siempre fueron sobre ayudar a alguien a entender, sentir o que le importara algo. Ayudar a alguien.' },
      { body: 'A veces lo más importante que puedes hacer es presentarte. Sin un plan. Sin las palabras adecuadas. Simplemente — ahí.', accent: 'La presencia es un mensaje en sí misma.' },
    ],
    closing1: 'Cuanto más mayor me hago, más aprendo sobre las injusticias del mundo, y curiosamente... más decidida estoy a proteger mi alegría.',
    closing2: 'He conocido a personas que saben todo lo que está mal en el mundo, pero que en algún punto del camino olvidaron cómo reír. Nunca quiero que eso me pase a mí.',
    closingAccent1: 'Creo que hay algo silenciosamente revolucionario en elegir seguir siendo alegre. No a pesar de todo lo que sabemos, sino precisamente por ello.',
    closing3: 'A menudo me preguntan a qué me dedico. Edito vídeos, escribo, diseño, cuento historias... pero esas son solo herramientas.',
    closingAccent2: 'Lo que realmente hago es prestar atención. Después intento transformar esa atención en algo que otra persona pueda sentir.',
    closing4: 'No creo que el contenido cambie el mundo. Creo que las personas lo hacen. Si las historias tienen algún poder, es porque nos recuerdan por qué merece la pena que nos importe, para empezar.',
    signature: 'Soy Itxaso Muntión — todavía prestando atención, a propósito.',
    prev: '← Anterior',
    next: 'Siguiente →',
    close: 'Cerrar ✕',
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
              <a key={l.href} href={langPath(lang, l.href)} className="mxo-fullnav-link"
                style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '92px', fontWeight: 300, lineHeight: '92px', color: '#ffffff', textDecoration: 'none', display: 'flex', alignItems: 'baseline', gap: '1.2rem', transition: 'color 0.15s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#d9737a')}
                onMouseLeave={e => (e.currentTarget.style.color = '#ffffff')}>
                <span style={{ fontSize: '0.55em', color: '#d9737a', letterSpacing: '0.2em' }}>0{i+1}</span>
                {l.label}
              </a>
            ))}
          </div>
          <p style={{ position: 'absolute', bottom: '2.5rem', fontSize: '0.6rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', zIndex: 2 }}>{n.bottom}</p>
        </div>
      )}
    </>
  )
}
const PHOTO_W = '380px'
const PHOTO_H = '480px'
function Photo({ src, alt = '', width = PHOTO_W, height = PHOTO_H }: { src: string; alt?: string; width?: string; height?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.2 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return (
    <div ref={ref} style={{
      flexShrink: 0,
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(30px)',
      transition: 'opacity 1s ease, transform 1s ease',
    }}>
      <img src={src} alt={alt} style={{
        width, height, objectFit: 'cover', display: 'block',
        filter: 'brightness(0.92) contrast(1.02)',
        maskImage: 'radial-gradient(ellipse 100% 100% at center, #000 60%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 100% 100% at center, #000 60%, transparent 100%)',
      }} />
    </div>
  )
}
function Pull({ children }: { children: ReactNode }) {
  return <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '18.4px', color: '#ffffff', lineHeight: '34.96px', letterSpacing: '0.04em', margin: '0 0 1.2rem' }}>{children}</p>
}
function Body({ children }: { children: ReactNode }) {
  return <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '18.4px', fontWeight: 300, lineHeight: '34.96px', color: 'rgba(255,255,255,0.9)', marginBottom: '1.2rem' }}>{children}</p>
}
function Accent({ children }: { children: ReactNode }) {
  return <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '18.4px', fontWeight: 700, lineHeight: '34.96px', color: 'rgba(255,255,255,0.9)', marginBottom: '1.2rem' }}>{children}</p>
}
function Row({ children, reverse = false }: { children: ReactNode; reverse?: boolean }) {
  return <div style={{ display: 'flex', gap: '5rem', alignItems: 'center', flexDirection: reverse ? 'row-reverse' : 'row', marginBottom: '8rem' }}>{children}</div>
}
function TextBlock({ children }: { children: ReactNode }) {
  return <div style={{ flex: 1, paddingTop: 0 }}>{children}</div>
}
function Divider() {
  return <div style={{ width: '40px', height: '1px', background: '#d9737a', margin: '4rem 0' }} />
}
type Slide = { src: string; body: string; accent?: string; pull?: string }
function PolaroidCollage({ slides, navText }: { slides: Slide[]; navText: { prev: string; next: string; close: string } }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [active, setActive] = useState<number | null>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.05 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  const positions = [
    { top: '0%',  left: '1%',  rotate: '-3deg',  delay: '0s' },
    { top: '2%',  left: '26%', rotate: '2deg',   delay: '0.07s' },
    { top: '0%',  left: '51%', rotate: '-1.5deg',delay: '0.14s' },
    { top: '1%',  left: '76%', rotate: '3deg',   delay: '0.21s' },
    { top: '52%', left: '4%',  rotate: '2.5deg', delay: '0.1s' },
    { top: '50%', left: '29%', rotate: '-2.5deg',delay: '0.17s' },
    { top: '52%', left: '54%', rotate: '1.5deg', delay: '0.24s' },
    { top: '51%', left: '78%', rotate: '-3deg',  delay: '0.31s' },
  ]
  const prev = () => setActive(v => v !== null ? (v - 1 + slides.length) % slides.length : null)
  const next = () => setActive(v => v !== null ? (v + 1) % slides.length : null)
  return (
    <>
      {/* Modal */}
      {active !== null && (
        <div onClick={() => setActive(null)} style={{
          position: 'fixed', inset: 0, zIndex: 500,
          background: 'rgba(7,7,9,0.88)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '2rem',
        }}>
          <div onClick={e => e.stopPropagation()} style={{
            display: 'flex', gap: '4rem', alignItems: 'center',
            maxWidth: '900px', width: '100%',
          }}>
            {/* Polaroid */}
            <div style={{ flexShrink: 0, background: '#ffffff', padding: '8px 8px 48px', boxShadow: '0 24px 60px rgba(0,0,0,0.6)' }}>
              <img src={slides[active].src} alt="" style={{ width: '320px', height: '400px', objectFit: 'cover', display: 'block' }} />
            </div>
            {/* Text */}
            <div className="mxo-modal-text" style={{ flex: 1 }}>
              <Body>{slides[active].body}</Body>
              {slides[active].pull && <Pull>{slides[active].pull}</Pull>}
              {slides[active].accent && <Accent>{slides[active].accent}</Accent>}
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginTop: '2.5rem' }}>
                <button onClick={prev} style={{ background: 'none', border: '1px solid rgba(255,255,255,0.35)', color: 'rgba(255,255,255,0.85)', fontFamily: "'Outfit', sans-serif", fontSize: '0.62rem', letterSpacing: '0.2em', textTransform: 'uppercase', padding: '0.6rem 1.2rem', cursor: 'pointer', transition: 'border-color 0.2s, color 0.2s' }}>{navText.prev}</button>
                <button onClick={next} style={{ background: 'none', border: '1px solid rgba(255,255,255,0.35)', color: 'rgba(255,255,255,0.85)', fontFamily: "'Outfit', sans-serif", fontSize: '0.62rem', letterSpacing: '0.2em', textTransform: 'uppercase', padding: '0.6rem 1.2rem', cursor: 'pointer', transition: 'border-color 0.2s, color 0.2s' }}>{navText.next}</button>
                <button onClick={() => setActive(null)} style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.5)', fontFamily: "'Outfit', sans-serif", fontSize: '0.62rem', letterSpacing: '0.2em', textTransform: 'uppercase', cursor: 'pointer', marginLeft: 'auto' }}>{navText.close}</button>
              </div>
              <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.52rem', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.4)', marginTop: '1rem' }}>{active + 1} / {slides.length}</p>
            </div>
          </div>
        </div>
      )}
      {/* Collage */}
      <div ref={ref} style={{
        position: 'relative', width: '100%', height: '480px',
        marginBottom: '0',
        opacity: visible ? 1 : 0, transition: 'opacity 1s ease',
      }}>
        {slides.map((slide, i) => {
          const pos = positions[i % positions.length]
          if (i === CLUE_PHOTO_INDEX) {
            return (
              <ClueDraggablePolaroid
                key={i}
                id="purpose-photo"
                top={pos.top}
                left={pos.left}
                homeRotate={pos.rotate}
                start={CLUE_PHOTO_START}
                startRotate={CLUE_PHOTO_START_ROTATE}
                onOpen={() => setActive(i)}
                visible={visible}
                delay={pos.delay}
              >
                <img src={slide.src} alt="" style={{ width: '100%', height: '130px', objectFit: 'cover', display: 'block', pointerEvents: 'none' }} />
              </ClueDraggablePolaroid>
            )
          }
          return (
            <div key={i} onClick={() => setActive(i)}
              style={{
                position: 'absolute',
                top: pos.top, left: pos.left,
                width: '185px',
                background: '#ffffff',
                padding: '7px 7px 32px',
                boxShadow: '0 6px 20px rgba(0,0,0,0.4)',
                transform: `rotate(${pos.rotate})`,
                transition: `opacity 0.8s ease ${pos.delay}, transform 0.3s ease, box-shadow 0.3s ease`,
                cursor: 'pointer',
                opacity: visible ? 1 : 0,
                zIndex: 1,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'rotate(0deg) scale(1.08)'
                e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,0.6)'
                e.currentTarget.style.zIndex = '10'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = `rotate(${pos.rotate})`
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.4)'
                e.currentTarget.style.zIndex = '1'
              }}>
              <img src={slide.src} alt="" style={{ width: '100%', height: '130px', objectFit: 'cover', display: 'block' }} />
            </div>
          )
        })}
      </div>
    </>
  )
}
const SLIDE_PHOTOS = [
  '/photos/who-am-i/little-me.jpg',
  '/photos/who-am-i/me.jpg',
  '/photos/who-am-i/guitarra.jpg',
  '/photos/who-am-i/animalshelter-me.jpg',
  '/photos/who-am-i/animalshelter-2.jpg',
  '/photos/who-am-i/activist-me.jpg',
  '/photos/who-am-i/joves-me.jpg',
  '/photos/who-am-i/barro-dana.jpg',
]
export function PurposePage() {
  const { lang } = useLanguage()
  const c = copy[lang]
  usePageMeta(c.metaTitle, c.metaDescription, { lang, path: '/purpose' })
  const slides = c.slides.map((s, i) => ({ ...s, src: SLIDE_PHOTOS[i] }))
  return (
    <div style={{ minHeight: '100vh', background: 'transparent', color: '#ffffff', position: 'relative' }}>
      <FloatingNav />
      <div style={{ maxWidth: 1300, margin: '0 auto', padding: '10rem 3.5rem 8rem', position: 'relative', zIndex: 2 }}>
        {/* ── CHAPTER 1: PURPOSE ─────────────────────────────────── */}
        <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.62rem', fontWeight: 600, letterSpacing: '0.38em', textTransform: 'uppercase', color: '#ffffff', marginBottom: '1.5rem' }}>{c.eyebrow}</p>
        <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '64px', fontWeight: 'normal', color: '#ffffff', lineHeight: '64px', letterSpacing: '0.02em', marginBottom: '4rem', maxWidth: 950 }}>
          {c.titlePre}<ClueLetter start={{ x: 13, y: -15 }} rotate={16} id="align-letter">{c.titleLetter}</ClueLetter>{c.titlePost}
        </h1>
        <div style={{ maxWidth: 850, marginBottom: '8rem' }}>
          <Body>{c.ch1body1}</Body>
          <Body>{c.ch1body2}</Body>
          <Accent>{c.ch1accent}</Accent>
        </div>
        <Divider />
        {/* ── CHAPTER 2: PERSON ──────────────────────────────────── */}
        <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.62rem', fontWeight: 600, letterSpacing: '0.38em', textTransform: 'uppercase', color: '#ffffff', margin: '4rem 0 6rem' }}>{c.personLabel}</p>
        {/* Quote block */}
        <div style={{ borderLeft: '3px solid #d9737a', paddingLeft: '3rem', marginBottom: '6rem', maxWidth: 850 }}>
          <Body>{c.quote1}</Body>
          <Body>{c.quote2}</Body>
        </div>
        <PolaroidCollage slides={slides} navText={{ prev: c.prev, next: c.next, close: c.close }} />
        {/* Closing */}
        <div style={{ maxWidth: 850, marginTop: '2rem' }}>
          <Body>{c.closing1}</Body>
          <Body>{c.closing2}</Body>
          <Accent>{c.closingAccent1}</Accent>
          <Body>{c.closing3}</Body>
          <Accent>{c.closingAccent2}</Accent>
          <Body>{c.closing4}</Body>
          <Body>{c.signature}</Body>
        </div>
      </div>
    </div>
  )
}
