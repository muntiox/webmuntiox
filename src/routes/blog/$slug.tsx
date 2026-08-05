import { createFileRoute, Link } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import { allBlogs } from 'content-collections'
import { useState, useEffect } from 'react'
import { marked } from 'marked'

const getComments = createServerFn({ method: 'GET' })
  .validator((slug: string) => slug)
  .handler(async ({ data: slug }) => {
    const { getNetlifyContext } = await import('@netlify/vite-plugin-tanstack-start/server')
    const ctx = getNetlifyContext()
    const db = ctx?.env?.DATABASE
    if (!db) return []
    await db.exec(`CREATE TABLE IF NOT EXISTS comments (id INTEGER PRIMARY KEY AUTOINCREMENT, slug TEXT NOT NULL, name TEXT NOT NULL, message TEXT NOT NULL, created_at TEXT NOT NULL)`)
    const result = await db.prepare('SELECT * FROM comments WHERE slug = ? ORDER BY created_at DESC').bind(slug).all()
    return result.results as { id: number; name: string; message: string; created_at: string }[]
  })

const addComment = createServerFn({ method: 'POST' })
  .validator((data: { slug: string; name: string; message: string }) => data)
  .handler(async ({ data }) => {
    const { getNetlifyContext } = await import('@netlify/vite-plugin-tanstack-start/server')
    const ctx = getNetlifyContext()
    const db = ctx?.env?.DATABASE
    if (!db) throw new Error('No database')
    await db.prepare('INSERT INTO comments (slug, name, message, created_at) VALUES (?, ?, ?, ?)').bind(data.slug, data.name, data.message, new Date().toISOString()).run()
    return { ok: true }
  })

export const Route = createFileRoute('/blog/$slug')({
  component: BlogPost,
})

function BlogPost() {
  const { slug } = Route.useParams()
  
  // Match flexibly — by filename with or without path prefix
  const post = allBlogs.find(p =>
    p._meta.path === slug ||
    p._meta.path === slug + '.md' ||
    p._meta.path.split('/').pop()?.replace('.md', '') === slug ||
    p._meta.path.split('/').pop() === slug
  )
  console.log('slug:', slug, 'found:', !!post, 'available:', allBlogs.map(p => p._meta.path))

  const [comments, setComments] = useState<{ id: number; name: string; message: string; created_at: string }[]>([])
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  useEffect(() => { getComments({ data: slug }).then(setComments) }, [slug])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !message.trim()) return
    setSending(true)
    await addComment({ data: { slug, name, message } })
    setComments(await getComments({ data: slug }))
    setName(''); setMessage(''); setSending(false); setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  if (!post) return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Outfit', sans-serif" }}>
      <div style={{ textAlign: 'center' }}>
        <p style={{ color: '#8a9a8d', marginBottom: '1rem' }}>Post not found.</p>
        <Link to="/blog" style={{ color: '#1a2520', fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase', textDecoration: 'none' }}>← Back to blog</Link>
      </div>
    </div>
  )

  return (
    <div style={{ minHeight: '100vh', background: 'transparent', fontFamily: "'Outfit', sans-serif" }}>
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, padding: '2rem 3.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(250,250,247,0.92)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(26,37,32,0.10)' }}>
        <Link to="/" style={{ fontSize: '1rem', fontWeight: 600, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#1a2520', textDecoration: 'none' }}>MUNTIÓN</Link>
        <Link to="/blog" style={{ fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#6a7a6d', textDecoration: 'none' }}>← Blog</Link>
      </div>

      <article style={{ maxWidth: 720, margin: '0 auto', padding: '10rem 3.5rem 4rem' }}>
        <header style={{ marginBottom: '4rem' }}>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
            {post.tags.map(tag => <span key={tag} style={{ fontSize: '0.6rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#8a7040', border: '1px solid rgba(138,112,64,0.3)', padding: '0.2rem 0.6rem' }}>{tag}</span>)}
          </div>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 400, color: '#1a2520', lineHeight: 1.2, marginBottom: '1.5rem' }}>{post.title}</h1>
          <div style={{ display: 'flex', gap: '2rem', fontSize: '0.75rem', color: '#8a9a8d', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            <span>{new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
            <span>{post.author}</span>
          </div>
        </header>

        <div style={{ width: '100%', height: 1, background: 'rgba(26,37,32,0.10)', marginBottom: '3rem' }} />
        <div style={{ fontSize: '1.05rem', fontWeight: 300, lineHeight: 1.9, color: '#333' }} dangerouslySetInnerHTML={{ __html: marked(post.content) as string }} />
        <div style={{ width: '100%', height: 1, background: 'rgba(26,37,32,0.10)', margin: '5rem 0 4rem' }} />

        <section>
          <p style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.35em', textTransform: 'uppercase', color: '#8a7040', marginBottom: '2.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ display: 'inline-block', width: 28, height: 1, background: '#8a7040' }} />
            {comments.length === 0 ? 'Be the first to comment' : `${comments.length} comment${comments.length !== 1 ? 's' : ''}`}
          </p>

          {comments.map(c => (
            <div key={c.id} style={{ marginBottom: '2rem', paddingBottom: '2rem', borderBottom: '1px solid rgba(26,37,32,0.07)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.6rem' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 500, color: '#1a2520' }}>{c.name}</span>
                <span style={{ fontSize: '0.7rem', color: '#aab8ad' }}>{new Date(c.created_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
              </div>
              <p style={{ fontSize: '0.95rem', fontWeight: 300, color: '#4a5a4d', lineHeight: 1.75 }}>{c.message}</p>
            </div>
          ))}

          <form onSubmit={handleSubmit} style={{ marginTop: '3rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <label style={{ fontSize: '0.62rem', fontWeight: 600, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#8a9a8d' }}>Name</label>
              <input value={name} onChange={e => setName(e.target.value)} placeholder="Your name" required style={{ background: 'transparent', border: 'none', borderBottom: '1px solid rgba(0,0,0,0.1)', padding: '0.8rem 0', fontFamily: "'Outfit', sans-serif", fontSize: '0.95rem', fontWeight: 300, color: '#1a2520', outline: 'none', width: '100%' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <label style={{ fontSize: '0.62rem', fontWeight: 600, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#8a9a8d' }}>Comment</label>
              <textarea value={message} onChange={e => setMessage(e.target.value)} placeholder="Share your thoughts..." required rows={4} style={{ background: 'transparent', border: 'none', borderBottom: '1px solid rgba(0,0,0,0.1)', padding: '0.8rem 0', fontFamily: "'Outfit', sans-serif", fontSize: '0.95rem', fontWeight: 300, color: '#1a2520', outline: 'none', width: '100%', resize: 'none' }} />
            </div>
            <button type="submit" disabled={sending} style={{ alignSelf: 'flex-start', fontFamily: "'Outfit', sans-serif", fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#fafaf7', background: sending ? '#8a9a8d' : '#1a2520', border: 'none', padding: '1rem 2.5rem', cursor: 'pointer' }}>
              {sending ? 'Sending...' : sent ? 'Sent ✓' : 'Post comment'}
            </button>
          </form>
        </section>
      </article>
    </div>
  )
}
