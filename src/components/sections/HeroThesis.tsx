import { useRef, type ReactNode } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export function HeroThesis({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const reducedMotion = useReducedMotion()

  useGSAP(
    () => {
      if (!ref.current || reducedMotion) return

      const items = ref.current.querySelectorAll<HTMLElement>(
        '[data-hero-item]',
      )

      gsap.fromTo(
        items,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power3.out',
          stagger: 0.1,
        },
      )
    },
    { scope: ref, dependencies: [reducedMotion] },
  )

  return (
    <div ref={ref} className="flex flex-col">
      {children}
    </div>
  )
}
