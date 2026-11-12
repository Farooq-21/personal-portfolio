'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Briefcase } from 'lucide-react'
import { experiences } from '@/data'
import { SectionHeading, Reveal, Badge, Card } from '@/components/ui'
import { staggerContainer, staggerItem } from '@/lib/animations'

export function Experience() {
  return (
    <section id="experience" className="section bg-surface/50">
      <div className="container">
        <Reveal>
          <SectionHeading
            title="Experience"
            subtitle="Building real-world AI solutions"
          />
        </Reveal>

        <div className="max-w-4xl mx-auto">
          <motion.div
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            {/* Timeline line */}
            <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-border hidden md:block" />

            {experiences.map((exp) => (
              <motion.div
                key={exp.id}
                variants={staggerItem}
                className="relative mb-8 last:mb-0"
              >
                <Card className="md:ml-20">
                  {/* Timeline dot */}
                  <div className="absolute -left-12 top-6 hidden md:flex items-center justify-center w-8 h-8 bg-primary rounded-full border-4 border-background">
                    <Briefcase className="w-4 h-4 text-white" />
                  </div>

                  <div className="flex flex-col gap-4">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                      <div>
                        <h3 className="text-xl font-bold font-heading text-text-primary mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-lg text-primary font-medium">
                          {exp.company}
                        </p>
                      </div>
                      {exp.isCurrent && (
                        <Badge variant="accent">Present</Badge>
                      )}
                    </div>

                    {/* Meta */}
                    <div className="flex flex-wrap gap-4 text-sm text-text-muted">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        <span>
                          {new Date(exp.startDate).toLocaleDateString('en-US', {
                            month: 'short',
                            year: 'numeric',
                          })}{' '}
                          -{' '}
                          {exp.isCurrent
                            ? 'Present'
                            : new Date(exp.endDate).toLocaleDateString('en-US', {
                                month: 'short',
                                year: 'numeric',
                              })}
                        </span>
                      </div>
                      {exp.location && (
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      )}
                    </div>

                    {/* Description */}
                    <ul className="space-y-2 text-text-secondary">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-primary mt-1.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
