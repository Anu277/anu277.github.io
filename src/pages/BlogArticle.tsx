import { useParams } from 'react-router-dom'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'

export function BlogArticle() {
  const { slug } = useParams<{ slug: string }>()

  return (
    <Section>
      <Container>
        <SectionHeader
          eyebrow="Blog"
          title={slug ?? 'Article'}
          subtitle="This article is being written."
        />
      </Container>
    </Section>
  )
}
