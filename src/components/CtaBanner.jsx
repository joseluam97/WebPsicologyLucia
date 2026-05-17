import React from 'react';

const CtaBanner = () => {
  return (
    <section className="bg-brand-orange pt-6 pb-1 px-6 w-full">
      {/* Contenedor Flex: En móvil se apila en columna (flex-col) y en PC se pone en fila (md:flex-row) */}
      <div className="max-w-[1000px] mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between gap-8 text-center md:text-left">
        
        {/* Usamos la tipografía Andada Pro para darle un toque más elegante al mensaje */}
        <p className="text-white text-xl md:text-2xl font-semibold m-0 flex-1 text-[20px] md:text-[20px] leading-snug">
          Descubre cómo la terapia psicologica puede ayudarte a sentirte mejor. ¡Empieza ahora mismo!
        </p>
        
        {/* Botón: Fondo verde claro (primary), texto oscuro y efecto hover a verde oscuro */}
        <a 
          href="/contacto-terapeuta" 
          className="inline-block bg-brand-primary text-brand-dark hover:bg-brand-dark hover:text-white px-10 py-3.5 rounded-full text-lg font-bold shadow-md transition-all duration-300 transform hover:-translate-y-1 whitespace-nowrap"
        >
          ¡Empecemos!
        </a>
        
      </div>
    </section>
  );
};

export default CtaBanner;