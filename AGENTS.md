# AGENTS.md — Mar Portfolio

## Project Overview

Personal portfolio for **Mar**, a Content Creator & Digital Strategist. Single-page scroll experience built with TanStack Start on Netlify. The core design motif is a lighthouse beam (the name "Mar" means sea in Spanish) — a sweeping amber/gold light over a deep ocean background.

## Architecture

### Routing (TanStack file-based)
- `/` (`src/routes/index.tsx`) — The entire portfolio lives here: hero, manifesto, about, projects, contact. This is the primary page.
- `/contact` — Standalone contact form (themed to match)
- `/projects` — Redirects to home portfolio section
- `/resume` — Reads from `content/jobs` and `content/education` via Content Collections
- `/blog/$slug` — Blog post detail page

### Root Layout (`src/routes/__root.tsx`)
- Injects Google Fonts (Cormorant Garamond + Jost) via `head()` links
- Renders `CustomCursor` component (fixed gold dot + lagging ring, hidden on mobile)
- Wraps all pages in `<html lang="es">`

### Key Design Files
- `src/styles.css` — Entire ocean theme. Contains CSS custom properties (color tokens), lighthouse beam keyframe animations, cursor styles, nav, hero, manifesto, about, projects, contact, footer. Tailwind is used for layout utilities only.

## Content Collections (`content-collections.ts`)
- `jobs` — `jobTitle, company, location, startDate, endDate?, summary, tags[]`
- `education` — `school, summary, startDate, endDate?, tags[]`
- `blog` — `title, date, summary, tags[], author`
- `projects` — `title, description, tags[], github?, liveUrl?, image?`

Content lives in `content/jobs/`, `content/education/`, `content/blog/`, `content/projects/`.

## Design System

### Color Tokens (CSS custom properties in `:root`)
```
--deep        #06101d   (hero/page background)
--navy        #0b1c37   (card backgrounds)
--teal        #146070   (accent midtone)
--teal-light  #1e8fa3   (category labels)
--gold        #c49a3c   (primary accent — beam color)
--gold-bright #d4aa52
--gold-pale   #e8c870   (italic highlights)
--cream       #f4ede2   (primary text)
--cream-dim   rgba(244,237,226,0.65)  (secondary text)
```

### Typography
- **Display/headings**: `font-family: 'Cormorant Garamond', serif` — applied via `.font-display` or inline `fontFamily` styles
- **Body/UI**: `font-family: 'Jost', sans-serif` — base body font

### Lighthouse Beam
CSS-only. Two divs (`.beam-primary` / `.beam-secondary`) with `conic-gradient` backgrounds animated via `@keyframes beamSweep`. Both `position: fixed`, use `transform-origin: 0% 50%` to rotate from the left-center of the viewport, simulating a lighthouse off the left shore.

### Particles
Canvas-based `ParticleField` component in `index.tsx`. 90 slow-drifting gold dots drawn with `requestAnimationFrame`. Rendered with `mix-blend-mode: screen` for bioluminescent effect.

### Custom Cursor
`CustomCursor` in `__root.tsx`. Gold dot tracks mouse position via `transform` (fast). Larger ring lerps toward mouse position at 12% per frame (smooth lag). Hidden on mobile via CSS `display: none`.

## Key Conventions
- **Language**: Site content in Spanish, code/comments in English
- **Single-page portfolio**: All main sections are anchor-linked within `/` — do NOT split the portfolio into separate routes
- **Scroll reveals**: All sections use `IntersectionObserver` for fade-up entrance animations
- **No build commands**: Never run `npm run build` — Netlify handles it
- **Netlify Forms**: Contact form uses `data-netlify="true"`. The `public/contact.html` static file is required for Netlify to detect the form at build time.

## Netlify Config
- Publish dir: `dist/client`
- Build command: `vite build`
- Forms: detected via `public/contact.html`
