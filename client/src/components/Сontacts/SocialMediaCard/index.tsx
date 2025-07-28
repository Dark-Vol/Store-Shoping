import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"
import styles from "./SocialMediaCard.module.scss"

export function SocialMediaCard() {
  return (
    <div className={styles.socialMediaCard}>
      <div className={styles.header}>
        <h3 className={styles.SocialMediaTitle}>Follow Us</h3>
        <p className={styles.SocialMediaDicription}>Stay connected for the latest updates</p>
      </div>
      <div className={styles.socialMediaButtons}>
        <button className="">
          <Facebook/>
        </button>
        <button className="">
          <Instagram />
        </button>
        <button className="">
          <Twitter />
        </button>
        <button className="">
          <Youtube />
        </button>
      </div>
    </div>
  )
}
