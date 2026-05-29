import { useRef } from 'react'
import StarRating from '../ui/StarRating'
import styles from './SpecialistsSection.module.css'
import imgDaniaGalvez from '../../assets/Images/doctors/Dania-galvez.png'
import imgDianaChacon from '../../assets/Images/doctors/Diana_Chacon.png'
import imgRocioBaide from '../../assets/Images/doctors/Rocio-Baide.png'
import imgMariaVictoria from '../../assets/Images/doctors/maria-victoria.png'

const specialists = [
  {
    id: 2,
    name: 'Dra. Dania Gálvez',
    specialty: 'Ginecóloga Obstetra',
    country: 'México',
    rating: 4.8,
    bio: 'Especialista en menopausia y cuidado femenino. Te acompaño en un espacio profesional, humano y seguro en cada etapa de tu vida.',
    photo: imgDaniaGalvez,
  },
  {
    id: 4,
    name: 'Dra. Rocío Baide',
    specialty: 'Ginecóloga',
    country: 'México y Honduras',
    rating: 4.8,
    bio: 'Ginecóloga especializada en menopausia y salud hormonal, con enfoque integral y basado en evidencia para el bienestar femenino.',
    photo: imgRocioBaide,
  },
  {
    id: 5,
    name: 'Dra. Diana Chacón',
    specialty: 'Ginecología y Obstetricia',
    country: 'Colombia',
    rating: 4.8,
    bio: 'Ginecóloga experta en menopausia, apasionada por el bienestar integral de la mujer en esta etapa de la vida.',
    photo: imgDianaChacon,
  },
  {
    id: 6,
    name: 'Dra. María Victoria',
    specialty: 'Ginecología',
    country: 'Ecuador',
    rating: 4.8,
    bio: 'Dedicada al cuidado integral de la mujer, con un enfoque cercano y empático en cada consulta.',
    photo: imgMariaVictoria,
  },
]

export default function SpecialistsSection() {
  const gridRef = useRef(null)

  const scroll = (direction) => {
    const grid = gridRef.current
    if (!grid) return
    const cardWidth = grid.querySelector(`.${styles.card}`)?.offsetWidth || 220
    const gap = 20
    const amount = (cardWidth + gap) * 2
    grid.scrollBy({ left: direction === 'left' ? -amount : amount, behavior: 'smooth' })
  }

  return (
    <section className={`section ${styles.section}`} id="especialistas">
      <div className="container">
        <div className={`section-header ${styles.header}`}>
          <h2 className="h2">
            Especialistas que{' '}
            <em className={styles.italic}>te acompañan</em>{' '}
            en cada etapa
          </h2>
          <p className="body-text">
            Nuestro equipo está formado por médicas especializadas en salud
            hormonal femenina, con años de experiencia y un enfoque humano.
          </p>
        </div>
      </div>

      <div className={styles.carouselWrapper}>
        {/* Left arrow — desktop only */}
        <button
          className={`${styles.navBtn} ${styles.navLeft}`}
          onClick={() => scroll('left')}
          aria-label="Anterior"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        {/* Cards */}
        <div className={styles.grid} ref={gridRef}>
          {specialists.map((doc) => (
            <article key={doc.id} className={styles.card}>
              <img
                src={doc.photo}
                alt={doc.name}
                className={styles.photo}
                loading="lazy"
              />
              <span className={styles.countryTag}>{doc.country}</span>
              <div className={styles.info}>
                <h3 className={styles.name}>{doc.name}</h3>
                <p className={styles.specialty}>{doc.specialty}</p>
                <p className={styles.bio}>{doc.bio}</p>
                <StarRating rating={doc.rating} />
              </div>
            </article>
          ))}
        </div>

        {/* Right arrow — desktop only */}
        <button
          className={`${styles.navBtn} ${styles.navRight}`}
          onClick={() => scroll('right')}
          aria-label="Siguiente"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 6 15 12 9 18" />
          </svg>
        </button>
      </div>

    </section>
  )
}
