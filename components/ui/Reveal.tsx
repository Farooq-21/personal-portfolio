'use client'

import { motion } from 'framer-motion'
import { slideUp } from '@/lib/animations'
import { useReducedMotion } from '@/hooks'

interface RevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

/**
 * Component that reveals its children with a slide-up animation
 * when they enter the viewport
 */
export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const prefersReducedMotion = useReducedMotion()

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={slideUp}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  )
}
