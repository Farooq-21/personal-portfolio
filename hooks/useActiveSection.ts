'use client'

import { useEffect, useState } from 'react'

/**
 * Hook to track which section is currently active in the viewport
 */
export function useActiveSection(sectionIds: string[]): string {
  const [activeSection, setActiveSection] = useState<string>(sectionIds[0] || '')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-50% 0px -50% 0px',
        threshold: 0,
      }
    )

    // Observe all sections
    sectionIds.forEach((id) => {
      const element = document.getElementById(id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      observer.disconnect()
    }
  }, [sectionIds])

  return activeSection
}
