import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Users, 
  Building2, 
  Palette, 
  MusicIcon, 
  Film, 
  Lightbulb, 
  Pencil 
} from 'lucide-react';

export const WhyUs = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * i,
        duration: 0.5,
      },
    }),
  };

  const niveaux = [
    { name: "Préscolaire", icon: <GraduationCap size={24} /> },
    { name: "Primaire", icon: <GraduationCap size={24} /> },
    { name: "Collège", icon: <GraduationCap size={24} /> },
    { name: "Lycée", icon: <GraduationCap size={24} /> }
  ];

  const activities = [
    { name: "Musique", icon: <MusicIcon size={24} /> },
    { name: "Théâtre", icon: <Users size={24} /> },
    { name: "Cinéma", icon: <Film size={24} /> },
    { name: "Robotique", icon: <Lightbulb size={24} /> },
    { name: "Dessin", icon: <Pencil size={24} /> }
  ];

  return (
    <section id="pourquoi" className="section-padding">
      <div className="container">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-secondary mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Pourquoi Choisir Archimedes School ?
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div>
            <motion.h3 
              className="text-2xl font-bold text-secondary mb-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Une école complète du préscolaire au lycée
            </motion.h3>
            
            <div className="grid grid-cols-2 gap-4">
              {niveaux.map((niveau, index) => (
                <motion.div
                  key={niveau.name}
                  className="bg-secondary text-white p-4 rounded-lg flex items-center gap-3"
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={cardVariants}
                >
                  {niveau.icon}
                  <span className="font-medium">{niveau.name}</span>
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-gray-700 mb-4">
                Archimedes School offre un parcours éducatif complet, permettant aux élèves 
                de suivre une scolarité cohérente et progressive dans un environnement familier 
                et bienveillant.
              </p>
              <p className="text-gray-700">
                Cette continuité pédagogique assure une transition harmonieuse entre les 
                différentes étapes de la scolarité de votre enfant.
              </p>
            </motion.div>
          </div>

          <div>
            <motion.img 
              src="https://images.pexels.com/photos/8471977/pexels-photo-8471977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Élèves à Archimedes School" 
              className="rounded-lg shadow-lg w-full h-64 md:h-full object-cover"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-lg"
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Users className="text-primary" size={28} />
            </div>
            <h3 className="text-xl font-bold text-secondary mb-4">Équipe Pédagogique Expérimentée</h3>
            <p className="text-gray-700">
              Nos enseignants sont sélectionnés pour leur expertise, leur passion pour 
              l'éducation et leur capacité à inspirer les élèves. Ils bénéficient de 
              formations régulières pour rester à la pointe des méthodes pédagogiques.
            </p>
          </motion.div>

          <motion.div 
            className="bg-white p-6 rounded-lg shadow-lg"
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <GraduationCap className="text-primary" size={28} />
            </div>
            <h3 className="text-xl font-bold text-secondary mb-4">Suivi Personnalisé</h3>
            <p className="text-gray-700">
              Nous limitons volontairement le nombre d'élèves par classe pour garantir 
              un suivi individuel de qualité. Chaque élève est accompagné dans son parcours 
              scolaire avec une attention particulière à ses besoins spécifiques.
            </p>
          </motion.div>

          <motion.div 
            className="bg-white p-6 rounded-lg shadow-lg"
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Building2 className="text-primary" size={28} />
            </div>
            <h3 className="text-xl font-bold text-secondary mb-4">Infrastructures Modernes</h3>
            <p className="text-gray-700">
              Notre établissement dispose d'infrastructures modernes adaptées aux besoins 
              éducatifs d'aujourd'hui : salles de classe équipées, laboratoires, espaces 
              sportifs, et médiathèque, créant un environnement propice à l'apprentissage.
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="bg-gray-50 p-8 rounded-lg shadow-lg mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-secondary mb-6 text-center">
            Activités Parascolaires Enrichissantes
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
            {activities.map((activity, index) => (
              <motion.div
                key={activity.name}
                className="bg-white p-4 rounded-lg shadow flex flex-col items-center gap-2 text-center"
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
              >
                <div className="text-primary">{activity.icon}</div>
                <span className="font-medium">{activity.name}</span>
              </motion.div>
            ))}
          </div>
          
          <p className="text-gray-700 text-center">
            Nous offrons une variété d'activités parascolaires qui permettent aux élèves 
            de développer leurs talents, d'explorer de nouveaux centres d'intérêt et 
            d'acquérir des compétences essentielles pour leur épanouissement personnel.
          </p>
        </motion.div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <a 
            href="https://docs.google.com/forms/d/16BP52NpbkAHz0M6rjDtVAxKjG004a4U0rNCDT7Ldl-A/edit?usp=drive_open" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary text-lg py-3 px-8"
          >
            Préinscrire Mon Enfant
          </a>
        </motion.div>
      </div>
    </section>
  );
};