'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'primary' | 'secondary' | 'accent'
  className?: string
  hover?: boolean
}

export function Badge({
  children,
  variant = 'default',
  className,
  hover = true,
}: BadgeProps) {
  const variants = {
    default:
      'bg-elevated text-text-secondary border-border',
    primary: 'bg-primary/10 text-primary border-primary/20',
    secondary: 'bg-surface text-text-secondary border-border',
    accent: 'bg-secondary/10 text-secondary border-secondary/20',
  }

  return (
    <motion.span
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1 text-sm font-medium rounded-full border',
        'transition-all duration-200',
        variants[variant],
        className
      )}
      whileHover={
        hover
          ? {
              scale: 1.05,
              borderColor: 'var(--primary)',
            }
          : undefined
      }
      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.span>
  )
}
