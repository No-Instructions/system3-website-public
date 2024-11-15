# System 3 Website Technical Architecture

## Quick Start

### Initial Setup
```bash
# Clone the repository
git clone [repository-url]
cd shadcn-svelte-clone

# Install dependencies
pnpm install

# Start development server
cd apps/www
pnpm dev
```

### Key URLs
- Development: http://localhost:5173
- Production: https://system3.md
- Component Reference: https://www.shadcn-svelte.com/docs/components
- SvelteKit Docs: https://kit.svelte.dev/docs

## Project Structure
```bash
apps/www/
├── README.md                    # Basic setup instructions
├── docs/                        # Project documentation
│   ├── README.md               # Documentation overview
│   ├── README-ARCHITECTURE.md   # This file - technical details
│   ├── README-CONTENT-SYSTEM.md # Content system details
│   ├── README-CONTENT-STRATEGY.md # Content strategy
│   ├── README-THEME-SYSTEM.md   # Theme system
│   └── README-TODO.md           # Current todo list
└── src/
    ├── routes/(app)/           # Main application routes
    │   └── productivity/       # Main content section
    └── lib/
        ├── components/         # UI components
        │   ├── ui/            # Core UI components
        │   └── docs/          # Legacy components (to be moved)
        └── config/            # Site configuration
            └── productivity.ts # Navigation config
```

## Technical Overview

### Core Technologies
- SvelteKit for framework
- shadcn for UI components
- Tailwind for styling
- markdown/MDsveX for content
- Custom theme system

### Key Components

#### 1. Navigation System
- Dynamic routing through SvelteKit
- Sidebar navigation from config
- Breadcrumb generation
- Table of contents for each page

#### 2. Theme System
- Customized shadcn theme
- System 3 brand colors
- Light/dark mode support
- Semantic color variables

#### 3. Content System
- Markdown processing
- Frontmatter support
- Component embedding
- Dynamic route generation

## Component Organization

### UI Components Directory
Location: `/lib/components/ui/`

1. Core Components:
   - feature-tabs.svelte
   - pricing-table/
   - block-wrapper.svelte
   - block-chunk.svelte
   - component-preview.svelte
   - component-example.svelte

2. Navigation Components:
   - pager.svelte
   - sidebar-nav.svelte
   - sidebar-nav-items.svelte
   - table-of-contents.svelte

3. Layout Components:
   - page-header/
   - site-header.svelte
   - site-footer.svelte

4. Utility Components:
   - charts/
   - theme-customizer/
   - metadata.svelte

### Key Component Patterns

#### Feature Tabs Component
Location: `/lib/components/ui/feature-tabs.svelte`

Important implementation details:
- Uses grid layout for tab/image alignment
- Maintains consistent image height across transitions
- Extends images to screen edge while containing content
- Uses theme colors for states (primary/25 for active, primary/10 for hover)

#### Full-Width Sections
Pattern for sections that extend full-width while containing content:
```svelte
<section class="w-full border-y bg-secondary/50">
    <div class="container">
        <!-- Contained content -->
    </div>
</section>
```

#### Theme-Aware States
Pattern for interactive elements:
```svelte
class="{activeState
    ? 'bg-primary/25 shadow-sm ring-1 ring-primary'
    : 'hover:bg-primary/10'}"
```

## Development Guidelines

### Adding New Routes
1. Create route file in appropriate directory
2. Update navigation config in productivity.ts
3. Add corresponding markdown content if needed
4. Test navigation paths and breadcrumbs
5. Verify table of contents generation

### Adding New Components
1. Follow shadcn patterns
2. Use theme system for colors
3. Include TypeScript types
4. Document props and usage
5. Place in appropriate ui directory
6. Update imports in existing files

### Modifying Theme
1. Update in themes.ts
2. Test in both light and dark modes
3. Check all semantic color usage
4. Verify component consistency
5. Test focus states and animations
6. Check localStorage for theme persistence

### Content Updates
1. Place markdown files in correct directory
2. Update navigation configuration
3. Test rendering and component embedding
4. Verify frontmatter processing
5. Check mobile responsiveness

## Common Technical Issues

### Route Issues
- 404 errors
  - Check file structure matches routes
  - Verify [...slug] setup in dynamic routes
  - Check navigation config paths
  - Clear SvelteKit build cache if needed

- Navigation breaks
  - Verify config file imports
  - Check sidebar navigation structure
  - Confirm route parameters
  - Test breadcrumb generation

### Component Issues
- Loading failures
  - Check import paths
  - Verify file existence
  - Clear build cache
  - Check component export names

- Type errors
  - Verify interface implementations
  - Check prop types
  - Update type definitions
  - Verify import paths

- Style inconsistencies
  - Check theme usage
  - Verify semantic color classes
  - Test dark/light modes
  - Check responsive styles

### Build Issues
- MDsveX processing
  - Check markdown syntax
  - Verify frontmatter format
  - Test component embedding
  - Check plugin configuration

- Type checking
  - Verify component props
  - Check interface implementations
  - Update type definitions
  - Test generic constraints

- Import resolution
  - Check file paths
  - Verify export names
  - Test alias resolution
  - Clear module cache

### Theme Issues
- Colors not updating
  - Clear localStorage "config" entry
  - Check theme class on body
  - Verify semantic color usage
  - Test mode switching
  - Verify default theme in config store

- Component inconsistencies
  - Check variant props
  - Verify class usage
  - Test inheritance
  - Check default themes

## Debugging Tips

### Development Server
- Use SvelteKit dev tools
- Check network requests
- Monitor console output
- Use component inspector

### Build Process
- Check build output
- Verify file generation
- Test production build
- Monitor bundle size

### Content System
- Check markdown processing
- Verify route generation
- Test component embedding
- Monitor file watching

## Questions & Support
- Technical questions: matt@noinstructions.ai
- Component reference: https://www.shadcn-svelte.com/docs/components
- SvelteKit docs: https://kit.svelte.dev/docs

## Related Documentation
- [Content System](README-CONTENT-SYSTEM.md)
- [Theme System](README-THEME-SYSTEM.md)
- [Content Strategy](README-CONTENT-STRATEGY.md)
- [Current Todo List](README-TODO.md)
