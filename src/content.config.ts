import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';
import { categoryKeys } from './data/site';

// Files that start with an underscore, like _template.mdx, are ignored.
const projects = defineCollection({
  loader: glob({ pattern: '**/[^_]*.mdx', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string().max(160),
      category: z.enum(categoryKeys),
      cover: image(),
      coverAlt: z.string(),
      role: z.string(),
      tools: z.array(z.string()).default([]),
      year: z.number().int(),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
      links: z.array(z.object({ label: z.string(), url: z.url() })).default([]),
    }),
});

export const collections = { projects };
