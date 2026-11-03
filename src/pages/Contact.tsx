import { ArrowUpRight, Clock3, Mail, MapPin } from 'lucide-react'
import type { ReactNode } from 'react'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { SOCIAL_LINKS } from '@/constants/social'
import { GithubIcon, LinkedinIcon } from '@/components/ui/icons'
import { ContributionGraph } from '@/components/sections/ContributionGraph'
import { useDocumentMeta } from '@/hooks/useDocumentMeta'

export function Contact() {
  useDocumentMeta(
    'Contact, Anurag Bheemani',
    'Contact Anurag Bheemani about AI engineering roles and opportunities.',
  )

  return (
    <>
      <Section className="border-b border-border">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1fr_25rem] lg:items-end">
            <div>
              <p className="section-kicker">Contact / Opportunities</p>
              <h1 className="max-w-4xl text-4xl font-medium leading-[1.05] tracking-[-0.045em] text-balance sm:text-6xl">I&apos;m looking for my next AI engineering role.</h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-text-secondary">I&apos;m interested in teams building serious AI products—especially local AI, generative systems, model deployment, and infrastructure that connects research to production.</p>
            </div>
            <div className="border border-border bg-surface p-6">
              <p className="mb-5 text-[11px] uppercase tracking-[0.16em] text-accent">Availability</p>
              <div className="space-y-4 text-sm text-text-secondary"><p className="flex items-center gap-3"><MapPin className="size-4 text-text-muted" />Hyderabad, India</p><p className="flex items-center gap-3"><Clock3 className="size-4 text-text-muted" />India Standard Time</p><p className="flex items-center gap-3"><span className="size-2 rounded-full bg-success" />Open to full-time roles</p></div>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            <ContactLink href={`mailto:${SOCIAL_LINKS.email}`} icon={<Mail className="size-5" />} label="Email" value={SOCIAL_LINKS.email} />
            <ContactLink href={SOCIAL_LINKS.linkedin} icon={<LinkedinIcon className="size-5" />} label="LinkedIn" value="anurag-bheemani" external />
            <ContactLink href={SOCIAL_LINKS.github} icon={<GithubIcon className="size-5" />} label="GitHub" value="anu277" external />
          </div>
        </Container>
      </Section>

      <Section className="border-t border-border bg-surface/30">
        <Container><div className="mb-8"><p className="section-kicker">Open-source activity</p><h2 className="text-2xl font-medium tracking-tight">Building in public.</h2></div><ContributionGraph username="anu277" /></Container>
      </Section>
    </>
  )
}

function ContactLink({ href, icon, label, value, external = false }: { href: string; icon: ReactNode; label: string; value: string; external?: boolean }) {
  return <a href={href} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined} className="group flex min-h-44 flex-col justify-between border border-border bg-surface p-6 transition hover:-translate-y-1 hover:border-accent hover:bg-surface-elevated"><div className="flex items-center justify-between text-text-muted"><span className="group-hover:text-accent">{icon}</span><ArrowUpRight className="size-4 group-hover:text-accent" /></div><div><p className="mb-2 text-[10px] uppercase tracking-[0.14em] text-text-muted">{label}</p><p className="break-all text-sm text-text-primary">{value}</p></div></a>
}
