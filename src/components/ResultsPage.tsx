
import React from 'react';
import { Neighborhood } from '@/types';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, MapPin, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ResultsPageProps {
  neighborhoods: Neighborhood[];
  className?: string;
}

const ResultsPage: React.FC<ResultsPageProps> = ({ neighborhoods, className }) => {
  return (
    <div className={cn("space-y-8 animate-fade-in", className)}>
      <div className="text-center space-y-4 mb-8">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
          <Check size={14} className="mr-1" /> Results Ready
        </div>
        <h1 className="text-3xl font-bold sm:text-4xl tracking-tight">
          Your Perfect San Diego Neighborhoods
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Based on your preferences, we've identified the top 3 San Diego neighborhoods that match your lifestyle and homebuying needs. Explore what makes each area special!
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {neighborhoods.map((neighborhood, index) => (
          <Card key={neighborhood.id} className="overflow-hidden transition-all duration-300 hover:shadow-md border">
            <div className="aspect-video w-full overflow-hidden">
              <img 
                src={neighborhood.image} 
                alt={neighborhood.name}
                className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
              />
            </div>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <Badge variant="outline" className="mb-2">
                  Match #{index + 1}
                </Badge>
                <div className="text-sm text-muted-foreground">
                  {neighborhood.budget.min.toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD',
                    maximumFractionDigits: 0,
                  })} - {neighborhood.budget.max.toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD',
                    maximumFractionDigits: 0,
                  })}
                </div>
              </div>
              <CardTitle className="flex items-center">
                <MapPin size={18} className="inline mr-2 text-primary" />
                {neighborhood.name}
              </CardTitle>
              <CardDescription>{neighborhood.description}</CardDescription>
            </CardHeader>
            <CardContent className="pb-4">
              <h4 className="font-medium mb-2 text-sm">Neighborhood Highlights:</h4>
              <ul className="space-y-1">
                {neighborhood.keyFeatures.map((feature, i) => (
                  <li key={i} className="text-sm flex items-start">
                    <Check size={14} className="mr-2 text-primary mt-1 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full group">
                Browse Homes
                <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="text-center pt-8">
        <Button className="px-8">
          View All San Diego Listings
        </Button>
      </div>
    </div>
  );
};

export default ResultsPage;
