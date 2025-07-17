import { Phone } from 'lucide-react';
import styles from "./InputPhoneNumber.module.scss";

type InputPhoneNumberProps = {
  number: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputPhoneNumber: React.FC<InputPhoneNumberProps> = ({ number, onChange }) => {
  return (
    <div className={styles.box}>
      <Phone className={styles.icon}/>
      <input
        className={styles.input_number}
        placeholder="Number"
        value={number}
        onChange={onChange}
      />
    </div>
  )
}

export default InputPhoneNumber