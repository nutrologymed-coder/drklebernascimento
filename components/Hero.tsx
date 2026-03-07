
import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
      {/* Background Atmosphere */}
      <motion.div style={{ y: y1, opacity }} className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-gold/5 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-gold/5 blur-[120px] rounded-full"></div>
      </motion.div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Lado A: Copywriting */}
          <motion.div style={{ y: y2 }} className="w-full lg:w-3/5 space-y-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <div className="h-px w-12 bg-gold/50"></div>
                <span className="text-gold uppercase tracking-[0.5em] text-[10px] font-black font-body">
                  Nutrologia de Alta Performance
                </span>
              </div>
              
              <h1 className="text-6xl md:text-8xl lg:text-[110px] font-heading text-foreground leading-[0.9] tracking-tighter">
                Onde a <span className="italic text-gold-gradient">Ciência</span><br />
                encontra a <span className="italic">Excelência.</span>
              </h1>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-muted-foreground text-xl md:text-2xl font-light leading-relaxed max-w-2xl font-body"
            >
              Protocolos médicos de elite focados em emagrecimento estratégico, 
              tratamento de lipedema e longevidade metabólica. 
              <span className="block mt-4 text-gold/80 font-medium">Sua melhor versão começa com precisão.</span>
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-6 pt-4"
            >
              <a 
                href="https://wa.me/5588981827825" 
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-gold text-primary-foreground px-12 py-6 text-xs uppercase tracking-[0.3em] font-black hover:bg-foreground transition-all duration-500 text-center overflow-hidden font-body"
              >
                <span className="relative z-10">Agendar Consulta Premium</span>
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              </a>
              <a 
                href="#metodo" 
                className="group border border-border text-foreground px-12 py-6 text-xs uppercase tracking-[0.3em] font-black hover:border-gold transition-all duration-500 text-center font-body"
              >
                O Método Nurture
              </a>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex flex-wrap items-center gap-12 pt-12 border-t border-border"
            >
              <div className="space-y-2">
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-body">Especialidade</p>
                <p className="text-foreground text-sm font-heading italic">Duke University Fellowship</p>
              </div>
              <div className="space-y-2">
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-body">Membro</p>
                <p className="text-foreground text-sm font-heading italic">ABRAN Nutrologia</p>
              </div>
              <div className="space-y-2">
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-body">Localização</p>
                <p className="text-foreground text-sm font-heading italic">Juazeiro do Norte & Salgueiro</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Lado B: Foto do Dr. Kleber */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="w-full lg:w-2/5 relative"
          >
            <div className="relative z-10 animate-float">
              <div className="absolute -inset-4 border border-gold/20 translate-x-8 translate-y-8 -z-10"></div>
              <div className="overflow-hidden glass-card border-gold/10">
                <img 
                  src="dr-kleber-hero.png" 
                  alt="Dr. Kleber Nascimento" 
                  className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://picsum.photos/id/64/800/1000';
                  }}
                  referrerPolicy="no-referrer"
                />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-8 -left-8 glass-card p-8 space-y-2 hidden md:block">
                <p className="text-gold text-4xl font-heading italic leading-none">10+</p>
                <p className="text-[10px] uppercase tracking-widest text-foreground font-black leading-tight font-body">
                  Anos de<br />Experiência Clínica
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
