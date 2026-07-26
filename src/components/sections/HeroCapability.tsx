import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { cn } from '@/lib/cn'

interface CapabilityItem {
  label: string
  detail: string
}

const CAPABILITIES: CapabilityItem[] = [
  {
    label: 'Production AI',
    detail:
      'Trained, evaluated, and deployed models as part of real product pipelines, not isolated notebooks.',
  },
  {
    label: 'Generative AI',
    detail:
      'Built RAG pipelines and LLM-backed tooling, from offline retrieval to production chat systems.',
  },
  {
    label: 'Computer Vision',
    detail:
      'Shipped detection and video-understanding pipelines for real-world monitoring conditions.',
  },
  {
    label: 'Edge AI',
    detail:
      'Optimized inference for constrained hardware: Jetson, Raspberry Pi, and offline desktop deployment.',
  },
  {
    label: 'AI Infrastructure',
    detail:
      'Built annotation tooling, labeling automation, and backend systems that keep AI pipelines running.',
  },
]

export function HeroCapability() {
  const ref = useRef<HTMLDivElement>(null)
  const reducedMotion = useReducedMotion()

  useGSAP(
    () => {
      if (!ref.current || reducedMotion) return

      const rows = ref.current.querySelectorAll<HTMLElement>(
        '[data-capability-row]',
      )

      gsap.fromTo(
        rows,
        { opacity: 0, y: 14 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: 'power2.out',
          stagger: 0.12,
          delay: 0.5,
        },
      )
    },
    { scope: ref, dependencies: [reducedMotion] },
  )

  return (
    <div ref={ref} className="flex flex-col">
      <span className="text-text-muted mb-8 font-mono text-[11px] tracking-wide uppercase">
        What I build
      </span>

      <div className="border-border grid grid-cols-1 border-t sm:grid-cols-2 lg:grid-cols-5">
        {CAPABILITIES.map((item, i) => (
          <div
            key={item.label}
            data-capability-row
            className={cn(
              'border-border border-b p-6 lg:p-7',
              i % 2 === 1 && 'sm:border-l',
              i > 0 && 'lg:border-l',
            )}
          >
            <h3 className="text-text-primary mb-2 font-medium">
              {item.label}
            </h3>
            <p className="text-text-secondary text-sm leading-relaxed">
              {item.detail}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
