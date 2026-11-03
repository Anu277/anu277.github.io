interface SectionHeaderProps {
  eyebrow?: string
  title: string
  subtitle?: string
}

export function SectionHeader({ eyebrow, title, subtitle }: SectionHeaderProps) {
  return (
    <div className="flex max-w-4xl flex-col gap-4">
      {eyebrow && (
        <span className="text-accent text-[11px] font-medium tracking-[0.18em] uppercase">
          {eyebrow}
        </span>
      )}
      <h1 className="text-text-primary text-4xl font-medium leading-[1.05] tracking-[-0.04em] text-balance md:text-6xl">
        {title}
      </h1>
      {subtitle && (
        <p className="text-text-secondary max-w-2xl text-base leading-relaxed md:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  )
}
