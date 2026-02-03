import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'aos/dist/aos.css'
import Aos from 'aos'

// Configurazione AOS – easing fluido per evitare animazioni a scatti
Aos.init({
  duration: 400,
  easing: 'ease-out',
  once: true,
  offset: 80,
  delay: 0,
  disable: false,
  startEvent: 'DOMContentLoaded',
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
