import { useState } from 'react'
import { events } from '../../lib/analytics'
import styles from './SymptomsSection.module.css'
import iconBochornos from '../../assets/icons/bochornos.svg'
import iconInsomnio from '../../assets/icons/insomnio.svg'
import iconCambiosHumor from '../../assets/icons/cambios-de-humor.svg'
import iconFatiga from '../../assets/icons/fatiga.svg'
import iconSequedadVaginal from '../../assets/icons/sequedad-vaginal.svg'
import iconAumentoPeso from '../../assets/icons/aumento-de-peso.svg'
import iconBajaLibido from '../../assets/icons/baja-de-libido.svg'
import iconAnsiedad from '../../assets/icons/ansiedad.svg'
import iconDolorArticular from '../../assets/icons/dolor-articular.svg'
import iconPalpitaciones from '../../assets/icons/palpitaciones.svg'
import iconInfeccionesUrinarias from '../../assets/icons/infecciones-urinarias.svg'
import iconNieblaMental from '../../assets/icons/niebla-mental.svg'

const symptoms = [
  { label: 'Bochornos',             icon: iconBochornos           },
  { label: 'Insomnio',              icon: iconInsomnio            },
  { label: 'Cambios de humor',      icon: iconCambiosHumor        },
  { label: 'Fatiga',                icon: iconFatiga              },
  { label: 'Sequedad vaginal',      icon: iconSequedadVaginal     },
  { label: 'Aumento de peso',       icon: iconAumentoPeso         },
  { label: 'Baja libido',           icon: iconBajaLibido          },
  { label: 'Ansiedad',              icon: iconAnsiedad            },
  { label: 'Dolor articular',       icon: iconDolorArticular      },
  { label: 'Palpitaciones',         icon: iconPalpitaciones       },
  { label: 'Infecciones urinarias', icon: iconInfeccionesUrinarias},
  { label: 'Niebla mental',         icon: iconNieblaMental        },
]

const INITIAL_VISIBLE = 8

export default function SymptomsSection() {
  const [selected, setSelected] = useState(new Set())
  const [showAll, setShowAll] = useState(false)

  const toggle = (label) => {
    setSelected((prev) => {
      const next = new Set(prev)
      if (next.has(label)) {
        next.delete(label)
      } else {
        next.add(label)
      }
      return next
    })
  }

  const visible = showAll ? symptoms : symptoms.slice(0, INITIAL_VISIBLE)
  const hasSelection = selected.size > 0

  return (
    <section className={styles.section} id="propuesta">
      <div className="container">

        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.heading}>
            Si algo de esto te está pasando,{' '}
            <em className={styles.headingEmphasis}>no estás sola</em>
          </h2>
          <p className={styles.subtext}>
            Selecciona los síntomas que estás experimentando.
          </p>
        </div>

        {/* Chips */}
        <div className={styles.chips} role="list">
          {visible.map((s) => (
            <button
              key={s.label}
              role="listitem"
              className={`${styles.chip} ${selected.has(s.label) ? styles.chipSelected : ''}`}
              onClick={() => toggle(s.label)}
              aria-pressed={selected.has(s.label)}
            >
              <img src={s.icon} alt="" className={styles.chipIcon} aria-hidden="true" />
              <span>{s.label}</span>
            </button>
          ))}
        </div>

        {/* Show more */}
        {!showAll && (
          <button className={styles.showMore} onClick={() => setShowAll(true)}>
            Ver más síntomas
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
        )}

        {/* CTA */}
        <div className={styles.cta}>
          <a
            href="https://wa.me/525523114388"
            className={`${styles.ctaLink} ${hasSelection ? styles.ctaActive : ''}`}
            onClick={events.heroCta}
          >
            <span className={styles.ctaMain}>
              {hasSelection
                ? `Tengo ${selected.size} de estos síntomas`
                : 'Tengo varios de estos síntomas'}
            </span>
            <span className={styles.ctaSub}>Quiero hablar con una especialista</span>
          </a>
        </div>

      </div>
    </section>
  )
}
