// Your personal details live in profile.json, which you can edit in Pages CMS
// under "Profile". A contact link stays hidden until you fill in its address.
import profile from './profile.json';

export const site = profile;

// The five kinds of work. The key is what a project's `category` is set to.
// Changing these needs a code edit, and the same change in .pages.yml.
export const categories = {
  'ui-ux': { label: 'UI/UX design', blurb: 'Apps, websites and the research behind them.' },
  branding: { label: 'Logos and branding', blurb: 'Marks and visual identities.' },
  social: { label: 'Social media', blurb: 'Posts and campaigns for the feed.' },
  print: { label: 'Print media', blurb: 'Posters, flyers and other printed pieces.' },
  frontend: { label: 'Front-end', blurb: 'Interfaces built with code.' },
} as const;

export type Category = keyof typeof categories;
export const categoryKeys = Object.keys(categories) as [Category, ...Category[]];
