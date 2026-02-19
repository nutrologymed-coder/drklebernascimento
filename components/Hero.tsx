
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">
        
        {/* Lado A: Foto do Dr. Kleber */}
        <div className="w-full md:w-1/2 flex justify-center order-2 md:order-1 fade-in">
          <div className="relative group">
            <div className="absolute -inset-4 border border-matteGold/20 translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
            <img 
              src="dr-kleber-hero.png" 
              alt="Dr. Kleber Nascimento" 
              className="w-full max-w-[450px] md:max-w-full h-auto object-cover shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://picsum.photos/id/64/800/1000';
              }}
            />
          </div>
        </div>

        {/* Lado B: Copywriting */}
        <div className="w-full md:w-1/2 order-1 md:order-2 space-y-8 fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="space-y-4">
            <span className="text-matteGold uppercase tracking-[0.3em] text-xs font-bold block">Estratégia & Longevidade</span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-anthracite leading-tight">
              Transforme seu <span className="italic">Metabolismo.</span><br />
              Reconquiste sua <span className="text-emeraldDeep">Performance.</span>
            </h1>
          </div>
          
          <p className="text-anthracite/80 text-lg md:text-xl font-light leading-relaxed max-w-xl">
            A ciência da Nutrologia de Precisão a serviço da sua melhor versão. 
            Protocolos personalizados para quem não aceita menos que a excelência em saúde e estética.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a 
              href="#contato" 
              className="bg-matteGold text-white px-10 py-5 text-sm uppercase tracking-widest font-bold hover:bg-emeraldDeep transition-all duration-500 text-center shadow-xl"
            >
              Iniciar minha Transformação
            </a>
            <a 
              href="#metodo" 
              className="border border-anthracite/20 text-anthracite px-10 py-5 text-sm uppercase tracking-widest font-bold hover:bg-anthracite hover:text-white transition-all duration-500 text-center"
            >
              Conhecer o Método
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
