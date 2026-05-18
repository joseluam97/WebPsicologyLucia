import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaCalendarDays, FaUser } from 'react-icons/fa6';

const BlogHeader = ({ title, category, date, author = "Lucía Morales", image }) => {
  return (
    <section className="bg-brand-primary pt-6 pb-12 px-6 w-full">
      <div className="max-w-[900px] mx-auto flex flex-col gap-4 md:gap-5">
        
        {/* FILA SUPERIOR: Volver y Categoría */}
        <div className="flex justify-between items-center">
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-1.5 text-brand-secondary hover:text-brand-orange text-xs font-bold transition-colors"
          >
            <FaArrowLeft size={10} /> Volver al Blog
          </Link>
          <span className="bg-brand-orange text-white text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full shadow-sm">
            {category}
          </span>
        </div>

        {/* TEXTO CENTRAL: Título y Metadatos con máxima legibilidad */}
        <div className="text-center space-y-3">
          <h1 className="text-brand-dark text-2xl md:text-4xl font-bold leading-tight">
            {title}
          </h1>

          <div className="flex items-center justify-center gap-4 text-brand-dark text-xs font-semibold pt-1">
            <div className="flex items-center gap-1.5">
              <FaCalendarDays className="text-brand-orange" size={13} />
              <span>{date}</span>
            </div>
            <span className="text-brand-secondary/30">•</span>
            <div className="flex items-center gap-1.5">
              <FaUser className="text-brand-orange" size={13} />
              <span>Por {author}</span>
            </div>
          </div>
        </div>

        {/* IMAGEN DESTACADA INTEGRADA Y HOMOGÉNEA */}
        {image && (
          <div className="w-full pt-2">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-[280px] md:h-[480px] object-cover rounded-3xl shadow-xl border-4 border-white"
            />
          </div>
        )}

      </div>
    </section>
  );
};

export default BlogHeader;