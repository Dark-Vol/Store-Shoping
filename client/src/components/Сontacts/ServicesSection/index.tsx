import { Music, Guitar, Piano, Headphones } from "lucide-react"
import styles from "./ServicesSection.module.scss"

export function ServicesSection() {
  return (
    <div className={styles.servicesSection}>
      <div className={styles.header}>
        <h3 className={styles.title}>Our Services</h3>
        <p className={styles.description}>Everything you need for your musical journey</p>
      </div>
      <div className={styles.servicesList}>
        <div className={styles.serviceItem}>
          <div className={styles.icon}>
            <Music />
          </div>
          <h4 className={styles.serviceTitle}>Instrument Sales</h4>
          <p className={styles.serviceDescription}>Wide selection of new and used instruments</p>
        </div>
        <div className={styles.serviceItem}>
          <div className={styles.icon}>
            <Guitar />
          </div>
          <h4 className={styles.serviceTitle}>Repairs & Setup</h4>
          <p className={styles.serviceDescription}>Professional repair and maintenance services</p>
        </div>
        <div className={styles.serviceItem}>
          <div className={styles.icon}>
            <Piano />
          </div>
          <h4 className={styles.serviceTitle}>Lessons</h4>
          <p className={styles.serviceDescription}>Private and group lessons for all skill levels</p>
        </div>
        <div className={styles.serviceItem}>
          <div className={styles.icon}>
            <Headphones />
          </div>
          <h4 className={styles.serviceTitle}>Rentals</h4>
          <p className={styles.serviceDescription}>Short and long-term instrument rentals</p>
        </div>
      </div>
    </div>
  )
}
