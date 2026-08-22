import { createFileRoute, Link } from '@tanstack/react-router'
import { allJobs, allEducations } from 'content-collections'
import { usePageMeta } from '../lib/usePageMeta'

export const Route = createFileRoute('/resume')({
  component: Resume,
})

function Resume() {
  usePageMeta(
    'Trayectoria — Itxaso Muntión',
    'Experiencia profesional y formación de Itxaso Muntión, creadora de contenido y estratega digital.'
  )
  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'var(--deep)',
        padding: '8rem 2rem 6rem',
      }}
    >
      <div style={{ maxWidth: '760px', margin: '0 auto' }}>
        <Link
          to="/"
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: '0.65rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.6)',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            marginBottom: '4rem',
          }}
        >
          ← Volver
        </Link>

        <p
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: '0.65rem',
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
            color: '#c93810',
            marginBottom: '1rem',
          }}
        >
          Experiencia
        </p>
        <h1
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 300,
            color: '#ffffff',
            marginBottom: '5rem',
            lineHeight: 1.1,
          }}
        >
          Trayectoria
        </h1>

        <section style={{ marginBottom: '5rem' }}>
          <h2
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: '1.8rem',
              fontWeight: 400,
              color: '#ffffff',
              borderBottom: '1px solid rgba(201, 56, 16, 0.2)',
              paddingBottom: '1rem',
              marginBottom: '3rem',
            }}
          >
            Experiencia profesional
          </h2>
          {allJobs.map((job) => (
            <div
              key={job.jobTitle}
              style={{
                marginBottom: '3rem',
                paddingLeft: '1.5rem',
                borderLeft: '2px solid rgba(201, 56, 16, 0.25)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                  marginBottom: '0.5rem',
                }}
              >
                <div>
                  <h3
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: '1.4rem',
                      fontWeight: 500,
                      color: '#ffffff',
                      margin: 0,
                    }}
                  >
                    {job.jobTitle}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: '0.85rem',
                      color: 'rgba(255,255,255,0.6)',
                      margin: '0.25rem 0 0',
                    }}
                  >
                    {job.company} · {job.location}
                  </p>
                </div>
                <span
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: '0.65rem',
                    letterSpacing: '0.15em',
                    color: '#c93810',
                    border: '1px solid rgba(201, 56, 16, 0.3)',
                    padding: '0.25rem 0.75rem',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {job.startDate} — {job.endDate ?? 'Presente'}
                </span>
              </div>
              <p
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: '0.9rem',
                  fontWeight: 300,
                  color: 'rgba(255,255,255,0.7)',
                  lineHeight: 1.8,
                  margin: '1rem 0',
                }}
              >
                {job.summary}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {job.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: '0.6rem',
                      fontWeight: 500,
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: 'rgba(201, 56, 16, 0.7)',
                      border: '1px solid rgba(201, 56, 16, 0.2)',
                      padding: '0.25rem 0.6rem',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section>
          <h2
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: '1.8rem',
              fontWeight: 400,
              color: '#ffffff',
              borderBottom: '1px solid rgba(201, 56, 16, 0.2)',
              paddingBottom: '1rem',
              marginBottom: '3rem',
            }}
          >
            Formación
          </h2>
          {allEducations.map((edu) => (
            <div
              key={edu.school}
              style={{
                marginBottom: '2.5rem',
                paddingLeft: '1.5rem',
                borderLeft: '2px solid rgba(201, 56, 16, 0.25)',
              }}
            >
              <h3
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: '1.4rem',
                  fontWeight: 500,
                  color: '#ffffff',
                  margin: 0,
                }}
              >
                {edu.school}
              </h3>
              <p
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: '0.9rem',
                  fontWeight: 300,
                  color: 'rgba(255,255,255,0.7)',
                  lineHeight: 1.8,
                  margin: '1rem 0 0',
                }}
              >
                {edu.summary}
              </p>
            </div>
          ))}
        </section>
      </div>
    </div>
  )
}
