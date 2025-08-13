import styles from "./ContactForm.module.scss"

export function ContactForm() {
  return (
    <div className={styles.contactForm}>
      <div className={styles.formHeader}>
        <h3 className={styles.formTitle}>Send Us a Message</h3>
        <p className={styles.formDescription}>
          Have a question about our instruments or services? We'd love to hear from you!
        </p>
      </div>
      <form className={styles.form}>
        <div className={styles.nameRow}>
          <div className={styles.inputGroup}>
            <label htmlFor="firstName" className={styles.label}>First Name</label>
            <input id="firstName" placeholder="John" className={styles.input} />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="lastName" className={styles.label}>Last Name</label>
            <input id="lastName" placeholder="Doe" className={styles.input} />
          </div>
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="email" className={styles.label}>Email</label>
          <input id="email" type="email" placeholder="john@example.com" className={styles.input} />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="phone" className={styles.label}>Phone Number (Optional)</label>
          <input id="phone" type="tel" placeholder="(555) 123-4567" className={styles.input} />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="subject" className={styles.label}>Subject</label>
          <input id="subject" placeholder="What can we help you with?" className={styles.input} />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="message" className={styles.label}>Message</label>
          <textarea
            id="message"
            placeholder="Tell us about your musical needs..."
            className={styles.textarea}
          />
        </div>
        <button type="submit" className={styles.submitButton}>Send Message</button>
      </form>
    </div>
  )
}
