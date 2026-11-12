'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { slideUp, drawLine } from '@/lib/animations'
import { useReducedMotion } from '@/hooks'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  centered?: boolean
  className?: string
}

export function SectionHeading({
  title,
  subtitle,
  centered = false,
  className,
}: SectionHeadingProps) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <div
      className={cn(
        'mb-12 md:mb-16',
        centered && 'text-center mx-auto',
        className
      )}
    >
      <motion.h2
        className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-text-primary mb-4 relative inline-block"
        initial={!prefersReducedMotion ? 'hidden' : undefined}
        whileInView={!prefersReducedMotion ? 'visible' : undefined}
        viewport={{ once: true, amount: 0.8 }}
        variants={slideUp}
      >
        {title}
        {/* Animated underline */}
        {!prefersReducedMotion && (
          <motion.span
            className="absolute -bottom-2 left-0 h-0.5 w-full bg-primary"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
            variants={drawLine}
            transition={{ delay: 0.2 }}
          />
        )}
      </motion.h2>

      {subtitle && (
        <motion.p
          className={cn(
            'text-lg text-text-secondary max-w-2xl',
            centered && 'mx-auto'
          )}
          initial={!prefersReducedMotion ? 'hidden' : undefined}
          whileInView={!prefersReducedMotion ? 'visible' : undefined}
          viewport={{ once: true, amount: 0.8 }}
          variants={slideUp}
          transition={{ delay: 0.1 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
