import { useState } from 'react'
import type { CSSProperties } from 'react'

// ── Hidden trail mark ──────────────────────────────────────────────
// A tiny pulsing dot planted somewhere unannounced on an inner page.
// Almost invisible at rest (opacity 0.12), it brightens on hover so
// anyone who happens to move their mouse over it discovers it's
// clickable. Clicking it records that this stop was found
// (sessionStorage) and moves on to the next one. Find all three —
// purpose, projects, blog — and something extra unlocks on /contact.
export default function TrailMark({
  href,
  storageKey,
  style,
}: {
  href: string
  storageKey: string
  style?: CSSProperties
}) {
  const [hover, setHover] = useState(false)
  return (
    <a
      href={href}
      onClick={() => {
        try {
          sessionStorage.setItem(storageKey, '1')
        } catch {
          /* sessionStorage unavailable — trail just won't be tracked */
        }
      }}
      aria-hidden="true"
      tabIndex={-1}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: 'fixed',
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        background: '#d9737a',
        opacity: hover ? 0.95 : 0.12,
        boxShadow: hover ? '0 0 16px 5px rgba(217,115,122,0.55)' : 'none',
        cursor: 'pointer',
        zIndex: 45,
        transition: 'opacity 0.5s ease, box-shadow 0.5s ease',
        ...style,
      }}
    />
  )
}
