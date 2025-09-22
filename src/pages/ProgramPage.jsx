import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Star, Globe, HeartHandshake, ArrowLeft, CheckCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const programsData = {
  'brilla-zapopan': {
    icon: <Star className="text-white" size={48} />,
    title: 'Brilla Zapopan',
    color: { bg: 'gradient-bg-2', iconBg: 'bg-yellow-400', text: 'text-yellow-900' },
    image: "Jóvenes talentosos recibiendo un premio en un escenario",
    src: "/assets/images/content/retas.jpg",
    summary: 'Un programa diseñado para identificar, reconocer y promover el talento excepcional de las juventudes de Zapopan en áreas como el arte, la ciencia, el deporte y el emprendimiento social.',
    details: [
      'Buscamos a jóvenes que estén marcando la diferencia y cuyo trabajo inspire a otros.',
      'Los ganadores reciben un premio económico, mentoría especializada y visibilidad para sus proyectos.',
      'Es una plataforma para que el talento local brille y alcance su máximo potencial.'
    ],
    requirements: ['Tener entre 15 y 29 años.', 'Residir en el municipio de Zapopan.', 'Demostrar una trayectoria destacada en su área.'],
    gallery: [
      "Ganador del premio de ciencia mostrando su prototipo",
      "Joven artista pintando un mural en un evento del programa",
      "Equipo de emprendimiento social celebrando su victoria"
    ]
  },
  'juventudes-presente': {
    icon: <HeartHandshake className="text-white" size={48} />,
    title: 'JuventudEs Presente',
    color: { bg: 'gradient-bg-3', iconBg: 'bg-cyan-400', text: 'text-cyan-900' },
    image: "Grupo de jóvenes voluntarios limpiando un parque comunitario",
    src: "/assets/images/content/onu.jpg",
    summary: 'Fomentamos la participación activa de los jóvenes en sus comunidades. A través de proyectos de voluntariado y acción social, creamos un fuerte sentido de pertenencia y responsabilidad cívica.',
    details: [
      'Organizamos jornadas de reforestación, limpieza de espacios públicos y talleres en barrios.',
      'Conectamos a jóvenes con organizaciones de la sociedad civil para que puedan contribuir con su tiempo y talento.',
      'Creemos que la participación comunitaria es clave para construir una sociedad más justa y cohesionada.'
    ],
    requirements: ['Tener entre 14 y 29 años.', 'Vivir en Zapopan.', '¡Tener muchas ganas de ayudar y transformar tu entorno!'],
    gallery: [
      "Voluntarios pintando la fachada de una escuela",
      "Jóvenes entregando donaciones en un centro comunitario",
      "Taller de huertos urbanos para niños del barrio"
    ]
  },
  'zapopan-sin-fronteras': {
    icon: <Globe className="text-white" size={48} />,
    title: 'Zapopan Sin Fronteras',
    color: { bg: 'gradient-bg-1', iconBg: 'bg-pink-400', text: 'text-pink-900' },
    image: "Jóvenes en un intercambio internacional con banderas de México y otro país",
    src: "/assets/images/content/retas.jpg",
    summary: 'Este programa busca formar y fortalecer a líderes juveniles con una visión global. Ofrecemos becas, intercambios y participación en foros internacionales para que los jóvenes de Zapopan se conecten con el mundo.',
    details: [
      'A través de convocatorias, seleccionamos a jóvenes para representar a Zapopan en eventos globales.',
      'Ofrecemos talleres de liderazgo, idiomas y emprendimiento con enfoque internacional.',
      'El objetivo es crear una red de jóvenes líderes que puedan traer nuevas ideas y proyectos a nuestro municipio.'
    ],
    requirements: ['Tener entre 18 y 29 años.', 'Residir en Zapopan.', 'Nivel de inglés intermedio-avanzado.', 'Demostrar liderazgo y compromiso social.'],
    gallery: [
      "Joven zapopano dando una presentación en un foro internacional",
      "Grupo de becarios en un taller de emprendimiento en el extranjero",
      "Ceremonia de despedida para los jóvenes que inician su intercambio"
    ]
  }
};

const ProgramPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const program = programsData[slug];

  const handleApply = () => {
    navigate(`/registro?type=programa&name=${encodeURIComponent(program.title)}`);
  };

  if (!program) {
    return (
      <>
        <Header />
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-4">
          <h1 className="text-4xl font-bold text-purple-600 mb-4">¡Ups! Programa no encontrado</h1>
          <p className="text-gray-600 mb-8">Parece que el programa que buscas no existe o fue movido.</p>
          <Link to="/">
            <Button className="bg-purple-600 hover:bg-purple-700 rounded-full">Volver al Inicio</Button>
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{program.title} | Instituto de las Juventudes de Zapopan</title>
        <meta name="description" content={program.summary} />
      </Helmet>
      <Header />
      <main>
        <motion.section 
          className={`py-20 md:py-32 ${program.color.bg} text-white`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div 
                className={`w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-8 ${program.color.iconBg}`}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring' }}
              >
                {program.icon}
              </motion.div>
              <motion.h1 
                className="text-4xl md:text-6xl font-black mb-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {program.title}
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl text-white/90"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                {program.summary}
              </motion.p>
            </div>
          </div>
        </motion.section>

        <section className="pb-20 pt-10 lg:pt-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-12">
              <div className="lg:col-span-3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="mb-12">
                    <img class="w-full h-auto object-container rounded-xl shadow-lg" alt="Programa" src={program.src} />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">¿De qué se trata?</h2>
                  <div className="space-y-4 text-lg text-gray-700">
                    {program.details.map((detail, i) => <p key={i}>{detail}</p>)}
                  </div>

                  <div className="mt-12">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Galería de Impacto</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {program.gallery.map((altText, i) => (
                        <motion.div key={i} whileHover={{ scale: 1.05 }} className="overflow-hidden rounded-xl shadow-lg">
                          <img class="w-full h-48 object-cover" alt={altText} src="https://images.unsplash.com/photo-1573107571566-426fad25031b" />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
              <aside className="lg:col-span-2">
                <motion.div 
                  className="bg-gray-50 rounded-3xl p-8 sticky top-28"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Requisitos para Participar</h3>
                  <ul className="space-y-4 mb-8">
                    {program.requirements.map((req, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className={`w-6 h-6 mr-3 mt-1 flex-shrink-0 ${program.color.text}`} />
                        <span className="text-gray-700">{req}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    onClick={handleApply}
                    size="lg" 
                    className="w-full bg-purple-500 hover:bg-purple-600 text-white font-bold rounded-full"
                  >
                    Aplicar Ahora
                  </Button>
                </motion.div>
              </aside>
            </div>
            <div className="mt-20 text-center">
              <Link to="/#programas">
                <Button variant="outline" className="rounded-full border-purple-600 text-purple-600 hover:bg-purple-50">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Ver todos los programas
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ProgramPage;