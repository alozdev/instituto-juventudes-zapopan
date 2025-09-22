import React from 'react';
import { motion } from 'framer-motion';
import { toast } from '@/components/ui/use-toast';
import { Link as ScrollLink, scroller } from 'react-scroll';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { Facebook, Twitter, Instagram, MapPin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  const handleSocialClick = (platform) => {
    toast({
      title: `🚧 Redireccionando a ${platform}`,
      description: "¡Esta función estará disponible pronto para conectarte con nosotros! 🚀",
    });
  };

  const navLinks = [
    { to: 'inicio', label: 'Inicio', isScroll: true, path: '/' },
    { to: 'programas', label: 'Programas', isScroll: true, path: '/#programas' },
    { to: 'nosotros', label: 'Nosotros', isScroll: true, path: '/#nosotros' },
    { to: 'objetivos', label: 'Objetivos', isScroll: true, path: '/#objetivos' },
    { to: '/convocatorias', label: 'Convocatorias', isScroll: false },
    { to: '/registro', label: 'Únete', isScroll: false },
  ];

  const handleFooterNavClick = (link) => {
    if (link.isScroll && isHomePage) {
      scroller.scrollTo(link.to, {
        spy: true,
        smooth: true,
        offset: -70,
        duration: 500,
      });
    } else if (link.isScroll) {
      navigate(link.path || `/#${link.to}`);
    } else {
      navigate(link.to);
    }
  };

  return (
    <footer className="bg-gray-900 text-white pt-14 pb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <motion.div
            
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >

<div className="flex flex-col lg:flex-row flex-wrap gap-9 mb-6">
            <motion.div 
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center space-x-2 cursor-pointer">
              {/*<div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">J</span>
              </div>*/}

  <img
    src="/assets/images/brand/logo.png"
    alt="Avatar"
    className="w-auto h-12 object-container"
  />


                <p className="text-xs font-bold leading-tight leading-[1.1]">Instituto de<br/>las Juventudes<br/>Zapopan</p>

            </motion.div>

    {/* bloque 2 */}
<motion.div whileHover={{ scale: 1.05 }} className="cursor-pointer">
        <img
          src="/assets/images/brand/construcciondecomunidad.png"
          alt="Avatar 2"
          className="w-auto h-12 object-container"
        />
</motion.div>

    {/* bloque 3 */}
<motion.div whileHover={{ scale: 1.05 }} className="cursor-pointer">
        <img
          src="/assets/images/brand/zapopan.png"
          alt="Avatar 3"
          className="w-auto h-12 object-container"
        />
</motion.div>

</div>


            <p className="text-gray-400 mb-6">
              Impulsando el liderazgo y comunidades sanas a través del voluntariado, formando jóvenes agentes de cambio.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/juventudeszapopan" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-white transition-colors hover:text-purple-500"><Instagram size={20} /></a>
              <a href="https://www.facebook.com/juventudeszapopan" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-white transition-colors hover:text-purple-500"><Facebook size={20} /></a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-xl font-bold mb-6">Navegación</p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <button onClick={() => handleFooterNavClick(link)} className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-xl font-bold mb-6">Legal</p>
            <ul className="mb-12">
              <li>
                <a href="https://www.zapopan.gob.mx/v3/avisodeprivacidad" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  Aviso de Privacidad
                </a>
              </li>
            </ul>
             <p className="text-xl font-bold mb-6 mt-6">Contacto</p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="text-white mt-1"><MapPin size={20} /></span>
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Av. Tabachines y Periférico, Zapopan 45188</a>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-white"><Mail size={20} /></span>
                <a href="mailto:institutojuventudes@zapopan.gob.mx" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors cursor-pointer">institutojuventudes@zapopan.gob.mx</a>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-white"><Phone size={20} /></span>
                <a href="tel:3312345678" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors cursor-pointer">(33) 3818-2200 - Ext:3819</a>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-gray-800 mt-12 pt-5 text-center"
        >
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} Instituto de las Juventudes Zapopan. Todos los derechos reservados.
            <br/><span className="text-gray-400 font-semibold">Powered by <a href="https://stalm.io" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Stalm.io</a></span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;