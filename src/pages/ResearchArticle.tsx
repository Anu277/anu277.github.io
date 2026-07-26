import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
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
    <Section>
      <Container>
        <div className="mx-auto flex max-w-[68ch] flex-col gap-10">
          <div className="flex flex-col gap-6">
            <Link
              to={ROUTES.research}
              className="text-text-muted hover:text-text-primary flex items-center gap-2 font-mono text-xs transition-colors"
            >
              <ArrowLeft className="size-3.5" strokeWidth={1.5} />
              Engineering notebook
            </Link>

            <div className="flex flex-col gap-3">
              <div className="text-text-muted flex items-center gap-3 font-mono text-xs">
                <span>{note.date}</span>
                <span aria-hidden="true">&middot;</span>
                <span>{note.readingTime} read</span>
              </div>
              <h1 className="text-text-primary text-3xl leading-tight font-semibold tracking-tight text-balance md:text-4xl">
                {note.title}
              </h1>
            </div>

            {note.relatedProjectSlug && (
              <Link
                to={ROUTES.project(note.relatedProjectSlug)}
                className="text-accent hover:text-accent-hover w-fit font-mono text-xs"
              >
                Related project: {note.relatedProjectSlug} &rarr;
              </Link>
            )}
          </div>

          <div className="flex flex-col gap-10">
            {sections.map((section) => (
              <div key={section.heading} className="flex flex-col gap-4">
                <h2 className="text-text-primary text-lg font-medium">
                  {section.heading}
                </h2>
                {section.paragraphs.map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-text-secondary text-base leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
