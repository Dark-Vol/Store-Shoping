import { useEffect, useState, useCallback } from "react";
import axios from "axios";

const useAuth = () => {
  const [auth, setAuth] = useState(false);
  const [password, setUserPassword] = useState("");
  const [email, setUserEmail] = useState("");

  const [firstName, setFirstName] = useState<string>("")
  const [lastName, setLastName] = useState<string>("")

  const loginAction = useCallback(() => {
    axios
      .post("http://localhost:4000/api/account/login", { email, password })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        setAuth(true);
        setUserEmail("");
        setUserPassword("");
      })
      .catch((err) => {
        console.error("Login failed:", err.response?.data);
      });
  }, [email, password]);

  const registerAction = useCallback(() => {
    axios
      .post("http://localhost:4000/api/account/register", {
        email,
        password,
        firstName,
        lastName,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        setFirstName(res.data.firstName);
        setLastName(res.data.lastName);
        setAuth(true);
        setUserEmail("");
        setUserPassword("");
      })
      .catch((err) => {
        console.error("Registration failed:", err.response?.data);
      });
  }, [email, password, firstName, lastName]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .post("http://localhost:4000/api/account/relogin", null, {
          headers: {
            Authorization: `Bearer ${token}`
          },
        })
        .then((res) => {
          localStorage.setItem("token", res.data.token);
          setAuth(true);
        })
        .catch(() => {
          localStorage.removeItem("token");
        });
    }
  }, []);

  return {
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
  };
};

export default useAuth;
