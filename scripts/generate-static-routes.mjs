import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { join } from 'node:path'

const origin = 'https://anu277.github.io'
const routes = [
  ['about', 'About Anurag Bheemani | AI Engineer', 'AI Engineer building reliable products from research, models, and real-world deployment constraints.'],
  ['projects', 'AI Engineering Projects | Anurag Bheemani', 'Production AI systems and case studies across generative AI, local inference, computer vision, robotics, and edge deployment.'],
  ['research', 'AI Engineering Research Notes | Anurag Bheemani', 'Technical notes on AI architecture, inference, retrieval, OCR, evaluation, and deployment trade-offs.'],
  ['resume', 'Resume | Anurag Bheemani, AI Engineer', 'Experience, skills, education, and achievements of AI Engineer Anurag Bheemani.'],
  ['contact', 'Contact Anurag Bheemani | AI Engineer', 'Contact Anurag Bheemani about AI engineering roles and opportunities.'],
]

const projectSlugs = [
  'bear-behavior-recognition', 'leopard-auto-annotation-pipeline', 'kitchen-procurement-verification',
  'industrial-robot-behavior-cloning', 'deepstream-tensorrt-optimization', 'ocr-platform-migration',
  'dataset-labeling-automation', 'ai-annotation-platform', 'production-rag-platform',
  'backend-infrastructure', 'paper-tail', 'faqit', 'orieon', 'face-sorter',
  'hand-sign-recognition', 'music-recommendation-system',
]
const researchSlugs = ['tesseract-to-paddleocr', 'local-vector-search', 'local-llm-inference', 'vjepa-attentive-probe', 'obb-digit-recognition']
const titleCase = (slug) => slug.split('-').map((word) => word === 'ai' ? 'AI' : word.charAt(0).toUpperCase() + word.slice(1)).join(' ')

for (const slug of projectSlugs) routes.push([`projects/${slug}`, `${titleCase(slug)} | AI Engineering Case Study`, 'An AI engineering case study by Anurag Bheemani covering the problem, constraints, implementation decisions, and results.'])
for (const slug of researchSlugs) routes.push([`research/${slug}`, `${titleCase(slug)} | AI Engineering Note`, 'A technical AI engineering note by Anurag Bheemani covering implementation decisions, experiments, and practical trade-offs.'])

const template = await readFile('dist/index.html', 'utf8')
for (const [route, title, description] of routes) {
  const url = `${origin}/${route}`
  const html = template
    .replace(/<title>.*?<\/title>/, `<title>${title}</title>`)
    .replace(/<meta\s+name="description"[\s\S]*?\/\s*>/, `<meta name="description" content="${description}" />`)
    .replace(/(<link rel="canonical" href=").*?("\s*\/?>)/, `$1${url}$2`)
    .replace(/(<meta property="og:url" content=").*?("\s*\/?>)/, `$1${url}$2`)
    .replace(/(<meta property="og:title" content=").*?("\s*\/?>)/, `$1${title}$2`)
    .replace(/(<meta property="og:description" content=").*?("\s*\/?>)/, `$1${description}$2`)
    .replace(/(<meta name="twitter:title" content=").*?("\s*\/?>)/, `$1${title}$2`)
    .replace(/(<meta name="twitter:description" content=").*?("\s*\/?>)/, `$1${description}$2`)
  const directory = join('dist', route)
  await mkdir(directory, { recursive: true })
  await writeFile(join(directory, 'index.html'), html)
}

console.log(`Generated ${routes.length} SEO route entry files.`)
