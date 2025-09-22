import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Star, Globe, HeartHandshake as Handshake } from 'lucide-react';
import { Link } from 'react-router-dom';

const programs = [
    {
      slug: 'brilla-zapopan',
      icon: <Star className="text-yellow-900" size={32} />,
      title: 'Brilla Zapopan',
      description: 'Identificar, reconocer y promover el talento juvenil en diversas áreas, fomentando la creatividad y la innovación.',
      tags: ['Premios', 'Liderazgo', 'Innovación', 'Talento'],
      color: { bg: 'gradient-bg-2', iconBg: 'bg-yellow-400' },
    },
    {
      slug: 'juventudes-presente',
      icon: <Handshake className="text-cyan-900" size={32} />,
      title: 'JuventudEs Presente',
      description: 'Promover la participación activa de las juventudes en su comunidad, instalando un fuerte sentido de pertenencia.',
      tags: ['Comunidad', 'Participación', 'Barrios', 'Acción Social'],
      color: { bg: 'gradient-bg-3', iconBg: 'bg-cyan-400' },
    },
    {
      slug: 'zapopan-sin-fronteras',
      icon: <Globe className="text-pink-900" size={32} />,
      title: 'Zapopan Sin Fronteras',
      description: 'Formar y fortalecer a líderes juveniles comprometidos con la transformación social y el emprendimiento.',
      tags: ['Emprendimiento', 'Liderazgo Global', 'Becas', 'Rally'],
      color: { bg: 'gradient-bg-1', iconBg: 'bg-pink-400' },
    }
  ];

const ProgramCard = ({ slug, icon, title, description, tags, color, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className={`rounded-3xl p-8 flex flex-col justify-between hover-scale shadow-lg hover:shadow-2xl transition-shadow ${color.bg}`}
  >
    <div>
      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${color.iconBg}`}>
        {icon}
      </div>
      <h3 className="text-3xl font-black text-white mb-4">{title}</h3>
      <p className="text-white/80 mb-6">{description}</p>
    </div>
    <div>
      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag, i) => (
          <span key={i} className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full">{tag}</span>
        ))}
      </div>
      <Link to={`/programas/${slug}`}>
        <Button
          className="w-full bg-white text-black font-bold hover:bg-yellow-300 rounded-full"
        >
          Saber Más
        </Button>
      </Link>
    </div>
  </motion.div>
);

const ProgramsSection = () => {
  return (
    <section id="programas" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            Nuestros <span className="text-purple-600">Programas Estratégicos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Acciones concretas para empoderar a los jóvenes y transformar nuestro entorno.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <ProgramCard key={program.slug} {...program} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;