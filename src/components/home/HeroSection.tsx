import { TrendSearch } from "@/components/TrendSearch";
import { useState } from "react";
import type { TrendData } from "@/types/trends";

export const HeroSection = () => {
  const [searchResults, setSearchResults] = useState<TrendData | null>(null);

  const handleSearchResults = (results: TrendData) => {
    console.log("Search results:", results);
    setSearchResults(results);
  };

  const handleCountryChange = (country: string) => {
    console.log("Country changed:", country);
  };

  const handlePeriodChange = (period: string) => {
    console.log("Period changed:", period);
  };

  return (
    <section className="relative py-12 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Discover Market Trends
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Get real-time insights into market trends and make data-driven decisions
          </p>
          <TrendSearch 
            onSearchResults={handleSearchResults}
            onCountryChange={handleCountryChange}
            onPeriodChange={handlePeriodChange}
          />
        </div>
      </div>
    </section>
  );
};
