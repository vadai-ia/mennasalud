import { events } from '../../lib/analytics'
import styles from './SocialLearningSection.module.css'
import reel1 from '../../assets/Images/reels/reel-1.jpg'
import reel2 from '../../assets/Images/reels/reel-2.jpg'
import reel3 from '../../assets/Images/reels/reel-3.jpg'
import reel4 from '../../assets/Images/reels/reel-4.jpg'

const reels = [
  { id: 1, thumbnail: reel2, href: 'https://www.instagram.com/reel/DVtw8XViewI/' },
  { id: 2, thumbnail: reel1, href: 'https://www.instagram.com/reel/DWHhdJbCAsQ/' },
  { id: 3, thumbnail: reel3, href: 'https://www.instagram.com/reel/DVbu2HhCaHE/' },
  { id: 4, thumbnail: reel4, href: 'https://www.instagram.com/reel/DVZKYDmFDgw/' },
]

const PlayIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <circle cx="24" cy="24" r="24" fill="rgba(255,255,255,0.22)" />
    <circle cx="24" cy="24" r="23" stroke="rgba(255,255,255,0.5)" strokeWidth="1" />
    <path d="M20 16l14 8-14 8V16z" fill="white" />
  </svg>
)

export default function SocialLearningSection() {
  return (
    <section className={styles.section} id="aprende">
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.heading}>
            Sigue{' '}
            <em className={styles.headingEmphasis}>aprendiendo</em>{' '}
            sobre tu cuerpo, incluso antes de tu consulta
          </h2>
          <p className={styles.description}>
            Compartimos información práctica y confiable sobre menopausia, síntomas y
            tratamientos para acompañarte en cada etapa.{' '}
            <strong className={styles.handle}>@adrianamont.menopausia</strong>
          </p>
        </div>
      </div>

      {/* Scroll wrapper — full-bleed on mobile */}
      <div className={styles.scrollWrapper}>
        <div className={styles.grid}>
          {reels.map((reel) => (
            <a
              key={reel.id}
              href={reel.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
              aria-label="Ver reel en Instagram"
              onClick={() => events.reelClicked(reel.id)}
            >
              <img
                src={reel.thumbnail}
                alt=""
                className={styles.thumbnail}
                loading="lazy"
              />
              <div className={styles.playOverlay}>
                <PlayIcon />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
