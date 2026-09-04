/**
 * Row height is h-7 (1.75rem). The `roll` keyframe in index.css translates
 * by WORKED_IN.length * 1.75rem — keep both in sync if entries are added.
 */
const WORKED_IN = [
  { company: 'Eizen AI', detail: 'In-office, Hyderabad' },
  { company: 'Eizen AI', detail: 'On-site, Vantara, Gujarat' },
  { company: 'GloomDev', detail: 'Remote' },
]

export function WorkedInMarquee() {
  return (
    <div className="border-border bg-surface border-y py-5">
      <div className="mx-auto flex w-full max-w-7xl items-center gap-8 px-6 sm:px-10 lg:px-16 xl:px-24">
        <span className="text-text-muted font-mono text-xs tracking-wide uppercase">
          Worked in
        </span>
        <div className="border-border h-4 border-l" aria-hidden="true" />
        <div className="h-7 overflow-hidden">
          <div className="flex animate-[roll_9s_linear_infinite] flex-col">
            {[...WORKED_IN, WORKED_IN[0]].map((item, i) => (
              <span
                key={i}
                className="text-text-secondary flex h-7 shrink-0 items-center gap-3 font-mono text-xs tracking-wide whitespace-nowrap uppercase"
              >
                <span className="text-accent">{item.company}</span>
                {item.detail}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
