import styles from "./MapSection.module.scss"

export function MapSection() {
  return (
    <div className={styles.mapSection}>
      <div className="">
        <h3 className="">Find Us</h3>
        <p className="">Located in the heart of the Music District</p>
      </div>
      <div className="">
        <img
          src="/placeholder.svg?height=400&width=600&text=Interactive+Map+of+Harmony+Music+Store+Location"
          alt="Map showing Harmony Music Store location"
          className=""
        />
      </div>
      <div className="">
        <h4 className="">Getting Here</h4>
        <ul className="">
          <li>• Subway: Take the A, C, or E train to Music Square Station</li>
          <li>• Bus: Routes 15, 23, and 42 stop directly in front</li>
          <li>• Parking: Street parking and nearby garage available</li>
          <li>• Bike: Citi Bike station located across the street</li>
        </ul>
      </div>
    </div>
  )
}
