import { createFileRoute } from '@tanstack/react-router'
import { BlogPage } from '../blog'

// Spanish-language sibling of '/blog'. See src/lib/i18n.tsx.
export const Route = createFileRoute('/es/blog')({
  component: BlogPage,
})
