# Julia Ernst – New Website

This is the new version of my website, built with **React**, **TypeScript**, and **Vite**.

## Features

- ⚡ Minimal Vite + React + TypeScript setup
- 🚀 Automatic deployment to GitHub Pages via GitHub Actions
- 🛠️ Prettier and ESLint configured for consistent code style
- 📱 Installable Progressive Web App (PWA)

## Deployment

The website is automatically deployed on every push to the `main` branch.

[Live Version](https://missserious.github.io/jernst)

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## Commit & Development Guidelines

Commit message conventions to keep a clean and readable git history.\
➡️ See the full guidelines here:  
[Commit Guidelines](docs/commit_guidelines.md)

## TODO / Checklist

- [x] Add commit message guidelines
- [x] Export commit guidelines to docs/ folder and link from README
- [ ] Refactor/Improve CSS:
  - [ ] Mobil first
  - [ ] Fully responsive
  - [ ] Clean up CSS: font, color, spacing
  - [ ] Refactor CSS: dark mode
- [ ] Include Icons: linkedIn and github
- [ ] Refactor Main.tsx
- [ ] Research: VSC Plugig, highlighting unused vars, classes...
- [ ] PWA Support:
  - [x] Make website installable as PWA (create manifest file)
  - [ ] Include button to install PWA
  - [ ] Make PWA offline usable (create service worker)
  - [ ] Optional: Use vite-plugin-pwa
- [ ] Migrate custom CSS to Tailwind CSS for styling
- [ ] Protect main branch and allow merging only via pull requests
- [ ] Add Prettier checks to GitHub Actions pipeline
- [ ] Refactor SEO Open Graph tags
- [ ] Implement React internationalization (i18n)
- [ ] Implement Analytics
- [ ] Include tests for components, e.g. snapshot tests
- [ ] Extend development guidelines (branching, PRs, code style, testing)
- [ ] Typewriter Effect - welcome section
- [ ] Implementing Routing: HashRouter or BrowserRouter
- [ ] Print Version
