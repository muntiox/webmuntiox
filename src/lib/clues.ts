// ── Shared clue registry ────────────────────────────────────────────
// Every hidden clue on the site (a dragged letter, a moved photo, a
// held word, a scratch panel, whatever comes next) calls
// markClueFound(id) once it's solved. Nothing navigates anywhere —
// progress just lives in localStorage so it survives between visits,
// and a small global counter (rendered once in __root.tsx) picks up
// new finds via a custom window event, so no page needs to know
// anything about any other page.
export const CLUE_IDS = [
  'align-letter',
  'purpose-photo',
  'skills-all',
  'blog-scratch',
  'projects-hold',
  'contact-dblclick',
] as const

export type ClueId = (typeof CLUE_IDS)[number]

const STORAGE_PREFIX = 'mxo_clue_'
export const CLUE_EVENT = 'mxo-clue-found'
export const CLUE_TOTAL = CLUE_IDS.length

export function isClueFound(id: ClueId): boolean {
  try {
    return localStorage.getItem(STORAGE_PREFIX + id) === '1'
  } catch {
    return false
  }
}

export function getFoundCount(): number {
  try {
    return CLUE_IDS.filter((id) => localStorage.getItem(STORAGE_PREFIX + id) === '1').length
  } catch {
    return 0
  }
}

export function markClueFound(id: ClueId) {
  let alreadyFound = false
  try {
    alreadyFound = localStorage.getItem(STORAGE_PREFIX + id) === '1'
    if (!alreadyFound) localStorage.setItem(STORAGE_PREFIX + id, '1')
  } catch {
    /* storage unavailable — the clue still resolves visually, it just won't be remembered */
  }
  if (alreadyFound) return
  try {
    window.dispatchEvent(new CustomEvent(CLUE_EVENT, { detail: { id, count: getFoundCount(), total: CLUE_TOTAL } }))
  } catch {
    /* no-op */
  }
}
