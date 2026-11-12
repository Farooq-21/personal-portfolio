'use client'

import { useEffect, useState } from 'react'
import { throttle } from '@/lib/utils'

/**
 * Hook to track scroll progress (0-100)
 */
export function useScrollProgress(): number {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const calculateScrollProgress = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.scrollY

      const scrollableHeight = documentHeight - windowHeight
      const progress = (scrollTop / scrollableHeight) * 100

      setScrollProgress(Math.min(Math.max(progress, 0), 100))
    }

    const throttledCalculateScrollProgress = throttle(calculateScrollProgress, 10)

    // Calculate initial progress
    calculateScrollProgress()

    window.addEventListener('scroll', throttledCalculateScrollProgress, { passive: true })
    window.addEventListener('resize', throttledCalculateScrollProgress, { passive: true })

    return () => {
      window.removeEventListener('scroll', throttledCalculateScrollProgress)
      window.removeEventListener('resize', throttledCalculateScrollProgress)
    }
  }, [])

  return scrollProgress
}
