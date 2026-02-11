import React, { useState } from 'react';
import { 
  Send, 
  Instagram, 
  Facebook, 
  Linkedin,
  MessageSquare,
  FileText,
  CheckCircle,
  Globe,
  Clock,
  MapPin
} from 'lucide-react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [formType, setFormType] = useState<'message' | 'devis'>('message');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white"
    >
      {/* HERO SECTION */}
      <section className="relative pt-64 pb-20 bg-neutral-950 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <img src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" alt="Background" />
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
          <span className="text-[30vw] font-serif font-bold italic absolute -top-20 -right-20 leading-none select-none">HELLO</span>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[1px] w-12 bg-amber-500"></div>
              <p className="text-amber-500 text-[10px] tracking-[0.6em] uppercase font-bold">Connexion & Collaboration</p>
            </div>
            <h1 className="text-7xl md:text-[11rem] font-serif leading-[0.8] tracking-tighter mb-12">
              PARLONS DE <br/>
              <span className="italic text-white/30">VOTRE VISION</span>
            </h1>
            <p className="text-2xl text-neutral-400 font-light max-w-2xl leading-relaxed">
              Une idée, un projet, une question ? Je suis à votre écoute pour transformer vos concepts en réalités visuelles mémorables.
            </p>
          </div>
        </div>
      </section>

      {/* MAIN CONTACT SECTION */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-24">
            
            {/* COLONNE GAUCHE */}
            <div className="lg:col-span-5 space-y-16">
              <div className="space-y-12">
                <div className="group">
                  <p className="text-[10px] uppercase tracking-[0.4em] text-amber-600 font-bold mb-4">Email</p>
                  <a href="mailto:Ongpic.ca@gmail.com" className="text-3xl md:text-4xl font-serif hover:text-amber-600 transition-colors break-words">
                    Ongpic.ca@gmail.com
                  </a>
                </div>

                <div className="group">
                  <p className="text-[10px] uppercase tracking-[0.4em] text-amber-600 font-bold mb-4">Téléphone</p>
                  <a href="tel:4388743813" className="text-3xl md:text-4xl font-serif hover:text-amber-600 transition-colors">
                    +1 438-874-3813
                  </a>
                </div>

                <div className="group">
                  <p className="text-[10px] uppercase tracking-[0.4em] text-amber-600 font-bold mb-4">Studio</p>
                  <p className="text-3xl md:text-4xl font-serif leading-tight">
                    8195 rue Fabre,<br/> Montréal, QC
                  </p>
                </div>
              </div>

              <div className="bg-neutral-50 p-12 border-l-4 border-amber-600">
                <div className="flex items-center gap-3 mb-8">
                  <Clock className="w-5 h-5 text-amber-600" />
                  <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold">Heures d'ouverture</h4>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between border-b border-neutral-200 pb-2">
                    <span className="text-sm font-medium">Lundi - Vendredi</span>
                    <span className="text-sm text-neutral-500 italic">09:00 — 18:00</span>
                  </div>
                  <div className="flex justify-between border-b border-neutral-200 pb-2">
                    <span className="text-sm font-medium">Samedi</span>
                    <span className="text-sm text-neutral-500 italic">Sur rendez-vous</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Dimanche</span>
                    <span className="text-sm text-neutral-500 italic">Fermé</span>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.4em] text-neutral-400 font-bold mb-8">Suivez l'oeil</p>
                <div className="flex gap-8">
                  {[Instagram, Facebook, Linkedin].map((Icon, idx) => (
                    <a key={idx} href="#" className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-500">
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* COLONNE DROITE */}
            <div className="lg:col-span-7">
              <div className="bg-white border border-neutral-100 shadow-2xl p-8 md:p-16 relative overflow-hidden">
                <div className="flex gap-8 mb-16 border-b border-neutral-100 pb-8">
                  <button 
                    onClick={() => setFormType('message')}
                    className={`flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] font-bold transition-all ${formType === 'message' ? 'text-black scale-105' : 'text-neutral-300 hover:text-neutral-500'}`}
                  >
                    <MessageSquare className={`w-4 h-4 ${formType === 'message' ? 'text-amber-500' : ''}`} /> Message Rapide
                  </button>
                  <button 
                    onClick={() => setFormType('devis')}
                    className={`flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] font-bold transition-all ${formType === 'devis' ? 'text-black scale-105' : 'text-neutral-300 hover:text-neutral-500'}`}
                  >
                    <FileText className={`w-4 h-4 ${formType === 'devis' ? 'text-amber-500' : ''}`} /> Devis Gratuit
                  </button>
                </div>

                {isSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-20 text-center"
                  >
                    <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8">
                      <CheckCircle className="w-10 h-10 text-green-500" />
                    </div>
                    <h4 className="text-3xl font-serif mb-4">Message Envoyé</h4>
                    <p className="text-neutral-500">Merci ! Je reviens vers vous dans les prochaines 24 heures.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-[9px] uppercase tracking-widest font-bold text-neutral-400">Nom complet *</label>
                        <input type="text" required className="w-full border-b border-neutral-200 py-4 focus:border-amber-500 outline-none transition-colors font-light text-lg" placeholder="Ex: Jean-Sébastien Roy" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[9px] uppercase tracking-widest font-bold text-neutral-400">Email *</label>
                        <input type="email" required className="w-full border-b border-neutral-200 py-4 focus:border-amber-500 outline-none transition-colors font-light text-lg" placeholder="votre@email.com" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-[9px] uppercase tracking-widest font-bold text-neutral-400">Téléphone (Optionnel)</label>
                        <input type="tel" className="w-full border-b border-neutral-200 py-4 focus:border-amber-500 outline-none transition-colors font-light text-lg" placeholder="514 000 0000" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[9px] uppercase tracking-widest font-bold text-neutral-400">Objet du projet</label>
                        <select className="w-full border-b border-neutral-200 py-4 focus:border-amber-500 outline-none transition-colors font-light text-lg bg-transparent">
                          <option>Shooting Photo</option>
                          <option>Montage Vidéo</option>
                          <option>Branding / Logo</option>
                          <option>Autre</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[9px] uppercase tracking-widest font-bold text-neutral-400">Votre message</label>
                      <textarea rows={4} required className="w-full border-b border-neutral-200 py-4 focus:border-amber-500 outline-none transition-colors font-light text-lg resize-none" placeholder="Dites-moi en plus sur vos idées..."></textarea>
                    </div>

                    <div className="pt-8">
                      <button type="submit" className="group w-full md:w-auto px-16 py-6 bg-black text-white text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-amber-600 transition-all flex items-center justify-center gap-6">
                        Envoyer le message <Send className="w-4 h-4 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                      </button>
                    </div>
                  </form>
                )}

                <div className="absolute bottom-0 right-0 p-4 opacity-5 pointer-events-none">
                  <Globe className="w-32 h-32 text-black" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="h-[400px] bg-neutral-100 relative group overflow-hidden">
        <div className="absolute inset-0 grayscale contrast-125 opacity-40 group-hover:opacity-60 transition-opacity duration-1000">
           <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" alt="Montréal Map" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="bg-white p-8 shadow-2xl text-center max-w-sm"
          >
            <MapPin className="w-8 h-8 text-amber-600 mx-auto mb-4" />
            <p className="text-[10px] uppercase tracking-widest font-bold text-neutral-400 mb-2">Basé à Montréal</p>
            <p className="text-xl font-serif">8195 rue Fabre, QC</p>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;