'use client'

import { useEffect, useState } from 'react'

/**
 * Hook to detect if user prefers reduced motion
 * Returns true if user has set prefers-reduced-motion: reduce
 */
export function useReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    
    // Set initial value
    setPrefersReducedMotion(mediaQuery.matches)

    // Create event listener
    const listener = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
    }

    // Add listener
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', listener)
    } else {
      mediaQuery.addListener(listener)
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', listener)
      } else {
        mediaQuery.removeListener(listener)
      }
    }
  }, [])

  return prefersReducedMotion
}
