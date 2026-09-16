import { motion } from 'framer-motion';
import { type TimelineItem, about } from '../data/portfolioData';


type AboutProps = {
  timeline: TimelineItem[]
}

export function About({ timeline }: AboutProps) {
  return (
    <motion.section
      id="about"
      className="section"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 'some' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="section-heading">
        <span>{about.eyebrow}</span>
        <h2>{about.title}</h2>
      </div>

      <div className="story-layout">
        <div className="story-card">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="timeline" aria-label="Career timeline">
          {timeline.map((item, index) => (
            <motion.div
              key={item.year}
              className="timeline-item"
              initial={{ opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 'some' }}
              transition={{ duration: 0.45, delay: index * 0.08, ease: 'easeOut' }}
            >
              <span className="timeline-year">{item.year}</span>
              <div className="timeline-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
