# Mar — Portfolio

Personal portfolio website for **Mar**, a Content Creator & Digital Strategist whose name means "sea" in Spanish.

## Design

A bespoke, editorial portfolio with a lighthouse beam motif — warm amber light sweeping across a deep ocean background. The aesthetic blends sophisticated editorial typography with playful oceanic depth.

- **Color palette**: Deep navy (#06101d) · Teal (#146070) · Warm gold/amber (#c49a3c) · Cream (#f4ede2)
- **Typography**: Cormorant Garamond (serif display) + Jost (sans-serif body)
- **Key effect**: CSS-animated lighthouse beam sweeping from the left, canvas-based bioluminescent particles, custom gold cursor

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | TanStack Start (React 19) |
| Router | TanStack Router v1 (file-based) |
| Styling | Tailwind CSS 4 + custom CSS |
| Content | Content Collections (type-safe markdown) |
| Build | Vite 7 |
| Deployment | Netlify |

## Running Locally

```bash
npm install
npm run dev
```

The dev server runs on `http://localhost:3000`. Netlify CLI is used in production to emulate platform features.

## Project Structure

```
src/routes/index.tsx     # Full single-page portfolio (hero, manifesto, about, projects, contact)
src/styles.css           # Ocean theme + lighthouse beam animations + custom cursor
content/jobs/            # Work experience (markdown + frontmatter)
content/projects/        # Portfolio projects
content/education/       # Education history
```
