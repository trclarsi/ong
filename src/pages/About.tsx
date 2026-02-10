import React from 'react';
import { motion } from 'framer-motion';
import { Globe, ChevronRight, Download } from 'lucide-react';
import { skills, timeline, equipment, values } from '../data/about';

const About: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white"
    >
      {/* HERO SECTION */}
      <section className="relative pt-64 pb-32 bg-neutral-950 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1492691523567-61723c275df1?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" alt="About Background" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
             <div className="flex items-center gap-4 mb-8">
              <div className="h-[1px] w-12 bg-amber-500"></div>
              <p className="text-amber-500 text-[10px] tracking-[0.6em] uppercase font-bold">L'histoire derrière l'objectif</p>
            </div>
            <h1 className="text-7xl md:text-[10rem] font-serif leading-[0.8] tracking-tighter mb-12">
              AUDACE & <br/>
              <span className="italic text-white/30">PRÉCISION</span>
            </h1>
            <p className="text-2xl text-neutral-400 font-light max-w-2xl leading-relaxed">
              Photographe & Designer créatif basé à Montréal, je fusionne rigueur technique et émotion visuelle depuis plus d'une décennie.
            </p>
          </div>
        </div>
      </section>

      {/* BIOGRAPHY SECTION */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            <div className="space-y-12">
              <div className="flex items-center gap-3">
                <div className="w-10 h-[1px] bg-amber-600"></div>
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-neutral-400">Philosophie</span>
              </div>
              <h2 className="text-6xl md:text-7xl font-serif leading-tight">L'image doit <span className="italic">émouvoir</span> avant d'informer.</h2>
              <div className="space-y-6 text-lg text-neutral-500 font-light leading-relaxed">
                <p>Depuis plus de 10 ans, je transforme des visions en réalités visuelles. Mon parcours m'a mené de l'argentique au numérique, du studio aux quatre coins du monde, toujours avec la même passion : capturer l'essence de chaque moment, chaque marque, chaque histoire.</p>
                <p>Technicien en réseaux et télécommunications de formation, j'ai développé au fil des années une solide expertise en marketing numérique. Cette dualité me permet d'apporter une structure technique impeccable à des concepts hautement créatifs.</p>
              </div>
              <button className="flex items-center gap-6 text-[10px] font-black uppercase tracking-[0.4em] group border-b border-black pb-4 text-black">
                TÉLÉCHARGER MON CV <Download size={14} className="group-hover:translate-y-1 transition-transform" />
              </button>
            </div>
            <div className="relative">
              <div className="aspect-[3/4] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover" alt="ONG Profile" />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-amber-500 p-12 text-black shadow-2xl hidden md:block max-w-[280px]">
                <p className="text-5xl font-serif font-bold mb-2">10+</p>
                <p className="text-[9px] font-black uppercase tracking-widest leading-tight text-black">Années de passion, d'évolution et d'excellence visuelle.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section className="py-40 bg-neutral-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-[1px] bg-amber-600"></div>
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-neutral-400">Expertise</span>
              </div>
              <h3 className="text-5xl font-serif mb-12 italic text-black">Maîtrise Technique</h3>
              <div className="space-y-8">
                {skills.map((skill, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-black">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="h-[2px] w-full bg-neutral-200 overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="h-full bg-amber-500"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {equipment.map((group, idx) => (
                <div key={idx} className="bg-white p-10 shadow-sm border border-neutral-100">
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-amber-600 mb-6">{group.category}</h4>
                  <ul className="space-y-4">
                    {group.items.map((item, iIdx) => (
                      <li key={iIdx} className="text-neutral-500 font-light flex items-center gap-3">
                        <ChevronRight size={12} className="text-amber-500" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <div className="md:col-span-2 bg-black text-white p-10 flex flex-col justify-between">
                <Globe className="text-amber-500 mb-8" size={32} />
                <div>
                  <h4 className="text-xl font-serif mb-4">Basé à Montréal</h4>
                  <p className="text-neutral-400 text-sm font-light">Disponible pour des projets locaux et des collaborations internationales.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE SECTION */}
      <section className="py-48 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-32">
            <p className="text-[#c0822f] text-[10px] tracking-[0.5em] uppercase font-bold mb-6 font-sans">MON PARCOURS</p>
            <h2 className="text-7xl md:text-8xl font-serif italic text-black leading-none">L'évolution du Regard</h2>
          </div>

          <div className="max-w-6xl mx-auto relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-neutral-100 -translate-x-1/2 hidden md:block"></div>
            <div className="space-y-24 md:space-y-0">
              {timeline.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col md:flex-row items-center md:py-12 group ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`w-full md:w-1/2 ${idx % 2 === 0 ? 'md:pr-20 md:text-right' : 'md:pl-20 md:text-left'}`}>
                    <span className="text-5xl md:text-6xl font-serif text-neutral-100 mb-4 block group-hover:text-[#c0822f] transition-colors">
                      {item.year}
                    </span>
                    <div className="space-y-4">
                      <h4 className="text-3xl md:text-4xl font-serif text-black leading-tight">
                        {item.title} <br/>
                        <span className="italic text-neutral-400 font-light text-2xl md:text-3xl">{item.company}</span>
                      </h4>
                      <p className="text-lg text-neutral-400 font-light leading-relaxed max-w-md inline-block">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-white border border-[#c0822f] rounded-full z-10 hidden md:block group-hover:scale-150 transition-transform"></div>
                  <div className="hidden md:block md:w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VALUES SECTION */}
      <section className="py-40 bg-neutral-950 text-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-16">
            {values.map((value, idx) => (
              <div key={idx} className="space-y-6 text-center group">
                <div className="w-20 h-20 border border-white/10 flex items-center justify-center mx-auto group-hover:bg-amber-600 transition-colors duration-500">
                  <value.icon className="w-8 h-8 text-amber-500 group-hover:text-black transition-colors" />
                </div>
                <h4 className="text-2xl font-serif italic">{value.title}</h4>
                <p className="text-neutral-500 font-light leading-relaxed">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
