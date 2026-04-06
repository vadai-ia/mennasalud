import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { inject } from '@vercel/analytics'
import { injectSpeedInsights } from '@vercel/speed-insights'
import App from './App.jsx'

// Initialize Vercel Analytics (framework-agnostic, Vite-compatible)
inject({
  beforeSend: (event) => {
    const url = new URL(event.url, window.location.origin)
    const sensitiveParams = ['email', 'name', 'phone', 'token', 'session']
    sensitiveParams.forEach((p) => url.searchParams.delete(p))
    return { ...event, url: url.pathname + url.search }
  },
})

// Initialize Vercel Speed Insights
injectSpeedInsights()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
