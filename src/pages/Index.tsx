import { useState } from "react";
import type { TrendData } from "@/types/trends";
import { HeroSection } from "@/components/home/HeroSection";
import { StatisticsSection } from "@/components/home/StatisticsSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { FeaturedSideHustles } from "@/components/home/FeaturedSideHustles";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";

const Index = () => {
  const [searchResults, setSearchResults] = useState<TrendData | null>(null);

  const handleSearchResults = (results: TrendData) => {
    setSearchResults(results);
    console.log("Search results received:", results);
  };

  return (
    <div className="min-h-screen bg-background">
      <HeroSection 
        searchResults={searchResults} 
        onSearchResults={handleSearchResults} 
      />
      <StatisticsSection />
      <HowItWorksSection />
      <FeaturedSideHustles />
      <NewsletterSection />
      <FeaturesSection />
    </div>
  );
};

export default Index;