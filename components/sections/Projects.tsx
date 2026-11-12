'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { projects, Project } from '@/data'
import { SectionHeading, Reveal, TiltCard, Badge, Button } from '@/components/ui'
import { staggerContainer, staggerItem } from '@/lib/animations'

const categories = [
  { id: 'all', label: 'All' },
  { id: 'ai-agents', label: 'AI & Agents' },
  { id: 'systems', label: 'Systems & C++' },
  { id: 'backend', label: 'Backend' },
]

function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  return (
    <TiltCard
      className={`h-full flex flex-col ${featured ? 'md:col-span-2' : ''}`}
      data-cursor="view"
    >
      <div className="flex flex-col h-full">
        <div className="flex-1">
          <h3 className={`font-bold font-heading text-text-primary mb-3 ${featured ? 'text-2xl' : 'text-xl'}`}>
            {project.title}
          </h3>
          <p className="text-text-secondary mb-4 leading-relaxed">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="primary" hover={false}>
                {tag}
              </Badge>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-3 pt-4 border-t border-border">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-text-secondary hover:text-primary transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>View Code</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </TiltCard>
  )
}

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>('all')

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  const filteredFeatured = filteredProjects.filter((p) => p.featured)
  const filteredOther = filteredProjects.filter((p) => !p.featured)

  return (
    <section id="projects" className="section bg-surface/50">
      <div className="container">
        <Reveal>
          <SectionHeading
            title="Projects"
            subtitle="AI agents, systems, and intelligent applications"
          />
        </Reveal>

        {/* Category Filter */}
        <Reveal>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  activeCategory === category.id
                    ? 'bg-primary text-white'
                    : 'bg-surface text-text-secondary hover:text-text-primary border border-border hover:border-border-hover'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </Reveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Featured Projects */}
            {filteredFeatured.length > 0 && (
              <div className="mb-12">
                <h3 className="text-2xl font-bold font-heading text-text-primary mb-6">
                  Featured Projects
                </h3>
                <motion.div
                  className="grid md:grid-cols-2 gap-6"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={staggerContainer}
                >
                  {filteredFeatured.map((project) => (
                    <motion.div key={project.id} variants={staggerItem}>
                      <ProjectCard project={project} featured />
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            )}

            {/* More Projects */}
            {filteredOther.length > 0 && (
              <div>
                <h3 className="text-2xl font-bold font-heading text-text-primary mb-6">
                  More Projects
                </h3>
                <motion.div
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={staggerContainer}
                >
                  {filteredOther.map((project) => (
                    <motion.div key={project.id} variants={staggerItem}>
                      <ProjectCard project={project} />
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            )}

            {filteredProjects.length === 0 && (
              <div className="text-center py-12">
                <p className="text-text-muted">
                  No projects found in this category
                </p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* View All on GitHub */}
        <Reveal>
          <div className="mt-12 text-center">
            <Button
              variant="secondary"
              size="lg"
              href="https://github.com/Farooq-21"
              showArrow
            >
              View all on GitHub
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
