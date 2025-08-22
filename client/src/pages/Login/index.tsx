import { useState } from "react";
import InputEmail from "@components/Inputs/InputEmail";
import InputPassword from "@components/Inputs/InputPassword";
import BtnLogin from "@components/Buttons/BtnLogin";
import InputFirstName from "@components/Inputs/InputFirstName";
import InputLastName from "@components/Inputs/InputLastName";
import styles from "./Login.module.scss";
import useAuth from "@hooks/useAuth";
import BtnRegistraishen from "@components/Buttons/BtnRegistraishen";

const Login: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  const {
    auth,
    setAuth,
    email,
    setUserEmail,
    password,
    setUserPassword,
    loginAction,
    registerAction,
    firstName,
    setFirstName,
    lastName,
    setLastName,
  } = useAuth();

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className={styles.login}>
      {isLogin ? (
        <form
          className={styles.login_form}
          action=""
          method="post"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className={styles.lucide_circle_user_round}
          >
            <path d="M18 20a6 6 0 0 0-12 0" />
            <circle cx="12" cy="10" r="4" />
            <circle cx="12" cy="12" r="10" />
          </svg>
          
          <h2 className={styles.form_title}>Вход в аккаунт</h2>
          
          <div className={styles.form_group}>
            <InputEmail
              email={email}
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </div>
          
          <div className={styles.form_group}>
            <InputPassword
              password={password}
              onChange={(e) => setUserPassword(e.target.value)}
            />
          </div>
          
          <div className={styles.form_options}>
            <label className={styles.remember_me}>
              <input type="checkbox" /> Запомнить меня
            </label>
            <a href="#" className={styles.forgot_password}>Забыли пароль?</a>
          </div>
          
          <div className={styles.form_actions}>
            <BtnLogin onClick={() => loginAction()} />
          </div>
          
          <div className={styles.form_footer}>
            <p className={styles.register_prompt}>
              Нет аккаунта? <a href="#" onClick={toggleForm} className={styles.register_link}>Создать аккаунт</a>
            </p>
          </div>
        </form>
      ) : (
        <form
          className={styles.login_form}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className={styles.lucide_circle_user_round}
          >
            <path d="M18 20a6 6 0 0 0-12 0" />
            <circle cx="12" cy="10" r="4" />
            <circle cx="12" cy="12" r="10" />
          </svg>
          
          <h2 className={styles.form_title}>Регистрация</h2>
          <div className={styles.form_group}>
            <InputFirstName
              firstName={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          
          <div className={styles.form_group}>
            <InputLastName
              lastName={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          
          <div className={styles.form_group}>
            <InputEmail
              email={email}
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </div>
          
          <div className={styles.form_group}>
            <InputPassword
              password={password}
              onChange={(e) => setUserPassword(e.target.value)}
            />
          </div>
          
          <div className={styles.form_options}>
            <label className={styles.remember_me}>
              <input type="checkbox" /> Запомнить меня
            </label>
          </div>
          
          <div className={styles.form_actions}>
            <BtnRegistraishen onClick={() => registerAction()} />
          </div>
          
          <div className={styles.form_footer}>
            <p className={styles.login_prompt}>
              Уже есть аккаунт? <a href="#" onClick={toggleForm} className={styles.login_link}>Войти в аккаунт</a>
            </p>
          </div>
        </form>
      )}
    </div>
  );
};

export default Login;