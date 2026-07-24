import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getConsent, setConsent, CONSENT_ACCEPTED, CONSENT_REJECTED } from '../../lib/consent'
import styles from './CookieBanner.module.css'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!getConsent()) setVisible(true)
  }, [])

  if (!visible) return null

  function accept() {
    setConsent(CONSENT_ACCEPTED)
    setVisible(false)
  }

  function reject() {
    setConsent(CONSENT_REJECTED)
    setVisible(false)
  }

  return (
    <div className={styles.banner} role="dialog" aria-live="polite" aria-label="Consentimiento de cookies">
      <div className={styles.inner}>
        <p className={styles.text}>
          Usamos cookies estrictamente necesarias para operar el sitio y, con tu consentimiento, cookies analíticas
          (Microsoft Clarity, Vercel Analytics) para medir el uso agregado. No usamos cookies publicitarias ni tratamos
          datos de salud desde este sitio.{' '}
          <Link to="/privacidad" className={styles.link}>
            Más información
          </Link>
          .
        </p>
        <div className={styles.actions}>
          <button type="button" className={styles.btnReject} onClick={reject}>
            Rechazar
          </button>
          <button type="button" className={styles.btnAccept} onClick={accept}>
            Aceptar
          </button>
        </div>
      </div>
    </div>
  )
}
