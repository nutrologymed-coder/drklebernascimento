
import React from 'react';
import { motion } from 'motion/react';
import { Microscope, Target, ShieldCheck, Zap } from 'lucide-react';

const Method: React.FC = () => {
  const steps = [
    {
      title: 'Diagnóstico de Precisão',
      description: 'Mapeamento metabólico completo via Bioimpedância de última geração e análise laboratorial de biomarcadores de elite.',
      number: '01',
      icon: Microscope,
    },
    {
      title: 'Planejamento Estratégico',
      description: 'Desenvolvimento de protocolos nutricionais e hormonais desenhados especificamente para sua genética.',
      number: '02',
      icon: Target,
    },
    {
      title: 'Acompanhamento Premium',
      description: 'Suporte contínuo e ajustes dinâmicos para garantir a sustentabilidade dos resultados.',
      number: '03',
      icon: ShieldCheck,
    },
    {
      title: 'Performance & Longevidade',
      description: 'Foco no vigor físico e mental para que você viva sua melhor versão por muito mais tempo.',
      number: '04',
      icon: Zap,
    }
  ];

  return (
    <section id="metodo" className="section-padding bg-background relative overflow-hidden border-y border-border/50">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/5 -z-10 border-l border-border/30"></div>
      
      <div className="container mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          
          {/* Left Column: Philosophy */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-5 space-y-12"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="h-px w-12 bg-gold/50"></div>
                <span className="text-gold uppercase tracking-[0.5em] text-[11px] font-black font-body">The Nurture Protocol</span>
              </div>
              <h2 className="text-6xl md:text-8xl font-heading text-foreground leading-[0.9] tracking-tighter">
                Engenharia da <br />
                <span className="italic text-gold-gradient">Saúde Metabólica</span>
              </h2>
            </div>
            
            <div className="space-y-8 text-muted-foreground text-xl font-light leading-relaxed font-body">
              <p>
                Não acreditamos em soluções genéricas. O Método Nurture é uma construção matemática da sua saúde, onde cada variável é ajustada com precisão cirúrgica.
              </p>
              <p>
                Unimos a tecnologia de ponta ao rigor científico para decodificar sua biologia e destravar o seu potencial máximo.
              </p>
            </div>

            <div className="pt-8">
              <div className="inline-flex items-center gap-6 p-8 glass-card border-gold/20">
                <div className="text-5xl font-heading text-gold italic">100%</div>
                <div className="text-[10px] uppercase tracking-widest text-foreground font-black font-body leading-tight">
                  Protocolos<br />Personalizados
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Steps */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group relative"
              >
                <div className="glass-card p-10 h-full flex flex-col justify-between hover:border-gold/40 transition-all duration-700 hover:-translate-y-2">
                  <div className="space-y-8">
                    <div className="flex justify-between items-start">
                      <div className="p-4 bg-gold/5 rounded-sm group-hover:bg-gold/10 transition-colors duration-500">
                        <step.icon className="w-8 h-8 text-gold/60 group-hover:text-gold transition-colors duration-500" />
                      </div>
                      <span className="text-gold/10 font-heading text-7xl group-hover:text-gold/20 transition-colors duration-700 leading-none">
                        {step.number}
                      </span>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-2xl font-heading text-foreground group-hover:text-gold transition-colors duration-500 italic">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground text-base leading-relaxed font-light font-body">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-10 pt-6 border-t border-border/50 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                    <span className="text-[9px] uppercase tracking-[0.3em] text-gold font-black font-body">Ciência Aplicada</span>
                    <div className="w-8 h-px bg-gold/30"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Vertical Rail Text */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:block">
        <p className="writing-mode-vertical rotate-180 text-[10px] uppercase tracking-[1em] text-gold/20 font-black font-body">
          PRECISÃO • CIÊNCIA • PERFORMANCE
        </p>
      </div>
    </section>
  );
};

export default Method;
