import React, { useEffect, useState, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Neighborhood } from '@/types';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { AlertCircle, Loader2, Check, MapPin, Home, Building, Info, ArrowRight } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import webhookService from '@/services/webhookService';

interface ResultsPageProps {
  neighborhoods?: Neighborhood[];
}

const ResultsPage: React.FC<ResultsPageProps> = ({
  neighborhoods: propNeighborhoods = []
}) => {
  const { resultId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [localNeighborhoods, setLocalNeighborhoods] = useState<Neighborhood[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [zapierSent, setZapierSent] = useState(false);

  const loadResults = useCallback(async () => {
    try {
      if (resultId) {
        const storedResults = localStorage.getItem(`quiz_results_${resultId}`);
        if (storedResults) {
          const { neighborhoods: storedNeighborhoods, leadInfo } = JSON.parse(storedResults);
          // Sort neighborhoods by match score and take top 3 immediately
          const sortedNeighborhoods = storedNeighborhoods
            .sort((a: Neighborhood, b: Neighborhood) => (b.matchScore || 0) - (a.matchScore || 0))
            .slice(0, 3);
          
          // Only store the necessary data while maintaining type safety
          const optimizedNeighborhoods = sortedNeighborhoods.map((n: Neighborhood) => ({
            id: n.id,
            name: n.name,
            description: n.description,
            matchScore: n.matchScore,
            budget: n.budget,
            keyFeatures: n.keyFeatures,
            kvCoreLink: n.kvCoreLink,
            image: n.image,
            tags: n.tags || [] // Ensure tags are included
          }));

          setLocalNeighborhoods(optimizedNeighborhoods);

          // Send lead data to webhook if not already sent
          if (leadInfo && !zapierSent) {
            try {
              await webhookService.sendLeadData(leadInfo, optimizedNeighborhoods.map((n: Neighborhood) => n.name));
              setZapierSent(true);
            } catch (error) {
              console.error('Failed to send lead data:', error);
              // Silently handle the error since the results are still available
            }
          }
        } else {
          setError("Results not found. They may have expired or been cleared.");
        }
      } else if (propNeighborhoods.length > 0) {
        // Sort and optimize prop neighborhoods
        const sortedNeighborhoods = propNeighborhoods
          .sort((a: Neighborhood, b: Neighborhood) => (b.matchScore || 0) - (a.matchScore || 0))
          .slice(0, 3)
          .map((n: Neighborhood) => ({
            id: n.id,
            name: n.name,
            description: n.description,
            matchScore: n.matchScore,
            budget: n.budget,
            keyFeatures: n.keyFeatures,
            kvCoreLink: n.kvCoreLink,
            image: n.image,
            tags: n.tags || [] // Ensure tags are included
          }));
        setLocalNeighborhoods(sortedNeighborhoods);
      }
      setIsLoading(false);
    } catch (error) {
      setError("Failed to load results. Please try again.");
      setIsLoading(false);
    }
  }, [resultId, propNeighborhoods, toast, zapierSent]);

  useEffect(() => {
    loadResults();
    
    // Cleanup function
    return () => {
      setLocalNeighborhoods([]);
    };
  }, [loadResults]);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <p className="text-muted-foreground">Loading your results...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
        <AlertCircle className="h-8 w-8 text-destructive" />
        <p className="text-destructive">{error}</p>
        <Button onClick={() => navigate('/quiz')}>Take the Quiz Again</Button>
      </div>
    );
  }

  if (!localNeighborhoods.length) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
        <AlertCircle className="h-8 w-8 text-destructive" />
        <p className="text-destructive">No results found. Please take the quiz again.</p>
        <Button onClick={() => navigate('/quiz')}>Take the Quiz Again</Button>
      </div>
    );
  }

  const formatPriceWithSuffix = (price: number): string => {
    if (!price) return '$0';
    if (price >= 1000000) {
      return `$${(price / 1000000).toFixed(1)}M`;
    }
    return `$${price.toLocaleString()}`;
  };

  const getCondoPrice = (neighborhood: Neighborhood): number => {
    if (!neighborhood?.budget?.min) return 0;
    return Math.round(neighborhood.budget.min * 0.75);
  };

  const getNeighborhoodSearchLink = (neighborhood: Neighborhood): string => {
    return neighborhood?.kvCoreLink || '#';
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
          <Check size={14} className="mr-1" /> Results Ready
        </div>
        <h1 className="text-3xl font-bold mb-2">Your Perfect San Diego Neighborhoods</h1>
        <p className="text-muted-foreground">Based on your preferences, here are your top matches:</p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {localNeighborhoods.map((neighborhood) => (
          <Card 
            key={neighborhood.id} 
            className="overflow-hidden transition-all duration-300 hover:shadow-md border"
            role="article"
            aria-labelledby={`neighborhood-${neighborhood.id}-title`}
          >
            <div className="aspect-video w-full overflow-hidden">
              <img 
                src={neighborhood.image} 
                alt={`${neighborhood.name} neighborhood`} 
                className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105" 
                loading="lazy"
              />
            </div>
            <div className="p-6">
              <h2 id={`neighborhood-${neighborhood.id}-title`} className="text-xl font-semibold mb-2 flex items-center">
                <MapPin size={18} className="mr-2 text-primary" />
                {neighborhood.name}
              </h2>
              <p className="text-muted-foreground mb-4">{neighborhood.description}</p>
              
              <div className="space-y-2 bg-muted/30 p-3 rounded-md mb-4">
                <div className="flex items-center text-sm">
                  <Building size={16} className="mr-2 text-primary" />
                  <span className="font-medium">Condos starting at </span>
                  <span className="ml-1">{formatPriceWithSuffix(getCondoPrice(neighborhood))}</span>
                </div>
                <div className="flex items-center text-sm">
                  <Home size={16} className="mr-2 text-primary" />
                  <span className="font-medium">Homes starting at </span>
                  <span className="ml-1">{formatPriceWithSuffix(neighborhood.budget.min)}</span>
                </div>
                <div className="text-xs text-muted-foreground mt-2 flex items-start">
                  <Info size={12} className="mr-1 mt-0.5 shrink-0" />
                  <span>Prices based on current San Diego market data</span>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="font-medium">Key Features:</h3>
                <ul className="space-y-1">
                  {neighborhood.keyFeatures.map((feature, i) => (
                    <li key={i} className="text-sm flex items-start">
                      <Check size={14} className="mr-2 text-primary mt-1 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button 
                variant="outline" 
                onClick={() => window.open(getNeighborhoodSearchLink(neighborhood), '_blank')} 
                className="w-full mt-4 group text-center"
                aria-label={`Browse properties in ${neighborhood.name}`}
              >
                Browse Properties
                <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ResultsPage;