import React from 'react';
import { Helmet } from 'react-helmet-async';

// Imágenes de la página (Ajusta las rutas y nombres a los de tu proyecto)
import consulta_psicologia_1 from '../assets/images/terapia-de-pareja-1.jpg';
import consulta_psicologia_2 from '../assets/images/consulta-de-psicologia.webp'; 

// Iconos (Puedes reutilizar los que ya tienes importados en tu proyecto)
import iconAnsiedad from '../assets/images/estres.svg';
import iconAutoestima from '../assets/images/autoestima-y-confianza.svg';
import iconCrecimiento from '../assets/images/toma-decisiones.svg';

const ConsultaPsicologia = () => {

  // ==========================================
  // BENEFICIOS (Contenido extraído de tu HTML original)
  // ==========================================
  const beneficios = [
    { 
      id: 1, 
      titulo: "Gestión de la Ansiedad", 
      descripcion: "Aprende herramientas prácticas para reducir el estrés y recuperar el control de tu día a día.",
      icon: iconAnsiedad 
    },
    { 
      id: 2, 
      titulo: "Autoestima", 
      descripcion: "Fortalece la relación contigo mismo, fomentando la seguridad personal y el amor propio.",
      icon: iconAutoestima 
    },
    { 
      id: 3, 
      titulo: "Crecimiento Personal", 
      descripcion: "Encuentra tu propósito y desarrolla habilidades para afrontar los retos vitales con resiliencia.",
      icon: iconCrecimiento 
    }
  ];

  // Componente interno reutilizado de TerapiaIndividual
  const CtaBanner = ({ text }) => (
    <section className="bg-brand-orange py-12 px-6 flex items-center justify-center">
      <div className="max-w-[900px] w-full flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        <h3 className="text-white text-2xl m-0 flex-1 font-semibold">{text}</h3>
        <a href="/contacto-terapeuta" className="bg-brand-secondary text-white px-10 py-3 rounded-full font-bold hover:bg-brand-dark transition-all transform hover:-translate-y-1 shadow-md">
          ¡Empecemos!
        </a>
      </div>
    </section>
  );

  return (
    <>
      <Helmet>
        {/* Meta Tag Manager */}
        <meta name="author" content="Lucía Morales Reos" />
        <meta name="publisher" content="Julio 2024" />
        <meta name="keywords" content="consulta de psicologia" />

        {/* Yoast SEO plugin */}
        <title>Consulta de Psicologia - Lucía Morales Reos</title>
        <meta name="description" content="Consulta de psicologia: Recibe apoyo en un entorno seguro y cercano. Sesiones diseñadas para tu bienestar emocional y crecimiento personal." />
        <link rel="canonical" href="/consulta-de-psicologia/" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Consulta de Psicologia - Lucía Morales Reos" />
        <meta property="og:description" content="Consulta de psicologia: Recibe apoyo en un entorno seguro y cercano. Sesiones diseñadas para tu bienestar emocional y crecimiento personal." />
        <meta property="og:url" content="/consulta-de-psicologia/" />
        <meta property="og:site_name" content="Lucía Morales Reos" />
        
        {/* NOTA: Puedes incluir aquí el <script> del Schema.org si lo necesitas */}
      </Helmet>

      <div className="w-full bg-brand-white">
        <main>

          {/* HERO SECTION */}
          <section className="bg-brand-primary py-16 px-6 min-h-[80vh] flex items-center justify-center">
            <div className="max-w-[1200px] w-full flex flex-col items-center text-center gap-10">
              <img
                src={consulta_psicologia_1}
                alt="Consulta de Psicología"
                className="w-full max-w-[600px] rounded-3xl shadow-2xl object-cover h-[350px]"
              />
              <div className="max-w-[900px] space-y-6">
                <h1 className="text-brand-tittle">Consulta de Psicología</h1>
                <p className="text-brand-text text-lg leading-relaxed">
                  Recibe apoyo en un entorno seguro y cercano. Sesiones diseñadas para tu bienestar emocional y crecimiento personal.
                </p>
              </div>
            </div>
          </section>

          {/* CTA BANNER 1 */}
          <CtaBanner text="¿Damos el primer paso juntos? Reserva tu primera sesión de evaluación." />

          {/* SECTION: BENEFICIOS (Diseño con iconos superpuestos) */}
          <section className="bg-[#d2e0d5] py-28 px-6">
            <div className="max-w-[1200px] mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-brand-tittle">¿Cómo puede ayudarte la terapia?</h2>
              </div>
              
              {/* Adaptado a 3 columnas para los 3 beneficios extraídos del HTML */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
                {beneficios.map((item) => (
                  <div
                    key={item.id}
                    className="relative border border-brand-orange rounded-3xl p-6 pt-12 pb-8 flex flex-col items-center text-center min-h-[160px] bg-brand-white"
                  >
                    {/* CÍRCULO NARANJA SUPERPUESTO */}
                    <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 w-14 h-14 bg-brand-orange rounded-full flex items-center justify-center shadow-md border-[3px] border-[#d2e0d5]">
                      {item.icon ? (
                        <img src={item.icon} alt={item.titulo} className="w-7 h-7 object-contain" />
                      ) : (
                        <span className="text-brand-dark text-xs">SVG</span>
                      )}
                    </div>

                    {/* TEXTO DEL BENEFICIO */}
                    <h3 className="text-brand-tittle font-medium m-0 leading-snug mb-3">
                      {item.titulo}
                    </h3>
                    
                    {/* DESCRIPCIÓN DEL HTML ORIGINAL */}
                    <p className="text-brand-text text-sm leading-relaxed">
                      {item.descripcion}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SECTION: MODALIDAD DE SERVICIOS */}
          <section className="py-24 px-6 bg-brand-white">
            <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center gap-16">
              <div className="flex-1 space-y-6">
                <h2 className="text-brand-tittle">Modalidad de las Sesiones</h2>
                <p className="text-brand-text leading-relaxed">
                  Ofrezco un enfoque terapéutico flexible para adaptarme a tu ritmo de vida y necesidades. Puedes elegir la modalidad que te haga sentir más comodidad.
                </p>
                <ul className="space-y-4 mt-6">
                  <li className="flex items-start">
                    <span className="text-brand-orange mr-3 mt-1 text-xl font-bold">•</span>
                    <span className="text-brand-text leading-relaxed">
                      <strong className="text-brand-dark">Terapia Online:</strong> Desde cualquier lugar, a través de videollamada segura.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-orange mr-3 mt-1 text-xl font-bold">•</span>
                    <span className="text-brand-text leading-relaxed">
                      <strong className="text-brand-dark">Terapia Presencial:</strong> En un despacho acogedor y preparado para tu tranquilidad.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="flex-1">
                <img 
                  src={consulta_psicologia_2} 
                  alt="Modalidad de sesiones" 
                  className="rounded-2xl shadow-xl w-full object-cover" 
                />
              </div>
            </div>
          </section>

          {/* CTA BANNER 2 */}
          <CtaBanner text="¡Comienza Tu Viaje Hacia el Bienestar! Contacta hoy mismo." />

        </main>
      </div>
    </>
  );
};

export default ConsultaPsicologia;