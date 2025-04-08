
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import QuizContainer from '@/components/QuizContainer';
import { useIsMobile } from '@/hooks/use-mobile';
import { Menu, X } from 'lucide-react';

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="border-b py-4 px-6 sticky top-0 z-50 bg-background/95 backdrop-blur-sm">
        <div className="container flex justify-between items-center">
          <div className="font-semibold text-xl tracking-tight">San Diego Dream Home Matchmaker</div>
          
          {isMobile ? (
            <div className="md:hidden">
              <button 
                onClick={toggleMobileMenu}
                className="text-muted-foreground p-2 rounded-md hover:bg-muted/50"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
              
              {mobileMenuOpen && (
                <nav className="absolute top-16 right-0 left-0 bg-background z-50 border-b shadow-lg">
                  <ul className="flex flex-col p-4">
                    <li className="py-2"><Link to="/" onClick={() => setMobileMenuOpen(false)} className="text-foreground font-medium transition-colors">Home</Link></li>
                    <li className="py-2"><Link to="/about" onClick={() => setMobileMenuOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors">About</Link></li>
                    <li className="py-2"><Link to="/areas" onClick={() => setMobileMenuOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors">Areas</Link></li>
                    <li className="py-2"><Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link></li>
                  </ul>
                </nav>
              )}
            </div>
          ) : (
            <nav className="hidden md:block">
              <ul className="flex space-x-6">
                <li><Link to="/" className="text-foreground font-medium transition-colors">Home</Link></li>
                <li><Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">About</Link></li>
                <li><Link to="/areas" className="text-muted-foreground hover:text-foreground transition-colors">Areas</Link></li>
                <li><Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link></li>
              </ul>
            </nav>
          )}
        </div>
      </header>
      
      <main className="flex-1 container py-8 px-4 md:py-16 md:px-6">
        <div className="max-w-4xl mx-auto text-center mb-12 space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4 leading-tight">
            Best Neighborhoods in San Diego – Find Your Perfect Community
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Explore vibrant neighborhoods and get personalized recommendations tailored to your lifestyle preferences.
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We've helped hundreds of San Diego homebuyers find their ideal neighborhoods. Take our quiz to discover which areas match your unique needs.
          </p>
        </div>
        <QuizContainer />
      </main>
      
      <footer className="border-t py-8 px-6 bg-muted/30">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              <p>© 2025 Jared Harman Real Estate. All rights reserved. DRE #02193879</p>
              <p className="mt-1">Team MatchPoint brokered by eXp Realty</p>
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About Us</Link>
              <Link to="/areas" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Areas</Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
