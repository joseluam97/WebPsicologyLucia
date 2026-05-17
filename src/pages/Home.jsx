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

function Home() {
  return (
    <div className="app-container">
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