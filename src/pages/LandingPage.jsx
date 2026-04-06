import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useScrollTracking } from '../lib/useScrollTracking'

import HeroSection from '../components/sections/HeroSection'
import SymptomsSection from '../components/sections/SymptomsSection'
import ExplanationSection from '../components/sections/ExplanationSection'
import MarqueeSection from '../components/sections/MarqueeSection'
import OriginSection from '../components/sections/OriginSection'
import HowItWorksSection from '../components/sections/HowItWorksSection'
import SpecialistsSection from '../components/sections/SpecialistsSection'
import PlansSection from '../components/sections/PlansSection'
import ImageBreakSection from '../components/sections/ImageBreakSection'
import GrowthSection from '../components/sections/GrowthSection'
import TestimonialsSection from '../components/sections/TestimonialsSection'
import FAQSection from '../components/sections/FAQSection'
import SocialLearningSection from '../components/sections/SocialLearningSection'

gsap.registerPlugin(ScrollTrigger)

export default function LandingPage() {
  const pageRef = useRef(null)
  useScrollTracking()

  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReducedMotion) return

    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray('.reveal-section')

      gsap.set(sections, {
        opacity: 0,
        y: 16,
      })

      sections.forEach((section) => {
        gsap.to(section, {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 88%',
            once: true,
          },
        })
      })
    }, pageRef)

    return () => ctx.revert()
  }, [])

  return (
    <main ref={pageRef}>
      <section className="reveal-section">
        <HeroSection />
      </section>

      <section className="reveal-section">
        <SymptomsSection />
      </section>

      <section className="reveal-section">
        <ExplanationSection />
      </section>

      <section className="reveal-section">
        <OriginSection />
      </section>

      <section className="reveal-section">
        <MarqueeSection />
      </section>

      <section className="reveal-section">
        <HowItWorksSection />
      </section>

      <section className="reveal-section">
        <SpecialistsSection />
      </section>

      <section className="reveal-section">
        <PlansSection />
      </section>

      <section className="reveal-section">
        <ImageBreakSection />
      </section>

      <section className="reveal-section">
        <GrowthSection />
      </section>

      <section className="reveal-section">
        <TestimonialsSection />
      </section>

      <section className="reveal-section">
        <FAQSection />
      </section>

      <section className="reveal-section">
        <SocialLearningSection />
      </section>
    </main>
  )
}
