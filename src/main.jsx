import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { inject } from '@vercel/analytics'
import { injectSpeedInsights } from '@vercel/speed-insights'
import App from './App.jsx'

// Initialize Vercel Analytics — minimal setup to confirm data collection
console.log('[Menna] Initializing Vercel Analytics')
inject({ mode: 'production' })

// Initialize Vercel Speed Insights
console.log('[Menna] Initializing Speed Insights')
injectSpeedInsights()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
