import { useEffect } from 'react'
import type { Lang } from './i18n'
import { langPath } from './i18n'

// ── Per-page <title>, meta description, canonical + hreflang ───────
// This is a client-rendered SPA (see src/main.tsx), not a server-rendered
// TanStack Start app, so there's no per-route head() output at request
// time. Setting these on mount/update still helps: Googlebot executes JS
// before indexing, so it sees the real per-page title, description and
// language-alternate links, and browser tabs/history show the right
// title too.
//
// What this does NOT fix: link-preview scrapers (WhatsApp, X, LinkedIn,
// Slack...) don't run JS, so they only ever see index.html's static
// Open Graph tags — the same image/title for every page. Real per-page
// social previews need prerendering or SSR, which is a bigger change.

const SITE = 'https://muntiox.com'

function setMetaTag(name: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('name', name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setLinkTag(rel: string, href: string, hreflang?: string) {
  const selector = hreflang
    ? `link[rel="${rel}"][hreflang="${hreflang}"]`
    : `link[rel="${rel}"]:not([hreflang])`
  let el = document.querySelector<HTMLLinkElement>(selector)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    if (hreflang) el.setAttribute('hreflang', hreflang)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

export function usePageMeta(
  title: string,
  description: string,
  seo?: { lang: Lang; path: string },
) {
  useEffect(() => {
    document.title = title
    setMetaTag('description', description)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, description])

  // seo.path is the unprefixed, English-style path for this page (e.g.
  // '/purpose' or '/'). From it we can derive every language's URL for
  // this same page, so search engines know the English and Spanish
  // versions are alternates of each other rather than separate pages.
  useEffect(() => {
    if (!seo) return
    const { lang, path } = seo
    setLinkTag('canonical', SITE + langPath(lang, path))
    setLinkTag('alternate', SITE + path, 'en')
    setLinkTag('alternate', SITE + langPath('es', path), 'es')
    setLinkTag('alternate', SITE + path, 'x-default')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seo?.lang, seo?.path])
}
