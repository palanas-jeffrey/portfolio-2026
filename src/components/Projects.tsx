import { motion } from 'framer-motion'

import  { type Project, projectHeading } from '../data/portfolioData'
import { routes, withBaseUrl } from '../routes'
import { ScreenshotThumbnail } from './ScreenshotThumbnail'

type ProjectsProps = {
  projects: Project[]
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <motion.section
      id="projects"
      className="section"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 'some' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="section-heading">
        <span>{projectHeading.eyebrow}</span>
        <h2>{projectHeading.title}</h2>
      </div>

      <div className="project-grid">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            className="project-card"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 'some' }}
            transition={{ duration: 0.55, delay: index * 0.08, ease: 'easeOut' }}
            whileHover={{ y: -8 }}
          >
            <span className="project-category">{project.category}</span>
            <h3>{project.title}</h3>
            {project.screenshots && project.screenshots.length > 0 && (
              <div className="project-screenshots">
                <ScreenshotThumbnail
                  src={project.screenshots[0]}
                  alt={`${project.title} screenshot`}
                  images={project.screenshots}
                />
              </div>
            )}
            <p className="project-summary">{project.summary}</p>

            <div className="case-detail">
              <h4>Problem</h4>
              <ul className="case-detail-list">
                {project.challenge.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="case-detail">
              <h4>Solution</h4>
              <ul className="case-detail-list">
                {project.solution.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="case-detail">
              <h4>Outcome</h4>
              <ul className="case-detail-list">
                {project.outcome.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <ul className="tech-list">
              {project.stack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <div>
              {project.note && (
                <p className="project-card-note">{project.note}</p>
              )}
            </div>

            <div className="project-links">
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noreferrer">
                  Live demo
                </a>
              )}
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </div>
      <a
        className="button primary builds-cta"
        href={withBaseUrl(routes.builds)}
      >
        View other builds
      </a>
    </motion.section>
  )
}
