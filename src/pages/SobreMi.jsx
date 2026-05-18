import React from 'react';
import { Link } from 'react-router-dom';
import FaqAccordion from '../components/FaqAccordion';
// Importamos los iconos de react-icons para la sección de redes sociales
import { FaInstagram, FaEnvelope, FaTiktok } from 'react-icons/fa6';

import imagen_lucia from '../assets/images/Lucia-Morales-4.jpg';

export default function SobreMi() {
  
  // Lista de ayuda transformada en array para mapearla fácilmente
  const especialidades = [
    "Autoestima", 
    "Ansiedad", 
    "Problemas de pareja", 
    "Etapa del embarazo, parto o postparto", 
    "Problemas de sexualidad", 
    "Crecimiento personal", 
    "Conocimiento de tu sexualidad", 
    "Gestión del Estrés"
  ];

  // FAQs de ejemplo (puedes cambiar estos textos por los que tú quieras)
  const sobreMiFaqs = [
    {
      q: "¿Atiendes de forma online y presencial?",
      a: "Sí, ofrezco tanto sesiones presenciales en mi consulta en Cádiz y Vejer como terapia online, para poder adaptarme a tus necesidades, ubicación y horarios."
    },
    {
      q: "¿Cuál es tu enfoque de trabajo?",
      a: "Entiendo la psicología desde una perspectiva integradora. Esto significa que no me limito a una sola corriente, sino que adapto las mejores herramientas de diferentes enfoques a las necesidades específicas de cada persona."
    },
    {
      q: "¿A qué tipo de pacientes atiendes?",
      a: "Actualmente trabajo con adultos y adolescentes, ofreciendo tanto terapia individual como terapia de pareja, además de impartir talleres grupales."
    }
  ];

  return (
    <div className="w-full bg-brand-white">
      <main>
        
        {/* --- 1. HERO Y BIOGRAFÍA (Split Layout) --- */}
        <section className="bg-brand-primary pt-16 pb-24 px-6">
          <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            {/* Foto de perfil */}
            <div className="flex-1 w-full flex justify-center lg:justify-end">
              <div className="relative">
                {/* Elemento decorativo detrás de la foto */}
                <div className="absolute inset-0 bg-brand-orange rounded-[3rem] transform translate-x-4 translate-y-4"></div>
                <img 
                  src={imagen_lucia}
                  alt="psicologia Lucia Morales" 
                  className="relative w-full max-w-[450px] rounded-[3rem] shadow-xl object-cover z-10"
                />
              </div>
            </div>

            {/* Texto de Presentación */}
            <div className="flex-1 space-y-6 text-center lg:text-left mt-8 lg:mt-0">
              <h1 className="text-brand-tittle leading-tight">
                <span className="block text-4xl lg:text-5xl font-bold mb-2">¡Hola! Soy Lucía</span>
                <span className="block text-2xl lg:text-3xl text-brand-secondary font-medium">Psicóloga General Sanitaria</span>
              </h1>
              
              <div className="text-brand-text leading-relaxed text-[17px] space-y-4">
                <p>
                  Actualmente trabajo sobre todo con adultos. Entiendo desde siempre la psicología como un todo, desde una <strong>perspectiva integradora</strong>, lo que quiere decir básicamente que el mejor tratamiento para una persona es aquel que se adapta a sus necesidades donde se pueda desarrollar, expresar y sanar desde un lugar seguro.
                </p> 
                <p>
                  Desde que empecé a adentrarme en el mundo de la psicología me di cuenta de lo importante que son nuestros vínculos tanto con los demás como con nosotros mismos, es por ello que <strong>atiendo tanto de manera individual como a parejas</strong>. También imparto talleres en grupo en los que intento crear espacios seguros donde se puedan trabajar.
                </p> 
                <p>
                  Si sientes que no estás pasando por un buen momento, que tus emociones no se pueden controlar o si quieres empezar el camino del proceso terapéutico, puedo ayudarte. Iniciar la terapia puede ser algo doloroso, largo o incluso hacerse pesado pero <strong>no hay nada mejor que darte la oportunidad de sanar.</strong>
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* --- 2. EN QUÉ PUEDO AYUDARTE --- */}
        <section className="py-24 px-6 bg-brand-white">
          <div className="max-w-[1000px] mx-auto">
            <h2 className="text-center text-brand-tittle mb-16">En qué puedo ayudarte</h2> 
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              {especialidades.map((item, index) => (
                <div key={index} className="flex items-center gap-4 p-4 rounded-xl hover:bg-brand-main/10 transition-colors border border-transparent hover:border-brand-main/30">
                  <div className="w-8 h-8 flex-shrink-0 bg-brand-orange text-white rounded-full flex items-center justify-center font-bold shadow-sm">
                    ✓
                  </div>
                  <span className="text-brand-text text-lg font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- 3. CTA BANNER MARRÓN/NARANJA --- */}
        <section className="bg-brand-orange py-14 px-6 flex items-center justify-center">
          <div className="max-w-[900px] w-full flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <p className="text-white text-xl md:text-2xl font-semibold m-0 flex-1 leading-snug">
              Reserva tu sesión de psicología hoy y comienza a sentirte mejor.
            </p> 
            <Link 
              to="/contacto-terapeuta" 
              className="bg-brand-secondary text-white px-10 py-3.5 rounded-full font-bold shadow-md transition-all duration-300 transform hover:-translate-y-1 hover:bg-brand-dark whitespace-nowrap"
            >
              Reservar
            </Link> 
          </div>
        </section>

        {/* --- 4. PREGUNTAS FRECUENTES (Reutilizando FaqAccordion) --- */}
        <FaqAccordion faqs={sobreMiFaqs} bgColor="bg-brand-main/10" />

        {/* --- 5. REDES SOCIALES --- */}
        <section className="bg-brand-primary py-16 px-6">
          <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-8">
            <h3 className="text-brand-tittle text-xl font-medium">Sígueme en mis redes</h3>
            <div className="flex gap-6">
              <a 
                href="https://www.instagram.com/luciamorales.psicologia/" 
                target="_blank" 
                rel="noreferrer" 
                className="w-14 h-14 bg-brand-white text-brand-orange rounded-full flex items-center justify-center shadow-md hover:bg-brand-orange hover:text-brand-white transition-all transform hover:-translate-y-1"
                aria-label="Instagram"
              >
                <FaInstagram size={28} />
              </a> 
              <a 
                href="mailto:luciamorales.psicologa@gmail.com" 
                className="w-14 h-14 bg-brand-white text-brand-orange rounded-full flex items-center justify-center shadow-md hover:bg-brand-orange hover:text-brand-white transition-all transform hover:-translate-y-1"
                aria-label="Email"
              >
                <FaEnvelope size={26} />
              </a> 
              <a 
                href="https://www.tiktok.com/@luciamoralespsicologia" 
                target="_blank" 
                rel="noreferrer" 
                className="w-14 h-14 bg-brand-white text-brand-orange rounded-full flex items-center justify-center shadow-md hover:bg-brand-orange hover:text-brand-white transition-all transform hover:-translate-y-1"
                aria-label="TikTok"
              >
                <FaTiktok size={26} />
              </a> 
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}