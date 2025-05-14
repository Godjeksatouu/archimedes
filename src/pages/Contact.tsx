import { MapPin, Phone, Mail, School } from 'lucide-react';
import { ContactForm } from '../components/ContactForm';
import { Map } from '../components/Map';

export const Contact = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Contactez-nous
          </h1>
          <p className="text-lg text-gray-700">
            Notre équipe est à votre disposition pour répondre à toutes vos questions concernant 
            notre école et les modalités d'inscription.
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-6 md:p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <MapPin className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-2">Adresse</h3>
              <p className="text-gray-700">
                Lotissement Jawhart Chaouiya,<br />
                Ben Ahmed, Maroc
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <Phone className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-2">Téléphone</h3>
              <p className="text-gray-700 mb-1">0669283848</p>
              <p className="text-gray-700">0523408136</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <Mail className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-2">Email</h3>
              <p className="text-gray-700">
                archimedesschool.office@gmail.com
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <ContactForm />
          
          <div className="flex flex-col h-full">
            <h3 className="text-2xl font-bold text-secondary mb-6">Notre Localisation</h3>
            <div className="flex-grow">
              <Map />
            </div>
          </div>
        </div>

        <div className="bg-secondary text-white p-8 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <School size={28} />
                <span>Visitez Notre École</span>
              </h3>
              <p className="mb-4">
                Découvrez par vous-même nos installations modernes et notre environnement d'apprentissage 
                exceptionnel. Contactez-nous pour planifier une visite guidée de notre campus.
              </p>
              <p className="mb-6">
                Nos heures d'ouverture:<br />
                Lundi à Vendredi: 8h00 - 17h00<br />
                Samedi: 9h00 - 13h00
              </p>
              <a 
                href="https://docs.google.com/forms/d/16BP52NpbkAHz0M6rjDtVAxKjG004a4U0rNCDT7Ldl-A/edit?usp=drive_open" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-secondary font-medium py-2 px-6 rounded-md hover:bg-gray-100 transition-all duration-300 inline-block"
              >
                Préinscrire Mon Enfant
              </a>
            </div>
            
            <div>
              <img 
                src="https://images.pexels.com/photos/5212700/pexels-photo-5212700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Visitez l'Archimedes School" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};