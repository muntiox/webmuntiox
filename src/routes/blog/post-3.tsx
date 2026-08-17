import { createFileRoute, Link } from '@tanstack/react-router'
export const Route = createFileRoute('/blog/post-3')({
  component: Post3Page,
})
function Post3Page() {
  return (
    <div style={{ minHeight: '100vh', background: '#070709', color: '#edeae2', position: 'relative' }}>
      <div style={{ position: 'fixed', top: '1.4rem', right: '1.8rem', zIndex: 100 }}>
        <Link to="/blog" style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.65rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#ffffff', textDecoration: 'none', background: '#c86c2e', padding: '0.6rem 1.2rem' }}>← Back</Link>
      </div>
      <article style={{ maxWidth: '720px', margin: '0 auto', padding: '10rem 3.5rem 8rem', position: 'relative', zIndex: 2 }}>
        <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.62rem', fontWeight: 600, letterSpacing: '0.38em', textTransform: 'uppercase', color: '#c86c2e', marginBottom: '2rem' }}>Essay · 2026</p>
        <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '64px', fontWeight: 400, color: '#edeae2', lineHeight: '64px', letterSpacing: '0.02em', marginBottom: '3rem' }}>
          Make your<br/>time count
        </h1>
        {[
          `We are going to spend a huge portion of our lives working. That's not a complaint — it's just true. And once you accept it, a question follows that most people never stop to actually answer: if you're going to spend that much time on something, why not point it at something that matters?`,
          `I didn't arrive here easily. I went through years of vegetarianism before I went vegan. I watched, slowly, as I couldn't look away anymore — from what happens in slaughterhouses, in laboratories, in the places we choose not to see. And the more I understood, the less I could pretend I didn't.`,
          `That's how activism tends to start. Not with a decision, but with a moment when you realise you've been living with your eyes closed — and that someone, at some point, opened them for you.`,
        ].map((p, i) => (
          <p key={i} style={{ fontFamily: "'Outfit', sans-serif", fontSize: '18.4px', fontWeight: 300, lineHeight: '34.96px', color: 'rgba(237,234,226,0.72)', marginBottom: '1.8rem' }}>{p}</p>
        ))}
        <blockquote style={{ borderLeft: '3px solid #c86c2e', padding: '1.2rem 0 1.2rem 2rem', margin: '3rem 0', fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.6rem', color: '#edeae2', lineHeight: 1.3, letterSpacing: '0.02em' }}>
          If we were the animals, we would want someone to speak for us.
        </blockquote>
        {[
          `That's what drove me into the streets. Into vigils. Into organisations and actions and moments that felt risky and necessary in equal measure. Not rage — love. A love for beings who have no platform, no vote, no way to make themselves heard. And an inability to accept that indifference was the only reasonable response.`,
          `I've managed social media for an anti-speciesist NGO in Valencia. I've done activism with Anonymous for the Voiceless in Spain and in other countries. I've stood in the streets of Munich for causes I believe in. And through all of it, I kept thinking: this is what communication is actually for. Not to sell things. To shift something. To make a person stop, feel, and perhaps decide differently.`,
          `That's what led me to want to do this work — content, strategy, storytelling — inside organisations that give a damn. Because the tools are the same whether you use them for a brand that doesn't care or for one that does. But the hours feel completely different.`,
          `There's a kind of exhaustion that comes from spending your attention on things you don't believe in. And there's something else — harder to name but easy to recognise — that comes from spending it on things you do.`,
          `We don't talk enough about how much of our lives we hand over when we choose where to work. Or how much we get back when we choose carefully.`,
        ].map((p, i) => (
          <p key={i} style={{ fontFamily: "'Outfit', sans-serif", fontSize: '18.4px', fontWeight: 300, lineHeight: '34.96px', color: 'rgba(237,234,226,0.72)', marginBottom: '1.8rem' }}>{p}</p>
        ))}
        <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '18.4px', fontWeight: 700, lineHeight: '34.96px', color: '#edeae2', marginBottom: '1.8rem' }}>
          Your attention is not infinite. Neither is your time. Point both somewhere worth it.
        </p>
        <div style={{ marginTop: '5rem', paddingTop: '3rem', borderTop: '1px solid rgba(237,234,226,0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link to="/blog" style={{ fontFamily: "'Outfit', sans-serif", fontSize: '18.4px', fontWeight: 300, color: 'rgba(237,234,226,0.5)', textDecoration: 'none' }}>← All posts</Link>
          <Link to="/purpose" style={{ fontFamily: "'Outfit', sans-serif", fontSize: '18.4px', fontWeight: 300, color: 'rgba(237,234,226,0.5)', textDecoration: 'none' }}>This is also who I am →</Link>
        </div>
      </article>
    </div>
  )
}
