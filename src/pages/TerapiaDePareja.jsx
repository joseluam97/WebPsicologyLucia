import React from 'react';
import { Link } from 'react-router-dom';
import FaqAccordion from '../components/FaqAccordion'; // Importamos el componente de FAQs
import { Helmet } from 'react-helmet-async';

// Imágenes de la página
import terapia_pareja_1 from '../assets/images/terapia-de-pareja-1.jpg';
import terapia_pareja_2 from '../assets/images/terapia-de-pareja-2.jpg';
import terapia_pareja_3 from '../assets/images/terapia-de-pareja-3.jpg';

// SVGs de los beneficios
import imagen_1 from '../assets/images/comunicacion-de-pareja.svg';
import imagen_2 from '../assets/images/resolucion-de-conflictos.svg';
import imagen_3 from '../assets/images/comprension-de-pareja.svg';
import imagen_4 from '../assets/images/aprender-en-pareja.svg';
import imagen_5 from '../assets/images/fortalecer-el-vinculo.svg';
import imagen_6 from '../assets/images/patrones-negativos.svg';
import imagen_7 from '../assets/images/crecimiento-personal.svg';
import imagen_8 from '../assets/images/autoconocimiento.svg';

// Array de datos para los beneficios con sus respectivos SVGs asignados
const beneficios = [
  { text: "Mejoraréis la comunicación en pareja", imagen_text: imagen_1 },
  { text: "Resolveréis conflictos constructivamente", imagen_text: imagen_2 },
  { text: "Fomentaréis la comprensión mutua", imagen_text: imagen_3 },
  { text: "Aprenderéis nuevas habilidades juntos", imagen_text: imagen_4 },
  { text: "Fortaleceréis el vínculo emocional", imagen_text: imagen_5 },
  { text: "Identificaréis patrones negativos", imagen_text: imagen_6 },
  { text: "Fomentaréis el crecimiento personal", imagen_text: imagen_7 },
  { text: "Aumentaréis el autoconocimiento", imagen_text: imagen_8 },
];

const faqs = [
  { q: "¿Cuándo deberíamos empezar a considerar mi pareja y yo la terapia de pareja?", a: "La sesiones en pareja pueden ser útiles o necesarias en diversas situaciones. Así como pueden ser la comunicación o conflictos frecuentes. También muchos otros como infidelidades y/o problemas sexuales. Es decir, todo lo que os cree un malestar en la pareja." },
  { q: "¿Qué pasa durante una sesión de terapia de pareja presencial?", a: "En una sesión, generalmente facilitamos una discussion abierta entre los miembros de la pareja. Ayudándoles así a expresar sus sentimientos y preocupaciones. También a identificar patrones de comportamiento problemáticos y trabajar en soluciones. De esta manera aprendereis a llegar a acuerdos entre ambos." },
  { q: "¿La terapia de pareja presencial funciona?", a: "Generalmente muchas de las parejas encuentran mejoría en su relación. Aunque muchos factores influyen en esto como el compromiso de las dos partes de la pareja en el proceso." },
  { q: "¿Qué pasa si uno de los dos no quiere asistir a la terapia?", a: "Es ideal que ambos miembros de la pareja estén dispuestos a participar. Si uno de los dos se muestra reacio, es importante discutir las razones. Y tratar de abordar esas preocupaciones antes de tomar una decisión." },
  { q: "¿La terapia de pareja presencial puede ayudar aunque nos estemos planteando separarnos?", a: "Sí, las sesiones de pareja puede ser útil incluso si estáis pensando separaros. Puede ayudaros a tomar decisiones y a entender si la relación puede ser salvada o cómo separarse de manera más amigable." }
];

// Componente reutilizable local para los banners de acción (Fondo Naranja)
const CTABanner = () => (
  <section className="bg-brand-orange py-12 px-6 flex items-center justify-center">
    <div className="max-w-[900px] w-full flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
      <p className="text-white text-xl md:text-2xl m-0 flex-1 font-semibold">
        ¿Listos para Empezar? Agendad vuestra primera sesión ahora
      </p>
      <Link
        to="/contacto-terapeuta"
        className="bg-brand-secondary text-white px-10 py-3 rounded-full font-bold hover:bg-brand-dark transition-all transform hover:-translate-y-1 shadow-md whitespace-nowrap"
      >
        ¡Empecemos!
      </Link>
    </div>
  </section>
);

