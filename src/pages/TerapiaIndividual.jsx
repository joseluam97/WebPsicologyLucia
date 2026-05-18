import React from 'react';
import FaqAccordion from '../components/FaqAccordion';

// Imágenes de la página
import terapia_individual_1 from '../assets/images/terapia-individual-1.jpg'; 
import terapia_individual_2 from '../assets/images/terapia-individual-2.jpg';
import terapia_individual_3 from '../assets/images/terapia-individual-3.jpg';

import iconExplorar from '../assets/images/explora-emocion.svg';
import iconApoyo from '../assets/images/apoyo.svg';
import iconHabilidades from '../assets/images/afrontamiento.svg';
import iconAutoestima from '../assets/images/autoestima-y-confianza.svg';
import iconEstres from '../assets/images/estres.svg';
import iconConflictos from '../assets/images/resolucion-conflicto.svg';
import iconClaridad from '../assets/images/claridad-mental.svg';
import iconEmpoderamiento from '../assets/images/toma-decisiones.svg';

const TerapiaIndividual = () => {

  // ==========================================
  // 2. ASIGNA LOS SVGS IMPORTADOS AQUÍ
  // ==========================================
  const beneficios = [
    // Cambia el "null" por el nombre del icono que importaste arriba, ejemplo: icon: iconExplorar
    { id: 1, titulo: "Exploras tus problemas", icon: iconExplorar },
    { id: 2, titulo: "Apoyo emocional en momentos difíciles", icon: iconApoyo },
    { id: 3, titulo: "Desarrollo de habilidades de afrontamiento", icon: iconHabilidades },
    { id: 4, titulo: "Mejora de la autoestima y confianza.", icon: iconAutoestima },
    { id: 5, titulo: "Reducción del estrés y ansiedad", icon: iconEstres },
    { id: 6, titulo: "Resolución de conflictos internos", icon: iconConflictos },
    { id: 7, titulo: "Claridad mental y emocional", icon: iconClaridad },
    { id: 8, titulo: "Empoderamiento para la toma decisiones", icon: iconEmpoderamiento }
  ];

  const individualFaqs = [
    {
      q: "¿Cuánto tiempo dura cada sesión en terapia?",
      a: "Las sesiones conmigo pueden variar según la que escojas pero la estándar tiene una duración de 1 hora completa."
    },
    {
      q: "¿Cada cuánto tiempo tengo que ir a las sesiones?",
      a: "La frecuencia varía según el por qué asistes, tus circunstancias personales y económicas y más variables que vemos una vez que hemos tenido la primera sesión."
    },
    {
      q: "¿Cuánto tiempo tengo que estar en terapia?",
      a: "La duración del proceso es personal y depende de la persona y del por qué de asistir. Para algunos dura muy poco, para otros un poco más."
    },
    {
      q: "¿Qué tipo de problemas puedo tratarme en la terapia individual?",
      a: "Podemos abordar una gran variedad de problemas desde la ansiedad, problemas de relación, el duelo, problemas emocionales o sexuales."
    },
    {
      q: "¿Es confidencial lo que se habla en las sesiones?",
      a: "¡Por supuesto! Todo lo que se habla está protegido bajo un contrato de confidencialidad que se firma antes de comenzar las sesiones así que no te preocupes, todo queda en sesión."
    },
    {
      q: "¿Qué hago si siento que no mejoro?",
      a: "Es importante comunicarlo en las sesiones, podría ser necesario cambiar el enfoque de la sesión, puede que no estuviéramos mirando hacia el lado adecuado."
    }
  ];

  const CtaBanner = ({ text }) => (
    <section className="bg-brand-orange py-12 px-6 flex items-center justify-center">
      <div className="max-w-[900px] w-full flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        <h3 className="text-white text-2xl m-0 flex-1 font-semibold">{text}</h3>
        <a href="/contacto" className="bg-brand-secondary text-white px-10 py-3 rounded-full font-bold hover:bg-brand-dark transition-all transform hover:-translate-y-1 shadow-md">
          ¡Empecemos!
        </a>
      </div>
    </section>
  );

  return (
    <div className="w-full bg-brand-white">
      <main>
        
        {/* HERO SECTION */}
        <section className="bg-brand-primary py-16 px-6 min-h-[80vh] flex items-center justify-center">
          <div className="max-w-[1200px] w-full flex flex-col items-center text-center gap-10">
            <img 
              src={terapia_individual_1}
              alt="Terapia individual" 
              className="w-full max-w-[600px] rounded-3xl shadow-2xl object-cover h-[350px]"
            />
            <div className="max-w-[900px] space-y-6">
              <h1 className="text-brand-tittle">Terapia Individual: Apoyo Personalizado para tu Bienestar</h1>
              <p className="text-brand-text text-lg leading-relaxed">
                La terapia individual se adapta específicamente a tus necesidades y circunstancias únicas. 
                Estoy dedicada a brindarte un espacio seguro y de apoyo donde trabajaremos juntas para identificar 
                y abordar las áreas clave de tu vida.
              </p>
              <p className="text-brand-text text-lg leading-relaxed">
                Utilizando un enfoque integrador y estrategias efectivas, te ayudaré a alcanzar tus objetivos 
                de desarrollo personal y conseguir una mayor satisfacción en tu día a día.
              </p>
            </div>
          </div>
        </section>

        {/* CTA BANNER 1 */}
        <CtaBanner text="¿Necesitas Apoyo? Agenda tu Sesión de Terapia Aquí" />

        {/* SECTION: COMO AYUDA */}
        <section className="py-24 px-6 bg-brand-white">
          <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 space-y-6">
              <h2 className="text-brand-tittle">Descubre cómo puede ayudarte la terapia</h2>
              <h3 className="text-brand-orange text-2xl font-bold">¿Por qué es importante?</h3>
              <p className="text-brand-text leading-relaxed">
                La terapia individual ofrece un espacio seguro y confidencial donde puedes explorar tus pensamientos 
                y emociones. A través de técnicas personalizadas, te ayudo a comprender mejor tu mundo interior 
                y a desarrollar habilidades de afrontamiento saludables.
              </p>
              <p className="text-brand-text leading-relaxed">
                Es un proceso que te empodera para enfrentar los desafíos de la vida, promoviendo un crecimiento 
                personal que te permite vivir de manera más plena y satisfactoria.
              </p>
            </div>
            <div className="flex-1">
              <img src={terapia_individual_2} alt="Sesión de terapia" className="rounded-2xl shadow-xl w-full object-cover" />
            </div>
          </div>
        </section>

        {/* SECTION: BENEFICIOS (NUEVO DISEÑO CON ICONOS SUPERPUESTOS) */}
        {/* Fondo del contenedor igual al de la imagen (verde suave) */}
        <section className="bg-[#d2e0d5] py-28 px-6">
          <div className="max-w-[1200px] mx-auto">
            {/* Margen inferior ampliado (gap-y-16) para dar espacio al icono superpuesto de las tarjetas de abajo */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16">
              {beneficios.map((item) => (
                // relative es clave aquí para poder "romper" el borde con el icono
                <div 
                  key={item.id} 
                  className="relative border border-brand-orange rounded-3xl p-6 pt-10 pb-6 flex flex-col items-center justify-center text-center min-h-[120px]"
                >
                  {/* CÍRCULO NARANJA SUPERPUESTO */}
                  <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 w-14 h-14 bg-brand-orange rounded-full flex items-center justify-center shadow-md border-[3px] border-[#d2e0d5]">
                    
                    {/* Renderizamos el SVG si existe, si no, ponemos un icono por defecto temporal */}
                    {item.icon ? (
                      <img src={item.icon} alt={item.titulo} className="w-7 h-7 object-contain" />
                    ) : (
                      <span className="text-brand-dark text-xs">SVG</span>
                    )}

                  </div>
                  
                  {/* TEXTO DEL BENEFICIO */}
                  <p className="text-brand-tittle font-medium m-0 leading-snug">
                    {item.titulo}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA BANNER 2 */}
        <CtaBanner text="¿Necesitas Apoyo? Agenda tu Sesión Aquí" />

        {/* SECTION: EFICACIA */}
        <section className="py-24 px-6 bg-brand-white">
          <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row-reverse items-center gap-16">
            <div className="flex-1 space-y-6 lg:text-right">
              <h2 className="text-brand-tittle leading-tight">¿La terapia individual funciona?</h2>
              <p className="text-brand-text leading-relaxed">
                Ha demostrado ser altamente eficaz en una amplia gama de dificultades emocionales y relacionales. 
                Al proporcionar un espacio seguro, las personas logran desarrollar una mayor comprensión de sí mismas 
                y aprender herramientas duraderas.
              </p>
              <p className="text-brand-text leading-relaxed">
                No es solo un alivio a corto plazo de los síntomas, sino que fomenta un crecimiento personal 
                que impacta directamente en tu autoestima y satisfacción general con la vida.
              </p>
            </div>
            <div className="flex-1">
              <img src={terapia_individual_3} alt="Eficacia de la terapia" className="rounded-2xl shadow-xl w-full object-cover" />
            </div>
          </div>
        </section>

        {/* SECTION: FAQ */}
        <FaqAccordion faqs={individualFaqs} bgColor="bg-[#d2e0d5]" />

        {/* CTA BANNER 3 */}
        <CtaBanner text="¡Comienza Tu Viaje Hacia el Bienestar! Agenda hoy tu sesión." />

      </main>
    </div>
  );
};

export default TerapiaIndividual;