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
import AdminSettings from "./components/AdminSettings";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Helmet>
        <title>San Diego Neighborhood Match</title>
        <meta
          name="description"
          content="Discover your ideal San Diego neighborhood with this AI-powered personality test in under 5 minutes!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://sandiegoneighborhoodmatch.com" />
        {/* Open Graph Tags */}
        <meta property="og:title" content="San Diego Neighborhood Match" />
        <meta
          property="og:description"
          content="Discover your ideal San Diego neighborhood with this AI-powered personality test in under 5 minutes!"
        />
        <meta property="og:image" content="/Social-Preview.jpg" />
        <meta property="og:url" content="https://sandiegoneighborhoodmatch.com" />
        <meta property="og:type" content="website" />
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="San Diego Neighborhood Match" />
        <meta
          name="twitter:description"
          content="Discover your ideal San Diego neighborhood with this AI-powered personality test in under 5 minutes!"
        />
        <meta name="twitter:image" content="/Social-Preview.jpg" />
        {/* Theme Color */}
        <meta name="theme-color" content="#ffffff" />
        {/* Optional: Google Site Verification */}
        {/* <meta name="google-site-verification" content="your-verification-code" /> */}
        {/* Optional: Keywords */}
        <meta
          name="keywords"
          content="San Diego, neighborhoods, dream home, real estate, best neighborhood san diego"
        />
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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      {/* Vercel Analytics Plugins */}
      <SpeedInsights />
      <Analytics />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
