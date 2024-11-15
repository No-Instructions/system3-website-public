# Content System Documentation

## Overview

The System 3 website uses a markdown-based content system that enables:
- Content management through markdown files
- Component embedding in markdown
- Automatic navigation generation
- Clean separation of content and presentation

## Key Components

### 1. Content Files
Location: `/src/content/`
```
/src/content/
├── productivity/        # Main content area
│   ├── soft-tech/      # Soft tech concepts
│   ├── guides/         # User guides
│   └── consulting/     # Consulting services
└── releases/          # Product releases
```

### 2. Markdown Processing
- Location: `src/lib/utils.ts` - contains `getDoc` function
- Handles: Loading markdown files, frontmatter extraction
- Uses mdsx for markdown processing
- Supports component embedding

### 3. Navigation System
- Location: `src/lib/config/productivity.ts`
- Controls: Sidebar navigation, breadcrumbs
- Dynamically generates navigation from config
- Handles active state and hierarchy

### 4. Route Handling
- Location: `src/routes/(app)/productivity/[...slug]/+page.ts`
- Handles: Dynamic routing for markdown content
- Manages: Page metadata, content loading

## Content Creation Guide

### 1. Creating Content Files

#### File Location
Place markdown files in appropriate directory under `/src/content/`:
```bash
/src/content/productivity/soft-tech/your-file.md
```

#### File Format
```markdown
---
title: "Your Title"
description: "Your description"
---

# Main Content Here

## Subheadings

Content can include:
- Lists
- Links
- Code blocks
- Embedded components
```

### 2. Adding to Navigation

Update `productivity.ts`:
```typescript
export const productivityConfig = {
    sidebarNav: [
        {
            title: "Section Name",
            items: [
                {
                    title: "Your Page",
                    href: "/productivity/your-page",
                },
            ],
        },
    ],
};
```

### 3. Using Components in Markdown

```markdown
---
title: "Page with Components"
---

# Content with Component

<MyComponent prop="value" />

Regular markdown continues...
```

## Debugging & Troubleshooting

### Common Issues

1. Raw Frontmatter Showing
- Issue: Metadata appears as text in content
- Check: Frontmatter format and delimiters
- Solution: Verify proper YAML format

2. Navigation Not Showing
- Issue: Page missing from navigation
- Check: Config in productivity.ts
- Solution: Verify route matches config

3. Component Loading Fails
- Issue: Embedded components don't render
- Check: Import paths and component availability
- Solution: Verify component exports and imports

### Development Tips
- Use console.log in getDoc for debugging
- Check network tab for markdown loading
- Verify route parameters in page.ts
- Test navigation config changes
- Monitor build output for mdsx issues

## Best Practices

### File Organization
- Group related content in directories
- Use clear, descriptive filenames
- Maintain consistent directory structure
- Keep images near related content

### Navigation Structure
- Logical grouping of content
- Clear, descriptive section names
- Consistent depth levels
- Intuitive ordering

### Content Guidelines
- Clear frontmatter metadata
- Consistent heading structure
- Proper component usage
- Regular content testing

## Future Improvements
- [ ] Automatic navigation generation from file structure
- [ ] Better frontmatter validation
- [ ] More flexible component embedding
- [ ] Enhanced markdown plugins
- [ ] Better error reporting

## Related Documentation
- [Architecture](README-ARCHITECTURE.md) for technical details
- [Content Strategy](README-CONTENT-STRATEGY.md) for writing guidelines
- [Theme System](README-THEME-SYSTEM.md) for styling content

## Questions?
Contact: matt@noinstructions.ai
