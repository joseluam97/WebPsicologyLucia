import React from 'react';
import presencialImg from '../assets/images/terapia-psicologica-4.jpg';
import onlineImg from '../assets/images/terapia-psicologica-5.jpg';

const Services = () => {
  return (
    <section className="bg-white py-20 px-6 w-full">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Encabezado y texto introductorio */}
        <h2 className="text-center text-brand-dark mb-6 font-semibold uppercase tracking-wider">
          Servicios
        </h2>
        <p className="max-w-[800px] mx-auto text-center text-brand-text mb-16 leading-relaxed">
          Te ofrezco tanto terapia online como presencial en mi consulta de Cádiz. Podrás elegir 
          la modalidad que mejor se adapte a ti y a tu estilo de vida, con la seguridad de que en ambos 
          espacios lograrás encontrar el bienestar emocional y la atención personalizada que buscas.
        </p>

        {/* --- Bloque 1: Terapia Presencial (Imagen Izquierda, Texto Derecha) --- */}
        {/* En móvil se apila normal (flex-col), en PC se pone en fila (md:flex-row) */}
        <div className="flex flex-col md:flex-row rounded-2xl overflow-hidden shadow-lg mb-12 bg-brand-primary/30">
          
          {/* Contenedor Imagen */}
          <div className="w-full md:w-1/2 h-[300px] md:h-auto">
            <img 
              src={presencialImg} 
              alt="Consulta presencial" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Contenedor Texto */}
          <div className="w-full md:w-1/2 p-8 md:p-14 flex flex-col justify-center text-center md:text-left">
            <h3 className="text-brand-dark mb-4">Terapia Psicológica Presencial</h3>
            <p className="text-brand-text leading-relaxed m-0">
              Si vives cerca de Cádiz y prefieres un trato más directo, te espero en mi consulta. Aquí encontrarás un espacio seguro y acogedor. Trabajaremos juntos para entender tus problemas desde el origen y te dotaré de herramientas eficaces para mejorar tu bienestar.
            </p>
          </div>
          
        </div>

        {/* --- Bloque 2: Terapia Online (Texto Izquierda, Imagen Derecha en PC) --- */}
        {/* En móvil se apila normal, en PC se invierte el orden de la fila (md:flex-row-reverse) */}
        <div className="flex flex-col md:flex-row-reverse rounded-2xl overflow-hidden shadow-lg bg-brand-primary/30">
          
          {/* Contenedor Imagen */}
          <div className="w-full md:w-1/2 h-[300px] md:h-auto">
            <img 
              src={onlineImg} 
              alt="Terapia online" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Contenedor Texto */}
          <div className="w-full md:w-1/2 p-8 md:p-14 flex flex-col justify-center text-center md:text-left">
            <h3 className="text-brand-dark mb-4">Terapia Psicológica Online</h3>
            <p className="text-brand-text leading-relaxed m-0">
              La terapia online es la opción perfecta si prefieres la comodidad de hacer las sesiones desde casa, si viajas a menudo o si tienes poco tiempo. Con las mismas garantías de confidencialidad y rigor terapéutico que la terapia presencial.
            </p>
          </div>
          
        </div>

      </div>
    </section>
  );
};

export default Services;