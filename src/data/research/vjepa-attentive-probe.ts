import type { ResearchSection } from '@/data/research/tesseract-to-paddleocr'

export const VJEPA_ATTENTIVE_PROBE: ResearchSection[] = [
  {
    heading: 'Question',
    paragraphs: [
      'Classifying bear behavior from camera-trap video into a small set of biologist-defined categories (things like walking, roaming, playing, foraging) is fundamentally a motion problem, not an appearance problem. A detector like YOLO is rule-based on what an object looks like in a single frame. Behavior is what something does over time, so the model needs to reason over a clip, not a frame.',
    ],
  },
  {
    heading: 'Why V-JEPA, frozen',
    paragraphs: [
      'V-JEPA operates on clips, not individual frames, which fits a motion/behavior task directly rather than needing to be adapted to one. At the time, it was the strongest available option by accuracy among video encoders, and it needs far less labeled data to reach useful downstream performance than encoder options like TimeSformer or VideoMAE, which matters a lot for a small, expensive-to-label bear-behavior dataset.',
      'The encoder itself was used as-is, frozen: no fine-tuning of its weights. It produces embeddings from video clips, and those embeddings are what everything downstream is trained on. For edge deployment, the smaller 80M-parameter V-JEPA variant was used rather than the full-size model.',
    ],
  },
  {
    heading: 'From clustering to a supervised probe',
    paragraphs: [
      'The first attempt didn’t train anything: the frozen embeddings were clustered directly, with no labels, to see whether the raw representation already separated behaviors. That produced low accuracy on its own; the embeddings alone weren’t cleanly separating the behavior classes.',
      'The fix was training a probe on top of those same embeddings in a supervised way, using the actual behavior labels. That is where the real accuracy improvement came from. An attentive probe was used rather than a plain linear probe or MLP, because attention over the embedding sequence picks up more specific signal than a linear layer collapsing everything to one vector. The attentive probe design itself wasn’t built from scratch; an existing, established attentive-probing approach for this kind of embedding was used rather than inventing a new probe architecture.',
    ],
  },
  {
    heading: 'Deployment',
    paragraphs: [
      'This pipeline does not use TensorRT; that is a separate piece of work on a different project. Here, the constraint was simpler: use the smaller 80M-parameter V-JEPA encoder specifically because the model needed to run at the edge.',
    ],
  },
  {
    heading: 'Failure cases',
    paragraphs: [
      'The clearest limitation is that the model can only separate behaviors that are physically distinguishable, not ones that differ by an animal’s underlying intent. Walking and roaming can look nearly identical physically, so they are hard to tell apart. Two bears play-fighting looks almost the same, physically, as two bears actually fighting, and the dataset had no real fight footage to learn that distinction from even if it existed. Worth noting: the behavior categories themselves (walking, roaming, playing, and so on) are terms defined by the wildlife biologists labeling the data, not categories the model or the project chose, so some of that ambiguity is built into the taxonomy itself, not just a limitation of the model.',
    ],
  },
  {
    heading: 'Lessons learned',
    paragraphs: [
      'Trying the unsupervised route first (cluster the raw embeddings, see what falls out) before reaching for a supervised probe was a useful, cheap way to sanity-check whether the frozen encoder’s representation was already doing useful work on its own. It wasn’t, and that result is exactly what motivated training the probe rather than assuming clustering would be enough. It’s also a reminder that some classification errors aren’t model failures at all: if the label categories themselves are ambiguous at the physical level (play vs. fight), no amount of probe tuning fixes that.',
    ],
  },
]
