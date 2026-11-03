import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { ROUTES } from '@/constants/routes'
import type { Project } from '@/types/project'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      to={ROUTES.project(project.slug)}
      className="border-border bg-surface hover:bg-surface-elevated group relative flex min-h-92 flex-col gap-5 border p-7 transition-all hover:-translate-y-1 hover:border-text-muted md:p-8"
    >
      <span
        className="bg-border group-hover:bg-accent absolute top-0 left-0 h-full w-0.75 transition-colors"
        aria-hidden="true"
      />

      <div className="flex items-start justify-between gap-4 pl-2">
        <div>
          <span className="text-accent text-[11px] font-medium tracking-[0.14em] uppercase">
            {project.categories[0]}
          </span>
          <h3 className="text-text-primary group-hover:text-accent mt-3 text-xl font-medium leading-tight">
            {project.title}
          </h3>
        </div>
        <ArrowUpRight
          className="text-text-muted group-hover:text-accent size-4 shrink-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          strokeWidth={1.5}
        />
      </div>

      <p className="text-text-secondary pl-2 text-base leading-relaxed">
        {project.summary}
      </p>

      <div className="border-border mt-auto grid grid-cols-2 gap-x-4 gap-y-4 border-t pt-5 pl-2">
        <div className="flex flex-col gap-1">
          <span className="text-text-muted text-[10px] tracking-[0.12em] uppercase">
            Tools
          </span>
          <span className="text-text-primary text-sm leading-relaxed">
            {project.technologies.slice(0, 3).join(' · ')}
          </span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-text-muted text-[10px] tracking-[0.12em] uppercase">
            {project.origin === 'Company' ? 'Company' : 'Work type'}
          </span>
          <span className="text-text-primary text-sm leading-relaxed">
            {project.company ?? 'Personal project'}
          </span>
        </div>
      </div>
    </Link>
  )
}
