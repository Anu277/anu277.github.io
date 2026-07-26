import type { ResearchSection } from '@/data/research/tesseract-to-paddleocr'

export const LOCAL_VECTOR_SEARCH: ResearchSection[] = [
  {
    heading: 'Question',
    paragraphs: [
      'Orieon needs semantic search over video transcripts: find the moment in a video where something was said or shown, from a natural-language query. The default answer to "how do I do semantic search" is a vector database. Orieon doesn’t use one.',
    ],
  },
  {
    heading: 'Context',
    paragraphs: [
      'Orieon is a fully offline, single-user Windows desktop app. Each user has their own local video library: at most a few thousand transcript chunks per video, not a shared corpus with millions of documents and concurrent readers. Whatever handles retrieval has to ship inside a Windows installer and start up with zero external setup.',
    ],
  },
  {
    heading: 'Alternatives considered',
    paragraphs: [
      'In practice there was only one real alternative implementation, not a shortlist evaluated on paper: an integration with Qdrant, a dedicated vector database run as a local server process. That code still exists in the C++ core (qdrant_upsert / qdrant_search, talking to a local Qdrant instance over HTTP), wired to CLI-only commands. It was never called by the shipped app. It was an early prototype path that never got connected to the product, not a system that was built, used, and then replaced.',
    ],
  },
  {
    heading: 'Decision',
    paragraphs: [
      'Retrieval was built directly into the C++ core instead: no separate server, no extra process to bundle, start, or monitor. Qdrant is a strong fit for multi-user, distributed retrieval at real scale. Orieon is not that system, so running a second server process just to search a few thousand local vectors would have added deployment and operational weight without adding capability the product needed.',
    ],
  },
  {
    heading: 'Implementation',
    paragraphs: [
      'Transcript segments are embedded with a pretrained model (bge-small-en-v1.5, ~33MB, 384-dimensional vectors) exported to ONNX and run through ONNX Runtime. Embeddings and their metadata are written to two flat files on disk (a binary index and a JSON chunk map), loaded back into memory at startup, and searched with cosine similarity plus a partial_sort over the top-k. Retrieval is a single path: embed the query, compare against every stored vector, return the closest matches, filtered by video or time range as needed.',
    ],
  },
  {
    heading: 'Trade-offs',
    paragraphs: [
      'Pros: zero external dependencies, no background service to manage or crash, a simpler installer, and an index that is easy to reason about and debug because it is just two files.',
      'Cons: the similarity scan is O(n) against every stored vector, so it does not scale to a shared corpus of millions of vectors, and there is no sharding or indexing structure (like HNSW) if a future version needs one. For one user’s personal video library, that ceiling was never close to being a real constraint.',
    ],
  },
  {
    heading: 'Benchmarks',
    paragraphs: [
      'Not formally benchmarked yet; this is a first-principles estimate from what the code actually does, not a timed measurement. Each stored vector is 384-dimensional (bge-small-en-v1.5 / all-MiniLM-L6-v2 embeddings). For 18,000 chunks, a full scan is about 18,000 × 384 ≈ 6.9 million multiply-adds for the cosine comparisons, plus an O(n log k) partial_sort to select the top matches. On a modern CPU core, that raw comparison work alone should land in the low single-digit milliseconds; the partial_sort adds well under a millisecond on top. A reasonable expectation for the full similarity scan, once the query is already embedded, is somewhere in the low tens of milliseconds on a modern i5 or i7. The caveat: running the embedding model on the query text itself (separate from the scan) is the more expensive step, likely adding tens of milliseconds by itself. These are derived estimates, not measured numbers; a real timed benchmark would replace this section.',
    ],
  },
  {
    heading: 'Lessons learned',
    paragraphs: [
      'The instinct to reach for a vector database is strong because it is the default answer for "semantic search," but the actual requirement should set the architecture, not the trend. A vector database is a genuinely good fit for multi-user, distributed retrieval systems; Orieon is not one of those systems, so building the index in-process from day one meant less to ship, less to maintain, and one fewer thing that could fail to start.',
    ],
  },
]
