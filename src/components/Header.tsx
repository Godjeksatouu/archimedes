import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, School } from 'lucide-react';
import logoImage from '/src/photos/logo archimedes.png';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

return (
  <header
    className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}
  >
    <div className="container mx-auto px-4 flex justify-between items-center">
      <Link to="/" className="flex items-center gap-2" onClick={closeMenu}>
      <img 
  src={logoImage}
  alt="Archimedes Logo" 
  className="w-20 h-20 object-contain transition-all duration-300 drop-shadow-[0_2px_4px_rgba(255,255,255,0.8)]"
/>

        <span 
          className={`text-xl font-bold transition-colors duration-300 ${
            isScrolled ? 'text-secondary' : 'text-white'
          }`}
        >
          Archimedes School
        </span>
      </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link 
            to="/" 
            className={`font-medium transition-colors duration-300 ${
              isScrolled ? 'text-gray-800 hover:text-primary' : 'text-white hover:text-primary'
            } ${location.pathname === '/' ? 'underline decoration-primary decoration-2 underline-offset-8' : ''}`}
          >
            Accueil
          </Link>
          <a 
            href="#mission" 
            className={`font-medium transition-colors duration-300 ${
              isScrolled ? 'text-gray-800 hover:text-primary' : 'text-white hover:text-primary'
            }`}
          >
            Notre Mission
          </a>
          <a 
            href="#pourquoi" 
            className={`font-medium transition-colors duration-300 ${
              isScrolled ? 'text-gray-800 hover:text-primary' : 'text-white hover:text-primary'
            }`}
          >
            Pourquoi Nous
          </a>
          <a 
            href="#admission" 
            className={`font-medium transition-colors duration-300 ${
              isScrolled ? 'text-gray-800 hover:text-primary' : 'text-white hover:text-primary'
            }`}
          >
            Admission
          </a>
          <Link 
            to="/contact" 
            className={`font-medium transition-colors duration-300 ${
              isScrolled ? 'text-gray-800 hover:text-primary' : 'text-white hover:text-primary'
            } ${location.pathname === '/contact' ? 'underline decoration-primary decoration-2 underline-offset-8' : ''}`}
          >
            Contact
          </Link>
        </nav>

        <a 
          href="https://docs.google.com/forms/d/16BP52NpbkAHz0M6rjDtVAxKjG004a4U0rNCDT7Ldl-A/edit?usp=drive_open" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hidden md:inline-block btn-primary"
        >
          Préinscription
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <X className={isScrolled ? 'text-secondary' : 'text-white'} />
          ) : (
            <Menu className={isScrolled ? 'text-secondary' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white shadow-lg"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link to="/" className="text-gray-800 hover:text-primary py-2" onClick={closeMenu}>
              Accueil
            </Link>
            <a href="#mission" className="text-gray-800 hover:text-primary py-2" onClick={closeMenu}>
              Notre Mission
            </a>
            <a href="#pourquoi" className="text-gray-800 hover:text-primary py-2" onClick={closeMenu}>
              Pourquoi Nous
            </a>
            <a href="#admission" className="text-gray-800 hover:text-primary py-2" onClick={closeMenu}>
              Admission
            </a>
            <Link to="/contact" className="text-gray-800 hover:text-primary py-2" onClick={closeMenu}>
              Contact
            </Link>
            <a 
              href="https://docs.google.com/forms/d/16BP52NpbkAHz0M6rjDtVAxKjG004a4U0rNCDT7Ldl-A/edit?usp=drive_open" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary text-center"
              onClick={closeMenu}
            >
              Préinscription
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
};