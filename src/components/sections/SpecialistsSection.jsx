import StarRating from '../ui/StarRating'
import styles from './SpecialistsSection.module.css'
import imgDaniaGalvez from '../../assets/Images/doctors/Dania-Galvez.jpg'
import imgDianaChacon from '../../assets/Images/doctors/Diana-Chacon.jpg'
import imgElenaGonzalez from '../../assets/Images/doctors/Elena-Gonzalez.jpg'
import imgRocioBaide from '../../assets/Images/doctors/Rocio-Baide.jpg'
import imgCynthiaInfante from '../../assets/Images/doctors/Cynthia-Infante.jpg'

const specialists = [
  {
    id: 1,
    name: 'Dra. Dania Gálvez',
    specialty: 'Ginecóloga',
    country: 'México',
    rating: 4.8,
    bio: 'Especialista en menopausia y terapia hormonal con 12 años de experiencia.',
    photo: imgDaniaGalvez,
  },
  {
    id: 2,
    name: 'Dra. Diana Chacón',
    specialty: 'Ginecóloga',
    country: 'Colombia',
    rating: 4.8,
    bio: 'Enfocada en desequilibrios hormonales y salud tiroidea en mujeres.',
    photo: imgDianaChacon,
  },
  {
    id: 3,
    name: 'Dra. Elena González',
    specialty: 'Ginecóloga',
    country: 'México',
    rating: 4.8,
    bio: 'Combina medicina convencional y funcional para el bienestar hormonal integral.',
    photo: imgElenaGonzalez,
  },
  {
    id: 4,
    name: 'Dra. Rocío Baide',
    specialty: 'Ginecóloga',
    country: 'México y Honduras',
    rating: 4.8,
    bio: 'Especialista en perimenopausia y salud reproductiva de la mujer adulta.',
    photo: imgRocioBaide,
  },
  {
    id: 5,
    name: 'Dra. Cynthia Infante',
    specialty: 'Ginecóloga',
    country: 'México',
    rating: 4.8,
    bio: 'Comprometida con la salud hormonal femenina y el bienestar integral de la mujer.',
    photo: imgCynthiaInfante,
  },
]

export default function SpecialistsSection() {
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

      {/* Scroll wrapper breaks out of container on mobile */}
      <div className={styles.scrollWrapper}>
        <div className={styles.grid}>
          {specialists.map((doc) => (
            <article key={doc.id} className={styles.card}>
              {/* Photo */}
              <img
                src={doc.photo}
                alt={doc.name}
                className={styles.photo}
                loading="lazy"
              />

              {/* Country pill */}
              <span className={styles.countryTag}>{doc.country}</span>

              {/* Info */}
              <div className={styles.info}>
                <h3 className={styles.name}>{doc.name}</h3>
                <p className={styles.specialty}>{doc.specialty}</p>
                <p className={styles.bio}>{doc.bio}</p>
                <StarRating rating={doc.rating} />
              </div>
            </article>
          ))}
        </div>
      </div>

    </section>
  )
}
