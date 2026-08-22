import { createFileRoute } from '@tanstack/react-router'
import { ProjectsPage } from '../projects'

// Spanish-language sibling of '/projects'. See src/lib/i18n.tsx.
export const Route = createFileRoute('/es/projects')({
  component: ProjectsPage,
})
