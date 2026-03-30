import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import LandingPage from './pages/LandingPage'
import WhatsAppButton from './components/ui/WhatsAppButton'
import './styles/global.css'

export default function App() {
  return (
    <>
      <Navbar />
      <LandingPage />
      <Footer />
      <WhatsAppButton />
    </>
  )
}
