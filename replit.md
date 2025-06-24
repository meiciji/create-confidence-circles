# Confidence Through Creation - Web Application

## Overview

This is a full-stack web application for "Confidence through Creation," a nonprofit organization empowering girls from underrepresented communities through digital creation, technology, and creative arts. The application serves as the organization's main website, featuring program information, team profiles, blog content, and user engagement opportunities.

## System Architecture

The application follows a modern full-stack architecture with clear separation between frontend and backend concerns:

- **Frontend**: React-based single-page application with TypeScript
- **Backend**: Node.js/Express server with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Build Tool**: Vite for frontend bundling and development
- **Deployment**: Replit-optimized with autoscale deployment

## Key Components

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state management
- **UI Components**: shadcn/ui with Radix UI primitives
- **Styling**: Tailwind CSS with custom design system
- **Forms**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database Layer**: Drizzle ORM with PostgreSQL
- **Session Management**: Express sessions with PostgreSQL storage
- **API**: RESTful endpoints with `/api` prefix

### Database Schema
Currently implements a basic user system:
- **Users table**: id, username, password fields
- **Schema location**: `shared/schema.ts` for type sharing between frontend/backend
- **Migrations**: Managed through Drizzle Kit

## Data Flow

1. **Client Requests**: React frontend makes API calls to Express backend
2. **API Processing**: Express routes handle business logic and database operations
3. **Database Queries**: Drizzle ORM manages PostgreSQL interactions
4. **Response Flow**: JSON responses sent back to React components
5. **State Updates**: TanStack Query manages client-side cache and updates

## External Dependencies

### UI/UX Libraries
- **Radix UI**: Accessible component primitives
- **Lucide React**: Icon library
- **TailwindCSS**: Utility-first CSS framework
- **Class Variance Authority**: Component variant management

### Development Tools
- **Vite**: Frontend build tool and dev server
- **TypeScript**: Type safety across the stack
- **ESBuild**: Production backend bundling
- **Drizzle Kit**: Database schema management

### Database & Storage
- **Neon Database**: Serverless PostgreSQL (via @neondatabase/serverless)
- **In-memory fallback**: MemStorage class for development

## Deployment Strategy

### Development
- **Command**: `npm run dev`
- **Hot Reload**: Vite HMR for frontend, tsx for backend
- **Port**: Application runs on port 5000
- **Environment**: NODE_ENV=development

### Production Build
- **Frontend**: Vite builds to `dist/public`
- **Backend**: ESBuild bundles server to `dist/index.js`
- **Command**: `npm run build && npm run start`
- **Environment**: NODE_ENV=production

### Replit Configuration
- **Modules**: nodejs-20, web, postgresql-16
- **Deployment**: Autoscale with build/run commands
- **Port Mapping**: Internal 5000 → External 80

## User Preferences

Preferred communication style: Simple, everyday language.

## Changelog

Changelog:
- June 24, 2025. Initial setup