import styles from "./LoginForm.module.scss";
import BtnLogin from "@components/Buttons/BtnLogin";
import BtnRegistraishen from "@components/Buttons/BtnRegistraishen";
import InputEmail from "@components/Inputs/InputEmail";
import InputPassword from "@components/Inputs/InputPassword";


type LoginFormProps = {
  email: string;
  setUserEmail: (value: string) => void;
  password: string;
  setUserPassword: (value: string) => void;
  loginAction: () => void;
  registerAction: () => void;
};

export const LoginForm: React.FC<LoginFormProps> = ({
  email,
  setUserEmail,
  password,
  setUserPassword,
  loginAction,
  registerAction,
}) => {
  return (
    <div className={styles.form_container}>
      <div className={styles.form_title}>
        <InputEmail
          email={email}
          onChange={(e) => setUserEmail(e.target.value)}
        />
        <InputPassword
          password={password}
          onChange={(e) => setUserPassword(e.target.value)}
        />
      </div>
      <div className={styles.form_buttons}>
        <BtnLogin onClick={loginAction} />
        <BtnRegistraishen onClick={registerAction} />
      </div>
    </div>
  );
};