export default function TerapiaDePareja() {
  return (
    <>
      <Helmet>
        <meta name="author" content="Lucía Morales Reos" />
        <meta name="publisher" content="Junio 2026" />
        <meta name="keywords" content="terapia de pareja en Cadiz" />
        <title>Terapia de Pareja - Lucía Morales Reos</title>
        <meta name="description" content="La terapia de pareja tiene muchos objetivos, entre otros, podréis mejorar la comunicación y resolver conflictos de manera efectiva." />
        <link rel="canonical" href="/terapia-de-pareja/" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Terapia de Pareja - Lucía Morales Reos" />
        <meta property="og:description" content="La terapia de pareja tiene muchos objetivos, entre otros, podréis mejorar la comunicación y resolver conflictos de manera efectiva." />
        <meta property="og:url" content="/terapia-de-pareja/" />
        <meta property="og:site_name" content="Lucía Morales Reos" />
        <meta property="article:modified_time" content="2026-06-22T10:17:15+00:00" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:label1" content="Tiempo de lectura" />
        <meta name="twitter:data1" content="5 minutos" />
        </Helmet>

        <div className="w-full bg-brand-white">
          <main>

            {/* --- 1. SECCIÓN HERO --- */}
            <section className="bg-brand-primary py-16 px-6 min-h-[85vh] flex items-center justify-center">
              <div className="max-w-[1200px] w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
                <div className="flex-1 w-full flex justify-center lg:justify-start">
                  <img
                    src={terapia_pareja_1}
                    alt="Terapia de pareja"
                    className="w-full max-w-[500px] rounded-2xl shadow-xl object-cover h-[380px]"
                  />
                </div>
                <div className="flex-1 text-center lg:text-left space-y-6">
                  <h1 className="text-brand-tittle">
                    Terapia de Pareja: Mejora y Fortalece tu Relación
                  </h1>
                  <p className="text-brand-text text-[18px] leading-relaxed">
                    La terapia de pareja tiene muchos objetivos, entre otros, podréis mejorar la comunicación y resolver conflictos de manera efectiva. El espacio que creamos es un lugar seguro para expresar sentimientos y necesidades. De esta manera os ayudo a tu pareja y a ti a reconectar y fortalecer vuestra unión.
                  </p>
                  <p className="text-brand-text text-[18px] leading-relaxed">
                    A través de un enfoque integrador os guiaré en este proceso para solucionar problemas actuales y prevenir futuros conflictos, promoviendo un entendimiento mutuo y una conexión emocional más profunda en cada paso del camino.
                  </p>
                </div>
              </div>
            </section>

            <CTABanner />

            {/* --- 2. SECCIÓN IMPORTANCIA (Split Layout Alternado) --- */}
            <section className="py-24 px-6 bg-brand-white">
              <div className="max-w-[1200px] mx-auto space-y-16">
                <h2 className="text-center text-brand-tittle max-w-[950px] mx-auto leading-tight">
                  ¿Creéis que no os está yendo bien? La terapia de pareja os proporcionará herramientas para mejorar vuestro vínculo emocional.
                </h2>
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                  <div className="flex-1 space-y-6">
                    <h3 className="text-brand-orange text-2xl font-bold">¿Por qué es importante?</h3>
                    <p className="text-brand-text leading-relaxed text-[17px]">
                      La terapia de pareja sirve para buscar los puntos fuertes y débiles de la relación para construir un vínculo más sano y fuerte. Aprenderéis estrategias para superar problemas recurrentes y fortalecer la conexión en un lugar donde las dos personas pueden expresarse abiertamente y sin juicios.
                    </p>
                    <p className="text-brand-text leading-relaxed text-[17px]">
                      Además, ayuda a reconstruir la confianza y proporciona herramientas para manejar el estrés y las tensiones del día a día, creando un ambiente de respeto, apoyo mutuo y armonía duradera.
                    </p>
                  </div>
                  <div className="flex-1 w-full flex justify-center lg:justify-end">
                    <img
                      src={terapia_pareja_2}
                      alt="Terapeuta escuchando a pareja"
                      className="w-full max-w-[500px] rounded-2xl shadow-lg object-cover"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* --- 3. SECCIÓN BENEFICIOS (Diseño con iconos superpuestos) --- */}
            <section className="bg-[#d2e0d5] py-28 px-6 border-y border-brand-main/20">
              <div className="max-w-[1200px] mx-auto">
                <h2 className="text-center text-brand-tittle mb-20 font-semibold">
                  Beneficios de la terapia de pareja
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16">
                  {beneficios.map((ben, idx) => (
                    <div
                      key={idx}
                      className="relative bg-transparent border border-brand-orange rounded-3xl p-6 pt-10 pb-6 flex flex-col items-center justify-center text-center min-h-[120px]"
                    >
                      {/* Círculo naranja superpuesto en el borde superior */}
                      <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 w-14 h-14 bg-brand-orange rounded-full flex items-center justify-center shadow-md border-[3px] border-[#d2e0d5]">
                        <img
                          src={ben.imagen_text}
                          alt={ben.text}
                          className="w-7 h-7 object-contain"
                        />
                      </div>
                      <p className="text-brand-tittle font-medium m-0 leading-snug">
                        {ben.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <CTABanner />

            {/* --- 4. SECCIÓN EFICACIA --- */}
            <section className="py-24 px-6 bg-brand-white">
              <div className="max-w-[1200px] mx-auto space-y-16">
                <h2 className="text-center text-brand-tittle max-w-[900px] mx-auto leading-tight">
                  ¿La Terapia de Pareja Funciona? Descubre su Eficacia y Beneficios
                </h2>
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                  <div className="flex-1 w-full flex justify-center lg:justify-start">
                    <img
                      src={terapia_pareja_3}
                      alt="Pareja abrazada"
                      className="w-full max-w-[500px] rounded-2xl shadow-lg object-cover"
                    />
                  </div>
                  <div className="flex-1 space-y-6">
                    <p className="text-brand-text leading-relaxed text-[17px]">
                      La terapia de pareja ha demostrado ser altamente efectiva en mejorar la comunicación y fortalecer los lazos relacionales. Permite identificar y abordar los conflictos aprendiendo nuevas habilidades colectivas.
                    </p>
                    <p className="text-brand-text leading-relaxed text-[17px]">
                      Proporciona un espacio seguro y de apoyo orientado a construir una base sólida, promoviendo una conexión emocional más profunda. En última instancia, la eficacia radica en el compromiso mutuo de trabajar hacia un objetivo común: una relación más saludable y satisfactoria.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* --- 5. SECCIÓN TRES PASOS --- */}
            <section className="bg-brand-main/10 py-24 px-6 border-t border-brand-main/20">
              <div className="max-w-[1200px] mx-auto">
                <h2 className="text-center text-brand-tittle mb-16">
                  Cómo Empezar vuestro Proceso Terapéutico en Tres Sencillos Pasos
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-brand-primary text-brand-tittle text-2xl font-bold rounded-full flex items-center justify-center mb-6 border-4 border-brand-main shadow-sm">
                      1
                    </div>
                    <h4 className="text-brand-tittle text-xl mb-4 font-bold">Rellena el formulario inicial</h4>
                    <p className="text-brand-text">Completen el formulario de contacto para comenzar vuestras sesiones. Cuéntenme un poco sobre su situación.</p>
                  </div>

                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-brand-primary text-brand-tittle text-2xl font-bold rounded-full flex items-center justify-center mb-6 border-4 border-brand-main shadow-sm">
                      2
                    </div>
                    <h4 className="text-brand-tittle text-xl mb-4 font-bold">Llamada de conexión</h4>
                    <p className="text-brand-text">Recibirán una llamada para entender su situación y necesidades. Esto asegurará que su terapia de pareja sea efectiva y personalizada.</p>
                  </div>

                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-brand-primary text-brand-tittle text-2xl font-bold rounded-full flex items-center justify-center mb-6 border-4 border-brand-main shadow-sm">
                      3
                    </div>
                    <h4 className="text-brand-tittle text-xl mb-4 font-bold">Programen su primera sesión</h4>
                    <p className="text-brand-text">Agenden su primera cita en un horario conveniente. Comiencen juntos su camino hacia el bienestar.</p>
                  </div>

                </div>
              </div>
            </section>

            <CTABanner />

            {/* --- 6. SECCIÓN FAQ (Llamada al componente reutilizable) --- */}
            <FaqAccordion faqs={faqs} bgColor="bg-[#d2e0d5]" />

          </main>
        </div>
      </>
      );
}