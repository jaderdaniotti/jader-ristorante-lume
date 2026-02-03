import React from "react";
import { Link } from "react-router-dom";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaFacebook } from "react-icons/fa";
import { infoBar } from "../data/menuAlNazionale";

const Footer = () => (
  <footer className="bg-zinc-950 text-zinc-400 border-t border-zinc-800">
    <div className="container mx-auto px-6 lg:px-12 py-16">
      <div className="grid md:grid-cols-4 gap-12 mb-12">
        
        {/* Colonna 1 - Logo e Descrizione */}
        <div className="space-y-4">
          <div>
            <h3 className="text-2xl font-light tracking-wider text-white mb-2">{infoBar.nomeCorto}</h3>
            <p className="text-xs tracking-widest text-zinc-500 mb-4">BAR · {infoBar.citta.toUpperCase()}</p>
          </div>
          <p className="text-sm font-light leading-relaxed">
            Brioches, aperitivi, piatti caldi e taglieri nel centro storico di Gemona.
            Mangia, bevi e divertiti al Nazionale.
          </p>
        </div>

        {/* Colonna 2 - Link Utili */}
        <div className="space-y-4">
          <h3 className="text-white font-light tracking-wide mb-4">NAVIGAZIONE</h3>
          <nav className="flex flex-col space-y-3">
            <Link to="/" className="hover:text-white transition-colors text-sm font-light">
              Home
            </Link>
            <a href="/#mangia-bevi" className="hover:text-white transition-colors text-sm font-light">
              Menu
            </a>
            <Link to="/menu" className="hover:text-white transition-colors text-sm font-light">
              Menu Online
            </Link>
            <a href="/#contatti" className="hover:text-white transition-colors text-sm font-light">
              Contatti
            </a>
          </nav>
        </div>

        {/* Colonna 3 - Contatti */}
        <div className="space-y-4">
          <h3 className="text-white font-light tracking-wide mb-4">CONTATTI</h3>
          <div className="space-y-3 text-sm font-light">
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-zinc-500 mt-1 flex-shrink-0" />
              <div>
                <p>{infoBar.indirizzo}</p>
                <p>{infoBar.citta} {infoBar.cap}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <FaPhone className="text-zinc-500 flex-shrink-0" />
              <a href={`tel:${infoBar.telefono.replace(/\s/g, "")}`} className="hover:text-white transition-colors">
                {infoBar.telefono}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-zinc-500 flex-shrink-0" />
              <a href={`mailto:${infoBar.email}`} className="hover:text-white transition-colors">
                {infoBar.email}
              </a>
            </div>
          </div>
        </div>

        {/* Colonna 4 - Social e Orari */}
        <div className="space-y-4">
          <h3 className="text-white font-light tracking-wide mb-4">SEGUICI</h3>
          <div className="flex gap-3 mb-6">
            <a 
              href={infoBar.social.instagram} 
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border border-zinc-700 flex items-center justify-center hover:bg-white hover:text-zinc-950 transition-all duration-300"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a 
              href={infoBar.social.facebook} 
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border border-zinc-700 flex items-center justify-center hover:bg-white hover:text-zinc-950 transition-all duration-300"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
          </div>
          <div className="text-sm font-light">
            <p className="text-white mb-2">Orari</p>
            <p>{infoBar.orari}</p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-zinc-800 pt-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-light">
          <p>
            &copy; {new Date().getFullYear()} {infoBar.nome}. Tutti i diritti riservati.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
