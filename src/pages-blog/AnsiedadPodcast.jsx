import React from 'react';
import { Link } from 'react-router-dom';
import { FaCalendarDays, FaUser, FaArrowLeft, FaSpotify, FaYoutube } from 'react-icons/fa6';
import { Helmet } from 'react-helmet-async';
import BlogHeader from '../components/BlogHeader';

// 1. Imagen destacada de la cabecera
import imgAnsiedadDestacada from '../assets/images/portada-podcast-ansiedad.webp';
// 2. Imagen interna del contenido (Cambia la ruta por la válida cuando la tengas)
import imgInsideOut from '../assets/images/ansiedad-inside-out.webp';

const AnsiedadPodcast = () => {
  return (
    <>
      <Helmet>
        <meta name="author" content="Lucía Morales Reos" />
        <meta name="publisher" content="Julio 2024" />
        <meta name="keywords" content="ansiedad" />
        <title>Ansiedad: Todo lo que Necesitas Saber - Lucía Morales Reos</title>
        <meta name="description" content="Aprende a manejar la ansiedad y superar un ataque de ansiedad con consejos prácticos y estrategias efectivas en nuestro podcast." />
        <link rel="canonical" href="/ansiedad-podcast/" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Ansiedad: Todo lo que Necesitas Saber - Lucía Morales Reos" />
        <meta property="og:description" content="Aprende a manejar la ansiedad y superar un ataque de ansiedad con consejos prácticos y estrategias efectivas en nuestro podcast." />
        <meta property="og:url" content="/ansiedad-podcast/" />
        <meta property="og:site_name" content="Lucía Morales Reos" />
        <meta property="article:published_time" content="2024-09-02T07:00:03+00:00" />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="720" />
        <meta property="og:image:type" content="image/webp" />
        <meta name="author" content="luciamorales.psicologa@gmail.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:label1" content="Escrito por" />
        <meta name="twitter:data1" content="luciamorales.psicologa@gmail.com" />
        <meta name="twitter:label2" content="Tiempo de lectura" />
        <meta name="twitter:data2" content="3 minutos" />
      </Helmet>
      <div className="w-full bg-brand-white min-h-screen pb-20">

        {/* CABECERA DEL ARTÍCULO */}
        <BlogHeader
          title="¿Hablamos de la ansiedad?"
          category="Podcast"
          date="Septiembre 2024"
          image={imgAnsiedadDestacada}
        />

        {/* CONTENIDO DEL ARTÍCULO */}
        <section className="pt-16 px-6">
          <div className="max-w-[750px] mx-auto space-y-6 text-brand-text text-[17px] leading-relaxed">

            <p>
              ¡También tenemos podcast! Desde la colaboración de EmocionarSe vengo en formato podcast. En este primer episodio hablamos sobre algo que está presente en la vida de todos en más o menos medida. Hablamos de la ansiedad.
            </p>

            <p>
              Junto con Arancha Clares, hablamos sobre qué es la ansiedad, cómo podemos identificar los síntomas, la presencia que tiene en nuestra vida e incluso cómo puede ser representado un ataque de ansiedad en películas y lo importante que es sentirnos representados.
            </p>

            <p>
              En este podcast hemos querido dejar una pequeña parte de todo lo grande que es. Incluso lo importante que es conocer que, aunque parece que somos los raros, hoy en día es muy difícil no sentirla. Debido al ritmo que vamos o a como estamos acostumbrados a gestionar este tipo de emociones. Contamos incluso situaciones personales en las que te puedes sentir incluso representado.
            </p>

            <div className="flex flex-wrap gap-4 py-6">
              <a href="#spotify" className="inline-flex items-center gap-2 bg-[#1DB954] text-white px-6 py-3 rounded-full font-bold hover:-translate-y-1 transition-all shadow-md">
                <FaSpotify size={20} /> Spotify
              </a>
              <a href="#youtube" className="inline-flex items-center gap-2 bg-[#FF0000] text-white px-6 py-3 rounded-full font-bold hover:-translate-y-1 transition-all shadow-md">
                <FaYoutube size={20} /> YouTube
              </a>
            </div>

            <h2 className="text-brand-tittle text-2xl font-bold mt-10 mb-4">¿Qué es la ansiedad?</h2>
            <p>
              La ansiedad es una emoción que nos nace de intentar protegernos de los peligros a los que nos enfrentamos. Esta emoción nos prepara, pone en juego todas las estrategias que tenemos en nuestro pequeño baúl. (Aunque a veces no le sale del todo bien, más bien mal).
            </p>

            <h2 className="text-brand-tittle text-2xl font-bold mt-10 mb-4">¿Qué presencia tiene en el día a día?</h2>
            <p>
              Realmente la ansiedad al ser una emoción que nos prepara está presente en múltiples contextos. Pueden ir de más cotidianos, como puede ser presentarte a un examen a mucho menos como puede ser montarte a un avión. En todas esas situaciones puede aparecer esta emoción y muchos pensamientos asociados.
            </p>
            <p>
              Otra de las cosas que mencionamos en el podcast es la presencia de pensamientos intrusivos. Son ideas que se fijan en la mente y que son difíciles de desprender. A pesar de eso la clave no es intentar eliminarlos (entre otras cosas porque es imposible) sino qué hacemos con ellos, cómo gestionamos ese pensamiento y qué nos hace sentir.
            </p>
            <p>
              Cuando empezamos a entenderla, qué nos genera y en qué quiere ayudarnos podemos empezar a cambiar la gestión de lo que sentimos.
            </p>

            <h2 className="text-brand-tittle text-2xl font-bold mt-10 mb-4">Ataque de ansiedad en las películas</h2>
            <p>
              En una de las últimas películas de Disney, representan un ataque de ansiedad y cómo se va construyendo poco a poco durante la película. Es un ejemplo de entender cómo el ataque de ansiedad no es simplemente lo siento y me da. Un ataque de ansiedad es la expresión corporal de la acumulación de la sobreactivación del cuerpo. Esa ansiedad nos da pequeñas pistas en nuestra vida. Pero, la mayoría de las veces, pasan desapercibidas debido al ritmo y a la exigencia de la vida actual.
            </p>

            {/* IMAGEN INTERIOR RECUPERADA */}
            <div className="py-6">
              <img
                src={imgInsideOut}
                alt="ansiedad inside out"
                className="w-full rounded-2xl shadow-md object-cover bg-brand-main/10 border border-brand-main/20"
              />
            </div>

            <p className="pt-6 font-medium text-brand-tittle">
              Espero que esos 20 minutitos que dediquéis a ver o escuchar el podcast os ayude. O por lo menos aprendáis un poquito de lo que hemos querido trasmitir juntas. Espero que os guste y nos vemos en el próximo, porque habrá más. ¡Cuidaos mucho!
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
    </>
  );
};

export default AnsiedadPodcast;