import type { ResearchSection } from '@/data/research/tesseract-to-paddleocr'

export const OBB_DIGIT_RECOGNITION: ResearchSection[] = [
  {
    heading: 'Question',
    paragraphs: [
      'Verifying a kitchen delivery means three things have to line up at once: which item was delivered, what it actually weighs on the scale, and what the procurement sheet said should have been delivered. Doing that by hand, per item, per delivery, doesn’t scale and is easy to get wrong.',
    ],
  },
  {
    heading: 'Context',
    paragraphs: [
      'The pipeline detects the item, reads the digital scale’s weight display at the same time, and matches both against the expected item and weight pulled from the procurement sheet. The procurement sheet itself isn’t used as a fixed template. The Gemini API is used specifically to extract the table (item name, expected weight) into structured JSON, so the comparison logic downstream is just checking that JSON against what the camera and scale actually saw.',
    ],
  },
  {
    heading: 'What this is: YOLOv8-OBB detection, not OCR',
    paragraphs: [
      'The digit reader is an object detector, not a text-recognition model: YOLOv8-OBB (oriented bounding box) detects and classifies each digit as an object on the display, the same way a detector would locate and classify any other object in a frame. It doesn’t read the display as text the way an OCR engine would; it finds and identifies each digit individually, with an orientation-aware box around it.',
    ],
  },
  {
    heading: 'Why axis-aligned boxes failed here',
    paragraphs: [
      'Seven-segment digits are thin, open line structures, and on a real scale display they’re often packed tightly together. A standard axis-aligned box frames each digit as a simple rectangle, and when digits sit close together, one digit’s box edge bleeds into the next: the right edge of a box around a "1" can overlap the left edge of an adjacent "8". That bleeding either pulls in background/neighboring pixels or causes duplicate, overlapping boxes that non-max suppression then has to arbitrate, sometimes dropping a real digit in the process.',
      'OBB avoids this by isolating the precise oriented polygon of each digit rather than a loose rectangular region. Even at a 0° rotation, that geometric strictness forces the model to lock onto the actual lit segments of one digit instead of a loose box that can spill into a neighbor. In practice, this held up noticeably better than a standard detector on tightly packed digit displays.',
    ],
  },
  {
    heading: 'The precision/recall gap in the field',
    paragraphs: [
      '0.95 precision/recall on standard data dropped to 81% in real deployment. The confirmed cause is glare and reflections off the scale’s display in actual kitchen lighting conditions, which don’t appear in the training data the model was originally evaluated on.',
    ],
  },
  {
    heading: '"One-shot" CLIP item recognition',
    paragraphs: [
      '"One-shot" here means no additional training: the pretrained CLIP model is used directly for item matching, not fine-tuned or retrained on this specific inventory. That avoids retraining a classifier every time an inventory item changes, at the cost of relying on CLIP’s general-purpose visual similarity rather than a model specifically tuned to this kitchen’s items.',
    ],
  },
  {
    heading: 'What broke',
    paragraphs: [
      'Under clear, good lighting, CLIP’s matching held up fine. The real weakness showed up with visually similar items placed side by side. A tomato and an apple, for example, would come back as a near-tie: confidence splits like 60/40 or 55/45 rather than a clear match. That is a real limitation of general-purpose visual similarity for this kind of fine-grained, visually-close item discrimination, not a rare edge case.',
    ],
  },
  {
    heading: 'Lessons learned',
    paragraphs: [
      'The OBB choice paid off specifically because the actual failure mode of standard boxes on this data was understood: digit density and open line structures, not rotation from a tilted camera. Solving for the real, specific cause was more useful than reaching for OBB because it is generally "more accurate." Separately, one-shot CLIP matching is a good fit for an inventory that changes often, but it is honest to say it is not a substitute for a classifier trained on the specific set of items being distinguished, especially when two items look visually close.',
    ],
  },
]
