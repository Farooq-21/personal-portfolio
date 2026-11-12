'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  SiPython,
  SiCplusplus,
  SiReact,
  SiNextdotjs,
  SiFastapi,
  SiGit,
} from 'react-icons/si'
import { Code2, Database, Layers, Wrench, Sparkles } from 'lucide-react'
import { skillCategories } from '@/data'
import { SectionHeading, Reveal, Badge } from '@/components/ui'
import { staggerContainer, staggerItem } from '@/lib/animations'

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  'AI & LLMs': Sparkles,
  Frameworks: Layers,
  Languages: Code2,
  'Backend & APIs': Database,
  Frontend: SiReact,
  Tools: Wrench,
}

const skillIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Python: SiPython,
  'C++': SiCplusplus,
  React: SiReact,
  'Next.js': SiNextdotjs,
  FastAPI: SiFastapi,
  'Git/GitHub': SiGit,
}

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>('all')

  const filteredCategories =
    activeCategory === 'all'
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === activeCategory)

  return (
    <section id="skills" className="section">
      <div className="container">
        <Reveal>
          <SectionHeading
            title="Skills"
            subtitle="Technologies and tools I work with"
          />
        </Reveal>

        {/* Category Filter */}
        <Reveal>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                activeCategory === 'all'
                  ? 'bg-primary text-white'
                  : 'bg-surface text-text-secondary hover:text-text-primary border border-border hover:border-border-hover'
              }`}
            >
              All Skills
            </button>
            {skillCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  activeCategory === category.id
                    ? 'bg-primary text-white'
                    : 'bg-surface text-text-secondary hover:text-text-primary border border-border hover:border-border-hover'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Skills Grid */}
        <motion.div layout className="space-y-8">
          <AnimatePresence>
            {filteredCategories.map((category) => {
              const CategoryIcon =
                categoryIcons[category.name] || Code2

              return (
                <motion.div
                  key={category.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-surface border border-border rounded-xl p-6 md:p-8"
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <CategoryIcon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold font-heading text-text-primary">
                      {category.name}
                    </h3>
                  </div>

                  {/* Skills */}
                  <motion.div
                    className="flex flex-wrap gap-3"
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                  >
                    {category.skills.map((skill, index) => {
                      const SkillIcon =
                        skillIcons[skill]

                      return (
                        <motion.div
                          key={skill}
                          variants={staggerItem}
                          custom={index}
                        >
                          <Badge
                            variant="secondary"
                            className="text-base px-4 py-2 cursor-default"
                          >
                            {SkillIcon && (
                              <SkillIcon className="w-4 h-4" />
                            )}
                            {skill}
                          </Badge>
                        </motion.div>
                      )
                    })}
                  </motion.div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
