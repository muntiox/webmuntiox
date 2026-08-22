import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import CluePlate from '../components/CluePlate'
import ClueScratch from '../components/ClueScratch'
import LanguageSwitcher from '../components/LanguageSwitcher'
import { useLanguage } from '../lib/i18n'
import { usePageMeta } from '../lib/usePageMeta'
export const Route = createFileRoute('/blog')({
  component: BlogPage,
})
// ── Page copy — English + Spanish ────────────────────────────────────
const navCopy = {
  en: { home: 'Back home', purpose: 'Purpose', projects: 'Projects', blog: 'Blog', contact: 'Contact', openMenu: 'Open menu', bottom: 'Itxaso Muntión — Content Creator & Digital Strategist' },
  es: { home: 'Inicio', purpose: 'Propósito', projects: 'Proyectos', blog: 'Blog', contact: 'Contacto', openMenu: 'Abrir menú', bottom: 'Itxaso Muntión — Creadora de Contenido y Estratega Digital' },
}
const pageCopy = {
  en: {
    metaTitle: 'Blog — Itxaso Muntión',
    metaDescription: 'Essays on attention, ethics and creative strategy — things worth saying, from Itxaso Muntión.',
    eyebrow: 'Writing', title: 'Things worth saying.', essay: 'Essay', allPosts: '← All posts',
  },
  es: {
    metaTitle: 'Blog — Itxaso Muntión',
    metaDescription: 'Ensayos sobre atención, ética y estrategia creativa — cosas que merece la pena decir, de Itxaso Muntión.',
    eyebrow: 'Escritura', title: 'Cosas que merece la pena decir.', essay: 'Ensayo', allPosts: '← Todos los posts',
  },
}
// ── The essays themselves — English + Spanish, same ids and links ───
const POSTS = {
  en: [
    {
      id: 1,
      title: 'The permission you never needed',
      date: '23/06/26',
      description: "On the exhaustion of performing for an audience that never asked for the show — and why economic insecurity is being used to keep us looking outward.",
      content: [
        `There's a particular kind of exhaustion that comes not from doing too much, but from constantly performing for an audience that never asked for the show.`,
        `We grew up being told, in a thousand different ways, that the goal was to be chosen. By a company. By a recruiter. By an algorithm. By someone with the power to validate that yes, you are enough, you can come in, you have a place here.`,
        `And so we learned to curate ourselves outward. To build CVs instead of lives. To ask "what do they want?" before "what do I want?" We got very good at adapting — so good, in fact, that many of us forgot what we actually looked like before we started performing.`,
      ],
      quote: `The fear underneath all of this has a name: economic insecurity. And it's real.`,
      content2: [
        `But there's something worth examining in how that fear gets used — not to protect us, but to keep us moving in directions that serve other people's interests more than our own.`,
        `Our parents genuinely worry. They lived through a time when loyalty to a company meant a pension, when a mortgage meant stability, when following the rules meant security. They're not wrong to want that for us. They just don't realise those rules don't apply anymore. The contract changed while nobody was watching.`,
        `Nothing is guaranteed. Not the job, not the company, not the market, not the pension, not the housing. Nothing.`,
        `Which means we have two options. We can keep chasing the illusion of stability — burning out in pursuit of something that keeps moving further away. Or we can learn to build something different: a life that can hold uncertainty without collapsing. One that's oriented inward enough to know what actually matters, and flexible enough to survive everything else.`,
        `That's not recklessness. That's probably the sanest response to the world we actually live in.`,
      ],
      closing: `The question was never whether you'd be chosen. It was always whether you'd choose yourself first.`,
      cta: { label: 'This is also why I do what I do →', href: '/purpose' },
    },
    {
      id: 2,
      title: 'On sharing walls, sharing lives',
      date: '23/07/26',
      description: "Nobody grows up dreaming of a shared flat. But perhaps the years of dirty dishes and questionable WiFi agreements gave us something we didn't expect.",
      content: [
        `Nobody grows up dreaming of a shared flat.`,
        `You dream of your own space. Your own kitchen. A bathroom where the shampoo bottles are all yours. A sofa that nobody else has claimed. Maybe a plant. Definitely a plant.`,
        `Instead, a lot of us got something else: six years of other people's dirty dishes, questionable WiFi agreements, houses that never quite felt like home, and the particular intimacy of knowing exactly when your flatmates go to bed, what they eat when they're sad, and which one of them always uses the last of the toilet paper without saying anything.`,
        `It's not what we planned. But I've been thinking lately about what it gave us.`,
      ],
      quote: `We became, quietly and without realising it, good at community.`,
      content2: [
        `We learned to negotiate. To share. To live in close quarters with people who didn't choose us and didn't always understand us. We learned to read moods in a corridor, to give space in a small apartment, to build something resembling peace in conditions that weren't designed for it.`,
        `And now I look around at my generation and I see something interesting happening. We're not rushing toward the isolated dream of a house behind a fence. We're renting with friends by choice. We're co-working in cafés because we don't want to be alone. We're building group chats that function like neighbourhoods. We're choosing proximity.`,
        `Maybe the shared flat didn't just teach us to survive inconvenience. Maybe it rewired how we think about what home means.`,
        `There's a version of this story where shared living is just a symptom of economic failure — where we talk ourselves into romanticising something that was never really a choice. And that version is true, too. It wasn't always fun. There were nights I would have paid anything for a door that locked from the inside and a kitchen that was just mine.`,
        `But I've also had conversations at 2am over someone else's pasta that I wouldn't trade. I've learned things about myself by being forced to coexist with people I would never have chosen to know. I've understood, slowly, that living alone with your preferences perfectly met might be comfortable — but it's not the same as learning to belong somewhere.`,
        `We are a generation that has been told, repeatedly, that independence is the goal. Your own space. Your own rules. Your own everything. And yet most of us, given a free afternoon, call our friends. We show up at each other's houses. We make plans that involve other people.`,
        `Maybe the shared flat wasn't the compromise on the way to the real thing. Maybe it was quietly teaching us what the real thing actually looks like.`,
        `A house would be nice. I won't pretend it wouldn't. But a big one — with people you love nearby, walls you've covered with your own things, a kitchen where someone's always cooking something — that sounds less like a compromise and more like exactly what I actually want.`,
      ],
      closing: `Perhaps we didn't fail to reach the dream. Perhaps we just upgraded it.`,
      cta: { label: "I'm building something around this idea →", href: '/work/commo2' },
    },
    {
      id: 3,
      title: 'Make your time count',
      date: '13/08/26',
      description: "We are going to spend a huge portion of our lives working. So why not point that time at something that actually matters?",
      content: [
        `We are going to spend a huge portion of our lives working. That's not a complaint — it's just true. And once you accept it, a question follows that most people never stop to actually answer: if you're going to spend that much time on something, why not point it at something that matters?`,
        `I didn't arrive here easily. I went through years of vegetarianism before I went vegan. I watched, slowly, as I couldn't look away anymore — from what happens in slaughterhouses, in laboratories, in the places we choose not to see. And the more I understood, the less I could pretend I didn't.`,
        `That's how activism tends to start. Not with a decision, but with a moment when you realise you've been living with your eyes closed — and that someone, at some point, opened them for you.`,
      ],
      quote: `If we were the animals, we would want someone to speak for us.`,
      content2: [
        `That's what drove me into the streets. Into vigils. Into organisations and actions and moments that felt risky and necessary in equal measure. Not rage — love. A love for beings who have no platform, no vote, no way to make themselves heard. And an inability to accept that indifference was the only reasonable response.`,
        `I've managed social media for an anti-speciesist NGO in Valencia. I've done activism with Anonymous for the Voiceless in Spain and in other countries. I've stood in the streets of Munich for causes I believe in. And through all of it, I kept thinking: this is what communication is actually for. Not to sell things. To shift something. To make a person stop, feel, and perhaps decide differently.`,
        `That's what led me to want to do this work — content, strategy, storytelling — inside organisations that give a damn. Because the tools are the same whether you use them for a brand that doesn't care or for one that does. But the hours feel completely different.`,
        `There's a kind of exhaustion that comes from spending your attention on things you don't believe in. And there's something else — harder to name but easy to recognise — that comes from spending it on things you do.`,
        `We don't talk enough about how much of our lives we hand over when we choose where to work. Or how much we get back when we choose carefully.`,
      ],
      closing: `Your attention is not infinite. Neither is your time. Point both somewhere worth it.`,
      cta: { label: 'This is also who I am →', href: '/purpose' },
      plateClue: true,
    },
  ],
  es: [
    {
      id: 1,
      title: 'El permiso que nunca necesitaste',
      date: '23/06/26',
      description: 'Sobre el agotamiento de actuar para un público que nunca pidió el espectáculo — y por qué la inseguridad económica se usa para mantenernos mirando hacia fuera.',
      content: [
        `Hay un tipo particular de agotamiento que no viene de hacer demasiado, sino de actuar constantemente para un público que nunca pidió el espectáculo.`,
        `Crecimos escuchando, de mil formas distintas, que el objetivo era que te eligieran. Una empresa. Una persona de selección. Un algoritmo. Alguien con el poder de validar que sí, eres suficiente, puedes entrar, tienes un sitio aquí.`,
        `Y así aprendimos a curarnos hacia fuera. A construir currículums en lugar de vidas. A preguntarnos "¿qué quieren ellos?" antes que "¿qué quiero yo?" Nos volvimos muy buenas adaptándonos — tan buenas, de hecho, que muchas de nosotras olvidamos cómo éramos antes de empezar a actuar.`,
      ],
      quote: `El miedo que hay debajo de todo esto tiene nombre: inseguridad económica. Y es real.`,
      content2: [
        `Pero hay algo que merece la pena examinar en cómo se usa ese miedo — no para protegernos, sino para mantenernos moviéndonos en direcciones que sirven más a los intereses de otros que a los nuestros.`,
        `Nuestros padres se preocupan de verdad. Vivieron una época en la que la lealtad a una empresa significaba una pensión, en la que una hipoteca significaba estabilidad, en la que seguir las reglas significaba seguridad. No se equivocan al querer eso para nosotras. Simplemente no se dan cuenta de que esas reglas ya no aplican. El contrato cambió mientras nadie miraba.`,
        `Nada está garantizado. Ni el trabajo, ni la empresa, ni el mercado, ni la pensión, ni la vivienda. Nada.`,
        `Lo que significa que tenemos dos opciones. Podemos seguir persiguiendo la ilusión de estabilidad — quemándonos en busca de algo que cada vez se aleja más. O podemos aprender a construir algo distinto: una vida que pueda sostener la incertidumbre sin derrumbarse. Una lo bastante orientada hacia dentro como para saber qué importa de verdad, y lo bastante flexible como para sobrevivir a todo lo demás.`,
        `Eso no es imprudencia. Es probablemente la respuesta más sensata al mundo en el que realmente vivimos.`,
      ],
      closing: `La pregunta nunca fue si te elegirían a ti. Siempre fue si tú te elegirías a ti misma primero.`,
      cta: { label: 'Esto también es por lo que hago lo que hago →', href: '/purpose' },
    },
    {
      id: 2,
      title: 'Sobre compartir paredes, compartir vidas',
      date: '23/07/26',
      description: 'Nadie crece soñando con un piso compartido. Pero quizás los años de platos sucios y acuerdos cuestionables de WiFi nos dieron algo que no esperábamos.',
      content: [
        `Nadie crece soñando con un piso compartido.`,
        `Sueñas con tu propio espacio. Tu propia cocina. Un baño donde todos los botes de champú son tuyos. Un sofá que nadie más ha reclamado. Quizás una planta. Seguro que una planta.`,
        `En cambio, muchas de nosotras conseguimos otra cosa: seis años de platos sucios ajenos, acuerdos cuestionables de WiFi, casas que nunca terminaron de sentirse como un hogar, y la intimidad particular de saber exactamente cuándo se acuestan tus compañeros de piso, qué comen cuando están tristes, y quién de ellos siempre gasta el último papel higiénico sin decir nada.`,
        `No es lo que planeamos. Pero últimamente he estado pensando en lo que nos dio.`,
      ],
      quote: `Nos volvimos, silenciosamente y sin darnos cuenta, buenas en comunidad.`,
      content2: [
        `Aprendimos a negociar. A compartir. A vivir en espacios reducidos con personas que no nos eligieron y que no siempre nos entendían. Aprendimos a leer estados de ánimo en un pasillo, a dar espacio en un piso pequeño, a construir algo parecido a la paz en condiciones que no estaban diseñadas para ello.`,
        `Y ahora miro a mi generación y veo algo interesante ocurriendo. No corremos hacia el sueño aislado de una casa detrás de una valla. Alquilamos con amigas por elección. Trabajamos juntas en cafeterías porque no queremos estar solas. Construimos grupos de chat que funcionan como vecindarios. Elegimos la cercanía.`,
        `Quizás el piso compartido no solo nos enseñó a sobrevivir a la incomodidad. Quizás reconfiguró cómo pensamos sobre lo que significa un hogar.`,
        `Hay una versión de esta historia en la que vivir compartiendo es solo un síntoma del fracaso económico — en la que nos convencemos a nosotras mismas de romantizar algo que en realidad nunca fue una elección. Y esa versión también es verdad. No siempre fue divertido. Hubo noches en las que habría pagado cualquier cosa por una puerta que se cerrara por dentro y una cocina que fuera solo mía.`,
        `Pero también he tenido conversaciones a las 2 de la madrugada sobre la pasta de otra persona que no cambiaría por nada. He aprendido cosas sobre mí misma al verme obligada a convivir con gente que nunca habría elegido conocer. He entendido, poco a poco, que vivir sola con tus preferencias perfectamente cumplidas puede ser cómodo — pero no es lo mismo que aprender a pertenecer a algún sitio.`,
        `Somos una generación a la que le han dicho, una y otra vez, que la independencia es el objetivo. Tu propio espacio. Tus propias reglas. Todo tuyo. Y aun así, la mayoría de nosotras, con una tarde libre, llamamos a nuestras amigas. Aparecemos en casa de las demás. Hacemos planes que incluyen a otras personas.`,
        `Quizás el piso compartido no era el sacrificio de camino a lo de verdad. Quizás nos estaba enseñando, en silencio, cómo es realmente lo de verdad.`,
        `Una casa estaría bien. No voy a fingir que no. Pero una grande — con la gente que quieres cerca, paredes cubiertas con tus propias cosas, una cocina donde alguien siempre está cocinando algo — eso suena menos a sacrificio y más a exactamente lo que quiero de verdad.`,
      ],
      closing: `Quizás no fracasamos en alcanzar el sueño. Quizás simplemente lo mejoramos.`,
      cta: { label: 'Estoy construyendo algo alrededor de esta idea →', href: '/work/commo2' },
    },
    {
      id: 3,
      title: 'Haz que tu tiempo cuente',
      date: '13/08/26',
      description: 'Vamos a pasar una parte enorme de nuestras vidas trabajando. Entonces, ¿por qué no dirigir ese tiempo hacia algo que realmente importa?',
      content: [
        `Vamos a pasar una parte enorme de nuestras vidas trabajando. No es una queja — es simplemente cierto. Y una vez lo aceptas, surge una pregunta que la mayoría de la gente nunca se para a responder de verdad: si vas a dedicarle tanto tiempo a algo, ¿por qué no dirigirlo hacia algo que importa?`,
        `No llegué aquí fácilmente. Pasé años siendo vegetariana antes de hacerme vegana. Vi, poco a poco, cómo ya no podía apartar la mirada — de lo que pasa en los mataderos, en los laboratorios, en los lugares que elegimos no ver. Y cuanto más entendía, menos podía fingir que no lo sabía.`,
        `Así es como suele empezar el activismo. No con una decisión, sino con un momento en el que te das cuenta de que has estado viviendo con los ojos cerrados — y de que alguien, en algún momento, te los abrió.`,
      ],
      quote: `Si nosotros fuéramos los animales, querríamos que alguien hablara por nosotros.`,
      content2: [
        `Eso fue lo que me llevó a la calle. A las vigilias. A organizaciones y acciones y momentos que se sentían arriesgados y necesarios a partes iguales. No rabia — amor. Un amor por seres que no tienen plataforma, ni voto, ni forma de hacerse escuchar. Y una incapacidad para aceptar que la indiferencia fuera la única respuesta razonable.`,
        `He gestionado las redes sociales de una ONG antiespecista en Valencia. He hecho activismo con Anonymous for the Voiceless en España y en otros países. He estado en las calles de Múnich por causas en las que creo. Y a través de todo eso, seguía pensando: para esto sirve realmente la comunicación. No para vender cosas. Para mover algo. Para hacer que una persona se detenga, sienta, y quizás decida de otra manera.`,
        `Eso fue lo que me llevó a querer hacer este trabajo — contenido, estrategia, storytelling — dentro de organizaciones a las que les importa de verdad. Porque las herramientas son las mismas, las uses para una marca a la que no le importa o para una a la que sí. Pero las horas se sienten completamente distintas.`,
        `Hay un tipo de agotamiento que viene de dedicar tu atención a cosas en las que no crees. Y hay algo más — más difícil de nombrar pero fácil de reconocer — que viene de dedicarla a cosas en las que sí crees.`,
        `No hablamos lo suficiente de cuánto de nuestras vidas entregamos cuando elegimos dónde trabajar. Ni de cuánto recuperamos cuando elegimos con cuidado.`,
      ],
      closing: `Tu atención no es infinita. Tampoco tu tiempo. Dirige ambos hacia algo que merezca la pena.`,
      cta: { label: 'Esto también es quién soy →', href: '/purpose' },
      plateClue: true,
    },
  ],
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
function Post({ post, onClose, essayLabel, allPostsLabel }: { post: any; onClose: () => void; essayLabel: string; allPostsLabel: string }) {
  return (
    <div style={{ minHeight: '100vh', background: 'transparent', color: '#ffffff', position: 'relative' }}>
      <FloatingNav />
      <article style={{ maxWidth: '720px', margin: '0 auto', padding: '10rem 3.5rem 8rem', position: 'relative', zIndex: 2 }}>
        <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.62rem', fontWeight: 600, letterSpacing: '0.38em', textTransform: 'uppercase', color: '#ffffff', marginBottom: '2rem' }}>{essayLabel} · {post.date}</p>
        <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '64px', fontWeight: 400, color: '#ffffff', lineHeight: '64px', letterSpacing: '0.02em', marginBottom: '3rem' }}>{post.title}</h1>
        {post.content.map((p: string, i: number) => (
          <p key={i} style={{ fontFamily: "'Outfit', sans-serif", fontSize: '18.4px', fontWeight: 300, lineHeight: '34.96px', color: 'rgba(255,255,255,0.9)', marginBottom: '1.8rem' }}>{p}</p>
        ))}
        <blockquote style={{ borderLeft: '3px solid #d9737a', padding: '1.2rem 0 1.2rem 2rem', margin: '3rem 0', fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.6rem', color: '#ffffff', lineHeight: 1.3, letterSpacing: '0.02em' }}>
          {post.quote}
        </blockquote>
        {post.plateClue && <CluePlate id="vegan-plate" />}
        {post.content2.map((p: string, i: number) => (
          <p key={i} style={{ fontFamily: "'Outfit', sans-serif", fontSize: '18.4px', fontWeight: 300, lineHeight: '34.96px', color: 'rgba(255,255,255,0.9)', marginBottom: '1.8rem' }}>{p}</p>
        ))}
        <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '18.4px', fontWeight: 700, lineHeight: '34.96px', color: '#ffffff', marginBottom: '1.8rem' }}>{post.closing}</p>
        <div style={{ marginTop: '5rem', paddingTop: '3rem', borderTop: '1px solid rgba(255,255,255,0.15)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <button onClick={onClose} style={{ fontFamily: "'Outfit', sans-serif", fontSize: '18.4px', fontWeight: 300, color: 'rgba(255,255,255,0.6)', background: 'none', border: 'none', cursor: 'pointer' }}>{allPostsLabel}</button>
          <a href={post.cta.href} style={{ fontFamily: "'Outfit', sans-serif", fontSize: '18.4px', fontWeight: 300, color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>{post.cta.label}</a>
        </div>
      </article>
    </div>
  )
}
function BlogPage() {
  const { lang } = useLanguage()
  const p = pageCopy[lang]
  const posts = POSTS[lang]
  const [selectedId, setSelectedId] = useState<number | null>(null)
  const selected = selectedId !== null ? posts.find(post => post.id === selectedId) ?? null : null
  usePageMeta(
    selected ? `${selected.title} — Itxaso Muntión` : p.metaTitle,
    selected ? selected.description : p.metaDescription
  )
  if (selected) return <Post post={selected} onClose={() => setSelectedId(null)} essayLabel={p.essay} allPostsLabel={p.allPosts} />
  return (
    <div style={{ minHeight: '100vh', background: 'transparent', color: '#ffffff', position: 'relative' }}>
      <FloatingNav />
      <div style={{ maxWidth: '1300px', margin: '0 auto', padding: '10rem 3.5rem 8rem', position: 'relative', zIndex: 2 }}>
        <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.62rem', fontWeight: 600, letterSpacing: '0.38em', textTransform: 'uppercase', color: '#ffffff', marginBottom: '1.5rem' }}>{p.eyebrow}</p>
        <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '64px', fontWeight: 400, color: '#ffffff', lineHeight: '64px', letterSpacing: '0.02em', marginBottom: '5rem' }}>{p.title}</h1>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {[...posts].reverse().map((post) => (
            <div key={post.id} onClick={() => setSelectedId(post.id)}
              style={{ cursor: 'pointer', display: 'block', padding: '2.5rem', border: '1px solid rgba(255,255,255,0.18)', background: 'rgba(0,0,0,0.25)', backdropFilter: 'blur(4px)', transition: 'border-color 0.3s ease, background 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#8a2333'; e.currentTarget.style.background = 'rgba(217,115,122,0.12)'; e.currentTarget.style.boxShadow = '0 0 24px rgba(255,255,255,0.15)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)'; e.currentTarget.style.background = 'rgba(255,255,255,0.55)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)' }}>
              <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#ffffff', marginBottom: '1rem' }}>{post.date}</p>
              <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '2.5rem', fontWeight: 400, color: '#ffffff', lineHeight: 1.1, letterSpacing: '0.02em', marginBottom: '1rem' }}>{post.title}</h2>
              <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '18.4px', fontWeight: 300, color: 'rgba(255,255,255,0.9)', lineHeight: '34.96px', maxWidth: '600px' }}>{post.description}</p>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '3rem' }}>
          <ClueScratch id="blog-scratch" />
        </div>
      </div>
    </div>
  )
}
