import { track } from '@vercel/analytics'

/**
 * Centralized event tracking with consistent naming.
 * All event names use snake_case for Vercel Analytics compatibility.
 * No PII or sensitive health data is ever included.
 */

export function trackEvent(name, props = {}) {
  try {
    track(name, props)
  } catch {
    // Silently fail — analytics should never break the app
  }
}

// Pre-defined event helpers
export const events = {
  heroCta: () => trackEvent('hero_cta_clicked'),
  whatsappCta: () => trackEvent('whatsapp_cta_clicked'),
  pricingCta: (plan) => trackEvent('pricing_cta_clicked', { plan }),
  ebooksCta: () => trackEvent('ebooks_cta_clicked'),
  specialistViewed: (name) => trackEvent('specialist_card_viewed', { name }),
  faqExpanded: (question) => trackEvent('faq_expanded', { question }),
  reelClicked: (reelId) => trackEvent('reel_clicked', { reel_id: reelId }),
  footerLegalClicked: (page) => trackEvent('footer_legal_clicked', { page }),
  termsViewed: () => trackEvent('terms_page_viewed'),
  privacyViewed: () => trackEvent('privacy_page_viewed'),
  sectionVisible: (section) => trackEvent('section_visible', { section }),
  scrollDepth: (percent) => trackEvent('scroll_depth', { percent }),
}
