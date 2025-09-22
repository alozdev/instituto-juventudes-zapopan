import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link as ScrollLink } from 'react-scroll';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section id="inicio" className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-cyan-50 pt-24 pb-12 md:pt-32 md:pb-20 flex items-center">
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-circle absolute top-20 left-10 w-32 h-32 bg-yellow-300 rounded-full opacity-50"></div>
        <div className="floating-circle absolute top-40 right-20 w-24 h-24 bg-cyan-300 rounded-full opacity-50"></div>
        <div className="floating-circle absolute bottom-20 left-1/4 w-40 h-40 bg-pink-300 rounded-full opacity-40"></div>
        <div className="floating-circle absolute bottom-40 right-10 w-28 h-28 bg-purple-300 rounded-full opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative lg:order-2"
          >
            <img
              class="w-full h-auto rounded-3xl shadow-2xl" 
              alt="Ilustración de jóvenes colaborando y compartiendo ideas"
             src="https://images.unsplash.com/photo-1585913161203-695a3ac93b33" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-gray-900 lg:order-1"
          >
            <motion.h1 
              className="text-5xl lg:text-7xl font-black mb-6 text-shadow"
            >
              Cuando las
              <br />
              <span className="text-purple-600">juventudes</span> hablan...
            </motion.h1>
            
            <motion.p
              className="text-3xl lg:text-4xl font-bold text-gray-700 mb-8"
            >
              ...el mundo escucha.
            </motion.p>

            <motion.div
              className="flex items-center space-x-4 bg-yellow-300 text-black px-6 py-4 rounded-full inline-flex mb-8"
            >
              <span className="font-bold text-lg">Diálogo</span>
              <span className="text-2xl">🤝</span>
              <span className="font-bold text-lg">Encuentro</span>
              <span className="text-2xl">🚀</span>
              <span className="font-bold text-lg">Acción</span>
            </motion.div>

            <motion.p
              className="text-xl mb-8 text-gray-600 max-w-lg"
            >
              Un espacio para formar una red viva de jóvenes que no solo participan, sino que transforman activamente su entorno.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
            >
              <ScrollLink to="programas" smooth={true} offset={-70} duration={500}>
                <Button 
                  size="lg"
                  className="bg-purple-600 text-white hover:bg-purple-700 font-bold text-lg px-8 py-4 rounded-full w-full sm:w-auto"
                >
                  Ver Programas
                </Button>
              </ScrollLink>
               <Button 
                  size="lg"
                  variant="outline"
                  onClick={() => navigate('/registro')}
                  className="border-purple-600 text-purple-600 hover:bg-purple-100 font-bold text-lg px-8 py-4 rounded-full w-full sm:w-auto"
                >
                  ¡Únete ahora!
                </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;