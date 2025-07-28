import { MapPin, Phone, Mail } from "lucide-react"
import styles from "./ContactInfoCard.module.scss"

export function ContactInfoCard() {
  return (
    <div className={styles.contactInfoCard}>
      <div className="">
        <MapPin className="" />
        <h3 className="">Visit Our Store</h3>
      </div>
      <div className="">
        <div>
          <p className="">Harmony Music Store</p>
          <p>123 Melody Street</p>
          <p>Music District, NY 10001</p>
        </div>
        <div className="">
          <Phone className="" />
          <span>(555) 123-MUSIC</span>
        </div>
        <div className="">
          <Mail className="" />
          <span>info@harmonymusicstore.com</span>
        </div>
      </div>
    </div>
  )
}
