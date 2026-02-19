
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-16">
        <div className="w-full md:w-1/2">
          <div className="relative">
             <div className="absolute top-6 left-6 -z-10 w-full h-full bg-offWhite border border-anthracite/5"></div>
             <img 
               src="dr-kleber-lifestyle.png" 
               alt="Dr. Kleber Nascimento" 
               className="w-full h-auto object-cover shadow-xl"
               onError={(e) => {
                 (e.target as HTMLImageElement).src = 'https://picsum.photos/id/1/800/800?grayscale';
               }}
             />
          </div>
        </div>

        <div className="w-full md:w-1/2 space-y-6">
          <span className="text-matteGold uppercase tracking-[0.3em] text-xs font-bold block">Sobre a Autoridade</span>
          <h2 className="text-4xl md:text-5xl font-serif text-anthracite leading-tight">Dr. Jefferson Kleber P. do Nascimento</h2>
          <div className="h-1 w-12 bg-matteGold"></div>
          
          <div className="space-y-4 text-anthracite/80 text-lg font-light leading-relaxed">
            <p>
              <strong>CRM-CE 15853</strong> | Especialista em Clínica Médica (RQE 15104) e Medicina Intensiva (RQE 18731), com Pós-graduação em Nutrologia pela <strong>ABRAN</strong>.
            </p>
            <p>
              Atua na interseção entre a medicina de alta complexidade e a nutrologia clínica, dedicando-se à reestruturação metabólica e à terapia nutricional avançada. Chefe da Equipe Multidisciplinar de Terapia Nutricional do Hospital Geral de Brejo Santo.
            </p>
            <p>
              Sua prática é guiada pela integração entre ciência rigorosa e estratégia personalizada, unindo tecnologia e análise de biomarcadores para resultados sustentáveis e segurança clínica.
            </p>
            <p className="italic text-emeraldDeep font-medium">
              "Minha missão é unir a ciência das evidências à escuta qualificada para transformar a saúde metabólica e a longevidade de cada paciente."
            </p>
          </div>

          <div className="flex items-center gap-6 pt-6">
            <div className="text-center">
              <span className="block text-2xl font-serif text-anthracite">SBCM</span>
              <span className="text-[10px] uppercase tracking-widest text-anthracite/50">Clínica Médica</span>
            </div>
            <div className="w-px h-10 bg-anthracite/10"></div>
            <div className="text-center">
              <span className="block text-2xl font-serif text-anthracite">ABRAN</span>
              <span className="text-[10px] uppercase tracking-widest text-anthracite/50">Nutrologia</span>
            </div>
            <div className="w-px h-10 bg-anthracite/10"></div>
            <div className="text-center">
              <span className="block text-2xl font-serif text-anthracite">AMIB</span>
              <span className="text-[10px] uppercase tracking-widest text-anthracite/50">Med. Intensiva</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
