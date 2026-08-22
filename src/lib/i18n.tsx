import { createContext, useContext, useEffect } from 'react'
import type { ReactNode } from 'react'
import { useLocation, useNavigate } from '@tanstack/react-router'

// ── Site language — a small, growable list. Only 'en' and 'es' have
// real translations right now; more will be added one at a time.
// Any page that hasn't been translated yet just keeps showing English
// regardless of the selected language, until its turn comes.
export type Lang = 'en' | 'es'

export const SUPPORTED_LANGS: { code: Lang; label: string; flag: string }[] = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
]

const STORAGE_KEY = 'mxo_lang'

// ── URL-driven language (for real SEO) ──────────────────────────────
// Spanish pages live under a /es prefix (e.g. /es/purpose) so each
// language is its own crawlable, indexable URL — English keeps the
// unprefixed URLs it always had. `lang` is derived straight from the
// current path, not from a stored preference, so a given URL always
// renders the same language for anyone (a visitor or a search engine)
// who lands on it directly. localStorage is only used to remember a
// returning visitor's choice for the *next* time they land on '/'.
function langFromPathname(pathname: string): Lang {
  return pathname === '/es' || pathname.startsWith('/es/') ? 'es' : 'en'
}

// Strips a leading /es off a pathname, returning the English "base" path.
function stripEsPrefix(pathname: string): string {
  if (pathname === '/es') return '/'
  if (pathname.startsWith('/es/')) return pathname.slice(3)
  return pathname
}

// Builds the URL for `path` (an unprefixed, English-style path like
// '/purpose' or '/') in the given language. Used by every internal
// link so navigation stays in the same language across the site.
export function langPath(lang: Lang, path: string): string {
  if (lang !== 'es') return path
  return path === '/' ? '/es' : `/es${path}`
}

type LanguageContextValue = {
  lang: Lang
  setLang: (l: Lang) => void
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: 'en',
  setLang: () => {},
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const location = useLocation()
  const navigate = useNavigate()
  const lang = langFromPathname(location.pathname)

  // One-time convenience: a returning visitor who saved 'es' before and
  // lands on the bare '/' gets sent straight to '/es'. Only fires for
  // the root path, and only once on mount, so it can never loop or
  // fight with someone deliberately visiting the English homepage via
  // a link — this is purely for people who typed/bookmarked the bare
  // domain before.
  useEffect(() => {
    if (location.pathname !== '/') return
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved === 'es') navigate({ to: '/es' })
    } catch {
      /* storage unavailable — stay on English */
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      /* storage unavailable — the choice just won't persist */
    }
  }, [lang])

  // Keep <html lang="..."> in sync with the selected language — matters
  // for screen readers and for search engines reading the actual
  // rendered document, not just the static index.html default.
  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const setLang = (l: Lang) => {
    if (l === lang) return
    const base = stripEsPrefix(location.pathname)
    navigate({ to: langPath(l, base), search: (prev: any) => prev })
  }

  return <LanguageContext.Provider value={{ lang, setLang }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  return useContext(LanguageContext)
}
