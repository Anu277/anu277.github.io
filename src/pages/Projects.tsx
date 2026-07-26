import { useMemo, useState } from 'react'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { ProjectCard } from '@/components/cards/ProjectCard'
import { ProfessionalWorkCard } from '@/components/cards/ProfessionalWorkCard'
import { cn } from '@/lib/cn'
import { PROJECTS } from '@/data/projects'
import { useDocumentMeta } from '@/hooks/useDocumentMeta'
import type { ProjectCategory } from '@/types/project'

const CATEGORIES: ProjectCategory[] = [
  'Computer Vision',
  'Generative AI',
  'Edge AI',
  'AI Infrastructure',
  'Robotics',
  'Backend',
  'Desktop',
  'Research',
]

export function Projects() {
  useDocumentMeta(
    'Projects, Anurag Bheemani',
    'Systems built end-to-end across computer vision, generative AI, edge AI, and AI infrastructure, from research prototype to production deployment.',
  )

  const [activeFilter, setActiveFilter] = useState<ProjectCategory | 'All'>(
    'All',
  )

  const availableCategories = useMemo(() => {
    const used = new Set(PROJECTS.flatMap((p) => p.categories))
    return CATEGORIES.filter((c) => used.has(c))
  }, [])

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return PROJECTS
    return PROJECTS.filter((p) => p.categories.includes(activeFilter))
  }, [activeFilter])

  const professionalWork = filteredProjects.filter(
    (p) => p.origin === 'Company',
  )
  const personalProjects = filteredProjects.filter(
    (p) => p.origin === 'Personal',
  )

  return (
    <Section>
      <Container>
        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-10">
            <SectionHeader
              eyebrow="Projects"
              title="Selected work"
              subtitle="Systems built end-to-end, from research prototype to production deployment."
            />

            <div
              className="flex flex-wrap gap-2"
              role="group"
              aria-label="Filter projects by category"
            >
              <FilterButton
                label="All"
                active={activeFilter === 'All'}
                onClick={() => setActiveFilter('All')}
              />
              {availableCategories.map((category) => (
                <FilterButton
                  key={category}
                  label={category}
                  active={activeFilter === category}
                  onClick={() => setActiveFilter(category)}
                />
              ))}
            </div>
          </div>

          {professionalWork.length > 0 && (
            <div className="flex flex-col gap-6">
              <div className="border-border border-b pb-4">
                <h2 className="text-text-primary text-lg font-medium">
                  Professional Work
                </h2>
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {professionalWork.map((project) => (
                  <ProfessionalWorkCard key={project.slug} project={project} />
                ))}
              </div>
            </div>
          )}

          {personalProjects.length > 0 && (
            <div className="flex flex-col gap-6">
              <div className="border-border border-b pb-4">
                <h2 className="text-text-primary text-lg font-medium">
                  Personal Projects
                </h2>
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {personalProjects.map((project) => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
              </div>
            </div>
          )}
        </div>
      </Container>
    </Section>
  )
}

function FilterButton({
  label,
  active,
  onClick,
}: {
  label: string
  active: boolean
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        'border px-3 py-1.5 font-mono text-xs transition-colors',
        active
          ? 'border-accent text-accent'
          : 'border-border text-text-secondary hover:text-text-primary hover:border-text-muted',
      )}
    >
      {label}
    </button>
  )
}
