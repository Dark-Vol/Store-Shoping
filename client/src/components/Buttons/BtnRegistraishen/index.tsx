import styles from './BtnRegistraishen.module.scss'

type BtnRegistraishenProps = {
  onClick: () => void;
};

const BtnRegistraishen: React.FC<BtnRegistraishenProps> = ({ onClick }) => {
  return (
    <button className={styles.btn_registraishen} onClick={onClick}>
      <span className={styles.btn_registraishen_text}>Registraishen </span>
    </button>
  )
}

export default BtnRegistraishen
