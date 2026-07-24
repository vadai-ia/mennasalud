import { useEffect } from 'react'
import { events } from '../lib/analytics'
import styles from './TermsPage.module.css'

const CONTACT_EMAIL = 'privacidad@mennasalud.com'
const CONTACT_WHATSAPP = '+52 55 2311 4388'
const SITE_URL = 'https://mennasalud.com'

const transfers = [
  { name: 'Stripe, Inc.', purpose: 'Procesamiento de pagos', country: 'EE. UU.' },
  { name: 'Google LLC (Calendar, Meet)', purpose: 'Videoconsulta y agenda', country: 'EE. UU.' },
  { name: 'Supabase Inc.', purpose: 'Base de datos y autenticación', country: 'EE. UU. / UE' },
  { name: 'WHAAPY', purpose: 'WhatsApp transaccional', country: 'México' },
  { name: 'Resend, Inc.', purpose: 'Correos transaccionales', country: 'EE. UU.' },
  { name: 'Vercel Inc.', purpose: 'Hosting, analytics agregado, speed insights', country: 'EE. UU.' },
  { name: 'Microsoft Corporation (Clarity)', purpose: 'Análisis de comportamiento en el sitio', country: 'EE. UU.' },
  { name: 'Profesionales de la salud independientes', purpose: 'Prestación del servicio médico', country: 'México / país de la profesional' },
]

const cookies = [
  { type: 'Estrictamente necesarias', example: 'Sesión, preferencia de consentimiento, idioma', consent: 'No requieren consentimiento' },
  { type: 'Analíticas', example: 'Microsoft Clarity, Vercel Analytics, Speed Insights', consent: 'Requieren consentimiento' },
  { type: 'Publicitarias', example: 'MENNA no utiliza cookies publicitarias en este momento', consent: 'N / A' },
]

