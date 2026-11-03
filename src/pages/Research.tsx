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
    <>
      <Section className="border-b border-border pb-16 md:pb-20">
        <Container>
          <SectionHeader
            eyebrow="Technical field notes"
            title="The decisions behind the systems."
            subtitle="Experiments, trade-offs, benchmarks, and lessons from building AI products—not recycled project summaries."
          />
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="mb-8 flex items-center justify-between border-b border-border pb-5">
            <p className="text-sm text-text-secondary">All engineering notes</p>
            <p className="font-mono text-xs text-text-muted">{RESEARCH_NOTES.length.toString().padStart(2, '0')} entries</p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {RESEARCH_NOTES.map((note) => (
              <ResearchCard key={note.slug} note={note} />
            ))}
          </div>
        </Container>
      </Section>
    </>
  )
}
