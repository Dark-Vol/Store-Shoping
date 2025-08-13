import styles from "./ContactHero.module.scss"

export function ContactHero() {
  return (
    <div className={styles.contactHero}>
      <h2 className={styles.title}>Get in Touch</h2>
      <p className={styles.description}>
        {"We're here to help you find the perfect instrument or answer any questions about our services."}
      </p>
    </div>
  )
}
