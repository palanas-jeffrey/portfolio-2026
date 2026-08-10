import { motion } from 'framer-motion'

import type { Project } from '../data/portfolioData'

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
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="section-heading">
        <span>Selected work</span>
        <h2>Projects built with real-world constraints.</h2>
      </div>

      <div className="project-grid">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            className="project-card"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: index * 0.08, ease: 'easeOut' }}
            whileHover={{ y: -8 }}
          >
            <span className="project-category">{project.category}</span>
            <h3>{project.title}</h3>
            <p className="project-summary">{project.summary}</p>

            <div className="case-detail">
              <h4>Problem</h4>
              <p>{project.challenge}</p>
            </div>
            <div className="case-detail">
              <h4>Solution</h4>
              <p>{project.solution}</p>
            </div>
            <div className="case-detail">
              <h4>Result</h4>
              <p>{project.result}</p>
            </div>

            <ul className="tech-list">
              {project.stack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <div className="project-links">
              <a href={project.demo} target="_blank" rel="noreferrer">
                Live demo
              </a>
              <a href={project.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  )
}
