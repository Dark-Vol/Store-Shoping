import { Clock } from "lucide-react"
import styles from "./BusinessHoursCard.module.scss"

export function BusinessHoursCard() {
  return (
    <div className={styles.businessHoursCard}>
      <div className="">
        <div className="">
          <Clock className="" />
          <h3 className="">Business Hours</h3>
        </div>
      </div>
      <div className="">
        <div className="">
          <span className="">Monday - Friday</span>
          <span className="">9:00 AM - 8:00 PM</span>
        </div>
        <div className="">
          <span className="">Saturday</span>
          <span className="">9:00 AM - 6:00 PM</span>
        </div>
        <div className="">
          <span className="">Sunday</span>
          <span className="">11:00 AM - 5:00 PM</span>
        </div>
        <div className="">
          <span className="">Holiday Hours May Vary</span>
          <p className="">We're closed on major holidays. Check our social media for updates.</p>
        </div>
      </div>
    </div>
  )
}
