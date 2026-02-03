# Arun Bhisne Portfolio

## Overview

This is a personal portfolio website for Arun Bhisne, an AI-Native Product Designer specializing in behavior and systems architecture. The site showcases expertise in designing probabilistic AI systems, agent topologies, system prompting, and AI observability. Built as a modern, minimalist single-page application with smooth animations and dark/light theme support.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for development and production builds
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state and caching
- **Styling**: Tailwind CSS with CSS variables for theming
- **UI Components**: shadcn/ui component library (Radix UI primitives)
- **Animations**: Framer Motion for scroll-based and interaction animations
- **Forms**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express 5
- **Language**: TypeScript compiled with tsx
- **API Pattern**: RESTful endpoints under `/api` prefix
- **Build**: esbuild for production server bundling

### Data Storage
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Location**: `shared/schema.ts` contains database table definitions
- **Current Storage**: In-memory storage (`MemStorage` class) as default implementation
- **Database Ready**: Drizzle config expects `DATABASE_URL` environment variable for PostgreSQL connection
- **Migrations**: Generated to `./migrations` directory via `drizzle-kit push`

### Project Structure
```
client/           # Frontend React application
  src/
    components/   # React components including UI library
    pages/        # Page components (home, not-found)
    hooks/        # Custom React hooks
    lib/          # Utilities and query client setup
server/           # Backend Express application
  index.ts        # Server entry point
  routes.ts       # API route definitions
  storage.ts      # Data storage abstraction
  static.ts       # Static file serving for production
shared/           # Shared code between client and server
  schema.ts       # Drizzle database schema and Zod validation
```

### Key Design Decisions

**Monorepo Structure**: Client and server share TypeScript configuration and schema definitions, enabling type-safe API contracts through Zod schemas exported from `shared/schema.ts`.

**Component Library**: Uses shadcn/ui with the "new-york" style variant, providing accessible, customizable components built on Radix UI primitives.

**Theme System**: CSS variables defined in `client/src/index.css` support light and dark modes, with a custom ThemeProvider managing persistence via localStorage.

**API Layer**: The `apiRequest` function in `queryClient.ts` provides a typed fetch wrapper with error handling for all API calls.

## External Dependencies

### Database
- PostgreSQL (configured via `DATABASE_URL` environment variable)
- Drizzle ORM for type-safe database operations
- drizzle-zod for automatic schema-to-validation generation

### UI Framework
- Radix UI primitives (dialog, dropdown, accordion, etc.)
- Tailwind CSS for utility-first styling
- Framer Motion for animations
- Lucide React and react-icons for iconography

### Form Handling
- React Hook Form for form state management
- Zod for runtime validation
- @hookform/resolvers for Zod integration

### Development Tools
- Vite with React plugin
- Replit-specific plugins (error overlay, cartographer, dev banner)
- tsx for TypeScript execution
- esbuild for production builds