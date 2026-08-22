import { createFileRoute } from '@tanstack/react-router'
import { ContactPage } from '../contact'

// Spanish-language sibling of '/contact'. See src/lib/i18n.tsx.
export const Route = createFileRoute('/es/contact')({
  component: ContactPage,
})
