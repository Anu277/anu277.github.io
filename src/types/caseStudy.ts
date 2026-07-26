export interface CaseStudySection {
  heading: string
  paragraphs: string[]
}

export interface CaseStudyMetric {
  label: string
  value: string
  context: string
}

export interface CaseStudy {
  slug: string
  executiveSummary: string
  /** Grounded in resume claims; explicit rather than vague. */
  problem: string[]
  requirements?: string[]
  constraints?: string[]
  architecture?: string[]
  technologyDecisions?: CaseStudySection[]
  implementation?: CaseStudySection[]
  challenges?: string[]
  metrics?: CaseStudyMetric[]
  lessonsLearned: string[]
  /** Slugs of related research notes, if any exist for this project. */
  relatedResearchSlugs?: string[]
}
