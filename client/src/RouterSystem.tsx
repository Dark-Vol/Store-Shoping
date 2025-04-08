// import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "@components/Header";
import Main from "@pages/Home"
import ErrorPage from "@pages/Error"
import Footer from "@components/Footer";
import Products from "@pages/Products";
import Login from "@pages/Login";
import Admin from "@pages/Admin";
// import Preloader from "./pages/Preloader";

const RouterSystem: React.FC = () => {
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
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<ErrorPage />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Footer />
    </>
  );
}

export default RouterSystem
