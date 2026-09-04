import type { Project } from '@/types/project'

/**
 * Case study copy (Problem, Constraints, Architecture, Lessons Learned, etc.)
 * is intentionally not filled in yet; it requires source material only
 * Anurag can provide. Summaries below are grounded in resume + repo research.
 * Company is metadata on each project, not a grouping mechanism.
 */
export const PROJECTS: Project[] = [
  // Professional Work - Eizen AI
  {
    slug: 'bear-behavior-recognition',
    title: 'Bear Behavior Recognition',
    summary:
      'A lightweight attentive probe on a frozen V-JEPA 2 video encoder for 5-class bear-behavior recognition, deployed to edge devices for on-site inference.',
    categories: ['Computer Vision', 'Research'],
    technologies: ['V-JEPA 2', 'PyTorch', 'NVIDIA Jetson'],
    status: 'Shipped',
    duration: 'Nov 2025 - Jul 2026',
    origin: 'Company',
    company: 'Eizen AI',
    location: 'Vantara, Gujarat',
  },
  {
    slug: 'leopard-auto-annotation-pipeline',
    title: 'Leopard Auto-Annotation Pipeline',
    summary:
      'A DINO-assisted auto-annotation workflow with human validation sampling that expanded a leopard-detection dataset and improved model accuracy.',
    categories: ['Computer Vision'],
    technologies: ['DINOv2', 'PyTorch', 'NVIDIA Jetson'],
    status: 'Shipped',
    duration: 'Nov 2025 - Jul 2026',
    origin: 'Company',
    company: 'Eizen AI',
    location: 'Vantara, Gujarat',
  },
  {
    slug: 'kitchen-procurement-verification',
    title: 'Kitchen Procurement Verification',
    summary:
      'A verification pipeline combining seven-segment digit recognition, one-shot item recognition, and LLM-based extraction to flag procurement discrepancies.',
    categories: ['Computer Vision', 'Generative AI'],
    technologies: ['YOLOv8-OBB', 'CLIP', 'Gemini API'],
    status: 'Shipped',
    duration: 'Nov 2025 - Jul 2026',
    origin: 'Company',
    company: 'Eizen AI',
    location: 'Vantara, Gujarat',
  },
  {
    slug: 'industrial-robot-behavior-cloning',
    title: 'Industrial Robot Behavior Cloning',
    summary:
      'A video-to-motion behavior-cloning prototype for an industrial robot arm’s pick-and-place task, combining point tracking, depth estimation, and inverse kinematics.',
    categories: ['Robotics'],
    technologies: ['NVIDIA Isaac Sim', 'CoTracker', 'UniDepth'],
    status: 'Shipped',
    duration: 'Nov 2025 - Jul 2026',
    origin: 'Company',
    company: 'Eizen AI',
    location: 'Hyderabad',
  },
  {
    slug: 'deepstream-tensorrt-optimization',
    title: 'DeepStream & TensorRT Optimization',
    summary:
      'Benchmarked an FP16 inference pipeline against a PyTorch baseline for a large video encoder, measuring latency and GPU memory across the full stack.',
    categories: ['Edge AI', 'AI Infrastructure'],
    technologies: ['DeepStream', 'TensorRT', 'ONNX'],
    status: 'Shipped',
    duration: 'Nov 2025 - Jul 2026',
    origin: 'Company',
    company: 'Eizen AI',
    location: 'Hyderabad',
  },
  {
    slug: 'ocr-platform-migration',
    title: 'OCR Platform Migration',
    summary:
      'Migrated an internal OCR service for layout-aware UI extraction to a new engine, improving word accuracy across hundreds of system-monitoring screenshots.',
    categories: ['AI Infrastructure'],
    technologies: ['PaddleOCR', 'Tesseract'],
    status: 'Shipped',
    duration: 'Nov 2025 - Jul 2026',
    origin: 'Company',
    company: 'Eizen AI',
    location: 'Hyderabad',
  },
  {
    slug: 'dataset-labeling-automation',
    title: 'Dataset Labeling Automation',
    summary:
      'A cron-triggered pipeline that checks edge-device storage on an interval and dispatches image batches into an auto-annotation workflow.',
    categories: ['AI Infrastructure'],
    technologies: ['DINOv2', 'SAM'],
    status: 'Shipped',
    duration: 'Nov 2025 - Jul 2026',
    origin: 'Company',
    company: 'Eizen AI',
    location: 'Hyderabad',
  },
  {
    slug: 'ai-annotation-platform',
    title: 'AI Annotation Platform',
    summary:
      'A semi-automatic annotation tool combining model-assisted pre-labeling with manual correction, multi-user project allocation, and batched export.',
    categories: ['AI Infrastructure', 'Backend'],
    technologies: ['Python'],
    status: 'Shipped',
    duration: 'Nov 2025 - Jul 2026',
    origin: 'Company',
    company: 'Eizen AI',
    location: 'Hyderabad',
  },
  // Professional Work - GloomDev
  {
    slug: 'production-rag-platform',
    title: 'Production RAG Platform',
    summary:
      'A conversational retrieval-augmented chatbot built with LangChain and the Gemini API, backing document-grounded question answering.',
    categories: ['Generative AI', 'Backend'],
    technologies: ['LangChain', 'Gemini API'],
    status: 'Shipped',
    duration: 'Jul 2024 - Dec 2024',
    origin: 'Company',
    company: 'GloomDev',
  },
  {
    slug: 'backend-infrastructure',
    title: 'Backend Infrastructure',
    summary:
      'Backend integration and deployment workflows for a production e-commerce platform, including payment gateway integration.',
    categories: ['Backend'],
    technologies: ['MERN', 'Razorpay'],
    status: 'Shipped',
    duration: 'Jul 2024 - Dec 2024',
    origin: 'Company',
    company: 'GloomDev',
  },
  // Personal Projects
  {
    slug: 'paper-tail',
    title: 'Paper Tail: Agentic RAG for Scientific Papers',
    summary:
      'An agentic RAG system that plans searches, picks a retrieval strategy per question, evaluates evidence, follows citations across papers, and verifies claims before answering, rather than doing one-shot top-K retrieval.',
    categories: ['Generative AI', 'Backend'],
    technologies: ['LangGraph', 'FastAPI', 'React', 'GROBID'],
    status: 'Shipped',
    duration: '2026',
    origin: 'Personal',
    links: {
      repo: 'https://github.com/Anu277/paper-tail',
    },
  },
  {
    slug: 'faqit',
    title: 'Faqit: AI Interview Drills',
    summary:
      'An Android app that generates AI-engineering interview questions on demand via Claude, Gemini, or Groq, using a per-topic coverage ledger and fingerprint dedup to keep the request prompt a constant size instead of resending question history.',
    categories: ['Generative AI'],
    technologies: ['Kotlin', 'Android', 'Claude API', 'Gemini API', 'Groq API'],
    status: 'Shipped',
    duration: '2026',
    origin: 'Personal',
  },
  {
    slug: 'orieon',
    title: 'Orieon: Offline AI Video Player',
    summary:
      'A commercial offline AI desktop video player for Windows: automatic transcription, translation, semantic search, and AI chat, with no cloud dependency.',
    categories: ['Desktop', 'Generative AI'],
    technologies: [
      'Tauri',
      'React',
      'C++',
      'Rust',
      'whisper.cpp',
      'llama.cpp',
      'FastAPI',
      'PostgreSQL',
    ],
    status: 'Shipped',
    duration: '2025',
    origin: 'Personal',
    featured: true,
    links: {
      repo: 'https://github.com/anu277/orieon-frontend',
    },
  },
  {
    slug: 'face-sorter',
    title: 'Face Sorter: Photo Organizer',
    summary:
      'An Android app that groups photos by face locally on-device, storing only encrypted metadata rather than raw images.',
    categories: ['Computer Vision'],
    technologies: ['Python', 'Android'],
    status: 'Shipped',
    duration: '2025',
    origin: 'Personal',
    links: {
      repo: 'https://github.com/anu277/face-sorter',
    },
  },
  {
    slug: 'hand-sign-recognition',
    title: 'Hand Sign Recognition',
    summary:
      'A real-time hand-gesture recognition system using MediaPipe landmark extraction and a Random Forest classifier, requiring no GPU.',
    categories: ['Computer Vision'],
    technologies: ['Python', 'MediaPipe', 'OpenCV', 'scikit-learn'],
    status: 'Shipped',
    duration: '2024',
    origin: 'Personal',
    links: {
      repo: 'https://github.com/anu277/Hand-sign-recognition-ml',
    },
  },
  {
    slug: 'music-recommendation-system',
    title: 'Music Recommendation System',
    summary:
      'A content-based music recommender built around a precomputed track-similarity model, served through a lightweight Python app.',
    categories: ['Generative AI', 'Backend'],
    technologies: ['Python', 'Jupyter', 'scikit-learn'],
    status: 'Shipped',
    duration: '2024',
    origin: 'Personal',
    links: {
      repo: 'https://github.com/anu277/Music-Recommendation-System',
    },
  },
]
