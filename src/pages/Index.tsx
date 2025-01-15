import { useState } from "react";
import type { TrendData } from "@/types/trends";
import { HeroSection } from "@/components/home/HeroSection";
import { StatisticsSection } from "@/components/home/StatisticsSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { FeaturedSideHustles } from "@/components/home/FeaturedSideHustles";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { StructuredData } from "@/components/seo/StructuredData";

const Index = () => {
  const [searchResults, setSearchResults] = useState<TrendData | null>(null);

  const handleSearchResults = (results: TrendData) => {
    setSearchResults(results);
    // Add more detailed logging
    console.log("Search results received:", {
      timestamp: new Date().toISOString(),
      resultsLength: Object.keys(results).length,
      results
    });
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <StructuredData type="website" />
      <HeroSection 
        searchResults={searchResults} 
        onSearchResults={handleSearchResults} 
      />
      <StatisticsSection />
      <HowItWorksSection />
      <FeaturedSideHustles />
      <FeaturesSection />
      <NewsletterSection />
    </div>
  );
};

export default Index;