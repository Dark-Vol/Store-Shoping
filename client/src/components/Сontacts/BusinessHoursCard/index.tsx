import { Clock } from "lucide-react"
import styles from "./BusinessHoursCard.module.scss"

export function BusinessHoursCard() {
  return (
    <div className={styles.businessHoursCard}>
      <div className={styles.cardHeader}>
        <div className={styles.titleWrapper}>
          <Clock className={styles.icon} />
          <h3 className={styles.title}>Business Hours</h3>
        </div>
      </div>
      <div className={styles.hoursContent}>
        <div className={styles.hoursRow}>
          <span className={styles.day}>Monday - Friday</span>
          <span className={styles.time}>9:00 AM - 8:00 PM</span>
        </div>
        <div className={styles.hoursRow}>
          <span className={styles.day}>Saturday</span>
          <span className={styles.time}>9:00 AM - 6:00 PM</span>
        </div>
        <div className={styles.hoursRow}>
          <span className={styles.day}>Sunday</span>
          <span className={styles.time}>11:00 AM - 5:00 PM</span>
        </div>
        <div className={styles.note}>
          <span className={styles.noteLabel}>Holiday Hours May Vary</span>
          <p className={styles.noteText}>
            We're closed on major holidays. Check our social media for updates.
          </p>
        </div>
      </div>
    </div>
  )
}
