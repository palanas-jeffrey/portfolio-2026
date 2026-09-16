import { motion } from 'framer-motion'

import { skills, workedWith, skillsData } from '../data/portfolioData'

export type Skill = {
  name: string
  category: string
}

function groupByCategory(skills: Skill[]) {
  return skills.reduce<Record<string, Skill[]>>((groups, skill) => {
    const group = groups[skill.category] ?? []
    group.push(skill)
    groups[skill.category] = group
    return groups
  }, {})
}

export function Skills() {
  const grouped = groupByCategory(skills)
  const groupedWorkedWith = groupByCategory(workedWith)

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
        <span>{skillsData.eyebrow}</span>
        <h2>{skillsData.title}</h2>
      </div>

      <div className="skills-groups">
        {Object.entries(grouped).map(([category, items], groupIndex) => (
          <motion.div
            key={category}
            className="skill-group"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: groupIndex * 0.08, ease: 'easeOut' }}
          >
            <span className="skill-group-label">{category}</span>
            <div className="skill-tags">
              {items.map((skill, index) => (
                <motion.span
                  key={skill.name}
                  className="skill-tag"
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.35, delay: index * 0.03, ease: 'easeOut' }}
                  whileHover={{ y: -2 }}
                >
                  {skill.name}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="section-heading">
        <h2>{skillsData.workedWith}</h2>
      </div>

      <div className="skills-groups">
        {Object.entries(groupedWorkedWith).map(([category, items], groupIndex) => (
          <motion.div
            key={category}
            className="skill-group"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: groupIndex * 0.08, ease: 'easeOut' }}
          >
            <span className="skill-group-label">{category}</span>
            <div className="skill-tags">
              {items.map((skill, index) => (
                <motion.span
                  key={skill.name}
                  className="skill-tag"
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.35, delay: index * 0.03, ease: 'easeOut' }}
                  whileHover={{ y: -2 }}
                >
                  {skill.name}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
