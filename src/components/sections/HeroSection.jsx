import Button from '../ui/Button'
import styles from './HeroSection.module.css'
import heroWomen from '../../assets/Images/hero/hero-women.png'

const ShieldIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
)

const StarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.32L10 13.27l-4.77 2.51.91-5.32L2.27 6.62l5.34-.78L10 1z" />
  </svg>
)

export default function HeroSection() {
  return (
    <section className={styles.hero} aria-label="Hero">
      <div className={`container ${styles.inner}`}>

        {/* ── Left: Copy ── */}
        <div className={styles.copy}>

          {/* Eyebrow */}
          <p className={styles.eyebrow}>
            Especialistas en menopausia y salud femenina
          </p>

          {/* Heading */}
          <h1 className={styles.heading}>
            Entiende tu cuerpo.<br />
            Vuelve a{' '}
            <em className={styles.headingBoldItalic}>sentirte<br />bien.</em>
          </h1>

          {/* Body */}
          <p className={styles.body}>
            Conectamos a mujeres con doctoras especialistas en menopausia y
            perimenopausia, para que recibas atención médica personalizada y
            las prescripciones que realmente necesitas.
          </p>

          {/* CTA */}
          <div className={styles.actions}>
            <Button href="https://citas.mennasalud.com/book" size="lg" className={styles.ctaButton}>
              Agenda tu consulta ahora&nbsp;→
            </Button>
          </div>

          {/* Microcopy */}
          <p className={styles.microcopy}>
            <ShieldIcon />
            100% en línea · Atención internacional · Fácil y rápido
          </p>

        </div>

        {/* ── Right: Image ── */}
        <div className={styles.imageWrapper}>
          <img
            src={heroWomen}
            alt="Mujer sintiéndose bien con su salud hormonal"
            className={styles.heroImage}
          />

          {/* Review card */}
          <div className={styles.reviewCard} aria-hidden="true">
            <div className={styles.reviewStars}>
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} />
              ))}
            </div>
            <p className={styles.reviewText}>
              "Por fin alguien que entiende lo que vivo todos los días."
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
