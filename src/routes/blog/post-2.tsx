import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/blog/post-2')({
  component: Post2Page,
})

function Post2Page() {
  return (
    <div style={{ minHeight: '100vh', background: 'transparent', color: '#ffffff', position: 'relative' }}>
      <div style={{ position: 'fixed', top: '1.4rem', right: '1.8rem', zIndex: 100 }}>
        <Link 
          to="/blog" 
          style={{ 
            fontFamily: "'Outfit', sans-serif", 
            fontSize: '0.75rem', 
            fontWeight: 500, 
            letterSpacing: '0.2em', 
            textTransform: 'uppercase', 
            color: '#ffffff', 
            textDecoration: 'none', 
            background: '#d9737a', 
            padding: '0.6rem 1.2rem',
            borderRadius: '4px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
          }}
        >
          ← Back
        </Link>
      </div>
      <article style={{ maxWidth: '720px', margin: '0 auto', padding: '8rem 2rem 6rem', position: 'relative', zIndex: 2 }}>
        <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.38em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginBottom: '2rem' }}>
          Essay · 2025 · 3 min read
        </p>
        <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.8rem, 7vw, 4rem)', fontWeight: 400, color: '#ffffff', lineHeight: '1.05', letterSpacing: '0.02em', marginBottom: '3rem' }}>
          On sharing walls,<br/>sharing lives
        </h1>
        {[
          `Nobody grows up dreaming of a shared flat.`,
          `You dream of your own space. Your own kitchen. A bathroom where the shampoo bottles are all yours. A sofa that nobody else has claimed. Maybe a plant. Definitely a plant.`,
          `Instead, a lot of us got something else: six years of other people's dirty dishes, questionable WiFi agreements, houses that never quite felt like home, and the particular intimacy of knowing exactly when your flatmates go to bed, what they eat when they're sad, and which one of them always uses the last of the toilet paper without saying anything.`,
          `It's not what we planned. But I've been thinking lately about what it gave us.`,
        ].map((p, i) => (
          <p key={i} style={{ fontFamily: "'Outfit', sans-serif", fontSize: '18.4px', fontWeight: 300, lineHeight: '34.96px', color: 'rgba(255,255,255,0.82)', marginBottom: '1.8rem' }}>{p}</p>
        ))}
        <blockquote style={{ borderLeft: '3px solid #d9737a', padding: '1.2rem 0 1.2rem 2rem', margin: '3rem 0', fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.6rem', color: '#ffffff', lineHeight: 1.3, letterSpacing: '0.02em' }}>
          We became, quietly and without realising it, good at community.
        </blockquote>
        {[
          `We learned to negotiate. To share. To live in close quarters with people who didn't choose us and didn't always understand us. We learned to read moods in a corridor, to give space in a small apartment, to build something resembling peace in conditions that weren't designed for it.`,
          `And now I look around at my generation and I see something interesting happening. We're not rushing toward the isolated dream of a house behind a fence. We're renting with friends by choice. We're co-working in cafés because we don't want to be alone. We're building group chats that function like neighbourhoods. We're choosing proximity.`,
          `Maybe the shared flat didn't just teach us to survive inconvenience. Maybe it rewired how we think about what home means.`,
        ].map((p, i) => (
          <p key={i} style={{ fontFamily: "'Outfit', sans-serif", fontSize: '18.4px', fontWeight: 300, lineHeight: '34.96px', color: 'rgba(255,255,255,0.82)', marginBottom: '1.8rem' }}>{p}</p>
        ))}
        
        <div style={{ margin: '3.5rem 0', padding: '1.5rem', background: 'rgba(255, 255, 255, 0.04)', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.62rem', fontWeight: 600, letterSpacing: '0.38em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', marginBottom: '0.5rem' }}>Worth watching</p>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.85rem', fontWeight: 400, color: '#ffffff', marginBottom: '1.2rem' }}>Mia Birdsong — As lonely as we are, we can choose community</p>
          <div style={{ borderRadius: '8px', overflow: 'hidden' }}>
            <iframe
              src="https://www.youtube.com/embed/aJm40A_rK-8"
              style={{ width: '100%', aspectRatio: '16/9', border: 'none', display: 'block' }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        {[
          `A house would be nice. I won't pretend it wouldn't. But a big one — with people you love nearby, walls you've covered with your own things, a kitchen where someone's always cooking something — that sounds less like a compromise and more like exactly what I actually want.`,
        ].map((p, i) => (
          <p key={i} style={{ fontFamily: "'Outfit', sans-serif", fontSize: '18.4px', fontWeight: 300, lineHeight: '34.96px', color: 'rgba(255,255,255,0.82)', marginBottom: '1.8rem' }}>{p}</p>
        ))}
        <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '18.4px', fontWeight: 700, lineHeight: '34.96px', color: '#ffffff', marginBottom: '1.8rem' }}>
          Perhaps we didn't fail to reach the dream. Perhaps we just upgraded it.
        </p>
        
        <div style={{ marginTop: '5rem', paddingTop: '3rem', borderTop: '1px solid rgba(255,255,255,0.15)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <Link to="/blog" style={{ fontFamily: "'Outfit', sans-serif", fontSize: '1rem', fontWeight: 300, color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>← All posts</Link>
          <Link to="/work/commo2" style={{ fontFamily: "'Outfit', sans-serif", fontSize: '1rem', fontWeight: 400, color: '#d9737a', textDecoration: 'none' }}>Explore COMMO (Community Project) →</Link>
        </div>
      </article>
    </div>
  )
}