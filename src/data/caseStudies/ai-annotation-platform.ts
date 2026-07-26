import type { CaseStudy } from '@/types/caseStudy'

export const AI_ANNOTATION_PLATFORM_CASE_STUDY: CaseStudy = {
  slug: 'ai-annotation-platform',
  executiveSummary:
    'A semi-automatic annotation tool combining model-assisted pre-labeling with manual correction, multi-user project allocation, batched assignment, and zip export.',
  problem: [
    'Manual annotation from scratch is slow, and a purely automated pipeline still needs human verification. The tool needed to support a team doing correction work on top of pre-labeled data, not just individual annotators working in isolation.',
  ],
  implementation: [
    {
      heading: 'Features',
      paragraphs: [
        'Combines model-assisted pre-labeling with a manual correction step, multi-user project allocation so work can be split across a team, batched assignment of images to annotators, and zip export for downstream use.',
      ],
    },
  ],
  lessonsLearned: [
    'Pre-labeling followed by correction, rather than annotation from a blank slate, made the tool practical for a multi-person annotation workflow.',
  ],
}
