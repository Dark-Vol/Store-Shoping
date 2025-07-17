import styles from "./InputPassword.module.scss";

type InputMessageSubjectProps = {
  massageSubject: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputMessageSubject: React.FC<InputMessageSubjectProps> = ({ massageSubject, onChange }) => {
  return (
    <div className={styles.box}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.25"
        stroke-linecap="round"
        stroke-linejoin="round"
        className={styles.icon}
      >
        <circle cx="12" cy="16" r="1" />
        <rect x="3" y="10" width="18" height="12" rx="2" />
        <path d="M7 10V7a5 5 0 0 1 10 0v3" />
      </svg>
      <input
        className={styles.input_massage_subject}
        type="string"
        placeholder="massage subject"
        value={massageSubject}
        onChange={onChange}
      />
    </div>
  )
}

export default InputMessageSubject