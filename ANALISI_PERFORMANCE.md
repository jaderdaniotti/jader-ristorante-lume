# Analisi performance – Bar Al Nazionale

Cause probabili di **scroll e animazioni a scatti** e interventi consigliati.

---

## 1. Cosa è stato fatto (fix applicati)

- **Navbar – scroll listener**: uso di `requestAnimationFrame` + listener `passive: true` per evitare re-render a ogni frame e blocchi del main thread.
- **Navbar – transizione**: rimosso `backdrop-blur-md` (costoso in repaint), sostituito con sfondo solido; transizione ridotta a `background-color` e `padding` (300ms).
- **AOS**: `easing` da `linear` a `ease-out`, `duration` 400ms, `offset` 80px per animazioni più fluide.
- **Immagini**: `loading="lazy"` e `decoding="async"` su immagini sotto la fold (blocchi Mangia/Bevi/Divertiti, gallery menu); `fetchPriority="high"` solo sull’hero.
- **CSS**: su `[data-aos]` applicati `transform: translateZ(0)` e `backface-visibility: hidden` per promuovere a layer GPU e ridurre jank.

---

## 2. Dipendenze installate vs uso reale

### Usate nell’app (Home, Menu, Navbar, Footer)

| Pacchetto            | Uso                          |
|----------------------|------------------------------|
| react, react-dom     | Core                         |
| react-router-dom     | Routing                      |
| aos                  | Animazioni on scroll (data-aos) |
| react-icons (fa)     | Icone Navbar/Footer/Home     |
| tailwindcss, @tailwindcss/vite | Stili                    |
| bootstrap-icons      | Import CSS (icone font)      |
| tw-animate-css       | Import CSS                   |
| clsx, tailwind-merge | utils (lib/utils.js)         |

### Non usate nelle pagine attuali (solo in componenti non in route)

| Pacchetto            | Usato in                     | Peso / effetto                    |
|----------------------|------------------------------|-----------------------------------|
| gsap, @gsap/react    | SmoothScrollExample, splitText.jsx | ~50KB+ , ScrollTrigger      |
| motion               | blurText.jsx                 | Animazioni JS                     |
| @react-three/fiber, three, ogl | silk.jsx              | 3D, molto pesante                  |
| fullpage.js          | —                            | Non importato, molto pesante      |
| lenis                | —                            | Non importato, smooth scroll       |
| locomotive-scroll    | —                            | Non importato, smooth scroll      |
| swiper               | —                            | Non importato                     |
| @tsparticles/engine  | —                            | Non importato                     |
| typed.js             | —                            | Non importato                     |
| react-feather        | —                            | Non importato (usate react-icons) |
| react-fast-marquee   | —                            | Non importato                     |
| lucide-react         | —                            | Non importato (usate react-icons) |

Anche se non importati in `App.jsx` / Home / Menu, restano in `node_modules` e possono essere inclusi da altri file; conviene rimuovere dal progetto ciò che non serve.

---

## 3. Cause probabili degli scatti (prima dei fix)

1. **Scroll listener Navbar senza throttle**  
   `setState` a ogni evento scroll → molti re-render e lavoro sul main thread.

2. **AOS con `easing: 'linear'`**  
   Animazioni lineari risultano più “meccaniche” e meno fluide.

3. **backdrop-blur sulla Navbar**  
   Blur su scroll richiede repaint costosi e può causare micro-stutter.

4. **Molti elementi con `data-aos`**  
   Molte animazioni in contemporanea aumentano lavoro di layout/paint senza ottimizzazioni (es. layer GPU).

5. **Immagini sotto la fold senza lazy loading**  
   Tutte caricate subito → più rete e decode iniziale, possibile jank durante lo scroll.

6. **Transizioni generiche `transition-all`**  
   Animare “all” può coinvolgere più proprietà e aumentare il costo delle transizioni.

---

## 4. Miglioramenti consigliati (ulteriori)

### Dipendenze da valutare per la rimozione

Se **SmoothScrollExample**, **silk.jsx**, **blurText.jsx**, **splitText.jsx** non sono usati in nessuna route:

- Rimuovere da `package.json`:  
  `fullpage.js`, `lenis`, `locomotive-scroll`, `swiper`, `@tsparticles/engine`, `typed.js`, `react-feather`, `react-fast-marquee`, `lucide-react`  
  (e opzionalmente `gsap`, `motion`, `@react-three/fiber`, `three`, `ogl` se decidi di non usare più quei componenti).
- Eseguire `npm install` dopo le rimozioni.

Riduce dimensione di `node_modules` e rischio di bundle inutili.

### CSS

- **Ridurre import doppi**: in `index.css` e `App.css` ci sono `@import "tailwindcss"`, `bootstrap-icons`, `tw-animate-css`. Valuta di tenere un solo punto di ingresso (es. solo `App.css`) per evitare CSS duplicato.
- **Transizioni**: preferire proprietà specifiche (es. `transition-[background-color,padding]`) invece di `transition-all`, come già fatto sulla Navbar.

### AOS

- Per dispositivi lenti puoi disabilitare AOS su mobile:  
  `Aos.init({ disable: 'mobile', ... })` (se supportato dalla versione in uso).
- Oppure ridurre il numero di elementi con `data-aos` (es. animare solo titoli e card, non ogni blocco piccolo).

### Immagini

- Hai già webp e lazy loading; per l’hero puoi usare `<picture>` con webp + fallback per browser vecchi, e dimensioni `srcset` se servi più risoluzioni.
- Mantenere `fetchPriority="high"` solo per l’immagine hero, `loading="lazy"` per il resto.

### Contenuto e layout

- Per sezioni molto lunghe puoi provare `content-visibility: auto` (con attenzione a layout e accessibilità) per ridurre il lavoro di rendering fuori viewport.

---

## 5. Riepilogo fix applicati nel codice

| File        | Modifica                                                                 |
|------------|--------------------------------------------------------------------------|
| Navbar.jsx | Scroll con rAF + passive; sfondo solido invece di backdrop-blur; transizione 300ms su bg/padding |
| main.jsx   | AOS: easing `ease-out`, duration 400ms, offset 80px                       |
| home.jsx   | Hero: `fetchPriority="high"`; blocchi: `loading="lazy"` e `decoding="async"` |
| menu.jsx   | Gallery: `loading="lazy"` e `decoding="async"`                           |
| index.css  | `[data-aos]`: `transform: translateZ(0)` e `backface-visibility: hidden` |

Dopo questi interventi, scroll e animazioni dovrebbero risultare più fluidi; se gli scatti restano, il passo successivo è profilare con DevTools (Performance / Rendering) e valutare la rimozione di AOS su mobile o di parte degli elementi animati.
