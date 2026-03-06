
import React from 'react';
import { motion } from 'motion/react';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-32 bg-obsidian overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-24">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative z-10">
              <div className="absolute -top-10 -left-10 w-40 h-40 border-t-2 border-l-2 border-matteGold/30 -z-10"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 border-b-2 border-r-2 border-matteGold/30 -z-10"></div>
              
              <div className="overflow-hidden card-luxury">
                <img 
                  src="dr-kleber-about.jpg" 
                  alt="Dr. Kleber Nascimento" 
                  className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://picsum.photos/id/1/800/800?grayscale';
                  }}
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            
            {/* Signature Element */}
            <div className="absolute -bottom-12 -right-12 glass p-10 hidden lg:block">
              <p className="text-matteGold font-serif italic text-3xl">Dr. Kleber Nascimento</p>
              <p className="text-[10px] uppercase tracking-[0.4em] text-silkWhite/50 font-black mt-2">Fundador do Método Nurture</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2 space-y-12"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="h-px w-12 bg-matteGold/50"></div>
                <span className="text-matteGold uppercase tracking-[0.5em] text-[11px] font-black">Sobre a Autoridade</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-serif text-silkWhite italic leading-tight">
                Ciência Rigorosa, <br />
                <span className="text-gradient-gold">Cuidado Individualizado.</span>
              </h2>
            </div>
            
            <div className="space-y-8 text-support text-xl font-light leading-relaxed">
              <p>
                <strong className="text-silkWhite">CRM-CE 15853</strong> | Especialista em Clínica Médica (RQE 15104) e Medicina Intensiva (RQE 18731), com Pós-graduação em Nutrologia pela <strong className="text-matteGold">ABRAN</strong>.
              </p>
              <p>
                Atua na interseção entre a medicina de alta complexidade e a nutrologia clínica, dedicando-se à reestruturação metabólica e à terapia nutricional avançada. Chefe da Equipe Multidisciplinar de Terapia Nutricional do Hospital Geral de Brejo Santo.
              </p>
              <p className="border-l-2 border-matteGold/30 pl-8 italic text-silkWhite/80 py-4">
                "Minha missão é unir a ciência das evidências à escuta qualificada para transformar a saúde metabólica e a longevidade de cada paciente."
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/5">
              <div className="space-y-2">
                <span className="block text-3xl font-serif text-silkWhite">SBCM</span>
                <span className="text-[10px] uppercase tracking-widest text-muted-luxury font-black">Clínica Médica</span>
              </div>
              <div className="space-y-2">
                <span className="block text-3xl font-serif text-silkWhite">ABRAN</span>
                <span className="text-[10px] uppercase tracking-widest text-muted-luxury font-black">Nutrologia</span>
              </div>
              <div className="space-y-2">
                <span className="block text-3xl font-serif text-silkWhite">AMIB</span>
                <span className="text-[10px] uppercase tracking-widest text-muted-luxury font-black">Med. Intensiva</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
