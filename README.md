# Spiżarnia — domowa książka kucharska

Statyczna strona z przepisami, zbudowana w [Astro](https://astro.build). Przepisy
są zwykłymi plikami Markdown w repozytorium — nie ma bazy danych ani panelu
admina. Każdy push do `main` automatycznie buduje i publikuje stronę na
GitHub Pages.

## Jak dodać nowy przepis

1. Stwórz plik w `src/content/recipes/`, np. `src/content/recipes/moj-przepis.md`.
2. Uzupełnij nagłówek (frontmatter) i treść, np.:

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

3. Dostępne kategorie (`tags`) zdefiniowane są w `src/data/categories.ts`:
   `sniadanie`, `obiad`, `koktajl`, `ciasto`, `pasta-kanapkowa`, `sos`, `ogolne`.
   Dodanie nowej kategorii = dopisanie wpisu w tym pliku.
4. Pola makroskładników i `servings` są opcjonalne — zostaw `null`, jeśli
   nie ma danych. Strona sama pomija puste pola.
5. Commit + push do `main`. GitHub Actions zbuduje stronę i wystawi ją na
   GitHub Pages — nic więcej nie trzeba robić ręcznie.

## Rozwój lokalny

```bash
npm install
npm run dev       # podgląd na localhost
npm run build     # build produkcyjny do ./dist
npm run preview   # podgląd zbudowanej wersji
```

## Zanim wdrożysz na GitHub Pages

1. W `astro.config.mjs` ustaw `site` na `https://<twoj-uzytkownik>.github.io`
   i `base` na `/<nazwa-repozytorium>` (z ukośnikiem na początku).
2. W ustawieniach repozytorium na GitHubie: **Settings → Pages → Source** →
   wybierz **GitHub Actions**.
3. Workflow w `.github/workflows/deploy.yml` uruchamia się przy każdym push
   do `main` i sam publikuje `dist/` na GitHub Pages.

## Migracja z poprzedniej wersji (bookdown)

Wszystkie przepisy z plików `.Rmd` zostały przeniesione do
`src/content/recipes/*.md`, po jednym pliku na przepis, z metadanymi w
frontmatterze (kategoria, porcje, makroskładniki, źródło). Stary workflow
`bookdown.yaml` (R + Netlify) nie jest już używany — repozytorium nie
wymaga R, pandoc ani `renv`.
