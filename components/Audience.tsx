
import React from 'react';

const Audience: React.FC = () => {
  return (
    <section id="publico" className="py-24 bg-emeraldDeep relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-matteGold uppercase tracking-[0.3em] text-xs font-bold block mb-4">Protocolos Exclusivos</span>
          <h2 className="text-4xl md:text-5xl font-serif text-offWhite mb-6">Foco Individualizado</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Card Performance Masculina */}
          <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 p-12 hover:bg-white/10 transition-all duration-500">
            <div className="h-1 w-20 bg-matteGold mb-8"></div>
            <h3 className="text-3xl font-serif text-offWhite mb-6">Performance Masculina</h3>
            <ul className="space-y-4 text-offWhite/70 font-light mb-10 text-lg">
              <li className="flex items-center gap-3"><span className="text-matteGold">✦</span> Otimização Hormonal Estratégica</li>
              <li className="flex items-center gap-3"><span className="text-matteGold">✦</span> Máximo Vigor e Vitalidade</li>
              <li className="flex items-center gap-3"><span className="text-matteGold">✦</span> Ganho de Massa e Definição</li>
              <li className="flex items-center gap-3"><span className="text-matteGold">✦</span> Foco Cognitivo e Alta Performance</li>
            </ul>
            <a href="#contato" className="inline-block text-matteGold uppercase tracking-widest text-sm font-bold border-b border-matteGold pb-2 hover:text-offWhite hover:border-offWhite transition-all duration-300">
              Saber mais
            </a>
          </div>

          {/* Card Saúde Feminina */}
          <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 p-12 hover:bg-white/10 transition-all duration-500">
            <div className="h-1 w-20 bg-matteGold mb-8"></div>
            <h3 className="text-3xl font-serif text-offWhite mb-6">Saúde e Estética Feminina</h3>
            <ul className="space-y-4 text-offWhite/70 font-light mb-10 text-lg">
              <li className="flex items-center gap-3"><span className="text-matteGold">✦</span> Gerenciamento de Peso Saudável</li>
              <li className="flex items-center gap-3"><span className="text-matteGold">✦</span> Equilíbrio Metabólico e Endócrino</li>
              <li className="flex items-center gap-3"><span className="text-matteGold">✦</span> Melhora da Composição Corporal</li>
              <li className="flex items-center gap-3"><span className="text-matteGold">✦</span> Bem-estar e Longevidade Ativa</li>
            </ul>
            <a href="#contato" className="inline-block text-matteGold uppercase tracking-widest text-sm font-bold border-b border-matteGold pb-2 hover:text-offWhite hover:border-offWhite transition-all duration-300">
              Saber mais
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Audience;
