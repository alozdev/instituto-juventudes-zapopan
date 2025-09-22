import React, { useRef } from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ObjectivesSection from '@/components/ObjectivesSection';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { scroller } from 'react-scroll';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Star, Globe, HeartHandshake, Target, Eye, Gem } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const HomePage = () => {
  const navigate = useNavigate();
  const hash = window.location.hash.substring(1);

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const imageOneY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const imageTwoY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const imageThreeY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const circle1Y = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
  const circle2Y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const circle3Y = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);


  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        scroller.scrollTo(hash, {
          spy: true,
          smooth: true,
          offset: -70,
          duration: 500,
        });
      }, 100);
    }
  }, [hash]);

  const programs = [
    {
      slug: 'brilla-zapopan',
      icon: <Star className="text-yellow-900" size={32} />,
      title: 'Brilla Zapopan',
      description: 'Reconocer y promover el talento juvenil en diversas áreas.',
      color: 'bg-yellow-100',
    },
    {
      slug: 'juventudes-presente',
      icon: <HeartHandshake className="text-cyan-900" size={32} />,
      title: 'JuventudEs Presente',
      description: 'Promover la participación activa de las juventudes en su comunidad.',
      color: 'bg-cyan-100',
    },
    {
      slug: 'zapopan-sin-fronteras',
      icon: <Globe className="text-pink-900" size={32} />,
      title: 'Zapopan Sin Fronteras',
      description: 'Formar y fortalecer a líderes juveniles con visión global.',
      color: 'bg-pink-100',
    },
    /*{
      slug: 'zapopan-sin-fronteras',
      icon: <Globe className="text-pink-900" size={32} />,
      title: 'Zapopan Sin Fronteras',
      description: 'Formar y fortalecer a líderes juveniles con visión global.',
      color: 'bg-pink-100',
    },*/
  ];

  const aboutItems = [
    {
      icon: <Target size={40} className="text-pink-900" />,
      title: 'Misión',
      description: 'Fomentar la participación activa y el desarrollo integral de las juventudes, creando oportunidades para que se conviertan en agentes de cambio.',
      color: 'bg-pink-100'
    },
    {
      icon: <Eye size={40} className="text-purple-900" />,
      title: 'Visión',
      description: 'Ser un referente en políticas públicas de juventud, consolidando a Zapopan como una ciudad donde los jóvenes son protagonistas del desarrollo.',
      color: 'bg-purple-100'
    },
    {
      icon: <Gem size={40} className="text-yellow-900" />,
      title: 'Valores',
      description: 'Inclusión, Innovación y Colaboración son los pilares que guían cada una de nuestras acciones y programas.',
      color: 'bg-yellow-100'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Instituto de las Juventudes de Zapopan</title>
        <meta name="description" content="Un espacio de diálogo, encuentro y acción para transformar activamente nuestro entorno. ¡Donde los sueños se hacen realidad!" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon"></link>
      </Helmet>
      
      <Header />
      <main>
        {/* Hero Section */}
        <section id="inicio" ref={heroRef} className="bg-purple-500 text-white relative overflow-hidden">
          <motion.div style={{ y: circle1Y }} className="absolute top-1/4 left-10 w-24 h-24 bg-pink-300 shadow-2xl rounded-full" />
          <motion.div style={{ y: circle2Y }} className="absolute top-10 right-10 w-32 h-32 bg-orange-300 shadow-2xl rounded-full" />
          <motion.div style={{ y: circle3Y }} className="absolute bottom-10 left-1/3 w-16 h-16 bg-cyan-300 shadow-2xl rounded-full" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-5xl md:text-7xl font-black mb-6"
                style={{ textShadow: '4px 4px 20px rgba(0,0,0,0.4)' }}>
                  El futuro es joven. <br/> El futuro es ahora.
                </h1>
                <p className="text-xl md:text-2xl text-white mb-8 max-w-lg"
                style={{ textShadow: '4px 4px 12px rgba(0,0,0,0.4)' }}>
                  Un espacio para formar una red viva de jóvenes que no solo participan, sino que transforman activamente su entorno en Zapopan.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg"
                    onClick={() => navigate('/registro')}
                    className="bg-yellow-500 text-purple-500 hover:bg-yellow-500 font-bold text-lg px-8 py-4 rounded-full w-full sm:w-auto"
                  >
                    ¡Únete ahora!
                  </Button>
                  <Link to="/convocatorias">
                    <Button 
                      size="lg"
                      variant="outline"
                      className="border-white text-white hover:bg-white hover:text-purple-600 font-bold text-lg px-8 py-4 rounded-full w-full sm:w-auto"
                    >
                      Convocatorias
                    </Button>
                  </Link>
                </div>
              </motion.div>

<div className="relative w-full max-w-lg mx-auto">
  {/* Imagen de fondo */}
  <motion.img
  style={{ y: imageOneY }}
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, delay: 0.3 }}
    src="/assets/images/ui/1.png"
    alt="Imagen fondo"
    className="w-full h-auto rounded-3xl drop-shadow-[0_25px_25px_rgba(0,0,0,0.25)]"
  />

  {/* Imagen intermedia */}
  <motion.img
  style={{ y: imageTwoY }}
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, delay: 0.5 }}
    src="/assets/images/ui/2.png"
    alt="Imagen intermedia"
    className="absolute top-2 left-2 w-full h-auto rounded-3xl drop-shadow-[0_25px_25px_rgba(0,0,0,0.25)] z-10"
  />

  {/* Imagen frontal */}
  <motion.img
  style={{ y: imageThreeY }}
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, delay: 0.7 }}
    src="/assets/images/ui/3.png"
    alt="Imagen frontal"
    className="absolute top-4 left-4 w-full h-auto rounded-3xl drop-shadow-[0_25px_25px_rgba(0,0,0,0.25)] z-20"
  />
