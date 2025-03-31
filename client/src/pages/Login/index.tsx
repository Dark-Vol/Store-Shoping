import { useState } from "react";
import InputEmail from "../../components/Inputs/InputEmail";
import InputPassword from "../../components/Inputs/InputPassword";
import BtnLogin from "../../components/Buttons/BtnLogin";
import InputFirstName from "../../components/Inputs/InputFirstName";
import InputLastName from "../../components/Inputs/InputLastName";
import InputPasswordConfirm from "../../components/Inputs/InputPasswordConfirm";
import styles from "./Login.module.scss";

const Login: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

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
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-circle-user-round"
          >
            <path d="M18 20a6 6 0 0 0-12 0" />
            <circle cx="12" cy="10" r="4" />
            <circle cx="12" cy="12" r="10" />
          </svg>
          <InputEmail />
          <InputPassword />
          <div className="styles.options_02}">
            <p>Already Registered?
              <a href="#" onClick={toggleForm}>
                <BtnLogin />
              </a>
            </p>
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
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-circle-user-round"
          >
            <path d="M18 20a6 6 0 0 0-12 0" />
            <circle cx="12" cy="10" r="4" />
            <circle cx="12" cy="12" r="10" />
          </svg>
          <InputFirstName />
          <InputLastName />
          <InputPassword />
          <InputPasswordConfirm />
          <div className="styles.options_01}">
              <label className={styles.remember_me}>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#">Forgot your password?</a>
          </div>
          <BtnLogin />
          <div className={styles.options_02}>
            <p>Not Registered? <a href="#" onClick={toggleForm}>Create an Account</a></p>
          </div>
        </form>
      )}
    </div>
  )
}

export default Login