import { motion } from 'framer-motion'

import { BuildCard } from './BuildCard'
import { builds, buildPageContent } from '../data/buildsData'
import { routes, withHashRoute } from '../routes'

export function BuildsPage() {
  return (
    <section className="section builds-page">
      <div className="builds-page-intro">
        <a className="back-link" href={withHashRoute(routes.home)}>
          {buildPageContent.backLink.text}
        </a>
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span>{buildPageContent.headSpan}</span>
          <h1>{buildPageContent.title}</h1>
          <p>
            {buildPageContent.description}
          </p>
        </motion.div>
      </div>

      <div className="build-grid">
        {builds.map((build, index) => (
          <BuildCard key={build.name} build={build} index={index} />
        ))}
      </div>
    </section>
  )
}
