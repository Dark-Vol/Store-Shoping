import { Guitar, Piano, Headphones, Music } from "lucide-react"
import styles from "./DepartmentContactsCard.module.scss"

export function DepartmentContactsCard() {
  return (
    <div className={styles.departmentContactsCard}>
      <div className="">
        <h3 className="">Department Contacts</h3>
        <p className="">Reach out to our specialized teams</p>
      </div>
      <div className="">
        <div className="">
          <Guitar className="" />
          <div className="">
            <p className="">Guitar Department</p>
            <p className="">guitars@harmonymusicstore.com</p>
          </div>
        </div>
        <div className="">
          <Piano className="" />
          <div className="">
            <p className="">Piano & Keyboards</p>
            <p className="">pianos@harmonymusicstore.com</p>
          </div>
        </div>
        <div className="">
          <Headphones className="" />
          <div className="">
            <p className="">Audio Equipment</p>
            <p className="">audio@harmonymusicstore.com</p>
          </div>
        </div>
        <div className="">
          <Music className="" />
          <div className="">
            <p className="">Repairs & Maintenance</p>
            <p className="">repairs@harmonymusicstore.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}
