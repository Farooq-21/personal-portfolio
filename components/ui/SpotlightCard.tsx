'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { useReducedMotion } from '@/hooks'

interface SpotlightCardProps {
  children: React.ReactNode
  className?: string
}

export function SpotlightCard({ children, className }: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || prefersReducedMotion) return

    const rect = cardRef.current.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <motion.div
      ref={cardRef}
      className={cn(
        'relative bg-surface border border-border rounded-xl p-6 overflow-hidden group',
        'hover:border-border-hover transition-all duration-200',
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={!prefersReducedMotion ? { y: -6 } : undefined}
      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Spotlight effect */}
      {!prefersReducedMotion && isHovered && (
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.1), transparent 40%)`,
          }}
        />
      )}

      {/* Accent glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-xl" />
      </div>

      <div className="relative z-10">{children}</div>
    </motion.div>
  )
}
