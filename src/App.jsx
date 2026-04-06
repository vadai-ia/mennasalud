import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import LandingPage from './pages/LandingPage'
import TermsPage from './pages/TermsPage'
import PrivacyPage from './pages/PrivacyPage'
import WhatsAppButton from './components/ui/WhatsAppButton'
import { initClarity } from './lib/clarity'
import './styles/global.css'

export default function App() {
  useEffect(() => {
    initClarity()
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
      <Analytics
        beforeSend={(event) => {
          // Strip sensitive query params from URLs
          const url = new URL(event.url, window.location.origin)
          const sensitiveParams = ['email', 'name', 'phone', 'token', 'session']
          sensitiveParams.forEach((p) => url.searchParams.delete(p))
          return { ...event, url: url.pathname + url.search }
        }}
      />
      <SpeedInsights />
    </BrowserRouter>
  )
}
