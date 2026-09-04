import type { CaseStudy } from '@/types/caseStudy'

export const PAPER_TAIL_CASE_STUDY: CaseStudy = {
  slug: 'paper-tail',
  executiveSummary:
    'An agentic RAG system that researches scientific papers rather than doing one-shot top-K retrieval: it plans searches, picks a retrieval method per question, evaluates evidence, detects contradictions between papers, follows citations when it needs more context, and verifies every claim before writing an answer.',
  problem: [
    'Most RAG systems do one-shot top-K retrieval: embed the question, pull back the nearest chunks, hand them to the model. That is a poor fit for a research question, where the right retrieval method depends on the question itself (semantic similarity, exact keyword match, or a metadata filter), a single paper is rarely enough context, and nothing checks whether the final answer is actually backed by what was retrieved.',
  ],
  requirements: [
    'Plan searches and choose a retrieval method per question — semantic, keyword, or metadata filter — instead of one fixed retrieval path',
    'Evaluate retrieved evidence for relevance, source reliability, and conflicts between papers before deciding there is enough to answer',
    "Follow a paper's own citations to pull in more context when the current evidence is insufficient",
    'Verify every claim in the answer against retrieved evidence, and grow the paper library on demand from a typed topic via live arXiv ingestion',
  ],
  constraints: [
    'PDF structure — sections, references, citation context — has to come from GROBID, a separately running Docker service, rather than a bundled parsing library, so ingestion cannot proceed until it is up and its model has finished loading',
    "OpenAlex's anonymous citation-resolution tier is a hard ~100 requests/day quota, not a retryable rate limit; a real API key is needed to raise that to 10,000/day for any non-trivial ingestion batch",
  ],
  technologyDecisions: [
    {
      heading: 'Separating the agent from the retrieval tools',
      paragraphs: [
        'The research agent, built on LangGraph, owns planning and the next-action decision; retrieval, evidence evaluation, and answer composition are tools it calls rather than fixed steps in a pipeline. A retrieval router — vector search, BM25 keyword search, or a metadata filter, fused and reranked into one evidence packet — gets reused regardless of what the agent decides to do next, whether that is revising a query, checking a citation, or writing the final answer.',
        'A persistent research-state object (plan, search log, claims, evidence, gaps and conflicts, source provenance) is what lets the agent make an informed "enough and verified?" decision at each step, instead of just accumulating chunks and stopping after a fixed number of retrieval calls.',
      ],
    },
    {
      heading: 'Why GROBID instead of a bundled PDF parser',
      paragraphs: [
        "A bundled PDF-text library gets raw text; GROBID gets structure — sections, references, citation context — which is what the agent actually needs to follow a paper's citations or know which section a claim came from. That structure comes at the cost of a separate Docker service that has to be up, with its model loaded, before any paper can be ingested.",
      ],
    },
  ],
  implementation: [
    {
      heading: 'Ingestion',
      paragraphs: [
        'Typing a topic triggers a live pipeline: arXiv search, download, GROBID parsing, chunking, embedding with a local BAAI/bge-m3 model (no API key needed, downloaded once via Hugging Face), indexing, and citation resolution against OpenAlex, all visible in the UI as it runs rather than as a black-box import step.',
      ],
    },
    {
      heading: 'Answering with a visible trace',
      paragraphs: [
        "Every answer ships with the real step-by-step agent trace behind it — what it searched, what it found, whether it followed a citation, how it verified its own claims — rather than just the final text. Citations in the answer are clickable pills that open the source PDF in a side panel, so a claim can be checked against the actual paper it came from.",
      ],
    },
  ],
  challenges: [
    'Keeping retrieval from becoming a single fixed step: the router needed to support the agent picking semantic, keyword, or metadata-filter search per sub-question, and revising that choice based on what evaluating the returned evidence turned up.',
    "Making the frontend useful without a backend running, for reviewing the interface — solved with a self-contained demo mode using scripted data when VITE_AGENT_API_URL isn't set, rather than requiring the full backend just to look at the UI.",
  ],
  lessonsLearned: [
    "Treating retrieval as a tool the agent calls, rather than a mandatory first pipeline stage, is what makes per-question strategy selection possible — a fixed retrieve-then-generate pipeline can't make that choice.",
    'A persistent research-state object turns "has the agent retrieved enough chunks" into "has the agent verified enough evidence" — the difference between counting retrievals and actually evaluating them.',
  ],
}
