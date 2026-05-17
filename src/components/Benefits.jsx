import React from 'react';

const Benefits = () => {
  return (
    <section className="bg-brand-primary py-16 px-8">
      <div className="max-w-[1000px] mx-auto text-center">
        {/* Usamos el color oscuro para el título, heredando su tamaño global de index.css */}
        <h2 className="text-brand-dark mb-6">
          ¿Cómo puede la terapia psicológica cambiar tu vida?
        </h2>
        
        {/* Usamos el color de texto base y dejamos que herede el tamaño global */}
        <p className="text-brand-text">
          La terapia psicológica es un proceso de autoconocimiento y aprendizaje donde un profesional te acompaña 
          para entender tus emociones, pensamientos y conductas. Trabajarás de la mano de un psicólogo colegiado 
          para identificar qué te está causando malestar y dotarte de herramientas para superarlo, mejorando tu 
          calidad de vida, reduciendo el estrés y la ansiedad, y mejorando la relación contigo mismo y con tu entorno.
        </p>
      </div>
    </section>
  );
};

export default Benefits;