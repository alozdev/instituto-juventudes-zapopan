import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Globe, HeartHandshake } from 'lucide-react';

const objectives = [
  {
    icon: <Users size={32} className="text-pink-900" />,
    title: 'Acercar',
    description: 'Fomentar una relación más cercana, directa y transparente entre las juventudes y el gobierno.',
    color: 'bg-pink-100',
    rotation: '-rotate-2'
  },
  {
    icon: <HeartHandshake size={32} className="text-purple-900" />,
    title: 'Consolidar',
    description: 'Crear redes de apoyo para fortalecer habilidades y acompañar en la construcción de planes de vida.',
    color: 'bg-purple-100',
    rotation: 'rotate-2'
  },
  {
    icon: <Globe size={32} className="text-yellow-900" />,
    title: 'Internacionalizar',
    description: 'Colocar a Zapopan en el mapa global como líder en políticas juveniles innovadoras.',
    color: 'bg-yellow-100',
    rotation: '-rotate-2'
  },
  {
    icon: <Target size={32} className="text-cyan-900" />,
    title: 'Fomentar',
    description: 'Impulsar una cultura de voluntariado juvenil como herramienta de desarrollo y transformación.',
    color: 'bg-cyan-100',
    rotation: 'rotate-2'
  }
];

const ObjectivesSection = () => {
  return (
    <section id="objetivos" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-black text-gray-800 mb-4">
            Nuestros <span className="text-purple-500">Objetivos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Impulsando el cambio a través de acciones claras y con propósito.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {objectives.map((objective, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, scale: 1.05, rotate: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1, type: "spring", stiffness: 100 }}
              className={`bg-white rounded-3xl p-8 text-center shadow-lg transition-shadow duration-300 ${objective.rotation}`}
            >
              <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 ${objective.color}`}>
                {objective.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">{objective.title}</h3>
              <p className="text-gray-600">{objective.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ObjectivesSection;