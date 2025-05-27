import styles from './BtnLogin.module.scss'

type BtnLoginProps = {
  onClick: () => void;
};

const BtnLogin: React.FC<BtnLoginProps> = ({ onClick }) => {
  return (
    <button className={styles.btn_login} onClick={onClick}>
      <span className={styles.btn_login_text}>SING IN </span>
    </button>
  )
}

export default BtnLogin
