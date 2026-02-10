import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail, Phone, MapPin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a0a0a] text-white pt-32 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          
          {/* Logo & Description */}
          <div className="lg:col-span-5 space-y-8">
            <h3 className="text-4xl font-serif font-bold italic">ONG Studio.</h3>
            <p className="text-neutral-500 text-sm font-light leading-relaxed max-w-sm">
              Capturer l'invisible, structurer l'émotion. Studio de création visuelle basé à Montréal, spécialisé en marketing digital et photographie haute définition.
            </p>
            <div className="flex gap-6 text-neutral-400">
              <Instagram size={18} className="hover:text-amber-500 cursor-pointer transition-colors" />
              <Facebook size={18} className="hover:text-amber-500 cursor-pointer transition-colors" />
              <Twitter size={18} className="hover:text-amber-500 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-4 space-y-8">
            <h4 className="text-[10px] uppercase tracking-[0.4em] text-amber-500 font-bold">Contact</h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="p-2 bg-white/5 rounded-sm group-hover:bg-amber-500/10 transition-colors">
                  <Mail size={14} className="text-neutral-500" />
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-widest text-neutral-500 font-bold mb-1">Email</p>
                  <a href="mailto:Ongpic.ca@gmail.com" className="text-sm font-medium hover:text-amber-500 transition-colors">Ongpic.ca@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-2 bg-white/5 rounded-sm group-hover:bg-amber-500/10 transition-colors">
                  <Phone size={14} className="text-neutral-500" />
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-widest text-neutral-500 font-bold mb-1">Mobile</p>
                  <a href="tel:4388743813" className="text-sm font-medium hover:text-amber-500 transition-colors">438-874-3813</a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-2 bg-white/5 rounded-sm group-hover:bg-amber-500/10 transition-colors">
                  <MapPin size={14} className="text-neutral-500" />
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-widest text-neutral-500 font-bold mb-1">Studio</p>
                  <p className="text-sm font-medium">8195 rue Fabre, Montréal, QC</p>
                </div>
              </div>
            </div>
          </div>

          {/* Explore Links */}
          <div className="lg:col-span-3 space-y-8">
            <h4 className="text-[10px] uppercase tracking-[0.4em] text-amber-500 font-bold">Explore</h4>
            <ul className="space-y-4">
              {[
                { name: 'Accueil', path: '/' },
                { name: 'À propos', path: '/a-propos' },
                { name: 'Portfolio', path: '/portfolio' },
                { name: 'Services', path: '/services' },
                { name: 'Contact', path: '/contact' }
              ].map(item => (
                <li key={item.name}>
                  <Link to={item.path} className="text-sm text-neutral-400 hover:text-white transition-colors">{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[9px] uppercase tracking-[0.4em] text-neutral-600 gap-6">
          <p>© 2026 ONG STUDIO. DESIGNED FOR EXCELLENCE.</p>
          <div className="flex gap-10">
            <span className="cursor-pointer hover:text-neutral-400 transition-colors">Mentions Légales</span>
            <span className="cursor-pointer hover:text-neutral-400 transition-colors">Confidentialité</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;