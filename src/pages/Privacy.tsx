
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Privacy = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="border-b py-4 px-6">
        <div className="container flex justify-between items-center">
          <div className="font-semibold text-xl tracking-tight">San Diego Neighborhood Matchmaker</div>
          
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
                    <li className="py-2"><Link to="/" onClick={() => setMobileMenuOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors">Home</Link></li>
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
                <li><Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</Link></li>
                <li><Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">About</Link></li>
                <li><Link to="/areas" className="text-muted-foreground hover:text-foreground transition-colors">Areas</Link></li>
                <li><Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link></li>
              </ul>
            </nav>
          )}
        </div>
      </header>

      <main className="flex-1 container py-8 px-4 md:py-12 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="prose prose-gray max-w-none">
            <p className="text-muted-foreground mb-6">
              We value your privacy. Any personal information you provide on this site will be used solely to communicate with you regarding San Diego real estate services and opportunities. We do not sell or share your information with third parties.
            </p>
            
            <p className="text-muted-foreground mb-6">
              By submitting your information, you consent to receive communication by phone, text, or email. You may opt out at any time by replying STOP or clicking "unsubscribe" in our emails.
            </p>
            
            <p className="text-muted-foreground">
              For any questions, contact Jared Harman at{" "}
              <a href="mailto:jared@jaredharman.com" className="text-primary hover:underline">
                jared@jaredharman.com
              </a>
            </p>
          </div>
        </div>
      </main>

      <footer className="border-t py-6 px-6 bg-muted/30">
        <div className="container text-center text-sm text-muted-foreground">
          <p>© 2025 Jared Harman Real Estate. All rights reserved. DRE #02193879</p>
        </div>
      </footer>
    </div>
  );
};

export default Privacy;
