import { Music } from "lucide-react"
import styles from "./HeaderSection.module.scss"

export function HeaderSection() {
  return (
    <div className={styles.headerSection}>
      <div className={styles.container}>
        <div className={styles.logoRow}>
          <Music className={styles.icon} />
          <h1 className={styles.title}>Harmony Music Store</h1>
        </div>
        <p className={styles.subtitle}>
          Your premier destination for musical instruments and accessories
        </p>
      </div>
    </div>
  )
}