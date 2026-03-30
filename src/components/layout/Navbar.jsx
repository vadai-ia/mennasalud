import { useState } from 'react'
import Button from '../ui/Button'
import styles from './Navbar.module.css'
import logoGreen from '../../assets/logos/logo-green.svg'

const navLinks = [
  { label: 'Síntomas',              href: '#propuesta'        },
  { label: 'Nuestra Historia',      href: '#nuestra-historia' },
  { label: 'Cómo funciona',         href: '#como-funciona'    },
  { label: 'Especialistas',         href: '#especialistas'    },
  { label: 'Preguntas frecuentes',  href: '#faq'              },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className={styles.header}>
      <div className={`${styles.floatingBar} ${menuOpen ? styles.menuOpen : ''}`}>
        {/* Inner bar */}
        <div className={styles.inner}>
          {/* Logo */}
          <a href="#" className={styles.logo} aria-label="Menna inicio">
            <img src={logoGreen} alt="Menna" className={styles.logoImg} />
          </a>

          {/* Desktop nav */}
          <nav className={styles.nav} aria-label="Navegación principal">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className={styles.navLink}>
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className={styles.cta}>
            <Button href="https://citas.mennasalud.com/book" size="md">
              Agenda tu consulta
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
          >
            <span className={styles.bar} />
            <span className={styles.bar} />
            <span className={styles.bar} />
          </button>
        </div>

        {/* Mobile menu — inside the floating bar */}
        {menuOpen && (
          <nav className={styles.mobileMenu}>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={styles.mobileLink}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className={styles.mobileCta}>
              <Button href="https://citas.mennasalud.com/book" size="md">
                Agenda tu consulta
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
