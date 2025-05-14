import { motion } from 'framer-motion';
import { Calendar, CheckCircle2 } from 'lucide-react';

export const Admission = () => {
  return (
    <section id="admission" className="section-padding bg-secondary text-white">
      <div className="container">
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Test d'Admission
          </h2>
          <p className="text-lg mb-8">
            Pour assurer le meilleur accompagnement possible, nous organisons un test 
            d'admission qui nous permettra d'évaluer le niveau de votre enfant et de 
            l'accueillir dans les meilleures conditions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="bg-white text-secondary p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <Calendar size={32} className="text-primary" />
              <h3 className="text-2xl font-bold">Date du Test</h3>
            </div>
            <div className="bg-primary/10 p-6 rounded-lg mb-6">
              <p className="text-3xl font-bold text-primary text-center">25 Mai</p>
            </div>
            <p className="mb-6">
              Les tests d'admission se dérouleront dans nos locaux. Nous vous prions 
              d'arriver 15 minutes avant l'heure prévue du test.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <CheckCircle2 size={20} className="mt-1 text-primary flex-shrink-0" />
                <p>Les résultats seront communiqués dans un délai de 48 heures.</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 size={20} className="mt-1 text-primary flex-shrink-0" />
                <p>Le test évalue les compétences fondamentales selon le niveau scolaire.</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 size={20} className="mt-1 text-primary flex-shrink-0" />
                <p>Aucune préparation spécifique n'est nécessaire.</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="flex flex-col items-center"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-center">
              Préinscription en Ligne
            </h3>
            <p className="text-center mb-8">
              Pour réserver une place pour votre enfant au test d'admission, 
              veuillez remplir le formulaire de préinscription en ligne.
            </p>
            <a 
              href="https://docs.google.com/forms/d/16BP52NpbkAHz0M6rjDtVAxKjG004a4U0rNCDT7Ldl-A/edit?usp=drive_open" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-primary text-white font-medium py-3 px-8 rounded-md hover:bg-primary/90 transition-all duration-300 text-lg flex items-center justify-center w-full md:w-auto"
            >
              Préinscrire Mon Enfant
            </a>
            <p className="text-sm mt-4 opacity-80">
              Places limitées. La préinscription ne garantit pas l'admission.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};