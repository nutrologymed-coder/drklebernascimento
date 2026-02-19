
import React from 'react';

const SocialProof: React.FC = () => {
  const brands = [
    { name: 'SBCM', logo: 'https://via.placeholder.com/150x50?text=SBCM' },
    { name: 'AMIB', logo: 'https://via.placeholder.com/150x50?text=AMIB' },
    { name: 'ABRAN', logo: 'https://via.placeholder.com/150x50?text=ABRAN' },
    { name: 'Hospital Geral Brejo Santo', logo: 'https://via.placeholder.com/150x50?text=HGBS' },
  ];

  return (
    <section className="py-20 border-y border-anthracite/5 bg-white/50">
      <div className="container mx-auto px-6">
        <p className="text-center text-xs uppercase tracking-[0.4em] text-anthracite/50 mb-12">Chancelas e Atuação de Referência</p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-20 opacity-40 hover:opacity-100 transition-opacity duration-500">
          {brands.map((brand, idx) => (
            <div key={idx} className="flex flex-col items-center">
               <img 
                src={brand.logo} 
                alt={brand.name} 
                className="h-8 md:h-12 grayscale filter mb-2"
              />
              <span className="text-[8px] tracking-widest text-anthracite/30 font-bold">{brand.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
