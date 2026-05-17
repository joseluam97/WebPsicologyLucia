import React from 'react';
import '../css/pages/TerapiaDePareja.css';
import { Link } from 'react-router-dom';

import terapia_pareja_1 from '../assets/images/terapia-de-pareja-1.jpg';
import terapia_pareja_2 from '../assets/images/terapia-de-pareja-2.jpg';
import terapia_pareja_3 from '../assets/images/terapia-de-pareja-3.jpg';

import imagen_1 from '../assets/images/comunicacion-de-pareja.svg';
import imagen_2 from '../assets/images/resolucion-de-conflictos.svg';
import imagen_3 from '../assets/images/comprension-de-pareja.svg';
import imagen_4 from '../assets/images/aprender-en-pareja.svg';
import imagen_5 from '../assets/images/fortalecer-el-vinculo.svg';
import imagen_6 from '../assets/images/patrones-negativos.svg';
import imagen_7 from '../assets/images/crecimiento-personal.svg';
import imagen_8 from '../assets/images/autoconocimiento.svg';

// Componente reutilizable para el Call To Action (Franja Marrón)
const CTABanner = () => (
    <div className="cta-banner">
        <p>¿Listos para Empezar? Agendad vuestra primera sesión ahora</p>
        <Link to="/contacto-terapeuta" className="btn-primary">¡Empecemos!</Link>
    </div>
);

// Array de datos para los beneficios
const beneficios = [
    { text: "Mejoraréis la comunicación en pareja", imagen_text: imagen_1 },
    { text: "Resolveréis conflictos constructivamente", imagen_text: imagen_2 },
    { text: "Fomentaréis la comprensión mutua", imagen_text: imagen_3 },
    { text: "Aprenderéis nuevas habilidades juntos", imagen_text: imagen_4 },
    { text: "Fortaleceréis el vínculo emocional", imagen_text: imagen_5 },
    { text: "Identificaréis patrones negativos", imagen_text: imagen_6 },
    { text: "Fomentaréis el crecimiento personal", imagen_text: imagen_7 },
    { text: "Aumentaréis el autoconocimiento", imagen_text: imagen_8 },
];

// Array de datos para las FAQs
const faqs = [
    { q: "¿Cuándo deberíamos empezar a considerar mi pareja y yo la terapia de pareja?", a: "La sesiones en pareja pueden ser útiles o necesarias en diversas situaciones. Así como pueden ser la comunicación o conflictos frecuentes. También muchos otros como infidelidades y/o problemas sexuales. Es decir, todo lo que os cree un malestar en la pareja." },
    { q: "¿Qué pasa durante una sesión de terapia de pareja presencial?", a: "En una sesión, generalmente facilitamos una discusión abierta entre los miembros de la pareja. Ayudándoles así a expresar sus sentimientos y preocupaciones. También a identificar patrones de comportamiento problemáticos y trabajar en soluciones. De esta manera aprendereis a llegar a acuerdos entre ambos." },
    { q: "¿La terapia de pareja presencial funciona?", a: "Generalmente muchas de las parejas encuentran mejoría en su relación. Aunque muchos factores influyen en esto como el compromiso de las dos partes de la pareja en el proceso." },
    { q: "¿Qué pasa si uno de los dos no quiere asistir a la terapia?", a: "Es ideal que ambos miembros de la pareja estén dispuestos a participar. Si uno de los dos se muestra reacio, es importante discutir las razones. Y tratar de abordar esas preocupaciones antes de tomar una decisión." },
    { q: "¿La terapia de pareja presencial puede ayudar aunque nos estemos planteando separarnos?", a: "Sí, las sesiones de pareja puede ser útil incluso si estáis pensando separaros. Puede ayudaros a tomar decisiones y a entender si la relación puede ser salvada o cómo separarse de manera más amigable." }
];

