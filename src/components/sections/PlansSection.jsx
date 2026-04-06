import Button from '../ui/Button'
import styles from './PlansSection.module.css'

const plans = [
  {
    id: 'primera',
    title: 'Consulta primera vez',
    originalPrice: '$1,500',
    price: '$1,200',
    currency: 'MXN',
    features: [
      'Evaluación médica completa',
      'Revisión detallada de síntomas',
      'Plan de tratamiento personalizado',
      'Consulta en línea privada',
      '1 hora de duración',
    ],
    cta: 'Agenda tu consulta',
    ctaVariant: 'primary',
  },
  {
    id: 'seguimiento',
    title: 'Consulta de seguimiento',
    originalPrice: '$1,200',
    price: '$1,000',
    currency: 'MXN',
    features: [
      'Evaluación de progreso',
      'Ajuste de tratamiento',
      'Resolución de dudas',
      'Consulta en línea privada',
      '40 min de duración',
    ],
    cta: 'Agenda tu consulta',
    ctaVariant: 'outline',
  },
]

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <circle cx="10" cy="10" r="9.5" stroke="var(--color-primary)" strokeOpacity="0.4" />
    <path
      d="M6.5 10l2.5 2.5 4.5-5"
      stroke="var(--color-primary)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default function PlansSection() {
  return (
    <section className={`section ${styles.section}`} id="agenda">
      <div className="container">

        <div className={styles.header}>
          <h2 className={styles.heading}>
            Empieza tu proceso con{' '}
            <em className={styles.headingEmphasis}>acompañamiento profesional</em>
          </h2>
        </div>

        <div className={styles.grid}>
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`${styles.card} ${plan.ctaVariant === 'primary' ? styles.cardFeatured : ''}`}
            >
              <div className={styles.cardTop}>
                <h3 className={styles.planTitle}>{plan.title}</h3>
                <div className={styles.priceBlock}>
                  <span className={styles.originalPrice}>{plan.originalPrice}</span>
                  <p className={styles.price}>
                    {plan.price}
                    <span className={styles.currency}>{plan.currency}</span>
                  </p>
                </div>
              </div>

              <ul className={styles.features} role="list">
                {plan.features.map((f) => (
                  <li key={f} className={styles.feature}>
                    <CheckIcon />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <Button
                href="https://citas.mennasalud.com/book"
                variant={plan.ctaVariant === 'primary' ? 'primary' : 'secondary'}
                size="lg"
                className={styles.planCta}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        {/* ── Ebooks block ── */}
        <div className={styles.ebooks}>
          <h3 className={styles.ebooksTitle}>¿Aún no estás lista para agendar ?</h3>
          <p className={styles.ebooksBody}>
            Empieza aquí descubre lo que realmente está pasando en tu cuerpo y aprende cómo
            tomar control de esta etapa con nuestros recursos digitales introductorios.
          </p>
          <a href="https://citas.mennasalud.com/tienda" target="_blank" rel="noopener noreferrer" className={styles.ebooksLink}>
            Conocer ebooks
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  )
}
