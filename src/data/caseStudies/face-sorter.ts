import type { CaseStudy } from '@/types/caseStudy'

export const FACE_SORTER_CASE_STUDY: CaseStudy = {
  slug: 'face-sorter',
  executiveSummary:
    'An Android app that groups photos by face locally on-device, storing only encrypted metadata rather than raw images.',
  problem: [
    'Manually sorting a large photo library by who’s in each photo is tedious, and sending personal photos to a cloud service to do it raises an obvious privacy concern.',
  ],
  technologyDecisions: [
    {
      heading: 'Local-first, privacy by design',
      paragraphs: [
        'Face grouping runs entirely on-device. Rather than storing or uploading raw images, the app keeps only encrypted metadata: the grouping happens locally and nothing about the photo library leaves the device.',
      ],
    },
  ],
  lessonsLearned: [
    'Keeping processing on-device and storing only encrypted metadata, rather than raw images, meant the privacy story didn’t need to be bolted on afterward. It shaped the architecture from the start.',
  ],
}
