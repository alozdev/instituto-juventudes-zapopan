import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const callsData = [
  {
    slug: 'hackathon-clima-2025',
    title: 'Hackathon por el Clima Zapopan 2025',
    category: 'Innovación y Tecnología',
    date: '25-27 Oct, 2025',
    location: 'Centro de Innovación, Zapopan',
    time: '9:00 AM - 9:00 PM',
    description: 'Jóvenes desarrolladores, diseñadores y emprendedores se unen para crear soluciones tecnológicas a los desafíos ambientales de nuestra ciudad. ¡Habrá premios, mentoría y mucha pizza!',
    image: "Equipo de jóvenes programando en un hackathon",
    color: 'from-cyan-500 to-purple-500',
    src: "/assets/images/content/retas.jpg"
  },
  {
    slug: 'festival-mural-es',
    title: 'Festival de Arte Urbano "Mural-Es"',
    category: 'Arte y Cultura',
    date: '15 Nov, 2025',
    location: 'Corredor Cultural Chapalita',
    time: '12:00 PM - 8:00 PM',
    description: 'Una explosión de color y creatividad donde artistas urbanos locales transformarán muros grises en obras de arte. Habrá música en vivo, food trucks y talleres de graffiti para todas las edades.',
    image: "Artista de graffiti creando un mural colorido",
    color: 'from-pink-500 to-yellow-500',
    src: "/assets/images/content/onu.jpg"
  },
];

const CallCard = ({ call, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col lg:flex-row hover-scale"
    >
      <div className="lg:w-2/5">
        <img class="w-full h-64 lg:h-full object-cover" alt={call.image} src={call.src} />
      </div>
      <div className="lg:w-3/5 p-8 flex flex-col">
        <div>
          <span className={`inline-block px-3 py-1 text-sm font-semibold text-white bg-gradient-to-r ${call.color} rounded-full mb-4`}>
            {call.category}
          </span>
          <h3 className="text-3xl font-black text-gray-800 mb-4">{call.title}</h3>
          <p className="text-gray-600 mb-6">{call.description}</p>
        </div>
        <div className="mt-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-gray-700 mb-6">
            <div className="flex items-center">
              <Calendar className="w-5 h-5 mr-2 text-purple-600" />
              <span className="font-medium">{call.date}</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 mr-2 text-purple-600" />
              <span className="font-medium">{call.location}</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-5 h-5 mr-2 text-purple-600" />
              <span className="font-medium">{call.time}</span>
            </div>
          </div>
          <Link to={`/convocatorias/${call.slug}`}>
            <Button className="w-full sm:w-auto bg-purple-500 hover:bg-purple-600 rounded-full font-bold text-white">
              Más Información <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

const CallsPage = () => {
  return (
    <>
      <Helmet>
        <title>Convocatorias | Instituto de las Juventudes de Zapopan</title>
        <meta name="description" content="Entérate de los próximos eventos, talleres y oportunidades para participar y transformar tu comunidad." />
      </Helmet>
      <Header />
      <main>
        <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-cyan-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl lg:text-7xl font-black text-gray-800 mb-4">
                Próximas <span className="text-purple-600">Convocatorias</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                ¡Aquí es donde la acción sucede! Encuentra tu próximo proyecto, taller o evento y únete a la comunidad.
              </p>
            </motion.div>

            <div className="space-y-12">
              {callsData.map((call, index) => (
                <CallCard key={index} call={call} index={index} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default CallsPage;