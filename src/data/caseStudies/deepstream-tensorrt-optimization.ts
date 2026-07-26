import type { CaseStudy } from '@/types/caseStudy'

export const DEEPSTREAM_TENSORRT_OPTIMIZATION_CASE_STUDY: CaseStudy = {
  slug: 'deepstream-tensorrt-optimization',
  executiveSummary:
    'Benchmarked a DeepStream 9.0 + TensorRT (FP16) inference pipeline against a PyTorch baseline for a 375.5M-parameter V-JEPA 2 video encoder, measuring latency and GPU memory end to end.',
  problem: [
    'The V-JEPA 2 encoder and probe pipeline needed to run fast enough for practical edge inference, and the team needed a clear picture of where a TensorRT deployment actually won over a PyTorch baseline.',
  ],
  metrics: [
    {
      label: 'Inference latency',
      value: '28.9ms vs 211.9ms',
      context:
        'DeepStream + TensorRT (FP16) vs PyTorch baseline, per 16-frame clip: a 7.2x speedup.',
    },
    {
      label: 'GPU memory',
      value: '39% less',
      context: 'DeepStream + TensorRT (FP16) vs the PyTorch baseline.',
    },
  ],
  implementation: [
    {
      heading: 'ONNX export verification',
      paragraphs: [
        'Verified ONNX-export compatibility across multiple video model architectures (r3d_18, VideoMAE, V-JEPA 2) to guide the team’s implementation choices for the deployment pipeline.',
      ],
    },
  ],
  lessonsLearned: [
    'A 7.2x latency improvement and 39% memory reduction from moving to a TensorRT FP16 pipeline made the case for the deployment path used across the rest of the team’s video-model work.',
  ],
}
