import { createFileRoute } from '@tanstack/react-router'
import { PrivacyPage } from '../privacy'

// Spanish-language sibling of '/privacy'. See src/lib/i18n.tsx.
export const Route = createFileRoute('/es/privacy')({
  component: PrivacyPage,
})
