import {useEffect, useState, createContext } from 'react';
import { Routes, Route } from "react-router-dom";
import Main from "@pages/Home";
import ErrorPage from "@pages/Error";
import Products from "@pages/Products";
import Login from "@pages/Login";
import Admin from "@pages/Admin";
import LayOut from "@components/LayOut";
import User from "@pages/User";
// import Preloader from "./pages/Preloader";

interface ThemeContextType {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

export const ThemeContext = createContext<ThemeContextType | null>(null);

  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   // Симулируем загрузку данных (можно заменить на реальный API-запрос)
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 5000);
  // }, []);

  // if (loading) {
  //   return <Preloader />; // Показываем прелоадер, пока идет загрузка
  // }

const RouterSystem: React.FC = () => {
  const [theme, setTheme] = useState<string>(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route index element={<Main />} />
          <Route path="products" element={<Products />} />
          <Route path="login" element={<Login />} />
          <Route path="user" element={<User />} />
          <Route path="admin" element={<Admin />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </ThemeContext.Provider>
  );
}

export default RouterSystem


// Создать отдельный компанент для изменения темы