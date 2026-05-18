import React from 'react';
import centerImage from '../assets/images/terapia-psicologica-fondo-1.svg';

const Indications = () => {
  // Array con los textos y la "coordenada" de Tailwind para formar el círculo en PC
  const indications = [
    // Arriba
    { text: "Te encuentras triste y sin esperanzas desde hace tiempo", pos: "md:col-start-2 md:row-start-1 md:translate-y-4 md:translate-x-4" },
    { text: "Sientes que no controlas tus emociones, lloras a menudo", pos: "md:col-start-3 md:row-start-1 md:translate-y-4 md:-translate-x-4" },
    
    // Derecha
    { text: "Problemas para dormir, insomnio o descanso deficiente", pos: "md:col-start-4 md:row-start-2 md:-translate-x-6" },
    { text: "Pensamientos obsesivos o intrusivos que no puedes parar", pos: "md:col-start-4 md:row-start-3" },
    { text: "Sientes que no encajas, te aíslas de amigos y familiares", pos: "md:col-start-4 md:row-start-4 md:-translate-x-6" },
    
    // Abajo
    { text: "Tienes miedos irracionales que te paralizan", pos: "md:col-start-3 md:row-start-5 md:-translate-y-4 md:-translate-x-4" },
    { text: "Dificultad para relacionarte de manera sana", pos: "md:col-start-2 md:row-start-5 md:-translate-y-4 md:translate-x-4" },
    
    // Izquierda
    { text: "Has sufrido una pérdida importante y no avanzas", pos: "md:col-start-1 md:row-start-4 md:translate-x-6" },
    { text: "Sufres síntomas físicos sin causa médica clara", pos: "md:col-start-1 md:row-start-3" },
    { text: "Sientes que el estrés supera tu capacidad para afrontarlo", pos: "md:col-start-1 md:row-start-2 md:translate-x-6" },
  ];

  return (
    <section className="bg-white py-20 px-6 overflow-hidden w-full">
      <div className="max-w-[1200px] mx-auto">
        
        <h2 className="text-brand-dark text-center mb-10 md:mb-16">
          ¿Cuándo es bueno empezar a ir a terapia psicológica?
        </h2>

        {/* --- IMAGEN EN MÓVIL --- 
            La sacamos fuera del grid solo para móviles, para que se quede fija arriba 
            y las tarjetas se deslicen por debajo de ella. En PC se oculta.
        */}
        <div className="flex md:hidden justify-center items-center w-full mb-8">
          <img 
            src={centerImage} 
            alt="Personas en terapia" 
            className="w-full max-w-[240px] drop-shadow-2xl" 
          />
        </div>
        
        {/* --- CONTENEDOR HÍBRIDO ---
            Móvil: flex overflow-x-auto (Carrusel horizontal)
            PC (md): grid de 4x5 (Tu círculo perfecto)
            Las clases de scrollbar ocultan la barra de desplazamiento fea del navegador.
        */}
        <div className="flex overflow-x-auto gap-4 pb-8 snap-x snap-mandatory md:grid md:grid-cols-4 md:grid-rows-5 md:gap-0 md:pb-0 relative items-center justify-items-center md:overflow-visible [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">

          {/* IMAGEN CENTRAL EN PC
              Oculta en móvil (porque ya la pusimos arriba), visible y en el centro exacto en PC.
          */}
          <div className="hidden md:flex md:col-start-2 md:col-span-2 md:row-start-2 md:row-span-3 justify-center items-center z-10 w-full p-4">
            <img 
              src={centerImage} 
              alt="Personas en terapia" 
              className="w-full max-w-[280px] lg:max-w-[380px] drop-shadow-2xl hover:scale-105 transition-transform duration-500" 
            />
          </div>

          {/* RENDERIZADO DE LAS CAJAS */}
          {indications.map((item, index) => (
            <div 
              key={index} 
              className={`
                bg-brand-primary border border-brand-secondary/20 
                p-5 md:p-4 rounded-2xl shadow-lg text-center flex items-center justify-center 
                w-[80vw] shrink-0 snap-center md:w-full md:shrink max-w-[280px] md:max-w-[260px] min-h-[110px] z-20 
                hover:-translate-y-1 hover:shadow-xl transition-all duration-300
                ${item.pos}
              `}
            >
              <p className="text-brand-text leading-snug m-0">
                {item.text}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Indications;