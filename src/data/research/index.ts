import type { ResearchNote } from '@/types/research'
import type { ResearchSection } from '@/data/research/tesseract-to-paddleocr'
import { TESSERACT_TO_PADDLEOCR } from '@/data/research/tesseract-to-paddleocr'
import { LOCAL_VECTOR_SEARCH } from '@/data/research/local-vector-search'
import { LOCAL_LLM_INFERENCE } from '@/data/research/local-llm-inference'
import { VJEPA_ATTENTIVE_PROBE } from '@/data/research/vjepa-attentive-probe'
import { OBB_DIGIT_RECOGNITION } from '@/data/research/obb-digit-recognition'

export const RESEARCH_NOTES: ResearchNote[] = [
  {
    slug: 'tesseract-to-paddleocr',
    title: 'Why I Switched from Tesseract to PaddleOCR',
    date: 'Jul 2026',
    relatedProjectSlug: 'ocr-platform-migration',
    summary:
      'Tesseract reads a screenshot as a flat stream of pixel-positioned text, with no notion of the UI layout it came from. That was the real problem, not accuracy.',
    readingTime: '4 min',
  },
  {
    slug: 'local-vector-search',
    title: 'Why Orieon Doesn’t Use a Vector Database',
    date: 'Jul 2026',
    relatedProjectSlug: 'orieon',
    summary:
      'The default answer for semantic search is a vector database. For a fully offline, single-user desktop app, that default is the wrong shape.',
    readingTime: '5 min',
  },
  {
    slug: 'local-llm-inference',
    title: 'Making Local LLMs Feel Instant on Consumer Hardware',
    date: 'Jul 2026',
    relatedProjectSlug: 'orieon',
    summary:
      'Three separate build configurations, one resident process instead of a reload on every request, and an honest look at which speedup numbers are actually measured.',
    readingTime: '6 min',
  },
  {
    slug: 'vjepa-attentive-probe',
    title: 'Training an Attentive Probe on Frozen V-JEPA Features',
    date: 'Jul 2026',
    relatedProjectSlug: 'bear-behavior-recognition',
    summary:
      'Clustering the raw embeddings first, before training anything, is what showed a supervised probe was actually needed, not just a formality.',
    readingTime: '4 min',
  },
  {
    slug: 'obb-digit-recognition',
    title:
      'Why Axis-Aligned Boxes Failed on Seven-Segment Displays (YOLOv8-OBB)',
    date: 'Jul 2026',
    relatedProjectSlug: 'kitchen-procurement-verification',
    summary:
      'The real problem wasn’t camera tilt. It was digit boxes bleeding into their neighbors on a tightly packed seven-segment display.',
    readingTime: '4 min',
  },
]

export const RESEARCH_NOTE_BODIES: Record<string, ResearchSection[]> = {
  'tesseract-to-paddleocr': TESSERACT_TO_PADDLEOCR,
  'local-vector-search': LOCAL_VECTOR_SEARCH,
  'local-llm-inference': LOCAL_LLM_INFERENCE,
  'vjepa-attentive-probe': VJEPA_ATTENTIVE_PROBE,
  'obb-digit-recognition': OBB_DIGIT_RECOGNITION,
}
