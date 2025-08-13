import { Guitar, Piano, Headphones, Music } from "lucide-react"
import styles from "./DepartmentContactsCard.module.scss"

export function DepartmentContactsCard() {
  return (
    <div className={styles.departmentContactsCard}>
      <div className={styles.header}>
        <h3 className={styles.title}>Department Contacts</h3>
        <p className={styles.description}>Reach out to our specialized teams</p>
      </div>
      <div className={styles.contactsList}>
        <div className={styles.contactItem}>
          <Guitar className={styles.icon} />
          <div className={styles.contactInfo}>
            <p className={styles.contactTitle}>Guitar Department</p>
            <p className={styles.contactEmail}>guitars@harmonymusicstore.com</p>
          </div>
        </div>
        <div className={styles.contactItem}>
          <Piano className={styles.icon} />
          <div className={styles.contactInfo}>
            <p className={styles.contactTitle}>Piano & Keyboards</p>
            <p className={styles.contactEmail}>pianos@harmonymusicstore.com</p>
          </div>
        </div>
        <div className={styles.contactItem}>
          <Headphones className={styles.icon} />
          <div className={styles.contactInfo}>
            <p className={styles.contactTitle}>Audio Equipment</p>
            <p className={styles.contactEmail}>audio@harmonymusicstore.com</p>
          </div>
        </div>
        <div className={styles.contactItem}>
          <Music className={styles.icon} />
          <div className={styles.contactInfo}>
            <p className={styles.contactTitle}>Repairs & Maintenance</p>
            <p className={styles.contactEmail}>repairs@harmonymusicstore.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}
