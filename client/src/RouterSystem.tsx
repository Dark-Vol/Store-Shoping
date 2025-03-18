import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./pages/Home"
import ErrorPage from "./pages/Error"
import Footer from "./components/Footer";


const App: React.FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App
