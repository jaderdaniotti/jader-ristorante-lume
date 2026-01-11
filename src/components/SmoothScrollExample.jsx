import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SmoothScrollExample = () => {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);

  useEffect(() => {
    // Animazione per la sezione 1
    gsap.fromTo(
      section1Ref.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: section1Ref.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Animazione per la sezione 2
    gsap.fromTo(
      section2Ref.current,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: section2Ref.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Animazione per la sezione 3
    gsap.fromTo(
      section3Ref.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        scrollTrigger: {
          trigger: section3Ref.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  const handleSmoothScroll = (e, target) => {
    e.preventDefault();
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 text-white">
        <h1 className="text-6xl font-bold mb-6 text-center">
          Smooth Scroll Demo
        </h1>
        <p className="text-xl mb-8 text-center max-w-2xl px-4">
          Scorri verso il basso per vedere lo smooth scroll in azione con animazioni GSAP
        </p>
        <div className="flex gap-4">
          <a
            href="#section1"
            onClick={(e) => handleSmoothScroll(e, '#section1')}
            className="btn btn-lg btn-primary"
          >
            Sezione 1
          </a>
          <a
            href="#section2"
            onClick={(e) => handleSmoothScroll(e, '#section2')}
            className="btn btn-lg btn-secondary"
          >
            Sezione 2
          </a>
          <a
            href="#section3"
            onClick={(e) => handleSmoothScroll(e, '#section3')}
            className="btn btn-lg btn-accent"
          >
            Sezione 3
          </a>
        </div>
      </section>

      {/* Section 1 */}
      <section
        id="section1"
        ref={section1Ref}
        className="min-h-screen flex items-center justify-center bg-white"
      >
        <div className="max-w-4xl px-8 text-center">
          <h2 className="text-5xl font-bold mb-6 text-gray-800">
            Sezione 1: Fade In
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Questa sezione appare con un effetto fade-in quando scrolli. 
            Lo smooth scroll rende l'esperienza molto più fluida e piacevole.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body">
                <h3 className="card-title">Feature 1</h3>
                <p>Smooth scroll fluido e naturale</p>
              </div>
            </div>
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body">
                <h3 className="card-title">Feature 2</h3>
                <p>Integrazione con GSAP ScrollTrigger</p>
              </div>
            </div>
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body">
                <h3 className="card-title">Feature 3</h3>
                <p>Performance ottimizzate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section
        id="section2"
        ref={section2Ref}
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-400 to-blue-500 text-white"
      >
        <div className="max-w-4xl px-8 text-center">
          <h2 className="text-5xl font-bold mb-6">
            Sezione 2: Slide In
          </h2>
          <p className="text-xl mb-8">
            Questa sezione scorre da sinistra. Puoi personalizzare ogni animazione 
            usando GSAP per creare effetti unici.
          </p>
          <div className="stats stats-vertical lg:stats-horizontal shadow-2xl">
            <div className="stat">
              <div className="stat-title text-white">Performance</div>
              <div className="stat-value">60 FPS</div>
              <div className="stat-desc text-white">Smooth e fluido</div>
            </div>
            <div className="stat">
              <div className="stat-title text-white">Compatibilità</div>
              <div className="stat-value">100%</div>
              <div className="stat-desc text-white">Tutti i browser moderni</div>
            </div>
            <div className="stat">
              <div className="stat-title text-white">User Experience</div>
              <div className="stat-value">⭐⭐⭐⭐⭐</div>
              <div className="stat-desc text-white">Eccezionale</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section
        id="section3"
        ref={section3Ref}
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-500 text-white"
      >
        <div className="max-w-4xl px-8 text-center">
          <h2 className="text-5xl font-bold mb-6">
            Sezione 3: Scale In
          </h2>
          <p className="text-xl mb-8">
            Questa sezione si ingrandisce quando appare. Lo smooth scroll funziona 
            perfettamente con qualsiasi tipo di animazione GSAP.
          </p>
          <div className="flex flex-col gap-4">
            <button className="btn btn-lg btn-outline btn-white">
              Scopri di più
            </button>
            <a
              href="#"
              onClick={(e) => handleSmoothScroll(e, 'body')}
              className="btn btn-lg btn-ghost"
            >
              Torna su ↑
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Smooth Scroll implementato con successo! 🎉
          </h3>
          <p className="text-gray-400 mb-6">
            Usando Lenis + GSAP ScrollTrigger per la migliore esperienza possibile
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="#"
              onClick={(e) => handleSmoothScroll(e, 'body')}
              className="btn btn-primary"
            >
              Torna all'inizio
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SmoothScrollExample;


