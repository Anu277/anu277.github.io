import { ArrowUpRight, Download, MapPin } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { buttonVariants } from '@/components/ui/buttonVariants'
import { cn } from '@/lib/cn'
import {
  RESUME_ACHIEVEMENTS,
  RESUME_EDUCATION,
  RESUME_EXPERIENCE,
  RESUME_SKILLS,
  RESUME_SUMMARY,
} from '@/data/resume'
import { useDocumentMeta } from '@/hooks/useDocumentMeta'

export function Resume() {
  useDocumentMeta('Resume, Anurag Bheemani', RESUME_SUMMARY)

  return (
    <>
      <Section className="border-b border-border pb-16 md:pb-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <SectionHeader
              eyebrow="Resume / Experience"
              title="Anurag Bheemani"
              subtitle={RESUME_SUMMARY}
            />
            <div className="flex flex-col items-start gap-4 lg:items-end"><p className="flex items-center gap-2 text-sm text-text-muted"><MapPin className="size-4" />Hyderabad, India</p><a href="/Anurag_Bheemani_Resume.pdf" download="Anurag_Bheemani_Resume.pdf" className={cn(buttonVariants({ variant: 'secondary' }), 'shrink-0')}><Download className="size-4" strokeWidth={1.5} />Download PDF</a></div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container><div className="grid gap-14 lg:grid-cols-[12rem_1fr]">
          <div><p className="section-kicker">01 / Career</p><h2 className="text-text-primary text-2xl font-medium">Experience</h2></div>
            <div className="flex flex-col gap-10">
              {RESUME_EXPERIENCE.map((exp, index) => (
                <article
                  key={exp.company}
                  className="border-border grid grid-cols-1 gap-6 border-t pt-7 md:grid-cols-[15rem_1fr]"
                >
                  <div>
                    <span className="mb-4 block font-mono text-xs text-accent">0{index + 1}</span>
                    <h3 className="text-text-primary font-medium">
                      {exp.company}
                    </h3>
                    <p className="text-text-secondary text-sm">{exp.role}</p>
                    <p className="text-text-muted text-sm">{exp.location}</p>
                    <p className="text-text-muted mt-1 text-xs">
                      {exp.period}
                    </p>
                  </div>
                  <ul className="flex flex-col gap-4">
                    {exp.highlights.map((point) => (
                      <li
                        key={point}
                        className="text-text-secondary relative pl-4 text-sm leading-relaxed before:absolute before:left-0 before:top-2.5 before:size-1 before:bg-accent"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div></Container>
      </Section>

      <Section className="border-y border-border bg-surface/30">
        <Container><div className="grid gap-14 lg:grid-cols-[12rem_1fr]">
            <div><p className="section-kicker">02 / Toolkit</p><h2 className="text-text-primary text-2xl font-medium">Skills</h2></div>
            <div className="grid grid-cols-1 gap-px border border-border bg-border md:grid-cols-2">
              {Object.entries(RESUME_SKILLS).map(([category, skills]) => (
                <div key={category} className="flex flex-col gap-3 bg-background p-6">
                  <h3 className="text-accent text-[11px] font-medium tracking-[0.14em] uppercase">
                    {category}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {skills.join(' · ')}
                  </p>
                </div>
              ))}
            </div>
          </div></Container>
      </Section>

      <Section>
        <Container><div className="grid gap-14 lg:grid-cols-[12rem_1fr]">
            <div><p className="section-kicker">03 / Foundation</p><h2 className="text-text-primary text-2xl font-medium">Education</h2></div>
            <div className="border-border border-t pt-7">
              <h3 className="text-text-primary font-medium">
                {RESUME_EDUCATION.school}
              </h3>
              <p className="text-text-secondary text-sm">
                {RESUME_EDUCATION.degree}
              </p>
              <p className="text-text-muted mt-1 text-xs">
                {RESUME_EDUCATION.period} &middot; {RESUME_EDUCATION.detail}
              </p>
            </div>
          </div></Container>
      </Section>

      <Section className="border-t border-border">
        <Container><div className="grid gap-14 lg:grid-cols-[12rem_1fr]">
            <div><p className="section-kicker">04 / Recognition</p><h2 className="text-text-primary text-2xl font-medium">Achievements</h2></div>
            <ul className="border-border flex flex-col border-t">
              {RESUME_ACHIEVEMENTS.map((item) => (
                <li key={item} className="text-text-secondary flex items-start justify-between gap-4 border-b border-border py-5 text-sm"><span>{item}</span><ArrowUpRight className="size-4 shrink-0 text-text-muted" /></li>
              ))}
            </ul>
          </div></Container>
      </Section>
    </>
  )
}
