
import React from "react";
import { Helmet } from "react-helmet";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Areas from "./pages/Areas";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Privacy from "./pages/Privacy";
import AdminSettings from "./components/AdminSettings";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Helmet>
        <title>San Diego Neighborhood Match</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Discover your ideal San Diego neighborhood with this AI-powered personality test in under 5 minutes!"
        />
        <link rel="canonical" href="https://sandiegoneighborhoodmatch.com" />
        <meta name="author" content="Jared Harman" />
        <meta
          name="keywords"
          content="San Diego, neighborhoods, dream home, real estate, best neighborhood san diego"
        />
        
        <meta property="og:title" content="San Diego Neighborhood Match" />
        <meta
          property="og:description"
          content="Discover your ideal San Diego neighborhood with this AI-powered personality test in under 5 minutes!"
        />
        <meta property="og:url" content="https://sandiegoneighborhoodmatch.com" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://sandiegoneighborhoodmatch.com/Social-Preview.jpg"
        />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="San Diego Neighborhood Match" />
        <meta
          name="twitter:description"
          content="Discover your ideal San Diego neighborhood with this AI-powered personality test in under 5 minutes!"
        />
        <meta
          name="twitter:image"
          content="https://sandiegoneighborhoodmatch.com/Social-Preview.jpg"
        />

        <meta name="theme-color" content="#ffffff" />
        
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "San Diego Neighborhood Match",
              "description": "Discover your ideal San Diego neighborhood with this AI-powered personality test in under 5 minutes!",
              "url": "https://sandiegoneighborhoodmatch.com"
            }
          `}
        </script>
      </Helmet>
      
      <Toaster />
      <Sonner />
      <AdminSettings />
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/areas" element={<Areas />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      
      <SpeedInsights />
      <Analytics />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
