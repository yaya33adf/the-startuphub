import { TrendSearch } from "@/components/TrendSearch";
import { useState } from "react";
import type { TrendData } from "@/types/trends";
import { SideHustleResults } from "@/components/SideHustleResults";

const SideHustles = () => {
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
      <div className="space-y-8">
        <TrendSearch 
          onSearchResults={handleSearchResults}
          onCountryChange={handleCountryChange}
          onPeriodChange={handlePeriodChange}
        />
        {searchResults && <SideHustleResults data={searchResults} />}
      </div>
    </div>
  );
};

export default SideHustles;
