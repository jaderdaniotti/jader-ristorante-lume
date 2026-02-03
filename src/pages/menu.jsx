import React from "react";
import { Link } from "react-router-dom";
import { immagini } from "../images";
import { menuAlNazionale, infoBar } from "../data/menuAlNazionale";

const Menu = () => {
  return (
    <div className="bg-zinc-950 text-white min-h-screen pt-24">
      
      {/* Hero Menu */}
      <section className="py-16 lg:py-24 border-b border-zinc-800">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up" data-aos-duration="300">
            <h1 className="text-5xl md:text-6xl font-light tracking-wider mb-6">
              Menu
            </h1>
            <div className="h-px w-16 bg-white mx-auto mb-8" />
            <p className="text-xl text-zinc-400 font-light max-w-2xl mx-auto">
              Consulta il nostro menù online oppure fatti consigliare dal nostro staff!
            </p>
          </div>
        </div>
      </section>

      {/* Menu Sections - da menuAlNazionale */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto space-y-20">
            
            {menuAlNazionale.categorie.map((categoria, catIndex) => (
              <div key={categoria.id} data-aos="fade-up" data-aos-duration="300" data-aos-delay={catIndex * 80}>
                <h2 className="text-3xl md:text-4xl font-light tracking-wider mb-12 text-center border-b border-zinc-700 pb-4">
                  {categoria.titolo}
                </h2>
                
                {categoria.sottocategorie.map((sottocat, subIndex) => (
                  <div key={subIndex} className="mb-16">
                    <h3 className="text-xl md:text-2xl font-light tracking-wide text-zinc-300 mb-8">
                      {sottocat.nome}
                    </h3>
                    <div className="space-y-6">
                      {sottocat.items.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 pb-6 border-b border-zinc-800 last:border-0"
                        >
                          <div className="flex-1">
                            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                              <h4 className="text-lg font-light tracking-wide">{item.name}</h4>
                              <span className="text-zinc-400 font-light whitespace-nowrap">
                                {item.price} €
                              </span>
                            </div>
                            {item.desc && (
                              <p className="text-zinc-500 font-light text-sm leading-relaxed">
                                {item.desc}
                              </p>
                            )}
                            {item.tag && (
                              <span className="inline-block mt-2 text-xs text-zinc-500 font-light">
                                {item.tag}
                              </span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Gallery - Aperitivi e drink */}
      <section className="py-16 lg:py-24 bg-zinc-900">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16" data-aos="fade-up" data-aos-duration="300">
            <h2 className="text-4xl md:text-5xl font-light tracking-wider mb-6">
              Al Nazionale
            </h2>
            <div className="h-px w-16 bg-white mx-auto mb-6" />
            <p className="text-xl text-zinc-400 font-light max-w-2xl mx-auto">
              Aperitivi, birre e cocktail nel centro di {infoBar.citta}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {[
              { img: immagini.piatto1, name: "Food e pasticceria" },
              { img: immagini.piatto3, name: "Aperitivi e cocktail" },
              { img: immagini.piatto4, name: "Bevande" },
              { img: immagini.piatto2, name: "Taglieri e toast" },
              { img: immagini.piatto5, name: "Caffetteria" },
              { img: immagini.piatto6, name: "Atmosfera" },
            ].map((card, index) => (
              <div
                key={index}
                className="relative aspect-[4/3] overflow-hidden bg-zinc-800 group"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                data-aos-duration="300"
              >
                <img
                  src={card.img}
                  alt={card.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-lg font-light tracking-wide">{card.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-zinc-950">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up" data-aos-duration="300">
            <h2 className="text-3xl md:text-4xl font-light tracking-wider mb-6">
              Vieni a trovarci
            </h2>
            <p className="text-xl text-zinc-400 font-light mb-8">
              Contattaci e prenota un tavolo · {infoBar.telefono} · {infoBar.email}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/#contatti"
                className="inline-block px-8 py-4 border border-white text-white font-light text-sm tracking-wider hover:bg-white hover:text-zinc-950 transition-all duration-300"
              >
                PRENOTA UN TAVOLO
              </a>
              <a
                href={`tel:${infoBar.telefono.replace(/\s/g, "")}`}
                className="inline-block px-8 py-4 bg-white text-zinc-950 font-light text-sm tracking-wider hover:bg-zinc-100 transition-all duration-300"
              >
                {infoBar.telefono}
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Menu;
