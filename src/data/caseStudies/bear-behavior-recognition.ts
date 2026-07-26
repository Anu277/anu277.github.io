import type { CaseStudy } from '@/types/caseStudy'

export const BEAR_BEHAVIOR_RECOGNITION_CASE_STUDY: CaseStudy = {
  slug: 'bear-behavior-recognition',
  executiveSummary:
    'A lightweight attentive probe trained on Meta’s frozen V-JEPA 2 video encoder for 5-class bear-behavior recognition from camera-trap footage, deployed to NVIDIA Jetson edge devices for on-site inference.',
  problem: [
    'Classifying wildlife behavior from video (walking, roaming, playing, and other biologist-defined categories) is a motion problem, not an appearance problem: a frame-based detector can identify that a bear is present, but not what it is doing over time.',
  ],
  technologyDecisions: [
    {
      heading: 'Why V-JEPA, frozen',
      paragraphs: [
        'V-JEPA operates on clips rather than individual frames, which fits a motion and behavior task directly rather than requiring it to be adapted to one. At the time, it was the strongest available option by accuracy among video encoders, and it needs far less labeled data to reach useful downstream performance than options like TimeSformer or VideoMAE: a meaningful advantage for a small, expensive-to-label bear-behavior dataset.',
        'The encoder was used as-is, frozen: no fine-tuning of its weights. It produces embeddings from video clips, and everything downstream is trained on top of those embeddings. For edge deployment, the smaller 80M-parameter V-JEPA variant was used specifically because the model needed to run at the edge.',
      ],
    },
    {
      heading: 'Why an attentive probe, not a linear one',
      paragraphs: [
        'An attentive probe was used rather than a plain linear probe or MLP because attention over the embedding sequence captures more specific signal than a linear layer collapsing everything to a single vector. The probe design itself wasn’t built from scratch. An existing, established attentive-probing pattern for this kind of embedding was used rather than inventing a new architecture.',
      ],
    },
  ],
  implementation: [
    {
      heading: 'From clustering to a supervised probe',
      paragraphs: [
        'The first attempt didn’t train anything: the frozen embeddings were clustered directly, with no labels, to check whether the raw representation already separated behaviors. It produced low accuracy on its own; the embeddings alone weren’t cleanly separating the behavior classes.',
        'The fix was training a probe on the same embeddings in a supervised way, using the actual behavior labels. That’s where the real accuracy improvement came from.',
      ],
    },
  ],
  challenges: [
    'The model can only separate behaviors that are physically distinguishable, not ones that differ by an animal’s underlying intent. Walking and roaming can look nearly identical physically. Two bears play-fighting looks almost the same, physically, as two bears actually fighting, and the dataset had no real fight footage to learn that distinction from even if it existed.',
    'The behavior categories (walking, roaming, playing, and so on) are terms defined by the wildlife biologists labeling the data, not categories chosen by the model or the project. Some of the classification ambiguity is built into the taxonomy itself, not just a limitation of the approach.',
  ],
  lessonsLearned: [
    'Trying the unsupervised route first, before reaching for a supervised probe, was a cheap way to sanity-check whether the frozen encoder’s representation was already doing useful work. It wasn’t, and that result directly motivated training the probe rather than assuming clustering would be enough.',
    'Some classification errors aren’t model failures at all: if the label categories themselves are ambiguous at the physical level, no amount of probe tuning fixes that.',
  ],
  relatedResearchSlugs: ['vjepa-attentive-probe'],
}
