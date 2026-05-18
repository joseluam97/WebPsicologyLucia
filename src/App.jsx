import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importamos las páginas
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import OnlineTherapy from './pages/OnlineTherapy';
import TerapiaPresencial from './pages/TerapiaPresencial';
import TerapiaIndividual from './pages/TerapiaIndividual';
import TerapiaDePareja from './pages/TerapiaDePareja';
import SobreMi from './pages/SobreMi';
import Contacto from './pages/Contacto';
import Blog from './pages/Blog';

import AnsiedadPodcast from './pages-blog/AnsiedadPodcast';
import AutoestimaAmorPropio from './pages-blog/AutoestimaAmorPropio';

import './App.css'; // Tu CSS global

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        {/* Ruta para la página principal (Inicio) */}
        <Route path="/" element={<Home />} />

        <Route path="/terapia-psicologica-online" element={<OnlineTherapy />} />
        <Route path="/psicologa-en-cadiz/" element={<TerapiaPresencial />} />
        <Route path="/terapia-individual/" element={<TerapiaIndividual />} />
        <Route path="/terapia-de-pareja/" element={<TerapiaDePareja />} />
        <Route path="/psicologa-lucia-morales" element={<SobreMi />} />
        <Route path="/contacto-terapeuta" element={<Contacto />} />
        <Route path="/blog" element={<Blog />} />

        <Route path="/autoestima-y-amor-propio" element={<AnsiedadPodcast />} />
        <Route path="/ansiedad-podcast" element={<AutoestimaAmorPropio />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;