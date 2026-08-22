import { createFileRoute } from '@tanstack/react-router'
import { Commo2Page } from '../../work/commo2'

// Spanish-language sibling of '/work/commo2'. See src/lib/i18n.tsx.
export const Route = createFileRoute('/es/work/commo2')({
  component: Commo2Page,
})
