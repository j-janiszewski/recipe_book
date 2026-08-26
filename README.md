# 🍲 Spiżarnia — Your Personal Recipe Library

**Spiżarnia** is Polish for **“pantry”** — a place where everything you need for good food lives in one place.

This is a simple, personal cookbook for keeping all your recipes together in a **consistent, standardised format**. No more scattered notes, screenshots, bookmarks, or recipes saved across different apps and websites.

The cookbook is built with [Astro](https://astro.build), with every recipe stored as a plain Markdown file in the repository. There is no database or admin panel — the repository itself is the source of truth.

Push a change to `main`, and GitHub Actions automatically builds and publishes the latest version to GitHub Pages.

**Simple, version-controlled, portable, and completely free.**

> 🇵🇱 **The recipes and interface are in Polish.**
> *Spiżarnia* is the Polish word for *pantry* — reflecting the idea of keeping your entire personal collection of recipes organised in one place.

---

## ✨ The idea

The goal is simple:

> **Every recipe should follow the same structure, so the whole collection stays easy to use as it grows.**

Recipes are stored as individual Markdown files, with a small amount of metadata such as their title, categories, servings, optional nutrition information, and source.

The actual recipe remains ordinary Markdown, so it's easy to read and edit without any special tools.

```text
src/content/recipes/
├── naleśniki.md
├── curry-z-kurczakiem.md
├── sernik.md
└── ...
```

This approach keeps the cookbook organised without turning it into a complicated application.

---

## ➕ Adding a recipe

Create a new `.md` file in:

```text
src/content/recipes/
```

Add the recipe's metadata at the top, followed by the recipe itself:

```markdown
---
title: "Mój przepis"

tags:
  - obiad

servings: 4

source: null
sourceName: null

calories: null
protein: null
carbs: null
fat: null
---

### Lista składników

- 2 jajka
- 200 g mąki

### Przygotowanie

1. Wymieszaj składniki.
2. Upiecz.
```

Categories are managed centrally in `src/data/categories.ts`, so the collection can be extended without changing the recipe format.

Nutritional information and servings are optional. If something isn't known, simply leave it as `null` — the site automatically hides empty fields.

Once the recipe is ready:

```bash
git add .
git commit -m "Add my recipe"
git push
```

That's it. The website will rebuild automatically.

---

## 🚀 Automatic deployment

Every push to `main` triggers the GitHub Actions workflow.

```text
Edit recipe
     ↓
Commit & push
     ↓
GitHub Actions
     ↓
Astro build
     ↓
GitHub Pages
```

There is no manual deployment step.

---

## 💻 Local development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build the production site:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

The production build is generated in `./dist`.

---

## 🌐 GitHub Pages setup

Before deploying, configure `astro.config.mjs` with your GitHub Pages URL:

```js
site: "https://<your-username>.github.io",
base: "/<repository-name>",
```

For example:

```js
site: "https://john.github.io",
base: "/spizarnia",
```

Then enable GitHub Actions as the Pages source:

**GitHub → Settings → Pages → Source → GitHub Actions**

The workflow in `.github/workflows/deploy.yml` takes care of building and publishing the site on every push to `main`.

---

## 🧰 The stack

Spiżarnia uses a deliberately small, **100% free stack**:

* **Astro** — static site generation
* **Markdown** — recipe storage
* **GitHub** — repository and version control
* **GitHub Actions** — automated builds and deployment
* **GitHub Pages** — free hosting

### Cost: $0

No database.
No backend.
No CMS.
No paid hosting.
No subscription.

Just a Git repository and a static website.

---

