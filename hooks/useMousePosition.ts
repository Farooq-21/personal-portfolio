'use client'

import { useEffect, useState } from 'react'
import { throttle } from '@/lib/utils'

interface MousePosition {
  x: number
  y: number
}

/**
 * Hook to track mouse position with throttling for performance
 */
export function useMousePosition(throttleMs: number = 10): MousePosition {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  })

  useEffect(() => {
    const updateMousePosition = throttle((ev: MouseEvent) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY })
    }, throttleMs)

    window.addEventListener('mousemove', updateMousePosition)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
    }
  }, [throttleMs])

  return mousePosition
}
