import React from 'react';

// Importación de imágenes (Ajusta la ruta '../assets/images/' a la de tu proyecto)
import imgIndividual from '../assets/images/ayuda-psicologica-individual.jpg';
import imgPareja from '../assets/images/ayuda-psicologica-pareja.jpg';
import imgPerinatal from '../assets/images/ayuda-psicologica-perinatal.jpg';
import imgTalleres from '../assets/images/ayuda-psicologica.png';

const TiposAyudaPsicologica = () => {
  return (
    <div className="w-full font-sans text-[#000000] bg-white">
      
      {/* Header Section */}
      <section className="bg-[#C3D9C9] py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-semibold font-serif text-[#2F4F3F] mb-6">
          Terapias para tu ayuda psicológica
        </h1>
        <hr className="w-24 md:w-1/4 mx-auto border-t-2 border-[#C8A57A] mb-6" />
        <p className="max-w-3xl mx-auto text-lg md:text-xl">
          En nuestras terapias, dedicadas a tu ayuda psicológica, brindamos un espacio seguro. Nos enfocamos en tu bienestar emocional con apoyo personalizado y comprometido.
        </p>
      </section>

      {/* Tipos de Terapias Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-center font-serif text-[#2F4F3F] mb-16">
          Tipos de terapias
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Terapia Individual */}
          <div className="flex flex-col items-center text-center">
            <img 
              src={imgIndividual} 
              alt="ayuda psicológica individual" 
              className="w-4/5 rounded-xl mb-6 object-cover aspect-video shadow-sm" 
            />
            <h3 className="text-2xl font-serif font-medium mb-4 text-[#2F4F3F]">
              Terapia individual
            </h3>
            <p className="mb-8 flex-grow">
              En la terapia psicológica individual, encontrarás un espacio seguro y acogedor. Podrás explorar tus emociones y pensamientos con tranquilidad. Juntos trabajaremos en tus preocupaciones personales. Estas pueden incluir la ansiedad, la depresión y el manejo del estrés. Mi objetivo es brindarte ayuda psicológica para que encuentres equilibrio y paz en tu vida.
            </p>
            <a 
              href="/terapia-individual/" 
              className="bg-[#C8A57A] hover:bg-[#2F4F3F] text-white py-3 px-8 rounded transition-colors"
            >
              Ver servicio
            </a>
          </div>

          {/* Terapia de Parejas */}
          <div className="flex flex-col items-center text-center">
            <img 
              src={imgPareja} 
              alt="ayuda psicológica pareja" 
              className="w-4/5 rounded-xl mb-6 object-cover aspect-video shadow-sm" 
            />
            <h3 className="text-2xl font-serif font-medium mb-4 text-[#2F4F3F]">
              Terapia de parejas
            </h3>
            <p className="mb-8 flex-grow">
              La terapia psicológica de parejas. Enfocada en mejorar la comunicación y el entendimiento mutuo. A través de sesiones centradas en el respeto y la cercanía, te guiaré para fortalecer el vínculo con tu pareja. Mi objetivo es proporcionarte ayuda psicológica especializada. Podréis construir una relación más saludable y satisfactoria.
            </p>
            <a 
              href="/terapia-de-pareja/" 
              className="bg-[#C8A57A] hover:bg-[#2F4F3F] text-white py-3 px-8 rounded transition-colors"
            >
              Ver servicio
            </a>
          </div>

          {/* Terapia Perinatal */}
          <div className="flex flex-col items-center text-center">
            <img 
              src={imgPerinatal} 
              alt="ayuda psicológica perinatal" 
              className="w-4/5 rounded-xl mb-6 object-cover aspect-video shadow-sm" 
            />
            <h3 className="text-2xl font-serif font-medium mb-4 text-[#2F4F3F]">
              Terapia perinatal
            </h3>
            <p className="mb-8 flex-grow">
              La terapia psicológica perinatal está diseñada para acompañarte antes, durante y después del embarazo. Juntas abordaremos tus desafíos emocionales y cambios. Te brindaré ayuda psicológica especializada. Mi objetivo es que te sientas preparada y segura en tu camino hacia la maternidad. Crearemos un espacio cercano y seguro. Aquí podrás explorar tus emociones y recibir el apoyo necesario.
            </p>
            <span className="bg-[#C8A57A] text-white py-3 px-8 rounded opacity-80 cursor-default">
              ¡Proximamente!
            </span>
          </div>
        </div>
      </section>

      {/* Proceso en Tres Pasos */}
      <section className="py-20 px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-center font-serif text-[#2F4F3F] mb-16 max-w-4xl mx-auto">
          Proceso para Comenzar vuestro Proceso de Ayuda Psicológica en Tres Pasos
        </h2>
        
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 max-w-7xl mx-auto">
          {/* Paso 1 */}
          <a 
            href="/contacto-terapeuta/" 
            className="flex-1 bg-[#F2E8D5] p-10 rounded-2xl flex flex-col items-start hover:shadow-lg transition-shadow cursor-pointer"
          >
            <div className="mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" preserveAspectRatio="xMidYMid meet">
                <g transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                  <path d="M245 631 c-92 -24 -173 -90 -215 -176 -33 -69 -34 -199 -2 -265 35 -71 75 -114 144 -151 58 -31 70 -34 148 -33 72 0 93 4 136 26 75 40 107 70 145 140 31 58 34 70 34 148 0 78 -3 90 -34 148 -57 104 -144 160 -260 167 -36 2 -79 1 -96 -4z m203 -50 c62 -31 118 -94 142 -157 87 -235 -139 -462 -373 -374 -107 40 -187 156 -187 270 0 113 78 228 183 269 68 28 173 24 235 -8z"></path>
                  <path d="M277 438 c-19 -7 -26 -15 -23 -25 3 -8 6 -19 6 -25 0 -6 11 -8 25 -6 l25 5 0 -98 0 -99 30 0 30 0 0 130 0 130 -32 -1 c-18 0 -46 -5 -61 -11z"></path>
                </g>
              </svg>
            </div>
            <h3 className="text-xl font-serif font-semibold mb-3 text-[#2F4F3F]">
              Rellena el formulario inicial
            </h3>
            <p className="text-base">
              Rellena el formulario de contacto para dar inicio a tus sesiones. Comparte algunos detalles sobre tu situación para que podamos empezar a conocerte.
            </p>
          </a>

          {/* Paso 2 */}
          <div className="flex-1 bg-[#F2E8D5] p-10 rounded-2xl flex flex-col items-start">
            <div className="mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" preserveAspectRatio="xMidYMid meet">
                <g transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                  <path d="M245 631 c-92 -24 -173 -90 -215 -176 -33 -69 -34 -199 -2 -265 35 -71 75 -114 144 -151 58 -31 70 -34 148 -33 72 0 93 4 136 26 75 40 107 70 145 140 31 58 34 70 34 148 0 78 -3 90 -34 148 -57 104 -144 160 -260 167 -36 2 -79 1 -96 -4z m203 -50 c62 -31 118 -94 142 -157 87 -235 -139 -462 -373 -374 -107 40 -187 156 -187 270 0 113 78 228 183 269 68 28 173 24 235 -8z"></path>
                  <path d="M256 429 c-14 -11 -26 -24 -26 -28 0 -13 49 -31 55 -21 8 13 52 13 60 0 8 -13 -9 -41 -69 -106 -68 -77 -64 -84 44 -84 89 0 90 0 90 25 0 23 -4 25 -40 25 -47 0 -49 8 -14 41 57 53 66 107 24 149 -27 27 -89 27 -124 -1z"></path>
                </g>
              </svg>
            </div>
            <h3 className="text-xl font-serif font-semibold mb-3 text-[#2F4F3F]">
              Llamada para conocernos mejor
            </h3>
            <p className="text-base">
              Te llamaré para comprender mejor tu situación y necesidades específicas. Esto garantizará que las sesiones que recibas seran personalizadas y efectivas.
            </p>
          </div>

          {/* Paso 3 */}
          <div className="flex-1 bg-[#F2E8D5] p-10 rounded-2xl flex flex-col items-start">
            <div className="mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" preserveAspectRatio="xMidYMid meet">
                <g transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                  <path d="M245 631 c-92 -24 -173 -90 -215 -176 -33 -69 -34 -199 -2 -265 35 -71 75 -114 144 -151 58 -31 70 -34 148 -33 72 0 93 4 136 26 75 40 107 70 145 140 31 58 34 70 34 148 0 78 -3 90 -34 148 -57 104 -144 160 -260 167 -36 2 -79 1 -96 -4z m203 -50 c62 -31 118 -94 142 -157 87 -235 -139 -462 -373 -374 -107 40 -187 156 -187 270 0 113 78 228 183 269 68 28 173 24 235 -8z"></path>
                  <path d="M230 425 c0 -23 3 -25 51 -25 l50 0 -25 -33 c-25 -32 -25 -35 -9 -49 10 -8 26 -18 36 -21 23 -9 22 -43 -3 -50 -10 -3 -27 1 -37 8 -12 9 -23 10 -40 2 -28 -13 -29 -21 -3 -47 28 -28 98 -27 134 1 37 29 37 89 -1 118 l-26 21 21 23 c12 13 22 35 22 50 l0 27 -85 0 c-84 0 -85 0 -85 -25z"></path>
                </g>
              </svg>
            </div>
            <h3 className="text-xl font-serif font-semibold mb-3 text-[#2F4F3F]">
              Agenda tu primera sesión
            </h3>
            <p className="text-base">
              Programa tu primera sesión en el horario que te resulte más conveniente. Juntos, comenzaremos tu camino hacia el bienestar con la ayuda que necesitas.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#C8A57A] py-14 px-6 mt-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8">
          <p className="text-xl md:text-2xl text-white font-sans text-center md:text-left">
            Reserva tu primera sesión ahora y empieza tu camino hacia el bienestar emocional
          </p>
          <a 
            href="/contacto-terapeuta/" 
            className="bg-[#C3D9C9] hover:bg-[#2F4F3F] hover:text-white text-[#000000] py-3 px-10 rounded-full font-medium transition-colors whitespace-nowrap"
          >
            ¡Empecemos!
          </a>
        </div>
      </section>

      {/* Talleres Section */}
      <section className="bg-[#C3D9C9] relative mt-[-2px] py-20 px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-center font-serif text-[#2F4F3F] mb-16">
          Talleres de ayuda Psicológica online
        </h2>
        
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 flex justify-center md:justify-end">
            <img 
              src={imgTalleres} 
              alt="ayuda psicológica" 
              className="w-full max-w-[550px] object-contain" 
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <p className="text-lg mb-8 text-black">
              Talleres online diseñados para brindarte ayuda. En cada taller, garantizamos un entorno seguro y cercano. En estos talleres podrás aprender y crecer emocionalmente. Únete a nosotros para recibir el apoyo y las herramientas que necesitas.
            </p>
            <span className="inline-block bg-[#C8A57A] text-white py-3 px-8 rounded opacity-80 cursor-default">
              ¡Proximamente!
            </span>
          </div>
        </div>
      </section>

    </div>
  );
};

export default TiposAyudaPsicologica;