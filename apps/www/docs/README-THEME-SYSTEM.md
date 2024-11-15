# Theme System Documentation

## Overview

System 3's theme system is built on shadcn's theming infrastructure, customized with our brand colors and styling preferences. It provides consistent visual design across the site while supporting both light and dark modes.

## Brand Colors

### Primary Colors
- Gold/Orange (#ffa558)
  - HSL: "28 100% 67%"
  - Used for: Primary buttons, interactive elements
  - Dark mode: "28 100% 60%"

### Secondary Colors
- Purple (Obsidian brand color)
  - Light mode: "260 35% 92%"
  - Dark mode: "260 30% 20%"
  - Used for: Accents, secondary elements

## Theme Configuration

### Default Theme
System3 theme is set as default in stores/config.ts:
```typescript
export const config = persisted<Config>("config", {
    style: "default",
    theme: "system3",
    radius: 0.5,
});
```

Note: Local storage may override this default. Clear "config" from localStorage to reset.

### Location
Main theme configuration in `src/lib/registry/themes.ts`:

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
            background: "0 0% 100%",
            foreground: "220 10% 4%",
            card: "0 0% 100%",
            "card-foreground": "220 10% 4%",
            primary: "28 100% 67%",
            "primary-foreground": "0 0% 100%",
            secondary: "260 35% 92%",
            "secondary-foreground": "260 60% 30%",
            muted: "28 30% 96%",
            "muted-foreground": "28 15% 45%",
            accent: "260 35% 92%",
            "accent-foreground": "260 60% 30%",
            border: "28 20% 90%",
            input: "28 20% 90%",
            ring: "28 100% 67%",
        },
        dark: {
            background: "220 10% 4%",
            foreground: "0 0% 98%",
            card: "220 10% 4%",
            "card-foreground": "0 0% 98%",
            primary: "28 100% 60%",
            "primary-foreground": "0 0% 100%",
            secondary: "260 30% 20%",
            "secondary-foreground": "0 0% 98%",
            muted: "220 10% 12%",
            "muted-foreground": "28 15% 65%",
            accent: "260 30% 20%",
            "accent-foreground": "0 0% 98%",
            border: "220 10% 15%",
            input: "220 10% 15%",
            ring: "28 100% 60%",
        }
    }
}
```

## Using the Theme

### Interactive States
For buttons, tabs, and other interactive elements, use these opacity patterns:

```svelte
// Active/Selected states
bg-primary/25   // Primary background at 25% opacity
ring-1 ring-primary  // Primary colored border

// Hover states
hover:bg-primary/10  // Lighter hover effect

// Alternative using accent/secondary
bg-secondary/50  // For section backgrounds
bg-accent/30    // For subtle highlights
```

### Section Backgrounds
Common patterns for full-width sections:
- Primary sections: `bg-primary/5`
- Secondary sections: `bg-secondary/50`
- Accent sections: `bg-accent/30`
Always include `border-y` for visual separation.

### Semantic Color Names
Use these Tailwind classes to apply theme colors:

```html
<!-- Backgrounds -->
<div class="bg-background">  <!-- Main background -->
<div class="bg-card">       <!-- Card background -->
<div class="bg-muted">      <!-- Subtle background -->
<div class="bg-primary">    <!-- Primary action -->
<div class="bg-secondary">  <!-- Secondary action -->

<!-- Text -->
<span class="text-foreground">        <!-- Main text -->
<span class="text-muted-foreground">  <!-- Secondary text -->
<span class="text-primary-foreground"> <!-- Text on primary -->

<!-- Borders -->
<div class="border-border">  <!-- Default border -->
<div class="ring-ring">      <!-- Focus rings -->
```

### Components

#### Cards
```html
<Card.Root>
    <Card.Header>
        <Card.Title>Title</Card.Title>
        <Card.Description>Description</Card.Description>
    </Card.Header>
    <Card.Content>
        Content here
    </Card.Content>
</Card.Root>
```

#### Buttons
```html
<!-- Primary -->
<Button>Primary Action</Button>

<!-- Secondary -->
<Button variant="secondary">Secondary Action</Button>

<!-- Ghost -->
<Button variant="ghost">Ghost Button</Button>
```

#### Other Elements
- Navigation uses theme colors automatically
- Forms use theme colors for inputs and borders
- Icons can use any theme color

## Dark Mode

### Implementation
- Uses CSS variables for color switching
- Controlled by `class="dark"` on HTML element
- Automatic OS preference detection
- Manual toggle available

### Testing
- Test all components in both modes
- Check contrast ratios
- Verify transitions
- Test focus states

## Common Issues

### Theme Not Applying
- Check body has correct theme class
- Clear localStorage and refresh
- Verify import paths
- Check component usage

### Color Inconsistencies
- Use semantic color names
- Check parent context
- Verify dark mode class
- Check variant props

### Focus States
- Use ring utilities
- Check contrast
- Test keyboard navigation
- Verify focus visibility

## Best Practices

### Color Usage
- Use semantic names, not direct colors
- Respect color hierarchy
- Maintain sufficient contrast
- Consider color blindness

### Component Styling
- Use shadcn components when possible
- Follow component composition patterns
- Maintain consistent spacing
- Use provided variants

### Custom Styles
- Extend existing theme values
- Document custom values
- Test in both modes
- Consider animation impact

## Related Documentation
- [Architecture](README-ARCHITECTURE.md) for technical details
- [Content System](README-CONTENT-SYSTEM.md) for content styling
- shadcn documentation for component details

## Questions?
Contact: matt@noinstructions.ai
