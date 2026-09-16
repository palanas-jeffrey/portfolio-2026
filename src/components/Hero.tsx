import { motion } from 'framer-motion';
import {hero} from '../data/portfolioData';

export function Hero() {
  return (
    <motion.section
      className="hero section"
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className="hero-copy">
        <span className="eyebrow">{hero.eyebrow}</span>
        <h1>{hero.title}</h1>
        <p>{hero.description}</p>

        <div className="cta-row">
          <a className="button primary" href="#projects">
            {hero.actions.primary}
          </a>
        </div>

        <ul className="stats-list" aria-label="Key metrics">
          {hero.stats.map((stat) => (
            <li key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </li>
          ))}
        </ul>
      </div>

      <motion.div
        className="hero-panel"
        initial={{ opacity: 0, scale: 0.96, x: 24 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
      >
        <div className="panel-badge">
          <span className="pulse-dot" aria-hidden="true" />
          {hero.panel.badge}
        </div>

        <div className="mini-card highlighted">
          <span className="label">Current focus</span>
          <strong>{hero.panel.focus}</strong>
        </div>

        <div className="mini-card">
          <span className="label">Stack</span>
          <div className="stack-pills">
            {hero.panel.stack.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>

        <div className="code-window" aria-label="Developer summary">
          <div className="window-dots">
            <span />
            <span />
            <span />
          </div>
          <pre>{hero.panel.code}</pre>
        </div>
      </motion.div>
    </motion.section>
  )
}
