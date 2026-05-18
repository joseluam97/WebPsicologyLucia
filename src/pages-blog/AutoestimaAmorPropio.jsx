import React from 'react';
import { Link } from 'react-router-dom';
import { FaCalendarDays, FaUser, FaArrowLeft } from 'react-icons/fa6';

import BlogHeader from '../components/BlogHeader';

// 1. Imagen destacada de la cabecera
import imgAutoestimaDestacada from '../assets/images/autoestima-portada.webp'; 
// 2. Imágenes internas del contenido (Cambia las rutas por las válidas)
import imgAutoestimaInterior1 from '../assets/images/autoestima-2.webp';
import imgAutoestimaInterior2 from '../assets/images/autoestima.webp';

const AutoestimaAmorPropio = () => {
  return (
    <div className="w-full bg-brand-white min-h-screen pb-20">
      
      {/* CABECERA DEL ARTÍCULO */}
      <BlogHeader 
        title="Autoestima y Amor Propio" 
        category="Bienestar" 
        date="Septiembre 2024" 
        image={imgAutoestimaDestacada}
      />

      {/* CONTENIDO DEL ARTÍCULO */}
      <section className="pt-16 px-6">
        <div className="max-w-[750px] mx-auto space-y-6 text-brand-text text-[17px] leading-relaxed">
          
          <p>
            He decidido que el primer post que iba a hacer y a lo que le iba a dedicar un espacio en este pequeño trozo de mi trabajo iba a ser la autoestima. La autoestima es una de las bases de nuestra existencia, aunque realmente a veces no sabemos muy bien ni lo que es.
          </p>

          <p>
            Tampoco es fácil tenerlo claro, vivimos rodeados de fuentes de información. Podemos llegar a encontrar dos cosas diferentes sobre una misma cosa. Pero yo aquí, voy a intentar explicar de la mejor manera que sé qué es la autoestima. También cómo podemos identificar que nuestra autoestima esta baja o cómo podemos mejorar la autoestima.
          </p>

          <h2 className="text-brand-tittle text-2xl font-bold mt-10 mb-4">¿Qué es la autoestima?</h2>
          <p>
            Empecemos por el concepto. Es decir, qué es, la descripción teórica sería: la autoestima es el valor que le damos a nuestro autoconcepto. Y ¡vaya!, otra palabra rara. El autoconcepto es, básicamente, qué conocemos de nosotros mismos.
          </p>
          <p>
            ¿Qué quiero decir con todo eso? Que el autoconcepto me permite darme a mí misma una descripción: qué soy, qué tengo, cuáles son mis puntos fuertes y/o débiles. Y la autoestima es el valor (puede ser positivo o negativo) que le doy a esa descripción.
          </p>
          <p>
            Podemos decir entonces que sin el autoconocimiento no puede haber amor propio. Porque ¿cómo puedo querer algo que no conozco? Es por ello que, a mí, me gusta centrar el camino de una mejora de la autoestima en el autoconocimiento: descubrirnos a nosotros mismos.
          </p>
          <p>
            Pasamos super poco tiempo a solas con nosotros mismos. Y tú podrás pensar: ¡anda ya! Si estoy todo el día conmigo misma. Y sí, tienes razón, pero ¿Cuántas veces te sientas a escucharte como cuando escuchas a tu amiga? ¿Cuántas veces te guardas en la semana un ratito para dedicarte a ti misma? Seguramente pocos, porque la vida, en general, va acelerada y nos cuesta mucho frenar para poder conocernos. Pero yo, desde aquí te invito a hacerlo, vas a descubrir una persona super guay con la que pasar tiempo, y eres tú.
          </p>

          <h2 className="text-brand-tittle text-2xl font-bold mt-10 mb-4">¿Cuándo y cómo se forma la autoestima?</h2>
          <p>
            Y tal y como te cuento qué es, te voy a contar de dónde viene. Es otra de las preguntas más frecuentes que nos solemos hacer, ¿esto de qué viene? ¿dónde se decide si tengo mucho o poco amor propio?
          </p>
          <p>
            La respuesta corta es: desde que nacemos. La respuesta larga sería que la autoestima se conforma a lo largo de nuestra vida.
          </p>
          <p>
            Cuando somos pequeños nuestro alrededor nos va mandando mensajes sobre cómo somos (y más cuando somos más pequeños). Poco a poco vamos formando una opinión sobre lo que somos y cómo nos ven los demás. Luego se va uniendo lo que nosotros mismos vemos y más tarde, lo que nuestros iguales opinan. Todo eso se va uniendo a las experiencias que vivimos y cómo empezamos a vernos en el mundo.
          </p>
          <p>
            Sumamos todo, le añadimos un poco de especias de la vida y como resultado: la autoestima. Una vez que sabemos qué es y de dónde viene... pasamos a lo que pensamos cuando queremos mejorar la autoestima: ¿QUÉ PUEDO HACER?
          </p>

          {/* IMAGEN INTERIOR 1 RECUPERADA */}
          <div className="py-8">
            <img 
              src={imgAutoestimaInterior1} 
              alt="Autoestima y amor propio" 
              className="w-full rounded-2xl shadow-md object-cover bg-brand-main/10 border border-brand-main/20"
            />
          </div>

          <h2 className="text-brand-tittle text-2xl font-bold mt-10 mb-4">¿Cómo puedo trabajar el amor propio?</h2>
          <p>Pues aquí van algunas cosas que podemos hacer:</p>
          
          <ul className="list-disc pl-6 space-y-4 mb-8 text-brand-text">
            <li>
              <strong>Dedicar tiempo de autocuidado*</strong>
            </li>
            <li>
              <strong>Hacer una lista de afirmaciones positivas:</strong> Pueden ser solo 2 o 3 que me recuerden algo sobre mi valor. Es decir, sobre mí mismo que me pueden ayudar a cambiar mi dialogo interno.
            </li>
            <li>
              <strong>Cuestionar los pensamientos que tengo sobre mi misma:</strong> Por ejemplo: si tengo un pensamiento del tipo “Soy muy molesta”, puedo preguntarme ¿qué señales tengo de que eso es real? ¿y de que no lo es? ¿Por qué me digo esto a mi misma? Si fuera una amiga mía la que está comportándose como lo estoy haciendo, ¿pensaría de ella que está siendo molesta? ¿Este pensamiento y discurso me está ayudando a mejorar o solo me está haciendo sentirme mal?
            </li>
            <li>
              <strong>Cuidar mi entorno:</strong> Cuidar mi entorno significa tanto cuidar las personas que forman parte de mi vida. Por ejemplo, preguntándoles o pasando tiempo con ellos. Como revisar si las personas que pasan tiempo conmigo realmente me hacen sentir bien.
            </li>
          </ul>

          <div className="bg-brand-main/10 p-6 rounded-2xl mb-8">
            <p className="text-sm italic m-0">
              *El autocuidado forma parte del amor propio tal y como forman todo los demás puntos. Aunque esto es un poco más especial porque va más allá de cuestionar y preguntar. Esto pasa por dedicarme un tiempo de calidad y hacer cosas que van desde leer un libro o ver una serie que me gusta. Incluso decir que no a un plan porque tengo una cita conmigo misma.
            </p>
          </div>

          <div className="bg-brand-orange/10 border-l-4 border-brand-orange p-4 mb-10">
            <p className="m-0 text-sm">
              <strong>Disclaimer:</strong> Esto son unas estrategias generalizadas que se pueden aplicar para la autoestima. Si crees que necesitas una ayuda más profundizada para conocerte. Que tienes heridas que no logras sanar. O que te sientes profundamente mal puedes ponerte en contacto conmigo para abordarlo juntas.
            </p>
          </div>

          {/* IMAGEN INTERIOR 2 RECUPERADA */}
          <div className="py-8">
            <img 
              src={imgAutoestimaInterior2} 
              alt="Autoestima y amor propio" 
              className="w-full rounded-2xl shadow-md object-cover bg-brand-main/10 border border-brand-main/20"
            />
          </div>

          <h2 className="text-brand-tittle text-2xl font-bold mt-10 mb-4">¿Cómo podemos detectar baja autoestima?</h2>
          <p>
            Eso es lo que podemos hacer para poder subir nuestra autoestima, pero ¿cómo sé que tengo baja autoestima?
          </p>
          <p>
            Muchas veces podemos detectar que no tenemos mucho amor propio por cosas como no sentirme a gusto con la ropa que me pongo. Pero hay veces que va mucho más allá algunas de las cosas que nos pueden hacer saltar las alarmas puede ser:
          </p>

          <ul className="list-disc pl-6 space-y-2 mb-8">
            <li>Me siento mal con mi cuerpo.</li>
            <li>Me siento mal con mi forma de ser (me siento torpe, molesto, poco acertado...)</li>
            <li>Me cuesta tomar decisiones (desde lo más sencillo hasta lo más complejo).</li>
            <li>Necesito pedir consejo para todo porque lo que yo decido yo pienso que no está tan bien.</li>
          </ul>

          <p>
            Todas estas señales nos pueden ayudar a detectar que algo pasa con nuestra autoestima y podemos tomar acción con respecto a ello. Muchas veces (por no decir todas) no es tan sencillo. No va solo de seguir unos pasos, pero si nos pueden servir de guía para saber dónde estoy y hacia dónde quiero llegar. Cuando queremos trabajar en el amor propio.
          </p>
          <p>
            Desde que somos muy pequeñitos nos enseñan a querernos lo justo. Es por eso que todos los profesionales os ayudamos a quereros mucho y mejor. A pesar de que sea un trabajo de toda la vida, como persona que sigue trabajando en quererse. (Hasta cuando te sientes una bolita de inseguridad), merece la pena. Merece la pena verte a ti misma aceptando quién eres y tratando de ser tu mejor versión.
          </p>

          {/* CTA FINAL */}
          <div className="mt-16 p-8 bg-brand-primary/20 rounded-3xl text-center border border-brand-main/40 shadow-sm">
            <h3 className="text-2xl font-bold text-brand-tittle mb-4">¿Necesitas ayuda personalizada?</h3>
            <p className="text-brand-text mb-8">Reserva una consulta y hablemos.</p>
            <Link to="/contacto-terapeuta" className="inline-block bg-brand-orange text-white px-8 py-3.5 rounded-full font-bold hover:bg-brand-secondary transition-all transform hover:-translate-y-1 shadow-md">
              Contactar ahora
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
};

export default AutoestimaAmorPropio;