import React, { useState } from 'react';
import '../css/pages/TerapiaPresencial.css';

// --- DATA EXTRAÍDA DEL HTML ---
const faqs = [
  {
    question: "¿Cuánto tiempo dura cada sesión en terapia?",
    answer: "Las sesiones conmigo pueden variar según la que escojas pero la estándar tiene una duración de 1 hora completa."
  },
  {
    question: "¿Cada cuánto tiempo tengo que ir a las sesiones?",
    answer: "La frecuencia varía según el por qué asistes, tus circunstancias personales y económicas y más variables que vemos una vez que hemos tenido la primera sesión."
  },
  {
    question: "¿Cuánto tiempo tengo que estar en terapia?",
    answer: "La duración del proceso es personal y depende de la persona y del por qué de asistir. Para algunos dura muy poco, para otros un poco más."
  },
  {
    question: "¿Qué problemas puedes abordar con un psicólogo en Cádiz?",
    answer: "Podemos abordar una gran variedad de problemas desde la ansiedad, problemas de relación, el duelo, problemas emocionales o sexuales."
  },
  {
    question: "¿Es confidencial lo que se habla en las sesiones?",
    answer: "¡Por su puesto! Todo lo que se habla está protegido bajo un contrato de confidencialidad que se firma antes de comenzar las sesiones así que no te preocupes, todo queda en sesión."
  },
  {
    question: "¿Qué hago si siento que no mejoro?",
    answer: "Es importante comunicarlo en las sesiones, podría ser necesario cambiar el enfoque de la sesión, puede que no estuviéramos mirando hacia el lado adecuado."
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

// --- COMPONENTES SECUNDARIOS ---

const CallToAction = ({ text }) => (
  <section className="cta-banner">
    <div className="container">
      <h2>{text}</h2>
      <a href="/contacto-terapeuta/" className="btn-primary">¡Empecemos!</a>
    </div>
  </section>
);

const FaqAccordion = ({ faqs }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      {faqs.map((faq, index) => (
        <div 
          key={index} 
          className={`faq-item ${activeIndex === index ? 'active' : ''}`}
          onClick={() => toggleFaq(index)}
        >
          <div className="faq-question">
            <span>{faq.question}</span>
            <span className="faq-icon">{activeIndex === index ? '▲' : '▼'}</span>
          </div>
          {activeIndex === index && (
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

// --- COMPONENTE PRINCIPAL ---

export default function TerapiaPresencial() {
  return (
    <div className="terapia-page">
      
      {/* HEADER / HERO SECTION */}
      <section className="hero-section container">
        <div className="hero-content">
          <h1>Psicólogo en Cádiz: Encuentra el Apoyo para tu Bienestar</h1>
          <p>
            El psicólogo en Cádiz ajusta su enfoque a tus necesidades y situaciones personales. 
            Estoy comprometida a ofrecerte un entorno de confianza y apoyo.
          </p>
          <p>
            Colaboraremos para reconocer y enfrentar las áreas clave de tu vida. Utilizaremos 
            un enfoque integral y técnicas eficaces para ayudarte. De esta manera lograras 
            tus metas de bienestar y crecimiento personal.
          </p>
        </div>
        <div className="hero-image">
          <img 
            src="/wp-content/uploads/2024/08/psicologo-en-cadiz-1-1024x683.jpg" 
            alt="psicólogo en cádiz" 
          />
        </div>
      </section>

      {/* FIRST CTA */}
      <CallToAction text="¿Buscas ayuda? Reserva tu sesión con un terapeuta aquí." />

      {/* WHY IS IT IMPORTANT SECTION */}
      <section className="info-section container">
        <div className="info-text">
          <h2>Descubre cómo el apoyo de un psicólogo en Cádiz puede impactar positivamente tu vida.</h2>
          <h3>¿Por qué es importante?</h3>
          <p>
            Con el psicólogo en Cádiz, tendrás un espacio seguro y confidencial. Podrás explorar 
            tus pensamientos, emociones y sentimientos. Utilizando técnicas personalizadas, 
            te acompañaré en el proceso. Para que comprendas mejor tu mundo interior y desarrolles 
            nuevas habilidades.
          </p>
          <p>
            Con el acompañamiento de un psicólogo en Cádiz, podrás enfrentar desafíos específicos. 
            Podras trabajar en tu crecimiento personal. Descubriras maneras de mejorar tu bienestar 
            emocional y mental.
          </p>
        </div>
        <div className="info-image">
          <img 
            src="/wp-content/uploads/2024/08/psicologo-en-cadiz-2-1024x683.jpg" 
            alt="psicóloga consulta" 
          />
        </div>
      </section>

      {/* HOW CAN IT HELP / BENEFITS GRID */}
      <section className="benefits-section">
        <div className="container">
          <h2>Cómo un psicólogo en Cádiz puede ayudarte</h2>
          <div className="benefits-grid">
            {beneficios.map((beneficio, index) => (
              <div key={index} className="benefit-card">
                <div className="icon-placeholder">✓</div>
                <p>{beneficio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EFFICACY SECTION */}
      <section className="efficacy-section container">
        <h2>¿Funciona el trabajo con un psicólogo en Cádiz? Descubre su efectividad y los beneficios que puede ofrecerte.</h2>
        <div className="efficacy-content">
          <div className="efficacy-image">
            <img 
              src="/wp-content/uploads/2024/08/psicologo-en-cadiz-3-683x1024.jpg" 
              alt="terapia efectiva" 
            />
          </div>
          <div className="efficacy-text">
            <p>
              El psicólogo en Cádiz ha demostrado ser muy eficaz en tratar multitud de problemas. 
              Problemas emocionales, psicológicos y relacionales. Con un enfoque personalizado y 
              centrado en ti. Te ofrezco un espacio seguro.
            </p>
            <p>
              Puedes experimentar mejoras significativas en tu bienestar emocional. Trabajar con un 
              psicólogo en Cádiz no solo proporciona alivio a corto plazo de los síntomas. Ademas, 
              también fomenta un crecimiento personal duradero.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="faq-section container">
        <h3>Preguntas frecuentes</h3>
        <div className="divider"></div>
        <FaqAccordion faqs={faqs} />
      </section>

      {/* FINAL CTA */}
      <CallToAction text="¡Comienza Tu Viaje Hacia el Bienestar! Contáctame Hoy para Iniciar tu Terapia Online." />
      
    </div>
  );
}