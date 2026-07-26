import type { CaseStudy } from '@/types/caseStudy'

export const HAND_SIGN_RECOGNITION_CASE_STUDY: CaseStudy = {
  slug: 'hand-sign-recognition',
  executiveSummary:
    'A real-time hand-gesture recognition system using MediaPipe landmark extraction and a Random Forest classifier, running live on a standard webcam with no GPU required.',
  problem: [
    'Recognizing hand gestures in real time without requiring specialized hardware, so it can run on a standard webcam and CPU.',
  ],
  implementation: [
    {
      heading: 'Approach',
      paragraphs: [
        'MediaPipe extracts 21 hand landmarks per frame, which are normalized into feature vectors and classified by a Random Forest: a lightweight, classical ML pipeline rather than a deep model, chosen so it runs live with low latency on ordinary hardware.',
      ],
    },
  ],
  metrics: [
    {
      label: 'Accuracy',
      value: '~86%',
      context: 'Live on a standard webcam, with low, interactive latency, no GPU.',
    },
  ],
  lessonsLearned: [
    'A classical ML classifier on top of well-chosen features (hand landmarks, not raw pixels) can match the responsiveness a real-time interactive use case needs without deep-model overhead.',
  ],
}
