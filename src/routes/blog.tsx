import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/blog')({
  component: BlogPage,
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

function Post({ post, onClose }: { post: any; onClose: () => void }) {
  return (
    <div style={{ minHeight: '100vh', background: '#070709', color: '#edeae2', position: 'relative' }}>
      <video autoPlay muted loop playsInline preload="none"
        style={{ position: 'fixed', inset: 0, width: '100%', height: '100%', objectFit: 'cover',
          mixBlendMode: 'normal', opacity: 0.5, filter: 'brightness(1)', zIndex: 0, pointerEvents: 'none' }}>
        <source src="/videos/blog.mp4" type="video/mp4"/>
      </video>

      <div style={{ position: 'fixed', top: '1.4rem', right: '1.8rem', zIndex: 100 }}>
        <button onClick={onClose} style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.65rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#ffffff', background: '#c86c2e', padding: '0.6rem 1.2rem', border: 'none', cursor: 'pointer' }}>← Back</button>
      </div>

      <article style={{ maxWidth: '720px', margin: '0 auto', padding: '10rem 3.5rem 8rem', position: 'relative', zIndex: 2 }}>
        <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.62rem', fontWeight: 600, letterSpacing: '0.38em', textTransform: 'uppercase', color: '#edeae2', marginBottom: '2rem' }}>Essay · {post.date}</p>

        <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '64px', fontWeight: 400, color: '#edeae2', lineHeight: '64px', letterSpacing: '0.02em', marginBottom: '3rem' }}>{post.title}</h1>

        {post.content.map((p: string, i: number) => (
          <p key={i} style={{ fontFamily: "'Outfit', sans-serif", fontSize: '18.4px', fontWeight: 300, lineHeight: '34.96px', color: 'rgba(237,234,226,0.9)', marginBottom: '1.8rem' }}>{p}</p>
        ))}

        <blockquote style={{ borderLeft: '3px solid #c86c2e', padding: '1.2rem 0 1.2rem 2rem', margin: '3rem 0', fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.6rem', color: '#edeae2', lineHeight: 1.3, letterSpacing: '0.02em' }}>
          {post.quote}
        </blockquote>

        {post.content2.map((p: string, i: number) => (
          <p key={i} style={{ fontFamily: "'Outfit', sans-serif", fontSize: '18.4px', fontWeight: 300, lineHeight: '34.96px', color: 'rgba(237,234,226,0.9)', marginBottom: '1.8rem' }}>{p}</p>
        ))}

        <div style={{ margin: '3rem 0' }}>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.62rem', fontWeight: 600, letterSpacing: '0.38em', textTransform: 'uppercase', color: 'rgba(237,234,226,0.4)', marginBottom: '0.5rem' }}>Worth watching</p>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.75rem', fontWeight: 300, color: 'rgba(237,234,226,0.4)', marginBottom: '1rem', fontStyle: 'italic' }}>{post.videoLabel}</p>
          <iframe src={post.videoSrc} style={{ width: '100%', aspectRatio: '16/9', border: 'none' }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
        </div>

        <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '18.4px', fontWeight: 700, lineHeight: '34.96px', color: '#edeae2', marginBottom: '1.8rem' }}>{post.closing}</p>

        <div style={{ marginTop: '5rem', paddingTop: '3rem', borderTop: '1px solid rgba(237,234,226,0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <button onClick={onClose} style={{ fontFamily: "'Outfit', sans-serif", fontSize: '18.4px', fontWeight: 300, color: 'rgba(237,234,226,0.5)', background: 'none', border: 'none', cursor: 'pointer' }}>← All posts</button>
          <a href={post.cta.href} style={{ fontFamily: "'Outfit', sans-serif", fontSize: '18.4px', fontWeight: 300, color: post.id === 2 ? 'rgba(237,234,226,0.5)' : '#c86c2e', textDecoration: 'none' }}><span style={{ color: post.id === 2 ? 'rgba(237,234,226,0.5)' : '#c86c2e' }}>{post.cta.label}</span></a>
        </div>
      </article>
    </div>
  )
}

function BlogPage() {
const posts = [
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
    videoSrc: 'https://www.youtube.com/embed/qp0HIF3SfI4',
    videoLabel: 'Simon Sinek — How great leaders inspire action',
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
    videoSrc: 'https://www.youtube.com/embed/TGZMSmcuiXM',
    videoLabel: 'Sebastian Junger — Tribe: On Homecoming and Belonging',
    cta: { label: "I'm building something around this idea →", href: '/work/commo2', color: '#ffffff' },
  },
]
  const [selected, setSelected] = useState<typeof posts[0] | null>(null)

  if (selected) return <Post post={selected} onClose={() => setSelected(null)} />

  return (
    <div style={{ minHeight: '100vh', background: '#070709', color: '#edeae2', position: 'relative' }}>
      <video autoPlay muted loop playsInline preload="none"
        style={{ position: 'fixed', inset: 0, width: '100%', height: '100%', objectFit: 'cover',
          mixBlendMode: 'normal', opacity: 0.5, filter: 'brightness(1)', zIndex: 0, pointerEvents: 'none' }}>
        <source src="/videos/blog.mp4" type="video/mp4"/>
      </video>
      <FloatingNav />

      <div style={{ maxWidth: '860px', margin: '0 auto', padding: '10rem 3.5rem 8rem', position: 'relative', zIndex: 2 }}>
        <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.62rem', fontWeight: 600, letterSpacing: '0.38em', textTransform: 'uppercase', color: '#edeae2', marginBottom: '1.5rem' }}>Writing</p>
        <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '64px', fontWeight: 400, color: '#edeae2', lineHeight: '64px', letterSpacing: '0.02em', marginBottom: '5rem' }}>Things worth saying.</h1>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {posts.map((post) => (
            <div key={post.id} onClick={() => setSelected(post)}
              style={{ cursor: 'pointer', display: 'block', padding: '2.5rem', border: '1px solid rgba(237,234,226,0.12)', background: 'rgba(7,7,9,0.55)', backdropFilter: 'blur(4px)', transition: 'border-color 0.3s ease, background 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#c86c2e'; e.currentTarget.style.background = 'rgba(200,108,46,0.08)'; e.currentTarget.style.boxShadow = '0 0 24px rgba(200,108,46,0.2)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(237,234,226,0.12)'; e.currentTarget.style.background = 'rgba(7,7,9,0.55)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)' }}>
              <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#edeae2', marginBottom: '1rem' }}>{post.date}</p>
              <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '2.5rem', fontWeight: 400, color: '#edeae2', lineHeight: 1.1, letterSpacing: '0.02em', marginBottom: '1rem' }}>{post.title}</h2>
              <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '18.4px', fontWeight: 300, color: 'rgba(237,234,226,0.9)', lineHeight: '34.96px', maxWidth: '600px' }}>{post.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
