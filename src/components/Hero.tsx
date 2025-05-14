import { motion } from 'framer-motion';
import HeroImage from '/src/photos/ecole archi.png' ;

export const Hero = () => {
  return (
    <div className="relative bg-secondary min-h-screen flex items-center">
      {/* Background overlay with school image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{ 
          backgroundImage: `url(${HeroImage})`,
          backgroundPosition: "center 30%",
          opacity: 0.3
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10 py-20 md:py-0">
        <div className="max-w-3xl">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Bienvenue à <span className="text-primary">Archimedes School</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-white mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            L'école qui façonne l'avenir de vos enfants avec excellence, 
            innovation et bienveillance. Offrant un parcours éducatif complet du 
            préscolaire au lycée.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a 
              href="#mission" 
              className="btn-primary"
            >
              Découvrir notre école
            </a>
            <a 
              href="https://docs.google.com/forms/d/16BP52NpbkAHz0M6rjDtVAxKjG004a4U0rNCDT7Ldl-A/edit?usp=drive_open" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-secondary font-medium py-2 px-6 rounded-md hover:bg-gray-100 transition-all duration-300"
            >
              Préinscrire mon enfant
            </a>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-secondary to-transparent h-24" />
    </div>
  );
};