'use client'

import { motion } from 'framer-motion'
import { useScrollProgress } from '@/hooks'

export function ScrollProgress() {
  const scrollProgress = useScrollProgress()

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-50"
      style={{ scaleX: scrollProgress / 100 }}
      initial={{ scaleX: 0 }}
    />
  )
}
