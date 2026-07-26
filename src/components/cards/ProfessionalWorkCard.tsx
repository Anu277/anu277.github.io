import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { ROUTES } from '@/constants/routes'
import type { Project } from '@/types/project'

export function ProfessionalWorkCard({ project }: { project: Project }) {
  return (
    <Link
      to={ROUTES.project(project.slug)}
      className="group border-border bg-surface hover:bg-surface-elevated relative flex flex-col gap-4 border p-6 transition-colors"
    >
      <span
        className="bg-border group-hover:bg-accent absolute top-0 left-0 h-full w-0.75 transition-colors"
        aria-hidden="true"
      />

      <div className="flex items-start justify-between gap-4 pl-2">
        <h3 className="text-text-primary text-lg font-medium">
          {project.title}
        </h3>
        <ArrowUpRight
          className="text-text-muted group-hover:text-accent size-4 shrink-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          strokeWidth={1.5}
        />
      </div>

      <p className="text-text-secondary pl-2 text-sm leading-relaxed">
        {project.summary}
      </p>

      <div className="border-border mt-auto flex flex-col gap-1 border-t pt-4 pl-2">
        <span className="text-text-secondary text-sm">
          {project.company}
          {project.location && (
            <span className="text-text-muted"> &middot; {project.location}</span>
          )}
        </span>
        <span className="text-text-muted font-mono text-xs">
          {project.duration}
        </span>
      </div>
    </Link>
  )
}
