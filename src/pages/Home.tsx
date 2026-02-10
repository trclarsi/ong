import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Play, Quote, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { stats, testimonial, heroContent } from '../data/home';

const Home: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white overflow-x-hidden"
    >
      {/* SECTION HERO */}
      <section className="relative h-screen flex items-center overflow-hidden bg-neutral-900">
        <motion.div style={{ opacity }} className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1493125590504-03706037748a?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover opacity-60 scale-105" alt="Hero" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent"></div>
        </motion.div>

        <div className="container mx-auto px-6 relative z-10 pt-20">
          <div className="max-w-6xl">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.5 }} className="mb-8">
               <h1 className="font-serif leading-[0.8] tracking-tighter text-white">
                <span className="block text-[18vw] md:text-[14rem] font-bold uppercase">{heroContent.titleLine1}</span>
                <span className="block text-[11rem] font-light italic outline-text uppercase -mt-4 md:-mt-10">{heroContent.titleLine2}</span>
              </h1>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.8 }} className="flex items-start gap-8 mb-16 max-w-2xl border-l-2 border-amber-500 pl-8">
              <p className="text-xl md:text-3xl font-light text-neutral-300 leading-relaxed">{heroContent.description}</p>
            </motion.div>

            <div className="flex flex-wrap items-center gap-10">
              <Link to="/portfolio" className="px-12 py-6 bg-white text-black text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-amber-600 hover:text-white transition-all shadow-xl">Explorer le portfolio</Link>
              <Link to="/contact" className="group flex items-center gap-6 text-[11px] font-bold uppercase tracking-[0.4em] text-white transition-all">
                <div className="relative py-1">ME CONTACTER<span className="absolute bottom-0 left-0 w-0 h-[2px] bg-amber-500 transition-all duration-500 group-hover:w-full"></span></div>
                <div className="w-12 h-12 rounded-full border-2 border-amber-500 flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-black transition-all duration-500"><Play size={14} className="fill-current ml-0.5" /></div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION VISION & APPROCHE */}
      <section className="py-48 bg-white relative">
        <div className="container mx-auto px-6 text-black">
          <div className="grid lg:grid-cols-2 gap-24 items-start mb-32">
            <div>
              <div className="flex items-center gap-4 mb-8"><div className="w-12 h-[1px] bg-amber-600"></div><span className="text-[10px] font-bold uppercase tracking-[0.5em] text-neutral-400 font-sans">Vision & Approche</span></div>
              <h2 className="text-7xl md:text-[9rem] font-serif leading-[0.85] tracking-tight">L'Excellence<br/><span className="italic font-light text-neutral-200 ml-20 md:ml-40">Visuelle</span></h2>
            </div>
            <div className="lg:pt-32 lg:pl-20 space-y-10">
              <p className="text-neutral-500 text-xl font-light leading-relaxed max-w-md italic">"Chaque pixel est une décision stratégique."</p>
              <Quote className="text-amber-500/20 w-16 h-16" />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-16 md:gap-32 items-center">
             <motion.div style={{ y: y1 }} className="aspect-[4/5] overflow-hidden group shadow-2xl">
                <img src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100" alt="Vision 1" />
             </motion.div>
             <motion.div style={{ y: y2 }} className="aspect-[3/4] overflow-hidden group shadow-2xl md:translate-y-32">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100" alt="Vision 2" />
             </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION PRESTATIONS PREMIUM */}
      <section className="py-32 bg-[#111111] text-white">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6"><div className="w-10 h-[1px] bg-amber-500"></div><span className="text-[10px] font-bold uppercase tracking-[0.4em] text-amber-500">Expertise</span></div>
            <h2 className="text-5xl md:text-6xl font-serif">Prestations Premium</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Portrait", desc: "Sublimation de votre image personnelle.", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800" },
              { title: "Mariage", desc: "Capturer l'éternité de votre union.", img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800" },
              { title: "Mode", desc: "L'art du style et de la direction artistique.", img: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80&w=800" },
              { title: "Corporate", desc: "Valoriser votre expertise et votre image.", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" }
            ].map((item, idx) => (
              <motion.div key={idx} whileHover={{ y: -10 }} className="relative aspect-[3/4] overflow-hidden group cursor-pointer shadow-2xl">
                <img src={item.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110" alt={item.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-90"></div>
                <div className="absolute bottom-10 left-8 right-8">
                  <h4 className="text-3xl font-serif mb-3 transform group-hover:-translate-y-2 transition-transform duration-500">{item.title}</h4>
                  <p className="text-[11px] text-neutral-400 mb-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 font-light leading-relaxed">{item.desc}</p>
                  <div className="w-12 h-[2px] bg-amber-500"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION ESPRIT */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-6 text-black">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="relative flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="relative z-10 shadow-2xl grayscale overflow-hidden aspect-[4/3]"><img src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=1200" alt="Appareil photo" className="w-full h-full object-cover" /></div>
                <div className="absolute -bottom-6 -right-6 bg-amber-500 p-8 text-black shadow-xl z-20 min-w-[160px] text-center"><p className="text-4xl font-serif font-bold mb-1">10+</p><p className="text-[9px] font-black uppercase tracking-widest leading-tight">Années de passion</p></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-neutral-100 rounded-full -z-10"></div>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-6"><div className="w-10 h-[1px] bg-amber-600"></div><span className="text-[10px] font-bold uppercase tracking-[0.4em] text-neutral-400">L'Esprit</span></div>
              <h2 className="text-6xl md:text-7xl font-serif leading-tight mb-12 italic">Allier <span className="italic text-neutral-300">Stratégie</span> & Esthétique</h2>
              <div className="space-y-8 text-neutral-500 font-light leading-relaxed mb-12 max-w-xl">
                 <p>Formé en <span className="text-black font-semibold border-b border-amber-500">réseaux et télécommunications</span>, j'apporte une rigueur technique inhabituelle.</p>
                 <p>Nous construisons des outils de communication visuelle qui servent vos objectifs marketing et votre storytelling digital.</p>
              </div>
              <div className="grid grid-cols-2 gap-12 border-t border-neutral-100 pt-10 mb-12">
                <div><h4 className="text-[10px] font-black uppercase tracking-widest mb-4">Technique</h4><p className="text-xs text-neutral-400">Maîtrise de la lumière et du post-traitement avancé.</p></div>
                <div><h4 className="text-[10px] font-black uppercase tracking-widest mb-4">Stratégie</h4><p className="text-xs text-neutral-400">Optimisation des visuels pour l'engagement numérique.</p></div>
              </div>
              <Link to="/a-propos" className="flex items-center gap-6 text-[10px] font-black uppercase tracking-[0.4em] group text-black">LIRE MON HISTOIRE <div className="w-16 h-[1px] bg-black group-hover:w-24 transition-all"></div></Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION STATISTIQUES */}
      <section className="py-24 bg-white border-t border-b border-neutral-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center text-black">
            {stats.map((stat, idx) => (
              <div key={idx} className="space-y-2"><p className="text-4xl font-serif font-bold">{stat.value}</p><p className="text-[9px] font-bold uppercase tracking-[0.3em] text-neutral-400">{stat.label}</p></div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION TÉMOIGNAGES */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-6 text-black">
          <div className="text-center mb-24">
            <div className="flex items-center justify-center gap-3 mb-6"><div className="w-10 h-[1px] bg-amber-600"></div><span className="text-[10px] font-bold uppercase tracking-[0.4em] text-neutral-400">Témoignages</span><div className="w-10 h-[1px] bg-amber-600"></div></div>
            <h2 className="text-6xl md:text-7xl font-serif italic italic">La voix de nos clients</h2>
          </div>
          <div className="max-w-4xl mx-auto">
             <div className="bg-[#111111] p-16 md:p-24 relative overflow-hidden shadow-2xl rounded-sm text-white">
                <div className="absolute top-0 left-10 text-[20rem] font-serif text-white/5 leading-none select-none pointer-events-none">“</div>
                <div className="relative z-10 text-center">
                   <div className="flex justify-center gap-1 mb-10 text-amber-500 text-xl">{"★".repeat(testimonial.rating)}</div>
                   <p className="text-xl md:text-3xl font-serif leading-relaxed italic mb-12 italic">"{testimonial.text}"</p>
                   <div className="space-y-2"><p className="text-xs font-bold uppercase tracking-[0.3em]">{testimonial.author}</p><p className="text-[9px] font-bold uppercase tracking-[0.3em] text-amber-500">{testimonial.role}</p></div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover opacity-50" alt="CTA" />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center text-white">
           <h2 className="text-7xl md:text-9xl font-serif mb-12 italic">Donnons vie à <br/> <span className="italic outline-text opacity-80">vos idées.</span></h2>
           <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <Link to="/contact" className="px-12 py-6 bg-amber-500 text-black text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-white transition-all shadow-2xl">DÉMARRER UN PROJET</Link>
              <Link to="/portfolio" className="px-12 py-6 border border-white/30 text-white text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all">VOIR LE TRAVAIL</Link>
           </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
