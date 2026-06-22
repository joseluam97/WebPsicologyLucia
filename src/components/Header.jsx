import React, { useState } from 'react';
import logoImg from '../assets/images/lucia-morales.webp';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Estados para controlar los menús en móvil
  const [isServiciosOpen, setIsServiciosOpen] = useState(false);
  const [isTiposTerapiaOpen, setIsTiposTerapiaOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Función que decide qué hacer al hacer clic en el enlace principal
  const handleDropdownClick = (e, isOpen, setIsOpen) => {
    if (window.innerWidth < 1024) { // 1024px es el punto de corte 'lg' de Tailwind
      e.preventDefault(); 
      setIsOpen(!isOpen);
    }
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
          <ul className="flex flex-col lg:flex-row w-full lg:w-auto gap-2 lg:gap-8 items-start lg:items-center font-['Lato',_sans-serif] text-[17px]">
            
            {/* Inicio */}
            <li className="w-full lg:w-auto">
              <a href="/" className="block w-full text-brand-text hover:text-brand-orange font-medium transition-colors py-3 lg:py-6 border-b border-gray-100 lg:border-none">
                Inicio
              </a>
            </li>

            {/* --- Dropdown: Servicios --- */}
            <li className="relative group w-full lg:w-auto">
              <a 
                href="/consulta-de-psicologia/" 
                onClick={(e) => handleDropdownClick(e, isServiciosOpen, setIsServiciosOpen)}
                className="flex items-center justify-between w-full text-brand-text hover:text-brand-orange font-medium transition-colors py-3 lg:py-6 border-b border-gray-100 lg:border-none"
              >
                Servicios 
                {/* La flecha girará al hacer clic en móvil o al pasar el ratón en escritorio */}
                <span className={`text-xs transition-transform duration-300 lg:group-hover:rotate-180 ${isServiciosOpen ? 'rotate-180' : ''}`}>▼</span>
              </a>
              {/* Combinación de clases: oculto/visible por estado (móvil) + lg:group-hover:flex (escritorio) */}
              <ul className={`${isServiciosOpen ? 'flex' : 'hidden'} lg:hidden lg:group-hover:flex flex-col w-full lg:w-auto pl-4 lg:pl-0 lg:absolute lg:top-full lg:left-0 bg-white lg:shadow-lg lg:rounded-b-lg lg:min-w-[260px] transition-all lg:border-t-2 lg:border-brand-orange`}>
                <li>
                  <a href="/terapia-psicologica-online/" className="block w-full py-2 lg:py-3 lg:px-6 text-brand-text hover:bg-brand-primary/20 hover:text-brand-orange transition-colors">
                    Terapia Psicológica Online
                  </a>
                </li>
                <li>
                  <a href="/psicologa-en-cadiz/" className="block w-full py-2 lg:py-3 lg:px-6 text-brand-text hover:bg-brand-primary/20 hover:text-brand-orange transition-colors">
                    Terapia Presencial
                  </a>
                </li>
              </ul>
            </li>

            {/* --- Dropdown: Tipos de terapia --- */}
            <li className="relative group w-full lg:w-auto">
              <a 
                href="/tipos-ayuda-psicologica/" 
                onClick={(e) => handleDropdownClick(e, isTiposTerapiaOpen, setIsTiposTerapiaOpen)}
                className="flex items-center justify-between w-full text-brand-text hover:text-brand-orange font-medium transition-colors py-3 lg:py-6 border-b border-gray-100 lg:border-none"
              >
                Tipos de terapia 
                <span className={`text-xs transition-transform duration-300 lg:group-hover:rotate-180 ${isTiposTerapiaOpen ? 'rotate-180' : ''}`}>▼</span>
              </a>
              <ul className={`${isTiposTerapiaOpen ? 'flex' : 'hidden'} lg:hidden lg:group-hover:flex flex-col w-full lg:w-auto pl-4 lg:pl-0 lg:absolute lg:top-full lg:left-0 bg-white lg:shadow-lg lg:rounded-b-lg lg:min-w-[260px] transition-all lg:border-t-2 lg:border-brand-orange`}>
                <li>
                  <a href="/terapia-individual/" className="block w-full py-2 lg:py-3 lg:px-6 text-brand-text hover:bg-brand-primary/20 hover:text-brand-orange transition-colors">
                    Terapia Individual
                  </a>
                </li>
                <li>
                  <a href="/terapia-de-pareja/" className="block w-full py-2 lg:py-3 lg:px-6 text-brand-text hover:bg-brand-primary/20 hover:text-brand-orange transition-colors">
                    Terapia de Pareja
                  </a>
                </li>
              </ul>
            </li>

            {/* Sobre Mí */}
            <li className="w-full lg:w-auto">
              <a href="/psicologa-lucia-morales/" className="block w-full text-brand-text hover:text-brand-orange font-medium transition-colors py-3 lg:py-6 border-b border-gray-100 lg:border-none">
                Sobre Mí
              </a>
            </li>
            
            {/* Blog */}
            <li className="w-full lg:w-auto">
              <a href="/blog/" className="block w-full text-brand-text hover:text-brand-orange font-medium transition-colors py-3 lg:py-6 border-b border-gray-100 lg:border-none">
                Blog
              </a>
            </li>
            
            {/* --- Botón Contacto --- */}
            <li className="w-full lg:w-auto mt-6 lg:mt-0 pb-4 lg:pb-0">
              <a 
                href="/contacto-terapeuta/" 
                className="flex items-center justify-center w-full lg:w-auto bg-brand-orange text-white px-8 py-3.5 lg:py-2.5 rounded-full font-bold shadow-md hover:opacity-90 hover:-translate-y-0.5 transform transition-all duration-300"
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