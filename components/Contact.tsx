
import React from 'react';

const Contact: React.FC = () => {
  const phone = "5588981827825";
  const whatsappUrl = `https://wa.me/${phone}`;

  return (
    <section id="contato" className="py-24 bg-offWhite">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-16">
          
          <div className="w-full md:w-1/2 space-y-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif text-anthracite mb-8">Locais de Atendimento</h2>
              <p className="text-anthracite/70 text-lg font-light mb-12">
                Atendimento especializado em saúde metabólica e nutrologia clínica em duas unidades estratégicas.
              </p>
            </div>

            <div className="space-y-10">
              <div className="flex items-start gap-6">
                <div className="bg-emeraldDeep/5 p-4 text-emeraldDeep">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-serif text-xl text-anthracite mb-2">Juazeiro do Norte — CE</h4>
                  <p className="text-anthracite/60 font-light italic">Nutrologia e Saúde Metabólica</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-emeraldDeep/5 p-4 text-emeraldDeep">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-serif text-xl text-anthracite mb-2">Salgueiro — PE</h4>
                  <p className="text-anthracite/60 font-light italic">Acompanhamento Nutrológico e Longevidade</p>
                </div>
              </div>

              <div className="pt-6">
                <a 
                  href={whatsappUrl} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-4 bg-emeraldDeep text-white px-10 py-5 text-sm uppercase tracking-widest font-bold hover:shadow-2xl transition-all duration-300"
                >
                  Agendar via WhatsApp
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 min-h-[400px] grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700 bg-white p-4 shadow-xl border border-anthracite/5">
             <div className="w-full h-full bg-offWhite flex items-center justify-center border border-dashed border-anthracite/10 relative overflow-hidden group">
               <img src="https://picsum.photos/id/111/1200/800?grayscale" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt="Consultório" />
               <div className="relative z-10 bg-white/90 backdrop-blur-md p-6 text-center shadow-lg">
                 <p className="font-serif text-xl mb-2 text-anthracite">Medicina Baseada em Evidências</p>
                 <span className="text-[10px] uppercase tracking-widest font-bold text-matteGold">Atendimento de Excelência</span>
               </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
