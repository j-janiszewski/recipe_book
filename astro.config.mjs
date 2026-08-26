// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
//
// GitHub Pages serves project sites from https://<user>.github.io/<repo>/,
// so `base` must match your repository name exactly (leading + trailing slash).
// Update both values below once you know the repo's name/owner, then the
// deploy workflow in .github/workflows/deploy.yml will pick them up.
export default defineConfig({
  site: 'https://j-janiszewski.github.io',
  base: '/recipe_book/',
});
