import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, BrainCircuit, Boxes, Cpu, MapPin, Sparkles } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { Reveal } from '@/components/animations/Reveal'
import { RollingTitle } from '@/components/animations/RollingTitle'
import { HeroThesis } from '@/components/sections/HeroThesis'
import { buttonVariants } from '@/components/ui/buttonVariants'
import { cn } from '@/lib/cn'
import { ROUTES } from '@/constants/routes'
import { PROJECTS } from '@/data/projects'
import { RESEARCH_NOTES } from '@/data/research'

const FEATURED_SLUGS = ['orieon', 'paper-tail', 'industrial-robot-behavior-cloning', 'kitchen-procurement-verification']

const featuredProjects = FEATURED_SLUGS.map((slug) => PROJECTS.find((project) => project.slug === slug))
  .filter((project): project is NonNullable<typeof project> => Boolean(project))

const capabilities = [
  { icon: BrainCircuit, title: 'Computer vision', copy: 'Detection, video understanding, OCR, tracking, and dataset pipelines built for real-world conditions.' },
  { icon: Sparkles, title: 'Generative AI', copy: 'Agentic RAG, local LLM systems, and reliable document-grounded applications beyond simple API wrappers.' },
  { icon: Cpu, title: 'Edge deployment', copy: 'Optimized inference across Jetson, offline desktop, TensorRT, DeepStream, and constrained hardware.' },
  { icon: Boxes, title: 'AI infrastructure', copy: 'Annotation tools, evaluation workflows, backends, and automation that keep production ML systems useful.' },
]

