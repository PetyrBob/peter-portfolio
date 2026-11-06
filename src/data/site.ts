// Your personal details. Edit this file to update them across the whole site.
// A contact link stays hidden until you fill in its address.
export const site = {
  name: 'Peter Bob Domogma',
  title: 'Peter Bob Domogma, UI/UX designer and front-end developer',
  description:
    'Portfolio of Peter Bob Domogma: UI/UX design, logos and branding, social media, print and front-end work.',
  intro: 'I design interfaces and brands, then build them for the web.',
  email: '', // e.g. 'you@example.com'
  resume: '', // e.g. '/peter-domogma-resume.pdf' (put the file in the public folder)
  links: [
    { label: 'LinkedIn', url: '' },
    { label: 'GitHub', url: '' },
    { label: 'Behance', url: '' },
  ],
};

// The five kinds of work. The key is what you type as `category` in a project file.
export const categories = {
  'ui-ux': { label: 'UI/UX design', blurb: 'Apps, websites and the research behind them.' },
  branding: { label: 'Logos and branding', blurb: 'Marks and visual identities.' },
  social: { label: 'Social media', blurb: 'Posts and campaigns for the feed.' },
  print: { label: 'Print media', blurb: 'Posters, flyers and other printed pieces.' },
  frontend: { label: 'Front-end', blurb: 'Interfaces built with code.' },
} as const;

export type Category = keyof typeof categories;
export const categoryKeys = Object.keys(categories) as [Category, ...Category[]];
