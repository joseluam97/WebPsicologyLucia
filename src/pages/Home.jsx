import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Benefits from '../components/Benefits';
import Indications from '../components/Indications';
import CtaBanner from '../components/CtaBanner';
import Specialties from '../components/Specialties';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet-async';

function Home() {
  return (
    <div className="app-container">

      <Helmet>
        <title>Terapia Individual - Lucía Morales Reos</title>
        <meta name="author" content="Lucía Morales Reos" />
        <meta name="publisher" content="Junio 2026" />
        <meta name="keywords" content="terapia" />
        <meta name="description" content="Descubre cómo nuestra terapia individual proporciona apoyo personalizado para enfrentar y superar tus desafíos emocionales con eficacia." />

        {/* Es importante cerrar todas las etiquetas con "/>" ya que es JSX, no HTML puro */}
        <link rel="canonical" href="/terapia-individual/" />

        {/* Open Graph (Facebook / WhatsApp) */}
        <meta property="og:locale" content="es_ES" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Terapia Individual - Lucía Morales Reos" />
        <meta property="og:description" content="Descubre cómo nuestra terapia individual proporciona apoyo personalizado para enfrentar y superar tus desafíos emocionales con eficacia." />
        <meta property="og:url" content="/terapia-individual/" />
        <meta property="og:site_name" content="Lucía Morales Reos" />
        <meta property="article:modified_time" content="2026-06-22T10:17:29+00:00" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:label1" content="Tiempo de lectura" />
        <meta name="twitter:data1" content="4 minutos" />
      </Helmet>

      <main id="content" className="site-content">
        <Hero />
        <Benefits />
        <Indications />
        <CtaBanner />
        <Specialties />
        <Services />
        <Contact />
      </main>
    </div>
  );
}

export default Home;