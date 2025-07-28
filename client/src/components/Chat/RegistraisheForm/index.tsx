import styles from "./RegistraisheForm.module.scss";
import BtnLogin from "@components/Buttons/BtnLogin";
import BtnRegistraishen from "@components/Buttons/BtnRegistraishen";
import InputEmail from "@components/Inputs/InputEmail";
import InputPassword from "@components/Inputs/InputPassword";
import InputFirstName from "@components/Inputs/InputFirstName";
import InputLastName from "@components/Inputs/InputLastName";


type RegistraisheFormProps = {
  email: string;
  setUserEmail: (value: string) => void;
  password: string;
  setUserPassword: (value: string) => void;
  firstName: string;
  setFirstName: (value: string) => void;
  lastName: string;
  setLastName: (value: string) => void;
  loginAction: () => void;
  registerAction: () => void;
  onSwitchToLogin: () => void;
};

export const RegistraisheForm: React.FC<RegistraisheFormProps> = ({
  email,
  setUserEmail,
  password,
  setUserPassword,
  firstName,
  setFirstName,
  lastName,
  setLastName,
  loginAction,
  registerAction,
  onSwitchToLogin,
}) => {
  return (
    <div className={styles.form_container}>
      <div className={styles.form_title}>
        <InputFirstName
          firstName={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <InputLastName
          lastName={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
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
        <BtnLogin onClick={onSwitchToLogin} />
        <BtnRegistraishen onClick={registerAction} />
      </div>
    </div>
  );
};