import { useState } from "react";
import styles from "./InputDiscription.module.scss";

interface InputDiscriptionProps {
    onChange?: (value: string) => void;
}

const InputDiscription: React.FC<InputDiscriptionProps> = ({ onChange }) => {
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
                id="discription"
                className={styles.input_discription}
                type="text"
                placeholder="Description"
                value={text}
                onChange={handleChange}
            />
            <label 
                htmlFor="discription"
                className={styles.label_discription}
            >
                Description
            </label>
        </div>
    );
};

export default InputDiscription;
