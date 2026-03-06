
import React from 'react';
import { motion } from 'motion/react';

const Method: React.FC = () => {
  const steps = [
    {
      title: 'Diagnóstico de Precisão',
      description: 'Mapeamento metabólico completo via Bioimpedância de última geração e análise laboratorial de biomarcadores de elite.',
      number: '01',
      icon: '🔬',
      className: 'md:col-span-2'
    },
    {
      title: 'Planejamento Estratégico',
      description: 'Desenvolvimento de protocolos nutricionais e hormonais desenhados especificamente para sua genética.',
      number: '02',
      icon: '📋',
      className: 'md:col-span-1'
    },
    {
      title: 'Acompanhamento Premium',
      description: 'Suporte contínuo e ajustes dinâmicos para garantir a sustentabilidade dos resultados.',
      number: '03',
      icon: '💎',
      className: 'md:col-span-1'
    },
    {
      title: 'Performance & Longevidade',
      description: 'Foco no vigor físico e mental para que você viva sua melhor versão por muito mais tempo.',
      number: '04',
      icon: '⚡',
      className: 'md:col-span-2'
    }
  ];

  return (
    <section id="metodo" className="py-32 bg-night">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mb-24 space-y-8">
          <div className="flex items-center gap-4">
            <div className="h-px w-12 bg-matteGold/50"></div>
            <span className="text-matteGold uppercase tracking-[0.5em] text-[11px] font-black">A Ciência por trás do Resultado</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-serif text-silkWhite italic leading-tight">
            Método Nurture: <br />
            <span className="text-gradient-gold">O Caminho para a Excelência</span>
          </h2>
          <p className="text-support text-xl font-light leading-relaxed max-w-2xl">
            Esqueça as soluções genéricas. O Método Nurture une tecnologia avançada e humanização para criar um ecossistema de saúde sob medida para você.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`card-luxury p-12 flex flex-col justify-between group ${step.className}`}
            >
              <div className="space-y-8">
                <div className="flex justify-between items-start">
                  <span className="text-4xl">{step.icon}</span>
                  <span className="text-matteGold/20 font-mono text-5xl group-hover:text-matteGold transition-colors duration-700">
                    {step.number}
                  </span>
                </div>
                <div className="space-y-4">
                  <h3 className="text-3xl font-serif text-silkWhite group-hover:text-matteGold transition-colors duration-500">
                    {step.title}
                  </h3>
                  <p className="text-support text-lg leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>
              </div>
              
              <div className="mt-12 pt-8 border-t border-white/5 flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-[10px] uppercase tracking-widest text-matteGold font-black">Saber mais</span>
                <div className="h-px flex-grow bg-matteGold/20"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Method;
