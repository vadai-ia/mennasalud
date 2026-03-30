import Button from '../ui/Button'
import styles from './ExplanationSection.module.css'
import imgPerimenopausia from '../../assets/Images/explanation-section/perimenopausia.jpg'
import imgMenopausia from '../../assets/Images/explanation-section/menopausia.jpg'
import imgQuirurgica from '../../assets/Images/explanation-section/quirurgica.jpg'
import imgTemprana from '../../assets/Images/explanation-section/temprana-o-precoz.jpg'

const cards = [
  {
    id: 1,
    title: 'Perimenopausia',
    description:
      'La transición hormonal que puede durar años antes de la menopausia. Con síntomas reales que merecen atención.',
    image: imgPerimenopausia,
  },
  {
    id: 2,
    title: 'Menopausia',
    description:
      'Un momento natural en la vida de toda mujer, que puede vivirse con bienestar y acompañamiento adecuado.',
    image: imgMenopausia,
  },
  {
    id: 3,
    title: 'Menopausia quirúrgica',
    description:
      'Cuando la menopausia llega de forma súbita por una intervención médica. Requiere atención especializada e inmediata.',
    image: imgQuirurgica,
  },
  {
    id: 4,
    title: 'Menopausia temprana',
    description:
      'Cuando los cambios hormonales ocurren antes de los 45 años. Con el acompañamiento correcto, puede vivirse con bienestar.',
    image: imgTemprana,
  },
]

export default function ExplanationSection() {
  return (
    <section className={styles.section} id="nosotros">
      <div className="container">

        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.heading}>
            Lo que estás viviendo tiene una{' '}
            <em className={styles.headingEmphasis}>explicación</em>
          </h2>
          <p className={styles.description}>
            No es estrés, no es "cosa de la edad", no te lo estás imaginando.
            Hay razones hormonales reales detrás de lo que sientes, y nuestras
            especialistas están aquí para identificarlas contigo.
          </p>
        </div>

      </div>

      {/* Cards — extends outside container on mobile for horizontal scroll */}
      <div className={styles.scrollWrapper}>
        <div className={styles.grid}>
          {cards.map((card) => (
            <article key={card.id} className={styles.card}>
              <img
                src={card.image}
                alt={card.title}
                className={styles.cardImage}
                loading="lazy"
              />

              {/* Content */}
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardDesc}>{card.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="container">
        <div className={styles.cta}>
          <Button href="https://wa.me/525523114388" size="lg" className={styles.ctaButton}>
            Descubre qué está pasando
          </Button>
        </div>
      </div>

    </section>
  )
}
