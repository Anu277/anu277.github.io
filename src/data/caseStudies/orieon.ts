import type { CaseStudy } from '@/types/caseStudy'

export const ORIEON_CASE_STUDY: CaseStudy = {
  slug: 'orieon',
  executiveSummary:
    'Orieon is a commercial offline AI desktop video player for Windows. It runs automatic transcription, translation across 14+ languages, semantic search, AI chat, and document analysis entirely on-device, with no cloud dependency for inference. Built with Tauri, React, C++, and Rust.',
  problem: [
    'Most AI video tools depend on a network connection: video and transcripts are sent to a server, processed, and results come back over an API call. That model breaks down for anyone who needs to work with video offline, or who doesn’t want their content leaving their machine.',
    'Orieon addresses that directly: transcription, translation, semantic search, and chat all run locally, using local model inference instead of a cloud API.',
  ],
  requirements: [
    'Fully offline inference for transcription, translation, semantic search, and chat',
    'Windows desktop installer with automatic model management',
    'GPU acceleration where available (CUDA, Vulkan), CPU fallback where not',
    'Commercial licensing and payment processing (Razorpay and Paddle)',
  ],
  constraints: [
    'Single-user, single-machine deployment: no server infrastructure to lean on for retrieval or inference at run time',
    'Model files are large; they can’t simply be bundled uncompressed into the installer',
    'Hardware varies by user: NVIDIA GPU, non-NVIDIA GPU, or CPU-only, and the app has to work reasonably on all three',
  ],
  technologyDecisions: [
    {
      heading: 'Why a custom C++ vector index instead of a vector database',
      paragraphs: [
        'The default answer for semantic search is a vector database. For an offline, single-user app, that default is the wrong shape: a vector database is a separate server process, with its own binary, port, and lifecycle to bundle inside a Windows installer. That is the right tool for a shared corpus with millions of documents and concurrent readers, not for one person’s local video library.',
        'An earlier Qdrant integration exists in the codebase but was never wired into the shipped app; it was an early prototype path that never got connected to the product, not a system that was built, used, and then replaced. The shipped path embeds transcript segments with a pretrained ONNX model and searches them with an in-process cosine-similarity index over flat files. No server, no extra process to manage.',
      ],
    },
    {
      heading: 'Why three separate builds instead of one binary',
      paragraphs: [
        'Local LLM inference runs through llama.cpp against a single fixed model (Qwen2.5-1.5B-Instruct, Q4_K_M quantization). CUDA, Vulkan, and CPU support aren’t handled by one binary detecting hardware at runtime: they’re three separate build configurations, each producing its own installer variant, selected by checking for CUDA first, falling back to Vulkan, then CPU-only.',
        'CUDA architecture targeting had to be pinned to an explicit list of GPU generations rather than a blanket build-for-everything flag, because the CUDA toolkit version in use didn’t yet support the newest architecture. Listing supported architectures explicitly meant release binaries covered real hardware in the field without waiting on a toolkit upgrade.',
      ],
    },
  ],
  implementation: [
    {
      heading: 'Retrieval',
      paragraphs: [
        'Transcript segments are embedded with bge-small-en-v1.5 (384-dimensional, exported to ONNX, ~33MB) and run through ONNX Runtime. Embeddings and metadata are written to two flat files, loaded into memory, and searched with cosine similarity plus a partial_sort for top-k, filtered by video or time range as needed.',
      ],
    },
    {
      heading: 'LLM inference',
      paragraphs: [
        'The original design spawned a fresh process per chat or summarization request, reloading the entire GGUF model from disk every time. For a 1.5B-parameter model, that load time was real and was being paid on every request. The fix was a resident worker process: the model loads once on first use and stays warm, so every request after the first is just a call to an already-loaded process.',
      ],
    },
    {
      heading: 'Licensing and distribution',
      paragraphs: [
        'Backend built with FastAPI, PostgreSQL, and Google Cloud Run, handling authentication, licensing, model delivery, and signature-verified webhooks. Model assets are distributed encrypted (GGUF/ONNX), decrypted in memory, with HMAC-signed licensing and hardware fingerprinting checked across JavaScript, Rust, and C++.',
      ],
    },
  ],
  metrics: [
    {
      label: 'Transcription speedup (large model)',
      value: '10.7x',
      context:
        'GPU vs CPU real-time factor on a release build: 2.611 (CPU) vs 0.245 (GPU). Measured, not estimated.',
    },
    {
      label: 'Transcription speedup (small model)',
      value: '2.1x',
      context:
        'GPU vs CPU real-time factor on a release build: 0.489 (CPU) vs 0.235 (GPU).',
    },
  ],
  challenges: [
    'Getting semantic search fast enough without a server process meant building the index directly into the C++ core rather than reaching for the default vector-database answer.',
    'LLM responsiveness was bottlenecked by reloading the model on every request; fixing it required moving to a resident background process instead of a per-request spawn.',
    'Shipping GPU acceleration safely across unknown user hardware meant maintaining three separate build variants rather than one binary, and pinning CUDA architectures explicitly rather than trusting a blanket flag.',
  ],
  lessonsLearned: [
    'The instinct to reach for a vector database is strong because it’s the default answer for “semantic search,” but the actual requirement should set the architecture, not the trend. A single offline user with a bounded dataset doesn’t have the problem a vector database solves.',
    'The reload-per-request bug was the single biggest fix in the LLM path, and the most obvious one in hindsight: a resident process that loads once and stays warm has an outsized effect on perceived responsiveness for a small change.',
    '“It feels faster” and “it is measured faster” are different claims. Only the transcription pipeline has a real measured GPU-vs-CPU comparison; the LLM path does not, and that gap is worth stating plainly rather than borrowing a number from a different part of the system.',
  ],
  relatedResearchSlugs: ['local-vector-search', 'local-llm-inference'],
}
