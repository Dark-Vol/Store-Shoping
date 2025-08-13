import { Youtube , Twitter , Instagram , Facebook } from 'lucide-react';
import styles from "./SocialMediaCard.module.scss"

export function SocialMediaCard() {
  return (
    <div className={styles.socialMediaCard}>
      <div className={styles.header}>
        <h3 className={styles.socialMediaTitle}>Follow Us</h3>
        <p className={styles.socialMediaDescription}>
          Stay connected for the latest updates
        </p>
      </div>
      <div className={styles.socialMediaButtons}>
        <button className={styles.button}>
          <Facebook />
        </button>
        <button className={styles.button}>
          <Instagram />
        </button>
        <button className={styles.button}>
          <Twitter />
        </button>
        <button className={styles.button}>
          <Youtube />
        </button>
      </div>
    </div>
  )
}
