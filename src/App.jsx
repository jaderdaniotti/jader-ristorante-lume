import './App.css'
import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from './pages/home'
import Menu from './pages/menu'
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
}

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
