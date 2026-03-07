
import React from 'react';

const Reviews: React.FC = () => {
  const reviews = [
    {
      author_name: 'Ana Paula Cavalcante',
      rating: 5,
      relative_time_description: 'Há 2 meses',
      text: 'Excelente profissional! O Dr. Kleber é muito atencioso e explica tudo com muita clareza. O protocolo de emagrecimento realmente funciona e me sinto com muito mais energia.',
      profile_photo_url: 'paciente-1.jpg'
    },
    {
      author_name: 'Marcos Vinícius',
      rating: 5,
      relative_time_description: 'Há 1 mês',
      text: 'Acompanhamento de alto nível. A análise de bioimpedância e os exames solicitados foram fundamentais para ajustar minha performance. Recomendo fortemente para quem busca resultados reais.',
      profile_photo_url: 'paciente-2.jpg'
    },
    {
      author_name: 'Juliana Mendes',
      rating: 5,
      relative_time_description: 'Há 3 semanas',
      text: 'Finalmente encontrei um médico que entende de Lipedema na região. O Dr. Kleber me passou muita segurança e o tratamento anti-inflamatório tem mudado minha vida.',
      profile_photo_url: 'paciente-3.jpg'
    },
    {
      author_name: 'Ricardo Almeida',
      rating: 5,
      relative_time_description: 'Há 4 meses',
      text: 'O atendimento é impecável desde a recepção até a consulta. O Dr. Kleber é um cientista da saúde. Minha disposição mudou completamente após os ajustes metabólicos.',
      profile_photo_url: 'paciente-4.jpg'
    }
  ];

  return (
    <section id="avaliacoes" className="py-24 bg-night">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl mb-8 md:mb-0">
            <span className="text-matteGold uppercase tracking-[0.4em] text-xs font-bold block mb-4">Social Proof</span>
            <h2 className="text-4xl md:text-6xl font-serif text-silkWhite italic">Experiências Reais</h2>
          </div>
          <div className="flex items-center gap-4 bg-obsidian border border-white/10 p-6 rounded-sm">
            <div className="text-center">
              <p className="text-3xl font-serif text-silkWhite">4.9</p>
              <div className="flex text-matteGold text-xs">
                {'★★★★★'.split('').map((s, i) => <span key={i}>{s}</span>)}
              </div>
            </div>
            <div className="h-10 w-px bg-white/10 mx-2"></div>
            <div>
              <p className="text-silkWhite text-sm font-bold">Google Reviews</p>
              <p className="text-silkWhite/50 text-[10px] uppercase tracking-widest">Baseado em +150 avaliações</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-obsidian p-10 border border-white/5 hover:border-matteGold/30 transition-all duration-500 group flex flex-col justify-between relative overflow-hidden">
              <div className="absolute inset-0 bg-white/[0.01] backdrop-blur-[2px] -z-10"></div>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <img 
                    src={review.profile_photo_url} 
                    alt={review.author_name} 
                    className="w-10 h-10 rounded-full border border-matteGold/20"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://picsum.photos/seed/p${idx + 1}/100/100`;
                    }}
                    referrerPolicy="no-referrer"
                  />
                  <div className="flex text-matteGold text-[10px]">
                    {'★'.repeat(review.rating).split('').map((s, i) => <span key={i}>{s}</span>)}
                  </div>
                </div>
                <p className="text-silkWhite/70 text-sm italic leading-relaxed mb-8 line-clamp-6">
                  "{review.text}"
                </p>
              </div>
              <div>
                <p className="text-silkWhite font-serif text-lg mb-1">{review.author_name}</p>
                <p className="text-silkWhite/30 text-[8px] uppercase tracking-widest">{review.relative_time_description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="https://www.google.com/search?q=Dr+Kleber+Nurture+Juazeiro+do+Norte#lrd=0x7a02796440000001:0x7f83000000000000,1" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-silkWhite/60 hover:text-matteGold text-xs uppercase tracking-[0.3em] font-black transition-colors border-b border-white/10 hover:border-matteGold pb-2"
          >
            Ver todas as avaliações no Google
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
