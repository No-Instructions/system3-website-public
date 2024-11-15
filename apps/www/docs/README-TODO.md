# System 3 Website TODO List

Current as of November 3, 2023

## Context
- This list is actively maintained during development
- Some items may be documented in more detail in other README files
- Priority items marked with 🔥

## Todo List

1. 🎨 Theme & Visual System (IN PROGRESS)
   - ✅ Create system3 theme with brand colors
   - ✅ Set as default theme
   - ✅ Implement gold/orange primary color
   - ✅ Implement purple secondary/accent colors
   - ✅ Fix theme persistence/localStorage issues
   - [ ] Audit all pages for theme consistency
   - [ ] Document color usage patterns
   - [ ] Add more animation, visual stuff

2. 📝 Content Migration & Structure
   - ✅ Set up productivity section
   - ✅ Remove "lift mode" announcement
   - ✅ Restructure home page content
   - ✅ Add feature tabs component
   - ✅ Add values and theses sections
   - [ ] Review search - keep or drop
   - [ ] Convert all titles to sentence case
   - [ ] Source better images for feature tabs
   - [ ] Check that we're using h1, h2, h3 etc. consistently across pages
   - [ ] Review and ready all content:
     - [ ] Home
     - [ ] Productivity
     - [ ] Company
     - [ ] Pricing
     - [ ] Relay overview
     - [ ] Roadmap
     - [ ] Releases
     - [ ] Security
     - [ ] Privacy
     - [ ] Terms of service

3. 🧹 Technical Cleanup
   - [ ] Fix site-wide horizontal scrollbar
   - [ ] Move components from /docs/ to /shared/
   - [ ] Rename components (remove "Docs" prefix)
   - [ ] Remove unused components
   - [ ] Update component imports
   - [ ] Update schema and images in /www/static
   - [ ] Make documentation browseable through UI
   - [ ] Automate navigation updates
     - Create function to scan content directory
     - Automatically update productivity.ts
     - Update sidebar navigation when new markdown pages are added
   - [ ] Convert roadmap and releases to markdown files

4. 🔍 SEO & Analytics
   - [ ] Set up OG image
   - [ ] Configure meta titles and tags
   - [ ] Set up Google Analytics (or better service?)

5. 📋 Content Management
   - [ ] Define content marketing strategy
   - [ ] Determine Obsidian Publish role
   - [ ] Establish content update workflow (is it in Zed?)

6. 🚀 Pre-launch
   - [ ] Asset Management:
     - [ ] Optimize GIFs
     - [ ] Set up proper asset hosting
     - [ ] Move GIFs from GitHub to self-hosted
   - [ ] Update support email configuration support@system3.md
   - [ ] Update site files (copyright, readme)
   - [ ] Set up hosting
   - [ ] Configure DNS (main site and Publish)
   - [ ] Set up redirects if needed
   - [ ] Review heading hierarchy
   - [ ] Ensure all links are correct

## Related Documentation
- [Content Strategy](README-CONTENT-STRATEGY.md)
- [Theme System](README-THEME-SYSTEM.md)
- [Content System](README-CONTENT-SYSTEM.md)

## Updates
Last updated after implementing feature tabs component and restructuring home page.
