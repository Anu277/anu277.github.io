import { useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { ProjectCard } from '@/components/cards/ProjectCard'
import { ProfessionalWorkCard } from '@/components/cards/ProfessionalWorkCard'
import { cn } from '@/lib/cn'
import { PROJECTS } from '@/data/projects'
import { useDocumentMeta } from '@/hooks/useDocumentMeta'
import type { ProjectCategory } from '@/types/project'

const CATEGORIES: ProjectCategory[] = ['Computer Vision', 'Generative AI', 'Edge AI', 'AI Infrastructure', 'Robotics', 'Backend', 'Desktop', 'Research']

export function Projects() {
  useDocumentMeta('Projects, Anurag Bheemani', 'AI systems built end-to-end, from research prototype to production deployment.')
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | 'All'>('All')
  const availableCategories = useMemo(() => {
    const used = new Set(PROJECTS.flatMap((project) => project.categories))
    return CATEGORIES.filter((category) => used.has(category))
  }, [])
  const filtered = activeFilter === 'All' ? PROJECTS : PROJECTS.filter((project) => project.categories.includes(activeFilter))
  const professionalWork = filtered.filter((project) => project.origin === 'Company')
  const personalProjects = filtered.filter((project) => project.origin === 'Personal')

  return (
    <>
      <Section className="border-b border-border pb-16 md:pb-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_22rem] lg:items-end">
            <SectionHeader eyebrow="Work / Case studies" title="AI systems built for real constraints." subtitle="A record of shipped systems, prototypes, and engineering decisions across generative AI, edge deployment, computer vision, robotics, and infrastructure." />
            <div className="grid grid-cols-3 border border-border bg-surface">
              <ProjectStat value={String(PROJECTS.length)} label="Projects" />
              <ProjectStat value={String(PROJECTS.filter((project) => project.origin === 'Company').length)} label="At work" />
              <ProjectStat value={String(PROJECTS.filter((project) => project.origin === 'Personal').length)} label="Personal" />
            </div>
          </div>
        </Container>
      </Section>

      <div className="sticky top-16 z-30 border-b border-border bg-background/95 backdrop-blur-md">
        <Container><div className="flex gap-2 overflow-x-auto py-4" role="group" aria-label="Filter projects by category">
          <FilterButton label="All work" active={activeFilter === 'All'} onClick={() => setActiveFilter('All')} />
          {availableCategories.map((category) => <FilterButton key={category} label={category} active={activeFilter === category} onClick={() => setActiveFilter(category)} />)}
        </div></Container>
      </div>

      <Section>
        <Container className="space-y-20">
          {professionalWork.length > 0 && (
            <ProjectGroup index="01" title="Professional work" description="Systems developed in production teams for deployment in real operating environments." count={professionalWork.length}>
              <div className="grid gap-6 md:grid-cols-2">{professionalWork.map((project) => <ProfessionalWorkCard key={project.slug} project={project} />)}</div>
            </ProjectGroup>
          )}
          {personalProjects.length > 0 && (
            <ProjectGroup index="02" title="Independent products" description="Self-directed products and experiments where I owned the architecture, implementation, and delivery." count={personalProjects.length}>
              <div className="grid gap-6 md:grid-cols-2">{personalProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}</div>
            </ProjectGroup>
          )}
          {filtered.length === 0 && <p className="border border-border p-8 text-text-secondary">No projects match this filter.</p>}
        </Container>
      </Section>
    </>
  )
}

function ProjectStat({ value, label }: { value: string; label: string }) {
  return <div className="border-r border-border px-3 py-5 text-center last:border-r-0"><p className="text-2xl font-medium text-text-primary">{value}</p><p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-text-muted">{label}</p></div>
}

function ProjectGroup({ index, title, description, count, children }: { index: string; title: string; description: string; count: number; children: ReactNode }) {
  return <section><div className="mb-8 grid gap-4 border-b border-border pb-6 md:grid-cols-[4rem_1fr_auto] md:items-end"><span className="font-mono text-xs text-accent">{index}</span><div><h2 className="text-2xl font-medium tracking-tight text-text-primary">{title}</h2><p className="mt-2 max-w-2xl text-sm text-text-muted">{description}</p></div><span className="text-xs text-text-muted">{count} entries</span></div>{children}</section>
}

function FilterButton({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return <button type="button" onClick={onClick} aria-pressed={active} className={cn('shrink-0 border px-3.5 py-2 text-xs transition-colors', active ? 'border-accent bg-accent text-background' : 'border-border text-text-secondary hover:border-text-muted hover:text-text-primary')}>{label}</button>
}
