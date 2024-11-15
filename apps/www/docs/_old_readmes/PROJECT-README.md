# System 3 Website Project Documentation

## Quick Links
- [Getting Started](#getting-started)
- [Project Overview](#project-overview)
- [Technical Implementation](#technical-implementation)
- [Theme System](#theme-system)
- [Content System](#content-system)
- [Content Strategy](#content-strategy)
- [Current Todo List](#current-todo-list)
- [Development Guidelines](#development-guidelines)

## Getting Started

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

### Making Changes
1. Run development server
2. Make changes in relevant files (see File Structure below)
3. Test in both light and dark modes
4. Check console for errors
5. Commit changes with appropriate prefix (feat:, fix:, docs:, etc.)

### Key URLs
- Development: http://localhost:5173
- Production: https://system3.md
- Repository: [repository-url]

## Project Overview

### Project Context
- Website started as shadcn-svelte template (UI component library documentation)
- Currently converting it to System 3's marketing site
- System 3 makes next-generation productivity tools
- AI-centric, collaborative, local first
- Using shadcn's component library and theming system
- Main product is Relay (Obsidian plugin for collaboration)
- Target audience: professional knowledge workers (PKWs), small/medium businesses

### Current State
- Basic structure working with shadcn components
- /productivity section replacing original /docs
- Custom theme implementing brand colors
- Content system working with markdown
- Navigation and routing functional
- Basic pages established but need content review

### Key Sections
- Home page
- Product info (Relay)
- Productivity content (thought leadership)
- Company info
- Product pricing

### Progress to Date
1. Basic Setup:
   - Deployed to local  dev env
   - Added initial product pages
   - Created pricing structure

2. Content System:
   - Set up markdown-based content system
   - Got markdown rendering working
   - Created initial productivity section

3. Navigation:
   - Updated main nav
   - Started sidebar navigation in /productivity
   - Created initial route structure

4. Theme System:
   - Created system3 theme with brand colors
   - Implemented gold/orange primary color
   - Set up secondary purple accents
   - Integrated with shadcn theming

### Current Challenges
1. Site Structure:
   - Still using /docs route from template
   - Need to fully transition to /productivity
   - Many template components still reference /docs

2. Component Organization:
   - Components in docs/ directory need reorganizing
   - Mix of template and custom components
   - Need clear separation of concerns

3. Content Architecture:
   - Building new content structure
   - Need clear organization for different content types
   - Balance between documentation and marketing content

## Technical Implementation

### File Structure
```
apps/www/
├── README.md                     # www app-specific documentation
├── docs/
│   ├── README-content-system.md  # Content system technical details
│   └── PROJECT-README.md         # This file - project overview
└── src/
    ├── routes/(app)/
    │   ├── docs/                 # Current documentation routes
    │   └── productivity/         # New routes being developed
    └── lib/
        ├── components/
        │   └── docs/            # Components to be reorganized
        └── config/
            └── docs.ts          # To be renamed to productivity.ts
```

### Components to Reorganize
Current location: `/lib/components/docs/`
Components to move to shared:
1. UI Components:
   - icons/
   - pricing-table/
   - block-wrapper.svelte
   - block-chunk.svelte
   - component-preview.svelte
   - component-example.svelte

2. Navigation Components:
   - docs-pager.svelte
   - docs-sidebar-nav.svelte
   - docs-sidebar-nav-items.svelte
   - table-of-contents.svelte

3. Layout Components:
   - page-header/
   - site-header.svelte
   - site-footer.svelte

4. Utility Components:
   - charts/
   - theme-customizer/
   - metadata.svelte

### Migration Process

1. Config Updates:
```bash
# Backup original
cp apps/www/src/lib/config/docs.ts apps/www/src/lib/config/docs.backup.ts

# Create new config
cp apps/www/src/lib/config/docs.ts apps/www/src/lib/config/productivity.ts
```

2. Route Migration:
```bash
mkdir -p apps/www/src/routes/(app)/productivity-new
cp -r apps/www/src/routes/(app)/productivity/* apps/www/src/routes/(app)/productivity-new/
cp -r apps/www/src/routes/(app)/docs/[...slug] apps/www/src/routes/(app)/productivity-new/
```

3. Component Reorganization:
```bash
mkdir -p apps/www/src/lib/components/shared
mv apps/www/src/lib/components/docs/icons apps/www/src/lib/components/shared/
```



## Theme System (New)

### Brand Colors
- Primary: Gold/Orange (#ffa558)
  - HSL: "28 100% 67%"
  - Used for primary buttons and interactive elements
- Secondary: Purple (Obsidian brand color)
  - Used for accents and secondary elements
- Implementation through CSS variables in theme system

### Theme Configuration
Located in `src/lib/registry/themes.ts`:
```typescript
{
    name: "system3",
    label: "System 3",
    activeColor: {
        light: "28 100% 67%",
        dark: "28 100% 60%",
    },
    cssVars: {
        light: {
            // Light mode colors
            primary: "28 100% 67%",
            secondary: "260 35% 92%",
            // ... other colors
        },
        dark: {
            // Dark mode colors
            primary: "28 100% 60%",
            secondary: "260 30% 20%",
            // ... other colors
        }
    }
}
```

### Using Theme Colors
- Use semantic color names in Tailwind classes
- Examples:
  ```html
  <button class="bg-primary text-primary-foreground">
  <div class="bg-secondary text-secondary-foreground">
  <span class="text-muted-foreground">
  ```

### Theme Components
- Cards: Use Card.Root, Card.Header, Card.Content
- Buttons: Use buttonVariants with appropriate variant
- Navigation: Uses theme colors automatically


## Content System

### Content Structure
```
/productivity/
├── soft-tech/
│   ├── what-is-soft-tech
│   └── patterns-and-practices
├── guides/
│   ├── relay-basics
│   └── collaboration-patterns
└── consulting/
    ├── our-approach
    └── services
```

### Technical Details
- Uses mdsx for markdown processing
- Supports component embedding
- Frontmatter required for metadata
- See `apps/www/docs/README-content-system.md` for details

### Key Files
1. `apps/www/src/routes/(app)/productivity/[...slug]/+page.ts`
   - Handles dynamic routing
   - Loads markdown content

2. `apps/www/src/lib/utils.ts`
   - Contains `getDoc` function
   - Processes markdown files

3. `apps/www/src/lib/config/productivity.ts`
   - Defines navigation structure
   - Controls sidebar and breadcrumbs


## Current Todo List

### 1. 🎨 Theme & Visual System (IN PROGRESS)
- ✅ Create system3 theme with brand colors
- ✅ Set as default theme
- ✅ Implement gold/orange primary color
- [ ] Debug/fix secondary purple colors
- [ ] Audit all pages for theme consistency
- [ ] Add more animation, visual stuff

### 2. 📝 Content Migration & Structure
- ✅ Set up productivity section
- ✅ Remove "lift mode" announcement
- [ ] Review search functionality
- [ ] Convert all titles to sentence case
- [ ] Review and ready all content:
  - [ ] Home
  - [ ] Company
  - [ ] Relay overview
  - [ ] Roadmap
  - [ ] Releases
  - [ ] Security
  - [ ] Privacy

### 3. 🧹 Technical Cleanup
- [ ] Move components from /docs/ to /shared/
- [ ] Rename components (remove "Docs" prefix)
- [ ] Update schema and images in /www/static
- [ ] Automate navigation updates in /productivity
- [ ] Convert roadmap and releases to markdown

### 4. 🔍 SEO & Analytics
- [ ] Set up OG image
- [ ] Configure meta titles and tags
- [ ] Set up Google Analytics

### 5. 🚀 Pre-launch
- [ ] Asset Management
  - [ ] Optimize GIFs
  - [ ] Set up proper asset hosting
  - [ ] Move GIFs from GitHub to self-hosted
- [ ] Update support email configuration
- [ ] Set up hosting
- [ ] Configure DNS

## Common Issues & Solutions

### Theme Issues
- Colors not updating: Clear localStorage, refresh
- Theme not applying: Check body classes for theme-system3
- Secondary colors not showing: Verify semantic color usage

### Content Issues
- Raw frontmatter showing: Check markdown format
- Navigation breaks: Verify config imports
- Images not loading: Check paths and hosting

### Development Issues
- Component loading fails: Check import paths
- Type errors: Verify interface implementations
- Route issues: Check file structure matches routes

## Resources
- Original template: [shadcn-svelte](https://www.shadcn-svelte.com/)
- Technical docs: see apps/www/docs/
- Content examples: see existing markdown files
- Shadcn Components: [shadcn-svelte components](https://www.shadcn-svelte.com/docs/components)

## Project Documentation Structure
- This file: Project overview and current state
- `README-content-system.md`: Content management details
- `README.md`: Basic setup and development
- Individual component documentation in component folders

## Questions?
Contact: matt@noinstructions.ai


## Content Strategy

### Primary Audiences
1. Individual Knowledge Workers
   - Use tools like Obsidian for personal knowledge management
   - Care about ownership and control of their data
   - Value efficiency and good practices

2. Small/Medium Business Decision Makers
   - Need collaboration solutions
   - Want proven, professional tools
   - Care about team productivity
   - Need to justify tool choices

### Content Philosophy

#### Core Concept: "Soft Tech"
- Term for human practices that make tools valuable
- Focus on how-to and best practices
- Balance between tool features and usage patterns

#### Voice and Style
- Professional but not corporate
- Clear and direct
- Show don't tell
- Avoid marketing fluff
- Use real examples

### Content Types
1. Concept Pieces
2. How-To Guides
3. Pattern Guides
4. Case Studies

## Development Guidelines

### Testing Checkpoints
1. Run development server
2. Check critical pages
3. Check console for errors

### Common Issues & Solutions
1. Raw Frontmatter Display
   - Issue: Markdown shows raw frontmatter
   - Solution: Verify markdown file format

2. Navigation Breaks
   - Issue: Sidebar navigation disappears
   - Solution: Check config imports

3. Component Loading Fails
   - Issue: Components fail to load after moving
   - Solution: Check import paths

## Resources
- Original template: [shadcn-svelte](https://www.shadcn-svelte.com/)
- Technical docs: see apps/www/docs/
- Content examples: see existing markdown files

## Questions?
Contact: matt@noinstructions.ai
