# Portfolio

Personal portfolio site, built with Angular. Live at
[prabhath112.github.io/portfolio](https://prabhath112.github.io/portfolio).

## Stack

- Angular 22 (standalone components, signals, `@if`/`@for` control flow)
- SSR + build-time prerendering (`@angular/ssr`, static output mode)
- SCSS with CSS custom properties for light/dark theming
- Vitest for unit tests
- ESLint (`angular-eslint`) for linting

## Structure

```
src/
  app/
    core/            # theme service, app-wide singletons
    layout/           # header, footer
    pages/            # one folder per route
    shared/           # reusable components (project-card)
  content/            # profile, experience, and project data as typed constants
```

Page content lives in `src/content/` as plain TypeScript objects, not hardcoded
in templates, so updating a job title or adding a project doesn't require
touching component logic.

## Running locally

```bash
npm install
npm start          # dev server at localhost:4200
npm test           # unit tests
npm run lint        # eslint
npm run build       # production build, output in dist/portfolio/browser
```

## Deployment

Pushes to `main` build and deploy automatically to GitHub Pages via
`.github/workflows/deploy.yml`. `ci.yml` runs lint, tests, and build on every
push and pull request. `codeql.yml` and `secret-scan.yml` run security
scanning; Dependabot keeps dependencies current.

## Resume

The header's "Resume" link points to `/resume.pdf`. Drop a PDF at
`public/resume.pdf` to enable it.
