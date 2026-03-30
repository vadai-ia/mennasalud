import styles from './GrowthSection.module.css'

const GlobeIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <circle cx="16" cy="16" r="13" stroke="var(--color-primary)" strokeOpacity="0.5" strokeWidth="1.5" />
    <ellipse cx="16" cy="16" rx="6" ry="13" stroke="var(--color-primary)" strokeOpacity="0.5" strokeWidth="1.5" />
    <line x1="3" y1="16" x2="29" y2="16" stroke="var(--color-primary)" strokeOpacity="0.5" strokeWidth="1.5" />
    <line x1="5" y1="10" x2="27" y2="10" stroke="var(--color-primary)" strokeOpacity="0.5" strokeWidth="1.5" />
    <line x1="5" y1="22" x2="27" y2="22" stroke="var(--color-primary)" strokeOpacity="0.5" strokeWidth="1.5" />
  </svg>
)

export default function GrowthSection() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>

        <GlobeIcon />

        <h2 className={styles.heading}>
          Estamos creciendo para{' '}
          <em className={styles.headingEmphasis}>acompañar a más mujeres</em>
        </h2>

        <div className={styles.body}>
          <p>
            Actualmente contamos con atención en ciertos países y seguimos
            expandiendo nuestra red de especialistas.
          </p>
          <p>
            Si aún no hay disponibilidad en tu país, pronto estaremos más cerca de ti.
          </p>
        </div>

      </div>
    </section>
  )
}
