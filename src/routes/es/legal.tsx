import { createFileRoute } from '@tanstack/react-router'
import { LegalPage } from '../legal'

// Spanish-language sibling of '/legal'. See src/lib/i18n.tsx.
export const Route = createFileRoute('/es/legal')({
  component: LegalPage,
})
