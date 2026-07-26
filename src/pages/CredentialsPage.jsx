import { useEffect } from 'react'
import styles from './TermsPage.module.css'

const doctors = [
  {
    name: 'Dra. Angélica Huante López',
    country: 'México',
    cedulas: [
      {
        type: 'Cédula de Especialidad en Ginecología y Obstetricia',
        number: '15185134',
        institution: 'Universidad de Guadalajara',
        verifiable: true,
      },
    ],
  },
  {
    name: 'Dra. Karen Ioaly Gómez López',
    country: 'México',
    cedulas: [
      {
        type: 'Cédula de Licenciatura como Médico Cirujano y Partero',
        number: '13814966',
        institution: 'Universidad de Guadalajara',
        verifiable: true,
      },
    ],
  },
  {
    name: 'Dra. Miriam Elena García Meléndez',
    country: 'México',
    cedulas: [
      {
        type: 'Cédula de Licenciatura como Médico Cirujano y Partero',
        number: '15247846',
        institution: 'Universidad de Guadalajara',
        verifiable: true,
      },
    ],
  },
  {
    name: 'Dra. María Victoria Peña Sotomayor',
    country: 'México · Ecuador',
    cedulas: [
      {
        type: 'Cédula Profesional Estatal Jalisco (Licenciatura como Médico Cirujano)',
        number: 'PEJ 397119',
        institution: 'Estado de Jalisco',
        verifiable: false,
      },
    ],
  },
  {
    name: 'Dra. Diana Milena Chacón Bravo',
    country: 'Colombia',
    cedulas: [
      {
        type: 'Médico — Registro RETHUS (Colombia)',
        number: '1085304966',
        institution: 'Universidad Cooperativa de Colombia',
        verifiable: false,
      },
    ],
  },
  {
    name: 'Dra. Dania Montserrat Gálvez Acosta',
    country: 'México',
    cedulas: [
      {
        type: 'Cédula de Licenciatura como Médico Cirujano y Partero',
        number: '12253855',
        institution: 'Universidad de Guadalajara',
        verifiable: true,
      },
    ],
  },
  {
    name: 'Dra. Rocío Alejandra Baide Hernández',
    country: 'México · Honduras',
    cedulas: [
      {
        type: 'Cédula de Licenciatura en Médico Cirujano',
        number: '14753678',
        institution: 'Universidad Católica de Honduras "Nuestra Señora Reina de la Paz"',
        verifiable: false,
      },
      {
        type: 'Cédula de Especialidad en Ginecología y Obstetricia',
        number: '15177835',
        institution: 'Universidad de Guadalajara',
        verifiable: true,
      },
    ],
  },
]

export default function CredentialsPage() {
  useEffect(() => {
    window.scrollTo(0, 0)

    document.title = 'Credenciales médicas | Menna Salud'

    const metaTags = {
      description:
        'Cédulas profesionales y credenciales verificables del equipo médico de Menna Salud. Ginecólogas especialistas en menopausia con formación en México, Colombia y Honduras.',
      robots: 'index, follow',
      'og:title': 'Credenciales médicas | Menna Salud',
      'og:description':
        'Cédulas profesionales y credenciales verificables del equipo médico de Menna Salud.',
      'og:type': 'website',
      'og:url': 'https://mennasalud.com/credenciales',
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
        if (existed) el.setAttribute('content', prev || '')
        else el.remove()
      })
    })

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'MedicalOrganization',
      name: 'Menna Salud',
      url: 'https://mennasalud.com/credenciales',
      medicalSpecialty: 'Gynecology',
      employee: doctors.map((d) => ({
        '@type': 'Physician',
        name: d.name,
        medicalSpecialty: 'Gynecology',
        identifier: d.cedulas.map((c) => ({
          '@type': 'PropertyValue',
          name: c.type,
          value: c.number,
        })),
      })),
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
      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.heroTitle}>Credenciales médicas</h1>
          <p className={styles.heroDate}>Última actualización: 24 de julio de 2026</p>
        </div>
      </section>

      <section className={styles.content}>
        <div className="container">
          <div className={styles.reading}>
            <div className={styles.termSection}>
              <p className={styles.body}>
                Todas nuestras especialistas son médicas certificadas con cédulas profesionales
                emitidas por autoridades competentes en su país de formación. Las cédulas
                mexicanas pueden verificarse en{' '}
                <a
                  href="https://www.gob.mx/cedulaprofesional"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  gob.mx/cedulaprofesional
                </a>
                .
              </p>
              <p className={styles.body}>
                Si tienes dudas sobre alguna credencial que no aparezca listada aquí, escríbenos
                a <a href="mailto:hola@mennasalud.com">hola@mennasalud.com</a> y con gusto lo
                confirmamos con el equipo.
              </p>
            </div>

            {doctors.map((doc) => (
              <div key={doc.name} className={styles.termSection}>
                <h2 className={styles.sectionTitle}>{doc.name}</h2>
                <p
                  className={styles.body}
                  style={{
                    fontSize: 13,
                    color: 'rgba(69,85,108,0.6)',
                    marginTop: -8,
                    marginBottom: 16,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                  }}
                >
                  {doc.country}
                </p>
                <ul className={styles.list}>
                  {doc.cedulas.map((c) => (
                    <li key={c.number} className={styles.listItem}>
                      <strong>{c.type}:</strong> {c.number}
                      <br />
                      <span style={{ fontSize: 13, color: 'rgba(69,85,108,0.7)' }}>
                        {c.institution}
                        {c.verifiable && (
                          <>
                            {' · '}
                            <a
                              href="https://www.gob.mx/cedulaprofesional"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Verificar en gob.mx
                            </a>
                          </>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
