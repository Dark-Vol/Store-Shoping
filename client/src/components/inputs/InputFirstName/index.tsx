import { useState } from "react";
import styles from "./InputFirstName.module.scss";

interface InputFirstNameProps {
    onChange?: (value: string) => void;
}

const InputFirstName: React.FC<InputFirstNameProps> = ({onChange}) => {
    const [text, setText] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
        if (onChange) {
            onChange(e.target.value);
        }
    };
    return (
        <div className={styles.box}>
            <input
              id="FirstName"
              className={styles.input_first_name}
              type="text"
              placeholder="FirstName"
              value={text}
              onChange={handleChange}
            />
            <label 
              htmlFor="FirstName"
              className={styles.label_first_name}
            >
                First Name
            </label>
        </div>
    )
}

export default InputFirstName