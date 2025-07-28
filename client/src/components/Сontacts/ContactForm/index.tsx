import styles from "./ContactForm.module.scss"

export function ContactForm() {
  return (
    <div className={styles.contactForm}>
      <div className="">
        <h3 className="">Send Us a Message</h3>
        <p className="">
          Have a question about our instruments or services? We'd love to hear from you!
        </p>
      </div>
      <form className="">
        <div className="">
          <div className="">
            <label htmlFor="firstName" className="">First Name</label>
            <input id="firstName" placeholder="John" className="" />
          </div>
          <div className="">
            <label htmlFor="lastName" className="">Last Name</label>
            <input id="lastName" placeholder="Doe" className="" />
          </div>
        </div>
        <div className="">
          <label htmlFor="email" className="">Email</label>
          <input id="email" type="email" placeholder="john@example.com" className="" />
        </div>
        <div className="">
          <label htmlFor="phone" className="">Phone Number (Optional)</label>
          <input id="phone" type="tel" placeholder="(555) 123-4567" className="" />
        </div>
        <div className="">
          <label htmlFor="subject" className="">Subject</label>
          <input id="subject" placeholder="What can we help you with?" className="" />
        </div>
        <div className="">
          <label htmlFor="message" className="">Message</label>
          <textarea
            id="message"
            placeholder="Tell us about your musical needs..."
            className=""
          />
        </div>
        <button type="submit" className="">Send Message</button>
      </form>
    </div>
  )
}
