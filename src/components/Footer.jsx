import React from 'react';
// Importamos los logos reales de FontAwesome a través de react-icons
import { FaWhatsapp, FaInstagram, FaEnvelope, FaTiktok } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-brand-main text-black pt-16 pb-8 px-6 w-full mt-auto">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Contenedor principal dividido en 3 columnas en PC */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Columna 1: Marca, Descripción y Redes Sociales */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-3xl font-['Andada_Pro',_serif] mb-4 text-brand-secondary">
              Lucía Morales Reos
            </h3>
            <p className="text-black/80 leading-relaxed mb-8 max-w-[300px]">
              Acompañamiento psicológico especializado para ayudarte a encontrar el equilibrio y el bienestar emocional que necesitas en un espacio seguro.
            </p>
            
            {/* Redes Sociales con los logotipos reales */}
            <div className="flex gap-4">
              <a 
                href="https://wa.me/34614149130?text=Hola%20Lucía,%20me%20gustaría%20saber%20más%20sobre%20tus%20servicios." 
                className="bg-white/10 p-3 rounded-full text-black hover:bg-brand-secondary hover:text-brand-dark transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={20} />
              </a>
              <a 
                href="https://www.instagram.com/luciamorales.psicologia/" 
                className="bg-white/10 p-3 rounded-full text-black hover:bg-brand-secondary hover:text-brand-dark transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>
              <a 
                href="mailto:luciamorales.psicologa@gmail.com" 
                className="bg-white/10 p-3 rounded-full text-black hover:bg-brand-secondary hover:text-brand-dark transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center"
                aria-label="Email"
              >
                <FaEnvelope size={20} />
              </a>
              <a 
                href="https://www.tiktok.com/@luciamoralespsicologia" 
                className="bg-white/10 p-3 rounded-full text-black hover:bg-brand-secondary hover:text-brand-dark transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center"
                aria-label="Tiktok"
              >
                <FaTiktok size={20} />
              </a>
            </div>
          </div>

          {/* Columna 2: Enlaces de Servicios */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-lg font-bold mb-6 uppercase tracking-wider text-black">Servicios</h4>
            <ul className="space-y-4 text-black/80">
              <li><a href="/terapia-individual" className="hover:text-brand-secondary transition-colors duration-300">Terapia Individual</a></li>
              <li><a href="/terapia-pareja" className="hover:text-brand-secondary transition-colors duration-300">Terapia de Pareja</a></li>
              <li><a href="/terapia-online" className="hover:text-brand-secondary transition-colors duration-300">Terapia Online</a></li>
              <li><a href="/terapia-presencial" className="hover:text-brand-secondary transition-colors duration-300">Terapia Presencial</a></li>
            </ul>
          </div>

          {/* Columna 3: Enlaces Generales */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-lg font-bold mb-6 uppercase tracking-wider text-black">Explorar</h4>
            <ul className="space-y-4 text-black/80">
              <li><a href="/sobre-mi" className="hover:text-brand-secondary transition-colors duration-300">Sobre Mí</a></li>
              <li><a href="/contacto" className="hover:text-brand-secondary transition-colors duration-300">Contacto</a></li>
              <li><a href="/blog" className="hover:text-brand-secondary transition-colors duration-300">Blog</a></li>
              <li><a href="/aviso-legal" className="hover:text-brand-secondary transition-colors duration-300">Aviso Legal</a></li>
            </ul>
          </div>

        </div>

        {/* Separador y Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-black/50 text-sm text-center">
          <p className="mb-2 md:mb-0">
            Copyright © {new Date().getFullYear()} Lucía Morales Reos. Todos los derechos reservados.
          </p>
          <p>
            Psicóloga General Sanitaria
          </p>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;