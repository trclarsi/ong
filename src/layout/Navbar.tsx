import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'ACCUEIL', path: '/' },
    { name: 'À PROPOS', path: '/a-propos' },
    { name: 'PORTFOLIO', path: '/portfolio' },
    { name: 'SERVICES', path: '/services' },
    { name: 'CONTACT', path: '/contact' },
  ];

  const isDarkHeader = scrolled || location.pathname !== '/';

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-500 ${isDarkHeader ? 'bg-white py-3 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6">
        <div className={`text-[9px] font-bold tracking-[0.3em] mb-2 transition-colors ${isDarkHeader ? 'text-amber-600' : 'text-amber-500'}`}>
          MONTRÉAL & INTERNATIONAL
        </div>
        
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-4 group">
            <div className={`w-8 h-8 border flex items-center justify-center transition-colors ${isDarkHeader ? 'border-black text-black' : 'border-white text-white'}`}>
              <span className="font-serif font-bold text-sm group-hover:text-amber-600 transition-colors">o</span>
            </div>
            <span className={`text-lg font-serif font-black tracking-[0.3em] transition-colors ${isDarkHeader ? 'text-black' : 'text-white'}`}>STUDIO</span>
          </Link>

          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-[10px] font-bold tracking-[0.2em] relative py-1 transition-all group ${
                  location.pathname === link.path
                    ? 'text-amber-600' 
                    : (isDarkHeader ? 'text-black/70 hover:text-black' : 'text-white/70 hover:text-white')
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-[2px] bg-amber-600 transition-all ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>
            ))}
          </div>

          <Link 
            to="/contact"
            className={`hidden md:block px-6 py-2.5 text-[10px] font-bold tracking-widest transition-all ${
              isDarkHeader 
                ? 'bg-black text-white hover:bg-amber-600' 
                : 'bg-white text-black hover:bg-amber-500 hover:text-white'
            }`}
          >
            DEVIS EXPRESS
          </Link>

          <button className="lg:hidden" onClick={() => setIsMenuOpen(true)}>
            <Menu className={isDarkHeader ? 'text-black' : 'text-white'} />
          </button>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black z-[200] flex flex-col items-center justify-center">
          <button className="absolute top-10 right-10 text-white" onClick={() => setIsMenuOpen(false)}><X size={32} /></button>
          <div className="flex flex-col gap-8 text-center">
            {navLinks.map(link => (
              <Link 
                key={link.name} 
                to={link.path} 
                onClick={() => setIsMenuOpen(false)}
                className="text-white text-4xl font-serif italic hover:text-amber-500 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
