import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { ROUTES } from '@/constants/routes'
import type { Project } from '@/types/project'

export function ProfessionalWorkCard({ project }: { project: Project }) {
  return (
    <Link
      to={ROUTES.project(project.slug)}
      className="group border-border bg-surface hover:bg-surface-elevated relative flex min-h-72 flex-col gap-5 border p-7 transition-all hover:-translate-y-1 hover:border-text-muted"
    >
      <span
        className="bg-border group-hover:bg-accent absolute top-0 left-0 h-full w-0.75 transition-colors"
        aria-hidden="true"
      />

      <div className="flex items-start justify-between gap-4 pl-2">
        <div>
          <span className="text-accent text-[11px] font-medium tracking-[0.14em] uppercase">{project.categories[0]}</span>
          <h3 className="text-text-primary group-hover:text-accent mt-3 text-xl font-medium leading-tight">{project.title}</h3>
        </div>
        <ArrowUpRight
          className="text-text-muted group-hover:text-accent size-4 shrink-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          strokeWidth={1.5}
        />
      </div>

      <p className="text-text-secondary pl-2 text-base leading-relaxed">
        {project.summary}
      </p>

      <div className="border-border mt-auto flex items-end justify-between gap-4 border-t pt-5 pl-2">
        <div className="flex flex-col gap-1">
        <span className="text-text-secondary text-sm">
          {project.company}
          {project.location && (
            <span className="text-text-muted"> &middot; {project.location}</span>
          )}
        </span>
        </div>
        <span className="text-text-muted shrink-0 text-xs">{project.duration}</span>
      </div>
    </Link>
  )
}
