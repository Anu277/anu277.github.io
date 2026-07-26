export interface ResearchSection {
  heading: string
  paragraphs: string[]
}

export const TESSERACT_TO_PADDLEOCR: ResearchSection[] = [
  {
    heading: 'Problem',
    paragraphs: [
      'We were extracting data from system-monitoring screenshots: task manager style UIs, with a sidebar and structured panels starting from the top-left of the image. Tesseract has no concept of that structure. It reads the image as a flat stream of text starting at (0,0), with no awareness of layout, panels, or which label belongs to which value.',
      'On a document with unformatted printed text, that is fine. On a UI screenshot, it meant values could come out attached to the wrong label, or a number like a memory reading would get corrupted, because Tesseract had no way to know it was reading a distinct UI element rather than running text.',
    ],
  },
  {
    heading: 'Why not fix Tesseract first',
    paragraphs: [
      'The issue was not something a Tesseract config or PSM mode could fix. It is architectural: Tesseract is built for bulk, unformatted printed text, not layout-aware document extraction. Getting reliable structured values out of it meant writing long, brittle rule-based post-processing to reconstruct structure Tesseract never captured.',
    ],
  },
  {
    heading: 'Why PaddleOCR',
    paragraphs: [
      'The constraints were fixed: no-cost, local inference, low VRAM usage. Raw text detection quality between Tesseract and PaddleOCR was roughly comparable on this data. The deciding factor was that PaddleOCR is layout-aware: it understands document structure natively, so extracting a labeled value could be done with simple rule-based logic afterward, instead of the long rule-based reconstruction Tesseract required.',
    ],
  },
  {
    heading: 'Result',
    paragraphs: [
      'PaddleOCR reached 91% word accuracy across 150+ system-monitoring screenshots. There is no directly comparable Tesseract number here: Tesseract’s output was not structured enough to measure the same way without first reconstructing layout by hand, which was the whole problem being solved.',
    ],
  },
  {
    heading: 'Lessons learned',
    paragraphs: [
      'The real lesson was that "which OCR engine is more accurate" was the wrong question. The actual requirement was layout awareness, and once that was the filter, the choice was straightforward. A lot of OCR migration decisions probably come down to this: raw text detection quality between mature engines converges, but structure-awareness does not.',
    ],
  },
]
