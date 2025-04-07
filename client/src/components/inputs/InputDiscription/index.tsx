import styles from "./InputDiscription.module.scss";

type InputDiscriptionProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputDiscription: React.FC<InputDiscriptionProps> = ({ value, onChange }) => {
  return (
    <div className={styles.box}>
      <input
        className={styles.input_discription}
        type="text"
        placeholder="Description"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputDiscription;
