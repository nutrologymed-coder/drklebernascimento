
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const faqs = [
  {
    question: "O que é a Nutrologia de Precisão?",
    answer: "É uma abordagem médica que utiliza exames laboratoriais avançados, bioimpedância de alta tecnologia e análise do estilo de vida para criar protocolos nutricionais e metabólicos únicos para cada paciente, focando em resultados reais e sustentáveis."
  },
  {
    question: "Como funciona o tratamento para Lipedema?",
    answer: "Nosso protocolo foca na redução da inflamação sistêmica através de dieta específica, suplementação estratégica e orientações de estilo de vida, visando a melhora da dor, do edema e da qualidade de vida da paciente."
  },
  {
    question: "As consultas são apenas presenciais?",
    answer: "Realizamos atendimentos presenciais em Juazeiro do Norte e Salgueiro. Para pacientes de outras regiões, oferecemos a modalidade de telemedicina, seguindo todas as normas do Conselho Federal de Medicina."
  },
  {
    question: "O Dr. Kleber atende convênios?",
    answer: "Nossos atendimentos são exclusivamente particulares para garantir o tempo e a dedicação necessários para um acompanhamento de alta performance. No entanto, fornecemos toda a documentação necessária para que você possa solicitar reembolso junto ao seu plano de saúde."
  }
];

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-32 bg-obsidian">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-24 space-y-6">
            <span className="text-matteGold uppercase tracking-[0.5em] text-[11px] font-black">Dúvidas Frequentes</span>
            <h2 className="text-5xl md:text-7xl font-serif text-silkWhite italic">Esclarecendo sua Jornada</h2>
            <div className="h-px w-32 bg-matteGold/40 mx-auto"></div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="border border-white/5 bg-night overflow-hidden transition-all duration-300 hover:border-matteGold/20 relative"
              >
                <div className="absolute inset-0 bg-white/[0.01] backdrop-blur-[1px] -z-10"></div>
                <button
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  className="w-full p-8 text-left flex justify-between items-center group"
                >
                  <span className="text-xl font-serif text-silkWhite group-hover:text-matteGold transition-colors">
                    {faq.question}
                  </span>
                  <span className={`text-matteGold transition-transform duration-500 ${activeIndex === index ? 'rotate-180' : ''}`}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </button>
                
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                      <div className="px-8 pb-8 text-support leading-relaxed text-lg border-t border-white/5 pt-6">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
