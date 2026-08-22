import { SUPPORTED_LANGS, useLanguage } from '../lib/i18n'

// ── Language switcher — a small row of flags, always visible next to
// the hamburger icon (not tucked inside the menu) so it's findable
// without opening anything. Only English and Spanish do anything for
// now; more languages join this row as they get translated.
export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage()
  return (
    <div style={{ display: 'flex', gap: '0.5rem' }}>
      {SUPPORTED_LANGS.map((l) => (
        <button
          key={l.code}
          type="button"
          onClick={() => setLang(l.code)}
          aria-label={l.label}
          aria-pressed={lang === l.code}
          title={l.label}
          style={{
            fontSize: '1.15rem',
            lineHeight: 1,
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '4px',
            opacity: lang === l.code ? 1 : 0.42,
            filter: lang === l.code ? 'none' : 'grayscale(55%)',
            transform: lang === l.code ? 'scale(1.08)' : 'scale(1)',
            transition: 'opacity 0.2s ease, filter 0.2s ease, transform 0.2s ease',
          }}
        >
          {l.flag}
        </button>
      ))}
    </div>
  )
}
