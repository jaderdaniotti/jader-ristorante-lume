import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaPhone } from "react-icons/fa";
import { infoBar } from "../data/menuAlNazionale";
import { immagini } from "../images";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [visibleSection, setVisibleSection] = useState(null); // 'mangia-bevi' | 'contatti' | null (home)
  const location = useLocation();

  // Rileva lo scroll con throttle (evita re-render a ogni frame e scroll a scatti)
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 50);
        ticking = false;
      });
    };
    handleScroll(); // stato iniziale
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Su home (/), evidenzia la voce in base alla sezione in viewport
  useEffect(() => {
    if (location.pathname !== "/") {
      setVisibleSection(null);
      return;
    }
    const ids = ["mangia-bevi", "contatti"];
    const observers = [];
    const inView = { "mangia-bevi": false, contatti: false };

    const updateActive = () => {
      if (inView["mangia-bevi"]) setVisibleSection("mangia-bevi");
      else if (inView.contatti) setVisibleSection("contatti");
      else setVisibleSection(null);
    };

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            inView[id] = entry.isIntersecting;
          });
          updateActive();
        },
        { rootMargin: "0px", threshold: 0.15 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [location.pathname]);

  // Chiudi menu mobile quando cambi pagina
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,padding] duration-300 ${
        isScrolled 
          ? "bg-scuro shadow-lg py-4 border-b border-zinc-800" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          <div className="flex justify-center items-center gap-2">
        <img src={immagini.logo} alt="Logo" className="size-18" fetchPriority="high" />
          <Link 
            to="/"
            className="flex flex-col cursor-pointer group"
          >
            
            <span className={`text-2xl font-light tracking-wider transition-colors ${
              isScrolled ? "text-white" : "text-white"
            }`}>
              {infoBar.nomeCorto}
            </span>
            <span className={`text-xs tracking-widest transition-colors ${
              isScrolled ? "text-zinc-400" : "text-zinc-500"
            }`}>
              {infoBar.citta.toUpperCase()}
            </span>
          </Link>
          </div>

          {/* Menu Desktop */}
          <div className="hidden lg:flex items-center gap-8">
            <Link 
              to="/"
              onClick={(e) => {
                if (location.pathname === "/") {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              className={`font-light text-sm tracking-wider transition-colors hover:text-white ${
                location.pathname === "/" && visibleSection === null ? "text-white border-b-2 border-oro" : "text-zinc-400"
              }`}
            >
              HOME
            </Link>
            <a 
              href="/#mangia-bevi"
              className={`font-light text-sm tracking-wider transition-colors hover:text-white ${
                location.pathname === "/" && visibleSection === "mangia-bevi" ? "text-white border-b-2 border-oro" : "text-zinc-400"
              }`}
            >
              MENU
            </a>
            <Link 
              to="/menu"
              onClick={(e) => {
                if (location.pathname === "/menu") {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              className={`font-light text-sm tracking-wider transition-colors hover:text-white ${
                location.pathname === "/menu" ? "text-white border-b-2 border-oro" : "text-zinc-400"
              }`}
            >
              MENU ONLINE
            </Link>
            <a 
              href="/#contatti"
              className={`font-light text-sm tracking-wider transition-colors hover:text-white ${
                location.pathname === "/" && visibleSection === "contatti" ? "text-white border-b-2 border-oro" : "text-zinc-400"
              }`}
            >
              CONTATTI
            </a>
            <a 
              href={`tel:${infoBar.telefono.replace(/\s/g, "")}`}
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
          <div className="lg:hidden mt-4 py-4 bg-scuro ">
            <div className="flex flex-col space-y-1 px-4">
              <Link 
                to="/"
                onClick={(e) => {
                  if (location.pathname === "/") {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                  setIsMobileMenuOpen(false);
                }}
                className={`py-3 px-4 font-light text-sm tracking-wider rounded-sm transition-colors ${
                  location.pathname === "/" && visibleSection === null ? "text-oro" : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
                }`}
              >
                HOME
              </Link>
              <a 
                href="/#mangia-bevi"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`py-3 px-4 font-light text-sm tracking-wider rounded-sm transition-colors ${
                  location.pathname === "/" && visibleSection === "mangia-bevi" ? "text-oro" : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
                }`}
              >
                MENU
              </a>
              <Link 
                to="/menu"
                onClick={(e) => {
                  if (location.pathname === "/menu") {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                  setIsMobileMenuOpen(false);
                }}
                className={`py-3 px-4 font-light text-sm tracking-wider rounded-sm transition-colors ${
                  location.pathname === "/menu" ? "text-oro" : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
                }`}
              >
                MENU ONLINE
              </Link>
              <a 
                href="/#contatti"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`py-3 px-4 font-light text-sm tracking-wider rounded-sm transition-colors ${
                  location.pathname === "/" && visibleSection === "contatti" ? "text-oro" : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
                }`}
              >
                CONTATTI
              </a>
              <a 
                href={`tel:${infoBar.telefono.replace(/\s/g, "")}`}
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
