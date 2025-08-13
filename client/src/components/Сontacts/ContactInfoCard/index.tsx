import { MapPin, Phone, Mail } from "lucide-react"
import styles from "./ContactInfoCard.module.scss"

export function ContactInfoCard() {
  return (
    <div className={styles.contactInfoCard}>
      <div className={styles.header}>
        <MapPin className={styles.icon} />
        <h3 className={styles.title}>Visit Our Store</h3>
      </div>
      <div className={styles.content}>
        <div className={styles.addressBlock}>
          <p className={styles.storeName}>Harmony Music Store</p>
          <p className={styles.addressLine}>123 Melody Street</p>
          <p className={styles.addressLine}>Music District, NY 10001</p>
        </div>
        <div className={styles.contactRow}>
          <Phone className={styles.icon} />
          <span className={styles.contactText}>(555) 123-MUSIC</span>
        </div>
        <div className={styles.contactRow}>
          <Mail className={styles.icon} />
          <span className={styles.contactText}>info@harmonymusicstore.com</span>
        </div>
      </div>
    </div>
  )
}
