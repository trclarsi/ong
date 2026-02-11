import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Plus } from 'lucide-react';
import { categories, projects } from '../data/portfolio';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('Tous');

  const filteredProjects = filter === 'Tous' ? projects : projects.filter(p => p.category === filter);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="bg-white">
      {/* HERO SECTION */}
      <section className="relative pt-64 pb-32 bg-neutral-950 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <img src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" alt="Background" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[1px] w-12 bg-amber-500"></div>
              <p className="text-amber-500 text-[10px] tracking-[0.6em] uppercase font-bold">Galerie & Réalisations</p>
            </div>
            <h1 className="text-7xl md:text-[10rem] font-serif leading-[0.8] tracking-tighter mb-12">PORTFOLIO <br/><span className="italic text-white/30">SÉLECTIF</span></h1>
            <p className="text-2xl text-neutral-400 font-light max-w-2xl leading-relaxed">Une immersion dans mes travaux les plus significatifs.</p>
          </div>
        </div>
      </section>

      {/* FILTER SECTION */}
      <section className="py-20 bg-white sticky top-16 z-40 border-b border-neutral-100">
        <div className="container mx-auto px-6 text-black">
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setFilter(cat)} className={`text-[10px] font-bold uppercase tracking-[0.3em] transition-all relative py-2 ${filter === cat ? 'text-[#c0822f]' : 'text-neutral-400 hover:text-black'}`}>
                {cat}
                {filter === cat && <motion.div layoutId="underline" className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#c0822f]" />}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS GRID */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode='popLayout'>
              {filteredProjects.map((project, idx) => (
                <motion.div key={project.title} layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.5, delay: idx * 0.05 }} className="group relative aspect-[4/5] overflow-hidden bg-neutral-100 cursor-pointer shadow-xl">
                  <img src={project.img} alt={project.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-12 text-white">
                    <div className="space-y-4 translate-y-8 group-hover:translate-y-0 transition-transform duration-700">
                      <p className="text-amber-500 text-[10px] uppercase tracking-widest font-bold">{project.category}</p>
                      <h4 className="text-3xl font-serif">{project.title}</h4>
                      <div className="flex items-center gap-4 text-[9px] uppercase tracking-widest text-white/70 font-bold">Détails du projet <ExternalLink size={12} /></div>
                    </div>
                  </div>
                  <div className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 hover:bg-amber-600 hover:text-black"><Plus size={20} /></div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-40 bg-neutral-950 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center"><span className="text-[60vw] font-black outline-text uppercase leading-none">ONG</span></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-6xl md:text-8xl font-serif mb-12 italic">Prêt à créer votre <span className="italic text-amber-500">histoire ?</span></h2>
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-16 py-8 bg-white text-black text-[11px] font-bold uppercase tracking-[0.4em] hover:bg-amber-600 hover:text-white transition-all shadow-2xl">Démarrer un projet</motion.button>
        </div>
      </section>
    </motion.div>
  );
};

export default Portfolio;