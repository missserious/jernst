# Julia Ernst – New Website

This is the new version of my website, built with **React**, **TypeScript**, and **Vite**.

## Features

- Minimal Vite + React + TypeScript setup
- Automatic deployment to GitHub Pages via GitHub Actions
- Prettier and ESLint configured for consistent code style

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

## Commit Messages

To keep a clean and understandable git history, please follow this format for commit messages:

```
<type>: <short, descriptive message>
```

**Types:**

- `feat` → New feature
- `fix` → Bug fix
- `docs` → Documentation changes
- `chore` → Maintenance / setup changes
- `refactor` → Code restructuring
- `improvement` → Small improvements / optimizations

**Message Guidelines:**

- Write in imperative form (`Add ...`, `Fix ...`)
- Keep it short and descriptive
- Make each commit atomic (one logical change per commit)

**Examples:**

```
feat: add new color scheme
fix: correct header alignment
docs: update README with instructions
chore: update npm dependencies
improvement: render skill list
refactor: s
```
