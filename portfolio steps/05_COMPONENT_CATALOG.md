# 05_COMPONENT_CATALOG.md

# Purpose

This document defines every reusable UI component in the portfolio.

Components should be modular, composable, accessible, and reusable.

A component must solve a single responsibility exceptionally well.

Avoid creating page-specific components unless absolutely necessary.

When multiple pages require similar functionality, create a shared component.

Every component should support future extension without requiring rewrites.

---

# Component Philosophy

Components are building blocks.

Not pages.

Not layouts.

A component should never assume where it is being used.

It receives data.

It renders UI.

Nothing more.

Business logic should remain outside whenever possible.

---

# Component Architecture

```
UI

↓

Shared Components

↓

Feature Components

↓

Layouts

↓

Pages
```

Never allow pages to become collections of duplicated code.

---

# Folder Structure

```
components/

    ui/

    layout/

    navigation/

    sections/

    cards/

    timeline/

    project/

    research/

    animations/

    charts/

    media/

    forms/

    common/
```

Each folder should expose an `index.ts`.

Avoid deep relative imports.

---

# Navbar

## Responsibility

Global navigation.

### Contains

Logo

Navigation links

Theme toggle (optional)

Resume button

GitHub

LinkedIn

Mobile menu

---

### Requirements

Sticky.

Responsive.

Accessible.

Keyboard friendly.

Transparent at top.

Solid after scrolling.

Smooth active-link indication.

---

# Footer

Contains

Navigation

Social Links

Copyright

Resume

Email

Minimal.

Never overloaded.

---

# Hero Section

Purpose:

Immediately establish identity.

Contains:

Headline

Subheadline

Description

CTA

Background visual

Optional animated illustration.

Never exceed one viewport height.

---

# Section Header

Reusable for every section.

Contains:

Eyebrow label

Title

Subtitle

Optional CTA

Maintain consistent spacing everywhere.

---

# Button

Variants

Primary

Secondary

Outline

Ghost

Text

Danger

Sizes

Small

Medium

Large

States

Default

Hover

Pressed

Loading

Disabled

Focus

Every button must support:

Keyboard focus

ARIA labels

Loading state

Icons

---

# Card

Reusable.

Supports:

Title

Description

Image

Footer

Actions

Status

Badges

Variants

Project

Research

Blog

Information

Statistics

Avoid deeply nested cards.

---

# Project Card

Contains

Cover image

Title

Summary

Category

Technologies

Status

Duration

Read More

Hover reveals additional metadata.

Click opens case study.

---

# Research Card

Contains

Topic

Status

Summary

Tags

Publication date

Estimated reading time

---

# Blog Card

Contains

Title

Excerpt

Date

Reading Time

Category

Cover Image

---

# Timeline

Supports

Vertical

Horizontal

Desktop

Mobile

Each node includes

Date

Title

Description

Icon

Optional media

Animations occur only when entering viewport.

---

# Tech Badge

Purpose

Display technologies.

Requirements

Consistent height.

Minimal.

No colorful logos.

Text-first.

Avoid large collections of badges.

---

# Skill Group

Purpose

Display expertise.

Do not use progress bars.

Instead classify:

Comfortable

Experienced

Currently Using

Learning

This better represents engineering reality.

---

# Statistics Card

Supports

Number

Label

Description

Trend

Optional icon

Should animate once.

Never continuously.

---

# Metric Component

Examples

Latency

FPS

Memory

Accuracy

Model Size

Inference Speed

Should support units.

Never hardcode formatting.

---

# Architecture Viewer

Purpose

Display system architecture.

Supports

Zoom

Pan

Fullscreen

Captions

Annotations

Responsive scaling

Should support SVG.

---

# Image Viewer

Supports

Zoom

Fullscreen

Keyboard navigation

Captions

Lazy loading

Progressive loading

---

# Video Player

Features

Lazy loading

Poster image

Captions

Playback controls

Fullscreen

Playback speed

Mute

Do not autoplay with audio.

---

# Code Block

Supports

Syntax highlighting

Copy button

Filename

Line numbers

Highlighted lines

Language detection

Use Shiki.

---

# Terminal Component

Purpose

Display commands.

Not fake animations.

Supports

Prompt

Command

Output

Error

Copy button

Scrollable output

---

# Callout

Variants

Info

Success

Warning

Error

Tip

Use sparingly.

---

# Tabs

Use only when content is closely related.

Avoid deeply nested tabs.

Maintain keyboard accessibility.

---

# Accordion

Purpose

Hide secondary information.

Avoid placing primary content inside accordions.

---

# Modal

Supports

Keyboard close

Escape

Overlay click

Focus trapping

Scroll locking

Accessible labels

---

# Tooltip

Purpose

Explain.

Not decorate.

Short.

Immediate.

Accessible.

---

# Toast

Use only for user actions.

Never for marketing.

Auto-dismiss.

Accessible announcements.

---

# Search Component

Supports

Instant filtering

Keyboard navigation

Highlighted matches

Empty state

Recent searches (optional)

---

# Filter Bar

Supports

Categories

Tags

Sorting

Search

Reset

Sticky on desktop.

Collapsible on mobile.

---

# Pagination

Only if required.

Otherwise prefer infinite scrolling or progressive loading.

---

# Breadcrumb

Used inside:

Project pages

Research pages

Blog pages

Avoid on homepage.

---

# Empty State

Contains

Illustration (optional)

Title

Description

Suggested actions

Never leave blank screens.

---

# Error State

Explain

What happened

Possible cause

Recovery action

Retry button

---

# Skeleton Loader

Every async section should have matching skeletons.

Avoid generic loading spinners.

---

# Theme Provider

Centralized.

Supports

Dark mode

Future light mode

Stores preference.

---

# Animation Wrapper

Reusable viewport animation.

Configurable.

Supports

Fade

Slide

Scale

Rotate

Stagger

Respects reduced-motion preference.

---

# Layout Components

Create reusable layouts.

Examples

Container

Section

Grid

Stack

Sidebar

Split View

Bento

Avoid rebuilding layouts repeatedly.

---

# Accessibility Requirements

Every interactive component must support

Keyboard navigation

Screen readers

Visible focus

ARIA attributes

Touch interaction

Reduced motion

Proper semantic HTML

---

# Performance Rules

Lazy-load heavy components.

Memoize expensive renders.

Avoid unnecessary re-renders.

Use dynamic imports for large visualizations.

Images should be optimized.

Videos deferred.

Three.js loaded only when required.

---

# Naming Convention

Good

ProjectCard

HeroSection

TimelineItem

ArchitectureViewer

MetricCard

Bad

Card2

ProjectThing

Box

Widget

TestComponent

Names should describe responsibility.

---

# Component Checklist

Before adding a component ask:

Can an existing component solve this?

Can this become a variant?

Can this be composed?

Is this reusable?

Does this improve maintainability?

If not,

Do not create it.

---

# Final Principle

Every component should feel like part of one coherent design system.

A visitor should never be able to tell which page introduced a component first.

Consistency is a feature.

Reusability is an engineering decision.

Maintainability is more valuable than clever abstractions.