export default function TerapiaDePareja() {
    return (
        <main>
            {/* Sección Hero */}
            <section className="container">
                <div className="hero-image-container">
                    <img
                        src={terapia_pareja_1}
                        alt="Terapia de pareja"
                        className="hero-image"
                    />
                </div>
                <div className="hero-text">
                    <h1>Terapia de Pareja Mejora y Fortalece tu Relación</h1>
                    <p>La terapia de pareja tiene muchos objetivos, entre otros, podréis mejorar la comunicación. También, resolver conflictos de manera efectiva. El espacio que creamos es un lugar seguro para expresar sentimientos y necesidades. De esta manera os ayudo a tu pareja y a ti a reconectar y fortalecer la relación. Juntos, trabajaréis en superar desafíos y construir una base sólida para una relación más armoniosa y satisfactoria.</p>
                    <p>A través del enfoque integrador os guiaré en este proceso. La terapia de pareja busca solucionar problemas actuales. Además de prevenir futuros conflictos. Se promueve un entendimiento mutuo y una conexión emocional más profunda. Estaré aquí para apoyaros en cada paso del camino hacia una relación sana y feliz.</p>
                </div>
            </section>

            <CTABanner />

            {/* Sección Importancia */}
            <section className="container">
                <h2 className="text-center" style={{ marginBottom: '3rem' }}>¿Creéis que no os está yendo bien? La terapia de pareja os proporcionará herramientas para mejorar vuestro vínculo emocional.</h2>
                <div className="section-split">
                    <div>
                        <h3>¿Por qué es importante?</h3>
                        <p>La terapia de pareja sirve para buscar los puntos fuertes y débiles de la relación. A partir de ahí poder construir un vínculo más sano y fuerte. Aprenderéis estrategias para superar problemas recurrentes y fortalecer la conexión emocional. Este proceso proporciona un lugar seguro. En el que las dos personas pueden expresar sus sentimientos y necesidades abiertamente. Facilitando el entendimiento mutuo sin ser juzgados.</p>
                        <p>Además, la terapia de pareja ayuda a reconstruir la confianza. Proporciona herramientas para manejar el estrés y las tensiones. Creando un ambiente de respeto y apoyo mutuo. Trabajaréis juntos en construir una base sólida. De esta manera podréis construir una relación más armoniosa, saludable y satisfactoria.</p>
                    </div>
                    <div>
                        <img src={terapia_pareja_2} alt="Terapeuta escuchando a pareja" />
                    </div>
                </div>
            </section>

            {/* Sección Beneficios */}
            <section className="container">
                <h2 className="text-center">Beneficios de la terapia de pareja</h2>
                <div className="benefits-grid">
                    {beneficios.map((ben, idx) => (
                        <div className="benefit-card" key={idx}>
                            <div className="benefit-icon">
                                {/* Aquí va el icono. Uso un div circular como el del diseño base */}
                                <img
                                    src={ben.imagen_text}
                                    alt={ben.text}
                                />
                            </div>
                            <p>{ben.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            <CTABanner />

            {/* Sección Eficacia */}
            <section className="container">
                <h2 className="text-center" style={{ marginBottom: '3rem' }}>¿La Terapia de Pareja Funciona? Descubre su Eficacia y Beneficios</h2>
                <div className="section-split">
                    <div>
                        <img src={terapia_pareja_3} alt="Pareja abrazada" />
                    </div>
                    <div>
                        <p>La terapia de pareja ha demostrado ser altamente efectiva en mejorar la comunicación. También para fortalecer las relaciones. Las parejas pueden identificar y abordar los conflictos e intereses aprendiendo nuevas habilidades.</p>
                        <p>La terapia de pareja proporciona un espacio seguro y de apoyo donde las parejas pueden trabajar juntas. De esta manera construyen una base sólida y duradera para su relación. También se promueve un mayor entendimiento mutuo y una conexión emocional más profunda. En última instancia, la eficacia de la terapia de pareja radica en el compromiso y la voluntad de ambos. Trabajar en conjunto hacia un objetivo común: una relación más saludable y satisfactoria.</p>
                    </div>
                </div>
            </section>

            {/* Sección Tres Pasos */}
            <section className="container">
                <h2 className="text-center">Cómo Empezar vuestro Proceso Terapéutico en Tres Sencillos Pasos</h2>
                <div className="steps-container">
                    <div className="step-card">
                        <div className="step-number">1</div>
                        <div className="step-content">
                            <h4>Rellena el formulario inicial</h4>
                            <p>Completen el formulario de contacto para comenzar vuestras sesiones. Cuéntenme un poco sobre su situación.</p>
                        </div>
                    </div>
                    <div className="step-card">
                        <div className="step-number">2</div>
                        <div className="step-content">
                            <h4>Llamada para conocerlos mejor</h4>
                            <p>Recibirán una llamada para entender su situación y necesidades. Esto asegurará que su terapia de pareja sea efectiva y personalizada.</p>
                        </div>
                    </div>
                    <div className="step-card">
                        <div className="step-number">3</div>
                        <div className="step-content">
                            <h4>Programen su primera sesión</h4>
                            <p>Agenden su primera en un horario conveniente. Comiencen juntos su camino hacia el bienestar.</p>
                        </div>
                    </div>
                </div>
            </section>

            <CTABanner />

            {/* Sección FAQ */}
            <section className="container">
                <h3 className="text-center">Preguntas frecuentes</h3>
                <div className="faq-container">
                    {faqs.map((faq, index) => (
                        <details key={index}>
                            <summary>{faq.q}</summary>
                            <p>{faq.a}</p>
                        </details>
                    ))}
                </div>
            </section>

        </main>
    );
}