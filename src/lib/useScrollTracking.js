import { useEffect, useRef } from 'react'
import { events } from './analytics'

/**
 * Tracks scroll depth milestones (25%, 50%, 75%, 100%)
 * and section visibility via IntersectionObserver.
 * Each event fires only once per page load.
 */
export function useScrollTracking() {
  const firedDepths = useRef(new Set())
  const firedSections = useRef(new Set())

  useEffect(() => {
    // -- Scroll depth tracking --
    const milestones = [25, 50, 75, 100]

    function onScroll() {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      if (scrollHeight <= 0) return
      const percent = Math.round((window.scrollY / scrollHeight) * 100)

      milestones.forEach((m) => {
        if (percent >= m && !firedDepths.current.has(m)) {
          firedDepths.current.add(m)
          events.scrollDepth(m)
        }
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })

    // -- Section visibility tracking --
    const sectionIds = [
      'propuesta',
      'nuestra-historia',
      'como-funciona',
      'especialistas',
      'faq',
    ]

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id
            if (id && !firedSections.current.has(id)) {
              firedSections.current.add(id)
              events.sectionVisible(id)
            }
          }
        })
      },
      { threshold: 0.3 }
    )

    // Defer observation to next frame so sections are rendered
    requestAnimationFrame(() => {
      sectionIds.forEach((id) => {
        const el = document.getElementById(id)
        if (el) observer.observe(el)
      })
    })

    return () => {
      window.removeEventListener('scroll', onScroll)
      observer.disconnect()
    }
  }, [])
}
