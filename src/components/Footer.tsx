import { Link } from 'react-router-dom';
import { School, Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-secondary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <School size={24} className="text-white" />
              <span className="text-xl font-bold">Archimedes School</span>
            </div>
            <p className="mb-4">
              Une éducation d'excellence pour les leaders de demain.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/archimedes_school/?__pwa=1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=61575733752556" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Facebook size={24} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <a href="#mission" className="hover:text-primary transition-colors">
                  Notre Mission
                </a>
              </li>
              <li>
                <a href="#pourquoi" className="hover:text-primary transition-colors">
                  Pourquoi Nous
                </a>
              </li>
              <li>
                <a href="#admission" className="hover:text-primary transition-colors">
                  Admission
                </a>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin size={20} className="mt-1 flex-shrink-0 text-primary" />
                <span>Lotissement Jawhart Chaouiya, Ben Ahmed</span>
              </div>
              <div className="flex items-start gap-2">
                <Phone size={20} className="mt-1 flex-shrink-0 text-primary" />
                <div className="flex flex-col">
                  <span>0669283848</span>
                  <span>0523408136</span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Mail size={20} className="mt-1 flex-shrink-0 text-primary" />
                <span>archimedesschool.office@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Archimedes School. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};