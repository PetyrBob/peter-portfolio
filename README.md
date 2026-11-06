# Peter Bob Domogma's portfolio

Built with Astro, Tailwind CSS and MDX. Hosted on Vercel.

## Run it

You need Node.js 22.23.4 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:4321.

## Change things

| To change | Edit |
| --- | --- |
| Name, intro, email, links, resume | `src/data/site.ts` |
| Colors and fonts | `src/styles/global.css` |
| About page | `src/pages/about.astro` |
| Kinds of work | `src/data/site.ts` |

## Add a project

1. Put your images in a new folder: `src/assets/projects/your-project/`.
2. Copy `src/content/projects/_template.mdx` and rename it `your-project.mdx`.
3. Fill in the details and set `draft: false`.
4. Commit and push. Vercel publishes it automatically.

Delete the five `sample-*.mdx` files and their image folders when your real projects are in.

## Before you push

```bash
npm run check
npm run build
```
