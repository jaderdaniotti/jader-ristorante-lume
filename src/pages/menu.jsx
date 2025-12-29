import React from "react";
import { immagini } from "../images";

const Menu = () => {
  const menuSections = [
    {
      title: "ANTIPASTI",
      items: [
        { name: "Battuta di Fassona", desc: "Carne cruda di razza Fassona, rucola, grana padano, olio extravergine", price: "€18" },
        { name: "Burrata Pugliese", desc: "Burrata fresca, pomodorini confit, basilico, olio al limone", price: "€16" },
        { name: "Carpaccio di Branzino", desc: "Branzino crudo, arancia, finocchietto, olio d'oliva", price: "€17" },
        { name: "Vitello Tonnato", desc: "Vitello cotto, salsa tonnata, capperi, uova sode", price: "€15" }
      ]
    },
    {
      title: "PRIMI",
      items: [
        { name: "Risotto ai Porcini", desc: "Riso Carnaroli, funghi porcini freschi, parmigiano reggiano, prezzemolo", price: "€22" },
        { name: "Pasta all'Amatriciana", desc: "Bucatini, guanciale croccante, pomodoro San Marzano, pecorino romano", price: "€18" },
        { name: "Tagliatelle al Ragù", desc: "Tagliatelle fresche, ragù di manzo, parmigiano reggiano", price: "€20" },
        { name: "Gnocchi al Gorgonzola", desc: "Gnocchi di patate, gorgonzola DOP, noci, rucola", price: "€19" },
        { name: "Spaghetti alle Vongole", desc: "Spaghetti, vongole veraci, aglio, prezzemolo, vino bianco", price: "€21" }
      ]
    },
    {
      title: "SECONDI",
      items: [
        { name: "Tagliata di Manzo", desc: "Manzo di razza Chianina, rucola, grana padano, aceto balsamico di Modena", price: "€32" },
        { name: "Branzino al Sale", desc: "Branzino fresco, sale grosso, erbe aromatiche, limone, olio extravergine", price: "€28" },
        { name: "Pollo alla Cacciatora", desc: "Pollo ruspante, pomodoro, olive, capperi, vino bianco", price: "€24" },
        { name: "Costata di Vitello", desc: "Costata di vitello, patate al forno, verdure di stagione", price: "€35" },
        { name: "Orata in Crosta di Sale", desc: "Orata fresca, sale grosso, rosmarino, limone", price: "€26" }
      ]
    },
    {
      title: "CONTORNI",
      items: [
        { name: "Verdure Grigliate", desc: "Melanzane, zucchine, peperoni, olio extravergine", price: "€8" },
        { name: "Patate al Forno", desc: "Patate novelle, rosmarino, sale grosso", price: "€7" },
        { name: "Insalata Mista", desc: "Misticanza, pomodorini, carote, olio e aceto", price: "€6" },
        { name: "Spinaci all'Aglio", desc: "Spinaci freschi, aglio, olio extravergine", price: "€7" }
      ]
    },
    {
      title: "DOLCI",
      items: [
        { name: "Tiramisù", desc: "Mascarpone, caffè espresso, savoiardi, cacao amaro", price: "€10" },
        { name: "Panna Cotta ai Frutti di Bosco", desc: "Panna fresca, vaniglia, frutti di bosco, miele", price: "€9" },
        { name: "Cannoli Siciliani", desc: "Cannoli croccanti, ricotta, cioccolato, pistacchi", price: "€11" },
        { name: "Torta al Cioccolato", desc: "Torta fondente, gelato alla vaniglia, frutti di bosco", price: "€10" }
      ]
    }
  ];

  return (
    <div className="bg-zinc-950 text-white min-h-screen pt-24">
      
      {/* Hero Menu */}
      <section className="py-16 lg:py-24 border-b border-zinc-800">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up" data-aos-duration="800">
            <h1 className="text-5xl md:text-6xl font-light tracking-wider mb-6">
              MENU
            </h1>
            <div className="h-px w-16 bg-white mx-auto mb-8"></div>
            <p className="text-xl text-zinc-400 font-light max-w-2xl mx-auto">
              Una selezione di piatti che celebrano la tradizione italiana con un tocco contemporaneo
            </p>
          </div>
        </div>
      </section>

      {/* Menu Sections */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto space-y-20">
            
            {menuSections.map((section, sectionIndex) => (
              <div key={sectionIndex} data-aos="fade-up" data-aos-duration="800" data-aos-delay={sectionIndex * 100}>
                <h2 className="text-3xl md:text-4xl font-light tracking-wider mb-12 text-center">
                  {section.title}
                </h2>
                
                <div className="space-y-8">
                  {section.items.map((item, itemIndex) => (
                    <div 
                      key={itemIndex}
                      className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 pb-8 border-b border-zinc-800 last:border-0"
                    >
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-4 mb-2">
                          <h3 className="text-xl font-light tracking-wide">{item.name}</h3>
                          <span className="text-lg font-light text-zinc-400 whitespace-nowrap">{item.price}</span>
                        </div>
                        <p className="text-zinc-400 font-light text-sm leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Gallery Piatti */}
      <section className="py-16 lg:py-24 bg-zinc-900">
        <div className="container mx-auto px-6 lg:px-12">
          
          <div className="text-center mb-16" data-aos="fade-up" data-aos-duration="800">
            <h2 className="text-4xl md:text-5xl font-light tracking-wider mb-6">
              I Nostri Piatti
            </h2>
            <div className="h-px w-16 bg-white mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {[
              { img: immagini.piatto1, name: "Specialità del Giorno" },
              { img: immagini.piatto2, name: "Piatto del Chef" },
              { img: immagini.piatto3, name: "Chef's Choice" },
              { img: immagini.piatto4, name: "Specialità della Casa" },
              { img: immagini.piatto5, name: "Piatto Tradizionale" },
              { img: immagini.piatto6, name: "Creazione del Giorno" }
            ].map((piatto, index) => (
              <div 
                key={index}
                className="relative aspect-[4/3] overflow-hidden bg-zinc-800 group"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                data-aos-duration="600"
              >
                <img 
                  src={piatto.img} 
                  alt={piatto.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-lg font-light tracking-wide">{piatto.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-zinc-950">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up" data-aos-duration="800">
            <h2 className="text-3xl md:text-4xl font-light tracking-wider mb-6">
              Vieni a Trovarci
            </h2>
            <p className="text-xl text-zinc-400 font-light mb-8">
              Prenota il tuo tavolo e vivi un'esperienza gastronomica indimenticabile
            </p>
            <a 
              href="/#contatti"
              className="inline-block px-8 py-4 border border-white text-white font-light text-sm tracking-wider hover:bg-white hover:text-zinc-950 transition-all duration-300"
            >
              PRENOTA UN TAVOLO
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Menu;

