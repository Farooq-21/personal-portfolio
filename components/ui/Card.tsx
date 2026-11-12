'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { cardHover } from '@/lib/animations'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <motion.div
      className={cn(
        'relative bg-surface border border-border rounded-xl p-6 transition-all duration-200',
        hover && 'hover:border-border-hover',
        className
      )}
      initial="rest"
      whileHover={hover ? 'hover' : undefined}
      variants={hover ? cardHover : undefined}
    >
      {children}
    </motion.div>
  )
}
