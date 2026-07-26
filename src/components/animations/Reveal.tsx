import { useRef, type ReactNode } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'
import { useReducedMotion } from '@/hooks/useReducedMotion'

type RevealType = 'fade' | 'slide' | 'scale'

interface RevealProps {
  children: ReactNode
  type?: RevealType
  delay?: number
  className?: string
}

const FROM_VARS: Record<RevealType, gsap.TweenVars> = {
  fade: { opacity: 0 },
  slide: { opacity: 0, y: 24 },
  scale: { opacity: 0, scale: 0.96 },
}

export function Reveal({
  children,
  type = 'slide',
  delay = 0,
  className,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const reducedMotion = useReducedMotion()

  useGSAP(
    () => {
      if (!ref.current || reducedMotion) return

      gsap.fromTo(
        ref.current,
        FROM_VARS[type],
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          delay,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 85%',
            once: true,
          },
        },
      )
    },
    { scope: ref, dependencies: [type, delay, reducedMotion] },
  )

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
