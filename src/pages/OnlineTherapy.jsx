import React from 'react';
import FaqAccordion from '../components/FaqAccordion';
import { Helmet } from 'react-helmet-async';

// Imágenes (Ajusta las rutas a donde guardes tus imágenes)
import heroImg from '../assets/images/terapia-online-1.jpg';
import introImg from '../assets/images/terapia-online-2.jpg';

const OnlineTherapy = () => {
  // Array de preguntas específicas para Terapia Online
  const onlineFaqs = [
    {
      q: "¿Cómo funcionan mis sesiones de terapia psicológica online?",
      a: "Mis sesiones de terapia se realizan a través de videollamadas en una plataforma segura. Programamos una cita y nos conectamos desde tu dispositivo en el momento acordado. Las sesiones duran 1 hora y se desarrollan de manera similar a las presenciales, permitiéndote hablar y trabajar en tus preocupaciones desde la comodidad de tu hogar."
    },
    {
      q: "¿Qué problemas puedo tratar contigo en la terapia psicológica online?",
      a: "Puedo ayudarte a tratar una amplia variedad de problemas, como ansiedad, depresión, estrés, problemas de relación y sexualidad. Estoy capacitada para abordar diversas dificultades emocionales y psicológicas y adaptaré las sesiones online para proporcionarte el mismo nivel de apoyo y orientación que en las sesiones presenciales."
    },
    {
      q: "¿Es segura y confidencial la terapia contigo?",
      a: "Sí, la terapia que ofrezco es totalmente segura y confidencial. Utilizo plataformas de videollamadas encriptadas y cumplo con las normativas de privacidad y confidencialidad. Además, te recomiendo que encuentres un espacio privado durante nuestras sesiones para garantizar que tu conversación no sea escuchada por otros."
    },
    {
      q: "¿Qué hago si tengo problemas técnicos durante una sesión de terapia psicológica online?",
      a: "Si enfrentas problemas técnicos durante una de nuestras sesiones de terapia online, como una mala conexión a Internet, comunícamelo de inmediato. Tengo alternativas para afrontarlos, como continuar la sesión por teléfono o reprogramarla para otro momento. Mantener una comunicación abierta sobre estos problemas puede ayudar a minimizar las interrupciones."
    },
    {
      q: "¿Cómo puedo saber si soy el terapeuta adecuado para ti en la terapia?",
      a: "Para determinar si soy el terapeuta adecuado para ti, te ofrezco una consulta inicial. Durante esta consulta, podemos hablar sobre tus preocupaciones y objetivos, y ver si te sientes cómodo y seguro conmigo. La relación terapéutica es fundamental para el éxito de la terapia, así que es importante que te sientas a gusto conmigo."
    }
  ];

  return (
    <>
      <Helmet>
        {/* Meta Tag Manager */}
        <meta name="author" content="Lucía Morales Reos" />
        <meta name="publisher" content="Junio 2026" />
        <meta name="keywords" content="terapia online" />

        {/* Yoast SEO plugin */}
        <title>Terapia Psicológica Online - Lucía Morales Reos</title>
        <meta name="description" content="Descubre cómo la terapia psicológica online puede ayudarte a mejorar tu bienestar emocional desde tu hogar. Conéctate y recibe apoyo." />
        <link rel="canonical" href="/terapia-psicologica-online/" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Terapia Psicológica Online - Lucía Morales Reos" />
        <meta property="og:description" content="Descubre cómo la terapia psicológica online puede ayudarte a mejorar tu bienestar emocional desde tu hogar. Conéctate y recibe apoyo." />
        <meta property="og:url" content="/terapia-psicologica-online/" />
        <meta property="og:site_name" content="Lucía Morales Reos" />
        <meta property="article:modified_time" content="2025-06-18T14:02:24+00:00" />
        <meta property="og:image:width" content="2560" />
        <meta property="og:image:height" content="1709" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:label1" content="Tiempo de lectura" />
        <meta name="twitter:data1" content="3 minutos" />
      </Helmet>
      <div className="w-full flex flex-col min-h-screen">
        <main className="flex-grow">

          {/* 1. HERO SECTION */}
          <section className="bg-brand-primary py-16 px-6 flex items-center justify-center min-h-[85vh]">
            <div className="max-w-[1200px] w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
              <div className="flex-1 text-center lg:text-left">
                <h1 className="text-brand-tittle mb-6">Terapia Psicológica Online</h1>
                <p className="text-brand-text mb-10 leading-relaxed text-[18px]">
                  Descubre la comodidad y eficacia de la terapia psicológica online personalizada.
                  Con mi servicio de terapia, <strong>recibirás atención profesional desde la comodidad de tu hogar.</strong>
                  Confía en mí y en la terapia online para brindarte apoyo y orientación.
                </p>
                <a href="/contacto-terapeuta" className="inline-block bg-brand-orange hover:bg-brand-secondary text-brand-white px-10 py-3.5 rounded-full font-bold shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  ¡EMPECEMOS!
                </a>
              </div>
              <div className="flex-1 w-full flex justify-center lg:justify-end">
                <img src={heroImg} alt="Terapia Psicológica Online" className="w-full max-w-[500px] rounded-2xl shadow-xl object-cover" />
              </div>
            </div>
          </section>

          {/* 2. INTRO SECTION */}
          <section className="bg-brand-white py-24 px-6">
            <div className="max-w-[1200px] mx-auto">
              <h2 className="text-center text-brand-tittle mb-16 max-w-[800px] mx-auto">
                Terapia Psicológica Online: Encuentra Apoyo Profesional en la Comodidad de tu Hogar
              </h2>
              <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
                <div className="flex-1 text-brand-text space-y-6 text-[17px] leading-relaxed">
                  <p>La <strong>terapia psicológica online</strong> ofrece una experiencia de asesoramiento íntima y personalizada. Creamos un espacio seguro para explorar tus pensamientos y preocupaciones. Es una buena opción y efectiva para abordar tus desafíos, ofreciéndote apoyo profesional donde y cuando lo necesites.</p>
                  <p>Con un enfoque empático. Te ofrezco herramientas efectivas para enfrentar los desafíos de la vida diaria. <strong>Estoy aquí para guiarte en tu viaje hacia una vida más saludable mediante la terapia.</strong> Estés lidiando con ansiedad, depresión, estrés o problemas de relación.</p>
                </div>
                <div className="flex-1 w-full flex justify-center lg:justify-start">
                  <img src={introImg} alt="Psicóloga en sesión online" className="w-full max-w-[450px] rounded-2xl shadow-lg object-cover" />
                </div>
              </div>
            </div>
          </section>

          {/* 3. CTA BANNER */}
          <section className="bg-brand-orange py-14 px-6 flex items-center justify-center">
            <div className="max-w-[900px] flex flex-col items-center text-center gap-8">
              <p className="text-brand-white text-xl md:text-2xl font-semibold m-0 leading-snug">
                ¡Comienza Tu Viaje Hacia el Bienestar! Contáctame Hoy para Comenzar.
              </p>
              <a href="/contacto-terapeuta" className="inline-block bg-brand-secondary text-brand-white hover:bg-brand-dark px-10 py-3.5 rounded-full font-bold shadow-md transition-all duration-300 transform hover:-translate-y-1">
                ¡Empecemos!
              </a>
            </div>
          </section>

          {/* 4. REQUIREMENTS */}
          <section className="bg-brand-main/10 py-24 px-6 border-y border-brand-main/20">
            <div className="max-w-[1200px] mx-auto">
              <h3 className="text-center text-brand-tittle mb-16">Para comenzar terapia psicológica necesitarás:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

                <div className="bg-brand-white p-8 rounded-2xl shadow-sm text-center border border-brand-main/30 hover:shadow-md transition-shadow">
                  <svg className="w-12 h-12 fill-brand-orange mx-auto mb-6" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg"><path d="M634.91 154.88C457.74-8.99 182.19-8.93 5.09 154.88c-6.66 6.16-6.79 16.59-.35 22.98l34.24 33.97c6.14 6.1 16.02 6.23 22.4.38 145.92-133.68 371.3-133.71 517.25 0 6.38 5.85 16.26 5.71 22.4-.38l34.24-33.97c6.43-6.39 6.3-16.82-.36-22.98zM320 352c-35.35 0-64 28.65-64 64s28.65 64 64 64 64-28.65 64-64-28.65-64-64-64zm202.67-83.59c-115.26-101.93-290.21-101.82-405.34 0-6.9 6.1-7.12 16.69-.57 23.15l34.44 33.99c6 5.92 15.66 6.32 22.05.8 83.95-72.57 209.74-72.41 293.49 0 6.39 5.52 16.05 5.13 22.05-.8l34.44-33.99c6.56-6.46 6.33-17.06-.56-23.15z"></path></svg>
                  <p className="text-brand-text font-medium m-0">Tener una buena conexión a internet</p>
                </div>

                <div className="bg-brand-white p-8 rounded-2xl shadow-sm text-center border border-brand-main/30 hover:shadow-md transition-shadow">
                  <svg className="w-12 h-12 fill-brand-orange mx-auto mb-6" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg"><path d="M528 0H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h192l-16 48h-72c-13.3 0-24 10.7-24 24s10.7 24 24 24h272c13.3 0 24-10.7 24-24s-10.7-24-24-24h-72l-16-48h192c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-16 352H64V64h448v288z"></path></svg>
                  <p className="text-brand-text font-medium m-0">Dispositivo con cámara y micrófono</p>
                </div>

                <div className="bg-brand-white p-8 rounded-2xl shadow-sm text-center border border-brand-main/30 hover:shadow-md transition-shadow">
                  <svg className="w-12 h-12 fill-brand-orange mx-auto mb-6" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg"><path d="M633.82 458.1l-157.8-121.96C488.61 312.13 496 285.01 496 256v-48c0-8.84-7.16-16-16-16h-16c-8.84 0-16 7.16-16 16v48c0 17.92-3.96 34.8-10.72 50.2l-26.55-20.52c3.1-9.4 5.28-19.22 5.28-29.67V96c0-53.02-42.98-96-96-96s-96 42.98-96 96v45.36L45.47 3.37C38.49-2.05 28.43-.8 23.01 6.18L3.37 31.45C-2.05 38.42-.8 48.47 6.18 53.9l588.36 454.73c6.98 5.43 17.03 4.17 22.46-2.81l19.64-25.27c5.41-6.97 4.16-17.02-2.82-22.45zM400 464h-56v-33.77c11.66-1.6 22.85-4.54 33.67-8.31l-50.11-38.73c-6.71.4-13.41.87-20.35.2-55.85-5.45-98.74-48.63-111.18-101.85L144 241.31v6.85c0 89.64 63.97 169.55 152 181.69V464h-56c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16z"></path></svg>
                  <p className="text-brand-text font-medium m-0">Espacio privado y tranquilo</p>
                </div>

                <div className="bg-brand-white p-8 rounded-2xl shadow-sm text-center border border-brand-main/30 hover:shadow-md transition-shadow">
                  <svg className="w-12 h-12 fill-brand-orange mx-auto mb-6" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg"><path d="M519.2 127.9l-47.6-47.6A56.252 56.252 0 0 0 432 64H205.2c-14.8 0-29.1 5.9-39.6 16.3L118 127.9H0v255.7h64c17.6 0 31.8-14.2 31.9-31.7h9.1l84.6 76.4c30.9 25.1 73.8 25.7 105.6 3.8 12.5 10.8 26 15.9 41.1 15.9 18.2 0 35.3-7.4 48.8-24 22.1 8.7 48.2 2.6 64-16.8l26.2-32.3c5.6-6.9 9.1-14.8 10.9-23h57.9c.1 17.5 14.4 31.7 31.9 31.7h64V127.9H519.2zM48 351.6c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16c0 8.9-7.2 16-16 16zm390-6.9l-26.1 32.2c-2.8 3.4-7.8 4-11.3 1.2l-23.9-19.4-30 36.5c-6 7.3-15 4.8-18 2.4l-36.8-31.5-15.6 19.2c-13.9 17.1-39.2 19.7-55.3 6.6l-97.3-88H96V175.8h41.9l61.7-61.6c2-.8 3.7-1.5 5.7-2.3H262l-38.7 35.5c-29.4 26.9-31.1 72.3-4.4 101.3 14.8 16.2 61.2 41.2 101.5 4.4l8.2-7.5 108.2 87.8c3.4 2.8 3.9 7.9 1.2 11.3zm106-40.8h-69.2c-2.3-2.8-4.9-5.4-7.7-7.7l-102.7-83.4 12.5-11.4c6.5-6 7-16.1 1-22.6L367 167.1c-6-6.5-16.1-6.9-22.6-1l-55.2 50.6c-9.5 8.7-25.7 9.4-34.6 0-9.3-9.9-8.5-25.1 1.2-33.9l65.6-60.1c7.4-6.8 17-10.5 27-10.5l83.7-.2c2.1 0 4.1.8 5.5 2.3l61.7 61.6H544v128zm48 47.7c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16c0 8.9-7.2 16-16 16z"></path></svg>
                  <p className="text-brand-text font-medium m-0">Disposición y compromiso personal</p>
                </div>

              </div>
            </div>
          </section>

          {/* 5. STEPS */}
          <section className="bg-brand-white py-24 px-6">
            <div className="max-w-[1200px] mx-auto">
              <h3 className="text-center text-brand-tittle mb-16">Cómo Empezar tu Proceso Terapéutico en<br /> Tres Sencillos Pasos</h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-brand-primary text-brand-tittle text-2xl font-bold rounded-full flex items-center justify-center mb-6 border-4 border-brand-main">
                    1
                  </div>
                  <h4 className="text-brand-tittle text-xl mb-4 font-bold">Rellena el formulario</h4>
                  <p className="text-brand-text">Completa nuestro formulario de contacto para comenzar tus sesiones y cuéntanos un poco sobre tu situación.</p>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-brand-primary text-brand-tittle text-2xl font-bold rounded-full flex items-center justify-center mb-6 border-4 border-brand-main">
                    2
                  </div>
                  <h4 className="text-brand-tittle text-xl mb-4 font-bold">Llamada de conexión</h4>
                  <p className="text-brand-text">Te llamaremos para comprender tu situación y necesidades, asegurando que tu terapia online sea efectiva y personalizada.</p>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-brand-primary text-brand-tittle text-2xl font-bold rounded-full flex items-center justify-center mb-6 border-4 border-brand-main">
                    3
                  </div>
                  <h4 className="text-brand-tittle text-xl mb-4 font-bold">Primera sesión</h4>
                  <p className="text-brand-text">Agenda tu primera cita en un horario conveniente, y empieza tu camino hacia el bienestar conmigo.</p>
                </div>

              </div>
            </div>
          </section>

          {/* 6. CTA BANNER 2 */}
          <section className="bg-brand-orange py-14 px-6 flex items-center justify-center">
            <div className="max-w-[900px] flex flex-col items-center text-center gap-8">
              <p className="text-brand-white text-xl md:text-2xl font-semibold m-0 leading-snug">
                ¡Comienza Tu Viaje Hacia el Bienestar! Contáctame Hoy para Iniciar tu <strong>Terapia Psicológica Online.</strong>
              </p>
              <a href="/contacto-terapeuta" className="inline-block bg-brand-secondary text-brand-white hover:bg-brand-dark px-10 py-3.5 rounded-full font-bold shadow-md transition-all duration-300 transform hover:-translate-y-1">
                ¡Empecemos!
              </a>
            </div>
          </section>

          {/* 7. FAQ ACCORDION (USANDO EL COMPONENTE REUTILIZABLE) */}
          <FaqAccordion faqs={onlineFaqs} bgColor="bg-brand-primary" />

        </main>
      </div>
    </>
  );
};

export default OnlineTherapy;