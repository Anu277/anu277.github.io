# 04_PAGE_BLUEPRINTS.md

# Purpose

This document defines the exact structure, hierarchy, and responsibilities of every page in the portfolio.

It is not a visual design document.

It is not a wireframe.

It is a blueprint describing what each page should communicate, the order in which information should appear, and the intended user experience.

Every page should tell a story.

Every section should have a purpose.

Every interaction should encourage exploration.

---

# Universal Page Structure

Every page should follow this high-level hierarchy.

```
Navbar

↓

Hero

↓

Primary Content

↓

Supporting Sections

↓

Related Content

↓

Call To Action

↓

Footer
```

Every page should maintain consistent spacing, typography, and section rhythm.

---

# HOME PAGE

## Objective

The homepage exists to create curiosity.

It should encourage visitors to explore further rather than explain everything immediately.

Within the first ten seconds, visitors should understand:

- Who you are
- What you build
- Why your work is different
- Where to go next

---

## Section 1 — Hero

Contains:

- Name
- Current Role
- One-line philosophy
- Primary CTA
- Secondary CTA

Example CTAs:

View Projects

Read Research

Download Resume

The hero should immediately establish technical credibility.

Avoid long paragraphs.

---

## Section 2 — Current Focus

Explain what you're currently working on.

Examples:

- Production Computer Vision
- Offline AI Systems
- Retrieval-Augmented Generation
- Agentic Workflows
- Edge AI

This section should evolve over time.

---

## Section 3 — Featured Projects

Display 3–5 projects.

Each project card includes:

- Cover image
- Title
- One-line summary
- Technologies
- Status
- Read case study button

Projects should be ordered by impact, not chronology.

---

## Section 4 — Engineering Principles

Briefly explain how you approach engineering.

Examples:

- Build for production
- Measure before optimizing
- Simplicity over complexity
- Performance first
- Document decisions

Keep this concise.

---

## Section 5 — Selected Research

Highlight ongoing experiments.

Each card should show:

- Research title
- Status
- Topic
- Short description

Purpose:

Demonstrate continuous learning.

---

## Section 6 — Timeline

Instead of listing jobs,

show engineering evolution.

Example:

Web Development

↓

Backend Systems

↓

Computer Vision

↓

Production AI

↓

Generative AI

↓

Agentic AI

---

## Section 7 — Testimonials (Optional)

Only include if genuine.

Never fabricate.

Prefer manager feedback over generic praise.

---

## Section 8 — Contact CTA

Simple closing.

Invite collaboration.

Avoid marketing language.

---

# ABOUT PAGE

## Objective

Introduce the engineer behind the work.

Not the résumé.

Explain:

- Motivation
- Learning process
- Engineering mindset
- Interests
- Long-term goals

---

## Sections

Hero

↓

Journey

↓

Engineering Philosophy

↓

Current Interests

↓

Tools I Enjoy Using

↓

Beyond Engineering

↓

Fun Facts (Optional)

↓

Contact

---

# PROJECTS PAGE

## Objective

Provide an overview of all major projects.

Each project card should include:

- Thumbnail
- Title
- Duration
- Category
- Status
- One-line summary
- Primary technologies
- Read More

Projects should support filtering.

Possible filters:

Computer Vision

Backend

AI

LLMs

Desktop

Research

Robotics

---

# PROJECT DETAIL PAGE

Every project follows exactly the same structure.

Consistency improves readability.

---

## Hero

Project Name

Duration

Role

Tech Stack

GitHub

Demo

Status

---

## Executive Summary

Answer in less than 150 words:

What is the project?

Why was it built?

What makes it interesting?

---

## Problem Statement

Explain:

The problem.

The constraints.

The existing solutions.

Why those solutions were insufficient.

---

## Requirements

Functional requirements.

Non-functional requirements.

Performance goals.

Deployment constraints.

---

## Architecture

Include architecture diagram.

Explain:

Frontend

Backend

Models

Databases

External Services

Communication

Avoid implementation details here.

---

## Technology Decisions

Instead of listing technologies,

explain why each was selected.

Example:

Why React?

Why ONNX Runtime?

Why SQLite?

Why Whisper.cpp?

Why TensorRT?

---

## Implementation

Break implementation into modules.

Explain each independently.

Possible modules:

Authentication

Inference

Retrieval

Embedding

Indexing

Caching

Synchronization

Streaming

---

## Engineering Challenges

Describe genuine engineering problems.

Examples:

Memory limits

Latency

Packaging

Deployment

GPU compatibility

Synchronization

Model size

Networking

---

## Benchmarks

Show measurable performance.

Inference speed

Memory usage

Startup time

Download size

Latency

FPS

Always explain the testing environment.

---

## Lessons Learned

Probably the most important section.

Discuss:

Mistakes

Trade-offs

Future improvements

Unexpected discoveries

---

## Gallery

Screenshots.

Videos.

Architecture.

Performance graphs.

---

## Related Projects

Recommend similar work.

---

## Next Project

Encourage continued exploration.

---

# RESEARCH PAGE

Objective:

Document exploration.

Not polished products.

Each article should include:

Question

Hypothesis

Method

Experiment

Observation

Conclusion

Future Work

Failed ideas should be documented.

---

# BLOG PAGE

Purpose:

Teach through experience.

Write about:

Architecture

Debugging

Optimization

Lessons from production

Model evaluation

Avoid generic tutorials.

---

# RESUME PAGE

Structure:

Summary

↓

Experience

↓

Projects

↓

Skills

↓

Education

↓

Achievements

↓

Download Resume

Interactive without becoming distracting.

---

# CONTACT PAGE

Simple.

Professional.

Include:

Email

LinkedIn

GitHub

Portfolio

Availability

Timezone

Response expectations

---

# FOOTER

Minimal.

Navigation.

Social links.

Copyright.

No unnecessary content.

---

# MOBILE ADAPTATION

Every page should define:

Desktop layout

Tablet layout

Mobile layout

Avoid simply shrinking desktop components.

Redesign layouts where necessary.

---

# COMMON RULES

Every page must answer:

Why does this page exist?

What should the visitor learn?

What should they do next?

No section should exist without a clear purpose.

---

# FINAL PRINCIPLE

Visitors should never feel lost.

Every page should naturally guide them toward another page.

The portfolio should feel like reading a well-written engineering case study, where each chapter builds on the previous one until the visitor understands not only **what** was built, but **how** you think as an engineer.