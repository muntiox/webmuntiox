import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/blog/post-2')({
  component: Post2Page,
})

function Post2Page() {
  return (
    <div style={{ minHeight: '100vh', background: '#070709', color: '#edeae2', position: 'relative' }}>
      <div style={{ position: 'fixed', top: '1.4rem', right: '1.8rem', zIndex: 100 }}>
        <Link to="/blog" style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.65rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#ffffff', textDecoration: 'none', background: '#c86c2e', padding: '0.6rem 1.2rem' }}>← Back</Link>
      </div>

      <article style={{ maxWidth: '720px', margin: '0 auto', padding: '10rem 3.5rem 8rem', position: 'relative', zIndex: 2 }}>

        <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.62rem', fontWeight: 600, letterSpacing: '0.38em', textTransform: 'uppercase', color: '#c86c2e', marginBottom: '2rem' }}>Essay · 2025</p>

        <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '64px', fontWeight: 400, color: '#edeae2', lineHeight: '64px', letterSpacing: '0.02em', marginBottom: '3rem' }}>
          On sharing walls,<br/>sharing lives
        </h1>

        {[
          `Nobody grows up dreaming of a shared flat.`,
          `You dream of your own space. Your own kitchen. A bathroom where the shampoo bottles are all yours. A sofa that nobody else has claimed. Maybe a plant. Definitely a plant.`,
          `Instead, a lot of us got something else: six years of other people's dirty dishes, questionable WiFi agreements, houses that never quite felt like home, and the particular intimacy of knowing exactly when your flatmates go to bed, what they eat when they're sad, and which one of them always uses the last of the toilet paper without saying anything.`,
          `It's not what we planned. But I've been thinking lately about what it gave us.`,
        ].map((p, i) => (
          <p key={i} style={{ fontFamily: "'Outfit', sans-serif", fontSize: '18.4px', fontWeight: 300, lineHeight: '34.96px', color: 'rgba(237,234,226,0.72)', marginBottom: '1.8rem' }}>{p}</p>
        ))}

        <blockquote style={{ borderLeft: '3px solid #c86c2e', padding: '1.2rem 0 1.2rem 2rem', margin: '3rem 0', fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.6rem', color: '#edeae2', lineHeight: 1.3, letterSpacing: '0.02em' }}>
          We became, quietly and without realising it, good at community.
        </blockquote>

        {[
          `We learned to negotiate. To share. To live in close quarters with people who didn't choose us and didn't always understand us. We learned to read moods in a corridor, to give space in a small apartment, to build something resembling peace in conditions that weren't designed for it.`,
          `And now I look around at my generation and I see something interesting happening. We're not rushing toward the isolated dream of a house behind a fence. We're renting with friends by choice. We're co-working in cafés because we don't want to be alone. We're building group chats that function like neighbourhoods. We're choosing proximity.`,
          `Maybe the shared flat didn't just teach us to survive inconvenience. Maybe it rewired how we think about what home means.`,
        ].map((p, i) => (
          <p key={i} style={{ fontFamily: "'Outfit', sans-serif", fontSize: '18.4px', fontWeight: 300, lineHeight: '34.96px', color: 'rgba(237,234,226,0.72)', marginBottom: '1.8rem' }}>{p}</p>
        ))}

        <div style={{ margin: '3rem 0' }}>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.62rem', fontWeight: 600, letterSpacing: '0.38em', textTransform: 'uppercase', color: 'rgba(237,234,226,0.4)', marginBottom: '1rem' }}>Worth watching</p>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.75rem', fontWeight: 300, color: 'rgba(237,234,226,0.4)', marginBottom: '1rem', fontStyle: 'italic' }}>Sebastian Junger — Why veterans miss war (on tribe, belonging and community)</p>
          <iframe
            src="https://www.youtube.com/embed/iEBRB1OjEWs"
            style={{ width: '100%', aspectRatio: '16/9', border: 'none' }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {[
          `A house would be nice. I won't pretend it wouldn't. But a big one — with people you love nearby, walls you've covered with your own things, a kitchen where someone's always cooking something — that sounds less like a compromise and more like exactly what I actually want.`,
        ].map((p, i) => (
          <p key={i} style={{ fontFamily: "'Outfit', sans-serif", fontSize: '18.4px', fontWeight: 300, lineHeight: '34.96px', color: 'rgba(237,234,226,0.72)', marginBottom: '1.8rem' }}>{p}</p>
        ))}

        <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '18.4px', fontWeight: 700, lineHeight: '34.96px', color: '#edeae2', marginBottom: '1.8rem' }}>
          Perhaps we didn't fail to reach the dream. Perhaps we just upgraded it.
        </p>

        <div style={{ marginTop: '5rem', paddingTop: '3rem', borderTop: '1px solid rgba(237,234,226,0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link to="/blog" style={{ fontFamily: "'Outfit', sans-serif", fontSize: '18.4px', fontWeight: 300, color: 'rgba(237,234,226,0.5)', textDecoration: 'none' }}>← All posts</Link>
          <Link to="/work/commo2" style={{ fontFamily: "'Outfit', sans-serif", fontSize: '18.4px', fontWeight: 300, color: '#c86c2e', textDecoration: 'none' }}>I'm building something around this idea →</Link>
        </div>

      </article>
    </div>
  )
}
