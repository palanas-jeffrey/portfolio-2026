import { motion } from 'framer-motion'

import type { Skill } from '../data/portfolioData'

type SkillsProps = {
  skills: Skill[]
}

export function Skills({ skills }: SkillsProps) {
  return (
    <motion.section
      id="skills"
      className="section"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="section-heading">
        <span>Core stack</span>
        <h2>Tools I use to turn complexity into clarity.</h2>
      </div>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="skill-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.06, ease: 'easeOut' }}
            whileHover={{ y: -6 }}
          >
            <div className="skill-header">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="skill-track" aria-label={`${skill.name} proficiency`}>
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
