import React, { useState } from 'react';
import logoImg from '../assets/images/lucia-morales.webp';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="w-full flex items-center justify-between px-6 lg:px-12 py-3">
        
        {/* --- Logo y Branding (Izquierda) --- */}
        <div className="flex items-center gap-4">
          <a href="/" className="flex-shrink-0">
            <img 
              src={logoImg} 
              alt="Lucía Morales Psicóloga" 
              className="w-12 h-12 object-cover rounded-full" 
            />
          </a>
          <div className="font-['Andada_Pro',_serif] text-xl font-bold text-brand-dark hidden sm:block">
            <a href="/">Lucía Morales Reos</a>
          </div>
        </div>

        {/* --- Botón menú móvil (Solo visible en móviles) --- */}
        <button
          className="lg:hidden text-3xl text-brand-dark focus:outline-none z-50"
          onClick={toggleMenu}
          aria-label="Alternar menú"
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>

        {/* --- Navegación principal (Derecha) --- */}
        <nav
          className={`${
            isMobileMenuOpen ? 'flex' : 'hidden'
          } lg:flex flex-col lg:flex-row absolute lg:static top-full left-0 w-full lg:w-auto bg-white lg:bg-transparent shadow-xl lg:shadow-none items-start lg:items-center p-6 lg:p-0 z-40 transition-all`}
        >
          <ul className="flex flex-col lg:flex-row w-full lg:w-auto gap-4 lg:gap-8 items-start lg:items-center font-['Lato',_sans-serif] text-[17px]">
            
            {/* Todos los <li> de texto ahora tienen flex y items-center para alinear sus textos al milímetro */}
            <li className="flex items-center">
              <a href="/" className="text-brand-text hover:text-brand-orange font-medium transition-colors py-2 lg:py-6">
                Inicio
              </a>
            </li>

            {/* --- Dropdown: Servicios --- */}
            <li className="relative group w-full lg:w-auto flex items-center">
              <a 
                href="/consulta-de-psicologia/" 
                className="flex items-center justify-between lg:justify-start gap-1 text-brand-text hover:text-brand-orange font-medium transition-colors w-full lg:w-auto py-2 lg:py-6"
              >
                Servicios <span className="text-xs">▼</span>
              </a>
              <ul className="lg:absolute lg:top-full lg:left-0 lg:hidden lg:group-hover:flex flex-col bg-white lg:shadow-lg lg:rounded-b-lg lg:min-w-[260px] pl-4 lg:pl-0 overflow-hidden transition-all border-t-2 border-brand-orange">
                <li>
                  <a href="/terapia-psicologica-online/" className="block lg:px-6 py-3 text-brand-text hover:bg-brand-primary/20 hover:text-brand-orange transition-colors">
                    Terapia Psicológica Online
                  </a>
                </li>
                <li>
                  <a href="/psicologa-en-cadiz/" className="block lg:px-6 py-3 text-brand-text hover:bg-brand-primary/20 hover:text-brand-orange transition-colors">
                    Terapia Presencial
                  </a>
                </li>
              </ul>
            </li>

            {/* --- Dropdown: Tipos de terapia --- */}
            <li className="relative group w-full lg:w-auto flex items-center">
              <a 
                href="/tipos-ayuda-psicologica/" 
                className="flex items-center justify-between lg:justify-start gap-1 text-brand-text hover:text-brand-orange font-medium transition-colors w-full lg:w-auto py-2 lg:py-6"
              >
                Tipos de terapia <span className="text-xs">▼</span>
              </a>
              <ul className="lg:absolute lg:top-full lg:left-0 lg:hidden lg:group-hover:flex flex-col bg-white lg:shadow-lg lg:rounded-b-lg lg:min-w-[260px] pl-4 lg:pl-0 overflow-hidden transition-all border-t-2 border-brand-orange">
                <li>
                  <a href="/terapia-individual/" className="block lg:px-6 py-3 text-brand-text hover:bg-brand-primary/20 hover:text-brand-orange transition-colors">
                    Terapia Individual
                  </a>
                </li>
                <li>
                  <a href="/terapia-de-pareja/" className="block lg:px-6 py-3 text-brand-text hover:bg-brand-primary/20 hover:text-brand-orange transition-colors">
                    Terapia de Pareja
                  </a>
                </li>
              </ul>
            </li>

            <li className="flex items-center">
              <a href="/psicologa-lucia-morales/" className="block text-brand-text hover:text-brand-orange font-medium transition-colors py-2 lg:py-6">
                Sobre Mí
              </a>
            </li>
            
            <li className="flex items-center">
              <a href="/blog/" className="block text-brand-text hover:text-brand-orange font-medium transition-colors py-2 lg:py-6">
                Blog
              </a>
            </li>
            
            {/* --- Botón Contacto --- */}
            {/* Usamos flex e items-center en el <li>, y transformamos el <a> en inline-flex para centrado total */}
            <li className="mt-4 lg:mt-0 w-full lg:w-auto flex items-center justify-center">
              <a 
                href="/contacto-terapeuta/" 
                className="inline-flex items-center justify-center w-full lg:w-auto bg-brand-orange text-white px-8 py-3 lg:py-2.5 rounded-full font-bold shadow-md hover:opacity-90 hover:-translate-y-0.5 transform transition-all duration-300"
              >
                Contacto
              </a>
            </li>

          </ul>
        </nav>

      </div>
    </header>
  );
};

export default Header;