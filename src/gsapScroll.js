import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

export default function useSmoothScroll() {
  useEffect(() => {
    // Inizializza Lenis per lo smooth scroll
    const lenis = new Lenis({
      duration: 2, // Durata dello scroll (più alto = più lento e morbido)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function
      orientation: "vertical", // Orientamento dello scroll
      gestureOrientation: "vertical",
      smoothWheel: true, // Abilita smooth scroll con la rotella del mouse
      wheelMultiplier: 1, // Moltiplicatore della velocità della rotella
      smoothTouch: false, // Disabilita smooth scroll su touch (migliore performance mobile)
      touchMultiplier: 2,
      infinite: false,
    });

    // Sincronizza Lenis con GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // Cleanup
    return () => {
      lenis.destroy();
      gsap.ticker.remove();
    };
  }, []);
}

// Hook per scrollare a una sezione specifica
export function useScrollTo() {
  return (target, options = {}) => {
    const lenis = window.lenis;
    if (lenis) {
      lenis.scrollTo(target, {
        offset: 0,
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        ...options,
      });
    }
  };
}