import React, { useState } from 'react';
// Asegúrate de que las rutas a tus componentes Header y Footer sean las correctas en tu proyecto
import Header from '../components/Header'; 
import Footer from '../components/Footer';
import '../css/pages/TerapiaIndividual.css';

import terapia_individual_1 from '../assets/images/terapia-individual-1.jpg'; 
import terapia_individual_2 from '../assets/images/terapia-individual-2.jpg';
import terapia_individual_3 from '../assets/images/terapia-individual-3.jpg';

const TerapiaIndividual = () => {
  const [faqAbierta, setFaqAbierta] = useState(null);

  const toggleFaq = (index) => {
    if (faqAbierta === index) {
      setFaqAbierta(null);
    } else {
      setFaqAbierta(index);
    }
  };

  const beneficios = [
    { id: 1, titulo: "Exploras tus problemas", icon: "🔍" },
    { id: 2, titulo: "Apoyo emocional en momentos difíciles", icon: "🤝" },
    { id: 3, titulo: "Desarrollo de habilidades de afrontamiento", icon: "🌱" },
    { id: 4, titulo: "Mejora de la autoestima y confianza", icon: "✨" },
    { id: 5, titulo: "Resolución de conflictos internos", icon: "⚖️" },
    { id: 6, titulo: "Claridad mental y emocional", icon: "🧠" },
    { id: 7, titulo: "Empoderamiento para la toma decisiones", icon: "🚀" }
  ];

  const faqs = [
    {
      pregunta: "¿Cuánto tiempo dura cada sesión en terapia?",
      respuesta: "Las sesiones conmigo pueden variar según la que escojas pero la estándar tiene una duración de 1 hora completa."
    },
    {
      pregunta: "¿Cada cuánto tiempo tengo que ir a las sesiones?",
      respuesta: "La frecuencia varía según el por qué asistes, tus circunstancias personales y económicas y más variables que vemos una vez que hemos tenido la primera sesión."
    },
    {
      pregunta: "¿Cuánto tiempo tengo que estar en terapia?",
      respuesta: "La duración del proceso es personal y depende de la persona y del por qué de asistir. Para algunos dura muy poco, para otros un poco más."
    },
    {
      pregunta: "¿Qué tipo de problemas puedo tratarme en la terapia individual?",
      respuesta: "Podemos abordar una gran variedad de problemas desde la ansiedad, problemas de relación, el duelo, problemas emocionales o sexuales."
    },
    {
      pregunta: "¿Es confidencial lo que se habla en las sesiones?",
      respuesta: "¡Por supuesto! Todo lo que se habla está protegido bajo un contrato de confidencialidad que se firma antes de comenzar las sesiones así que no te preocupes, todo queda en sesión."
    },
    {
      pregunta: "¿Qué hago si siento que no mejoro?",
      respuesta: "Es importante comunicarlo en las sesiones, podría ser necesario cambiar el enfoque de la sesión, puede que no estuviéramos mirando hacia el lado adecuado."
    }
  ];

  return (
    <>
      <div className="terapia-individual-page">
        {/* HERO SECTION */}
        <section className="ti-hero bg-salvia">
          <div className="container">
            <img 
              src={terapia_individual_1}
              alt="Terapia individual" 
              className="hero-image"
            />
            <h1 className="title-dark">Terapia Individual: Encuentra Apoyo Personalizado para tu Bienestar</h1>
            <p className="text-dark">La terapia individual se adapta específicamente a tus necesidades y circunstancias únicas. Estoy dedicada a brindarte un espacio seguro y de apoyo.</p>
            <p className="text-dark">Con la terapia, trabajaremos juntas para identificar y abordar las áreas de tu vida. Utilizando un enfoque integrador y estrategias efectivas para ayudarte. Alcanzarás tus objetivos de bienestar y desarrollo personal. Estoy comprometida a proporcionarte el apoyo necesario. Podrás conseguir tus objetivos y alcanzar una mayor satisfacción. Estaré aquí para apoyaros en cada paso del camino hacia una relación sana y feliz.</p>
          </div>
        </section>

        {/* CTA BANNER 1 */}
        <section className="ti-cta-banner bg-beige">
          <div className="container cta-flex">
            <h3 className="text-white">¿Necesitas Apoyo? Agenda tu Sesión de Terapia Aquí</h3>
            <a href="/contacto" className="btn-salvia">¡Empecemos!</a>
          </div>
        </section>

        {/* SECTION: COMO AYUDA */}
        <section className="ti-como-ayuda bg-white">
          <div className="container">
            <h2 className="title-dark text-center">Descubre cómo puede ayudarte la terapia</h2>
            
            <div className="split-layout">
              <div className="split-text">
                <h3 className="title-dark">¿Por qué es importante?</h3>
                <p className="text-dark">La terapia individual ofrece un espacio seguro y confidencial. Puedes explorar tus pensamientos, emociones y sentimientos. A través de técnicas terapéuticas personalizadas. La terapia te ayuda a comprender mejor tu mundo interior y a desarrollar habilidades.</p>
                <p className="text-dark">Con el apoyo de tu terapeuta, puedes abordar problemas específicos. Trabajar en el crecimiento personal y encontrar formas de mejorar tu bienestar emocional y mental. La terapia individual es un proceso que te empodera para enfrentar la vida. Ayudándote a alcanzar tus objetivos y vivir una vida más plena y satisfactoria.</p>
              </div>
              <div className="split-image">
                <img 
                  src={terapia_individual_2}
                  alt="Sesión de terapia" 
                />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: BENEFICIOS */}
        <section className="ti-beneficios bg-salvia">
          <div className="container">
            <h2 className="title-dark text-center mb-4">Beneficios</h2>
            <div className="beneficios-grid">
              {beneficios.map((item) => (
                <div key={item.id} className="beneficio-card">
                  <div className="beneficio-icon">{item.icon}</div>
                  <h4 className="text-dark">{item.titulo}</h4>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA BANNER 2 */}
        <section className="ti-cta-banner bg-beige">
          <div className="container cta-flex">
            <h3 className="text-white">¿Necesitas Apoyo? Agenda tu Sesión Aquí</h3>
            <a href="/contacto" className="btn-salvia">¡Empecemos!</a>
          </div>
        </section>

        {/* SECTION: EFICACIA */}
        <section className="ti-eficacia bg-white">
          <div className="container">
            <h2 className="title-dark text-center mb-4">¿La terapia individual funciona? Descubre su Eficacia y Beneficios</h2>
            <div className="split-layout reverse">
              <div className="split-text text-right">
                <p className="text-dark">La terapia individual ha demostrado ser altamente eficaz. Con una amplia gama de problemas emocionales, psicológicos y relacionales. A través de un enfoque personalizado y centrado en el cliente. La terapia proporciona un espacio seguro donde las personas pueden explorar sus preocupaciones, desarrollar una mayor comprensión de sí mismas y aprender herramientas.</p>
                <p className="text-dark">Se pueden experimentar mejoras en el bienestar emocional. La terapia individual no solo es un alivio a corto plazo de los síntomas, también promueve un crecimiento personal duradero y una mayor autoestima y satisfacción.</p>
              </div>
              <div className="split-image">
                <img 
                  src={terapia_individual_3}
                  alt="Eficacia de la terapia" 
                />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: FAQ */}
        <section className="ti-faq bg-salvia">
          <div className="container faq-container">
            <h2 className="title-dark text-center mb-4">Preguntas Frecuentes</h2>
            <div className="faq-list">
              {faqs.map((faq, index) => (
                <div key={index} className={`faq-item ${faqAbierta === index ? 'open' : ''}`}>
                  <div className="faq-question" onClick={() => toggleFaq(index)}>
                    <span className="title-dark">{faq.pregunta}</span>
                    <span className="faq-icon title-dark">{faqAbierta === index ? '▲' : '▼'}</span>
                  </div>
                  {faqAbierta === index && (
                    <div className="faq-answer">
                      <p className="text-dark">{faq.respuesta}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA BANNER 3 */}
        <section className="ti-cta-banner bg-beige">
          <div className="container cta-flex">
            <h3 className="text-white text-left">¡Comienza Tu Viaje Hacia el Bienestar! Contáctame Hoy para Iniciar tu Terapia Online.</h3>
            <a href="/contacto" className="btn-salvia">¡Empecemos!</a>
          </div>
        </section>

        {/* SOCIALS */}
        <section className="ti-socials bg-salvia">
          <div className="container flex-center">
            <a href="#" className="social-circle">IG</a>
            <a href="#" className="social-circle">✉️</a>
            <a href="#" className="social-circle">TK</a>
          </div>
        </section>
      </div>
    </>
  );
};

export default TerapiaIndividual;