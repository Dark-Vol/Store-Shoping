import { useState } from "react";
import styles from "./InputTitle.module.scss";

interface InputTitleProps {
    onChange?: (value: string) => void;
}

const InputTitle: React.FC<InputTitleProps> = ({onChange}) => {
    const [password, setPassword] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
        if (onChange) {
            onChange(e.target.value);
        }
    };
    
    return (
        <div className={styles.box}>
        <input
            id="title"
            className={styles.input_title}
            type="password"
            placeholder="Password"
            value={password}
            onChange={handleChange}
        />
        <label 
            htmlFor="title"
            className={styles.label_title}
        >
            title
        </label>
        </div>
    )
}

export default InputTitle