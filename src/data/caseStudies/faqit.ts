import type { CaseStudy } from '@/types/caseStudy'

export const FAQIT_CASE_STUDY: CaseStudy = {
  slug: 'faqit',
  executiveSummary:
    'An Android app that generates AI-engineering interview questions on demand via Claude, Gemini, or Groq, using a per-topic coverage ledger and fingerprint dedup to keep the request prompt a constant size instead of resending question history.',
  problem: [
    'Generating quiz questions from an LLM without repeats usually means sending every previously-asked question back with each new request so the model knows what to avoid. That prompt grows without bound: rising token cost, eventual context limits, and worse instruction-following as the growing list buries the actual task.',
  ],
  technologyDecisions: [
    {
      heading: 'Coordinate-based diversity instead of a growing history',
      paragraphs: [
        'Diversity comes from where the model is pointed, not from telling it what to avoid. A taxonomy of 11 tracks by roughly 15 subtopics by 3 tiers, about 500 addressable cells, is paired with an on-device coverage ledger that counts questions per cell; each request picks the least-covered cell and sends only that one coordinate. The request body is the same size on day one and on day four hundred.',
        'Track priority is encoded as a weight and divided into coverage, so high-priority areas — LLM engineering, RAG, agents, evaluation, AI system design — surface roughly 1.5x as often as awareness-level topics before cell selection moves on.',
      ],
    },
    {
      heading: 'Three providers, one JSON contract, automatic failover',
      paragraphs: [
        'Claude, Gemini, and Groq are each asked for strict JSON, but each enforces that differently: Claude via output_config.format with a JSON schema, Gemini via responseMimeType plus a responseSchema, Groq via json_schema for the gpt-oss model family and json_object with an explicit shape block for everything else. The provider chain returns the primary provider first, then every other configured provider; a rate limit, outage, rejected key, or unusable response rolls over to the next one in the chain, and a run only fails when every configured provider fails.',
        'A short "reply OK" test request per provider surfaces a bad key, wrong model name, or rate limit in Settings before a real run depends on it, with the actual failure reason shown rather than a generic error.',
      ],
    },
  ],
  implementation: [
    {
      heading: 'Batching and dedup',
      paragraphs: [
        'Questions are generated eight at a time and buffered locally rather than one at a time, and every question is reduced to a normalized SHA-256 fingerprint so duplicates are dropped at zero additional token cost. Answered questions can be dropped and blocklisted by fingerprint from the review screen, so a wrong or ambiguous question does not resurface.',
      ],
    },
  ],
  challenges: [
    'Confirming provider behavior against current docs rather than assumptions caught real drift: Gemini returns a 400 with API_KEY_INVALID for a bad key rather than a 401, so error handling had to inspect the response body, not just the status code, for that case to read correctly. A since-deprecated Groq model was also caught and removed from the preset list during the same pass.',
    "Shipped with no backend: the user's own API key lives in on-device storage and is sent only to the selected provider. That's an acceptable tradeoff for a personal tool used by one person, and would not be for anything distributed to other people's devices.",
  ],
  lessonsLearned: [
    'A constant-size prompt — one coordinate, not a growing exclusion list — scales to sessions the naive design could not: the request is the same size and cost on day four hundred as day one.',
    'Verifying third-party API behavior against current provider documentation surfaced real, non-obvious bugs, like an error code that did not match the documented convention, that testing only the happy path would have missed.',
  ],
}
