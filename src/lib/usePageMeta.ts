import { useEffect } from 'react'

// ── Per-page <title> and meta description ───────────────────────────
// This is a client-rendered SPA (see src/main.tsx), not a server-rendered
// TanStack Start app, so there's no per-route head() output at request
// time. Setting these on mount/update still helps: Googlebot executes JS
// before indexing, so it sees the real per-page title and description,
// and browser tabs/history show the right title too.
//
// What this does NOT fix: link-preview scrapers (WhatsApp, X, LinkedIn,
// Slack...) don't run JS, so they only ever see index.html's static
// Open Graph tags — the same image/title for every page. Real per-page
// social previews need prerendering or SSR, which is a bigger change.

function setMetaTag(name: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('name', name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

export function usePageMeta(title: string, description: string) {
  useEffect(() => {
    document.title = title
    setMetaTag('description', description)
  }, [title, description])
}
