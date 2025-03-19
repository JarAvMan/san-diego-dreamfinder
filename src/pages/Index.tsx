
import React from 'react';
import { Link } from 'react-router-dom';
import QuizContainer from '@/components/QuizContainer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="border-b py-4 px-6">
        <div className="container flex justify-between items-center">
          <div className="font-semibold text-xl tracking-tight">Jared Harman Real Estate</div>
          <nav>
            <ul className="flex space-x-6">
              <li><Link to="/" className="text-foreground font-medium transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">About</Link></li>
              <li><Link to="/areas" className="text-muted-foreground hover:text-foreground transition-colors">Areas</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>
      
      <main className="flex-1 container py-12">
        <QuizContainer />
      </main>
      
      <footer className="border-t py-6 px-6 bg-muted/30">
        <div className="container text-center text-sm text-muted-foreground">
          <p>© 2023 Jared Harman Real Estate. All rights reserved. DRE #02193879</p>
          <p className="mt-1">Team MatchPoint brokered by eXp Realty</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
