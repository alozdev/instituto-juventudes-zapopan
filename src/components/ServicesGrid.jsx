import React from 'react';
import { motion } from 'framer-motion';
import { toast } from '@/components/ui/use-toast';

const ServicesGrid = () => {
  const handleServiceClick = (service) => {
    toast({
      title: "🚧 Esta función no está implementada aún",
      description: "¡Pero no te preocupes! Puedes solicitarla en tu próximo prompt 🚀",
    });
  };

  const services = [
    {
      id: 1,
      title: "Créditos para emprendedores de hasta $50,000 pesos",
      bgClass: "gradient-bg-1",
      image: "Mujer emprendedora mexicana sonriente en su negocio local",
      textColor: "text-white"
    },
    {
      id: 2,
      title: "Créditos para mujeres de hasta $25,000 pesos",
      bgClass: "gradient-bg-2", 
      image: "Mujer mexicana trabajadora en su taller de costura",
      textColor: "text-white"
    },
    {
      id: 3,
      title: "Créditos para estudiantes de hasta $100,000 pesos y de hasta $50,000 pesos",
      bgClass: "gradient-bg-3",
      image: "Estudiante mexicano joven estudiando con libros y laptop",
      textColor: "text-white"
    },
    {
      id: 4,
      title: "Créditos transformación digital de hasta $100,000 pesos",
      bgClass: "gradient-bg-4",
      image: "Empresario mexicano trabajando con tecnología moderna",
      textColor: "text-white"
    },
    {
      id: 5,
      title: "Créditos para el campo de hasta $100,000 pesos",
      bgClass: "gradient-bg-5",
      image: "Agricultor mexicano trabajando en el campo con cultivos",
      textColor: "text-white"
    },
    {
      id: 6,
      title: "Créditos verdes de hasta $100,000 pesos y de hasta $750,000 pesos",
      bgClass: "gradient-bg-6",
      image: "Proyecto de energía renovable en México con paneles solares",
      textColor: "text-white"
    },
    {
      id: 7,
      title: "Créditos para jefas de familia de hasta $50,000 pesos",
      bgClass: "gradient-bg-1",
      image: "Madre mexicana trabajadora con sus hijos",
      textColor: "text-white"
    },
    {
      id: 8,
      title: "Créditos para emprendedores de hasta $50,000 pesos",
      bgClass: "gradient-bg-2",
      image: "Joven emprendedor mexicano en su startup tecnológica",
      textColor: "text-white"
    },
    {
      id: 9,
      title: "Créditos para jóvenes de hasta $100,000 pesos para emprendimientos",
      bgClass: "gradient-bg-3",
      image: "Grupo de jóvenes emprendedores mexicanos trabajando juntos",
      textColor: "text-white"
    },
    {
      id: 10,
      title: "Créditos para jefas de familia de hasta $50,000 pesos",
      bgClass: "gradient-bg-4",
      image: "Mujer mexicana profesional en su oficina",
      textColor: "text-white"
    },
    {
      id: 11,
      title: "Créditos para emprendedores de hasta $50,000 pesos y de hasta $40,000 pesos",
      bgClass: "gradient-bg-5",
      image: "Chef mexicano en su restaurante local",
      textColor: "text-white"
    },
    {
      id: 12,
      title: "Créditos para mujeres y emprendedores de hasta $500,000 pesos para emprendimientos",
      bgClass: "gradient-bg-6",
      image: "Equipo de emprendedores mexicanos en una reunión de negocios",
      textColor: "text-white"
    },
    {
      id: 13,
      title: "Créditos para emprendedores de hasta $50,000 pesos",
      bgClass: "gradient-bg-1",
      image: "Artesano mexicano trabajando en su taller tradicional",
      textColor: "text-white"
    },
    {
      id: 14,
      title: "Emergencia 50 y 74 de hasta $50,000 pesos",
      bgClass: "gradient-bg-2",
      image: "Adulto mayor mexicano trabajando en su negocio familiar",
      textColor: "text-white"
    },
    {
      id: 15,
      title: "Créditos de inclusión de hasta $50,000 pesos para jóvenes emprendedores y familias",
      bgClass: "gradient-bg-3",
      image: "Familia mexicana emprendedora en su negocio local",
      textColor: "text-white"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
            Nuestros <span className="text-purple-600">Programas</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre todas las opciones de financiamiento que tenemos para ti y tu familia
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => handleServiceClick(service.title)}
              className={`${service.bgClass} rounded-3xl p-8 cursor-pointer hover-scale relative overflow-hidden min-h-[400px] flex flex-col justify-between`}
            >
              {/* Decorative circles */}
              <div className="absolute top-4 right-4 w-16 h-16 bg-white/20 rounded-full"></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-yellow-400/30 rounded-full"></div>
              
              <div className="relative z-10">
                <div className="mb-6">
                  <img 
                    class="w-24 h-24 rounded-full object-cover border-4 border-white/30" 
                    alt={`Servicio ${service.id}`}
                    src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                </div>
                
                <h3 className={`text-lg font-bold ${service.textColor} leading-tight`}>
                  {service.title}
                </h3>
              </div>

              {/* Crown icon for featured services */}
              <div className="absolute top-4 left-4">
                <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-black font-bold text-sm">👑</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;