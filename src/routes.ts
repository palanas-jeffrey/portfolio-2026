export const routes = {
  home: '/',
  builds: '/builds',
  projectsArchive: '/projects-archive',
} as const

export function isBuildsRoute(pathname: string) {
  return (
    pathname.endsWith(routes.builds) ||
    pathname.endsWith(routes.projectsArchive)
  )
}
