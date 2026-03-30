import styles from './StarRating.module.css'

export default function StarRating({ rating = 5, count }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.stars}>
        {Array.from({ length: 5 }).map((_, i) => (
          <svg key={i} viewBox="0 0 20 20" aria-hidden="true">
            <path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.32L10 13.27l-4.77 2.51.91-5.32L2.27 6.62l5.34-.78L10 1z" />
          </svg>
        ))}
      </div>
      {rating && <span className={styles.count}>{rating}</span>}
    </div>
  )
}
