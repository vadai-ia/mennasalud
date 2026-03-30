import styles from './MarqueeSection.module.css'

// One segment of text — repeated inside two tracks for seamless looping
const SEGMENT = 'Salud hormonal\u2002/\u2002Bienestar femenino\u2002/\u2002Atención especializada\u2002/'

// Repeat enough times so the track is always wider than the viewport
const REPEATS = 6

const track = Array.from({ length: REPEATS }, () => SEGMENT).join('\u2003')

export default function MarqueeSection() {
  return (
    <div className={styles.ribbon} aria-hidden="true">
      {/*
       * Two identical tracks side by side.
       * The animation moves the wrapper by -50%, which lands
       * exactly at the start of the second track — no jump.
       */}
      <div className={styles.wrapper}>
        <span className={styles.track}>{track}</span>
        <span className={styles.track}>{track}</span>
      </div>
    </div>
  )
}
