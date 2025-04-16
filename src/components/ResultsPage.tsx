import React, { useEffect, useState } from 'react';
import { Neighborhood, LeadInfo } from '@/types';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, MapPin, Check, Home, Building, Info } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from "@/hooks/use-toast";
import { sendToZapier } from '@/utils/zapierIntegration';

const ZAPIER_WEBHOOK_URL = "https://hooks.zapier.com/hooks/catch/20518038/2eliqxb/";

interface ResultsPageProps {
  neighborhoods: Neighborhood[];
  className?: string;
  leadInfo?: LeadInfo;
}

const ResultsPage: React.FC<ResultsPageProps> = ({
  neighborhoods = [],
  className,
  leadInfo
}) => {
  const { toast } = useToast();
  const [zapierSent, setZapierSent] = useState(false);

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

  // Send contact info to Zapier
  const sendContactToZapier = async () => {
    if (!leadInfo) return;
    
    try {
      await sendToZapier(
        leadInfo,
        neighborhoods.map(n => n.name),
        ZAPIER_WEBHOOK_URL
      );
      setZapierSent(true);
      toast({
        title: "Success!",
        description: "Your information has been sent successfully.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your information. Please try again.",
        variant: "destructive",
      });
    }
  };

  // Send user data to Zapier when component loads if leadInfo is available
  useEffect(() => {
    sendContactToZapier();
  }, [leadInfo, toast, zapierSent]);

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
              <img src={neighborhood.image} alt={neighborhood.name} className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105" />
            </div>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <Badge className="mb-2">
                  Match #{index + 1}
                </Badge>
                <div className="text-sm text-muted-foreground">
                  {neighborhood.budget.min.toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD',
                    maximumFractionDigits: 0
                  })} - {neighborhood.budget.max.toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD',
                    maximumFractionDigits: 0
                  })}
                </div>
              </div>
              <CardTitle className="flex items-center">
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
                  <span className="ml-1">
                    {getCondoPrice(neighborhood).toLocaleString('en-US', {
                      style: 'currency',
                      currency: 'USD',
                      maximumFractionDigits: 0
                    })}
                  </span>
                </div>
                <div className="flex items-center text-sm">
                  <Home size={16} className="mr-2 text-primary" />
                  <span className="font-medium">Homes starting at </span>
                  <span className="ml-1">
                    {neighborhood.budget.min.toLocaleString('en-US', {
                      style: 'currency',
                      currency: 'USD',
                      maximumFractionDigits: 0
                    })}
                  </span>
                </div>
                <div className="text-xs text-muted-foreground mt-2 flex items-start">
                  <Info size={12} className="mr-1 mt-0.5 shrink-0" />
                  <span>Prices based on current San Diego market data</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-2">
              <Button variant="outline" onClick={() => window.open(getNeighborhoodSearchLink(neighborhood), '_blank')} className="w-full group text-center">
                Browse Properties
                <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>;
};

export default ResultsPage;
