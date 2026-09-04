import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { ROUTES } from '@/constants/routes'
import type { Project } from '@/types/project'

export function ProjectCard({ project, index }: { project: Project; index?: number }) {
  return (
    <Link
      to={ROUTES.project(project.slug)}
      className="group relative flex min-h-92 flex-col gap-6 bg-background p-6 transition-colors hover:bg-surface md:p-8"
    >
      <span className="pointer-events-none absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" aria-hidden="true" />
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="font-mono text-[10px] tracking-[.16em] text-text-muted uppercase">{String(index ?? 0).padStart(2, '0')} / {project.categories[0]}</span>
          <h3 className="mt-3 text-xl font-medium leading-tight group-hover:text-accent">{project.title}</h3>
        </div>
        <ArrowUpRight className="text-text-muted group-hover:text-accent size-4 shrink-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.5} />
      </div>
      <p className="text-text-secondary max-w-[53ch] text-sm leading-relaxed">{project.summary}</p>
      <div className="mt-auto grid grid-cols-2 gap-x-4 gap-y-5 border-t border-border pt-5 font-mono text-[10px] tracking-[.12em] uppercase">
        <span className="text-text-muted">Stack<strong className="mt-1 block font-normal leading-relaxed text-text-primary">{project.technologies.slice(0, 3).join(' / ')}</strong></span>
        <span className="text-text-muted">{project.origin === 'Company' ? 'Work' : 'Type'}<strong className="mt-1 block font-normal leading-relaxed text-text-primary">{project.company ?? 'Personal project'}</strong></span>
      </div>
    </Link>
  )
}
