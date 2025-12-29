# Guida all'implementazione dello Smooth Scroll con GSAP e Lenis

## 🎯 Cosa è stato implementato

Ho implementato uno smooth scroll globale per tutto il sito usando **Lenis** (una libreria moderna e performante) integrata con **GSAP ScrollTrigger**.

## 📦 Dipendenze utilizzate

- `gsap` - Per le animazioni e ScrollTrigger
- `lenis` - Per lo smooth scroll
- Entrambe sono già installate nel tuo `package.json`

## 🚀 Come funziona

### 1. Hook principale: `useSmoothScroll()`

Il file `src/gsapScroll.js` contiene l'hook principale che inizializza lo smooth scroll:

```javascript
import useSmoothScroll from './gsapScroll';

function App() {
  useSmoothScroll(); // Inizializza lo smooth scroll
  // ...
}
```

### 2. Configurazione Lenis

Lo smooth scroll è configurato con questi parametri:

- **duration**: `1.2` - Durata dell'animazione (più alto = più lento)
- **smoothWheel**: `true` - Abilita smooth scroll con la rotella del mouse
- **smoothTouch**: `false` - Disabilitato su mobile per migliori performance
- **orientation**: `vertical` - Scroll verticale

### 3. Integrazione con la Navbar

La Navbar è stata aggiornata per usare lo smooth scroll quando si clicca sui link interni:

```javascript
const handleSmoothScroll = (e, target) => {
  e.preventDefault();
  const element = document.querySelector(target);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};
```

## 🎨 Come usare lo smooth scroll nelle tue pagine

### Opzione 1: Link con anchor (consigliato)

```jsx
<a href="#sezione1" onClick={(e) => handleSmoothScroll(e, "#sezione1")}>
  Vai alla sezione 1
</a>

<div id="sezione1">
  {/* Contenuto della sezione */}
</div>
```

### Opzione 2: Scroll programmatico

Usa l'hook `useScrollTo()` per scrollare programmaticamente:

```jsx
import { useScrollTo } from './gsapScroll';

function MyComponent() {
  const scrollTo = useScrollTo();

  const handleClick = () => {
    scrollTo('#sezione1', {
      offset: -100, // Offset in pixel (utile per navbar fisse)
      duration: 1.5, // Durata personalizzata
    });
  };

  return <button onClick={handleClick}>Scroll to Section</button>;
}
```

### Opzione 3: Scroll a coordinate specifiche

```javascript
scrollTo(500); // Scrolla a 500px dall'alto
scrollTo('top'); // Scrolla all'inizio della pagina
scrollTo('bottom'); // Scrolla alla fine della pagina
```

## 🎭 Animazioni con ScrollTrigger

Puoi combinare lo smooth scroll con animazioni GSAP:

```jsx
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function AnimatedSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%', // Inizia quando il top dell'elemento è all'80% della viewport
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
          markers: false, // Imposta a true per debug
        },
      }
    );
  }, []);

  return <div ref={sectionRef}>Contenuto animato</div>;
}
```

## ⚙️ Personalizzazione

### Modificare la velocità dello scroll

Modifica il parametro `duration` in `src/gsapScroll.js`:

```javascript
const lenis = new Lenis({
  duration: 1.5, // Più alto = più lento e morbido
  // ...
});
```

### Modificare l'easing

Cambia la funzione `easing` per un effetto diverso:

```javascript
const lenis = new Lenis({
  easing: (t) => t, // Linear
  // oppure
  easing: (t) => 1 - Math.pow(1 - t, 3), // Ease out cubic
  // ...
});
```

### Disabilitare lo smooth scroll su elementi specifici

Aggiungi l'attributo `data-lenis-prevent` agli elementi:

```jsx
<div data-lenis-prevent>
  {/* Questo elemento avrà lo scroll nativo */}
  <div style={{ overflow: 'auto', height: '300px' }}>
    Contenuto scrollabile
  </div>
</div>
```

## 🐛 Troubleshooting

### Lo scroll non funziona

1. Verifica che `useSmoothScroll()` sia chiamato in `App.jsx`
2. Controlla la console per eventuali errori
3. Assicurati che non ci siano conflitti con altre librerie di scroll (es. Locomotive Scroll)

### Lo scroll è troppo lento/veloce

Modifica il parametro `duration` in `src/gsapScroll.js`

### Problemi su mobile

Lo smooth scroll è disabilitato di default su touch per migliori performance. Se vuoi abilitarlo:

```javascript
const lenis = new Lenis({
  smoothTouch: true, // Abilita su touch
  touchMultiplier: 2, // Regola la sensibilità
  // ...
});
```

## 📱 Performance

- **Desktop**: Smooth scroll attivo con ottima performance
- **Mobile**: Smooth scroll disabilitato su touch per default (migliori performance)
- **ScrollTrigger**: Sincronizzato automaticamente con Lenis

## 🎉 Vantaggi di questa implementazione

✅ Smooth scroll fluido e naturale  
✅ Integrazione perfetta con GSAP ScrollTrigger  
✅ Performance ottimizzate  
✅ Supporto per animazioni complesse  
✅ Facile da personalizzare  
✅ Compatibile con React Router  

## 📚 Risorse utili

- [Lenis Documentation](https://github.com/studio-freight/lenis)
- [GSAP ScrollTrigger](https://greensock.com/scrolltrigger/)
- [GSAP Documentation](https://greensock.com/docs/)


