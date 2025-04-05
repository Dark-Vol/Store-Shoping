import styles from "./InputEmail.module.scss";

const InputEmail: React.FC = () => {

  return (
    <div className={styles.box}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20" height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.25"
        stroke-linecap="round"
        stroke-linejoin="round"
        className={styles.icon}
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" />
      </svg>
      <input
        id="email"
        className={styles.input}
        type="email"
        placeholder="Email"
      />
    </div>
  )
}

export default InputEmail