import Button from '../ui/Button'
import styles from './HowItWorksSection.module.css'
import howItWorksWomen from '../../assets/Images/how-it-works-section/how-it-works-women.png'

const steps = [
  {
    number: '01',
    label: 'Agenda tu consulta',
    note: null,
  },
  {
    number: '02',
    label: 'Te conectamos con una especialista',
    note: '(Proceso es 100% en línea)',
  },
  {
    number: '03',
    label: 'Recibe atención personalizada',
    note: null,
  },
]

export default function HowItWorksSection() {
  return (
    <section className={styles.section} id="como-funciona">
      <div className={`container ${styles.inner}`}>

        {/* ── Left: image ── */}
        <div className={styles.imageWrapper}>
          <img
            src={howItWorksWomen}
            alt="Médica especialista en consulta en línea"
            className={styles.howImage}
          />
        </div>

        {/* ── Right: content ── */}
        <div className={styles.content}>
          <h2 className={styles.heading}>
            Recibir ayuda es{' '}
            <em className={styles.headingEmphasis}>más fácil de lo que crees</em>
          </h2>

          <ol className={styles.steps}>
            {steps.map((step, i) => (
              <li key={step.number} className={styles.step}>

                {/* Left rail: circle + connector */}
                <div className={styles.rail}>
                  <div className={styles.circle}>
                    <span className={styles.circleNum}>{step.number}</span>
                  </div>
                  {/* Connector line — hidden for last step */}
                  {i < steps.length - 1 && (
                    <div className={styles.connector} aria-hidden="true" />
                  )}
                </div>

                {/* Right: text */}
                <div className={styles.stepBody}>
                  <p className={styles.stepLabel}>{step.label}</p>
                  {step.note && (
                    <p className={styles.stepNote}>{step.note}</p>
                  )}
                </div>

              </li>
            ))}
          </ol>

          <div className={styles.cta}>
            <Button href="https://citas.mennasalud.com/book" size="lg">
              Agenda tu consulta
            </Button>
          </div>
        </div>

      </div>
    </section>
  )
}
