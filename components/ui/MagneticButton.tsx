'use client'

import { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { cn } from '@/lib/utils'
import { useReducedMotion, useIsFinePointer } from '@/hooks'

interface MagneticButtonProps {
  children: React.ReactNode
  className?: string
  strength?: number
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  'aria-label'?: string
}

/**
 * Button that magnetically pulls toward the cursor on hover
 */
export function MagneticButton({
  children,
  className,
  strength = 0.3,
  onClick,
  type = 'button',
  disabled,
  ...rest
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const prefersReducedMotion = useReducedMotion()
  const isFinePointer = useIsFinePointer()

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springConfig = { stiffness: 300, damping: 30 }
  const xSpring = useSpring(x, springConfig)
  const ySpring = useSpring(y, springConfig)

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current || prefersReducedMotion || !isFinePointer) return

    const rect = buttonRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const distance = Math.sqrt(
      Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2)
    )

    if (distance < 100) {
      x.set((e.clientX - centerX) * strength)
      y.set((e.clientY - centerY) * strength)
    }
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.button
      ref={buttonRef}
      className={cn('relative', className)}
      style={
        !prefersReducedMotion && isFinePointer
          ? {
              x: xSpring,
              y: ySpring,
            }
          : undefined
      }
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      type={type}
      disabled={disabled}
      aria-label={rest['aria-label']}
    >
      {children}
    </motion.button>
  )
}
