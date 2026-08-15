import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const glossary = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/glossary' }),
  schema: z.object({
    term: z.string(),
    description: z.string(),
    category: z.string().optional(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    datePublished: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
    updated: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2}$/)
      .optional(),
    category: z.string().optional(),
  }),
});

export const collections = { glossary, blog };
