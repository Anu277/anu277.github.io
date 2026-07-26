import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { TechBadge } from '@/components/ui/TechBadge'
import { StatusBadge } from '@/components/ui/StatusBadge'
import { ROUTES } from '@/constants/routes'
import { cn } from '@/lib/cn'
import type { Project } from '@/types/project'

export function ProjectCard({ project }: { project: Project }) {
  const featured = project.featured

  return (
    <Link
      to={ROUTES.project(project.slug)}
      className="group border-border bg-surface hover:bg-surface-elevated relative flex flex-col gap-5 border p-6 transition-colors"
    >
      <span
        className={cn(
          'bg-border group-hover:bg-accent absolute top-0 left-0 h-full w-0.75 transition-colors',
          featured && 'bg-accent w-1.5',
        )}
        aria-hidden="true"
      />

      <div className="flex items-start justify-between gap-4 pl-2">
        <div>
          <span className="text-text-muted font-mono text-[11px] tracking-wide uppercase">
            {project.categories[0]}
          </span>
          <h3 className="text-text-primary mt-1 text-lg font-medium">
            {project.title}
          </h3>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          {featured && (
            <span className="border-accent text-accent px-1.5 py-0.5 font-mono text-[10px] tracking-wide uppercase">
              New
            </span>
          )}
          <ArrowUpRight
            className={cn(
              'text-text-muted group-hover:text-accent size-4 shrink-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5',
              featured && 'text-accent',
            )}
            strokeWidth={1.5}
          />
        </div>
      </div>

      <p className="text-text-secondary pl-2 text-sm leading-relaxed">
        {project.summary}
      </p>

      <div className="flex flex-wrap gap-2 pl-2">
        {project.technologies.slice(0, 6).map((tech) => (
          <TechBadge key={tech} label={tech} />
        ))}
      </div>

      <div className="border-border mt-auto flex items-center justify-between border-t pt-4 pl-2">
        <span className="text-text-muted font-mono text-xs">
          {project.duration}
        </span>
        <StatusBadge status={project.status} />
      </div>
    </Link>
  )
}
