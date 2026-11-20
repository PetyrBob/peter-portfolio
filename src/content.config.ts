import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';
import { categoryKeys } from './data/site';

// Projects are Markdown files, usually added through Pages CMS.
// Files that start with an underscore are ignored.
const projects = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/projects' }),
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

// Single pages whose text is edited in Pages CMS, such as About.
const pages = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/pages' }),
  schema: z.object({ title: z.string() }),
});

export const collections = { projects, pages };
