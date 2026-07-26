import type { CaseStudy } from '@/types/caseStudy'

export const LEOPARD_AUTO_ANNOTATION_PIPELINE_CASE_STUDY: CaseStudy = {
  slug: 'leopard-auto-annotation-pipeline',
  executiveSummary:
    'A DINO-assisted auto-annotation workflow that expanded a leopard-detection dataset and improved model accuracy from 83% to 92%, deployed to NVIDIA Jetson edge devices for on-site inference.',
  problem: [
    'Expanding a labeled dataset for leopard detection by hand doesn’t scale: every new frame needs a human to draw and verify a bounding box before it can be used for training.',
  ],
  implementation: [
    {
      heading: 'Approach',
      paragraphs: [
        'DINOv2 produces general-purpose visual embeddings without needing labels. Candidate images were matched against a small set of verified leopard examples using embedding similarity, effectively using DINO’s embedding space as a similarity-based pseudo-labeling mechanism, with human validation sampling on top rather than full manual annotation of every new image.',
      ],
    },
  ],
  metrics: [
    {
      label: 'Detection accuracy',
      value: '83% → 92%',
      context: 'Via DINO-assisted auto-annotation with human validation sampling.',
    },
  ],
  lessonsLearned: [
    'Auto-annotation with a lightweight human-verification step in the loop scaled dataset growth in a way manual labeling alone couldn’t keep up with.',
  ],
}
