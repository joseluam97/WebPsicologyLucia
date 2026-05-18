import React from 'react';

// Imágenes
import img_terapia_individual from '../assets/images/terapia-psicologica-3.1.jpg';
import img_terapia_parejas from '../assets/images/terapia-psicologica-3.2.jpg';
import img_terapia_perinatal from '../assets/images/terapia-psicologica-3.3.jpg';

const Specialties = () => {
  return (
    <section className="bg-white py-20 px-6 w-full">
      <div className="max-w-[1200px] mx-auto">

        {/* Título de la sección */}
        <h2 className="text-center text-brand-dark mb-14 font-semibold uppercase tracking-wider">
          Especialidades
        </h2>

        {/* Grid: 1 columna en móvil, 3 columnas a partir de tamaño tablet (md) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* --- TARJETA 1: Terapia Individual --- */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col border border-gray-100">
            {/* Contenedor de la imagen */}
            <div className="w-full h-[200px] overflow-hidden">
              <img
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                src={img_terapia_individual}
                alt="Terapia individual"
              />
            </div>

            {/* Contenido de la tarjeta (textos y botón) */}
            <div className="p-8 flex flex-col flex-grow items-center text-center">
              <h3 className="text-brand-dark mb-2">Terapia individual</h3>
              {/* flex-grow en el párrafo empuja el botón hacia abajo si los textos tienen distinto tamaño */}
              <p className="text-brand-text mb-4 flex-grow leading-relaxed">
                La terapia individual es un espacio para ti. Es un momento en tu semana donde un profesional está ahí solo para ti y tu bienestar. En este espacio, te acompañaré y te daré herramientas para afrontar las dificultades que puedan surgir a lo largo de tu vida y aprenderás a gestionarlas mejor.
              </p>

              <a
                href="/terapia-individual"
                className="mt-auto inline-block border-2 border-brand-secondary text-brand-secondary hover:bg-brand-secondary hover:text-white px-8 py-2.5 rounded-full font-semibold transition-colors duration-300"
              >
                Saber más
              </a>
            </div>
          </div>

          {/* --- TARJETA 2: Terapia de Pareja --- */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col border border-gray-100">
            <div className="w-full h-[200px] overflow-hidden">
              <img
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                src={img_terapia_parejas}
                alt="Terapia de pareja"
              />
            </div>

            <div className="p-8 flex flex-col flex-grow items-center text-center">
              <h3 className="text-brand-dark mb-2">Terapia de pareja</h3>
              <p className="text-brand-text mb-4 flex-grow leading-relaxed">
                La terapia de pareja es un espacio seguro para ambos. Podremos ver y analizar juntos los problemas de la relación desde un prisma objetivo para ayudaros a entender qué está pasando, recuperar la conexión perdida, mejorar vuestra comunicación y disfrutar de nuevo juntos.
              </p>

              <a
                href="/terapia-de-pareja"
                className="mt-auto inline-block border-2 border-brand-secondary text-brand-secondary hover:bg-brand-secondary hover:text-white px-8 py-2.5 rounded-full font-semibold transition-colors duration-300"
              >
                Saber más
              </a>
            </div>
          </div>

          {/* --- TARJETA 3: Terapia Perinatal --- */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col border border-gray-100">
            <div className="w-full h-[200px] overflow-hidden">
              <img
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                src={img_terapia_perinatal}
                alt="Terapia perinatal"
              />
            </div>

            <div className="p-8 flex flex-col flex-grow items-center text-center">
              <h3 className="text-brand-dark mb-2">Terapia perinatal</h3>
              <p className="text-brand-text mb-4 flex-grow leading-relaxed">
                La etapa perinatal abarca desde el deseo de ser madre/padre hasta los primeros años de crianza del bebé. Son momentos de grandes cambios e incertidumbre en los que un apoyo psicológico especializado puede prevenir y tratar dificultades en esta etapa tan vulnerable.
              </p>

              <a
                className="mt-auto inline-block border-2 border-brand-secondary text-brand-secondary hover:bg-brand-secondary hover:text-white px-8 py-2.5 rounded-full font-semibold transition-colors duration-300"
              >
                ¡Próximamente!
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Specialties;