import { useState } from "react";
import type { TrendData } from "@/types/trends";
import { HeroSection } from "@/components/home/HeroSection";
import { StatisticsSection } from "@/components/home/StatisticsSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { CoreValuesSection } from "@/components/home/CoreValuesSection";
import { FeaturedSideHustles } from "@/components/home/FeaturedSideHustles";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { StructuredData } from "@/components/seo/StructuredData";

const Index = () => {
  const [searchResults, setSearchResults] = useState<TrendData | null>(null);

  const handleSearchResults = (results: TrendData) => {
    setSearchResults(results);
    console.log("Search results received:", {
      timestamp: new Date().toISOString(),
      resultsLength: Object.keys(results).length,
      results
    });
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <StructuredData type="website" />
      <HeroSection />
      <StatisticsSection />
      <HowItWorksSection />
      <CoreValuesSection />
      <FeaturedSideHustles />
      <FeaturesSection />
      <NewsletterSection />
    </div>
  );
};

export default Index;