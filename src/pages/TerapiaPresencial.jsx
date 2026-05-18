import React from 'react';
import FaqAccordion from '../components/FaqAccordion'; // Importamos el componente reutilizable

import img1 from '../assets/images/psicologo-en-cadiz-1.jpg';
import img2 from '../assets/images/psicologo-en-cadiz-2.jpg';
import img3 from '../assets/images/psicologo-en-cadiz-3.jpg';

// --- DATA ---
const faqs = [
  {
    q: "¿Cuánto tiempo dura cada sesión en terapia?", // Cambiado 'question' por 'q' para coincidir con tu FaqAccordion
    a: "Las sesiones conmigo pueden variar según la que escojas pero la estándar tiene una duración de 1 hora completa." // Cambiado 'answer' por 'a'
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
    q: "¿Qué problemas puedes abordar con un psicólogo en Cádiz?",
    a: "Podemos abordar una gran variedad de problemas desde la ansiedad, problemas de relación, el duelo, problemas emocionales o sexuales."
  },
  {
    q: "¿Es confidencial lo que se habla en las sesiones?",
    a: "¡Por su puesto! Todo lo que se habla está protegido bajo un contrato de confidencialidad que se firma antes de comenzar las sesiones así que no te preocupes, todo queda en sesión."
  },
  {
    q: "¿Qué hago si siento que no mejoro?",
    a: "Es importante comunicarlo en las sesiones, podría ser necesario cambiar el enfoque de la sesión, puede que no estuviéramos mirando hacia el lado adecuado."
  }
];

const beneficios = [
  "Exploras tus problemas",
  "Apoyo emocional en momentos difíciles",
  "Desarrollo de habilidades de afrontamiento",
  "Mejora de la autoestima y confianza.",
  "Resolución de conflictos internos",
  "Reducción del estrés y ansiedad",
  "Empoderamiento para la toma decisiones",
  "Claridad mental y emocional"
];

// --- COMPONENTE SECUNDARIO LOCAL (Para no repetir código) ---
const CtaBanner = ({ text }) => (
  <section className="bg-brand-orange py-14 px-6 flex items-center justify-center">
    <div className="max-w-[900px] flex flex-col items-center text-center gap-8">
      <p className="text-brand-white text-xl md:text-2xl font-semibold m-0 leading-snug">
        {text}
      </p>
      <a href="/contacto-terapeuta/" className="inline-block bg-brand-secondary text-brand-white hover:bg-brand-dark px-10 py-3.5 rounded-full font-bold shadow-md transition-all duration-300 transform hover:-translate-y-1">
        ¡Empecemos!
      </a>
    </div>
  </section>
);

// --- COMPONENTE PRINCIPAL ---
export default function TerapiaPresencial() {
  return (
    <div className="w-full flex flex-col min-h-screen">
      <main className="flex-grow">

        {/* 1. HEADER / HERO SECTION */}
        <section className="bg-brand-primary py-16 px-6 flex items-center justify-center min-h-[85vh]">
          <div className="max-w-[1200px] w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
            <div className="flex-1 text-center lg:text-left space-y-6">
              <h1 className="text-brand-tittle">
                Psicólogo en Cádiz: Encuentra el Apoyo para tu Bienestar
              </h1>
              <p className="text-brand-text leading-relaxed text-[18px]">
                El psicólogo en Cádiz ajusta su enfoque a tus necesidades y situaciones personales.
                Estoy comprometida a ofrecerte un entorno de confianza y apoyo.
              </p>
              <p className="text-brand-text leading-relaxed text-[18px]">
                Colaboraremos para reconocer y enfrentar las áreas clave de tu vida. Utilizaremos
                un enfoque integral y técnicas eficaces para ayudarte. De esta manera lograras
                tus metas de bienestar y crecimiento personal.
              </p>
            </div>
            <div className="flex-1 w-full flex justify-center lg:justify-end">
              <img
                src={img1}
                alt="psicólogo en cádiz"
                className="w-full max-w-[500px] rounded-2xl shadow-xl object-cover"
              />
            </div>
          </div>
        </section>

        {/* 2. FIRST CTA */}
        <CtaBanner text="¿Buscas ayuda? Reserva tu sesión con un terapeuta aquí." />

        {/* 3. WHY IS IT IMPORTANT SECTION */}
        {/* Usamos flex-row-reverse para alternar la imagen a la izquierda */}
        <section className="bg-brand-white py-24 px-6">
          <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row-reverse items-center justify-between gap-12 lg:gap-20">
            <div className="flex-1 text-center lg:text-left space-y-6">
              <h2 className="text-brand-tittle leading-tight">
                Descubre cómo el apoyo de un psicólogo en Cádiz puede impactar positivamente tu vida.
              </h2>
              <h3 className="text-brand-orange text-2xl font-bold">
                ¿Por qué es importante?
              </h3>
              <p className="text-brand-text leading-relaxed text-[17px]">
                Con el psicólogo en Cádiz, tendrás un espacio seguro y confidencial. Podrás explorar
                tus pensamientos, emociones y sentimientos. Utilizando técnicas personalizadas,
                te acompañaré en el proceso. Para que comprendas mejor tu mundo interior y desarrolles
                nuevas habilidades.
              </p>
              <p className="text-brand-text leading-relaxed text-[17px]">
                Con el acompañamiento de un psicólogo en Cádiz, podrás enfrentar desafíos específicos.
                Podras trabajar en tu crecimiento personal. Descubriras maneras de mejorar tu bienestar
                emocional y mental.
              </p>
            </div>
            <div className="flex-1 w-full flex justify-center lg:justify-start">
              <img
                src={img2}
                alt="psicóloga consulta"
                className="w-full max-w-[500px] rounded-2xl shadow-lg object-cover"
              />
            </div>
          </div>
        </section>

        {/* 4. HOW CAN IT HELP / BENEFITS GRID */}
        <section className="bg-brand-main/10 py-24 px-6 border-y border-brand-main/20">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-center text-brand-tittle mb-16">
              Cómo un psicólogo en Cádiz puede ayudarte
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {beneficios.map((beneficio, index) => (
                <div
                  key={index}
                  className="bg-brand-white p-8 rounded-2xl shadow-sm text-center border border-brand-main/30 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-brand-orange text-brand-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-sm">
                    ✓
                  </div>
                  <p className="text-brand-text font-medium m-0 leading-snug">
                    {beneficio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. EFFICACY SECTION */}
        {/* Imagen a la izquierda, texto a la derecha (orden natural flex-row) */}
        <section className="bg-brand-white py-24 px-6">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-center text-brand-tittle mb-16 max-w-[900px] mx-auto leading-tight">
              ¿Funciona el trabajo con un psicólogo en Cádiz? Descubre su efectividad y los beneficios que puede ofrecerte.
            </h2>
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
              <div className="flex-1 w-full flex justify-center lg:justify-start">
                <img
                  src={img3}
                  alt="terapia efectiva"
                  className="w-full max-w-[400px] rounded-2xl shadow-lg object-cover"
                />
              </div>
              <div className="flex-1 text-center lg:text-left space-y-6">
                <p className="text-brand-text leading-relaxed text-[17px]">
                  El psicólogo en Cádiz ha demostrado ser muy eficaz en tratar multitud de problemas.
                  Problemas emocionales, psicológicos y relacionales. Con un enfoque personalizado y
                  centrado en ti. Te ofrezco un espacio seguro.
                </p>
                <p className="text-brand-text leading-relaxed text-[17px]">
                  Puedes experimentar mejoras significativas en tu bienestar emocional. Trabajar con un
                  psicólogo en Cádiz no solo proporciona alivio a corto plazo de los síntomas. Ademas,
                  también fomenta un crecimiento personal duradero.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. FAQ SECTION (USANDO EL COMPONENTE REUTILIZABLE) */}
        <FaqAccordion faqs={faqs} bgColor="bg-brand-primary" />

        {/* 7. FINAL CTA */}
        <CtaBanner text="¡Comienza Tu Viaje Hacia el Bienestar! Contáctame Hoy para Iniciar tu Terapia Presencial." />

      </main>
    </div>
  );
}