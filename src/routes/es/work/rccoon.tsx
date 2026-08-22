import { createFileRoute } from '@tanstack/react-router'
import { RccoonProject } from '../../work/rccoon'

// Spanish-language sibling of '/work/rccoon'. See src/lib/i18n.tsx.
export const Route = createFileRoute('/es/work/rccoon')({
  component: RccoonProject,
})
