import { Routes, Route } from "react-router-dom";
import Main from "@pages/Home";
import AboutUs from "@pages/AboutUs";
import ErrorPage from "@pages/Error";
import Products from "@pages/Products";
import ContactPage from "@pages/Contact";
import Login from "@pages/Login";
import Admin from "@pages/Admin";
import LayOut from "@components/LayOut";
import User from "@pages/User";
import Blog from "@pages/Blog";
// import Preloader from "./pages/Preloader";


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

  return (
    <Routes>
      <Route path="/" element={<LayOut />}>
        <Route index element={<Main />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="blog" element={<Blog />} />
        <Route path="products" element={<Products />} />
        <Route path="login" element={<Login />} />
        <Route path="user" element={<User />} />
        <Route path="admin" element={<Admin />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

export default RouterSystem;