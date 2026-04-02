import styles from './OriginSection.module.css'
import fundadora from '../../assets/Images/originsection/fundadora.png'

export default function OriginSection() {
  return (
    <section className={styles.section} id="nuestra-historia">
      <div className={`container ${styles.inner}`}>

        {/* ── Left: portrait image ── */}
        <div className={styles.imageWrapper}>
          <img
            src={fundadora}
            alt="Adriana Mont, fundadora de Menna"
            className={styles.image}
          />
        </div>

        {/* ── Right: editorial text ── */}
        <div className={styles.copy}>

          {/* Heading */}
          <h2 className={styles.heading}>
            Este espacio nace de una{' '}
            <em className={styles.headingEmphasis}>experiencia real</em>
          </h2>

          {/* Intro paragraph — "Soy Adriana Mont." is bold */}
          <p className={styles.body}>
            <strong className={styles.founderName}>Soy Adriana Mont.</strong>
            {' '}Y como muchas mujeres, viví cambios en mi cuerpo que no
            entendía… y para los que nadie tenía respuestas claras.
          </p>

          <p className={styles.body}>
            Me di cuenta de que no era la única. Había miles de mujeres
            pasando por lo mismo, sintiéndose confundidas, solas o no
            escuchadas.
          </p>

          {/* Emphasis sentence */}
          <p className={styles.emphasis}>Por eso creé Menna.</p>

          {/* Supporting paragraph */}
          <p className={styles.body}>
            Un espacio donde puedas encontrar especialistas que realmente
            entienden esta etapa, y que te acompañen con claridad, empatía y
            conocimiento.
          </p>

          {/* Text-link CTA */}
          <a href="#como-funciona" className={styles.ctaLink}>
            Conoce cómo funciona
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>

        </div>
      </div>
    </section>
  )
}
