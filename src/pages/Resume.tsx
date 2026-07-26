import { Download } from 'lucide-react'
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
    <Section>
      <Container>
        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeader
              eyebrow="Resume"
              title="Anurag Bheemani"
              subtitle={RESUME_SUMMARY}
            />
            <a
              href="/resume.pdf"
              download
              className={cn(buttonVariants({ variant: 'secondary' }), 'shrink-0')}
            >
              <Download className="size-4" strokeWidth={1.5} />
              Download PDF
            </a>
          </div>

          <div className="flex flex-col gap-8">
            <h2 className="text-text-primary text-xl font-medium">
              Experience
            </h2>
            <div className="flex flex-col gap-10">
              {RESUME_EXPERIENCE.map((exp) => (
                <article
                  key={exp.company}
                  className="border-border grid grid-cols-1 gap-4 border-t pt-6 md:grid-cols-[1fr_2fr]"
                >
                  <div>
                    <h3 className="text-text-primary font-medium">
                      {exp.company}
                    </h3>
                    <p className="text-text-secondary text-sm">{exp.role}</p>
                    <p className="text-text-muted text-sm">{exp.location}</p>
                    <p className="text-text-muted mt-1 font-mono text-xs">
                      {exp.period}
                    </p>
                  </div>
                  <ul className="flex flex-col gap-2">
                    {exp.highlights.map((point) => (
                      <li
                        key={point}
                        className="text-text-secondary text-sm leading-relaxed"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <h2 className="text-text-primary text-xl font-medium">Skills</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {Object.entries(RESUME_SKILLS).map(([category, skills]) => (
                <div key={category} className="flex flex-col gap-2">
                  <h3 className="text-text-primary text-sm font-medium">
                    {category}
                  </h3>
                  <p className="text-text-secondary text-sm">
                    {skills.join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <h2 className="text-text-primary text-xl font-medium">
              Education
            </h2>
            <div className="border-border border-t pt-6">
              <h3 className="text-text-primary font-medium">
                {RESUME_EDUCATION.school}
              </h3>
              <p className="text-text-secondary text-sm">
                {RESUME_EDUCATION.degree}
              </p>
              <p className="text-text-muted mt-1 font-mono text-xs">
                {RESUME_EDUCATION.period} &middot; {RESUME_EDUCATION.detail}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <h2 className="text-text-primary text-xl font-medium">
              Achievements
            </h2>
            <ul className="border-border flex flex-col gap-2 border-t pt-6">
              {RESUME_ACHIEVEMENTS.map((item) => (
                <li key={item} className="text-text-secondary text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  )
}
