import type { ResearchSection } from '@/data/research/tesseract-to-paddleocr'

export const LOCAL_LLM_INFERENCE: ResearchSection[] = [
  {
    heading: 'Question',
    paragraphs: [
      'Orieon needs chat, summarization, and classification over video content without a network connection. That rules out calling a hosted LLM API for those features. The code reflects that constraint directly: every inference path loads a local model file from disk, and there is no cloud API call anywhere in the chat, summarization, or classification code.',
    ],
  },
  {
    heading: 'Context',
    paragraphs: [
      'Two different hardware realities have to work: a user with an NVIDIA GPU, a user with an integrated or non-NVIDIA GPU, and a user with neither. A 1.5B-parameter model has to run acceptably on all three, inside a Windows installer, without the app depending on anything the user has to install separately.',
    ],
  },
  {
    heading: 'Decision',
    paragraphs: [
      'Inference runs through llama.cpp against a single, fixed model: Qwen2.5-1.5B-Instruct, quantized to Q4_K_M (~1.1GB), downloaded encrypted rather than bundled into the installer directly. There is no user-facing model picker; the size and quantization were chosen once as the tradeoff point between capability and something that runs on modest hardware.',
    ],
  },
  {
    heading: 'Implementation',
    paragraphs: [
      'Backend support for CUDA, Vulkan, and CPU is not one binary that detects hardware at runtime. It is three separate build configurations: the build script checks for CUDA first, falls back to Vulkan if CUDA isn’t available, and falls back to CPU-only if neither GPU API is present. Each produces its own build artifact, so the CUDA build and the Vulkan build are genuinely different binaries, not one binary with a runtime switch.',
      'One specific build detail mattered: CUDA architecture targeting had to be pinned to an explicit list of GPU generations rather than a blanket "build for everything" flag, because the CUDA toolkit version in use didn’t support the newest GPU architecture yet. Listing supported architectures explicitly meant release binaries covered the GPU generations actually in the field without waiting on a toolkit upgrade.',
    ],
  },
  {
    heading: 'What broke: reloading the model on every request',
    paragraphs: [
      'The original design spawned a fresh process per chat or summarization request, which meant loading the entire GGUF model from disk into memory every single time. For a 1.5B-parameter model, that load time is real and it was being paid on every request, not once per session.',
      'The fix was a resident worker process: the model loads once into a background process on first use, and stays loaded until the process is killed. Every subsequent request after the first is just a call to an already-warm process, with no reload cost. The same pattern (replace a per-command process spawn with one resident background process) turned out to be the right fix in more than one place in this codebase, not just here.',
    ],
  },
  {
    heading: 'Trade-offs',
    paragraphs: [
      'Pros: works fully offline, degrades gracefully across CUDA, Vulkan, and CPU-only hardware, and a single fixed model keeps the install size and support surface small.',
      'Cons: no user choice of model size or quantization, so there’s no way for a user to trade quality for speed or the reverse. Maintaining three separate build configurations (CUDA, Vulkan, CPU) is more build and release complexity than a single universal binary would be.',
    ],
  },
  {
    heading: 'Benchmarks',
    paragraphs: [
      'The clearest real numbers available are from the transcription pipeline (Whisper), not the LLM specifically, measured as real-time factor (RTF: processing time ÷ audio length, lower is faster) from actual release-build runs. On the large model, CPU RTF was 2.611 and GPU RTF was 0.245, a real measured speedup of about 10.7x. On the small model, CPU RTF was 0.489 and GPU RTF was 0.235, about 2.1x. The gain is larger on the bigger model, which tracks: more compute to parallelize means more room for the GPU path to pull ahead.',
      'For LLM inference specifically, no run in this codebase records a CPU-only measurement against a GPU-accelerated one for the same model and prompt, so there is no defensible CPU-vs-GPU multiplier for the LLM path the way there is for transcription. A number like "5-10x" for local AI inference generally is consistent with the transcription data above, but citing it for LLM inference specifically would be unverified.',
    ],
  },
  {
    heading: 'Lessons learned',
    paragraphs: [
      'The reload-per-request bug was the single biggest fix here, and it was also the most obvious one in hindsight: a resident process that loads once and stays warm is a small change with an outsized effect on perceived responsiveness. On the benchmark side, "it feels 5-10x faster" and "it is measured at 5-10x faster" are different claims, and only one of them survives being asked "on what hardware, on what model, compared to what."',
    ],
  },
]
