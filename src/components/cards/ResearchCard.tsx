import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { ROUTES } from '@/constants/routes'
import type { ResearchNote } from '@/types/research'

export function ResearchCard({ note }: { note: ResearchNote }) {
  return (
    <Link
      to={ROUTES.researchArticle(note.slug)}
      className="group border-border bg-surface hover:bg-surface-elevated relative flex flex-col gap-4 border p-6 transition-colors"
    >
      <span
        className="bg-border group-hover:bg-accent absolute top-0 left-0 h-full w-0.75 transition-colors"
        aria-hidden="true"
      />

      <div className="flex items-start justify-between gap-4 pl-2">
        <span className="text-text-muted font-mono text-xs">{note.date}</span>
        <ArrowUpRight
          className="text-text-muted group-hover:text-accent size-4 shrink-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          strokeWidth={1.5}
        />
      </div>

      <h3 className="text-text-primary pl-2 text-lg font-medium">
        {note.title}
      </h3>

      <p className="text-text-secondary pl-2 text-sm leading-relaxed">
        {note.summary}
      </p>

      <span className="text-text-muted pl-2 font-mono text-xs">
        {note.readingTime} read
      </span>
    </Link>
  )
}
