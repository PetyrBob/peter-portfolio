# Peter Bob Domogma's portfolio

Built with Astro, Tailwind CSS and MDX. Hosted on Vercel.

## Run it

You need Node.js 22.23.4 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:4321.

## Add projects and edit your details (no code)

1. Go to https://app.pagescms.org and sign in with GitHub.
2. Open `peter-portfolio`. If it isn't listed, install the Pages CMS GitHub app on this repo.
3. Use **Projects** to add work, **Profile** for your name, intro, email, resume and links, and **About page** for your About text.
4. Click **Save**. Vercel publishes the change in about a minute.

Pages CMS reads its settings from `.pages.yml`. Images go in `src/assets/projects`, and PDFs in `public/files`.

To add a project by hand instead, copy one of the files in `src/content/projects`, rename it, and edit it. Delete the `sample-*` projects and their images when your real work is in.

## Change the design

| To change | Edit |
| --- | --- |
| Colors and fonts | `src/styles/global.css` |
| Page layouts | `src/pages` and `src/components` |
| Kinds of work | `src/data/site.ts` and `.pages.yml` |

## Before you push

```bash
npm run check
npm run build
```