</div>

            </div>
          </div>
        </section>

        {/* Programs Section */}
<section id="programas" className="py-20 bg-white overflow-x-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {programs.length <= 3 ? (
      // Grid normal si ≤3
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-1 p-8 bg-gray-100 rounded-3xl flex flex-col justify-center"
        >
          <h2 className="text-4xl font-black text-gray-800 mb-4">
            Nuestros <span className="text-purple-600">Programas</span>
          </h2>
          <p className="text-gray-600">
            Acciones concretas para empoderar a los jóvenes y transformar nuestro entorno.
          </p>
        </motion.div>

        {programs.map((program, index) => (
          <motion.div
            key={program.slug}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-3xl p-8 flex flex-col justify-between hover-scale shadow-lg hover:shadow-2xl transition-shadow"
          >
            <div>
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${program.color}`}>
                {program.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{program.title}</h3>
              <p className="text-gray-600 mb-6">{program.description}</p>
            </div>
            <Link to={`/programas/${program.slug}`}>
              <Button className="w-full bg-purple-500 text-white font-bold hover:bg-purple-600 rounded-full">
                Saber Más
              </Button>
            </Link>
          </motion.div>
        ))}
      </div>
    ) : (
      // >3 programas: título arriba y carrusel debajo
      <>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="p-8 bg-gray-100 rounded-3xl flex flex-col justify-center mb-8 text-center"
        >
          <h2 className="text-4xl font-black text-gray-800 mb-4">
            Nuestros <span className="text-purple-600">Programas</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Acciones concretas para empoderar a los jóvenes y transformar nuestro entorno.
          </p>
        </motion.div>

        {/* Contenedor del Swiper con overflow-hidden */}
<div className="relative overflow-visible">
  <Swiper
    spaceBetween={20}
    slidesPerView={1.2}
    breakpoints={{
      640: { slidesPerView: 2, spaceBetween: 20 },
      1024: { slidesPerView: 3, spaceBetween: 20 },
    }}
    style={{ overflow: 'visible' }} // <- clave
  >
    {programs.map((program) => (
      <SwiperSlide key={program.slug} style={{ overflow: 'visible' }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl p-8 flex flex-col justify-between hover-scale shadow-lg hover:shadow-2xl transition-shadow"
          style={{ overflow: 'visible', margin: '0 0.5rem' }} // margen lateral para que la sombra se vea
        >
          <div>
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${program.color}`}>
              {program.icon}
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">{program.title}</h3>
            <p className="text-gray-600 mb-6">{program.description}</p>
          </div>
          <Link to={`/programas/${program.slug}`}>
            <Button className="w-full bg-purple-500 text-white font-bold hover:bg-purple-600 rounded-full">
              Saber Más
            </Button>
          </Link>
        </motion.div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>
      </>
    )}
  </div>
</section>




        {/* About Section */}
        <section id="nosotros" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl lg:text-5xl font-black text-gray-800 mb-6">
                  Nuestro <span className="text-purple-600">Propósito</span>
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Somos un motor de cambio, impulsado por y para las juventudes de Zapopan. Nuestra misión es fomentar la participación activa y el desarrollo integral, creando oportunidades para que se conviertan en agentes de cambio.
                </p>
                <img class="w-full h-auto rounded-3xl shadow-xl" alt="Grupo de jóvenes diversos riendo y colaborando en un espacio creativo" src="https://images.unsplash.com/photo-1564531718001-9813bc3fd35d" />
              </motion.div>
              <div className="grid grid-cols-1 gap-8">
                {aboutItems.map((item, index) => (
                  
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    className="flex items-start space-x-6"
                  >
                    <div className={`flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center ${item.color}`}>
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}

              <div className="flex justify-center mt-4">
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: aboutItems.length * 0.15 }}>

<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button

                    onClick={() => navigate('/principios')}
                    className="w-full bg-purple-500 text-white font-bold hover:bg-purple-600 px-12 rounded-full"
                  >
                    Saber Más
                  </Button>
</motion.div>
                </motion.div>
              </div>

              </div>
            </div>
          </div>
        </section>

        {/* Objectives Section */}
        <ObjectivesSection />

        {/* Join Us Section */}
        <section id="unete" className="py-20 bg-yellow-500">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl lg:text-6xl font-black text-gray-800 mb-6">
                Conviértete en un <span className="text-purple-500">Agente de Cambio</span>
              </h2>
              <p className="text-xl lg:text-2xl text-gray-800 mb-10 max-w-2xl mx-auto">
                Únete a una comunidad de jóvenes que aprenden, conectan y trabajan juntos para crear un impacto positivo y duradero.
              </p>
              <div className="flex justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    onClick={() => navigate('/registro')}
                    className="bg-purple-500 text-white hover:bg-purple-700 font-bold text-xl px-12 py-8 rounded-full shadow-lg"
                  >
                    ¡Quiero Participar!
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;