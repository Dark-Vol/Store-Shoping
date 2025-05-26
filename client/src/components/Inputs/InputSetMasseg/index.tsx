import styles from "./InputSetMasseg.module.scss";

type InputSetMassegProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputSetMasseg: React.FC<InputSetMassegProps> = ({ value, onChange }) => {
  return (
    <div className={styles.box}>
      <input
        className={styles.input_set_mwssg}
        type="text"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}


export default InputSetMasseg