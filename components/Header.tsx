
import React from 'react';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  return (
    <header 
      id="navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 md:px-12 py-6 ${
        isScrolled ? 'bg-obsidian/98 backdrop-blur-md border-b border-matteGold/20 py-4' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="/" className="flex items-center">
          <img 
            src="dr-kleber-logo.png" 
            alt="Dr. Kleber Nascimento" 
            className="h-10 md:h-12 object-contain brightness-0 invert"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://via.placeholder.com/200x60/080808/C5A059?text=DR+KLEBER';
            }}
          />
        </a>
        
        <nav className="hidden lg:flex items-center space-x-12 text-[10px] uppercase tracking-[0.4em] font-black text-silkWhite/70 hover:text-silkWhite transition-colors">
          <a href="#metodo" className="hover:text-matteGold transition-colors">O Método</a>
          <a href="#protocolos" className="hover:text-matteGold transition-colors">Protocolos</a>
          <a href="#resultados" className="hover:text-matteGold transition-colors">Resultados</a>
          <a href="#galeria" className="hover:text-matteGold transition-colors">Galeria</a>
          <a href="#avaliacoes" className="hover:text-matteGold transition-colors">Avaliações</a>
          <a href="#sobre" className="hover:text-matteGold transition-colors">Autoridade</a>
          <a href="#contato" className="hover:text-matteGold transition-colors">Localização</a>
        </nav>

        <a 
          href="https://wa.me/5588981827825" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-matteGold text-obsidian px-8 py-4 text-[11px] uppercase tracking-widest font-black hover:bg-white transition-all duration-300 shadow-xl"
        >
          Consulta Premium
        </a>
      </div>
    </header>
  );
};

export default Header;
