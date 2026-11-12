'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Calendar, MapPin, BookOpen } from 'lucide-react'
import { education } from '@/data'
import { SectionHeading, Reveal, Card, Badge } from '@/components/ui'
import { staggerContainer, staggerItem } from '@/lib/animations'

export function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <Reveal>
          <SectionHeading
            title="Education"
            subtitle="Building a strong foundation in computer science"
          />
        </Reveal>

        <div className="max-w-4xl mx-auto">
          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            {education.map((edu) => (
              <motion.div key={edu.id} variants={staggerItem}>
                <Card>
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                        <GraduationCap className="w-8 h-8 text-primary" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                        <div>
                          <h3 className="text-xl font-bold font-heading text-text-primary mb-1">
                            {edu.degree}
                          </h3>
                          <p className="text-lg text-primary font-medium">
                            {edu.institution}
                          </p>
                        </div>
                        {edu.isCurrent && (
                          <Badge variant="accent">Current</Badge>
                        )}
                      </div>

                      {/* Meta Information */}
                      <div className="flex flex-wrap gap-4 text-sm text-text-muted mb-4">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4" />
                          <span>
                            {new Date(edu.startDate).toLocaleDateString(
                              'en-US',
                              {
                                month: 'short',
                                year: 'numeric',
                              }
                            )}{' '}
                            -{' '}
                            {edu.isCurrent
                              ? 'Present'
                              : new Date(edu.endDate).toLocaleDateString(
                                  'en-US',
                                  {
                                    month: 'short',
                                    year: 'numeric',
                                  }
                                )}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-4 h-4" />
                          <span>{edu.location}</span>
                        </div>
                        {edu.currentSemester && (
                          <div className="flex items-center gap-1.5">
                            <BookOpen className="w-4 h-4" />
                            <span>{edu.currentSemester}</span>
                          </div>
                        )}
                      </div>

                      {/* Additional Info */}
                      <p className="text-text-secondary">
                        Focusing on Artificial Intelligence, Machine Learning, and
                        Software Engineering with a strong emphasis on building
                        practical, real-world applications.
                      </p>
                    </div>
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
