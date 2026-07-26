import { cn } from '@/lib/cn'
import type { ProjectStatus } from '@/types/project'

const STATUS_STYLES: Record<ProjectStatus, string> = {
  Shipped: 'text-success border-success/40',
  'In Progress': 'text-warning border-warning/40',
  Prototype: 'text-text-secondary border-border',
  Archived: 'text-text-muted border-border',
}

export function StatusBadge({ status }: { status: ProjectStatus }) {
  return (
    <span
      className={cn(
        'border px-2 py-0.5 font-mono text-xs',
        STATUS_STYLES[status],
      )}
    >
      {status}
    </span>
  )
}
