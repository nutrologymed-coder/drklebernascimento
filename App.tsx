
import React, { useState, useEffect } from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import SocialProof from './components/SocialProof.tsx';
import Method from './components/Method.tsx';
import FeaturedServices from './components/FeaturedServices.tsx';
import Gallery from './components/Gallery.tsx';
import Reviews from './components/Reviews.tsx';
import BeforeAfter from './components/BeforeAfter.tsx';
import FAQ from './components/FAQ.tsx';
import About from './components/About.tsx';
import Contact from './components/Contact.tsx';
import WhatsAppButton from './components/WhatsAppButton.tsx';
import Footer from './components/Footer.tsx';
import CustomCursor from './components/CustomCursor.tsx';
import Preloader from './components/Preloader.tsx';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-body bg-background selection:bg-primary/30 relative">
      <Preloader />
      <CustomCursor />
      <div className="grain-overlay"></div>
      
      <Header isScrolled={isScrolled} />
      <main>
        <Hero />
        <SocialProof />
        <Method />
        <FeaturedServices />
        <BeforeAfter />
        <FAQ />
        <Reviews />
        <About />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;
