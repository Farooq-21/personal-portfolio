'use client'

import { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { cn } from '@/lib/utils'
import { useReducedMotion } from '@/hooks'

interface TiltCardProps {
  children: React.ReactNode
  className?: string
  maxTilt?: number
  'data-cursor'?: string
}

export function TiltCard({ children, className, maxTilt = 8, ...rest }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)

  const springConfig = { stiffness: 300, damping: 30 }
  const rotateXSpring = useSpring(rotateX, springConfig)
  const rotateYSpring = useSpring(rotateY, springConfig)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || prefersReducedMotion) return

    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const mouseX = e.clientX - centerX
    const mouseY = e.clientY - centerY

    const rotateXValue = (mouseY / (rect.height / 2)) * -maxTilt
    const rotateYValue = (mouseX / (rect.width / 2)) * maxTilt

    rotateX.set(rotateXValue)
    rotateY.set(rotateYValue)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    rotateX.set(0)
    rotateY.set(0)
  }

  return (
    <motion.div
      ref={cardRef}
      className={cn(
        'relative bg-surface border border-border rounded-xl p-6 overflow-hidden group',
        'hover:border-border-hover transition-colors duration-200',
        className
      )}
      style={
        !prefersReducedMotion
          ? {
              rotateX: rotateXSpring,
              rotateY: rotateYSpring,
              transformStyle: 'preserve-3d',
            }
          : undefined
      }
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      whileHover={!prefersReducedMotion ? { y: -6 } : undefined}
      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {/* Glare effect */}
      {!prefersReducedMotion && isHovered && (
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            background:
              'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, transparent 50%)',
          }}
        />
      )}

      {/* Accent glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-xl" />
      </div>

      <div className="relative z-10" style={{ transform: 'translateZ(20px)' }}>
        {children}
      </div>
    </motion.div>
  )
}
