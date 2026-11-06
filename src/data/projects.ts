import { getCollection } from 'astro:content';

// Published projects: featured first, then newest first.
export async function getProjects() {
  const projects = await getCollection('projects', ({ data }) => !data.draft);
  return projects.sort(
    (a, b) => Number(b.data.featured) - Number(a.data.featured) || b.data.year - a.data.year,
  );
}
