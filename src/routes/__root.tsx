import { HeadContent, Outlet, Scripts, createRootRoute } from '@tanstack/react-router'
import { useEffect } from 'react'
import '../styles.css'

export const Route = createRootRoute({
  notFoundComponent: () => (
    <div style={{ minHeight: '100vh', background: '#070709', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '2rem' }}>
      <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '6rem', color: '#edeae2', lineHeight: 1 }}>404</p>
      <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '18.4px', fontWeight: 300, color: 'rgba(237,234,226,0.72)' }}>This page doesn't exist.</p>
      <a href="/" style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#ffffff', background: '#c86c2e', padding: '1rem 2.5rem', textDecoration: 'none' }}>← Home</a>
    </div>
  ),
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'MUNTIÓN — Content Creator & Digital Strategist' },
      {
        name: 'description',
        content: 'MUNTIÓN — Content Creator & Digital Strategist. Where creativity meets conscious digital strategy.',
      },
    ],
    links: [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Outfit:wght@300;400;500;600;700&display=swap',
      },
      { rel: 'icon', type: 'image/png', href: '/favicon-new.png' },
    ],
  }),
  shellComponent: RootDocument,
})

function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let raf: number
    let mouseX = -200, mouseY = -200, ringX = -200, ringY = -200

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      dot.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`
      const target = e.target as HTMLElement
      setHovering(!!(target.closest('a') || target.closest('button') || target.closest('[data-hover]')))
    }

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t

    const animate = () => {
      ringX = lerp(ringX, mouseX - 18, 0.12)
      ringY = lerp(ringY, mouseY - 18, 0.12)
      ring.style.transform = `translate(${ringX}px, ${ringY}px)`
      raf = requestAnimationFrame(animate)
    }

    document.addEventListener('mousemove', onMove)
    raf = requestAnimationFrame(animate)
    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className={`cursor-ring ${hovering ? 'cursor-ring--hover' : ''}`} />
    </>
  )
}

function RootDocument({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    document.body.classList.add('flash-triggered')
    document.body.classList.add('nav-lit')
  }, [])
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
<Outlet />
        <Scripts />
      </body>
    </html>
  )
}
