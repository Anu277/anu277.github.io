import { Link, Navigate, useParams } from 'react-router-dom'
import type { ReactNode } from 'react'
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
    <div className="grid gap-6 border-t border-border pt-7 md:grid-cols-[12rem_1fr] md:gap-10">
      <h2 className="text-text-primary text-lg font-medium">{heading}</h2>
      <div className="flex flex-col gap-4">{paragraphs.map((p, i) => (
        <p key={i} className="text-text-secondary text-base leading-relaxed">{p}</p>
      ))}</div>
    </div>
  )
}

function ListBlock({ heading, items }: { heading: string; items: string[] }) {
  return (
    <div className="grid gap-6 border-t border-border pt-7 md:grid-cols-[12rem_1fr] md:gap-10">
      <h2 className="text-text-primary text-lg font-medium">{heading}</h2>
      <ul className="flex flex-col gap-4">
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
    <>
      <Section className="border-b border-border pb-16 md:pb-20">
        <Container>
          {/* Hero */}
          <Reveal type="slide" className="grid gap-10 lg:grid-cols-[1fr_20rem] lg:items-end">
            <div className="flex flex-col gap-6">
            <Link
              to={ROUTES.projects}
              className="text-text-muted hover:text-text-primary flex items-center gap-2 text-xs transition-colors"
            >
              <ArrowLeft className="size-3.5" strokeWidth={1.5} />
              All projects
            </Link>

            <div className="flex flex-col gap-3">
              <span className="text-accent text-xs tracking-wide uppercase">
                {project.categories.join(' / ')}
              </span>
              <h1 className="text-text-primary max-w-4xl text-4xl leading-[1.05] font-semibold tracking-[-0.04em] text-balance md:text-6xl">
                {project.title}
              </h1>
            </div>

            {project.links?.repo && (
              <div className="flex flex-wrap items-center gap-5">
                <a
                  href={project.links.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="text-accent hover:text-accent-hover flex w-fit items-center gap-1.5 text-xs"
                >
                  View repository
                  <ArrowUpRight className="size-3.5" strokeWidth={1.5} />
                </a>
                <GithubRepoBadge repoUrl={project.links.repo} />
              </div>
            )}

            </div>
            <aside className="border border-border bg-surface p-6">
              <p className="mb-5 text-[11px] uppercase tracking-[0.16em] text-accent">Project details</p>
              <dl className="space-y-5 text-sm"><ProjectFact label="Type" value={project.origin === 'Company' ? project.company ?? 'Professional' : 'Independent product'} /><ProjectFact label="Timeline" value={project.duration} /><ProjectFact label="Status" value={<StatusBadge status={project.status} />} />{project.location && <ProjectFact label="Location" value={project.location} />}</dl>
            </aside>
            <div className="flex flex-wrap gap-2 lg:col-span-2">
              {project.technologies.map((tech) => (
                <TechBadge key={tech} label={tech} />
              ))}
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section>
        <Container>
        <div className="mx-auto flex max-w-5xl flex-col gap-14">

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
              <Reveal className="grid gap-6 border-l-2 border-accent bg-surface p-7 md:grid-cols-[12rem_1fr] md:gap-10 md:p-9">
                <h2 className="text-accent text-[11px] font-medium tracking-[0.15em] uppercase">Executive summary</h2>
                <p className="text-text-primary text-lg leading-relaxed">
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
                <Reveal className="flex flex-col gap-6 border-y border-border bg-surface/40 px-6 py-8">
                  <p className="section-kicker">Measured results</p>
                  <h2 className="text-text-primary text-2xl font-medium">Benchmarks</h2>
                  <div className="grid grid-cols-1 gap-px bg-border sm:grid-cols-2">
                    {caseStudy.metrics.map((metric) => (
                      <div key={metric.label} className="flex flex-col gap-2 bg-background p-6">
                        <span className="text-accent text-3xl font-medium">
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
        </div></Container>
      </Section>
    </>
  )
}

function ProjectFact({ label, value }: { label: string; value: ReactNode }) {
  return <div><dt className="mb-1 text-[10px] uppercase tracking-[0.12em] text-text-muted">{label}</dt><dd className="text-text-primary">{value}</dd></div>
}
