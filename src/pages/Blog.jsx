import React from 'react';
import { Link } from 'react-router-dom';
import { FaCalendarDays, FaArrowRight } from 'react-icons/fa6';
import { Helmet } from 'react-helmet-async';

// =========================================================
// 1. IMPORTA AQUÍ LAS IMÁGENES DESTACADAS DE CADA POST
// =========================================================
import imgAutoestima from '../assets/images/autoestima-portada.webp';
import imgAnsiedad from '../assets/images/portada-podcast-ansiedad.webp';

const Blog = () => {

  // Array de datos con los artículos reales extraídos de tus HTMLs
  const articulos = [
    {
      id: 1,
      title: "Autoestima y Amor Propio: Cómo Mejorar tu Autoestima Baja",
      excerpt: "Descubre cómo aumentar tu autoestima y el amor propio con consejos prácticos para mejorar la autoestima baja y alcanzar un bienestar duradero.",
      date: "Julio 2024",
      category: "Podcast",
      slug: "/autoestima-y-amor-propio",
      image: imgAutoestima
    },
    {
      id: 2,
      title: "Ansiedad: Todo lo que Necesitas Saber",
      excerpt: "Aprende a manejar la ansiedad y superar un ataque de ansiedad con consejos prácticos y estrategias efectivas en nuestro podcast.",
      date: "Julio 2024",
      category: "Bienestar",
      slug: "/ansiedad-podcast",
      image: imgAnsiedad
    }
  ];

  const redditToArticle = (post) => {
    // Redirige a la página del artículo correspondiente
    window.location.href = post.slug;
  };

  return (
    <>
      <Helmet>
        <meta name="author" content="Lucía Morales Reos" />
        <meta name="publisher" content="Junio 2026" />
        <title>Blog - Lucía Morales Reos</title>
        <meta name="description" content="Blog Lucía Morales Reos" />
        <link rel="canonical" href="/contacto-terapeuta/" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Blog - Lucía Morales Reos" />
        <meta property="og:description" content="Conecta directamente conmigo, tu terapeuta personal, para recibir apoyo y orientación adaptados a tus necesidades emocionales." />
        <meta property="og:url" content="/blog/" />
        <meta property="og:site_name" content="Lucía Morales Reos" />
        <meta property="article:modified_time" content="2026-04-22T11:47:45+00:00" />
        <meta property="og:image:width" content="1707" />
        <meta property="og:image:height" content="2560" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:label1" content="Tiempo de lectura" />
        <meta name="twitter:data1" content="2 minutos" />

      </Helmet>
      <div className="w-full bg-brand-white min-h-screen">
        <main>

          {/* --- 1. HERO DEL BLOG --- */}
          <section className="bg-brand-primary py-10 px-6 text-center flex flex-col items-center justify-center">
            <div className="max-w-[800px] space-y-4">
              <h1 className="text-brand-tittle text-4xl lg:text-5xl font-bold">
                Espacio de Bienestar Emocional
              </h1>
              <div className="w-20 h-1 bg-brand-orange mx-auto my-4 rounded-full"></div>
              <p className="text-brand-text text-lg lg:text-xl leading-relaxed max-w-[800px] mx-auto">
                Artículos, recursos y reflexiones psicológicas pensadas para acompañarte en tu proceso de autoconocimiento, crecimiento personal y salud mental.
              </p>
            </div>
          </section>

          {/* --- 2. CUADRÍCULA DE ENTRADAS --- */}
          <section className="py-10 px-6 max-w-[1200px] mx-auto">
            {/* Grid que se adapta: 1 columna en móvil, 2 en tablets/PC */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">

              {articulos.map((post) => (
                <article
                  key={post.id}
                  className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl border border-brand-main/20 transition-all duration-300 flex flex-col transform hover:-translate-y-1"
                >

                  {/* Contenedor de la Imagen Destacada */}
                  <div className="relative w-full h-[240px] bg-brand-main/20 overflow-hidden" onClick={() => redditToArticle(post)} style={{ cursor: 'pointer' }}>

                    {/* Categoría flotante sobre la foto */}
                    <span className="absolute top-4 left-4 bg-brand-orange text-white text-xs uppercase tracking-wider font-bold px-4 py-1.5 rounded-full z-10 shadow-sm">
                      {post.category}
                    </span>

                    {post.image ? (
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      // Placeholder elegante en caso de que falte la imagen para que no rompa el diseño
                      <div className="w-full h-full flex flex-col items-center justify-center text-brand-secondary/40 font-['Andada_Pro',_serif] text-xl font-bold p-6 text-center select-none bg-gradient-to-br from-brand-main/10 to-brand-primary/30">
                        Lucía Morales Reos
                      </div>
                    )}
                  </div>

                  {/* Contenido de la tarjeta */}
                  <div className="p-8 flex-1 flex flex-col space-y-4">

                    {/* Meta: Fecha */}
                    <div className="flex items-center gap-2 text-brand-text/60 text-sm font-medium">
                      <FaCalendarDays className="text-brand-orange" size={14} />
                      <span>{post.date}</span>
                      <span className="text-brand-main/60">•</span>
                      <span>Por Lucía Morales</span>
                    </div>

                    {/* Título del artículo */}
                    <h2 className="text-brand-tittle text-xl lg:text-2xl font-bold leading-tight group-hover:text-brand-orange transition-colors">
                      <Link to={post.slug} className="focus:outline-none">
                        {post.title}
                      </Link>
                    </h2>

                    {/* Extracto o Descripción corta */}
                    <p className="text-brand-text/80 text-[16px] leading-relaxed flex-grow line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Enlace "Leer más" perfectamente alineado abajo */}
                    <div className="pt-4 border-t border-gray-100 mt-auto">
                      <Link
                        to={post.slug}
                        className="inline-flex items-center gap-2 text-brand-orange hover:text-brand-secondary font-bold text-[16px] transition-colors group/link"
                      >
                        <span>Leer artículo completo</span>
                        <FaArrowRight size={14} className="transform group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>

                  </div>

                </article>
              ))}

            </div>
          </section>

          {/* --- 3. SECCIÓN INVITACIÓN FINAL --- */}
          <section className="bg-brand-main/10 py-16 px-6 text-center border-t border-brand-main/20">
            <div className="max-w-[600px] mx-auto space-y-6">
              <h3 className="text-brand-tittle text-2xl font-bold">¿Tienes alguna duda sobre los procesos terapéuticos?</h3>
              <p className="text-brand-text/90 leading-relaxed">
                Si después de leer los artículos sientes que necesitas un acompañamiento guiado y personalizado, puedes consultarme directamente.
              </p>
              <div>
                <Link
                  to="/contacto-terapeuta"
                  className="inline-block bg-brand-secondary text-white px-8 py-3 rounded-full font-bold shadow-md hover:bg-brand-dark transition-all transform hover:-translate-y-0.5"
                >
                  Solicitar información
                </Link>
              </div>
            </div>
          </section>

        </main>
      </div>
    </>
  );
};

export default Blog;