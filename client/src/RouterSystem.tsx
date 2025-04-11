// import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Main from "@pages/Home"
import ErrorPage from "@pages/Error"
import Products from "@pages/Products";
import Login from "@pages/Login";
import Admin from "@pages/Admin";
import LayOut from "@components/LayOut";
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
      <Routes>
        <Route path="/" element={<LayOut/>}>
          <Route index element={<Main />} />
          <Route path="products" element={<Products />} />
          <Route path="login" element={<Login />} />
          <Route path="admin" element={<Admin />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default RouterSystem
