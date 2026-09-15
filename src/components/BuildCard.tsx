import { motion } from 'framer-motion'
import { useState } from 'react'

import type { Build } from '../data/buildsData'
import { ScreenshotThumbnail } from './ScreenshotThumbnail'

type BuildCardProps = {
  build: Build
  index: number
}

export function BuildCard({ build, index }: BuildCardProps) {
  const [imageFailed, setImageFailed] = useState(false)

  return (
    <motion.article
      className="build-card"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: 'easeOut' }}
      whileHover={{ y: -8 }}
    >
      <div className="build-screenshot">
        {build.screenshot && build.screenshot.length > 0 && !imageFailed ? (
          <ScreenshotThumbnail
            src={build.screenshot[0]}
            alt={`${build.name} screenshot`}
            onImageError={() => setImageFailed(true)}
          />
        ) : (
          <div className="build-screenshot-fallback" aria-label={`${build.name} preview unavailable`}>
            <span aria-hidden="true">&lt;/&gt;</span>
            <small>Preview unavailable</small>
          </div>
        )}
      </div>

      <div className="build-card-content">
        <h3>{build.name}</h3>
        <p className="project-summary">{build.description}</p>

        <ul className="tech-list">
          {build.stack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        {(build.github || build.demo || build.frontend || build.backend) && (
          <div className="project-links">
            {build.demo && (
              <a href={build.demo} target="_blank" rel="noreferrer">
                Live demo
              </a>
            )}
            {build.github && (
              <a href={build.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            )}
            {build.frontend && (
              <a href={build.frontend} target="_blank" rel="noreferrer">
                Frontend - GitHub 
              </a>
            )}
            {build.backend && (
              <a href={build.backend} target="_blank" rel="noreferrer">
                Backend - GitHub
              </a>
            )}
          </div>
        )}
      </div>
    </motion.article>
  )
}
