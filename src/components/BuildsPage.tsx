import { motion } from 'framer-motion'

import { BuildCard } from './BuildCard'
import { builds } from '../data/buildsData'
import { routes } from '../routes'

export function BuildsPage() {
  return (
    <section className="section builds-page">
      <div className="builds-page-intro">
        <a className="back-link" href={`${import.meta.env.BASE_URL}${routes.home.slice(1)}`}>
          ← Back to portfolio
        </a>
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span>Builds</span>
          <h1>Small projects, practical experiments.</h1>
          <p>
            A collection of practice projects and smaller builds that helped me
            sharpen my craft.
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
