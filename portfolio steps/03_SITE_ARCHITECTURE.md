# 03_SITE_ARCHITECTURE.md

# Site Architecture

This document defines how the entire portfolio is structured.

Architecture is not just about page hierarchy.

It is about how information unfolds.

Every page should answer a different question.

Visitors should naturally progress from curiosity to confidence.

The website should never overwhelm users with information.

Instead, information should be progressively disclosed.

Each page should encourage users to continue exploring.

---

# Information Flow

A visitor should naturally move through the website in this order:

Landing

↓

About

↓

Featured Projects

↓

Project Case Study

↓

Research

↓

Engineering Blog

↓

Resume

↓

Contact

Each page should increase technical depth.

The further a visitor explores,

the more engineering thinking becomes visible.

---

# Primary Navigation

The navigation should remain intentionally minimal.

Required Items:

Home

Projects

Research

About

Resume

Contact

Optional:

Blog

Do not exceed seven navigation items.

Avoid dropdown menus.

---

# Sitemap

/

Home

/about

About

/projects

Project Listing

/projects/orieon

Project Case Study

/projects/vantara

Project Case Study

/projects/gloomdev

Project Case Study

/research

Research Index

/research/[slug]

Research Article

/blog

Engineering Articles

/blog/[slug]

Article

/resume

Interactive Resume

/contact

Contact

/404

Custom Error Page

---

# Homepage Responsibilities

The homepage is not expected to explain everything.

Its only responsibility is to create curiosity.

The homepage should answer:

Who is this person?

What kinds of systems do they build?

Why should I continue scrolling?

Do not explain implementation details here.

Link visitors to deeper pages.

---

# About Page Responsibilities

The About page explains:

Engineering philosophy

Career journey

Interests

Approach to learning

Current focus

Avoid repeating the resume.

Focus on mindset.

---

# Projects Page Responsibilities

The Projects page is an overview.

Every project should include:

Title

One-line summary

Problem statement

Technology preview

Project status

Quick metrics

Cover image

Estimated reading time

Every card should encourage opening the case study.

---

# Project Detail Pages

Every project page follows the same structure.

Hero

↓

Overview

↓

Problem Statement

↓

Requirements

↓

Architecture

↓

Technology Choices

↓

Implementation

↓

Challenges

↓

Failures

↓

Optimizations

↓

Benchmarks

↓

Lessons Learned

↓

Future Improvements

↓

Gallery

↓

Related Projects

↓

Next Project

Visitors should always understand:

Why

How

What

Result

Never jump directly into implementation.

---

# Research Page

Research is different from projects.

Projects solve problems.

Research explores ideas.

Research articles may include:

Experiments

Benchmarks

Comparisons

Model evaluations

Learning notes

Architecture explorations

Failed approaches

Research should feel like an engineering notebook.

---

# Blog

Purpose:

Share engineering knowledge.

Not tutorials.

Write about:

System design

Performance optimization

Lessons from production

Debugging stories

Architecture decisions

Avoid beginner clickbait.

---

# Resume Page

Interactive.

Readable.

Professional.

Sections:

Summary

Experience

Projects

Skills

Education

Publications

Achievements

Download Resume

Avoid excessive animations.

---

# Contact Page

Purpose:

Reduce friction.

Include:

Email

LinkedIn

GitHub

Portfolio links

Availability

Timezone

Short closing message

Avoid unnecessary contact forms if email is sufficient.

---

# Footer

Minimal.

Include:

Navigation

Copyright

GitHub

LinkedIn

Resume

Email

Do not overload the footer.

---

# Reading Flow

Every page should follow the same storytelling pattern.

Context

↓

Problem

↓

Constraints

↓

Decision

↓

Implementation

↓

Result

↓

Reflection

This pattern should remain consistent across all technical content.

---

# Internal Linking

Every project should recommend:

Related research

Related blog posts

Relevant technologies

Other projects

Visitors should never reach a dead end.

---

# Navigation Principles

Users should always know:

Where they are.

Where they came from.

Where they can go next.

Never trap users inside a page.

---

# URL Rules

URLs should remain clean.

Good:

/projects/orieon

/research/rag-pipeline

/blog/building-offline-ai

Avoid:

/project?id=12

/post-final-new-v2

/blog/blogpost

Keep URLs human-readable.

---

# Content Hierarchy

Each page should contain:

One H1

Multiple H2

Optional H3

Avoid skipping heading levels.

Maintain semantic HTML.

---

# Scroll Philosophy

Scrolling should reveal.

Not overwhelm.

Each section should introduce one major idea.

Avoid placing multiple unrelated concepts in the same viewport.

---

# Progressive Disclosure

Show:

Overview

↓

Details

↓

Deep Technical Information

↓

Source Code

↓

Benchmarks

↓

Appendix

Do not expose everything immediately.

Reward curiosity.

---

# Error Pages

404 pages should remain useful.

Provide:

Navigation

Search

Popular Projects

Return Home

Avoid joke-only 404 pages.

---

# Performance Budget

Initial Load

Fast.

Hero visible immediately.

Heavy assets lazy-loaded.

Project media loaded only when needed.

Maintain smooth scrolling throughout.

---

# Accessibility

Every page must support:

Keyboard navigation

Screen readers

Proper landmarks

Focus management

Reduced motion

Readable contrast

---

# Final Principle

Every page should answer one primary question exceptionally well.

Do not create pages that try to explain everything.

Visitors should finish one page wanting to explore the next.

The website should feel like a connected engineering journey rather than a collection of independent pages.