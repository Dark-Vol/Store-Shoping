import { useState } from "react";
import styles from "./InputPassword.module.scss";

interface InputPasswordProps {
    onChange?: (value: string) => void;
}

const InputPassword: React.FC<InputPasswordProps> = ({onChange}) => {
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
                id="password"
                className={styles.input_password}
                type="text"
                placeholder="Password"
                value={text}
                onChange={handleChange}
            />
            <label 
                htmlFor="password"
                className={styles.label_password}
            >
                Password
            </label>
        </div>
    )
}

export default InputPassword