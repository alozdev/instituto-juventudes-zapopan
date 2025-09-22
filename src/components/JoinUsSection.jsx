import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const JoinUsSection = () => {
  const handleJoin = () => {
    toast({
      title: "🎉 ¡Gracias por tu interés!",
      description: "La función de registro estará activa muy pronto. ¡No te la pierdas! 🚀",
    });
  };

  return (
    <section id="unete" className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-6">
            Conviértete en un <span className="text-yellow-300">Agente de Cambio</span>
          </h2>
          <p className="text-xl lg:text-2xl text-white/90 mb-10 max-w-2xl mx-auto">
            Únete a una comunidad de jóvenes que aprenden, conectan y trabajan juntos para crear un impacto positivo y duradero.
          </p>
          <div className="flex justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                onClick={handleJoin}
                className="bg-yellow-400 text-black hover:bg-yellow-500 font-bold text-xl px-12 py-8 rounded-full shadow-lg"
              >
                ¡Quiero Participar!
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default JoinUsSection;