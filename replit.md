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

## Deployment

### Vercel Configuration
- **vercel.json**: Configures serverless functions and static file serving
- **api/index.ts**: Serverless function entry point for backend
- **Build Command**: `npm run build` (Vite builds frontend to dist/public)
- **Output Directory**: `dist/public`

### Environment Variables Needed
- `DATABASE_URL`: PostgreSQL connection string
- `NODE_ENV`: Set to "production"
- `SESSION_SECRET`: Random string for session encryption

### Database Options
- Neon Database (recommended for PostgreSQL)
- Vercel Postgres
- PlanetScale or other cloud PostgreSQL

## Changelog

- August 11, 2025: Split main sections into separate pages - Programs, Impact, and Contact (Get Involved) are now individual pages with their own routes (/programs, /impact, /contact)
- August 11, 2025: Updated navigation to link to new separate pages instead of scroll sections
- August 11, 2025: Simplified home page to show only Hero and Mission sections
- August 11, 2025: Fixed TypeScript errors in navigation and TheZine components
- August 11, 2025: Fixed DOM nesting issues in GetInvolved component by replacing nested buttons with proper anchor elements
- July 31, 2025: Added individual project links functionality - each "View Project" button now opens the organization's website in a new tab
- July 31, 2025: Renamed "The Zine" to "Project Showcase" throughout navigation and page titles  
- July 31, 2025: Added donate button to Financial Support section in Get Involved page
- July 31, 2025: Updated The Zine with 5 student organizations (Kamal, Financial Boost, Dreams to Business Hungary, Steminist Study Hub) with proper images and detailed information
- July 31, 2025: Fixed image display layering issues on The Zine page with proper z-index stacking
- July 31, 2025: Removed blog functionality entirely from navigation and routing
- July 23, 2025: Fixed Vercel deployment TailwindCSS module resolution by moving build dependencies (tailwindcss, postcss, autoprefixer, vite, @vitejs/plugin-react, typescript, @tailwindcss/vite) from devDependencies to dependencies
- July 23, 2025: Updated favicon to use logo.png instead of favicon.ico for proper branding
- June 24, 2025: Fixed Vercel deployment configuration - resolved TailwindCSS build errors, installed missing dependencies, simplified to static site deployment
- June 24, 2025: Added Vercel deployment configuration and documentation
- June 24, 2025: Created podcast page "Confidence Conversations" with episode showcase
- June 24, 2025: Built "The Zine" page featuring student project launches
- June 24, 2025: Initial setup with team page, blog, and navigation