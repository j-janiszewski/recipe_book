import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const recipes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/recipes' }),
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()).default([]),
    servings: z.number().nullable().default(null),
    source: z.string().url().nullable().default(null),
    sourceName: z.string().nullable().default(null),
    calories: z.number().nullable().default(null),
    protein: z.number().nullable().default(null),
    carbs: z.number().nullable().default(null),
    fat: z.number().nullable().default(null),
  }),
});

export const collections = { recipes };
