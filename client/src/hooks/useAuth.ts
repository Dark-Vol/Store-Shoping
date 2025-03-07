import { useEffect, useState, useCallback } from "react";
import axios from "axios";

const useAuth = () => {
    const [auth, setAuth] = useState(false);
    const [user, setUser] = useState({ email: "", password: "" });

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            axios.post("http://localhost:4000/api/account/relogin", null, { headers: { Authorization: `Bearer ${token}` } })
                .then(res => {
                    localStorage.setItem("token", res.data.token);
                    setAuth(true);
                })
                .catch(() => localStorage.removeItem("token"));
        }
    }, []);

    const register = useCallback(() => {
        axios.post("http://localhost:4000/api/account/register", user)
            .then(res => {
                localStorage.setItem("token", res.data.token);
                setAuth(true);
                setUser({ email: "", password: "" });
            })
            .catch(err => console.error("Registration failed:", err.response?.data));
    }, [user]);

    const login = useCallback(() => {
        axios.post("http://localhost:4000/api/account/login", user)
            .then(res => {
                localStorage.setItem("token", res.data.token);
                setAuth(true);
                setUser({ email: "", password: "" });
            })
            .catch(err => console.error("Login failed:", err.response?.data));
    }, [user]);

    return { auth, user, setUser, login, register };
};

export default useAuth;
