import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { Reveal } from '@/components/animations/Reveal'
import { TechBadge } from '@/components/ui/TechBadge'
import { useDocumentMeta } from '@/hooks/useDocumentMeta'
import portraitHalftone from '@/assets/images/portrait-halftone.png'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { ROUTES } from '@/constants/routes'

const WHAT_I_BUILD = [
  'Production AI Systems',
  'Edge AI',
  'Computer Vision',
  'Local LLM Applications',
  'Applied GenAI',
  'AI Infrastructure',
  'Performance Optimization',
  'Developer Tools',
]

const CURRENTLY_EXPLORING = [
  'Agentic AI systems',
  'On-device generative AI',
  'Efficient LLM inference',
  'LLM evaluation and reliability',
  'AI-native developer tools',
]

const TIMELINE = [
  { year: '2024', label: 'Backend & Systems' },
  { year: '2025', label: 'Production Computer Vision' },
  { year: '2026', label: 'Applied AI Systems' },
]

export function About() {
  useDocumentMeta(
    'About, Anurag Bheemani',
    'AI engineer building production systems across generative AI, computer vision, edge deployment, and AI infrastructure.',
  )

  return (
    <>
      <Section className="border-b border-border pb-20">
        <Container>
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
            <Reveal type="slide">
              <span className="text-accent mb-5 flex items-center gap-2.5 text-xs tracking-wide uppercase">
                <span className="bg-accent h-px w-6" aria-hidden="true" />
                About / AI engineer
              </span>
              <h1 className="text-text-primary mb-8 text-4xl leading-[1.05] font-semibold tracking-tight text-balance md:text-5xl">
                I care about what happens after the model works.
              </h1>
              <p className="text-text-secondary mb-4 text-lg leading-relaxed">
                A promising model is only the beginning. I&apos;m interested in
                the engineering that turns it into a reliable product.
              </p>
              <p className="text-text-secondary text-lg leading-relaxed">
                My work spans generative AI, local inference, computer vision,
                edge hardware, retrieval, and the infrastructure around them.
                I enjoy owning the path from research and evaluation to the
                software people actually use.
              </p>
            </Reveal>

            <Reveal type="scale" delay={0.1}>
              <div className="relative aspect-square">
                <div
                  className="border-accent pointer-events-none absolute -top-5 -left-5 h-full w-full border"
                  aria-hidden="true"
                />
                <div className="border-accent bg-background relative h-full w-full border-2">
                  <img
                    src={portraitHalftone}
                    alt="Portrait of Anurag Bheemani"
                    className="h-full w-full object-cover"
                    width={900}
                    height={900}
                  />
                </div>
                <div
                  className="border-accent pointer-events-none absolute -right-5 -bottom-5 h-full w-full border"
                  aria-hidden="true"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Reveal className="grid gap-10 lg:grid-cols-[0.55fr_1.45fr] lg:gap-20">
            <div><p className="section-kicker">Engineering philosophy</p><h2 className="text-text-primary text-3xl font-medium tracking-tight">Use the right system, not the fashionable one.</h2></div>
            <div className="flex max-w-[62ch] flex-col gap-5 border-l border-border pl-7">
              <p className="text-text-secondary text-base leading-relaxed">
                I don&apos;t chase the newest model. I care about whether it
                solves the problem.
              </p>
              <p className="text-text-secondary text-base leading-relaxed">
                Sometimes that means a self-supervised video encoder.
                Sometimes it means a rule-based system. Sometimes a flat file
                is a better fit than a vector database. Sometimes ONNX beats
                the framework it came from.
              </p>
              <p className="text-text-secondary text-base leading-relaxed">
                The interesting part isn&apos;t the technology. It&apos;s
                knowing when to use it.
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section className="border-border bg-surface/30 border-y">
        <Container>
          <Reveal className="flex flex-col gap-8">
            <div><p className="section-kicker">Capabilities</p><h2 className="text-text-primary text-3xl font-medium tracking-tight">What I build</h2></div>
            <div className="flex flex-wrap gap-2.5">
              {WHAT_I_BUILD.map((item) => (
                <TechBadge key={item} label={item} />
              ))}
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section>
        <Container>
          <Reveal className="flex flex-col gap-8">
            <div><p className="section-kicker">Now</p><h2 className="text-text-primary text-3xl font-medium tracking-tight">Currently exploring</h2></div>
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {CURRENTLY_EXPLORING.map((item) => (
                <li
                  key={item}
                  className="border-border bg-surface text-text-secondary flex items-center gap-3 border p-5 text-base"
                >
                  <span
                    className="bg-accent size-1.5 shrink-0"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </Section>

      <Section className="border-border border-y">
        <Container>
          <Reveal className="flex flex-col gap-10">
            <div><p className="section-kicker">Progression</p><h2 className="text-text-primary text-3xl font-medium tracking-tight">From backend foundations to AI systems.</h2></div>
            <div className="grid gap-px border border-border bg-border sm:grid-cols-4">
              {TIMELINE.map((item, i) => (
                <div
                  key={item.year}
                  className="bg-background p-6"
                >
                  <span className="text-accent text-sm">
                    {item.year}
                  </span>
                  <span className="text-text-primary text-base font-medium">
                    {item.label}
                  </span>
                  {i < TIMELINE.length - 1 && null}
                </div>
              ))}
              <div className="bg-background p-6">
                <span className="text-accent text-sm">Today</span>
                <span className="text-text-primary text-base font-medium">
                  Building production AI across computer vision, local LLMs,
                  retrieval, and AI infrastructure.
                </span>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section>
        <Container>
          <Reveal className="flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
            <div><p className="section-kicker">Next step</p><h2 className="max-w-2xl text-3xl font-medium tracking-tight">I&apos;m looking for a team solving meaningful AI engineering problems.</h2><p className="text-text-secondary mt-4 max-w-[58ch] text-base leading-relaxed">If your team works across models, systems, and real product constraints, I&apos;d like to hear about the role.</p></div>
            <Link to={ROUTES.contact} className="inline-flex shrink-0 items-center gap-2 border border-accent px-5 py-3 text-sm text-accent transition hover:bg-accent hover:text-background">Discuss an opportunity <ArrowRight className="size-4" /></Link>
          </Reveal>
        </Container>
      </Section>
    </>
  )
}
