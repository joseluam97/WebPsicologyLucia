import React from 'react';
import '../css/pages/Contacto.css';
import { Mail, Phone, MessageSquare, MessageCircle } from 'lucide-react';
import imagen_lucia_morales from '../assets/images/Lucia-Morales-3.jpg';
import Doctoralia from '../components/Doctoralia';

const Contacto = () => {
    return (
        <div className="contacto-container">
            {/* SECCIÓN HERO - CITA */}
            <section className="section-hero">
                <div className="hero-content">
                    <div className="hero-text">
                        <h1>Solicita una Cita con tu Terapeuta</h1>
                        <h2>¿Estás Buscando a una Terapeuta que Pueda Ayudarte con tu Situación Emocional?</h2>
                        <p>
                            Como terapeuta estoy aquí para ofrecerte un espacio seguro y confidencial donde
                            puedas explorar tus emociones y trabajar en tus desafíos personales. Mi propósito
                            es proporcionarte un apoyo profesional personalizado...
                        </p>
                    </div>
                    <Doctoralia />
                </div>
            </section>

            {/* SECCIÓN DISPONIBILIDAD */}
            <section className="section-disponibilidad">
                <div className="inner-container">
                    <h2>Tu Terapeuta Personal, Siempre Disponible</h2>
                    <p className="description-text">
                        Estoy aquí para ofrecerte apoyo y orientación en cualquier desafío emocional.
                        Como tu terapeuta de confianza, te proporcionaré un espacio seguro y comprensivo.
                    </p>

                    <div className="contact-grid">
                        {/* Redes Sociales */}
                        <div className="contact-col">
                            <h3>Redes Sociales</h3>
                            <div className="icon-link">
                                <MessageCircle size={20} /> <span>Instagram</span>
                            </div>
                            <div className="icon-link">
                                <MessageCircle size={20} /> <span>TikTok</span>
                            </div>
                        </div>

                        {/* Escríbeme */}
                        <div className="contact-col">
                            <div className="col-header">
                                <div className="icon-bg"><Mail size={24} /></div>
                                <h3>Escríbeme</h3>
                            </div>
                            <p className="contact-info">luciamorales.psicologa@gmail.com</p>
                            <p className="sub-info">Contestamos en 12 horas</p>
                        </div>

                        {/* Llámame */}
                        <div className="contact-col">
                            <div className="col-header">
                                <div className="icon-bg"><Phone size={24} /></div>
                                <h3>Llámame</h3>
                            </div>
                            <p className="contact-info">614149130</p>
                            <p className="sub-info">Lunes - Viernes: 08:00 - 20:00</p>
                        </div>

                        {/* WhatsApp */}
                        <div className="contact-col">
                            <div className="col-header">
                                <div className="icon-bg"><MessageSquare size={24} /></div>
                                <h3>WhatsApp</h3>
                            </div>
                            <p className="contact-info">614149130</p>
                            <p className="sub-info">Lunes - Viernes: 08:00 - 20:00</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECCIÓN SOBRE MÍ BREVE */}
            <section className="section-about-footer">
                <div className="about-content">
                    <div className="about-image">
                        <img src={imagen_lucia_morales} alt="Lucía Morales" />
                    </div>
                    <div className="about-text">
                        <h2>Soy Lucía Morales</h2>
                        <p className="subtitle">Psicóloga General Sanitaria</p>
                        <p>Te invito a visitar la página <strong>Sobre mí</strong> para conocer más sobre mi enfoque y experiencia. ¡Conozcámonos mejor!</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contacto;