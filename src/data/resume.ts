export interface ResumeExperience {
  company: string
  role: string
  location: string
  period: string
  highlights: string[]
}

export interface ResumeEducation {
  school: string
  degree: string
  period: string
  detail: string
}

export const RESUME_SUMMARY =
  'Machine Learning Engineer focused on computer vision and video understanding. Hands-on with self-supervised video models (V-JEPA), object detection (YOLO), and model deployment via TensorRT and DeepStream, on a solid Python and backend foundation.'

export const RESUME_EXPERIENCE: ResumeExperience[] = [
  {
    company: 'Eizen AI',
    role: 'Machine Learning Engineer — Computer Vision',
    location: 'In-office, Hyderabad · On-site, Vantara, Gujarat',
    period: 'Nov 2025 - Jul 2026',
    highlights: [
      'Trained a lightweight attentive probe on Meta’s frozen V-JEPA 2.1 video encoder for 5-class bear-behavior recognition: 75.5% supervised probe accuracy and 72.6% weighted F1, with 66.9% purity from unsupervised clustering; deployed to NVIDIA Jetson edge devices for on-site inference.',
      'Benchmarked a DeepStream 9.0 + TensorRT (FP16) pipeline against a PyTorch baseline for a 375.5M-parameter V-JEPA 2 encoder: 28.9ms vs 211.9ms inference latency per 16-frame clip (7.2x faster) and 39% less GPU memory.',
      'Developed a kitchen procurement-verification POC: YOLOv8-OBB seven-segment digit recognition (precision 0.95, recall 0.95, mAP@50 0.96) with one-shot Hailo CLIP item recognition on Raspberry Pi, matched against Gemini-extracted procurement sheet weights.',
      'Prototyped a video-to-motion behavior-cloning POC in NVIDIA Isaac Sim (AMPLIFY) for an industrial robot arm’s pick-and-place task.',
      'Improved a leopard-detection model’s accuracy from 83% to 92% via DINO-assisted auto-annotation with human validation sampling.',
      'Automated dataset labeling with a cron-triggered pipeline dispatching edge-device image batches to a DINOv2 + SAM auto-annotation workflow.',
      'Migrated OCR from Tesseract to PaddleOCR for layout-aware UI extraction, achieving 91% word accuracy across 150+ system-monitoring screenshots.',
    ],
  },
  {
    company: 'GLOOMDEV',
    role: 'Web Developer, Intern — Full Stack (Backend Emphasis)',
    location: 'Remote',
    period: 'Jul 2024 - Dec 2024',
    highlights: [
      'Developed gloom-dev.com within the first month, focusing on backend integration and deployment workflows.',
      'Delivered a scalable full-stack e-commerce platform using the MERN stack with secure API and database architecture.',
      'Integrated the Razorpay payment gateway, completing 50+ test transactions in staging.',
      'Built a conversational chatbot using LangChain with the Gemini API as the backend LLM.',
    ],
  },
]

export const RESUME_EDUCATION: ResumeEducation = {
  school: 'Jawaharlal Nehru Technological University Hyderabad',
  degree: 'B.Tech, Computer Science (AI & Machine Learning)',
  period: 'Dec 2021 - Jul 2025',
  detail: 'CGPA: 6.98/10.00',
}

export const RESUME_SKILLS: Record<string, string[]> = {
  Languages: ['Python', 'C++', 'JavaScript', 'SQL', 'TypeScript'],
  'ML & Deep Learning': [
    'PyTorch',
    'scikit-learn',
    'NumPy',
    'pandas',
    'Hugging Face Transformers',
    'Vertex AI',
  ],
  'Computer Vision': [
    'YOLO',
    'OpenCV',
    'MediaPipe',
    'SAM',
    'DINOv2',
    'CLIP',
    'PaddleOCR',
    'V-JEPA',
  ],
  'LLM & GenAI Tools': [
    'Gemini SDK',
    'LangChain',
    'LangGraph',
    'ChromaDB',
    'RAG',
    'llama.cpp',
    'Whisper',
    'whisper.cpp',
  ],
  'Inference & Deployment': [
    'TensorRT',
    'NVIDIA Triton',
    'NVIDIA DeepStream SDK',
    'ONNX',
    'NVDEC',
    'Docker',
    'CUDA',
    'Vulkan',
  ],
  'Simulation & Edge': [
    'NVIDIA Isaac Sim',
    'NVIDIA Jetson',
    'Raspberry Pi',
  ],
  'Backend & Data': [
    'FastAPI',
    'Tauri',
    'Node.js',
    'REST APIs',
    'Kafka',
    'MongoDB',
    'MySQL',
    'PostgreSQL',
    'Redis',
    'GCP Cloud Run',
  ],
  Tools: ['Git', 'Linux'],
}

export const RESUME_ACHIEVEMENTS = [
  '"Exceptional Intern of the Month" during web-development internship at GLOOMDEV.',
  'Led 24 members across 6 groups for the technical execution of the college annual tech fest.',
]
