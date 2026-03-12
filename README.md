# Julia Ernst – New Website 2.0

## Features

- <img src="docs/icons-export/flash.svg" width="20" title="Minimal setup" /> Minimal Vite + React + TypeScript setup
- <img src="docs/icons-export/gear.svg" width="20" title="CI/GitHub Actions" /> Automatic deployment to GitHub Pages via GitHub Actions
- <img src="docs/icons-export/tool.svg" width="20" title="Prettier and ESLint" /> Prettier and ESLint configured for consistent code style
- <img src="docs/icons-export/install.svg" width="20" title="PWA" /> Installable Progressive Web App (PWA)
- <img src="docs/icons-export/test.svg" width="20" title="Tests" /> Unit testing with Jest <!-- and coverage reporting -->

<!--
## Template Usage

This repository is designed not only as my personal portfolio but also as a **starter template** for future projects.
It includes pre-configured **ESLint**, **Prettier**, **TypeScript**, **React**, and **Vite** setup, along with GitHub Actions for automatic deployment.

You can reuse this setup in new projects by cloning the repo and adapting the components, styles, and configuration.-->

## Deployment

The website is automatically deployed on every push to the `main` branch.

<img src="docs/icons-export/rocket.svg" width="20" title="Rocket" /> **[Live Version](https://missserious.github.io/jernst)**

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## <img src="docs/icons-export/test.svg" width="20" title="Test" /> Tests

This project uses **Jest** for unit testing.

### Run tests

```bash
# Locally
npm run test

# TODO: For CI / with coverage:
# npm run test:ci
```

## <img src="docs/icons-export/note.svg" width="20" title="Note" /> Commit & Development Guidelines

Commit message conventions to keep a clean and readable git history.\
➡️ See the full guidelines here:
[Commit Guidelines](docs/commit_guidelines.md)

## <img src="docs/icons-export/todo.svg" width="20" title="Todo" /> TODO / Checklist

### <img src="docs/icons-export/document.svg" width="20" title="Document" /> Commits & Guidelines

- [x] Add commit message guidelines
- [x] Export commit guidelines to `docs/` folder and link from README
- [ ] VSC Plugins readme and workspace extention recommendations.
- [ ] .editorconfig

### <img src="docs/icons-export/paint.svg" width="20" title="Paint" /> CSS / Styling

- [x] Mobile first design
- [x] Fully responsive
- [ ] Clean up CSS: font, color, spacing
- [ ] Refactor CSS for dark mode
- [ ] Migrate custom CSS to Tailwind CSS

### <img src="docs/icons-export/image.svg" width="20" title="Image" /> Icons & UI

- [x] Include social icons: LinkedIn and GitHub
- [x] Refactor `Main.tsx`
- [ ] Typewriter effect in Welcome section

### <img src="docs/icons-export/gear.svg" width="20" title="CI/GitHub Actions" /> Dev Tools & Workflow

- [ ] Research VSCode plugins (highlight unused vars, classes, etc.)
- [ ] Protect `main` branch;
  - [x] Allow merging only via pull requests before merging (activate ruleset for main branch)
  - [ ] Allow merging only via status checks (build and tests) to pass before merging
- [ ] Add Prettier checks to GitHub Actions pipeline
- [ ] Add ESLint checks to GitHub Actions pipeline
- [ ] Extend development guidelines (branching, PRs, code style, testing)
- [x] Update Github Actions
- [ ] Check if node version warning will disappear - and re-update Github Actions

### <img src="docs/icons-export/globe.svg" width="20" title="Globe" /> PWA (Progressive Web App)

- [x] Make website installable as PWA (manifest file)
- [x] Include install button for PWA
- [x] Make PWA offline usable (service worker)
  - [x] Create service worker
  - [x] Register service worker
  - [x] Test serivce worker
    - [x] Issue: auto-generated files in /assets have hashes in their names - see comment in service-workers.js
  - [ ] Add a small offline fallback page so the app doesn't crash when the cache is missing and the user is offline.
- [ ] Optional: use `vite-plugin-pwa` - solution for Issue: Issue: auto-generated files

### <img src="docs/icons-export/chart.svg" width="20" title="Chart" /> SEO & Analytics

- [ ] Refactor SEO Open Graph tags
- [ ] Implement React internationalization (i18n)
- [ ] Implement Analytics

### <img src="docs/icons-export/test.svg" width="20" title="Tests" /> Testing

- [x] Include jest framework and sample tests
- [ ] Jest: Include npm run test:ci fpr CI pipeline
- [ ] Include snapshot tests, playwright or cypress.

### <img src="docs/icons-export/traffic.svg" width="20" title="Traffic" /> Routing

- [ ] Implement routing: `HashRouter` or `BrowserRouter`
- [ ] Add 404 page / NotFound component for unknown routes
  - Ensure it works locally and on GitHub Pages

### <img src="docs/icons-export/print.svg" width="20" title="Print" /> Print

- [ ] Print version

### <img src="docs/icons-export/tag.svg" width="20" title="Tag" /> Versioning / Git Notes / Docs

- [ ] Tag branch as `v0.1.0` when design is stable and ready for showcase
- [ ] Make docu/strategie for dependency update/upgrade

### <img src="docs/icons-export/package.svg" width="20" title="Package" /> Project Template

- [ ] Prepare repository as a reusable template for future projects
  - ESLint / Prettier / Vite / React / TypeScript setup ready to go
  - Include basic components, routing, PWA, and testing setup
  - Document setup and usage in README

```

```
