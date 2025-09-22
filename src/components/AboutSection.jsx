import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Gem } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="nosotros" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            Nuestro <span className="text-purple-600">Propósito</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Somos un motor de cambio, impulsado por y para las juventudes de Zapopan.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-3xl shadow-lg hover-scale"
          >
            <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Target size={40} className="text-pink-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Misión</h3>
            <p className="text-gray-600">
              Fomentar la participación activa y el desarrollo integral de las juventudes, creando oportunidades para que se conviertan en agentes de cambio.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white p-8 rounded-3xl shadow-lg hover-scale"
          >
            <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Eye size={40} className="text-purple-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Visión</h3>
            <p className="text-gray-600">
              Ser un referente en políticas públicas de juventud, consolidando a Zapopan como una ciudad donde los jóvenes son protagonistas del desarrollo.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-8 rounded-3xl shadow-lg hover-scale"
          >
            <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Gem size={40} className="text-yellow-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Valores</h3>
            <ul className="text-gray-600 space-y-2">
              <li><span className="font-semibold">Inclusión:</span> Abrazamos la diversidad.</li>
              <li><span className="font-semibold">Innovación:</span> Pensamos fuera de la caja.</li>
              <li><span className="font-semibold">Colaboración:</span> Juntos somos más fuertes.</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;