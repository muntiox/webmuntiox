import { createFileRoute } from '@tanstack/react-router'
import { PurposePage } from '../purpose'

// Spanish-language sibling of '/purpose'. See src/lib/i18n.tsx.
export const Route = createFileRoute('/es/purpose')({
  component: PurposePage,
})
