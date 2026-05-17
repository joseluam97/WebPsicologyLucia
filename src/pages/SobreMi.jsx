import React from 'react';
import { Link } from 'react-router-dom';
import '../css/pages/SobreMi.css';
import imagen_lucia from '../assets/images/Lucia-Morales-4.jpg';

export default function SobreMi() {
  return (
    <main className="sobremi-page">
      
      {/* Sección Hero con la foto en fondo verde (heredado del body/global) */}
      <section className="sobremi-hero container">
        <img 
          src={imagen_lucia}
          alt="psicologia Lucia Morales" 
          className="sobremi-profile-img"
        /> 
      </section>

      {/* Sección Biografía y Ayuda con fondo beige */}
      <section className="sobremi-content-wrapper">
        <div className="container sobremi-content-inner">
          
          <div className="sobremi-header-text">
            <h1>
              <b>¡Hola! Soy Lucía</b><br />
              Psicologa General Sanitaria
            </h1>
          </div>

          <div className="sobremi-bio-text">
            <p>Me llamo Lucía y soy psicologa general sanitaria. Actualmente trabajo sobre todo con adultos. Entiendo desde siempre la psicología como un todo, desde una perspectiva integradora, lo que quiere decir básicamente que el mejor tratamiento para una persona es aquel que se adapta a sus necesidades donde se pueda desarrollar, expresar y sanar desde un lugar seguro.</p> 
            
            <p>Desde que empecé a adentrarme en el mundo de la psicología empecé a darme cuenta de lo importante que son nuestros vínculos tanto con los demás como con nosotros mismos, es por ello que atiendo tanto de manera individual como a parejas. También imparto talleres en grupo en los que intento crear espacios seguros donde se puedan trabajar.</p> 
            
            <p>Si sientes que no estas pasando por un buen momento (tú solo o con tu pareja), que tus emociones no se pueden controlar o si quieres empezar el camino del proceso terapéutico, puedo ayudarte. Iniciar la terapia puede ser algo doloroso, largo o incluso hacerse pesado pero no hay nada mejor que darte la oportunidad de sanar.</p> 
          </div>

          <div className="sobremi-help-section">
            <h2>En que puedo ayudarte como psicologa</h2> 
            <ul className="sobremi-help-list">
              <li>Autoestima</li> 
              <li>Ansiedad</li> 
              <li>Problemas de pareja</li> 
              <li>Problemas en la etapa del embarazo, parto o postparto</li> 
              <li>Problemas de sexualidad</li> 
              <li>Crecimiento y conocimiento personal</li> 
              <li>Conocimiento de tu sexualidad</li> 
              <li>Estrés</li> 
            </ul>
          </div>

        </div>
      </section>

      {/* Franja CTA (Llamada a la acción) Marrón */}
      <section className="sobremi-cta-banner">
        <div className="container sobremi-cta-inner">
          <p>Reserva tu sesión de psicología hoy y comienza a sentirte mejor</p> 
          <Link to="/contacto-terapeuta" className="btn-reservar">Reservar</Link> 
        </div>
      </section>

      {/* Sección Redes Sociales */}
      <section className="sobremi-socials container">
        <a href="https://www.instagram.com/luciamorales.psicologia/" target="_blank" rel="noreferrer" className="social-circle">Ig</a> 
        <a href="mailto:luciamorales.psicologa@gmail.com" className="social-circle">@</a> 
        <a href="https://www.tiktok.com/@luciamoralespsicologia" target="_blank" rel="noreferrer" className="social-circle">Tk</a> 
      </section>

    </main>
  );
}