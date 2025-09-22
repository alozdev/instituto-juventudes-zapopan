import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const ContactSection = () => {
  const handleContact = () => {
    toast({
      title: "🚧 Esta función no está implementada aún",
      description: "¡Pero no te preocupes! Puedes solicitarla en tu próximo prompt 🚀",
    });
  };

  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h2 className="text-4xl lg:text-5xl font-black mb-6">
              ¿Cómo <span className="text-yellow-300">funciona?</span>
            </h2>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-black font-bold text-lg">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Regístrate con nosotros</h3>
                  <p className="text-white/90">Completa tu registro en línea de forma rápida y sencilla</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-black font-bold text-lg">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Selecciona los programas que más te convengan</h3>
                  <p className="text-white/90">Elige entre nuestros diferentes programas de financiamiento</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-black font-bold text-lg">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Obtén tu crédito en los tiempos más rápidos</h3>
                  <p className="text-white/90">Recibe tu financiamiento de manera ágil y eficiente</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-black font-bold text-lg">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Cumple tu sueño de tener $5,000 pesos adicionales a tu sueldo</h3>
                  <p className="text-white/90">Haz realidad tus proyectos con el apoyo financiero que necesitas</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Algunos de nuestros aliados
              </h3>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-red-600 font-bold">CÁMARA</span>
                  </div>
                  <p className="text-sm text-gray-600">Cámara de Comercio</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-blue-600 font-bold">COPARMEX</span>
                  </div>
                  <p className="text-sm text-gray-600">Confederación Patronal</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-green-600 font-bold">💚</span>
                  </div>
                  <p className="text-sm text-gray-600">Quiero</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-purple-600 font-bold">OMNI</span>
                  </div>
                  <p className="text-sm text-gray-600">OmniLife</p>
                </div>
              </div>

              <Button 
                onClick={handleContact}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold text-lg py-4 rounded-full"
              >
                Postúlate aquí
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;