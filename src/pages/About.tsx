import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { Reveal } from '@/components/animations/Reveal'
import { TechBadge } from '@/components/ui/TechBadge'
import { useDocumentMeta } from '@/hooks/useDocumentMeta'
import portraitHalftone from '@/assets/images/portrait-halftone.png'

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
  'Video foundation models',
  'Local AI agents',
  'Efficient inference',
  'AI desktop applications',
  'Retrieval systems',
]

const TIMELINE = [
  { year: '2024', label: 'Backend & Systems' },
  { year: '2025', label: 'Production Computer Vision' },
  { year: '2026', label: 'Applied AI Systems' },
]

export function About() {
  useDocumentMeta(
    'About, Anurag Bheemani',
    'Applied AI engineer building production systems across computer vision, generative AI, and edge infrastructure. Engineering philosophy, timeline, and current focus.',
  )

  return (
    <>
      <Section className="pb-16">
        <Container>
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
            <Reveal type="slide">
              <span className="text-accent mb-5 flex items-center gap-2.5 font-mono text-xs tracking-wide uppercase">
                <span className="bg-accent h-px w-6" aria-hidden="true" />
                About
              </span>
              <h1 className="text-text-primary mb-8 text-4xl leading-[1.05] font-semibold tracking-tight text-balance md:text-5xl">
                Building AI systems that survive outside the lab.
              </h1>
              <p className="text-text-secondary mb-4 text-lg leading-relaxed">
                Most machine learning models work well in notebooks.
                I&apos;m interested in what happens after that.
              </p>
              <p className="text-text-secondary text-lg leading-relaxed">
                My work focuses on taking research ideas and making them run
                reliably on real hardware, whether that&apos;s an NVIDIA
                Jetson deployed in the field, an offline desktop AI
                application, or a production computer vision pipeline. I
                enjoy the engineering between a benchmark and a product.
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

      <Section className="border-border border-t">
        <Container>
          <Reveal className="flex flex-col gap-8">
            <h2 className="text-text-primary text-2xl font-medium">
              Engineering philosophy
            </h2>
            <div className="flex max-w-[62ch] flex-col gap-4">
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

      <Section className="border-border border-t">
        <Container>
          <Reveal className="flex flex-col gap-8">
            <h2 className="text-text-primary text-2xl font-medium">
              What I build
            </h2>
            <div className="flex flex-wrap gap-2.5">
              {WHAT_I_BUILD.map((item) => (
                <TechBadge key={item} label={item} />
              ))}
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section className="border-border border-t">
        <Container>
          <Reveal className="flex flex-col gap-8">
            <h2 className="text-text-primary text-2xl font-medium">
              Currently exploring
            </h2>
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {CURRENTLY_EXPLORING.map((item) => (
                <li
                  key={item}
                  className="text-text-secondary flex items-center gap-3 text-base"
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

      <Section className="border-border border-t">
        <Container>
          <Reveal className="flex flex-col gap-10">
            <h2 className="text-text-primary text-2xl font-medium">
              Timeline
            </h2>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-4">
              {TIMELINE.map((item, i) => (
                <div
                  key={item.year}
                  className="flex flex-1 items-start gap-4 sm:flex-col sm:gap-3"
                >
                  <span className="text-accent font-mono text-sm">
                    {item.year}
                  </span>
                  <span className="text-text-primary text-base font-medium">
                    {item.label}
                  </span>
                  {i < TIMELINE.length - 1 && (
                    <span
                      className="text-text-muted hidden sm:block"
                      aria-hidden="true"
                    >
                      &darr;
                    </span>
                  )}
                </div>
              ))}
              <div className="flex flex-1 items-start gap-4 sm:flex-col sm:gap-3">
                <span className="text-accent font-mono text-sm">Today</span>
                <span className="text-text-primary text-base font-medium">
                  Building production AI across computer vision, local LLMs,
                  retrieval, and AI infrastructure.
                </span>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section className="border-border border-t">
        <Container>
          <Reveal className="flex flex-col gap-6">
            <h2 className="text-text-primary text-2xl font-medium">
              Beyond engineering
            </h2>
            <p className="text-text-secondary max-w-[52ch] text-base leading-relaxed">
              Outside work, I read engineering blogs, explore new AI systems,
              and try to turn ideas into products rather than demos.
            </p>
          </Reveal>
        </Container>
      </Section>
    </>
  )
}
