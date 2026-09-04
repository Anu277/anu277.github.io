import { useRef, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { useGSAP } from '@gsap/react'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { buttonVariants } from '@/components/ui/buttonVariants'
import { ProjectCard } from '@/components/cards/ProjectCard'
import { Reveal } from '@/components/animations/Reveal'
import { cn } from '@/lib/cn'
import { gsap } from '@/lib/gsap'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { ROUTES } from '@/constants/routes'
import { PROJECTS } from '@/data/projects'
import { RESEARCH_NOTES } from '@/data/research'

const SELECTED_SLUGS = ['orieon', 'paper-tail', 'bear-behavior-recognition', 'kitchen-procurement-verification']
const selectedProjects = SELECTED_SLUGS.map((slug) => PROJECTS.find((p) => p.slug === slug)).filter((p): p is (typeof PROJECTS)[number] => p !== undefined)
const capabilities = [
  ['Machine learning', 'Deep learning · Computer vision · Multimodal models'],
  ['Model engineering', 'PyTorch · Evaluation · Optimization · Edge inference'],
  ['AI systems', 'RAG · LLM applications · Vector search · Agents'],
  ['Engineering', 'Python · FastAPI · Docker · PostgreSQL · CI/CD'],
]

export function Home() {
  const heroRef = useRef<HTMLElement>(null)
  const reducedMotion = useReducedMotion()
  useGSAP(() => {
    if (!heroRef.current || reducedMotion) return
    const q = gsap.utils.selector(heroRef)
    gsap.timeline({ defaults: { ease: 'power3.out' } })
      .fromTo(q('.hero-grid'), { opacity: 0 }, { opacity: 1, duration: 0.55 })
      .fromTo(q('.hero-scan'), { scaleX: 0, transformOrigin: 'left' }, { scaleX: 1, duration: 0.7 }, '-=0.2')
      .fromTo(q('.hero-eyebrow'), { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.45 }, '-=0.2')
      .fromTo(q('.hero-line'), { opacity: 0, y: 22, clipPath: 'inset(0 0 100% 0)' }, { opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)', duration: 0.65, stagger: 0.09 }, '-=0.1')
      .fromTo(q('.hero-detail'), { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.08 }, '-=0.1')
  }, { scope: heroRef, dependencies: [reducedMotion] })

  return <>
    <section ref={heroRef} className="relative isolate min-h-[calc(100svh-4rem)] overflow-hidden border-b border-border py-16 md:py-24">
      <div className="hero-grid computational-grid pointer-events-none absolute inset-0 opacity-0" aria-hidden="true" />
      <div className="pointer-events-none absolute top-[21%] right-[9%] h-80 w-80 bg-[radial-gradient(circle,rgba(255,106,0,.06),transparent_65%)]" aria-hidden="true" />
      <Container className="relative flex min-h-[calc(100svh-12rem)] flex-col justify-center">
        <div className="hero-scan absolute top-0 right-6 left-6 h-px bg-accent/65 sm:right-10 sm:left-10 lg:right-16 lg:left-16 xl:right-24 xl:left-24" aria-hidden="true" />
        <div className="grid items-end gap-12 lg:grid-cols-12"><div className="lg:col-span-9">
          <p className="hero-eyebrow text-accent mb-7 flex items-center gap-3 font-mono text-[11px] tracking-[.2em] uppercase"><span className="h-1.5 w-1.5 bg-accent" /> Anurag Bheemani / AI Engineer</p>
          <h1 className="max-w-5xl text-[clamp(3rem,7vw,6.3rem)] leading-[.96] font-medium tracking-[-.055em]"><span className="hero-line block">I work on computer vision</span><span className="hero-line block text-text-secondary">and AI systems that have to</span><span className="hero-line block">perform outside the notebook.</span></h1>
          <p className="hero-detail text-text-secondary mt-8 max-w-2xl text-base leading-relaxed md:text-lg">My recent work spans video understanding on NVIDIA Jetson, inference optimisation with TensorRT, and vision pipelines for field operations. This site is a record of that work and the technical decisions behind it.</p>
          <div className="hero-detail mt-9 flex flex-wrap gap-3"><Link to={ROUTES.projects} className={cn(buttonVariants({ size: 'md' }))}>View selected work <ArrowRight className="size-4" strokeWidth={1.5} /></Link><Link to={ROUTES.about} className={cn(buttonVariants({ variant: 'outline', size: 'md' }))}>About me</Link></div>
        </div><aside className="hero-detail border-l border-border pl-5 lg:col-span-3" aria-label="Recent work"><p className="mb-5 font-mono text-[10px] tracking-[.18em] text-text-muted uppercase">Recent work</p><div className="space-y-4 font-mono text-[10px] leading-relaxed tracking-wide uppercase"><WorkNote label="Video understanding" value="V-JEPA 2 / NVIDIA Jetson" /><WorkNote label="Inference optimisation" value="TensorRT / DeepStream" /><WorkNote label="Computer vision" value="YOLOv8-OBB / OCR" /></div></aside></div>
        <div className="hero-detail mt-14 flex items-center justify-between border-t border-border pt-4 font-mono text-[10px] tracking-[.14em] text-text-muted uppercase"><span>Selected work / 2024—2026</span><span className="hidden sm:inline">Computer vision · AI infrastructure · local AI</span></div>
      </Container>
    </section>
    <Section id="work" className="border-b border-border"><Container><SectionHeading index="01" label="Selected work" title="Systems built for real environments." action={<Link to={ROUTES.projects} className="technical-link">All projects <ArrowRight className="size-3.5" /></Link>} /><div className="mt-12 grid grid-cols-1 gap-px border border-border bg-border md:grid-cols-2">{selectedProjects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index + 1} />)}</div></Container></Section>
    <Section className="border-b border-border" id="capabilities"><Container><SectionHeading index="02" label="Capabilities" title="The areas I work across." /><div className="mt-12 grid border-t border-border md:grid-cols-2">{capabilities.map(([title, detail], index) => <div key={title} className="border-b border-border py-6 md:pr-10 even:md:border-l even:md:pl-10"><span className="font-mono text-[10px] tracking-[.16em] text-text-muted">0{index + 1}</span><h3 className="mt-2 font-medium">{title}</h3><p className="mt-2 text-sm text-text-secondary">{detail}</p></div>)}</div></Container></Section>
    <Section className="border-b border-border" id="experiments"><Container><SectionHeading index="03" label="Technical notes" title="What I learned while building." action={<Link to={ROUTES.research} className="technical-link">All notes <ArrowRight className="size-3.5" /></Link>} /><div className="mt-12 grid gap-px border border-border bg-border lg:grid-cols-3">{RESEARCH_NOTES.slice(0, 3).map((note) => <Link key={note.slug} to={ROUTES.researchArticle(note.slug)} className="group bg-background p-6 transition-colors hover:bg-surface"><div className="flex items-center justify-between font-mono text-[10px] tracking-[.14em] text-text-muted"><span>ENGINEERING NOTE</span><ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></div><h3 className="mt-9 text-lg font-medium leading-snug group-hover:text-accent">{note.title}</h3><div className="mt-10 flex items-center justify-between border-t border-border pt-4 font-mono text-[10px] tracking-[.12em] text-text-muted uppercase"><span>{note.date}</span><span>{note.readingTime}</span></div></Link>)}</div></Container></Section>
    <Section className="border-b border-border" id="about"><Container className="grid gap-10 lg:grid-cols-12"><div className="lg:col-span-3"><p className="section-label">04 / About</p></div><Reveal className="lg:col-span-8 lg:col-start-5"><p className="max-w-3xl text-2xl leading-snug font-medium tracking-tight md:text-4xl">I like the work between a promising model and a reliable result: understanding the constraint, choosing the right approach, and making it run where it is needed.</p><p className="mt-6 max-w-2xl text-text-secondary">That has taken me from video models and edge devices to OCR, retrieval systems, and local AI applications. I write about the trade-offs because they matter as much as the model itself.</p><Link to={ROUTES.about} className="technical-link mt-8">More about my work <ArrowRight className="size-3.5" /></Link></Reveal></Container></Section>
    <Section id="contact"><Container><p className="section-label">05 / Contact</p><Reveal className="mt-8"><h2 className="max-w-4xl text-[clamp(2.6rem,6vw,5.5rem)] leading-[.98] font-medium tracking-[-.05em]">Let&apos;s connect.</h2><p className="mt-5 max-w-xl text-text-secondary">For professional correspondence, you can reach me by email or connect with me on LinkedIn.</p><Link to={ROUTES.contact} className="technical-link mt-8 text-base">Contact details <ArrowRight className="size-4" /></Link></Reveal></Container></Section>
  </>
}

function WorkNote({ label, value }: { label: string; value: string }) { return <div><span className="block text-text-muted">{label}</span><span className="mt-1 block text-text-primary">{value}</span></div> }
function SectionHeading({ index, label, title, action }: { index: string; label: string; title: string; action?: ReactNode }) { return <Reveal className="border-b border-border pb-5"><div className="flex items-start justify-between gap-5"><div><p className="section-label">{index} / {label}</p><h2 className="mt-5 text-2xl font-medium tracking-tight md:text-3xl">{title}</h2></div>{action}</div></Reveal> }
