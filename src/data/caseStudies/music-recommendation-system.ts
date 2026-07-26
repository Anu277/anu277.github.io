import type { CaseStudy } from '@/types/caseStudy'

export const MUSIC_RECOMMENDATION_SYSTEM_CASE_STUDY: CaseStudy = {
  slug: 'music-recommendation-system',
  executiveSummary:
    'A content-based music recommender built around a precomputed track-similarity model, served through a lightweight Python app.',
  problem: [
    'Recommending similar tracks from a music dataset without collaborative filtering or user history, using the content of the tracks themselves.',
  ],
  implementation: [
    {
      heading: 'Approach',
      paragraphs: [
        'A track-similarity model is precomputed and served through a lightweight Python app, matching new queries against the precomputed similarity space rather than recalculating relationships at request time.',
      ],
    },
  ],
  lessonsLearned: [
    'Precomputing similarity relationships ahead of time keeps the serving path simple and fast, at the cost of needing to recompute when the underlying track set changes.',
  ],
}
