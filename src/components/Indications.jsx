import React from 'react';
import centerImage from '../assets/images/terapia-psicologica-fondo-1.svg';

const Indications = () => {
  // Array con los textos y la "coordenada" de Tailwind para formar el círculo en pantallas grandes
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
        
        {/* El H2 hereda su tamaño (px) desde index.css */}
        <h2 className="text-brand-dark text-center mb-16">
          ¿Cuándo es bueno empezar a ir a terapia psicológica?
        </h2>
        
        {/* Grid de 4 columnas x 5 filas para crear el lienzo circular */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-5 gap-6 relative items-center justify-items-center">

          {/* IMAGEN CENTRAL
            La clase order-first hace que en móvil se vea arriba del todo.
            En PC, ocupa el centro exacto (columnas 2-3 y filas 2-4).
          */}
          <div className="order-first md:order-none md:col-start-2 md:col-span-2 md:row-start-2 md:row-span-3 flex justify-center items-center z-10 w-full p-4">
            <img 
              src={centerImage} 
              alt="Personas en terapia" 
              className="w-full max-w-[280px] lg:max-w-[380px] drop-shadow-2xl hover:scale-105 transition-transform duration-500" 
            />
          </div>

          {/* RENDERIZADO DE LAS CAJAS EN CÍRCULO */}
          {indications.map((item, index) => (
            <div 
              key={index} 
              className={`
                bg-brand-primary border border-brand-secondary/20 
                p-5 rounded-2xl shadow-lg text-center flex items-center justify-center 
                w-full max-w-[260px] min-h-[100px] z-20 
                hover:-translate-y-1 hover:shadow-xl transition-all duration-300
                ${item.pos}
              `}
            >
              {/* El <p> hereda su tamaño (px) global y usa el interlineado menor que pediste */}
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