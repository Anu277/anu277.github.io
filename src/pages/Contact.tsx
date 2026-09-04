import { Mail } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { SOCIAL_LINKS } from '@/constants/social'
import { GithubIcon, LinkedinIcon } from '@/components/ui/icons'
import { GithubProfileStats } from '@/components/sections/GithubProfileStats'
import { ContributionGraph } from '@/components/sections/ContributionGraph'
import { useDocumentMeta } from '@/hooks/useDocumentMeta'

export function Contact() {
  useDocumentMeta(
    'Contact, Anurag Bheemani',
    'Get in touch about production AI systems, applied GenAI, and engineering roles across the AI stack.',
  )

  return (
    <Section>
      <Container>
        <div className="flex flex-col gap-10">
          <SectionHeader
            eyebrow="Contact"
            title="Get in touch"
            subtitle="For professional correspondence, connect by email or LinkedIn. Based in Telangana, India (IST)."
          />

          <ul className="flex flex-col gap-4">
            <li>
              <a
                href={`mailto:${SOCIAL_LINKS.email}`}
                className="text-text-primary hover:text-accent group flex items-center gap-3 text-lg transition-colors"
              >
                <Mail className="size-5 shrink-0" strokeWidth={1.5} />
                {SOCIAL_LINKS.email}
              </a>
            </li>
            <li>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-text-primary hover:text-accent flex items-center gap-3 text-lg transition-colors"
              >
                <LinkedinIcon className="size-5 shrink-0" />
                linkedin.com/in/anurag-bheemani
              </a>
            </li>
            <li>
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noreferrer"
                className="text-text-primary hover:text-accent flex items-center gap-3 text-lg transition-colors"
              >
                <GithubIcon className="size-5 shrink-0" />
                github.com/anu277
              </a>
            </li>
          </ul>

          <GithubProfileStats username="anu277" />

          <ContributionGraph username="anu277" />
        </div>
      </Container>
    </Section>
  )
}
