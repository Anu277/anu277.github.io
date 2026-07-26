import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'

export function Blog() {
  return (
    <Section>
      <Container>
        <SectionHeader
          eyebrow="Blog"
          title="Engineering articles"
          subtitle="Writing in progress."
        />
      </Container>
    </Section>
  )
}
