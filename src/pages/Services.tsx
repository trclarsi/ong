import React from 'react';
import { ArrowRight, Plus, Sparkles, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { services, advantages } from '../data/services';

const Services: React.FC = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="bg-white">
      {/* HERO SECTION */}
      <section className="relative pt-64 pb-32 bg-neutral-950 text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full opacity-20 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-neutral-950"></div>
          <img src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" alt="Background" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[1px] w-12 bg-amber-500"></div>
              <p className="text-amber-500 text-[10px] tracking-[0.6em] uppercase font-bold">Expertise & Savoir-faire</p>
            </div>
            <h1 className="text-7xl md:text-[10rem] font-serif leading-[0.8] tracking-tighter mb-12">SOLUTIONS <br/><span className="italic text-white/30">CRÉATIVES</span></h1>
            <p className="text-2xl text-neutral-400 font-light max-w-2xl leading-relaxed">De la capture de l'instant à la structuration de votre identité de marque.</p>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, idx) => (
              <motion.div key={idx} whileHover={{ y: -10 }} className="group relative flex flex-col bg-neutral-50 hover:bg-black transition-all duration-700 overflow-hidden min-h-[550px]">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-1000 scale-110 group-hover:scale-100">
                  <img src={service.bg} alt={service.title} className="w-full h-full object-cover" />
                </div>
                <div className="relative z-10 p-12 flex flex-col h-full text-black group-hover:text-white transition-colors">
                  <div className="flex justify-between items-start mb-12">
                    <div className="p-4 bg-white/10 backdrop-blur-md group-hover:bg-amber-600 group-hover:text-black transition-colors text-amber-600">
                      <service.icon size={32} />
                    </div>
                    <span className="text-4xl font-serif text-neutral-200 group-hover:text-white/20 transition-colors italic">0{idx + 1}</span>
                  </div>
                  <h3 className="text-4xl font-serif mb-6">{service.title}</h3>
                  <p className="text-neutral-500 group-hover:text-neutral-400 font-light mb-10 max-w-md leading-relaxed">{service.desc}</p>
                  <div className="space-y-4 mb-12">
                    {service.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-3 text-[10px] uppercase tracking-widest font-bold text-neutral-400 group-hover:text-white/70">
                        <Plus className="w-3 h-3 text-amber-500" /> {feat}
                      </div>
                    ))}
                  </div>
                  <div className="mt-auto flex items-end justify-between border-t border-neutral-200 group-hover:border-white/10 pt-8">
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-neutral-400 group-hover:text-amber-500 font-bold mb-1">À partir de</p>
                      <p className="text-3xl font-serif">{service.price}</p>
                    </div>
                    <Link to="/contact" className="flex items-center gap-4 text-[10px] uppercase tracking-widest font-bold hover:text-amber-500 transition-colors">
                      Demander un devis <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section className="py-40 bg-neutral-950 text-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
               <p className="text-amber-500 text-[10px] tracking-[0.6em] uppercase font-bold mb-8">L'avantage ONG Studio</p>
               <h2 className="text-6xl md:text-8xl font-serif leading-[0.9] mb-12 italic">Pourquoi me <br/> <span className="text-white/20">confier</span> votre vision ?</h2>
               <div className="space-y-12">
                  {advantages.map((item, idx) => (
                    <div key={idx} className="flex gap-8 group">
                      <div className="w-16 h-16 shrink-0 border border-white/20 flex items-center justify-center group-hover:bg-amber-600 transition-colors duration-500">
                        <item.icon className="w-6 h-6 text-amber-500 group-hover:text-black transition-colors" />
                      </div>
                      <div>
                        <h4 className="text-xl font-serif mb-3 italic">{item.title}</h4>
                        <p className="text-neutral-500 font-light leading-relaxed">{item.text}</p>
                      </div>
                    </div>
                  ))}
               </div>
            </div>
            <div className="relative">
               <div className="aspect-[4/5] overflow-hidden grayscale">
                  <img src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover scale-110" alt="Process" />
               </div>
               <div className="absolute -bottom-10 -right-10 bg-amber-600 p-12 max-w-xs hidden md:block">
                  <Sparkles className="w-10 h-10 text-black mb-6" />
                  <p className="text-black text-lg font-serif italic">"Chaque pixel est une décision stratégique pour votre marque."</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-6xl md:text-8xl font-serif mb-12 text-black">Besoin d'un service <span className="italic">personnalisé ?</span></h2>
            <div className="flex flex-col md:flex-row justify-center gap-6">
              <Link to="/contact" className="px-12 py-6 bg-black text-white text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-amber-600 transition-all shadow-2xl">Discutons de votre projet</Link>
              <a href="mailto:Ongpic.ca@gmail.com" className="px-12 py-6 border border-neutral-200 text-black text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-black hover:text-white transition-all flex items-center justify-center gap-4"><Mail className="w-4 h-4" /> Email direct</a>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;
