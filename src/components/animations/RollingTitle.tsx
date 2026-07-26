import { useRef, type ReactNode } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { cn } from '@/lib/cn'

interface RollingTitleProps {
  lines: ReactNode[]
  className?: string
  delay?: number
}

export function RollingTitle({ lines, className, delay = 0 }: RollingTitleProps) {
  const ref = useRef<HTMLHeadingElement>(null)
  const reducedMotion = useReducedMotion()

  useGSAP(
    () => {
      if (!ref.current || reducedMotion) return

      const rows = ref.current.querySelectorAll<HTMLElement>(
        '[data-roll-inner]',
      )

      gsap.fromTo(
        rows,
        { yPercent: 110, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.9,
          ease: 'power4.out',
          stagger: 0.1,
          delay,
        },
      )
    },
    { scope: ref, dependencies: [reducedMotion] },
  )

  return (
    <h1 ref={ref} className={cn('flex flex-col', className)}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden py-1">
          <span data-roll-inner className="block">
            {line}
          </span>
        </span>
      ))}
    </h1>
  )
}
