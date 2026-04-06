import { useEffect } from 'react'
import styles from './TermsPage.module.css'

const sections = [
  {
    title: '',
    blocks: [
      { type: 'p', text: 'MENNA SALUD LTD ("MENNA") es responsable del tratamiento de los datos personales que recaba a través de su plataforma digital.' },
      { type: 'p', text: 'El presente aviso describe cómo se recopila, utiliza y protege la información proporcionada por las usuarias.' },
    ],
  },
  {
    title: '1. Datos personales recabados',
    blocks: [
      { type: 'p', text: 'MENNA podrá recabar los siguientes datos:' },
      { type: 'list', items: ['Nombre', 'Edad', 'Datos de contacto', 'Información relacionada con síntomas y salud hormonal'] },
      { type: 'p', text: 'La información de salud es considerada dato personal sensible y será tratada conforme a la normativa aplicable.' },
    ],
  },
  {
    title: '2. Finalidad del tratamiento de datos',
    blocks: [
      { type: 'p', text: 'Los datos personales serán utilizados para:' },
      { type: 'list', items: ['Facilitar el agendamiento de consultas', 'Canalizar a la usuaria con profesionales de la salud independientes', 'Dar seguimiento administrativo a las consultas', 'Mantener comunicación relacionada con el servicio solicitado'] },
      { type: 'p', text: 'MENNA no utiliza los datos personales con fines distintos a los aquí descritos.' },
    ],
  },
  {
    title: '3. Transferencia de datos',
    blocks: [
      { type: 'p', text: 'Los datos podrán compartirse exclusivamente con profesionales de la salud independientes cuando sea necesario para facilitar la atención solicitada por la usuaria.' },
      { type: 'p', text: 'MENNA no comercializa ni vende información personal.' },
    ],
  },
  {
    title: '4. Protección de la información',
    blocks: [
      { type: 'p', text: 'MENNA implementa medidas razonables de seguridad administrativas, técnicas y organizacionales para proteger los datos personales contra daño, pérdida, alteración o uso no autorizado.' },
    ],
  },
  {
    title: '5. Derechos de la usuaria (Derechos ARCO)',
    blocks: [
      { type: 'p', text: 'La usuaria podrá en cualquier momento solicitar:' },
      { type: 'list', items: ['Acceso a sus datos personales', 'Rectificación de información incorrecta', 'Cancelación de sus datos', 'Oposición al uso de los mismos'] },
      { type: 'p', text: 'Estas solicitudes podrán realizarse a través del canal de contacto indicado en la plataforma.' },
    ],
  },
  {
    title: '6. Uso de la plataforma',
    blocks: [
      { type: 'p', text: 'Al proporcionar sus datos personales, la usuaria acepta el tratamiento de su información conforme a este aviso de privacidad.' },
    ],
  },
  {
    title: '7. Modificaciones al aviso',
    blocks: [
      { type: 'p', text: 'MENNA podrá actualizar este aviso de privacidad en cualquier momento.' },
      { type: 'p', text: 'Las modificaciones serán publicadas dentro de la plataforma digital.' },
    ],
  },
]

function renderBlocks(blocks) {
  return blocks.map((block, i) => {
    if (block.type === 'p') {
      return <p key={i} className={styles.body}>{block.text}</p>
    }
    if (block.type === 'list') {
      return (
        <ul key={i} className={styles.list}>
          {block.items.map((item) => (
            <li key={item} className={styles.listItem}>{item}</li>
          ))}
        </ul>
      )
    }
    return null
  })
}

export default function PrivacyPage() {
  useEffect(() => {
    window.scrollTo(0, 0)

    document.title = 'Aviso de privacidad | Menna Salud'

    const metaTags = {
      description: 'Consulta el aviso de privacidad de Menna Salud y conoce cómo se recopilan, utilizan y protegen tus datos personales en la plataforma.',
      robots: 'index, follow',
      'og:title': 'Aviso de privacidad | Menna Salud',
      'og:description': 'Consulta el aviso de privacidad de Menna Salud y conoce cómo se recopilan, utilizan y protegen tus datos personales en la plataforma.',
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

    // Structured data
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
          <h1 className={styles.heroTitle}>Aviso de privacidad</h1>
          <p className={styles.heroDate}>Fecha de última actualización: 6 de abril de 2026</p>
        </div>
      </section>

      {/* Privacy content */}
      <section className={styles.content}>
        <div className="container">
          <div className={styles.reading}>
            {sections.map((section, idx) => (
              <div key={section.title || idx} className={styles.termSection}>
                {section.title && <h2 className={styles.sectionTitle}>{section.title}</h2>}
                {renderBlocks(section.blocks)}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
