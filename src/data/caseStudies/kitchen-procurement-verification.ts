import type { CaseStudy } from '@/types/caseStudy'

export const KITCHEN_PROCUREMENT_VERIFICATION_CASE_STUDY: CaseStudy = {
  slug: 'kitchen-procurement-verification',
  executiveSummary:
    'A proof of concept that verifies kitchen deliveries automatically: detecting the delivered item, reading its weight from a digital scale, and matching both against a procurement sheet extracted into structured data.',
  problem: [
    'Verifying a delivery means three things have to line up: which item was delivered, what it actually weighs, and what the procurement sheet said should have been delivered. Checking that by hand, per item, per delivery, doesn’t scale and is easy to get wrong.',
  ],
  implementation: [
    {
      heading: 'Pipeline',
      paragraphs: [
        'The pipeline detects the item, reads the digital scale’s weight display at the same time using a YOLOv8-OBB digit detector, and matches both against the expected item and weight pulled from the procurement sheet. The Gemini API extracts the procurement table (item name, expected weight) into structured JSON, so the comparison logic downstream just checks that JSON against what the camera and scale actually saw.',
        'Item recognition uses one-shot CLIP matching on a Raspberry Pi with a Hailo accelerator: no additional training, matching a photographed item against a reference embedding rather than training a classifier per item. That avoids retraining every time the inventory changes.',
      ],
    },
  ],
  technologyDecisions: [
    {
      heading: 'Why axis-aligned boxes failed on the digit display',
      paragraphs: [
        'Seven-segment digits are thin, open line structures, often packed tightly together on a real scale display. A standard axis-aligned box frames each digit as a simple rectangle, and when digits sit close together, one digit’s box edge bleeds into the next: the right edge of a box around a “1” can overlap the left edge of an adjacent “8.” That bleeding either pulls in neighboring pixels or causes duplicate, overlapping boxes that non-max suppression then has to arbitrate, sometimes dropping a real digit.',
        'YOLOv8-OBB avoids this by isolating the precise oriented polygon of each digit rather than a loose rectangular region. That geometric strictness, even at a 0° rotation, held up noticeably better on tightly packed digit displays than a standard detector.',
      ],
    },
  ],
  metrics: [
    {
      label: 'Digit detection, standard data',
      value: '0.95 precision / 0.95 recall',
      context: 'mAP@50 of 0.96 on standard evaluation data.',
    },
    {
      label: 'Digit detection, in the field',
      value: '81%',
      context:
        'Confirmed cause of the gap: glare and reflections off the scale’s display in real kitchen lighting, not present in the standard training data.',
    },
  ],
  challenges: [
    'CLIP’s item matching held up under clear, good lighting, but its real weakness showed with visually similar items placed side by side. A tomato and an apple, for example, would come back as a near-tie, with confidence splits like 60/40 or 55/45 rather than a clear match. That’s a real limitation of general-purpose visual similarity for fine-grained, visually close item discrimination, not a rare edge case.',
  ],
  lessonsLearned: [
    'The OBB choice paid off because the actual failure mode of standard boxes on this data was understood specifically: digit density and open line structures, not rotation from a tilted camera. Solving for the real, specific cause mattered more than reaching for OBB because it’s generally “more accurate.”',
    'One-shot CLIP matching is a good fit for an inventory that changes often, but it isn’t a substitute for a classifier trained on the specific items being distinguished, especially when two items look visually close.',
  ],
  relatedResearchSlugs: ['obb-digit-recognition'],
}
