import { Music, Guitar, Piano, Headphones } from "lucide-react"
import styles from "./ServicesSection.module.scss"

export function ServicesSection() {
  return (
    <div className={styles.servicesSection}>
      <div className={styles.header}>
        <h3 className="">Our Services</h3>
        <p className="">Everything you need for your musical journey</p>
      </div>
      <div className={styles.servicesList}>
        <div className={styles.serviceItem}>
          <div className={styles.icon}>
            <Music className="" />
          </div>
          <h4 className="" >Instrument Sales</h4>
          <p className="" >Wide selection of new and used instruments</p>
        </div>
        <div className={styles.serviceItem}>
          <div className={styles.icon}>
            <Guitar className="" />
          </div>
          <h4 className="">Repairs & Setup</h4>
          <p className="">Professional repair and maintenance services</p>
        </div>
        <div className={styles.serviceItem}>
          <div className={styles.icon}>
            <Piano className="" />
          </div>
          <h4 className="">Lessons</h4>
          <p className="">Private and group lessons for all skill levels</p>
        </div>
        <div className={styles.serviceItem}>
          <div className={styles.icon}>
            <Headphones className="" />
          </div>
          <h4 className="">Rentals</h4>
          <p className="">Short and long-term instrument rentals</p>
        </div>
      </div>
    </div>
  )
}
