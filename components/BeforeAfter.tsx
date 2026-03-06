
import React from 'react';

const BeforeAfter: React.FC = () => {
  const cases = [
    {
      id: 1,
      title: 'Protocolo Emagrecimento 90 Dias',
      description: 'Redução de gordura visceral e ganho de massa magra através de modulação metabólica.',
      before: 'antes-depois-1-antes.jpg',
      after: 'antes-depois-1-depois.jpg',
      tag: 'Emagrecimento'
    },
    {
      id: 2,
      title: 'Tratamento Lipedema Estágio II',
      description: 'Redução significativa de edema e melhora do contorno dos membros inferiores.',
      before: 'antes-depois-2-antes.jpg',
      after: 'antes-depois-2-depois.jpg',
      tag: 'Lipedema'
    },
    {
      id: 3,
      title: 'Otimização Metabólica & Performance',
      description: 'Recomposição corporal completa focada em longevidade e vigor físico.',
      before: 'antes-depois-3-antes.jpg',
      after: 'antes-depois-3-depois.jpg',
      tag: 'Performance'
    }
  ];

  return (
    <section id="resultados" className="py-32 bg-obsidian">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center mb-24 space-y-8">
          <span className="text-matteGold uppercase tracking-[0.5em] text-[11px] font-black">Clinical Outcomes</span>
          <h2 className="text-5xl md:text-7xl font-serif text-silkWhite italic">Transformações Reais</h2>
          <div className="h-px w-32 bg-matteGold/40 mx-auto"></div>
          <p className="text-support text-xl font-normal max-w-2xl mx-auto leading-relaxed">
            Resultados obtidos através de ciência rigorosa e acompanhamento personalizado. 
            <span className="block text-sm mt-4 text-muted-luxury italic">*As imagens abaixo são ilustrativas para preservação da privacidade dos pacientes até a substituição por casos autorizados.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {cases.map((item) => (
            <div key={item.id} className="space-y-8 group">
              <div className="flex gap-4 aspect-[4/5]">
                <div className="relative w-1/2 overflow-hidden card-luxury">
                  <img 
                    src={item.before} 
                    alt="Antes" 
                    className="w-full h-full object-cover grayscale"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-obsidian/80 backdrop-blur-md px-3 py-1 text-[8px] uppercase tracking-widest text-silkWhite border border-white/10">
                    Antes
                  </div>
                </div>
                <div className="relative w-1/2 overflow-hidden card-luxury border-matteGold/30">
                  <img 
                    src={item.after} 
                    alt="Depois" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-matteGold px-3 py-1 text-[8px] uppercase tracking-widest text-obsidian font-black">
                    Depois
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-matteGold text-[10px] uppercase tracking-[0.3em] font-black">{item.tag}</span>
                  <div className="h-px flex-grow mx-4 bg-matteGold/20"></div>
                </div>
                <h3 className="text-2xl font-serif text-silkWhite">{item.title}</h3>
                <p className="text-muted-luxury text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 p-12 bg-night border border-white/5 text-center max-w-3xl mx-auto">
          <p className="text-silkWhite/60 text-sm italic leading-relaxed">
            "A ética médica e a privacidade são nossos pilares. Todas as transformações reais compartilhadas em consulta seguem rigorosos protocolos de autorização e anonimato quando solicitado."
          </p>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
