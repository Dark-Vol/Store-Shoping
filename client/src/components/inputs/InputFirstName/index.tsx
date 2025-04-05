import styles from "./InputFirstName.module.scss";
import { UserRound } from 'lucide-react';


const InputFirstName: React.FC = () => {
    return (
      <div className={styles.box}>
          <UserRound className={styles.icon} />
            <input
              className={styles.input_first_name}
              type="text"
              placeholder="FirstName"
            />
        </div>
    )
}

export default InputFirstName