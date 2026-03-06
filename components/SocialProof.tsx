
import React from 'react';
import { motion } from 'motion/react';

const SocialProof: React.FC = () => {
  const brands = [
    { name: 'SBCM', logo: 'logo-sbcm.png' },
    { name: 'AMIB', logo: 'logo-amib.png' },
    { name: 'ABRAN', logo: 'logo-abran.png' },
    { name: 'Duke University', logo: 'logo-duke.png' },
  ];

  return (
    <section className="py-24 bg-obsidian border-y border-white/5">
      <div className="container mx-auto px-6">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-[10px] uppercase tracking-[0.5em] text-muted-luxury mb-16 font-black"
        >
          Chancelas e Atuação de Referência
        </motion.p>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
          {brands.map((brand, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 0.4, y: 0 }}
              whileHover={{ opacity: 1, scale: 1.05 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col items-center group cursor-default"
            >
               <img 
                src={brand.logo} 
                alt={brand.name} 
                className="h-8 md:h-10 grayscale invert brightness-200 mb-4 transition-all duration-500 group-hover:grayscale-0 group-hover:brightness-100"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://via.placeholder.com/150x50/080808/C5A059?text=${brand.name}`;
                }}
                referrerPolicy="no-referrer"
              />
              <span className="text-[9px] tracking-[0.3em] text-matteGold/50 font-black uppercase group-hover:text-matteGold transition-colors">
                {brand.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
