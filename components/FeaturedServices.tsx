
import React from 'react';
import { motion } from 'motion/react';

const FeaturedServices: React.FC = () => {
  const services = [
    {
      title: 'Emagrecimento Médico',
      subtitle: 'Saúde Metabólica de Alta Performance',
      description: 'Protocolos personalizados baseados em biometria de precisão e análise profunda de biomarcadores. Foco em perda de gordura preservando massa magra e otimizando a energia celular.',
      image: 'servico-emagrecimento.jpg',
      features: ['Análise de Bioimpedância', 'Modulação Metabólica', 'Acompanhamento Contínuo']
    },
    {
      title: 'Tratamento de Lipedema',
      subtitle: 'Abordagem Clínica Especializada',
      description: 'Diagnóstico e manejo do lipedema através de estratégias anti-inflamatórias e metabólicas. Foco na redução da dor, inchaço e melhora da qualidade de vida.',
      image: 'servico-lipedema.jpg',
      features: ['Dieta Anti-inflamatória', 'Suporte Nutrológico', 'Gestão de Sintomas']
    }
  ];

  return (
    <section id="protocolos" className="py-32 bg-night">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center mb-24 space-y-8">
          <span className="text-matteGold uppercase tracking-[0.5em] text-[11px] font-black">Especialidades de Destaque</span>
          <h2 className="text-5xl md:text-7xl font-serif text-silkWhite italic">Protocolos de Elite</h2>
          <div className="h-px w-32 bg-matteGold/40 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {services.map((service, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="group relative overflow-hidden card-luxury"
            >
              <div className="flex flex-col h-full">
                <div className="aspect-video overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="h-full w-full object-cover transition-transform duration-[2000ms] group-hover:scale-110 grayscale group-hover:grayscale-0"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (idx === 0) target.src = 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800';
                    else target.src = 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800';
                  }}
                  referrerPolicy="no-referrer"
                />
                  <div className="absolute inset-0 bg-gradient-to-t from-night via-transparent to-transparent opacity-60"></div>
                </div>
                
                <div className="p-12 space-y-8">
                  <div className="space-y-4">
                    <p className="text-matteGold text-[10px] uppercase tracking-[0.3em] font-black">{service.subtitle}</p>
                    <h3 className="text-4xl font-serif text-silkWhite group-hover:text-matteGold transition-colors duration-500">{service.title}</h3>
                  </div>
                  
                  <p className="text-support text-lg leading-relaxed font-light">
                    {service.description}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/5">
                    {service.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-3">
                        <div className="glow-dot"></div>
                        <span className="text-[10px] uppercase tracking-widest text-silkWhite/70 font-bold">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
