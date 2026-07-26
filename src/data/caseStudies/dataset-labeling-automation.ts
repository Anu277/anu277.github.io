import type { CaseStudy } from '@/types/caseStudy'

export const DATASET_LABELING_AUTOMATION_CASE_STUDY: CaseStudy = {
  slug: 'dataset-labeling-automation',
  executiveSummary:
    'A cron-triggered pipeline that checks edge-device local storage on a fixed interval and dispatches new image batches into a DINOv2 + SAM auto-annotation workflow.',
  problem: [
    'Images captured by edge devices in the field needed to reach the annotation pipeline without someone manually pulling and dispatching batches.',
  ],
  implementation: [
    {
      heading: 'Pipeline',
      paragraphs: [
        'A cron-triggered job checks edge-device local storage at a fixed interval and dispatches new image batches directly into a DINOv2 and SAM auto-annotation workflow, keeping the labeling pipeline fed without manual intervention.',
      ],
    },
  ],
  lessonsLearned: [
    'Automating the dispatch step removed a manual bottleneck between edge capture and the annotation pipeline that would otherwise limit how quickly the dataset could grow.',
  ],
}
