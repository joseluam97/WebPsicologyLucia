import React from 'react';
import Doctoralia from './Doctoralia';

const Contact = () => {
  return (
    <section className="bg-brand-orange py-20 px-6 w-full flex items-center justify-center">
      {/* Contenedor principal: Centrado absoluto en fila (PC) y columna (Móvil) */}
      <div className="max-w-[1200px] w-full mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
        
        {/* Columna Derecha: Bloque de Texto (Ocupa el 50% en escritorio y centrado total) */}
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center text-center">
          
          {/* Texto en blanco para contraste óptimo sobre el fondo naranja */}
          <h2 className="text-white mb-6">
            Contacta conmigo
          </h2>
          
          <p className="text-white/90 leading-relaxed m-0">
            Empezar a ir a terapia es una decisión valiente, no dudes en ponerte en contacto conmigo si 
            necesitas más información o si te gustaría agendar una primera sesión. Te escucharé y valoraremos 
            si soy la profesional adecuada para ayudarte.
          </p>
          
        </div>
        
        {/* Columna Izquierda: Componente Doctoralia (Ocupa el 50% en escritorio y centrado total) */}
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <Doctoralia />
        </div>

      </div>
    </section>
  );
};

export default Contact;