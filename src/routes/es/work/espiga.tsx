import { createFileRoute } from '@tanstack/react-router'
import { EspigaPage } from '../../work/espiga'

// Spanish-language sibling of '/work/espiga'. See src/lib/i18n.tsx.
export const Route = createFileRoute('/es/work/espiga')({
  component: EspigaPage,
})
