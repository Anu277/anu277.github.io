export const ROUTES = {
  home: '/',
  about: '/about',
  projects: '/projects',
  project: (slug: string) => `/projects/${slug}`,
  research: '/research',
  researchArticle: (slug: string) => `/research/${slug}`,
  blog: '/blog',
  blogArticle: (slug: string) => `/blog/${slug}`,
  resume: '/resume',
  contact: '/contact',
} as const
