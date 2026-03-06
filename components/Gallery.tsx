
import React from 'react';

const Gallery: React.FC = () => {
  const images = [
    {
      src: 'galeria-1.jpg',
      alt: 'Consultório Dr. Kleber Nascimento',
      title: 'Ambiente Exclusivo'
    },
    {
      src: 'galeria-2.jpg',
      alt: 'Tecnologia Médica',
      title: 'Biometria de Precisão'
    },
    {
      src: 'galeria-3.jpg',
      alt: 'Atendimento Personalizado',
      title: 'Cuidado Individualizado'
    },
    {
      src: 'galeria-4.jpg',
      alt: 'Infraestrutura Moderna',
      title: 'Conforto e Segurança'
    },
    {
      src: 'galeria-5.jpg',
      alt: 'Equipe Especializada',
      title: 'Excelência em Saúde'
    },
    {
      src: 'galeria-6.jpg',
      alt: 'Longevidade e Performance',
      title: 'Foco em Resultados'
    }
  ];

  return (
    <section id="galeria" className="py-24 bg-obsidian">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="text-matteGold uppercase tracking-[0.4em] text-xs font-bold block mb-4">Visual Experience</span>
          <h2 className="text-4xl md:text-6xl font-serif text-silkWhite italic">The Nurture Space</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, idx) => (
            <div key={idx} className="group relative overflow-hidden aspect-[4/3] bg-night border border-white/5">
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  const fallbacks = [
                    'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800',
                    'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800',
                    'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800',
                    'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800',
                    'https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=800',
                    'https://images.unsplash.com/photo-1504813184591-01592fd03cf7?auto=format&fit=crop&q=80&w=800'
                  ];
                  target.src = fallbacks[idx];
                }}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <p className="text-matteGold text-[10px] uppercase tracking-[0.3em] font-black mb-2">{image.title}</p>
                <p className="text-silkWhite text-sm font-serif italic">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
