import styles from "./LoginForm.module.scss";
import BtnLogin from "@components/Buttons/BtnLogin";
import BtnRegistraishen from "@components/Buttons/BtnRegistraishen";
import InputEmail from "@components/Inputs/InputEmail";
import InputPassword from "@components/Inputs/InputPassword";
// import InputPasswordConfirm from "@components/Inputs/InputPasswordConfirm";


type LoginFormProps = {
  email: string;
  setUserEmail: (value: string) => void;
  password: string;
  setUserPassword: (value: string) => void;
  // setUserPasswordConfirm: (value: string) => void;
  loginAction: () => void;
  registerAction: () => void;
};

export const LoginForm: React.FC<LoginFormProps> = ({
  email,
  setUserEmail,
  password,
  setUserPassword,
  // setUserPasswordConfirm,
  loginAction,
  registerAction,
}) => {
  return (
    <div className={styles.form_container}>
      <InputEmail
        value={email}
        onChange={(e) => setUserEmail(e.target.value)}
      />
      <InputPassword
        value={password}
        onChange={(e) => setUserPassword(e.target.value)}
      />
      {/* <InputPasswordConfirm
        value={password}
        onChange={(e) => setUserPasswordConfirm(e.target.value)}
      /> */}
      <BtnLogin onClick={loginAction} />
      <BtnRegistraishen onClick={registerAction} />
    </div>
  );
};