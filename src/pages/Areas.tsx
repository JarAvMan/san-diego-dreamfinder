
import React from 'react';
import { Link } from 'react-router-dom';
import { sandiegoNeighborhoods } from '@/data/neighborhoods';

const Areas = () => {
  // Group neighborhoods by region
  const regions = {
    coastal: ['La Jolla', 'Del Mar', 'Solana Beach', 'Oceanside', 'Carlsbad', 'Cardiff', 'Imperial Beach', 'Coronado', 'Mission Beach', 'Pacific Beach', 'Ocean Beach', 'Point Loma'],
    central: ['North Park', 'South Park', 'Hillcrest', 'Downtown San Diego', 'Banker\'s Hill', 'Mission Hills', 'Old Town', 'Normal Heights', 'Kensington', 'Talmadge', 'University Heights'],
    north: ['Carmel Valley', 'Scripps Ranch', '4s Ranch', 'Rancho Bernardo', 'Rancho Penasquitos', 'Poway', 'Escondido', 'San Marcos', 'Vista', 'Fallbrook', 'Rancho Santa Fe', 'Fairbanks Ranch'],
    east: ['La Mesa', 'El Cajon', 'Santee', 'Alpine', 'Ramona', 'Julian', 'Rancho San Diego', 'Spring Valley', 'Lemon Grove', 'Fletcher Hills', 'San Carlos', 'Del Cerro', 'Allied Gardens', 'El Cerrito'],
    south: ['Chula Vista', 'National City', 'Otay Mesa', 'Barrio Logan', 'Paradise Hills']
  };

  // Filter neighborhood data by region
  const getNeighborhoodsByRegion = (regionNames: string[]) => {
    return sandiegoNeighborhoods.filter(hood => 
      regionNames.some(region => hood.name.includes(region))
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="border-b py-4 px-6">
        <div className="container flex justify-between items-center">
          <div className="font-semibold text-xl tracking-tight">Jared Harman Real Estate</div>
          <nav>
            <ul className="flex space-x-6">
              <li><Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">About</Link></li>
              <li><Link to="/areas" className="text-foreground font-medium transition-colors">Areas</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>
      
      <main className="flex-1 container py-12">
        <h1 className="text-4xl font-bold mb-2">San Diego Neighborhoods</h1>
        <p className="text-lg text-muted-foreground mb-12">Explore the diverse communities that make San Diego special.</p>
        
        <div className="space-y-16">
          {/* Coastal Region */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <span className="mr-2">🌊</span> Coastal Communities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getNeighborhoodsByRegion(regions.coastal).slice(0, 6).map(hood => (
                <div key={hood.id} className="border rounded-lg overflow-hidden shadow-sm bg-card">
                  <div className="aspect-[16/9] overflow-hidden">
                    <img 
                      src={hood.image} 
                      alt={hood.name} 
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-lg mb-1">{hood.name}</h3>
                    <div className="flex gap-2 flex-wrap mb-2">
                      {hood.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2">{hood.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
          
          {/* Central Region */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <span className="mr-2">🏙️</span> Central San Diego
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getNeighborhoodsByRegion(regions.central).slice(0, 6).map(hood => (
                <div key={hood.id} className="border rounded-lg overflow-hidden shadow-sm bg-card">
                  <div className="aspect-[16/9] overflow-hidden">
                    <img 
                      src={hood.image} 
                      alt={hood.name} 
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-lg mb-1">{hood.name}</h3>
                    <div className="flex gap-2 flex-wrap mb-2">
                      {hood.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2">{hood.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
          
          {/* North Region */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <span className="mr-2">🏞️</span> North County
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getNeighborhoodsByRegion(regions.north).slice(0, 6).map(hood => (
                <div key={hood.id} className="border rounded-lg overflow-hidden shadow-sm bg-card">
                  <div className="aspect-[16/9] overflow-hidden">
                    <img 
                      src={hood.image} 
                      alt={hood.name} 
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-lg mb-1">{hood.name}</h3>
                    <div className="flex gap-2 flex-wrap mb-2">
                      {hood.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2">{hood.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
          
          {/* East Region */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <span className="mr-2">🌄</span> East County
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getNeighborhoodsByRegion(regions.east).slice(0, 6).map(hood => (
                <div key={hood.id} className="border rounded-lg overflow-hidden shadow-sm bg-card">
                  <div className="aspect-[16/9] overflow-hidden">
                    <img 
                      src={hood.image} 
                      alt={hood.name} 
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-lg mb-1">{hood.name}</h3>
                    <div className="flex gap-2 flex-wrap mb-2">
                      {hood.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2">{hood.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
          
          {/* South Region */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <span className="mr-2">🌴</span> South Bay
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getNeighborhoodsByRegion(regions.south).slice(0, 6).map(hood => (
                <div key={hood.id} className="border rounded-lg overflow-hidden shadow-sm bg-card">
                  <div className="aspect-[16/9] overflow-hidden">
                    <img 
                      src={hood.image} 
                      alt={hood.name} 
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-lg mb-1">{hood.name}</h3>
                    <div className="flex gap-2 flex-wrap mb-2">
                      {hood.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2">{hood.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
        
        <div className="text-center mt-12">
          <Link to="/" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
            Take the Neighborhood Quiz
          </Link>
        </div>
      </main>
      
      <footer className="border-t py-6 px-6 bg-muted/30">
        <div className="container text-center text-sm text-muted-foreground">
          <p>© 2023 Jared Harman Real Estate. All rights reserved. DRE #02193879</p>
        </div>
      </footer>
    </div>
  );
};

export default Areas;
