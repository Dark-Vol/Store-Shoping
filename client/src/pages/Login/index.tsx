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
  } = useAuth()

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
          <InputEmail
            email={email}
            onChange={(e) => setUserEmail(e.target.value)}
          />
          <InputPassword
            password={password}
            onChange={(e) => setUserPassword(e.target.value)}
          />
          <div className="styles.options_02}">
            <p>Already Registered?
              <BtnLogin onClick={(e) => { e.preventDefault(); loginAction() }} />
              <a href="#">Forgot your password?</a>
            </p>
          </div>
          <div className={styles.options_02}>
            <p>Not Registered? <a href="#" onClick={toggleForm}>Create an Account</a></p>
          </div>
        </form>
      ) : (
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
          <div className="styles.options_01}">
            <label className={styles.remember_me}>
              <input type="checkbox" /> Remember me
            </label>
          </div>
          <BtnRegistraishen onClick={(e) => { e.preventDefault(); registerAction() }} />
          <div className={styles.options_02}>
            <p>There is an Account?
              <a href="" onClick={toggleForm}> Login an Account</a>
            </p>
          </div>
        </form>
      )}
    </div>
  )
}

export default Login