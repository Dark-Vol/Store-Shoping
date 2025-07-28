import { Music } from "lucide-react"
import styles from "./HeaderSection.module.scss"

export function HeaderSection() {
  return (
    <div className={styles.headerSection}>
      <div className="">
        <div className="">
          <Music className="" />
          <h1 className="">Harmony Music Store</h1>
        </div>
        <p className="">
          Your premier destination for musical instruments and accessories
        </p>
      </div>
    </div>
  )
}