interface SectionHeaderProps {
  eyebrow?: string
  title: string
  subtitle?: string
}

export function SectionHeader({ eyebrow, title, subtitle }: SectionHeaderProps) {
  return (
    <div className="flex flex-col gap-3">
      {eyebrow && (
        <span className="text-accent text-sm font-medium uppercase">
          {eyebrow}
        </span>
      )}
      <h1 className="text-text-primary text-3xl font-medium tracking-tight md:text-5xl">
        {title}
      </h1>
      {subtitle && (
        <p className="text-text-secondary max-w-2xl text-base md:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  )
}
