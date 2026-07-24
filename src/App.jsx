import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { inject } from '@vercel/analytics'
import { injectSpeedInsights } from '@vercel/speed-insights'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import LandingPage from './pages/LandingPage'
import TermsPage from './pages/TermsPage'
import PrivacyPage from './pages/PrivacyPage'
import WhatsAppButton from './components/ui/WhatsAppButton'
import CookieBanner from './components/ui/CookieBanner'
import { initClarity } from './lib/clarity'
import { getConsent, onConsentChange, CONSENT_ACCEPTED } from './lib/consent'
import './styles/global.css'

let analyticsBooted = false

function boot() {
  if (analyticsBooted) return
  analyticsBooted = true
  try {
    inject({ mode: 'production' })
    injectSpeedInsights()
    initClarity()
  } catch (err) {
    // Never let analytics failures break the app
    console.warn('[Menna] Analytics init failed', err)
  }
}

export default function App() {
  useEffect(() => {
    if (getConsent() === CONSENT_ACCEPTED) boot()
    return onConsentChange((value) => {
      if (value === CONSENT_ACCEPTED) boot()
    })
  }, [])

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/terminos-y-condiciones" element={<TermsPage />} />
        <Route path="/privacidad" element={<PrivacyPage />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
      <CookieBanner />
    </BrowserRouter>
  )
}
