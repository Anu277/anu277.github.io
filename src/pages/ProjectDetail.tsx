import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { Reveal } from '@/components/animations/Reveal'
import { TechBadge } from '@/components/ui/TechBadge'
import { StatusBadge } from '@/components/ui/StatusBadge'
import { GithubRepoBadge } from '@/components/ui/GithubRepoBadge'
import { ROUTES } from '@/constants/routes'
import { PROJECTS } from '@/data/projects'
import { CASE_STUDIES } from '@/data/caseStudies'
import { RESEARCH_NOTES } from '@/data/research'
import { useDocumentMeta } from '@/hooks/useDocumentMeta'

function ProseBlock({
  heading,
  paragraphs,
}: {
  heading: string
  paragraphs: string[]
}) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-text-primary text-lg font-medium">{heading}</h2>
      {paragraphs.map((p, i) => (
        <p key={i} className="text-text-secondary text-base leading-relaxed">
          {p}
        </p>
      ))}
    </div>
  )
}

function ListBlock({ heading, items }: { heading: string; items: string[] }) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-text-primary text-lg font-medium">{heading}</h2>
      <ul className="flex flex-col gap-3">
        {items.map((item, i) => (
          <li
            key={i}
            className="text-text-secondary flex gap-3 text-base leading-relaxed"
          >
            <span
              className="bg-accent mt-2.5 size-1.5 shrink-0"
              aria-hidden="true"
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>()
  const project = PROJECTS.find((p) => p.slug === slug)
  const caseStudy = slug ? CASE_STUDIES[slug] : undefined

  useDocumentMeta(
    project ? `${project.title}, Anurag Bheemani` : 'Project not found',
    caseStudy?.executiveSummary ?? project?.summary,
  )

  if (!project) {
    return <Navigate to={ROUTES.projects} replace />
  }

  const relatedNotes = (caseStudy?.relatedResearchSlugs ?? [])
    .map((noteSlug) => RESEARCH_NOTES.find((n) => n.slug === noteSlug))
    .filter((n): n is (typeof RESEARCH_NOTES)[number] => n !== undefined)

  const relatedProjects = PROJECTS.filter(
    (p) =>
      p.slug !== project.slug &&
      p.categories.some((c) => project.categories.includes(c)),
  ).slice(0, 2)

  return (
    <Section>
      <Container>
        <div className="mx-auto flex max-w-[72ch] flex-col gap-14">
          {/* Hero */}
          <Reveal type="slide" className="flex flex-col gap-6">
            <Link
              to={ROUTES.projects}
              className="text-text-muted hover:text-text-primary flex items-center gap-2 font-mono text-xs transition-colors"
            >
              <ArrowLeft className="size-3.5" strokeWidth={1.5} />
              All projects
            </Link>

            <div className="flex flex-col gap-3">
              <span className="text-accent font-mono text-xs tracking-wide uppercase">
                {project.categories.join(' / ')}
              </span>
              <h1 className="text-text-primary text-3xl leading-tight font-semibold tracking-tight text-balance md:text-4xl">
                {project.title}
              </h1>
            </div>

            <div className="text-text-secondary flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
              {project.company && (
                <span>
                  {project.company}
                  {project.location && (
                    <span className="text-text-muted">
                      {' '}
                      &middot; {project.location}
                    </span>
                  )}
                </span>
              )}
              <span className="font-mono">{project.duration}</span>
              <StatusBadge status={project.status} />
            </div>

            {project.links?.repo && (
              <div className="flex flex-wrap items-center gap-5">
                <a
                  href={project.links.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="text-accent hover:text-accent-hover flex w-fit items-center gap-1.5 font-mono text-xs"
                >
                  View repository
                  <ArrowUpRight className="size-3.5" strokeWidth={1.5} />
                </a>
                <GithubRepoBadge repoUrl={project.links.repo} />
              </div>
            )}

            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <TechBadge key={tech} label={tech} />
              ))}
            </div>
          </Reveal>

          {!caseStudy ? (
            <Reveal>
              <p className="text-text-secondary text-base leading-relaxed">
                {project.summary}
              </p>
              <p className="text-text-muted mt-4 text-sm">
                The full case study for this project is being written.
              </p>
            </Reveal>
          ) : (
            <>
              {/* Executive summary */}
              <Reveal className="flex flex-col gap-4">
                <h2 className="text-text-primary text-lg font-medium">
                  Executive summary
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed">
                  {caseStudy.executiveSummary}
                </p>
              </Reveal>

              {/* Problem */}
              <Reveal>
                <ProseBlock heading="Problem" paragraphs={caseStudy.problem} />
              </Reveal>

              {/* Requirements */}
              {caseStudy.requirements && (
                <Reveal>
                  <ListBlock
                    heading="Requirements"
                    items={caseStudy.requirements}
                  />
                </Reveal>
              )}

              {/* Constraints */}
              {caseStudy.constraints && (
                <Reveal>
                  <ListBlock
                    heading="Constraints"
                    items={caseStudy.constraints}
                  />
                </Reveal>
              )}

              {/* Technology decisions */}
              {caseStudy.technologyDecisions?.map((section) => (
                <Reveal key={section.heading}>
                  <ProseBlock
                    heading={section.heading}
                    paragraphs={section.paragraphs}
                  />
                </Reveal>
              ))}

              {/* Implementation */}
              {caseStudy.implementation?.map((section) => (
                <Reveal key={section.heading}>
                  <ProseBlock
                    heading={section.heading}
                    paragraphs={section.paragraphs}
                  />
                </Reveal>
              ))}

              {/* Challenges */}
              {caseStudy.challenges && (
                <Reveal>
                  <ListBlock
                    heading="Challenges"
                    items={caseStudy.challenges}
                  />
                </Reveal>
              )}

              {/* Metrics / Benchmarks */}
              {caseStudy.metrics && (
                <Reveal className="flex flex-col gap-6">
                  <h2 className="text-text-primary text-lg font-medium">
                    Benchmarks
                  </h2>
                  <div className="border-border grid grid-cols-1 gap-6 border-t pt-6 sm:grid-cols-2">
                    {caseStudy.metrics.map((metric) => (
                      <div key={metric.label} className="flex flex-col gap-1">
                        <span className="text-accent font-mono text-2xl font-medium">
                          {metric.value}
                        </span>
                        <span className="text-text-primary text-sm font-medium">
                          {metric.label}
                        </span>
                        <span className="text-text-muted text-sm">
                          {metric.context}
                        </span>
                      </div>
                    ))}
                  </div>
                </Reveal>
              )}

              {/* Lessons learned */}
              <Reveal>
                <ListBlock
                  heading="Lessons learned"
                  items={caseStudy.lessonsLearned}
                />
              </Reveal>
            </>
          )}

          {/* Related research */}
          {relatedNotes.length > 0 && (
            <Reveal className="flex flex-col gap-6">
              <h2 className="text-text-primary text-lg font-medium">
                Related research
              </h2>
              <ul className="flex flex-col gap-3">
                {relatedNotes.map((note) => (
                  <li key={note.slug}>
                    <Link
                      to={ROUTES.researchArticle(note.slug)}
                      className="text-accent hover:text-accent-hover flex items-center gap-1.5 text-base"
                    >
                      {note.title}
                      <ArrowUpRight className="size-3.5" strokeWidth={1.5} />
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
          )}

          {/* Related projects */}
          {relatedProjects.length > 0 && (
            <Reveal className="border-border flex flex-col gap-6 border-t pt-10">
              <h2 className="text-text-primary text-lg font-medium">
                Related projects
              </h2>
              <ul className="flex flex-col gap-3">
                {relatedProjects.map((p) => (
                  <li key={p.slug}>
                    <Link
                      to={ROUTES.project(p.slug)}
                      className="text-accent hover:text-accent-hover flex items-center gap-1.5 text-base"
                    >
                      {p.title}
                      <ArrowUpRight className="size-3.5" strokeWidth={1.5} />
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
          )}
        </div>
      </Container>
    </Section>
  )
}
