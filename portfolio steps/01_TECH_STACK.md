# 01_TECH_STACK.md

# Technology Stack

This document defines the complete technology stack used throughout the project.

Every dependency included in this project must solve a real problem.

Dependencies are not added because they are popular.

Dependencies are added because they improve maintainability, performance, developer experience, or user experience.

Whenever two libraries solve the same problem, prefer the simpler and more maintainable option.

The technology stack should remain intentionally small.

Avoid dependency bloat.

---

# Technology Philosophy

This portfolio is expected to remain maintainable for several years.

Technology choices should therefore prioritize:

• Stability

• Performance

• Maintainability

• Excellent Developer Experience

• Strong Ecosystem

• Excellent Documentation

• Community Support

• Type Safety

• Long-term Compatibility

Do not choose technologies simply because they are trending.

Choose technologies that solve real engineering problems.

---

# Frontend Framework

## React

React is the foundation of the project.

Reason:

• Mature ecosystem

• Component architecture

• Excellent TypeScript support

• Huge community

• Perfect for interactive interfaces

React should be used declaratively.

Avoid manipulating the DOM directly.

Prefer reusable components over duplicated UI.

---

# Build Tool

## Vite

Use Vite instead of Next.js.

Reason:

This portfolio is primarily a frontend application.

Server-side rendering is not required.

Vite provides:

• extremely fast development startup

• fast HMR

• optimized builds

• minimal configuration

• excellent plugin ecosystem

Avoid unnecessary complexity introduced by SSR.

---

# Language

## TypeScript

TypeScript is mandatory.

JavaScript should never be used.

Reasons:

Better autocomplete.

Type safety.

Safer refactoring.

Self-documenting code.

Better maintainability.

Every function should have explicit types where meaningful.

Avoid "any".

Prefer unknown over any.

---

# Styling

## Tailwind CSS v4

Tailwind is the primary styling solution.

Reasons:

Consistency.

Speed.

Smaller CSS.

Reusable utility patterns.

Easy responsive design.

Never create huge utility strings.

Extract reusable components when patterns repeat.

Avoid inline styles.

---

# Icons

## Lucide React

Reason:

Clean.

Consistent.

Minimal.

Tree-shakeable.

Avoid mixing icon libraries.

One library only.

---

# Routing

## React Router

Use React Router.

Simple.

Stable.

Widely supported.

Avoid overengineering routing.

---

# Animation Engine

## GSAP

GSAP is the primary animation library.

Reasons:

Professional timeline system.

Excellent performance.

ScrollTrigger.

Predictable sequencing.

Use GSAP for:

Page transitions.

Hero animations.

Complex timelines.

SVG animations.

Scroll storytelling.

Do NOT use GSAP for:

Simple hover effects.

Color transitions.

Basic opacity changes.

CSS should handle simple animations.

---

# Smooth Scrolling

## Lenis

Lenis provides smooth scrolling.

Reason:

Modern.

Lightweight.

Works well with GSAP.

Avoid Locomotive Scroll.

Lenis causes fewer integration problems.

---

# 3D Graphics

## Three.js

Three.js powers:

Hero visuals.

Interactive backgrounds.

Architecture visualizations.

Particle simulations.

Camera movement.

Avoid creating 3D scenes simply for decoration.

Every Three.js scene should communicate information.

---

# React Three Fiber

Use React Three Fiber.

Reason:

Better React integration.

Cleaner architecture.

Reusable components.

Avoid raw Three.js unless a feature requires lower-level control.

---

# Drei

Use Drei.

Purpose:

Camera helpers.

Controls.

Environment.

Loaders.

Utilities.

Reduces boilerplate.

---

# Motion Library

Use Motion only for lightweight React component animations.

Do not mix Motion timelines with GSAP timelines.

GSAP remains the primary animation engine.

---

# Forms

React Hook Form

Reason:

Minimal rerenders.

Excellent TypeScript support.

Easy validation.

---

# Validation

Zod

Reason:

Type-safe schemas.

Reusable validation.

Better error messages.

---

# Markdown

Use react-markdown.

Reason:

Research articles.

Blog.

Documentation.

Case studies.

Support GitHub-flavored Markdown.

---

# Syntax Highlighting

Use Shiki.

Reason:

Beautiful themes.

Fast.

Excellent language support.

---

# Charts

Use Recharts.

Purpose:

Performance graphs.

Latency charts.

Benchmark visualization.

Avoid decorative charts.

Every chart should communicate useful engineering information.

---

# State Management

Use Zustand.

Reason:

Simple.

Minimal.

Fast.

Avoid Redux.

This project does not require Redux complexity.

Use local React state whenever possible.

Only use Zustand for genuinely shared state.

---

# Data Fetching

TanStack Query is optional.

Only introduce it if real server communication grows.

For mostly static content, avoid unnecessary abstractions.

---

# Utilities

clsx

tailwind-merge

class-variance-authority

These libraries improve component consistency.

---

# Fonts

Use:

Inter

Geist

IBM Plex Sans

Choose one primary font.

One monospace font.

Never mix multiple body fonts.

Typography should remain consistent.

---

# Images

Use AVIF where supported.

Fallback:

WebP

Then PNG.

Never upload unoptimized screenshots.

Compress everything.

---

# Video

Use MP4 (H.264).

Optional WebM.

Lazy-load videos.

Never autoplay with sound.

---

# Package Rules

Before installing a package ask:

Does React already solve this?

Can CSS solve this?

Can existing dependencies solve this?

If yes,

Do not install another package.

---

# Packages Never To Install

Avoid:

jQuery

Bootstrap

Material UI

Ant Design

Heavy carousel libraries

Large animation libraries that duplicate GSAP

Unused CSS frameworks

Moment.js

Lodash (unless absolutely required)

Random utility packages with one function

---

# General Principles

Use fewer libraries.

Understand every dependency.

Avoid dependency overlap.

Keep bundle size small.

Every package must justify its existence.

Technology should never become the focus.

The portfolio exists to showcase engineering—not frameworks.