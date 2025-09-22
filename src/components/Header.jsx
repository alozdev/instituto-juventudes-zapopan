import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link as ScrollLink, scroller } from 'react-scroll';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  const navLinks = [
    { to: 'inicio', label: 'Inicio', isScroll: true, path: '/' },
    { to: 'programas', label: 'Programas', isScroll: true, path: '/#programas' },
    { to: 'nosotros', label: 'Nosotros', isScroll: true, path: '/#nosotros' },
    { to: 'objetivos', label: 'Objetivos', isScroll: true, path: '/#objetivos' },
    { to: '/convocatorias', label: 'Convocatorias', isScroll: false },
  ];

  const handleCTAClick = () => {
    navigate('/registro');
    if (isMenuOpen) setIsMenuOpen(false);
  };

  const handleNavClick = (link) => {
    if (isMenuOpen) setIsMenuOpen(false);
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

  const NavItem = ({ link, isMobile }) => {
    const isActive = location.pathname === link.to;

    if (link.isScroll && isHomePage) {
      return (
        <ScrollLink
          to={link.to}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          onClick={() => isMenuOpen && setIsMenuOpen(false)}
          className={`cursor-pointer font-medium transition-colors duration-200 text-gray-700 hover:text-purple-600 ${isMobile ? 'text-left w-full block' : ''}`}
          activeClass="text-purple-600"
        >
          {link.label}
        </ScrollLink>
      );
    }
    return (
      <button
        onClick={() => handleNavClick(link)}
        className={`cursor-pointer font-medium transition-colors duration-200 text-gray-700 hover:text-purple-600 ${isMobile ? 'text-left w-full block' : ''} ${isActive ? 'text-purple-600' : ''}`}
      >
        {link.label}
      </button>
    );
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white shadow-lg sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 cursor-pointer"
          >
             <RouterLink to="/">
              <div className="flex items-center space-x-2">

              {/*-----------------------------<div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">J</span>
              </div>----------------------------
<div className="w-10 h-10 rounded-full overflow-hidden">
  <img
    src="/assets/images/brand/logo.jpg"
    alt="Avatar"
    className="w-full h-full object-cover"
  />
</div>
                <div>
                  <h1 className="text-lg font-bold text-gray-900 leading-tight">Instituto de las</h1>
                  <p className="text-md text-purple-600 font-semibold">Juventudes ✨</p>
                </div>*/}
<div className="w-auto h-12">
  <img
    src="/assets/images/brand/logo-lg.png"
    alt="Avatar"
    className="w-full h-full object-contain"
  />
</div>

              </div>
            </RouterLink>
          </motion.div>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => <NavItem key={link.to} link={link} />)}
          </nav>

          <div className="hidden md:flex">
            <Button 
              onClick={handleCTAClick}
              className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-700 hover:to-cyan-700 font-bold rounded-full text-white"
            >
              ¡Únete ahora!
            </Button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 border-t">
                <nav className="flex flex-col space-y-4">
                  {navLinks.map(link => <NavItem key={link.to} link={link} isMobile={true}/>)}
                  <div className="pt-4">
                    <Button 
                      onClick={handleCTAClick}
                      className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 font-bold rounded-full text-white"
                    >
                      ¡Únete ahora!
                    </Button>
                  </div>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;