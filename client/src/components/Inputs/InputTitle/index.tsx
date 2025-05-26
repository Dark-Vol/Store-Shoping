import styles from "./InputTitle.module.scss";

type InputTitleProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputTitle: React.FC<InputTitleProps> = ({ value, onChange }) => {
  return (
    <div className={styles.box}>
      <input
        type="text"
        className={styles.input_title}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default InputTitle