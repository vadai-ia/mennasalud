import styles from './ImageBreakSection.module.css'
import womenGroup from '../../assets/Images/image-break-section/women-group.jpg'

export default function ImageBreakSection() {
  return (
    <div className={styles.wrapper}>
      <img
        src={womenGroup}
        alt=""
        className={styles.image}
        loading="lazy"
        aria-hidden="true"
      />
    </div>
  )
}
