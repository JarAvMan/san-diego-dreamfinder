import React from 'react';
import { Link } from 'react-router-dom';
const About = () => {
  return <div className="min-h-screen flex flex-col bg-background">
      <header className="border-b py-4 px-6">
        <div className="container flex justify-between items-center">
          <div className="font-semibold text-xl tracking-tight">Jared Harman Real Estate</div>
          <nav>
            <ul className="flex space-x-6">
              <li><Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-foreground font-medium transition-colors">About</Link></li>
              <li><Link to="/areas" className="text-muted-foreground hover:text-foreground transition-colors">Areas</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>
      
      <main className="flex-1 container py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">About Jared Harman Real Estate</h1>
          
          <div className="flex flex-col md:flex-row gap-8 mb-12">
            <div className="md:w-1/3">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img alt="Jared Harman" className="w-full h-auto object-cover" src="/lovable-uploads/389ee96f-29cd-453c-a7dc-e2f2d7b080f1.jpg" />
              </div>
            </div>
            
            <div className="md:w-2/3 space-y-4">
              <h2 className="text-2xl font-semibold">Meet Your San Diego Real Estate Expert</h2>
              <p className="text-muted-foreground">
                With a deep knowledge of San Diego's diverse neighborhoods and a passion for helping clients find their perfect home, I bring a personalized approach to every real estate transaction.
              </p>
              <p className="text-muted-foreground">
                As a real estate agent with Team MatchPoint brokered by eXp Realty, I leverage cutting-edge technology and market insights to ensure my clients make informed decisions throughout the buying or selling process.
              </p>
              <p className="text-muted-foreground">
                My commitment is to provide exceptional service and guidance, making your real estate journey as smooth and successful as possible.
              </p>
              
              <div className="pt-4">
                <h3 className="text-lg font-medium mb-2">Credentials</h3>
                <p className="text-sm text-muted-foreground">DRE #02193879</p>
                <p className="text-sm text-muted-foreground">Real Estate Agent with Team MatchPoint brokered by eXp Realty</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-8 mb-12">
            <h2 className="text-2xl font-semibold">My Approach</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 border rounded-lg bg-card shadow-sm">
                <h3 className="text-lg font-medium mb-2">Personalized Service</h3>
                <p className="text-sm text-muted-foreground">I take the time to understand your unique needs and preferences to find the perfect property match.</p>
              </div>
              <div className="p-6 border rounded-lg bg-card shadow-sm">
                <h3 className="text-lg font-medium mb-2">Local Expertise</h3>
                <p className="text-sm text-muted-foreground">With extensive knowledge of San Diego neighborhoods, I help you discover areas that align with your lifestyle.</p>
              </div>
              <div className="p-6 border rounded-lg bg-card shadow-sm">
                <h3 className="text-lg font-medium mb-2">Market Insights</h3>
                <p className="text-sm text-muted-foreground">I provide data-driven market analysis to help you make informed real estate decisions.</p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Link to="/contact" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
              Get in Touch
            </Link>
          </div>
        </div>
      </main>
      
      <footer className="border-t py-6 px-6 bg-muted/30">
        <div className="container text-center text-sm text-muted-foreground">
          <p>© 2023 Jared Harman Real Estate. All rights reserved. DRE #02193879</p>
        </div>
      </footer>
    </div>;
};
export default About;