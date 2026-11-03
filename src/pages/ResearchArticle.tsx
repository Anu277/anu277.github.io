import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { RESEARCH_NOTE_BODIES, RESEARCH_NOTES } from '@/data/research'
import { ROUTES } from '@/constants/routes'
import { useDocumentMeta } from '@/hooks/useDocumentMeta'

export function ResearchArticle() {
  const { slug } = useParams<{ slug: string }>()
  const note = RESEARCH_NOTES.find((n) => n.slug === slug)
  const sections = slug ? RESEARCH_NOTE_BODIES[slug] : undefined

  useDocumentMeta(
    note ? `${note.title}, Anurag Bheemani` : 'Article not found',
    note?.summary,
  )

  if (!note || !sections) {
    return <Navigate to={ROUTES.research} replace />
  }

  return (
    <>
      <Section className="border-b border-border pb-16 md:pb-20">
        <Container>
          <div className="mx-auto max-w-5xl">
            <Link
              to={ROUTES.research}
              className="text-text-muted hover:text-text-primary flex items-center gap-2 text-xs transition-colors"
            >
              <ArrowLeft className="size-3.5" strokeWidth={1.5} />
              Engineering notebook
            </Link>

            <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_13rem] lg:items-end">
              <div><div className="text-text-muted mb-5 flex items-center gap-3 text-xs">
                <span>{note.date}</span>
                <span aria-hidden="true">&middot;</span>
                <span>{note.readingTime} read</span>
              </div>
              <h1 className="text-text-primary text-4xl leading-[1.08] font-semibold tracking-[-0.04em] text-balance md:text-6xl">
                {note.title}
              </h1></div>

            {note.relatedProjectSlug && (
              <Link
                to={ROUTES.project(note.relatedProjectSlug)}
                className="group flex items-center justify-between gap-4 border border-border bg-surface p-4 text-xs text-accent hover:border-accent"
              >
                <span><span className="mb-1 block text-[9px] uppercase tracking-[0.12em] text-text-muted">Related project</span>{note.relatedProjectSlug}</span><ArrowUpRight className="size-4" />
              </Link>
            )}
          </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <article className="mx-auto max-w-5xl">
            <p className="mb-12 border-l-2 border-accent pl-6 text-lg leading-relaxed text-text-secondary">{note.summary}</p>
            <div className="flex flex-col gap-12">
            {sections.map((section, sectionIndex) => (
              <section key={section.heading} className="grid gap-5 border-t border-border pt-7 md:grid-cols-[3rem_12rem_1fr] md:gap-8">
                <span className="font-mono text-xs text-accent">{String(sectionIndex + 1).padStart(2, '0')}</span>
                <h2 className="text-text-primary text-lg font-medium">{section.heading}</h2>
                <div className="flex flex-col gap-5">{section.paragraphs.map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-text-secondary text-base leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}</div>
              </section>
            ))}
            </div>
          </article>
        </Container>
      </Section>
    </>
  )
}
