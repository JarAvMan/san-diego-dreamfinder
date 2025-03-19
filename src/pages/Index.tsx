
import React from 'react';
import QuizContainer from '@/components/QuizContainer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="border-b py-4 px-6">
        <div className="container flex justify-between items-center">
          <div className="font-semibold text-xl tracking-tight">San Diego Dream Finder</div>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">About</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Areas</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
      
      <main className="flex-1 container py-12">
        <QuizContainer />
      </main>
      
      <footer className="border-t py-6 px-6 bg-muted/30">
        <div className="container text-center text-sm text-muted-foreground">
          <p>© 2023 San Diego Dream Finder. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
