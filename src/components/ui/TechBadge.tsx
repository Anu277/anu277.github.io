export function TechBadge({ label }: { label: string }) {
  return (
    <span className="text-text-secondary border-border border px-2 py-1 font-mono text-xs">
      {label}
    </span>
  )
}
