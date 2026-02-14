# Julia Ernst – New Website

This is the new version of my website, built with **React**, **TypeScript**, and **Vite**.

## Features

- ⚡ Minimal Vite + React + TypeScript setup
- 🚀 Automatic deployment to GitHub Pages via GitHub Actions
- 🛠️ Prettier and ESLint configured for consistent code style
- 📱 Installable Progressive Web App (PWA)

<!--
## Template Usage

This repository is designed not only as my personal portfolio but also as a **starter template** for future projects.
It includes pre-configured **ESLint**, **Prettier**, **TypeScript**, **React**, and **Vite** setup, along with GitHub Actions for automatic deployment.

You can reuse this setup in new projects by cloning the repo and adapting the components, styles, and configuration.-->

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

### ✅ Commits & Guidelines

- [x] Add commit message guidelines
- [x] Export commit guidelines to `docs/` folder and link from README

### 🎨 CSS / Styling

- [x] Mobile first design
- [x] Fully responsive
- [ ] Clean up CSS: font, color, spacing
- [ ] Refactor CSS for dark mode
- [ ] Migrate custom CSS to Tailwind CSS

### 🖼️ Icons & UI

- [x] Include social icons: LinkedIn and GitHub
- [x] Refactor `Main.tsx`
- [ ] Typewriter effect in Welcome section

### 🛠️ Dev Tools & Workflow

- [ ] Research VSCode plugins (highlight unused vars, classes, etc.)
- [ ] Protect `main` branch; allow merging only via pull requests
- [ ] Add Prettier checks to GitHub Actions pipeline
- [ ] Add ESLint checks to GitHub Actions pipeline
- [ ] Extend development guidelines (branching, PRs, code style, testing)

### 🌐 PWA (Progressive Web App)

- [x] Make website installable as PWA (manifest file)
- [ ] Include install button for PWA
- [ ] Make PWA offline usable (service worker)
- [ ] Optional: use `vite-plugin-pwa`

### 🌍 SEO & Analytics

- [ ] Refactor SEO Open Graph tags
- [ ] Implement React internationalization (i18n)
- [ ] Implement Analytics

### 🔬 Testing

- [ ] Include tests for components (e.g., snapshot tests)

### 🚦 Routing

- [ ] Implement routing: `HashRouter` or `BrowserRouter`
- [ ] Add 404 page / NotFound component for unknown routes
  - Ensure it works locally and on GitHub Pages

### 🖨️ Print

- [ ] Print version

### 🏷️ Versioning / Git Notes

- [ ] Tag branch as `v0.1.0` when design is stable and ready for showcase

### 📦 Project Template

- [ ] Prepare repository as a reusable template for future projects
  - ESLint / Prettier / Vite / React / TypeScript setup ready to go
  - Include basic components, routing, PWA, and testing setup
  - Document setup and usage in README
