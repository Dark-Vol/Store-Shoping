import { useState } from "react";
import styles from "./InputPasswordConfirm.module.scss";

interface InputPasswordConfirmProps {
    onChange?: (value: string) => void;
}

const InputPasswordConfirm: React.FC<InputPasswordConfirmProps> =({onChange}) => {
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
                id="passwordConfirm"
                className={styles.input_password_confirm}
                type="text"
                placeholder="PasswordConfirm"
                value={text}
                onChange={handleChange}
            />
            <label 
                htmlFor="passwordConfirm"
                className={styles.label_password_confirm}
            >
                Password Confirm
            </label>
        </div>
    )
}

export default InputPasswordConfirm