export function Home() {
  const primaryProject = featuredProjects[0]
  const secondaryProjects = featuredProjects.slice(1)

  return (
    <>
      <Section className="relative overflow-hidden border-b border-border py-0">
        <div className="hero-glow" aria-hidden="true" />
        <Container className="relative grid min-h-[calc(100svh-4rem)] items-center py-20 lg:grid-cols-[1fr_19rem] lg:gap-16 lg:py-24">
          <div className="max-w-4xl">
            <HeroThesis>
              <div data-hero-item className="mb-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-medium uppercase tracking-[0.16em] text-accent">
                <span className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-accent shadow-[0_0_14px_var(--color-accent)]" />AI engineer</span>
                <span className="text-text-muted">Hyderabad, India</span>
              </div>
            </HeroThesis>

            <RollingTitle
              delay={0.12}
              className="mb-9 text-[3.25rem] font-semibold leading-[0.98] tracking-[-0.055em] text-text-primary text-balance sm:text-[4.6rem] lg:text-[5.7rem]"
              lines={['I turn AI research', <span key="em" className="font-normal text-text-muted">into systems that work</span>, 'outside the lab.']}
            />

            <HeroThesis>
              <p data-hero-item className="mb-9 max-w-[59ch] text-lg leading-relaxed text-text-secondary sm:text-xl">
                I build production-grade computer vision, generative AI, and edge systems—from the first experiment to deployment on real hardware.
              </p>
              <div data-hero-item className="flex flex-wrap gap-3">
                <Link to={ROUTES.projects} className={cn(buttonVariants(), 'px-6')}>Explore selected work <ArrowRight className="size-4" /></Link>
                <Link to={ROUTES.resume} className={cn(buttonVariants({ variant: 'outline' }), 'px-6')}>View resume</Link>
              </div>
            </HeroThesis>
          </div>

          <aside className="mt-16 hidden border-l border-border pl-8 lg:block" aria-label="Portfolio overview">
            <p className="mb-7 text-[11px] uppercase tracking-[0.18em] text-text-muted">Current focus</p>
            <div className="space-y-7">
              <HeroFact value="AI systems" label="Primary focus" />
              <HeroFact value="Generative AI" label="Local and agentic systems" />
              <HeroFact value="AI product engineering" label="Research to deployment" />
            </div>
            <div className="mt-9 border-t border-border pt-6 text-sm text-text-muted"><MapPin className="mr-2 inline size-3.5" />Open to high-impact AI work</div>
          </aside>
        </Container>
      </Section>

      <section className="border-b border-border bg-surface/40">
        <Container className="grid grid-cols-2 divide-x divide-border border-x border-border md:grid-cols-4">
          <ProofItem value={`${PROJECTS.length}+`} label="systems & projects" />
          <ProofItem value="CV · GenAI" label="core disciplines" />
          <ProofItem value="Cloud → edge" label="deployment range" />
          <ProofItem value="End to end" label="ownership style" />
        </Container>
      </section>

      <Section>
        <Container>
          <Reveal className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div><p className="section-kicker">Selected work</p><h2 className="max-w-2xl text-3xl font-medium tracking-tight sm:text-4xl">A few systems worth looking at first.</h2></div>
            <Link to={ROUTES.projects} className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent-hover">Browse all projects <ArrowRight className="size-4" /></Link>
          </Reveal>

          {primaryProject && (
            <Reveal className="grid border border-border bg-surface lg:grid-cols-[1.15fr_0.85fr]">
              <div className="project-visual relative min-h-80 overflow-hidden border-b border-border p-8 lg:min-h-[31rem] lg:border-b-0 lg:border-r lg:p-12">
                <span className="relative z-10 text-xs uppercase tracking-[0.18em] text-accent">Featured case study</span>
                <div className="absolute bottom-8 left-8 right-8 z-10 lg:bottom-12 lg:left-12 lg:right-12">
                  <p className="mb-3 font-mono text-xs text-text-muted">01 / OFFLINE AI</p>
                  <p className="max-w-lg text-2xl font-medium leading-snug text-text-primary sm:text-3xl">Private, on-device intelligence for video—not another cloud-dependent demo.</p>
                </div>
              </div>
              <Link to={ROUTES.project(primaryProject.slug)} className="group flex flex-col justify-between gap-12 p-8 transition-colors hover:bg-surface-elevated lg:p-12">
                <div>
                  <div className="mb-8 flex items-start justify-between gap-5"><span className="border border-accent/40 px-2.5 py-1 text-xs text-accent">{primaryProject.status}</span><ArrowUpRight className="size-5 text-text-muted transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent" /></div>
                  <p className="mb-3 text-sm text-text-muted">{primaryProject.categories.join(' · ')}</p>
                  <h3 className="mb-5 text-3xl font-medium tracking-tight">{primaryProject.title}</h3>
                  <p className="leading-relaxed text-text-secondary">{primaryProject.summary}</p>
                </div>
                <div className="border-t border-border pt-6"><p className="mb-3 text-[11px] uppercase tracking-[0.16em] text-text-muted">Built with</p><p className="text-sm text-text-primary">{primaryProject.technologies.slice(0, 5).join(' · ')}</p></div>
              </Link>
            </Reveal>
          )}

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {secondaryProjects.map((project, index) => (
              <Reveal key={project.slug}>
                <Link to={ROUTES.project(project.slug)} className="group flex h-full min-h-80 flex-col border border-border bg-surface p-7 transition hover:-translate-y-1 hover:border-text-muted hover:bg-surface-elevated">
                  <div className="mb-8 flex items-center justify-between"><span className="font-mono text-xs text-text-muted">0{index + 2}</span><ArrowUpRight className="size-4 text-text-muted group-hover:text-accent" /></div>
                  <p className="mb-3 text-xs uppercase tracking-[0.14em] text-accent">{project.categories[0]}</p>
                  <h3 className="mb-4 text-xl font-medium leading-snug group-hover:text-accent">{project.title}</h3>
                  <p className="line-clamp-4 text-sm leading-relaxed text-text-secondary">{project.summary}</p>
                  <p className="mt-auto border-t border-border pt-5 text-xs text-text-muted">{project.technologies.slice(0, 3).join(' · ')}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="border-y border-border bg-surface/30">
        <Container>
          <Reveal className="mb-12 max-w-2xl"><p className="section-kicker">How I contribute</p><h2 className="text-3xl font-medium tracking-tight sm:text-4xl">I connect the model to the product around it.</h2></Reveal>
          <div className="grid border-l border-t border-border sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map(({ icon: Icon, title, copy }, index) => (
              <Reveal key={title} className="border-b border-r border-border p-7 lg:p-8">
                <div className="mb-12 flex items-center justify-between"><Icon className="size-5 text-accent" strokeWidth={1.5} /><span className="font-mono text-xs text-text-muted">0{index + 1}</span></div>
                <h3 className="mb-3 text-lg font-medium">{title}</h3><p className="text-sm leading-relaxed text-text-secondary">{copy}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Reveal className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div><p className="section-kicker">Technical field notes</p><h2 className="mb-5 text-3xl font-medium tracking-tight">What I learn while building.</h2><p className="mb-7 text-text-secondary">Practical write-ups on model evaluation, local inference, OCR, retrieval, and the trade-offs behind production AI.</p><Link to={ROUTES.research} className="inline-flex items-center gap-2 text-sm text-accent">Read all notes <ArrowRight className="size-4" /></Link></div>
            <div className="border-t border-border">
              {RESEARCH_NOTES.slice(0, 3).map((note, index) => (
                <Link key={note.slug} to={ROUTES.researchArticle(note.slug)} className="group grid gap-3 border-b border-border py-6 sm:grid-cols-[2rem_1fr_auto] sm:items-center">
                  <span className="font-mono text-xs text-text-muted">0{index + 1}</span><div><h3 className="mb-1 font-medium group-hover:text-accent">{note.title}</h3><p className="line-clamp-1 text-sm text-text-muted">{note.summary}</p></div><span className="text-xs text-text-muted sm:text-right">{note.readingTime}</span>
                </Link>
              ))}
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section className="border-t border-border bg-accent text-background">
        <Container>
          <Reveal className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
            <div><p className="mb-5 text-xs font-medium uppercase tracking-[0.18em] opacity-70">Open to AI engineering opportunities</p><h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-background sm:text-5xl">Looking for an AI engineer who can take systems from research to production?</h2></div>
            <Link to={ROUTES.contact} className="inline-flex shrink-0 items-center justify-center gap-2 border border-background bg-background px-6 py-3 text-sm font-medium text-text-primary transition hover:bg-transparent hover:text-background">Discuss an opportunity <ArrowUpRight className="size-4" /></Link>
          </Reveal>
        </Container>
      </Section>
    </>
  )
}

function HeroFact({ value, label }: { value: string; label: string }) {
  return <div><p className="mb-1 text-base font-medium text-text-primary">{value}</p><p className="text-xs text-text-muted">{label}</p></div>
}

function ProofItem({ value, label }: { value: string; label: string }) {
  return <div className="px-4 py-6 sm:px-6 md:py-7"><p className="mb-1 text-sm font-medium text-text-primary sm:text-base">{value}</p><p className="text-[11px] text-text-muted sm:text-xs">{label}</p></div>
}
