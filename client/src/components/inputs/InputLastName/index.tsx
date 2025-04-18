import styles from "./InputLastName.module.scss";
import { UserRound } from 'lucide-react';

interface InputLastNameProps {
  lastName: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputLastName: React.FC<InputLastNameProps> = ({ lastName, onChange }) => {
  return (
    <div className={styles.box}>
      <UserRound className={styles.icon} />
      <input
        className={styles.input_last_name}
        type="text"
        placeholder="LastName"
        value={lastName}
        onChange={onChange}
      />
    </div>
  )
}

export default InputLastName