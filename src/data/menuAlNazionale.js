/**
 * Dati menu Bar Al Nazionale – estratti da baralnazionale.com
 * Categorie Cocktails, Gin, Food e pasticceria, Caffetteria, Vermouth, Vini
 * vanno aggiunte quando disponibili (altre pagine del sito o dal cliente).
 */

export const menuAlNazionale = {
  categorie: [
    {
      id: "aperitivi-birre",
      titolo: "Aperitivi e birre",
      sottocategorie: [
        {
          nome: "Americani",
          items: [
            { name: "Negroni Al Nazionale", desc: "Campari, vermouth carpano, liquore vaniglia, soda e fava tonka", price: "7,00" },
            { name: "Il classico", desc: "Campari, Carpano classico, soda", price: "6,50" },
            { name: "Cocchi", desc: "Campari, Vermouth Cocchi, soda", price: "6,00" },
            { name: "Punt&Mes", desc: "Campari, Vermouth Punt&Mes, soda", price: "6,50" },
            { name: "Rosso Rubino", desc: "Campari, Vermouth Martini Rosso rubino, soda", price: "7,50" },
            { name: "Vermouth del Professore", desc: "Campari, Vermouth del Professore, soda", price: "7,00" },
            { name: "Americano Carlo Alberto", desc: "Campari, vermouth Carlo Alberto, soda", price: "7,00" },
            { name: "Americano Cocchi Tenace", desc: "Bitter Tenace, vermouth Cocchi, soda", price: "7,50" },
            { name: "Negroni", desc: "Campari, Carpano classico, gin", price: "7,00" },
            { name: "Antica formula", desc: "Campari, Carpano antica formula, soda", price: "8,00" },
            { name: "Negroni sbagliato", desc: "Campari, Carpano classico, Prosecco", price: "6,50" },
            { name: "The Boulevadier", desc: "Campari, Carpano classico, whisky bourbon", price: "7,50" },
            { name: "Milano Torino", desc: "Campari, Carpano classico, arancia", price: "6,50" },
            { name: "American Green", desc: "p31, Martini bianco, soda", price: "6,50" },
            { name: "Americano cioccolato", desc: "Bitter fusetti cacao, carpano classico, soda", price: "8,00" },
            { name: "Antica Torino", desc: "Campari, antica Torino, soda", price: "7,50" },
            { name: "Dopo teatro", desc: "Campari, dopo teatro, soda", price: "7,50" },
            { name: "Carlo Alberto riserva", desc: "Campari, Carlo Alberto riserva, soda", price: "8,00" },
            { name: "Etrusco nero", desc: "Etrusco nero, Campari, soda", price: "7,00" }
          ]
        },
        {
          nome: "Spritz",
          items: [
            { name: "Spritz Aperol", desc: "Aperol, Prosecco, soda", price: "4,00" },
            { name: "Spritz Campari", desc: "Campari, Prosecco, soda", price: "4,50" },
            { name: "Spritz Hugo", desc: "Sciroppo sambuco, Prosecco, soda", price: "4,50" },
            { name: "Spritz Hugo Violetta", desc: "Sciroppo violetta, prosecco, soda", price: "4,00" },
            { name: "Pimm's", desc: "Pimm's, ginger ale, cetriolo, frutta e agrumi", price: "7,00" },
            { name: "Green Spritz", desc: "P31, Prosecco, lemon, spuma sambuco", price: "4,50" }
          ]
        },
        {
          nome: "Birre",
          items: [
            { name: "Radler piccola", desc: "", price: "3,00" },
            { name: "Radler grande", desc: "", price: "5,00" },
            { name: "IPA Anti korpo 300 ml", desc: "Pale lager setosa e succosa, sentori tropicali. Senza glutine.", price: "4,00", tag: "Senza glutine" },
            { name: "IPA anti korpo 500 ml", desc: "Come 300 ml. Senza glutine.", price: "7,00", tag: "Senza glutine" },
            { name: "Birra Auer Braü 30 cl", desc: "Helles bavarese, malto e cereali. Anidride solforosa e solfiti, glutine, frutta a guscio.", price: "3,00" },
            { name: "Birra Auer Braü 50 cl", desc: "Come 30 cl.", price: "5,00" }
          ]
        },
        {
          nome: "Aperitivo analcolico",
          items: [
            { name: "Spritz veneziano analcolico", desc: "Prosecco de alcolizzato, liquore giffard senza alcol, soda", price: "4,00" },
            { name: "Hugo analcolico", desc: "Prosecco de alcolizzato, sciroppo sambuca, soda, menta e lime", price: "4,00" },
            { name: "Gingerino", desc: "", price: "3,00" },
            { name: "Crodino", desc: "", price: "3,00" },
            { name: "Sanbitter bianco", desc: "", price: "3,00" }
          ]
        }
      ]
    }
    // Aggiungere qui: Cocktails, Gin, Food e pasticceria, Caffetteria bibite, Vermouth, Vini
  ]
};

/** Contatti e info bar – per uso in Footer, Contatti, Navbar */
export const infoBar = {
  nome: "Bar Al Nazionale",
  nomeCorto: "Al Nazionale",
  citta: "Gemona del Friuli",
  indirizzo: "Piazza Garibaldi, 8",
  cap: "33013",
  provincia: "UD",
  telefono: "0432 179 8437",
  email: "baralnazionale@gmail.com",
  orari: "Lunedì - Domenica: 07:00 - 24:00",
  descrizioneContatti: "Il Bar al Nazionale è situato nel centro storico di Gemona, in Piazza Garibaldi n.8. Nelle vicinanze è presente un punto assistenza per le biciclette. In 5 minuti a piedi: Duomo, Monastero di Sant'Antonio, Museo Civico.",
  social: {
    instagram: "https://www.instagram.com/baralnazionale/", // da verificare
    facebook: "https://www.facebook.com/profile.php?id=100040057074719"    // da verificare
  }
};
