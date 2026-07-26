import type { CaseStudy } from '@/types/caseStudy'

export const INDUSTRIAL_ROBOT_BEHAVIOR_CLONING_CASE_STUDY: CaseStudy = {
  slug: 'industrial-robot-behavior-cloning',
  executiveSummary:
    'A video-to-motion behavior-cloning prototype in NVIDIA Isaac Sim for an industrial robot arm’s pick-and-place task, built around point tracking, motion tokenization, and forward-dynamics action prediction.',
  problem: [
    'Teaching a robot arm a pick-and-place task from demonstration video, without requiring large volumes of paired robot-specific action data.',
  ],
  implementation: [
    {
      heading: 'Pipeline stages',
      paragraphs: [
        'The pipeline used point tracking to extract motion from demonstration video, a motion tokenizer to encode that motion into a compact representation, and a forward-dynamics model to predict actions from it. Depth estimation and inverse kinematics were used to translate predicted motion onto the robot’s URDF.',
      ],
    },
  ],
  constraints: [
    'Inverse kinematics was substituted for the pipeline’s original inverse-dynamics stage due to data constraints. It was a pragmatic simplification for a pick-and-place task, where precise dynamic and force control matters less than for contact-rich manipulation.',
  ],
  lessonsLearned: [
    'This was a simulation-only prototype in Isaac Sim, used to validate the pipeline’s feasibility before any real-hardware investment. It’s a standard de-risking step given the cost and safety considerations of real-robot experimentation.',
  ],
}
