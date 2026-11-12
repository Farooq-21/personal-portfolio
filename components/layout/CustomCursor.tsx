'use client'

import { useEffect, useState } from 'react'
import { motion, useSpring } from 'framer-motion'
import { useMousePosition, useReducedMotion, useIsFinePointer } from '@/hooks'

export function CustomCursor() {
  const { x, y } = useMousePosition(5)
  const [cursorVariant, setCursorVariant] = useState<'default' | 'link' | 'view' | 'text'>('default')
  const [cursorText, setCursorText] = useState('')
  const prefersReducedMotion = useReducedMotion()
  const isFinePointer = useIsFinePointer()

  const springConfig = { stiffness: 500, damping: 28 }
  const cursorX = useSpring(x, springConfig)
  const cursorY = useSpring(y, springConfig)

  useEffect(() => {
    // Don't show custom cursor on touch devices, with reduced motion, or without fine pointer
    if (!isFinePointer || prefersReducedMotion) return

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement

      // Links and buttons
      if (target.closest('a, button')) {
        setCursorVariant('link')
        setCursorText('')
        return
      }

      // Project cards
      if (target.closest('[data-cursor="view"]')) {
        setCursorVariant('view')
        setCursorText('View')
        return
      }

      // Text elements
      if (target.closest('p, h1, h2, h3, h4, h5, h6, span:not(.no-cursor)')) {
        setCursorVariant('text')
        setCursorText('')
        return
      }

      setCursorVariant('default')
      setCursorText('')
    }

    document.addEventListener('mouseover', handleMouseOver)

    return () => {
      document.removeEventListener('mouseover', handleMouseOver)
    }
  }, [isFinePointer, prefersReducedMotion])

  // Don't render on touch devices, with reduced motion, or without fine pointer
  if (!isFinePointer || prefersReducedMotion) return null

  return (
    <>
      {/* Cursor Dot */}
      <motion.div
        className="custom-cursor-dot fixed w-2 h-2 bg-primary rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          left: cursorX,
          top: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />

      {/* Cursor Ring */}
      <motion.div
        className="custom-cursor-ring fixed rounded-full border-2 pointer-events-none z-[9999] mix-blend-difference flex items-center justify-center"
        style={{
          left: cursorX,
          top: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width:
            cursorVariant === 'link'
              ? 48
              : cursorVariant === 'view'
              ? 80
              : cursorVariant === 'text'
              ? 4
              : 32,
          height:
            cursorVariant === 'link'
              ? 48
              : cursorVariant === 'view'
              ? 80
              : cursorVariant === 'text'
              ? 32
              : 32,
          borderColor:
            cursorVariant === 'view'
              ? 'rgba(59, 130, 246, 0.6)'
              : 'rgba(255, 255, 255, 0.6)',
          borderRadius: cursorVariant === 'text' ? '2px' : '50%',
          opacity: cursorVariant === 'link' || cursorVariant === 'view' ? 0.6 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
        }}
      >
        {cursorText && (
          <motion.span
            className="text-white text-xs font-medium"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>
    </>
  )
}
