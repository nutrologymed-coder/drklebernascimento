
import React from 'react';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 md:px-12 py-4 md:py-6 ${
        isScrolled ? 'bg-offWhite/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img 
            src="dr-kleber-logo.png" 
            alt="Dr. Kleber Nascimento" 
            className="h-10 md:h-14 object-contain"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://picsum.photos/seed/doctor-logo/200/80?grayscale';
            }}
          />
        </div>
        
        <nav className="hidden md:flex items-center space-x-8 text-xs uppercase tracking-widest font-medium text-anthracite">
          <a href="#metodo" className="hover:text-matteGold transition-colors">O Método</a>
          <a href="#publico" className="hover:text-matteGold transition-colors">Tratamentos</a>
          <a href="#sobre" className="hover:text-matteGold transition-colors">Dr. Kleber</a>
          <a href="#contato" className="hover:text-matteGold transition-colors">Contato</a>
        </nav>

        <div>
          <a 
            href="#contato" 
            className="bg-emeraldDeep text-offWhite px-6 py-3 text-xs md:text-sm uppercase tracking-widest font-semibold hover:bg-emeraldDeep/90 transition-all duration-300 shadow-lg"
          >
            Agendar Consulta
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
