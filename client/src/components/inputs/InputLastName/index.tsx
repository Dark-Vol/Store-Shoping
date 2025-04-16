import styles from "./InputLastName.module.scss";

interface InputLastNameProps {
  lastName: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputLastName: React.FC<InputLastNameProps> = ({ lastName, onChange }) => {
  return (
    <div className={styles.box}>
      <input
        id="LastName"
        className={styles.input_last_name}
        type="text"
        placeholder="LastName"
        value={lastName}
        onChange={onChange}
      />
      <label
        htmlFor="LastName"
        className={styles.label_last_name}
      >
        Last Name
      </label>
    </div>
  )
}

export default InputLastName