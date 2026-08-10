import { Outlet, createRootRoute } from '@tanstack/react-router'
import { useEffect, useRef, useState } from 'react'
import '../styles.css'

export const Route = createRootRoute({
  notFoundComponent: () => (
    <div style={{ minHeight: '100vh', background: '#070709', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '2rem' }}>
      <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '6rem', color: '#edeae2', lineHeight: 1 }}>404</p>
      <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '18.4px', fontWeight: 300, color: 'rgba(237,234,226,0.72)' }}>This page doesn't exist.</p>
      <a href="/" style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#ffffff', background: '#c86c2e', padding: '1rem 2.5rem', textDecoration: 'none' }}>← Home</a>
    </div>
  ),
  component: RootComponent,
})

function RootComponent() {
  useEffect(() => {
    document.body.classList.add('flash-triggered')
    document.body.classList.add('nav-lit')
  }, [])

  return <Outlet />
}
