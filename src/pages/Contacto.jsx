import React from 'react';
import { Link } from 'react-router-dom';
import FaqAccordion from '../components/FaqAccordion';
import Doctoralia from '../components/Doctoralia';
import imagen_lucia_morales from '../assets/images/Lucia-Morales-3.jpg';
import { Helmet } from 'react-helmet-async';

// Importamos los iconos de react-icons para mantener la coherencia con el resto de la web
import { FaEnvelope, FaPhone, FaWhatsapp, FaInstagram, FaTiktok } from 'react-icons/fa6';

const Contacto = () => {

  // FAQs de ejemplo para la página de contacto (puedes personalizarlas)
  const contactFaqs = [
    {
      q: "¿Cómo puedo reservar una cita?",
      a: "Puedes reservar directamente a través del calendario de Doctoralia que ves en esta página. Si lo prefieres o tienes problemas técnicos, también puedes enviarme un WhatsApp o un correo electrónico."
    },
    {
      q: "¿Cuáles son las formas de pago aceptadas?",
      a: "Para las sesiones presenciales acepto efectivo, tarjeta y Bizum. Para las sesiones online, el pago se realiza mediante Bizum o transferencia previa a la sesión."
    },
    {
      q: "¿Tienes política de cancelación?",
      a: "Sí, el tiempo de ambos es valioso. Te ruego que si necesitas cancelar o reprogramar tu cita, me avises con al menos 24 horas de antelación para poder ofrecer ese espacio a otra persona que lo necesite."
    }
  ];

  return (
    <>
      <Helmet>
        <meta name="author" content="Lucía Morales Reos" />
        <meta name="publisher" content="Junio 2026" />
        <meta name="keywords" content="psicologa" />
        <title>Terapeuta de Contacto - Lucía Morales Reos</title>
        <meta name="description" content="Conecta directamente conmigo, tu terapeuta personal, para recibir apoyo y orientación adaptados a tus necesidades emocionales." />
        <link rel="canonical" href="/contacto-terapeuta/" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Terapeuta de Contacto - Lucía Morales Reos" />
        <meta property="og:description" content="Conecta directamente conmigo, tu terapeuta personal, para recibir apoyo y orientación adaptados a tus necesidades emocionales." />
        <meta property="og:url" content="/contacto-terapeuta/" />
        <meta property="og:site_name" content="Lucía Morales Reos" />
        <meta property="article:modified_time" content="2026-04-22T11:47:45+00:00" />
        <meta property="og:image:width" content="1707" />
        <meta property="og:image:height" content="2560" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:label1" content="Tiempo de lectura" />
        <meta name="twitter:data1" content="2 minutos" />

      </Helmet>
      <div className="w-full bg-brand-white">
        <main>

          {/* --- 1. SECCIÓN HERO - CITA --- */}
          <section className="bg-brand-primary py-16 px-6 min-h-[85vh] flex items-center justify-center">
            <div className="max-w-[1200px] w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

              {/* Texto Intro */}
              <div className="flex-1 space-y-6 text-center lg:text-left">
                <h1 className="text-brand-tittle text-4xl lg:text-5xl font-bold leading-tight">
                  Solicita una Cita con tu Terapeuta
                </h1>
                <h2 className="text-brand-orange text-xl lg:text-2xl font-semibold leading-snug">
                  ¿Estás Buscando a una Terapeuta que Pueda Ayudarte con tu Situación Emocional?
                </h2>
                <p className="text-brand-text text-[18px] leading-relaxed">
                  Como terapeuta estoy aquí para ofrecerte un espacio seguro y confidencial donde
                  puedas explorar tus emociones y trabajar en tus desafíos personales. Mi propósito
                  es proporcionarte un apoyo profesional personalizado que te ayude a encontrar el
                  equilibrio y el bienestar que mereces.
                </p>
              </div>

              {/* Widget Doctoralia (Contenedor con diseño de tarjeta) */}
              <div className="flex-1 w-full max-w-[600px] bg-white rounded-3xl shadow-2xl p-6 md:p-8 border-4 border-brand-main/30">
                <Doctoralia />
              </div>

            </div>
          </section>

          {/* --- 2. SECCIÓN DISPONIBILIDAD (Grid de Contacto) --- */}
          <section className="py-24 px-6 bg-brand-white">
            <div className="max-w-[1200px] mx-auto">
              <div className="text-center max-w-[800px] mx-auto mb-16 space-y-4">
                <h2 className="text-brand-tittle text-3xl font-bold">
                  Tu Terapeuta Personal, Siempre Disponible
                </h2>
                <p className="text-brand-text text-[18px] leading-relaxed">
                  Estoy aquí para ofrecerte apoyo y orientación en cualquier desafío emocional.
                  Como tu terapeuta de confianza, te proporcionaré un espacio seguro y comprensivo.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                {/* Tarjeta Redes Sociales */}
                <div className="bg-brand-main/10 border border-brand-main/30 rounded-2xl p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all">
                  <h3 className="text-brand-tittle font-bold text-lg mb-6">Redes Sociales</h3>
                  <div className="space-y-4 w-full">
                    <a href="#ig" className="flex items-center justify-center gap-3 text-brand-text hover:text-brand-orange transition-colors">
                      <FaInstagram size={22} className="text-brand-orange" />
                      <span className="font-medium">Instagram</span>
                    </a>
                    <a href="#tk" className="flex items-center justify-center gap-3 text-brand-text hover:text-brand-orange transition-colors">
                      <FaTiktok size={22} className="text-brand-orange" />
                      <span className="font-medium">TikTok</span>
                    </a>
                  </div>
                </div>

                {/* Tarjeta Escríbeme */}
                <div className="bg-brand-main/10 border border-brand-main/30 rounded-2xl p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all">
                  <div className="w-14 h-14 bg-brand-orange text-white rounded-full flex items-center justify-center mb-4 shadow-sm">
                    <FaEnvelope size={24} />
                  </div>
                  <h3 className="text-brand-tittle font-bold text-lg mb-2">Escríbeme</h3>
                  <a href="mailto:luciamorales.psicologa@gmail.com" className="text-brand-text font-medium hover:text-brand-orange transition-colors break-all">
                    luciamorales.psicologa<br />@gmail.com
                  </a>
                  <p className="text-brand-text/70 text-sm mt-3 font-medium">Contesto en 12 horas</p>
                </div>

                {/* Tarjeta Llámame */}
                <div className="bg-brand-main/10 border border-brand-main/30 rounded-2xl p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all">
                  <div className="w-14 h-14 bg-brand-orange text-white rounded-full flex items-center justify-center mb-4 shadow-sm">
                    <FaPhone size={24} />
                  </div>
                  <h3 className="text-brand-tittle font-bold text-lg mb-2">Llámame</h3>
                  <a href="tel:+34614149130" className="text-brand-text font-medium text-lg hover:text-brand-orange transition-colors">
                    614 149 130
                  </a>
                  <p className="text-brand-text/70 text-sm mt-3 font-medium">L-V: 08:00 - 20:00</p>
                </div>

                {/* Tarjeta WhatsApp */}
                <div className="bg-brand-main/10 border border-brand-main/30 rounded-2xl p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all">
                  <div className="w-14 h-14 bg-brand-orange text-white rounded-full flex items-center justify-center mb-4 shadow-sm">
                    <FaWhatsapp size={26} />
                  </div>
                  <h3 className="text-brand-tittle font-bold text-lg mb-2">WhatsApp</h3>
                  <a href="https://wa.me/34614149130" target="_blank" rel="noreferrer" className="text-brand-text font-medium text-lg hover:text-brand-orange transition-colors">
                    614 149 130
                  </a>
                  <p className="text-brand-text/70 text-sm mt-3 font-medium">L-V: 08:00 - 20:00</p>
                </div>

              </div>
            </div>
          </section>

          {/* --- 3. FAQ SECTION (Componente reutilizable) --- */}
          {/* Usamos un fondo ligeramente diferente para separar visualmente las secciones */}
          <FaqAccordion faqs={contactFaqs} bgColor="bg-[#d2e0d5]" />

          {/* --- 4. SECCIÓN SOBRE MÍ BREVE --- */}
          <section className="bg-brand-white py-24 px-6 border-t border-brand-main/20">
            <div className="max-w-[900px] mx-auto bg-brand-primary rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row items-center border border-brand-main/50">

              <div className="w-full md:w-2/5">
                <img
                  src={imagen_lucia_morales}
                  alt="Lucía Morales"
                  className="w-full h-full object-cover min-h-[300px]"
                />
              </div>

              <div className="w-full md:w-3/5 p-8 md:p-12 text-center md:text-left space-y-4">
                <h2 className="text-3xl font-bold text-brand-tittle m-0">Soy Lucía Morales</h2>
                <p className="text-xl text-brand-orange font-semibold m-0">
                  Psicóloga General Sanitaria
                </p>
                <p className="text-brand-text text-lg leading-relaxed pt-2">
                  Te invito a visitar la página <strong>Sobre mí</strong> para conocer más sobre mi enfoque, mi formación y mi experiencia ayudando a personas como tú. ¡Conozcámonos mejor!
                </p>
                <div className="pt-4">
                  <Link
                    to="/psicologa-lucia-morales/"
                    className="inline-block bg-brand-secondary text-white px-8 py-3 rounded-full font-bold shadow-md hover:bg-brand-dark transition-all transform hover:-translate-y-1"
                  >
                    Conocer más
                  </Link>
                </div>
              </div>

            </div>
          </section>

        </main>
      </div>
    </>
  );
};

export default Contacto;