import { createFileRoute } from '@tanstack/react-router'
import { Portfolio } from '../index'

// Spanish-language sibling of '/' — same component, different URL, so
// this page is independently indexable in Spanish search results. See
// src/lib/i18n.tsx for how `lang` is derived from this /es prefix.
export const Route = createFileRoute('/es/')({
  component: Portfolio,
})
