import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, MapPin, Clock, Award } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const callsDetailsData = {
  'hackathon-clima-2025': {
    title: 'Hackathon por el Clima Zapopan 2025',
    category: 'Innovación y Tecnología',
    date: '25-27 Oct, 2025',
    location: 'Centro de Innovación, Zapopan',
    time: '9:00 AM - 9:00 PM',
    color: { bg: 'bg-gradient-to-br from-cyan-500 to-blue-500', text: 'text-cyan-400' },
    image: "Equipo de jóvenes programando en un hackathon",
    src: "/assets/images/content/retas.jpg",
    summary: 'Un maratón de 48 horas donde el talento joven de Zapopan se une para crear soluciones tecnológicas innovadoras a los desafíos ambientales de nuestra ciudad.',
    details: [
      'Durante el evento, los equipos trabajarán en proyectos que aborden problemas como la gestión de residuos, la calidad del aire, el ahorro de agua y las energías renovables.',
      'Contaremos con mentores expertos de la industria tecnológica y ambiental para guiar a los participantes.',
      'El último día, los equipos presentarán sus prototipos ante un jurado de expertos. ¡Los mejores proyectos recibirán premios increíbles para seguir desarrollando su idea!'
    ],
    agenda: [
      { day: 'Día 1', desc: 'Bienvenida, formación de equipos y comienzo del desarrollo.' },
      { day: 'Día 2', desc: 'Día completo de desarrollo con mentorías y talleres.' },
      { day: 'Día 3', desc: 'Finalización de proyectos, presentaciones y premiación.' },
    ],
    prizes: ['Premio económico para el primer lugar.', 'Incubación del proyecto en el Centro de Innovación.', 'Becas para cursos de tecnología.'],
    gallery: [
      "Jóvenes colaborando en una pizarra blanca",
      "Mentor ayudando a un equipo con su código",
      "Equipo ganador celebrando en el escenario"
    ]
  },
  'festival-mural-es': {
    title: 'Festival de Arte Urbano "Mural-Es"',
    category: 'Arte y Cultura',
    date: '15 Nov, 2025',
    location: 'Corredor Cultural Chapalita',
    time: '12:00 PM - 8:00 PM',
    color: { bg: 'bg-gradient-to-br from-pink-500 to-purple-500', text: 'text-pink-400' },
    image: "Artista de graffiti creando un mural colorido",
    src: "/assets/images/content/onu.jpg",
    summary: 'Una celebración de la creatividad y el color que transformará el paisaje urbano de Zapopan. Artistas locales tomarán los muros para contar historias y embellecer nuestra ciudad.',
    details: [
      'Este festival es una plataforma para visibilizar el talento de los artistas urbanos de Zapopan y promover el arte como una herramienta de transformación social.',
      'Además de la creación de murales en vivo, habrá una zona de talleres gratuitos de stencil, graffiti y otras técnicas de arte urbano para que todos puedan participar.',
      'La jornada estará amenizada con bandas locales, DJs y una variada oferta gastronómica de food trucks. ¡Un plan perfecto para toda la familia!'
    ],
    agenda: [
      { day: '12 PM', desc: 'Apertura del festival y comienzo de murales en vivo.' },
      { day: '2 PM', desc: 'Inicio de talleres de arte urbano.' },
      { day: '5 PM', desc: 'Conciertos de bandas locales.' },
      { day: '8 PM', desc: 'Cierre del festival.' },
    ],
    prizes: ['Selección de artistas para proyectos municipales.', 'Materiales de arte para los participantes.', 'Reconocimiento en plataformas del Instituto.'],
    gallery: [
      "Niños participando en un taller de stencil",
      "Banda de rock tocando en el escenario del festival",
      "Vista general de varios murales terminados"
    ]
  }
};

const CallDetailPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const call = callsDetailsData[(slug !== 'websnap') ? slug : Object.keys(callsDetailsData)[0]];

  const handleRegister = () => {
    navigate(`/registro?type=convocatoria&name=${encodeURIComponent(call.title)}`);
  };

  if (!call) {
    return (
      <>
        <Header />
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-4">
          <h1 className="text-4xl font-bold text-purple-600 mb-4">¡Ups! Convocatoria no encontrada</h1>
          <p className="text-gray-600 mb-8">Parece que el evento que buscas no existe o fue movido.</p>
          <Link to="/convocatorias">
            <Button className="bg-purple-600 hover:bg-purple-700 rounded-full">Ver todas las convocatorias</Button>
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{call.title} | Convocatorias</title>
        <meta name="description" content={call.summary} />
      </Helmet>
      <Header />
      <main>
        <motion.section 
          className={`py-20 md:py-32 ${call.color.bg} text-white`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div 
                className="inline-block px-4 py-2 text-sm font-semibold text-white bg-white/20 rounded-full mb-6"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {call.category}
              </motion.div>
              <motion.h1 
                className="text-4xl md:text-6xl font-black mb-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {call.title}
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl text-white/90"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                {call.summary}
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
                    <img class="w-full h-auto object-container rounded-xl shadow-lg" alt="Programa" src={call.src} />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">Detalles del Evento</h2>
                  <div className="space-y-4 text-lg text-gray-700">
                    {call.details.map((detail, i) => <p key={i}>{detail}</p>)}
                  </div>

                  <div className="mt-12">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Galería del Evento</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {call.gallery.map((altText, i) => (
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
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Información Clave</h3>
                  <ul className="space-y-4 mb-8">
                      <li className="flex items-center"><Calendar className={`w-6 h-6 mr-3 flex-shrink-0 ${call.color.text}`} /> <span className="text-gray-700">{call.date}</span></li>
                      <li className="flex items-center"><Clock className={`w-6 h-6 mr-3 flex-shrink-0 ${call.color.text}`} /> <span className="text-gray-700">{call.time}</span></li>
                      <li className="flex items-center"><MapPin className={`w-6 h-6 mr-3 flex-shrink-0 ${call.color.text}`} /> <span className="text-gray-700">{call.location}</span></li>
                  </ul>
                  
                  <h3 className="text-2xl font-bold text-gray-800 mb-6 mt-8">Premios y Reconocimientos</h3>
                  <ul className="space-y-4 mb-8">
                    {call.prizes.map((prize, i) => (
                      <li key={i} className="flex items-start">
                        <Award className={`w-6 h-6 mr-3 mt-1 flex-shrink-0 ${call.color.text}`} />
                        <span className="text-gray-700">{prize}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    onClick={handleRegister}
                    size="lg" 
                    className="w-full bg-purple-500 hover:bg-purple-600 text-white font-bold rounded-full"
                  >
                    Registrarme al Evento
                  </Button>
                </motion.div>
              </aside>
            </div>
            <div className="mt-20 text-center">
              <Link to="/convocatorias">
                <Button variant="outline" className="rounded-full border-purple-600 text-purple-600 hover:bg-purple-50">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Ver todas las convocatorias
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

export default CallDetailPage;