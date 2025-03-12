import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import Header from "./components/Header";
import Main from "./pages/Home"
import ErrorPage from "./pages/Error"
import Footer from "./components/Footer";


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback="">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}

export default App
