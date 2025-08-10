# Overview

This is a full-stack e-commerce application for ProTech Hardware, a Thai hardware and tools retailer. The application features a React/TypeScript frontend with a modern UI built using shadcn/ui components and Tailwind CSS, backed by an Express.js server. The system uses Drizzle ORM with PostgreSQL for data persistence and includes shopping cart functionality, product catalog management, and a checkout system.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite for build tooling
- **UI Framework**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with a custom design system using CSS variables
- **State Management**: TanStack React Query for server state, React Context for cart management with localStorage persistence
- **Routing**: React Router for client-side routing with dynamic product routes
- **Form Handling**: React Hook Form with Zod validation

## Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database Layer**: Drizzle ORM with PostgreSQL dialect
- **Development Mode**: Vite integration for hot module replacement
- **API Structure**: RESTful endpoints under `/api` prefix
- **Storage Interface**: Abstracted storage layer with in-memory implementation for development

## Data Architecture
- **Database**: PostgreSQL with Neon Database serverless connection
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Type Safety**: Full TypeScript integration from database to frontend
- **Shared Types**: Common types and schemas in `/shared` directory

## Project Structure
- **Monorepo Layout**: Client and server code in separate directories with shared utilities
- **Client**: React application in `/client` with component-based architecture
- **Server**: Express API in `/server` with route handlers and storage abstraction  
- **Shared**: Common types, schemas, and utilities in `/shared`

## Key Features
- **Product Catalog**: Categorized product browsing with subcategory filtering
- **Product Details**: Dynamic routes with image slideshow functionality
- **Shopping Cart**: Persistent cart with React Context, localStorage, quantity management, and checkout functionality
- **Checkout System**: Success toast notifications and cart clearing
- **Responsive Design**: Mobile-first approach with adaptive layouts
- **Thai Localization**: User interface and content in Thai language

# External Dependencies

## Frontend Dependencies
- **UI Components**: Radix UI primitives (@radix-ui/react-*) for accessible components
- **Styling**: Tailwind CSS with class-variance-authority for component variants
- **State Management**: TanStack React Query for server state management
- **Form Handling**: React Hook Form with @hookform/resolvers for validation
- **Icons**: Lucide React for consistent iconography
- **Date Handling**: date-fns for date formatting and manipulation

## Backend Dependencies  
- **Database**: Neon Database (@neondatabase/serverless) for PostgreSQL hosting
- **ORM**: Drizzle ORM with Zod integration for type-safe database operations
- **Session Management**: connect-pg-simple for PostgreSQL session storage
- **Validation**: Zod schemas for runtime type validation

## Development Tools
- **Build Tool**: Vite with React plugin and TypeScript support
- **Development**: tsx for TypeScript execution, esbuild for production builds
- **Database Tools**: Drizzle Kit for schema management and migrations
- **Replit Integration**: Specialized plugins for Replit development environment