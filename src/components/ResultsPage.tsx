
import React, { useEffect, useState } from 'react';
import { Neighborhood, LeadInfo } from '@/types';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, MapPin, Check, Home, Building } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from "@/hooks/use-toast";
import { sendToZapier } from '@/utils/zapierIntegration';

interface ResultsPageProps {
  neighborhoods: Neighborhood[];
  className?: string;
  leadInfo?: LeadInfo;
}

const ResultsPage: React.FC<ResultsPageProps> = ({ neighborhoods, className, leadInfo }) => {
  const { toast } = useToast();
  const [zapierSent, setZapierSent] = useState(false);
  
  // Get the search link for a specific neighborhood from its kvCoreLink property
  const getNeighborhoodSearchLink = (neighborhood: Neighborhood) => {
    return neighborhood.kvCoreLink || '#';
  };

  // Function to generate a combined search link for all selected neighborhoods
  // Note: Since kvCORE doesn't support combined search in the same way,
  // we'll just use the first neighborhood's link as a fallback
  const getCombinedSearchLink = () => {
    if (neighborhoods.length === 0) return '#';
    
    // Just use the first neighborhood's link when multiple are selected
    // We could potentially create a custom landing page in the future that shows all areas
    return neighborhoods[0].kvCoreLink || '#';
  };

  // Send user data to Zapier when component loads if leadInfo is available
  useEffect(() => {
    const sendContactToZapier = async () => {
      if (leadInfo && !zapierSent) {
        // Replace with your actual Zapier webhook URL
        const ZAPIER_WEBHOOK_URL = localStorage.getItem('zapierWebhookUrl') || '';
        
        if (!ZAPIER_WEBHOOK_URL) {
          console.log('No Zapier webhook URL configured');
          return;
        }
        
        const success = await sendToZapier(
          ZAPIER_WEBHOOK_URL,
          leadInfo,
          neighborhoods.map(n => n.name)
        );
        
        if (success) {
          setZapierSent(true);
          toast({
            title: "Contact Saved",
            description: "Your information has been sent to our team.",
          });
          
          // Store contact in localStorage for backup
          const storedContacts = JSON.parse(localStorage.getItem('storedContacts') || '[]');
          storedContacts.push({
            contact: leadInfo,
            areas: neighborhoods.map(n => n.name),
            timestamp: new Date().toISOString()
          });
          localStorage.setItem('storedContacts', JSON.stringify(storedContacts));
        }
      }
    };
    
    sendContactToZapier();
  }, [leadInfo, neighborhoods, toast, zapierSent]);

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
                    {(neighborhood.budget.min * 0.7).toLocaleString('en-US', {
                      style: 'currency',
                      currency: 'USD',
                      maximumFractionDigits: 0,
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
                      maximumFractionDigits: 0,
                    })}
                  </span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-2">
              <Button 
                variant="outline" 
                className="w-full group"
                onClick={() => window.open(getNeighborhoodSearchLink(neighborhood), '_blank')}
              >
                Browse {neighborhood.name} Properties
                <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="text-center pt-8">
        <Button 
          className="px-8"
          onClick={() => window.open(getCombinedSearchLink(), '_blank')}
        >
          View Properties in All My Matched Areas
        </Button>
      </div>
    </div>
  );
};

export default ResultsPage;
