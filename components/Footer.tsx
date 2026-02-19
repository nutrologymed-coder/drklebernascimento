
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-anthracite py-16 text-offWhite/40">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 border-b border-white/5 pb-12 mb-12">
          <img 
            src="dr-kleber-logo.png" 
            alt="Dr. Kleber Nascimento" 
            className="h-10 brightness-0 invert opacity-50"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://via.placeholder.com/200x50?text=LOGO+WHITE';
            }}
          />
          
          <div className="flex gap-8 text-[10px] uppercase tracking-widest font-bold">
            <a href="#" className="hover:text-matteGold transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-matteGold transition-colors">Privacidade</a>
            <a href="#" className="hover:text-matteGold transition-colors">Compliance Médico</a>
          </div>

          <div className="flex gap-6">
             <a href="https://instagram.com/drklebernurture" target="_blank" rel="noreferrer" className="hover:text-matteGold transition-colors">
               <span className="text-xs uppercase tracking-widest font-bold">Instagram</span>
             </a>
             <a href="#" className="hover:text-matteGold transition-colors">
               <span className="text-xs uppercase tracking-widest font-bold">LinkedIn</span>
             </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.2em]">
          <p>© 2024 Dr. Jefferson Kleber Nascimento. CRM-CE 15853.</p>
          <p>RQE 15104 | RQE 18731</p>
          <p>Desenvolvido por <span className="text-offWhite/60">Luxury Health Marketing</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
