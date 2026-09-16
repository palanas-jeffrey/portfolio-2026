export const baseUrl = import.meta.env.BASE_URL

export const routes = {
  home: '/',
  builds: '/builds',
  projectsArchive: '/projects-archive',
} as const

export function withBaseUrl(path: string) {
  return `${baseUrl}${path.replace(/^\/+/, '')}`
}

export function withHashRoute(path: string) {
  return `${withBaseUrl('')}#/${path.replace(/^\/+/, '')}`
}

export function isBuildsRoute(pathname: string, hash: string) {
  const routePath = hash.startsWith('#/') ? hash.slice(1) : pathname

  return (
    routePath.endsWith(routes.builds) ||
    routePath.endsWith(routes.projectsArchive)
  )
}
