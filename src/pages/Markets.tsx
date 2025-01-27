import { TrendSearch } from "@/components/TrendSearch";
import { MarketResults } from "@/components/MarketResults";
import { MarketLoadingState } from "@/components/MarketLoadingState";
import { useState } from "react";
import type { TrendData } from "@/types/trends";

const Markets = () => {
  const [searchResults, setSearchResults] = useState<TrendData | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearchResults = async (results: TrendData) => {
    setIsLoading(true);
    try {
      setSearchResults(results);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCountryChange = (country: string) => {
    console.log("Country changed:", country);
  };

  const handlePeriodChange = (period: string) => {
    console.log("Period changed:", period);
  };

  return (
    <div className="container mx-auto p-8">
      <MarketHeader />
      <div className="mt-8">
        <TrendSearch 
          onSearchResults={handleSearchResults}
          onCountryChange={handleCountryChange}
          onPeriodChange={handlePeriodChange}
        />
      </div>
      {isLoading ? (
        <MarketLoadingState />
      ) : (
        searchResults && <MarketResults data={searchResults} />
      )}
    </div>
  );
};

export default Markets;
