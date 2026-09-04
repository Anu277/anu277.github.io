import { TechBadge } from '@/components/ui/TechBadge'

const TOOLS_TOUCHED = [
  'PyTorch',
  'YOLO',
  'V-JEPA',
  'DINOv2',
  'CLIP',
  'SAM',
  'TensorRT',
  'NVIDIA DeepStream',
  'NVIDIA Triton',
  'ONNX',
  'NVIDIA Jetson',
  'Raspberry Pi',
  'NVDEC',
  'Gemini',
  'LangChain',
  'LangGraph',
  'llama.cpp',
  'whisper.cpp',
  'Tauri',
  'FastAPI',
  'React',
  'Docker',
  'CUDA',
]

export function ToolsTouched() {
  return (
    <div className="flex flex-col gap-8">
      <span className="text-text-muted font-mono text-[11px] tracking-wide uppercase">
        What I&apos;ve touched
      </span>
      <div className="flex flex-wrap gap-2.5">
        {TOOLS_TOUCHED.map((tool) => (
          <TechBadge key={tool} label={tool} />
        ))}
      </div>
    </div>
  )
}
