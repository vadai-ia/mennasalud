import styles from './BlogSection.module.css'

const posts = [
  {
    id: 1,
    tag: 'Menopausia',
    title: '¿Qué es la perimenopausia y cómo identificarla?',
    excerpt:
      'Los cambios hormonales pueden comenzar años antes de la menopausia. Conoce las señales.',
  },
  {
    id: 2,
    tag: 'Hormonal',
    title: 'Por qué tu tiroides puede estar afectando tu energía',
    excerpt:
      'La función tiroidea es clave para el bienestar femenino. Esto es lo que debes saber.',
  },
  {
    id: 3,
    tag: 'Bienestar',
    title: 'Sueño y hormonas: la conexión que nadie te explica',
    excerpt:
      'El insomnio en la menopausia no es casualidad. Hay razones hormonales detrás.',
  },
  {
    id: 4,
    tag: 'Salud',
    title: 'Terapia hormonal: mitos y realidades en 2024',
    excerpt:
      'Desmontamos los miedos más comunes alrededor del tratamiento hormonal sustitutivo.',
  },
  {
    id: 5,
    tag: 'Nutrición',
    title: 'Alimentación y menopausia: lo que sí funciona',
    excerpt:
      'Pequeños cambios en tu dieta pueden tener un impacto enorme en tus síntomas.',
  },
]

export default function BlogSection() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className={`section-header ${styles.header}`}>
          <h2 className="h2">
            Sigue{' '}
            <em className={styles.italic}>aprendiendo</em>{' '}
            sobre tu cuerpo, incluso antes de tu consulta
          </h2>
          <p className="body-text">
            Contenido creado por nuestras especialistas para que llegues
            informada y con confianza.
          </p>
        </div>

        <div className={styles.grid}>
          {posts.map((post) => (
            <article key={post.id} className={styles.card}>
              <div className={styles.cardImage} aria-hidden="true">
                <span className={styles.cardTag}>{post.tag}</span>
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{post.title}</h3>
                <p className={styles.cardExcerpt}>{post.excerpt}</p>
                <a href="#" className={styles.readMore}>
                  Leer más →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
