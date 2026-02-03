# Arun Bhisne Portfolio

AI-Native Product Designer portfolio website showcasing work in behavior and systems architecture for probabilistic AI systems.

## Overview

A minimalist, modern portfolio website built with React, TypeScript, and Tailwind CSS. Features a clean, professional aesthetic with smooth animations and dark mode support.

## Architecture

### Frontend (client/)
- **React + TypeScript** with Vite bundler
- **Tailwind CSS** for styling with custom design tokens
- **Framer Motion** for scroll-triggered animations
- **shadcn/ui** components (Button, Card, Badge, Form, etc.)
- **React Hook Form + Zod** for form validation

### Backend (server/)
- **Express.js** REST API
- **In-memory storage** for contact form submissions
- **Zod validation** for request bodies

### Key Components
- `Navigation` - Sticky header with smooth scroll anchors
- `HeroSection` - Name, tagline, and CTAs
- `AboutSection` - Role description with highlight cards
- `CompetenciesSection` - 5 domain expertise cards
- `SkillsSection` - Traditional UX vs AI-Native comparison table
- `ProjectsSection` - 3 case study cards
- `ProcessSection` - 5-step design methodology timeline
- `ContactSection` - Form with validation and social links
- `ThemeProvider/ThemeToggle` - Dark/light mode support

## API Endpoints

### POST /api/contact
Submit contact form message.
- Body: `{ name: string, email: string, message: string }`
- Returns: `{ success: true, id: string }`

## Running the Project

```bash
npm run dev
```

Starts Express server on port 5000 with Vite dev server for hot reloading.

## Design Tokens

- Font family: Space Grotesk (display), Inter (body)
- Color scheme: Neutral tones with subtle accents
- Dark mode: Toggle via class on document root
