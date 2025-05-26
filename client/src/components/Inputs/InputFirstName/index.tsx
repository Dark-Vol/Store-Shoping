import styles from "./InputFirstName.module.scss";
import { UserRound } from 'lucide-react';

type InputFirstNameProps = {
  firstName: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputFirstName: React.FC<InputFirstNameProps> = ({ firstName, onChange }) => {
  return (
    <div className={styles.box}>
      <UserRound className={styles.icon} />
      <input
        className={styles.input_first_name}
        type="text"
        value={firstName}
        onChange={onChange}
        placeholder="FirstName"
      />
    </div>
  )
}

export default InputFirstName