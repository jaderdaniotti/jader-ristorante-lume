
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home'
import Menu from './pages/menu'
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
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