export default function PrivacyPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
    events.privacyViewed()

    document.title = 'Aviso de privacidad | Menna Salud'

    const metaTags = {
      description: 'Aviso de Privacidad Integral de MENNA SALUD LTD conforme a la LFPDPPP mexicana: datos que se recaban, cookies, transferencias, derechos ARCO, consentimiento expreso para datos de salud.',
      robots: 'index, follow',
      'og:title': 'Aviso de privacidad | Menna Salud',
      'og:description': 'Aviso de Privacidad Integral de MENNA SALUD LTD conforme a la LFPDPPP mexicana.',
      'og:type': 'website',
      'og:url': 'https://mennasalud.com/privacidad',
    }

    const cleanups = []

    Object.entries(metaTags).forEach(([key, value]) => {
      const isOg = key.startsWith('og:')
      const attr = isOg ? 'property' : 'name'
      let el = document.querySelector(`meta[${attr}="${key}"]`)
      const existed = !!el
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attr, key)
        document.head.appendChild(el)
      }
      const prev = el.getAttribute('content')
      el.setAttribute('content', value)
      cleanups.push(() => {
        if (existed) {
          el.setAttribute('content', prev || '')
        } else {
          el.remove()
        }
      })
    })

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Aviso de privacidad',
      url: 'https://mennasalud.com/privacidad',
      publisher: { '@type': 'Organization', name: 'Menna Salud' },
    })
    document.head.appendChild(script)

    return () => {
      cleanups.forEach((fn) => fn())
      script.remove()
      document.title = 'Menna — Especialistas en Menopausia y Perimenopausia'
    }
  }, [])

  return (
    <main>
      {/* Hero header */}
      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.heroTitle}>Aviso de Privacidad Integral</h1>
          <p className={styles.heroDate}>Fecha de última actualización: 23 de julio de 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className={styles.content}>
        <div className="container">
          <div className={styles.reading}>
            <div className={styles.termSection}>
              <p className={styles.body}>
                El presente Aviso se emite conforme a la <strong>Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP)</strong>, su Reglamento y los Lineamientos del Aviso de Privacidad publicados por el INAI.
              </p>
            </div>

            <div className={styles.termSection}>
              <h2 className={styles.sectionTitle}>1. Identidad y domicilio del Responsable</h2>
              <p className={styles.body}>
                <strong>MENNA SALUD LTD</strong> ("MENNA"), sociedad constituida bajo las leyes de Inglaterra y Gales, con operaciones digitales dirigidas a usuarias en México y otros países de habla hispana, es la responsable del tratamiento de los datos personales que recaba a través de sus plataformas.
              </p>
              <p className={styles.body}><strong>Datos de contacto para asuntos de privacidad:</strong></p>
              <ul className={styles.list}>
                <li className={styles.listItem}>Correo: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></li>
                <li className={styles.listItem}>WhatsApp: {CONTACT_WHATSAPP}</li>
                <li className={styles.listItem}>Sitio: <a href={SITE_URL} target="_blank" rel="noopener noreferrer">{SITE_URL}</a></li>
              </ul>
            </div>

            <div className={styles.termSection}>
              <h2 className={styles.sectionTitle}>2. Datos personales que se recaban</h2>
              <p className={styles.body}>
                <strong>Datos de identificación y contacto:</strong> nombre, apellidos, edad, fecha de nacimiento, país, número de teléfono / WhatsApp, correo electrónico.
              </p>
              <p className={styles.body}>
                <strong>Datos de pago:</strong> procesados directamente por Stripe. MENNA no almacena números de tarjeta ni datos financieros sensibles.
              </p>
              <p className={styles.body}>
                <strong>Datos personales sensibles (categoría especial):</strong> información de salud, síntomas menopáusicos y perimenopáusicos, antecedentes médicos, medicamentos, resultados de estudios, notas clínicas registradas por la profesional tratante, archivos adjuntos al expediente. MENNA reconoce expresamente esta información como <strong>dato personal sensible</strong> conforme al Art. 3, fracción VI de la LFPDPPP.
              </p>
            </div>

            <div className={styles.termSection}>
              <h2 className={styles.sectionTitle}>3. Finalidades del tratamiento</h2>
              <p className={styles.body}><strong>Finalidades primarias (necesarias para el servicio):</strong></p>
              <ul className={styles.list}>
                <li className={styles.listItem}>Agendar y gestionar consultas médicas virtuales</li>
                <li className={styles.listItem}>Canalizar a la usuaria con profesionales de la salud independientes</li>
                <li className={styles.listItem}>Recordatorios, confirmaciones y comunicación relacionada con la consulta (WhatsApp, correo)</li>
                <li className={styles.listItem}>Procesar pagos a través de proveedores autorizados</li>
                <li className={styles.listItem}>Mantener un historial clínico accesible por la usuaria y su profesional tratante</li>
                <li className={styles.listItem}>Cumplir obligaciones legales, fiscales y regulatorias</li>
                <li className={styles.listItem}>Prevenir fraudes y garantizar seguridad de la plataforma</li>
              </ul>
              <p className={styles.body}><strong>Finalidades secundarias (opcionales, requieren consentimiento adicional):</strong></p>
              <ul className={styles.list}>
                <li className={styles.listItem}>Envío de contenido educativo y newsletter</li>
                <li className={styles.listItem}>Encuestas de satisfacción</li>
                <li className={styles.listItem}>Análisis estadísticos anónimos para mejorar el servicio</li>
              </ul>
              <p className={styles.body}>
                La usuaria puede oponerse a las finalidades secundarias en cualquier momento, sin afectar el servicio principal, escribiendo a <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
              </p>
            </div>

            <div className={styles.termSection}>
              <h2 className={styles.sectionTitle}>4. Consentimiento expreso para datos de salud</h2>
              <p className={styles.body}>
                Dado que la información de salud constituye <strong>dato personal sensible</strong>, MENNA requiere <strong>consentimiento expreso</strong> de la usuaria para su tratamiento (Art. 8 LFPDPPP). Al aceptar este Aviso mediante la casilla de consentimiento en el registro, en el flujo de agendamiento o al ingresar al portal, la usuaria manifiesta expresamente su consentimiento para que MENNA y la profesional tratante recaben, almacenen y utilicen sus datos de salud, exclusivamente con las finalidades primarias descritas.
              </p>
              <p className={styles.body}>
                La usuaria puede revocar su consentimiento en cualquier momento en <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. La revocación no tiene efectos retroactivos sobre tratamientos ya realizados.
              </p>
            </div>

            <div className={styles.termSection}>
              <h2 className={styles.sectionTitle}>5. Transferencias de datos a terceros</h2>
              <p className={styles.body}>
                Para operar el servicio, MENNA transfiere datos a los siguientes proveedores. Ninguna de estas transferencias requiere consentimiento adicional conforme al Art. 37 de la LFPDPPP por ser necesarias para el cumplimiento del servicio.
              </p>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14, marginTop: 12 }}>
                  <thead>
                    <tr style={{ backgroundColor: 'rgba(73,121,117,0.08)' }}>
                      <th style={{ textAlign: 'left', padding: '10px 12px', borderBottom: '1px solid rgba(73,121,117,0.15)' }}>Tercero</th>
                      <th style={{ textAlign: 'left', padding: '10px 12px', borderBottom: '1px solid rgba(73,121,117,0.15)' }}>Finalidad</th>
                      <th style={{ textAlign: 'left', padding: '10px 12px', borderBottom: '1px solid rgba(73,121,117,0.15)' }}>País</th>
                    </tr>
                  </thead>
                  <tbody>
                    {transfers.map((t) => (
                      <tr key={t.name}>
                        <td style={{ padding: '10px 12px', borderBottom: '1px solid rgba(73,121,117,0.08)' }}>{t.name}</td>
                        <td style={{ padding: '10px 12px', borderBottom: '1px solid rgba(73,121,117,0.08)' }}>{t.purpose}</td>
                        <td style={{ padding: '10px 12px', borderBottom: '1px solid rgba(73,121,117,0.08)' }}>{t.country}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className={styles.body} style={{ marginTop: 16 }}>
                MENNA <strong>no vende, alquila ni comercializa</strong> datos personales.
              </p>
            </div>

            <div className={styles.termSection}>
              <h2 className={styles.sectionTitle}>6. Uso de cookies y tecnologías de rastreo</h2>
              <p className={styles.body}>
                Este sitio utiliza cookies y tecnologías similares. Las clasificamos en tres categorías:
              </p>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14, marginTop: 12 }}>
                  <thead>
                    <tr style={{ backgroundColor: 'rgba(73,121,117,0.08)' }}>
                      <th style={{ textAlign: 'left', padding: '10px 12px', borderBottom: '1px solid rgba(73,121,117,0.15)' }}>Categoría</th>
                      <th style={{ textAlign: 'left', padding: '10px 12px', borderBottom: '1px solid rgba(73,121,117,0.15)' }}>Ejemplos</th>
                      <th style={{ textAlign: 'left', padding: '10px 12px', borderBottom: '1px solid rgba(73,121,117,0.15)' }}>Consentimiento</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cookies.map((c) => (
                      <tr key={c.type}>
                        <td style={{ padding: '10px 12px', borderBottom: '1px solid rgba(73,121,117,0.08)' }}>{c.type}</td>
                        <td style={{ padding: '10px 12px', borderBottom: '1px solid rgba(73,121,117,0.08)' }}>{c.example}</td>
                        <td style={{ padding: '10px 12px', borderBottom: '1px solid rgba(73,121,117,0.08)' }}>{c.consent}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className={styles.body} style={{ marginTop: 16 }}>
                Al ingresar por primera vez al sitio se muestra un <strong>banner de consentimiento</strong> con las opciones "Aceptar" o "Rechazar" cookies analíticas. La usuaria puede cambiar su decisión en cualquier momento borrando las cookies del navegador o recargando la página.
              </p>
              <p className={styles.body}>
                Las cookies analíticas <strong>no recaban datos de salud</strong>. Solo miden uso agregado del sitio (páginas vistas, scroll, clicks anonimizados).
              </p>
            </div>

            <div className={styles.termSection}>
              <h2 className={styles.sectionTitle}>7. Medidas de seguridad</h2>
              <p className={styles.body}>
                MENNA implementa medidas administrativas, técnicas y físicas razonables:
              </p>
              <ul className={styles.list}>
                <li className={styles.listItem}>Cifrado TLS 1.2+ en tránsito</li>
                <li className={styles.listItem}>Cifrado AES-256-GCM en reposo para tokens de servicios de terceros</li>
                <li className={styles.listItem}>Row-Level Security (RLS) a nivel base de datos</li>
                <li className={styles.listItem}>Segregación de accesos por rol</li>
                <li className={styles.listItem}>Bitácoras de acceso y auditoría de operaciones sensibles</li>
                <li className={styles.listItem}>Autenticación OTP al portal de la paciente</li>
              </ul>
            </div>

            <div className={styles.termSection}>
              <h2 className={styles.sectionTitle}>8. Plazo de conservación</h2>
              <ul className={styles.list}>
                <li className={styles.listItem}><strong>Datos de identificación y contacto:</strong> mientras exista la cuenta y hasta 5 años posteriores a la última interacción (Art. 30 CFF).</li>
                <li className={styles.listItem}><strong>Expediente clínico y notas de consulta:</strong> mínimo 5 años (NOM-004-SSA3-2012).</li>
                <li className={styles.listItem}><strong>Registros de pagos y facturación:</strong> 5 años.</li>
                <li className={styles.listItem}><strong>Cookies analíticas:</strong> hasta 13 meses.</li>
              </ul>
            </div>

            <div className={styles.termSection}>
              <h2 className={styles.sectionTitle}>9. Menores de edad</h2>
              <p className={styles.body}>
                La plataforma está dirigida exclusivamente a personas mayores de 18 años. MENNA no recaba conscientemente datos de menores. Cualquier cuenta detectada como perteneciente a un menor será suspendida y sus datos eliminados.
              </p>
            </div>

            <div className={styles.termSection}>
              <h2 className={styles.sectionTitle}>10. Derechos ARCO y revocación</h2>
              <p className={styles.body}>La usuaria tiene derecho a solicitar:</p>
              <ul className={styles.list}>
                <li className={styles.listItem}><strong>Acceso</strong> a los datos que MENNA tiene sobre ella.</li>
                <li className={styles.listItem}><strong>Rectificación</strong> de datos inexactos o incompletos.</li>
                <li className={styles.listItem}><strong>Cancelación</strong> de sus datos.</li>
                <li className={styles.listItem}><strong>Oposición</strong> al tratamiento para finalidades específicas.</li>
                <li className={styles.listItem}><strong>Revocación</strong> del consentimiento y limitación del uso o divulgación.</li>
              </ul>
              <p className={styles.body}>
                <strong>Procedimiento:</strong> enviar solicitud a <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> incluyendo:
              </p>
              <ul className={styles.list}>
                <li className={styles.listItem}>Nombre completo y medio para recibir respuesta</li>
                <li className={styles.listItem}>Copia de identificación oficial (INE, pasaporte)</li>
                <li className={styles.listItem}>Descripción clara del derecho a ejercer</li>
                <li className={styles.listItem}>Cualquier documento adicional que facilite la localización de los datos</li>
              </ul>
              <p className={styles.body}>
                MENNA responderá en un plazo máximo de <strong>20 días hábiles</strong> (Art. 32 LFPDPPP).
              </p>
            </div>

            <div className={styles.termSection}>
              <h2 className={styles.sectionTitle}>11. Cambios al aviso</h2>
              <p className={styles.body}>
                MENNA podrá actualizar este Aviso. La versión vigente estará siempre en <a href={`${SITE_URL}/privacidad`} target="_blank" rel="noopener noreferrer">mennasalud.com/privacidad</a>. Los cambios sustanciales se notificarán por correo o WhatsApp con al menos 15 días naturales de anticipación.
              </p>
            </div>

            <div className={styles.termSection}>
              <h2 className={styles.sectionTitle}>12. Autoridad de protección de datos</h2>
              <p className={styles.body}>
                En caso de considerar vulnerados sus derechos, la usuaria puede acudir ante el <strong>INAI</strong>:
              </p>
              <ul className={styles.list}>
                <li className={styles.listItem}>Sitio: <a href="https://www.inai.org.mx" target="_blank" rel="noopener noreferrer">www.inai.org.mx</a></li>
                <li className={styles.listItem}>TelINAI: 800 835 4324</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
