import styles from "./InputEmail.module.scss";

const InputEmail: React.FC = () => {

  return (
    <div className={styles.coolinput}>
      {/* <label htmlFor="email" className={styles.label}>
        Email
      </label> */}
        <input
          id="email"
          className={`${styles.input}`}
          type="email"
          placeholder="Email"
        />
        <span>@gmail.com</span>
    </div>
  )
}

export default InputEmail