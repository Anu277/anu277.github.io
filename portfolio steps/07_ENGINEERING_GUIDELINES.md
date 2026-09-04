# 07_IMPLEMENTATION_RULES.md

# Purpose

This document defines the engineering standards for implementing the portfolio.

The goal is not simply to make the website functional.

The goal is to create a maintainable, scalable, performant, and production-quality codebase that reflects good software engineering practices.

Every line of code should be easy to understand, easy to modify, and easy to remove.

The implementation should prioritize clarity over cleverness.

---

# Core Engineering Principles

Every implementation decision should follow these principles:

- Simplicity over cleverness.
- Readability over brevity.
- Composition over inheritance.
- Reusability over duplication.
- Explicitness over magic.
- Performance without sacrificing maintainability.

If two solutions solve the same problem, choose the one that is easier to understand six months later.

---

# Folder Structure

The project should follow a predictable and scalable structure.

```
src/

    app/

    components/

        ui/

        layout/

        navigation/

        sections/

        cards/

        project/

        research/

        animations/

    pages/

    hooks/

    lib/

    services/

    data/

    assets/

    constants/

    styles/

    types/

    utils/

    config/
```

Each directory should have a single responsibility.

Avoid dumping unrelated files into a shared folder.

---

# Naming Conventions

Use descriptive names.

Good examples:

```
ProjectCard

ArchitectureViewer

HeroSection

BenchmarkChart

ProjectTimeline

AnimatedContainer
```

Avoid vague names.

```
Box

Widget

Helper

Thing

Data

Utils2
```

Names should communicate intent.

---

# File Naming

Components:

```
PascalCase.tsx
```

Hooks:

```
useSomething.ts
```

Utilities:

```
camelCase.ts
```

Constants:

```
UPPER_CASE.ts
```

Configuration:

```
config.ts
```

Never mix naming conventions.

---

# Component Rules

A component should do one thing well.

Avoid components larger than roughly 250–300 lines unless complexity is justified.

If a component becomes difficult to understand, split it into smaller composable pieces.

Do not create components simply because multiple elements appear together once.

Extract components only when reuse or readability improves.

---

# Props

Props should be explicit.

Prefer:

```
title

description

image

status
```

Avoid generic objects passed everywhere.

Prefer strong TypeScript interfaces.

Never use `any`.

---

# State Management

Use local state first.

If state is shared across multiple unrelated components,

consider Zustand.

Do not introduce global state without a clear need.

Ask:

Can this remain local?

If yes,

keep it local.

---

# Hooks

Create custom hooks only when logic is reused.

Examples:

```
useScrollProgress

useIntersectionObserver

useMediaQuery

useReducedMotion

useWindowSize
```

Avoid creating hooks that merely wrap a single line of code.

---

# Utility Functions

Utility functions should be:

Pure.

Predictable.

Reusable.

Well named.

Avoid utility files containing hundreds of unrelated functions.

Instead group by responsibility.

---

# Styling Rules

Prefer Tailwind utilities.

Extract reusable UI patterns into components.

Avoid inline styles.

Avoid custom CSS unless necessary.

If custom CSS is required,

keep it isolated.

---

# Animation Rules

Use CSS for:

Hover

Opacity

Transforms

Color

Transitions

Use GSAP for:

Scroll storytelling

Complex timelines

Page transitions

SVG sequences

Three.js synchronization

Do not use GSAP where CSS is sufficient.

---

# Performance Rules

Images:

Lazy load.

Compress.

Use AVIF/WebP.

Videos:

Lazy load.

Use poster images.

Code:

Split routes.

Dynamic imports.

Memoize expensive computations only when profiling indicates a benefit.

Do not optimize prematurely.

---

# Accessibility

Every interactive element must support:

Keyboard navigation.

Visible focus.

Screen readers.

ARIA labels.

Semantic HTML.

Reduced motion.

Never sacrifice accessibility for aesthetics.

---

# Error Handling

Never fail silently.

Provide meaningful fallback UI.

Log unexpected errors.

Gracefully recover whenever possible.

Error messages should help users understand what happened.

---

# Loading States

Every asynchronous action should have:

Skeleton UI.

Loading indicator.

Error state.

Retry option when appropriate.

Avoid blank screens.

---

# Responsive Design

Design mobile intentionally.

Do not simply shrink desktop layouts.

Reconsider hierarchy.

Stack content where necessary.

Maintain readability.

---

# Images

Every image should have:

Alt text.

Responsive sizing.

Lazy loading.

Compression.

Meaningful captions when appropriate.

Decorative images should use empty alt attributes.

---

# TypeScript Rules

Enable strict mode.

Avoid:

```
any
```

Prefer:

```
unknown

interfaces

type aliases

generics
```

Types should communicate intent.

---

# Code Comments

Write comments explaining:

Why.

Not what.

Bad:

```ts
// increment count
count++;
```

Good:

```ts
// Delay initialization until the user interacts to reduce initial bundle work.
```

Code should explain itself whenever possible.

---

# Logging

Use logging during development.

Remove unnecessary console statements before production.

Avoid leaving debug output in commits.

---

# Git Practices

Commit messages should be meaningful.

Good:

```
feat: add architecture viewer component

fix: resolve mobile navigation overflow

refactor: simplify hero animation timeline
```

Avoid:

```
update

changes

fix

test
```

---

# Dependency Rules

Before adding a package ask:

Does React already solve this?

Can existing libraries solve this?

Can native browser APIs solve this?

If yes,

do not install another dependency.

Every dependency increases maintenance cost.

---

# Code Review Checklist

Before merging, verify:

- Component names are clear.
- No duplicated logic.
- Accessibility is preserved.
- Responsive layouts work.
- Types are explicit.
- Unused imports removed.
- Dead code deleted.
- Bundle impact acceptable.
- Animations respect reduced motion.
- Performance remains smooth.

---

# Testing Philosophy

Even if a full test suite is not implemented initially, write code that is testable.

Prefer:

Small functions.

Predictable outputs.

Minimal side effects.

Loose coupling.

High cohesion.

---

# Documentation

Complex modules should include concise documentation.

Document:

Purpose.

Inputs.

Outputs.

Important assumptions.

Avoid documenting obvious code.

---

# Refactoring Guidelines

Refactor when:

Duplication appears.

Naming becomes unclear.

Complexity grows.

Performance problems are measured.

Do not refactor simply because a pattern looks imperfect.

Follow YAGNI (You Aren't Gonna Need It).

---

# Security

Never expose secrets.

Never hardcode API keys.

Validate all external input.

Sanitize rendered content.

Keep dependencies updated.

---

# Final Engineering Standard

The portfolio should be treated like a production software product, not a one-time showcase.

Someone reading the source code should see the same qualities they see in the interface:

- Consistency
- Simplicity
- Maintainability
- Performance
- Thoughtful engineering

The codebase itself is part of the portfolio.

It should communicate professionalism just as clearly as the finished website.