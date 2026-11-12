'use client'

import { motion } from 'framer-motion'
import { Code2, Sparkles, GraduationCap, Rocket } from 'lucide-react'
import { profile } from '@/data'
import { SectionHeading, Reveal, SpotlightCard } from '@/components/ui'
import { staggerContainer, staggerItem } from '@/lib/animations'

const highlights = [
  {
    icon: GraduationCap,
    title: 'CS Student',
    description: 'Air University, 5th Semester',
  },
  {
    icon: Code2,
    title: 'Agentic AI Developer',
    description: 'IRAB Technologies, 6 months',
  },
  {
    icon: Sparkles,
    title: 'AI Focus',
    description: 'Generative AI & Agentic AI',
  },
  {
    icon: Rocket,
    title: 'Mission',
    description: 'Turning ideas into intelligent solutions',
  },
]

export function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <Reveal>
          <SectionHeading
            title="About Me"
            subtitle="Student, developer, and AI enthusiast building the future"
          />
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Main About Text */}
          <Reveal>
            <div className="space-y-6">
              <p className="text-lg text-text-secondary leading-relaxed">
                {profile.about}
              </p>
              <p className="text-lg text-text-secondary leading-relaxed">
                I&apos;m driven by curiosity and a passion for creating what comes next.
                Whether it&apos;s building intelligent agents or exploring new AI
                frameworks, I approach every project as an opportunity to learn and
                make an impact.
              </p>
            </div>
          </Reveal>

          {/* Highlights Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            {highlights.map((highlight) => {
              const Icon = highlight.icon
              return (
                <motion.div key={highlight.title} variants={staggerItem}>
                  <SpotlightCard className="h-full">
                    <div className="flex flex-col items-start gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-text-primary mb-1">
                          {highlight.title}
                        </h3>
                        <p className="text-sm text-text-secondary">
                          {highlight.description}
                        </p>
                      </div>
                    </div>
                  </SpotlightCard>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
