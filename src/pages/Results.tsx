import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Neighborhood, LeadInfo } from '@/types';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, MapPin, Check, Home, Building, Info, AlertCircle, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from "@/hooks/use-toast";

interface ResultsPageProps {
  neighborhoods?: Neighborhood[];
  leadInfo?: LeadInfo;
}

const ResultsPage: React.FC<ResultsPageProps> = ({
  neighborhoods: propNeighborhoods,
  leadInfo: propLeadInfo
}) => {
  const { resultId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [neighborhoods, setNeighborhoods] = useState<Neighborhood[]>([]);
  const [leadInfo, setLeadInfo] = useState<LeadInfo | undefined>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadResults = async () => {
      try {
        setIsLoading(true);
        setError(null);

        if (resultId) {
          // Load results from localStorage or API
          const storedResults = localStorage.getItem(`quiz_results_${resultId}`);
          if (storedResults) {
            const { neighborhoods: storedNeighborhoods, leadInfo: storedLeadInfo } = JSON.parse(storedResults);
            setNeighborhoods(storedNeighborhoods);
            setLeadInfo(storedLeadInfo);
          } else {
            setError("Results not found. They may have expired or been cleared.");
            toast({
              title: "Results Not Found",
              description: "The requested results could not be found. They may have expired or been cleared.",
              variant: "destructive",
            });
          }
        } else if (propNeighborhoods) {
          // Use props if available (direct navigation from quiz)
          setNeighborhoods(propNeighborhoods);
          setLeadInfo(propLeadInfo);
        }
      } catch (error) {
        console.error('Error loading results:', error);
        setError("There was an error loading your results. Please try again.");
        toast({
          title: "Error",
          description: "There was a problem loading your results. Please try again.",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };

    loadResults();
  }, [resultId, propNeighborhoods, propLeadInfo, navigate, toast]);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen space-y-4" role="status" aria-label="Loading results">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <p className="text-lg font-medium">Loading your personalized results...</p>
        <p className="text-sm text-muted-foreground">This may take a few moments</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen space-y-4" role="alert">
        <AlertCircle className="h-8 w-8 text-destructive" />
        <h1 className="text-2xl font-bold">{error}</h1>
        <Button onClick={() => navigate('/')}>Return to Home</Button>
      </div>
    );
  }

  if (!neighborhoods.length) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
        <h1 className="text-2xl font-bold">No Results Found</h1>
        <p className="text-muted-foreground">We couldn't find any matching neighborhoods for your preferences.</p>
        <Button onClick={() => navigate('/')}>Return to Home</Button>
      </div>
    );
  }

  // Get the search link for a specific neighborhood from its kvCoreLink property
  const getNeighborhoodSearchLink = (neighborhood: Neighborhood) => {
    return neighborhood?.kvCoreLink || '#';
  };

  // Calculate condo price - condos are typically priced at 60-80% of homes in the same area
  const getCondoPrice = (neighborhood: Neighborhood) => {
    if (!neighborhood?.budget?.min) return 0;
    return Math.round(neighborhood.budget.min * 0.75);
  };

  // Format price with appropriate suffix for larger amounts
  const formatPriceWithSuffix = (price: number): string => {
    if (!price) return '$0';
    if (price >= 1000000) {
      return `$${(price / 1000000).toFixed(1)}M`;
    }
    return `$${price.toLocaleString()}`;
  };

  return (
    <div className="space-y-8 animate-fade-in" role="main">
      <div className="text-center space-y-4 mb-8">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
          <Check size={14} className="mr-1" /> Results Ready
        </div>
        <h1 className="text-3xl font-bold sm:text-4xl tracking-tight">
          Your Perfect San Diego Neighborhoods
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Based on your preferences, we've identified the top San Diego neighborhoods that match your lifestyle and homebuying needs. Explore what makes each area special!
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {neighborhoods.map((neighborhood, index) => (
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
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <Badge className="mb-2">
                  Match #{index + 1}
                </Badge>
                <div className="text-sm text-muted-foreground">
                  {formatPriceWithSuffix(neighborhood.budget.min)} - {formatPriceWithSuffix(neighborhood.budget.max)}
                </div>
              </div>
              <CardTitle id={`neighborhood-${neighborhood.id}-title`} className="flex items-center">
                <MapPin size={18} className="inline mr-2 text-primary" />
                {neighborhood.name}
              </CardTitle>
              <CardDescription>{neighborhood.description}</CardDescription>
            </CardHeader>
            <CardContent className="pb-0">
              <h4 className="font-medium mb-2 text-sm">Neighborhood Highlights:</h4>
              <ul className="space-y-1 mb-4">
                {neighborhood.keyFeatures.map((feature, i) => (
                  <li key={i} className="text-sm flex items-start">
                    <Check size={14} className="mr-2 text-primary mt-1 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
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
            </CardContent>
            <CardFooter className="flex flex-col gap-2">
              <Button 
                variant="outline" 
                onClick={() => window.open(getNeighborhoodSearchLink(neighborhood), '_blank')} 
                className="w-full group text-center"
                aria-label={`Browse properties in ${neighborhood.name}`}
              >
                Browse Properties
                <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ResultsPage; 