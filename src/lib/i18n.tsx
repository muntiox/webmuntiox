import { createContext, useContext, useEffect, useState } from 'react'
import type { ReactNode } from 'react'

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

type LanguageContextValue = {
  lang: Lang
  setLang: (l: Lang) => void
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: 'en',
  setLang: () => {},
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en')

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved === 'en' || saved === 'es') setLangState(saved)
    } catch {
      /* storage unavailable — stay on English */
    }
  }, [])

  const setLang = (l: Lang) => {
    setLangState(l)
    try {
      localStorage.setItem(STORAGE_KEY, l)
    } catch {
      /* storage unavailable — the choice just won't persist */
    }
  }

  return <LanguageContext.Provider value={{ lang, setLang }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  return useContext(LanguageContext)
}
