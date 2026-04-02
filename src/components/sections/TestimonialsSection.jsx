import StarRating from '../ui/StarRating'
import styles from './TestimonialsSection.module.css'

const testimonials = [
  {
    id: 1,
    name: 'María G.',
    location: 'México',
    text: 'Por primera vez una doctora me escuchó de verdad. Entendí qué estaba viviendo y cómo manejarlo. Menna cambió mi calidad de vida completamente.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Carla M.',
    location: 'México',
    text: 'Llevaba años con síntomas que nadie explicaba. En mi primera consulta ya tenía un plan claro. No puedo creer que esperé tanto.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Patricia V.',
    location: 'Colombia',
    text: 'La atención es cálida, profesional y completamente personalizada. Me sentí contenida desde el primer minuto. Lo recomiendo sin dudarlo.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Lucía R.',
    location: 'México',
    text: 'Acceder a una especialista de este nivel de forma tan sencilla y en mi idioma fue un alivio enorme. El seguimiento es excelente.',
    rating: 5,
  },
]

export default function TestimonialsSection() {
  return (
    <section className={`section ${styles.section}`} id="comunidad">
      <div className="container">
        <div className={`section-header ${styles.header}`}>
          <h2 className="h2">
            Mujeres que ya están{' '}
            <em className={styles.italic}>viviendo este proceso</em>{' '}
            con acompañamiento
          </h2>
        </div>

        <div className={styles.grid}>
          {testimonials.map((t) => (
            <article key={t.id} className={styles.card}>
              <StarRating rating={t.rating} />
              <p className={styles.quote}>"{t.text}"</p>
              <div className={styles.author}>
                <div className={styles.avatar} aria-hidden="true">
                  {t.name[0]}
                </div>
                <div>
                  <p className={styles.name}>{t.name}</p>
                  <p className={styles.location}>{t.location}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
