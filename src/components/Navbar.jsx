import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaPhone } from "react-icons/fa";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Rileva lo scroll per cambiare lo stile della navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Chiudi menu mobile quando cambi pagina
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-zinc-950/95 backdrop-blur-md shadow-lg py-4 border-b border-zinc-800" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link 
            to="/"
            className="flex flex-col cursor-pointer group"
          >
            <span className={`text-2xl font-light tracking-wider transition-colors ${
              isScrolled ? "text-white" : "text-white"
            }`}>
              LUME
            </span>
            <span className={`text-xs tracking-widest transition-colors ${
              isScrolled ? "text-zinc-400" : "text-zinc-500"
            }`}>
              RISTORANTE MILANO
            </span>
          </Link>

          {/* Menu Desktop */}
          <div className="hidden lg:flex items-center gap-8">
            <Link 
              to="/"
              className={`font-light text-sm tracking-wider transition-colors hover:text-white ${
                location.pathname === "/" ? "text-white" : "text-zinc-400"
              }`}
            >
              HOME
            </Link>
            <a 
              href="#about"
              className="font-light text-sm tracking-wider text-zinc-400 hover:text-white transition-colors"
            >
              STORIA
            </a>
            <a 
              href="#menu-preview"
              className="font-light text-sm tracking-wider text-zinc-400 hover:text-white transition-colors"
            >
              MENU
            </a>
            <Link 
              to="/menu"
              className={`font-light text-sm tracking-wider transition-colors hover:text-white ${
                location.pathname === "/menu" ? "text-white" : "text-zinc-400"
              }`}
            >
              MENU COMPLETO
            </Link>
            <a 
              href="#contatti"
              className="font-light text-sm tracking-wider text-zinc-400 hover:text-white transition-colors"
            >
              CONTATTI
            </a>
            <a 
              href="#contatti"
              className="px-6 py-2.5 border border-zinc-600 text-white rounded-sm font-light text-sm tracking-wider hover:bg-white hover:text-zinc-950 transition-all duration-300 flex items-center gap-2"
            >
              <FaPhone className="text-xs" />
              PRENOTA
            </a>
          </div>

          {/* Hamburger Menu Mobile */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-sm hover:bg-zinc-800 transition-colors"
            aria-label="Menu"
          >
            <svg 
              className="w-6 h-6 text-white" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Menu Mobile */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 py-4 bg-zinc-950 rounded-sm border border-zinc-800">
            <div className="flex flex-col space-y-1 px-4">
              <Link 
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`py-3 px-4 font-light text-sm tracking-wider rounded-sm transition-colors ${
                  location.pathname === "/" ? "text-white bg-zinc-900" : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
                }`}
              >
                HOME
              </Link>
              <a 
                href="#about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-3 px-4 text-zinc-400 font-light text-sm tracking-wider hover:bg-zinc-900 hover:text-white rounded-sm transition-colors"
              >
                STORIA
              </a>
              <a 
                href="#menu-preview"
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-3 px-4 text-zinc-400 font-light text-sm tracking-wider hover:bg-zinc-900 hover:text-white rounded-sm transition-colors"
              >
                MENU
              </a>
              <Link 
                to="/menu"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`py-3 px-4 font-light text-sm tracking-wider rounded-sm transition-colors ${
                  location.pathname === "/menu" ? "text-white bg-zinc-900" : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
                }`}
              >
                MENU COMPLETO
              </Link>
              <a 
                href="#contatti"
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-3 px-4 text-zinc-400 font-light text-sm tracking-wider hover:bg-zinc-900 hover:text-white rounded-sm transition-colors"
              >
                CONTATTI
              </a>
              <a 
                href="#contatti"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-2 py-3 px-4 border border-zinc-600 text-white font-light text-sm tracking-wider rounded-sm hover:bg-white hover:text-zinc-950 transition-colors text-center flex items-center justify-center gap-2"
              >
                <FaPhone className="text-xs" />
                PRENOTA
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
