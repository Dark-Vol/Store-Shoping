import { useState } from "react";
import styles from "./InputLastName.module.scss";

interface InputLastNameProps {
    onChange?: (value: string) => void;
}

const InputLastName: React.FC<InputLastNameProps> = ({onChange}) => {
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
              id="LastName"
              className={styles.input_last_name}
              type="text"
              placeholder="LastName"
              value={text}
              onChange={handleChange}
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