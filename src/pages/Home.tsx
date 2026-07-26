import { lazy, Suspense } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { buttonVariants } from '@/components/ui/buttonVariants'
import { ProjectCard } from '@/components/cards/ProjectCard'
import { ProfessionalWorkCard } from '@/components/cards/ProfessionalWorkCard'
import { Reveal } from '@/components/animations/Reveal'
import { RollingTitle } from '@/components/animations/RollingTitle'
import { HeroThesis } from '@/components/sections/HeroThesis'
import { HeroCapability } from '@/components/sections/HeroCapability'
import { cn } from '@/lib/cn'
import { ROUTES } from '@/constants/routes'
import { PROJECTS } from '@/data/projects'
import hexagonPattern from '@/assets/images/hexagon-pattern.jpg'

/**
 * Hand-picked for domain breadth across both Professional Work and
 * Personal Projects, not the first N entries in the data file.
 */
const SELECTED_SLUGS = [
  'orieon',
  'bear-behavior-recognition',
  'production-rag-platform',
  'industrial-robot-behavior-cloning',
  'ocr-platform-migration',
]

const selectedProjects = SELECTED_SLUGS.map((slug) =>
  PROJECTS.find((p) => p.slug === slug),
).filter((p): p is (typeof PROJECTS)[number] => p !== undefined)

/**
 * Lazy-loaded: Three.js pulls in ~900KB, and this element is hidden
 * below the lg breakpoint anyway, so it should never be fetched on
 * mobile/tablet.
 */
const WireframeGrid = lazy(() =>
  import('@/components/animations/WireframeGrid').then((m) => ({
    default: m.WireframeGrid,
  })),
)

export function Home() {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden blur-[1px] select-none">
        <img
          src={hexagonPattern}
          alt=""
          aria-hidden="true"
          className="pointer-events-none z-10 absolute top-0 right-0 h-56 w-auto object-top-right opacity-70 sm:h-80 lg:h-150"
        />
      </div>

      <Section className="relative min-h-[calc(100svh-4rem)] overflow-hidden py-20 md:py-28">
        <Container className="relative z-10 grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="flex flex-col">
            <HeroThesis>
              <div
                data-hero-item
                className="text-accent mb-8 flex items-center gap-2.5 font-mono text-xs tracking-wide uppercase"
              >
                <span className="bg-accent h-px w-6" aria-hidden="true" />
                Applied AI Engineer, Production Systems
              </div>
            </HeroThesis>

            <RollingTitle
              delay={0.15}
              className="text-text-primary mb-10 text-[3.4rem] leading-[0.98] font-semibold tracking-tight text-balance sm:text-[4.6rem] lg:text-[5rem]"
              lines={[
                'I build AI systems',
                <span key="em" className="text-text-muted font-normal">
                  that ship,
                </span>,
                'not just models that demo.',
              ]}
            />

            <HeroThesis>
              <p
                data-hero-item
                className="text-text-secondary mb-10 max-w-[54ch] text-lg leading-relaxed sm:text-xl"
              >
                I design and deploy production AI across computer vision,
                generative AI, and edge infrastructure, taking systems from
                research prototype to running in the field.
              </p>
              <div data-hero-item className="mb-12 flex flex-wrap gap-3.5">
                <Link to={ROUTES.projects} className={cn(buttonVariants())}>
                  View projects <ArrowRight className="size-4" />
                </Link>
                <Link
                  to={ROUTES.about}
                  className={cn(buttonVariants({ variant: 'outline' }))}
                >
                  About me
                </Link>
              </div>
            </HeroThesis>
          </div>

          <div className="hidden h-112 lg:flex lg:items-center">
            <Suspense fallback={null}>
              <WireframeGrid />
            </Suspense>
          </div>
        </Container>
      </Section>

      <Section className="border-border border-t py-14">
        <Container>
          <Reveal>
            <HeroCapability />
          </Reveal>
        </Container>
      </Section>

      <Section className="border-border border-t">
        <Container>
          <Reveal className="flex flex-col gap-10">
            <div className="flex items-end justify-between">
              <h2 className="text-text-primary text-2xl font-medium">
                Selected work
              </h2>
              <Link
                to={ROUTES.projects}
                className="text-accent hover:text-accent-hover flex items-center gap-1 text-sm"
              >
                All projects <ArrowRight className="size-3.5" />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {selectedProjects.map((project) =>
                project.origin === 'Company' ? (
                  <ProfessionalWorkCard key={project.slug} project={project} />
                ) : (
                  <ProjectCard key={project.slug} project={project} />
                ),
              )}
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section className="border-border border-t">
        <Container>
          <Reveal className="flex flex-col items-start gap-6">
            <h2 className="text-text-primary text-2xl font-medium">
              Let&apos;s talk
            </h2>
            <p className="text-text-secondary max-w-xl">
              Open to conversations about production AI systems, applied
              GenAI, and engineering roles across the AI stack.
            </p>
            <Link to={ROUTES.contact} className={cn(buttonVariants())}>
              Get in touch
            </Link>
          </Reveal>
        </Container>
      </Section>
    </>
  )
}
