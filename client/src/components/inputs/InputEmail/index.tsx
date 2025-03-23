import { useState } from "react";
import styles from "./InputEmail.module.scss";

interface InputEmailProps {
    onChange?: (value: string) => void;
}

const InputEmail: React.FC<InputEmailProps> = ({onChange}) => {
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
            id="email"
                className={styles.input_email}
                type="text"
                placeholder="Email"
                value={text}
                onChange={handleChange}
            />
            <label 
                htmlFor="email"
                className={styles.label_email}
            >
                Email
            </label>
        </div>
    )
}

export default InputEmail