import { motion } from 'framer-motion';
import { BookOpen, Award, Users, Lightbulb } from 'lucide-react';

export const Mission = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
      },
    }),
  };

  return (
    <section id="mission" className="section-padding bg-gray-50">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-secondary mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Notre Mission
          </motion.h2>
          <motion.p
            className="text-lg text-gray-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            À Archimedes School, nous avons pour mission de fournir une éducation 
            d'excellence qui inspire et prépare chaque élève à réussir dans un 
            monde en constante évolution. Nous combinons rigueur académique et 
            développement personnel dans un environnement bienveillant.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            className="bg-white p-8 rounded-lg shadow-lg"
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <BookOpen className="text-primary" size={28} />
            </div>
            <h3 className="text-2xl font-bold text-secondary mb-4">Vision Pédagogique</h3>
            <p className="text-gray-700">
              Notre approche pédagogique innovante stimule la curiosité intellectuelle 
              et développe l'esprit critique des élèves. Nous cultivons l'amour 
              de l'apprentissage et la soif de connaissance qui accompagneront nos 
              élèves tout au long de leur vie.
            </p>
          </motion.div>

          <motion.div 
            className="bg-white p-8 rounded-lg shadow-lg"
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Award className="text-primary" size={28} />
            </div>
            <h3 className="text-2xl font-bold text-secondary mb-4">Excellence Académique</h3>
            <p className="text-gray-700">
              Nous visons l'excellence dans tous les aspects de notre enseignement. 
              Notre programme académique rigoureux, aligné sur les standards nationaux 
              et enrichi d'approches modernes, permet à nos élèves d'atteindre leur 
              plein potentiel et d'exceller dans leurs études supérieures.
            </p>
          </motion.div>

          <motion.div 
            className="bg-white p-8 rounded-lg shadow-lg"
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Users className="text-primary" size={28} />
            </div>
            <h3 className="text-2xl font-bold text-secondary mb-4">Encadrement de Qualité</h3>
            <p className="text-gray-700">
              Notre équipe pédagogique expérimentée et passionnée crée un environnement 
              d'apprentissage positif et stimulant. Nous offrons un suivi personnalisé 
              à chaque élève, reconnaissant leurs forces et les aidant à surmonter leurs défis.
            </p>
          </motion.div>

          <motion.div 
            className="bg-white p-8 rounded-lg shadow-lg"
            custom={4}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Lightbulb className="text-primary" size={28} />
            </div>
            <h3 className="text-2xl font-bold text-secondary mb-4">Développement Intégral</h3>
            <p className="text-gray-700">
              Nous croyons en une éducation qui va au-delà des livres. Notre programme 
              comprend des activités parascolaires enrichissantes qui développent la 
              créativité, le travail d'équipe, et les compétences sociales nécessaires 
              pour réussir dans le monde d'aujourd'hui.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};