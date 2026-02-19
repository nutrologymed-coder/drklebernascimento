
import React from 'react';

const Method: React.FC = () => {
  const steps = [
    {
      title: 'Diagnóstico de Precisão',
      description: 'Mapeamento metabólico completo via Bioimpedância de última geração e análise laboratorial de biomarcadores de elite.',
      number: '01'
    },
    {
      title: 'Planejamento Estratégico',
      description: 'Desenvolvimento de protocolos nutricionais e hormonais desenhados especificamente para sua genética, rotina e objetivos.',
      number: '02'
    },
    {
      title: 'Acompanhamento Premium',
      description: 'Suporte contínuo e ajustes dinâmicos para garantir a sustentabilidade dos resultados e a manutenção da alta performance.',
      number: '03'
    }
  ];

  return (
    <section id="metodo" className="py-24 bg-offWhite">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <span className="text-matteGold uppercase tracking-[0.3em] text-xs font-bold block mb-4">A Ciência por trás do Resultado</span>
          <h2 className="text-4xl md:text-5xl font-serif text-anthracite mb-8">Método Nurture: O Caminho para a Excelência</h2>
          <p className="text-anthracite/70 text-lg font-light leading-relaxed">
            Esqueça as soluções genéricas. O Método Nurture une tecnologia avançada e humanização para criar um ecossistema de saúde sob medida para você.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div 
              key={idx} 
              className="bg-white p-10 shadow-[0_10px_40px_rgba(0,0,0,0.02)] border border-anthracite/5 hover:border-matteGold/30 transition-all duration-500 group"
            >
              <div className="text-4xl font-serif text-matteGold/20 group-hover:text-matteGold/100 transition-colors duration-500 mb-6">{step.number}</div>
              <h3 className="text-2xl font-serif text-anthracite mb-4">{step.title}</h3>
              <p className="text-anthracite/60 leading-relaxed font-light">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Method;
