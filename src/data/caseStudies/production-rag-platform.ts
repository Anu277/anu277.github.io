import type { CaseStudy } from '@/types/caseStudy'

export const PRODUCTION_RAG_PLATFORM_CASE_STUDY: CaseStudy = {
  slug: 'production-rag-platform',
  executiveSummary:
    'A conversational retrieval-augmented chatbot built with LangChain and the Gemini API, backing document-grounded question answering for GloomDev.',
  problem: [
    'Users needed a way to ask questions and get answers grounded in specific documents, rather than a general-purpose chatbot with no connection to the underlying source material.',
  ],
  implementation: [
    {
      heading: 'Stack',
      paragraphs: [
        'Built with LangChain for the retrieval-augmented generation pipeline and the Gemini API as the backend LLM, retrieving relevant document context before generating a response so answers stay grounded in the source material.',
      ],
    },
  ],
  lessonsLearned: [
    'Grounding responses in retrieved document context, rather than relying on the model alone, was the difference between a general chatbot and a genuinely useful document-QA tool.',
  ],
}
