import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { immagini } from "../images";
import { infoBar } from "../data/menuAlNazionale";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaInstagram,
  FaFacebook
} from "react-icons/fa";

const Home = () => {
  const location = useLocation();

  // Scroll alla sezione quando si arriva da un’altra pagina con hash (es. /menu → /#mangia-bevi)
  useEffect(() => {
    const hash = location.hash?.slice(1);
    if (!hash) return;
    const el = document.getElementById(hash);
    if (!el) return;
    requestAnimationFrame(() => {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, [location.pathname, location.hash]);

  const blocchi = [
    {
      id: "mangia",
      titolo: "Mangia.",
      sottotitolo: "Brioches, tramezzini, piatti caldi o taglieri",
      desc: "Dalla brioche al tagliere di affettati, toast o piatti caldi o semplici snack. Fermati a mangiare al Nazionale.",
      img: immagini.briocheshome,
    },
    {
      id: "bevi",
      titolo: "Bevi.",
      sottotitolo: "Alcolici e analcolici, per tutti",
      desc: "Un bicchiere di vino, un calice di birra artigianale o un long Island. Vieni a bere al Nazionale.",
      img: immagini.cocktailhome1,
    },
    {
      id: "divertiti",
      titolo: "Divertiti.",
      sottotitolo: "Sentiti a casa",
      desc: "Vieni e rilassati, per un momento di intimità o un aperitivo in compagnia. Vieni a divertirti al Nazionale.",
      img: immagini.cocktailhome2,
    },
  ];

  return (
    <div className="bg-scuro text-white tracking-tight">

      {/* Hero Section */}
      <section className="relative min-h-screen bg-scuro flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          {/* <video src={immagini.background} autoPlay loop muted className="w-full h-full object-cover" /> */}
          <img src={immagini.background} alt="Background" className="w-full h-full object-cover" fetchPriority="high" />
          <div className="absolute inset-0 sfumaturahome" />
        </div>

        <div className="container mx-auto px-6 lg:px-12 py-32 relative z-10">
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up" data-aos-duration="300">
            <p className="text-sm md:text-base text-bianco font-light tracking-widest mb-4">
              a {infoBar.citta}
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-6">
              Benvenuti<br />al Nazionale
            </h1>
            <div className="h-px w-24 bg-white mx-auto mb-8" />
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`tel:${infoBar.telefono.replace(/\s/g, "")}`}
                className="bottonechiaro"
              >
                PRENOTA UN TAVOLO
              </a>
              <Link
                to="/menu"
                className="px-8 py-4 bg-white text-zinc-950 font-light text-sm tracking-wider hover:bg-zinc-100 transition-all duration-300"
              >
                MENU ONLINE
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2" data-aos="fade-up" data-aos-delay="500">
          <div className="w-px h-12 bg-zinc-600 mx-auto" />
          <div className="w-1 h-1 bg-white mt-2 mx-auto animate-pulse" />
        </div>
      </section>

      <hr className="border-oro " />

      {/* Mangia / Bevi / Divertiti */}
      <section id="mangia-bevi" className="py-24 lg:py-32 bg-bianco">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto space-y-24">
            {blocchi.map((blocco, index) => (
              <>
                <div
                  key={blocco.id}
                  id={blocco.id}
                  className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
                  data-aos="fade-up"
                  data-aos-duration="300"
                  data-aos-delay={index * 100}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-nero">
                      {blocco.titolo}
                    </h2>
                    <p className="text-xl text-black font-light  mb-4">
                      {blocco.sottotitolo}
                    </p>
                    <div className="h-px w-16 bg-nero mb-6" />
                    <p className="text-nero font-light leading-relaxed text-lg mb-8">
                      {blocco.desc}
                    </p>
                    <Link
                      to="/menu"
                      className="inline-block px-6 py-3 border border-white text-white font-light text-sm tracking-wider hover:bg-white hover:text-zinc-950 transition-all duration-300"
                    >
                      Menu Online
                    </Link>
                  </div>
                  <div className={`relative ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div className="aspect-4/3 overflow-hidden bg-zinc-800">
                      <img
                        src={blocco.img}
                        alt={blocco.titolo}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-oro" />
                  </div>
                </div>
                <hr className={index % 2 === 1 ? "border-oro" : "hidden"} />
              </>
            ))}
          </div>
        </div>
      </section>
      <hr className="border-oro " />
      {/* Vieni a trovarci / Contatti */}
      <section id="contatti" className="relative py-24 lg:py-32 bg-bianco text-nero overflow-hidden">
        {/* Sfondo a livello sezione così copre tutta la larghezza */}
        <div className="absolute inset-0 z-0">
          <img src={immagini.footer} alt="" className="w-full h-full object-cover" aria-hidden />
          <div className="absolute inset-0 sfumaturahome-bianca" />
        </div>

        <div className="container relative z-10 mx-auto px-6 lg:px-12">

          <div className="text-center mb-16" data-aos="fade-up" data-aos-duration="300">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight  mb-6">
              Vieni a trovarci
            </h2>
            <div className="h-px w-16 bg-nero mx-auto mb-8" />
            <p className="text-xl font-normal max-w-3xl mx-auto leading-relaxed">
              {infoBar.descrizioneContatti}
            </p>
          </div>

          <div className="max-w-3xl mx-auto flex justify-center">
            <div className="space-y-8 text-center w-full" data-aos="fade-up" data-aos-duration="300">
              <div className="grid grid-cols-1 sm:grid-cols-2  gap-8 justify-items-center">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 border border-nero flex items-center justify-center shrink-0">
                    <FaMapMarkerAlt className="text-nero text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg tracking-wide mb-2">Indirizzo</h4>
                    <p className="text-nero font-light">
                      {infoBar.indirizzo}<br />
                      {infoBar.citta} {infoBar.cap} ({infoBar.provincia})
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 border border-zinc-700 flex items-center justify-center shrink-0">
                    <FaPhone className="text-nero text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg tracking-wide mb-2">Telefono</h4>
                    <a href={`tel:${infoBar.telefono.replace(/\s/g, "")}`} className="text-nero hover:text-white font-light transition-colors">
                      {infoBar.telefono}
                    </a>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 border border-zinc-700 flex items-center justify-center shrink-0">
                    <FaEnvelope className="text-nero text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg tracking-wide mb-2">Email</h4>
                    <a href={`mailto:${infoBar.email}`} className="text-nero hover:text-white font-light transition-colors">
                      {infoBar.email}
                    </a>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 border border-zinc-700 flex items-center justify-center shrink-0">
                    <FaClock className="text-nero text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg tracking-wide mb-2">Orari</h4>
                    <p className="text-nero font-light">
                      {infoBar.orari}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-zinc-800 flex flex-col items-center">
                <h4 className="font-light text-lg tracking-wide mb-4">Seguici</h4>
                <div className="flex gap-4 justify-center">
                  <a
                    href={infoBar.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 border border-zinc-700 flex items-center justify-center hover:bg-white hover:text-zinc-950 transition-all duration-300"
                    aria-label="Instagram"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href={infoBar.social.facebook}
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
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
