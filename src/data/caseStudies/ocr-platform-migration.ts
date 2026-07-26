import type { CaseStudy } from '@/types/caseStudy'

export const OCR_PLATFORM_MIGRATION_CASE_STUDY: CaseStudy = {
  slug: 'ocr-platform-migration',
  executiveSummary:
    'Migrated an internal OCR service for layout-aware extraction from system-monitoring screenshots off Tesseract onto PaddleOCR, reaching 91% word accuracy across 150+ screenshots.',
  problem: [
    'The service needed to extract structured values (like memory usage readings) from system-monitoring UI screenshots, such as task manager panels. Tesseract reads a screenshot as a flat stream of pixel-positioned text starting from the top-left, with no notion of the UI layout or structure it came from.',
    'On unformatted printed text that’s not an issue. On a structured UI screenshot, it meant values could be misread or corrupted, because Tesseract had no way to know it was reading a distinct UI element rather than running text.',
  ],
  technologyDecisions: [
    {
      heading: 'Why not fix Tesseract first',
      paragraphs: [
        'The issue wasn’t something a config flag or PSM mode could resolve; it’s architectural. Tesseract is built for bulk, unformatted printed text, not layout-aware document extraction. Getting reliable structured values out of it would have meant writing long, brittle rule-based post-processing to reconstruct structure Tesseract never captured in the first place.',
      ],
    },
    {
      heading: 'Why PaddleOCR',
      paragraphs: [
        'The constraints were fixed: no-cost, local inference, low VRAM usage. Raw text detection quality between Tesseract and PaddleOCR was roughly comparable on this data. The deciding factor was that PaddleOCR is layout-aware: it understands document structure natively, so extracting a labeled value could be done with simple rule-based logic afterward, instead of the long rule-based reconstruction Tesseract required.',
      ],
    },
  ],
  metrics: [
    {
      label: 'Word accuracy (PaddleOCR)',
      value: '91%',
      context:
        'Across 150+ system-monitoring screenshots. No directly comparable Tesseract number exists; its output wasn’t structured enough to measure the same way without first reconstructing layout by hand, which was the problem being solved.',
    },
  ],
  lessonsLearned: [
    'The real lesson was that “which OCR engine is more accurate” was the wrong question. The actual requirement was layout awareness, and once that was the filter, the choice was straightforward. Raw text detection quality between mature engines converges; structure-awareness does not.',
  ],
  relatedResearchSlugs: ['tesseract-to-paddleocr'],
}
