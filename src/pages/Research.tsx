import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { ResearchCard } from '@/components/cards/ResearchCard'
import { RESEARCH_NOTES } from '@/data/research'
import { useDocumentMeta } from '@/hooks/useDocumentMeta'

export function Research() {
  useDocumentMeta(
    'Research, Anurag Bheemani',
    'Implementation decisions, experiments, and lessons from building AI systems: an engineering notebook, not project summaries.',
  )

  return (
    <Section>
      <Container>
        <div className="flex flex-col gap-10">
          <SectionHeader
            eyebrow="Research"
            title="Engineering notebook"
            subtitle="Implementation decisions, experiments, and lessons from building AI systems. Not project summaries; the reasoning behind them."
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {RESEARCH_NOTES.map((note) => (
              <ResearchCard key={note.slug} note={note} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
