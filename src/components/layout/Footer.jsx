import { Link } from 'react-router-dom'
import styles from './Footer.module.css'
import logoWhite from '../../assets/logos/logo-white.svg'

const footerLinks = [
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Nuestra Propuesta', href: '#propuesta' },
  { label: 'Especialistas', href: '#especialistas' },
  { label: 'Comunidad', href: '#comunidad' },
  { label: 'Preguntas frecuentes', href: '#faq' },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        {/* Logo */}
        <div className={styles.brand}>
          <a href="#" className={styles.logo}>
            <img src={logoWhite} alt="Menna" className={styles.logoImg} />
          </a>
        </div>

        {/* Links */}
        <nav className={styles.links} aria-label="Pie de página">
          {footerLinks.map((link) => (
            <a key={link.label} href={link.href} className={styles.link}>
              {link.label}
            </a>
          ))}
        </nav>

        {/* Social */}
        <div className={styles.social}>
          <a href="https://www.instagram.com/adrianamont.menopausia?igsh=MXdlb2Z0NmtyN3V4aQ==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={styles.socialLink}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
          </a>
          <a href="https://www.facebook.com/share/1E3nsa5Qm7/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className={styles.socialLink}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>
          <a href="https://www.tiktok.com/@adrianamontmenopausia?_r=1&_t=ZS-957jOKvIcQn" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className={styles.socialLink}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.96a8.17 8.17 0 0 0 4.78 1.52V7.01a4.85 4.85 0 0 1-1.01-.32z" />
            </svg>
          </a>
          <a href="https://youtube.com/@adrianamontmenopausia?si=vY9ReLyIHHrsg6jD" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className={styles.socialLink}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23 7s-.3-2-1.2-2.8c-1.1-1.2-2.4-1.2-3-1.3C16.6 2.8 12 2.8 12 2.8s-4.6 0-6.8.1c-.6.1-1.9.1-3 1.3C1.3 5 1 7 1 7S.7 9.2.7 11.5v2.1C.7 16 1 18 1 18s.3 2 1.2 2.8c1.1 1.2 2.6 1.1 3.3 1.2C7.6 22.1 12 22.1 12 22.1s4.6 0 6.8-.2c.6-.1 1.9-.1 3-1.3.9-.8 1.2-2.8 1.2-2.8s.3-2.2.3-4.4v-2.1C23.3 9.2 23 7 23 7zM9.7 15.5V8.4l8.1 3.6-8.1 3.5z" />
            </svg>
          </a>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p className={styles.copy}>© 2026 Menna. Todos los derechos reservados.</p>
        <div className={styles.legalLinks}>
          <Link to="/terminos-y-condiciones" className={styles.termsLink}>
            Términos y condiciones
          </Link>
          <Link to="/privacidad" className={styles.termsLink}>
            Privacidad
          </Link>
        </div>
      </div>
    </footer>
  )
}
