import React from 'react';
import backgroundImg from '../assets/images/terapia-psicologica-1.jpg';
import heroBg from '../assets/images/terapia-psicologica-1.1-scaled-e1719329288559.jpg';

const Hero = () => {
  return (
    <section className="relative bg-brand-white min-h-[60vh] flex items-center justify-center overflow-hidden py-4 px-4 w-full">
      
      {/* Capa de Fondo (Overlay) */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-15 z-10 pointer-events-none"
        style={{ backgroundImage: `url(${backgroundImg})` }}
      ></div>
      
      {/* Contenedor Principal */}
      <div className="relative z-20 flex flex-col lg:flex-row items-center justify-between gap-0 lg:gap-20 max-w-[1200px] w-full mx-auto">
        
        {/* Contenido Textual */}
        <div className="flex-1 lg:flex-[1.2] max-w-full lg:max-w-[620px] flex flex-col items-center text-center">
          
          {/* El tamaño (48px) y tipografía se heredan globalmente de la etiqueta h1 */}
          <h1 className="text-brand-dark mb-8">
            Terapia Psicologica
          </h1>
          
          {/* El tamaño (16px) se hereda de la etiqueta p global.
            El interlineado menor se define aquí mismo con la clase 'leading-snug'.
            El color se asigna mediante la variable global de texto 'text-brand-text'.
          */}
          <p className="text-brand-text leading-snug mb-8">
            La terapia psicologica puede ayudarte. Encontrarás el equilibrio y la 
            tranquilidad que necesitas en tu vida diaria. Además, la terapia psicologica 
            está diseñada para ofrecerte un espacio seguro y acogedor. En este espacio, 
            puedes explorar tus emociones. Aquí recibirás mi confianza y apoyo profesional.
          </p>
          
          <a 
            href="/contacto-terapeuta/" 
            className="inline-block bg-brand-secondary hover:opacity-90 text-white px-10 py-3.5 rounded-full text-lg font-semibold shadow-[0_4px_15px_rgba(0,0,0,0.08)] transform transition-all duration-200 hover:-translate-y-0.5"
          >
            ¡Comencemos!
          </a>
          
        </div>
        
        {/* Contenedor de Imagen */}
        <div className="flex-1 lg:flex-[0.8] flex justify-center lg:justify-end items-center w-full">
          <img 
            src={heroBg} 
            alt="Terapia Psicologica - Lucía Morales" 
            className="w-full max-w-[160px] lg:max-w-[240px] h-auto aspect-[2/3] object-cover rounded-2xl shadow-[0_20px_40px_rgba(29,51,38,0.12)]"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;