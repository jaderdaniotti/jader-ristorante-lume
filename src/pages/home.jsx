import React from "react";
import { Link } from "react-router-dom";
import { immagini } from "../images";
import { 
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaInstagram,
  FaFacebook
} from "react-icons/fa";

const Home = () => {
  return (
    <div className="bg-zinc-950 text-white">
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${immagini.piatto1})`,
            opacity: 0.3
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-950/90 to-zinc-950"></div>
        </div>
        
        <div className="container mx-auto px-6 lg:px-12 py-32 relative z-10">
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up" data-aos-duration="1000">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-light tracking-wider mb-6">
              LUME
            </h1>
            <div className="h-px w-24 bg-white mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-zinc-300 font-light tracking-wide mb-12 leading-relaxed">
              Cucina raffinata nel cuore di Milano
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="#contatti"
                className="px-8 py-4 border border-white text-white font-light text-sm tracking-wider hover:bg-white hover:text-zinc-950 transition-all duration-300"
              >
                PRENOTA UN TAVOLO
              </a>
              <Link 
                to="/menu"
                className="px-8 py-4 bg-white text-zinc-950 font-light text-sm tracking-wider hover:bg-zinc-100 transition-all duration-300"
              >
                SCOPRI IL MENU
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2" data-aos="fade-up" data-aos-delay="500">
          <div className="w-px h-12 bg-zinc-600 mx-auto"></div>
          <div className="w-1 h-1 bg-white mt-2 mx-auto animate-pulse"></div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 lg:py-32 bg-zinc-950">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              
              {/* Testo */}
              <div data-aos="fade-right" data-aos-duration="800">
                <h2 className="text-4xl md:text-5xl font-light tracking-wider mb-8">
                  La Nostra Storia
                </h2>
                <div className="h-px w-16 bg-white mb-8"></div>
                <div className="space-y-6 text-zinc-300 font-light leading-relaxed text-lg">
                  <p>
                    LUME nasce dalla passione per la cucina italiana di qualità, 
                    reinterpretata con creatività e rispetto per la tradizione. 
                    Nel cuore di Milano, offriamo un'esperienza gastronomica unica 
                    che unisce sapori autentici e presentazione raffinata.
                  </p>
                  <p>
                    Il nostro chef, con anni di esperienza nelle migliori cucine 
                    d'Italia, seleziona personalmente ogni ingrediente, privilegiando 
                    produttori locali e materie prime di eccellenza. Ogni piatto 
                    racconta una storia, ogni ingrediente è scelto con cura.
                  </p>
                  <p>
                    L'ambiente minimal e moderno di LUME è pensato per far risaltare 
                    l'essenza della cucina: semplicità, qualità e attenzione ai dettagli.
                  </p>
                </div>
              </div>

              {/* Immagine */}
              <div className="relative" data-aos="fade-left" data-aos-duration="800">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={immagini.piatto2} 
                    alt="Cucina LUME" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-zinc-700"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Preview Section */}
      <section id="menu-preview" className="py-24 lg:py-32 bg-zinc-900">
        <div className="container mx-auto px-6 lg:px-12">
          
          <div className="text-center mb-16" data-aos="fade-up" data-aos-duration="800">
            <h2 className="text-4xl md:text-5xl font-light tracking-wider mb-6">
              I Nostri Piatti
            </h2>
            <div className="h-px w-16 bg-white mx-auto mb-8"></div>
            <p className="text-xl text-zinc-400 font-light max-w-2xl mx-auto">
              Una selezione delle nostre specialità
            </p>
          </div>

          {/* Grid Piatti */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              { img: immagini.piatto1, name: "Specialità del Giorno", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
              { img: immagini.piatto2, name: "Piatto del Chef", desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
              { img: immagini.piatto3, name: "Chef's Choice", desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
              { img: immagini.piatto4, name: "Specialità della Casa", desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
              { img: immagini.piatto5, name: "Piatto Tradizionale", desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium." },
              { img: immagini.piatto6, name: "Creazione del Giorno", desc: "Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt." }
            ].map((piatto, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden bg-zinc-800"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                data-aos-duration="600"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={piatto.img} 
                    alt={piatto.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-light tracking-wide mb-2">{piatto.name}</h3>
                  <p className="text-sm text-zinc-400 font-light">{piatto.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16" data-aos="fade-up" data-aos-duration="800">
            <Link 
              to="/menu"
              className="inline-block px-8 py-4 border border-white text-white font-light text-sm tracking-wider hover:bg-white hover:text-zinc-950 transition-all duration-300"
            >
              VEDI MENU COMPLETO
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery/Ambienti Section */}
      <section className="py-24 lg:py-32 bg-zinc-950">
        <div className="container mx-auto px-6 lg:px-12">
          
          <div className="text-center mb-16" data-aos="fade-up" data-aos-duration="800">
            <h2 className="text-4xl md:text-5xl font-light tracking-wider mb-6">
              Gli Ambienti
            </h2>
            <div className="h-px w-16 bg-white mx-auto mb-8"></div>
            <p className="text-xl text-zinc-400 font-light max-w-2xl mx-auto">
              Spazi eleganti e minimal per ogni occasione
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="space-y-8">
              <div 
                className="relative aspect-[4/3] overflow-hidden bg-zinc-800"
                data-aos="fade-right"
                data-aos-duration="800"
              >
                <img 
                  src={immagini.piatto3} 
                  alt="Sala principale" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-zinc-950/20"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-light tracking-wide mb-2">Sala Principale</h3>
                  <p className="text-zinc-300 font-light">Ambiente elegante e raffinato</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div 
                className="relative aspect-[4/3] overflow-hidden bg-zinc-800"
                data-aos="fade-left"
                data-aos-duration="800"
              >
                <img 
                  src={immagini.piatto4} 
                  alt="Sala privata" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-zinc-950/20"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-light tracking-wide mb-2">Sala Privata</h3>
                  <p className="text-zinc-300 font-light">Per eventi e cene speciali</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contatti" className="py-24 lg:py-32 bg-zinc-900">
        <div className="container mx-auto px-6 lg:px-12">
          
          <div className="text-center mb-16" data-aos="fade-up" data-aos-duration="800">
            <h2 className="text-4xl md:text-5xl font-light tracking-wider mb-6">
              Contatti
            </h2>
            <div className="h-px w-16 bg-white mx-auto mb-8"></div>
            <p className="text-xl text-zinc-400 font-light max-w-2xl mx-auto">
              Prenota il tuo tavolo o contattaci per informazioni
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            
            {/* Info Contatti */}
            <div className="space-y-8" data-aos="fade-right" data-aos-duration="800">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 border border-zinc-700 flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="text-zinc-400 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-light text-lg tracking-wide mb-2">Indirizzo</h4>
                    <p className="text-zinc-400 font-light">
                      Via Brera, 12<br />
                      20121 Milano (MI)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 border border-zinc-700 flex items-center justify-center flex-shrink-0">
                    <FaPhone className="text-zinc-400 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-light text-lg tracking-wide mb-2">Telefono</h4>
                    <a href="tel:+390212345678" className="text-zinc-300 hover:text-white font-light transition-colors">
                      +39 02 1234 5678
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 border border-zinc-700 flex items-center justify-center flex-shrink-0">
                    <FaEnvelope className="text-zinc-400 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-light text-lg tracking-wide mb-2">Email</h4>
                    <a href="mailto:info@lume-milano.it" className="text-zinc-300 hover:text-white font-light transition-colors">
                      info@lume-milano.it
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 border border-zinc-700 flex items-center justify-center flex-shrink-0">
                    <FaClock className="text-zinc-400 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-light text-lg tracking-wide mb-2">Orari</h4>
                    <p className="text-zinc-400 font-light">
                      Martedì - Domenica: 19:00 - 23:30<br />
                      Lunedì: Chiuso
                    </p>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="pt-8 border-t border-zinc-800">
                <h4 className="font-light text-lg tracking-wide mb-4">Seguici</h4>
                <div className="flex gap-4">
                  <a 
                    href="https://instagram.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 border border-zinc-700 flex items-center justify-center hover:bg-white hover:text-zinc-950 transition-all duration-300"
                    aria-label="Instagram"
                  >
                    <FaInstagram />
                  </a>
                  <a 
                    href="https://facebook.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 border border-zinc-700 flex items-center justify-center hover:bg-white hover:text-zinc-950 transition-all duration-300"
                    aria-label="Facebook"
                  >
                    <FaFacebook />
                  </a>
                </div>
              </div>
            </div>

            {/* Form Prenotazione */}
            <div className="bg-zinc-800 p-8 border border-zinc-700" data-aos="fade-left" data-aos-duration="800">
              <h3 className="text-2xl font-light tracking-wide mb-6">Prenota un Tavolo</h3>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-light text-zinc-300 mb-2 tracking-wide">
                    Nome e Cognome *
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 text-white placeholder-zinc-500 focus:border-white focus:outline-none transition-colors font-light"
                    placeholder="Mario Rossi"
                  />
                </div>

                <div>
                  <label className="block text-sm font-light text-zinc-300 mb-2 tracking-wide">
                    Email *
                  </label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 text-white placeholder-zinc-500 focus:border-white focus:outline-none transition-colors font-light"
                    placeholder="mario.rossi@email.com"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-light text-zinc-300 mb-2 tracking-wide">
                      Data *
                    </label>
                    <input 
                      type="date" 
                      className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 text-white focus:border-white focus:outline-none transition-colors font-light"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-light text-zinc-300 mb-2 tracking-wide">
                      Ora *
                    </label>
                    <input 
                      type="time" 
                      className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 text-white focus:border-white focus:outline-none transition-colors font-light"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-light text-zinc-300 mb-2 tracking-wide">
                    Numero Persone *
                  </label>
                  <input 
                    type="number" 
                    min="1"
                    className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 text-white placeholder-zinc-500 focus:border-white focus:outline-none transition-colors font-light"
                    placeholder="2"
                  />
                </div>

                <div>
                  <label className="block text-sm font-light text-zinc-300 mb-2 tracking-wide">
                    Note
                  </label>
                  <textarea 
                    rows="3"
                    className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 text-white placeholder-zinc-500 focus:border-white focus:outline-none transition-colors resize-none font-light"
                    placeholder="Allergie, richieste speciali..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-white text-zinc-950 py-4 font-light text-sm tracking-wider hover:bg-zinc-100 transition-all duration-300"
                >
                  INVIA PRENOTAZIONE
                </button>

                <p className="text-xs text-zinc-500 text-center font-light">
                  Ti confermeremo la prenotazione via email entro 24 ore
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
