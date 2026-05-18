import React, { useState } from 'react';

const FaqAccordion = ({ faqs, bgColor = "bg-brand-primary" }) => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className={`${bgColor} py-20 px-6 w-full`}>
      <div className="max-w-[800px] mx-auto">
        
        <h3 className="text-center text-brand-tittle mb-6 font-semibold">
          Preguntas frecuentes
        </h3>
        
        {/* Línea divisoria */}
        <div className="w-24 h-1 bg-brand-orange mx-auto mb-10 rounded-full"></div>
        
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-brand-white rounded-xl shadow-md overflow-hidden border border-brand-main/30"
            >
              {/* Botón de la pregunta */}
              <button 
                className="w-full text-left px-6 py-5 font-semibold text-brand-tittle flex justify-between items-center focus:outline-none hover:bg-brand-main/10 transition-colors"
                onClick={() => toggleFaq(index)}
                aria-expanded={openFaq === index}
              >
                <span className="pr-4 text-[17px]">{faq.q}</span>
                <span className={`text-brand-orange font-bold transform transition-transform duration-300 ${openFaq === index ? 'rotate-180' : 'rotate-0'}`}>
                  ▼
                </span>
              </button>
              
              {/* Respuesta desplegable con animación suave */}
              <div 
                className={`transition-all duration-300 ease-in-out ${
                  openFaq === index ? 'max-h-[500px] opacity-100 py-5' : 'max-h-0 opacity-0 py-0'
                } px-6 bg-brand-white border-t border-brand-main/20`}
              >
                <p className="text-brand-text m-0 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqAccordion;