export const baseUrl = import.meta.env.BASE_URL

export const routes = {
  home: '/',
  builds: '/builds',
  projectsArchive: '/projects-archive',
} as const

export function withBaseUrl(path: string) {
  return `${baseUrl}${path.replace(/^\/+/, '')}`
}

export function isBuildsRoute(pathname: string) {
  return (
    pathname.endsWith(routes.builds) ||
    pathname.endsWith(routes.projectsArchive)
  )
}
