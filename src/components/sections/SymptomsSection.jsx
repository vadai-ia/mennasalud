import Button from '../ui/Button'
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

export default function SymptomsSection() {
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
            Muchas mujeres viven cambios que no logran entender ni explicar.<br className={styles.br} />
            Y lo más difícil no es solo lo que sientes... es no saber por qué.
          </p>
        </div>

        {/* Grid */}
        <ul className={styles.grid} role="list">
          {symptoms.map((s) => (
            <li key={s.label} className={styles.card}>
              <div className={styles.icon} aria-hidden="true">
                <img src={s.icon} alt="" />
              </div>
              <span className={styles.label}>{s.label}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className={styles.cta}>
          <Button href="#agenda" size="lg">
            Quiero entender qué me está pasando
          </Button>
        </div>

      </div>
    </section>
  )
}
