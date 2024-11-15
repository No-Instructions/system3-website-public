# System 3 Website Documentation

## Quick Start
```bash
# Install dependencies
pnpm install

# Start development server
cd apps/www
pnpm dev
```

## Documentation Directory

### Core Documentation
- [Architecture](README-ARCHITECTURE.md) - Technical implementation and project structure
- [Content System](README-CONTENT-SYSTEM.md) - How our markdown-based content system works
- [Content Strategy](README-CONTENT-STRATEGY.md) - Voice, style, and content types
- [Theme System](README-THEME-SYSTEM.md) - Brand colors and visual design system

### Key URLs
- Development: http://localhost:5173
- Production: https://system3.md
- Component Library: https://www.shadcn-svelte.com/docs/components

## Project Overview

System 3's website serves multiple purposes:
- Marketing site for our products
- Content hub for productivity concepts
- Documentation for Relay
- Company information and services

### Key Features
- Custom theme with brand colors
- Markdown-based content system
- Dynamic navigation
- Integration with shadcn component library

### Current State
- Basic structure working
- Content system functional
- Theme system implemented
- Navigation working
- Content needs review/updates

## Making Changes

### Development Workflow
1. Start development server (`pnpm dev`)
2. Make changes
3. Test in both light and dark modes
4. Check console for errors
5. Commit with appropriate prefix:
   - feat: New features
   - fix: Bug fixes
   - docs: Documentation
   - style: Formatting
   - refactor: Code restructuring
   - test: Adding tests
   - chore: Maintenance

### Common Tasks
- Adding content: See [Content System](README-CONTENT-SYSTEM.md)
- Styling changes: See [Theme System](README-THEME-SYSTEM.md)
- Architecture changes: See [Architecture](README-ARCHITECTURE.md)

## Getting Help
- Check documentation in this directory
- Review component examples at shadcn-svelte.com
- Contact: matt@noinstructions.ai

## Project Status
See [Current Todo List](README-ARCHITECTURE.md#current-todo-list) for ongoing work and priorities.
