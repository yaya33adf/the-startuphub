import { TrendSearch } from "@/components/TrendSearch";
import { MarketResults } from "@/components/markets/MarketResults";
import { useState } from "react";
import type { TrendData } from "@/types/trends";
import { PageSEO } from "@/components/seo/PageSEO";
import { Loader2 } from "lucide-react";

const Markets = () => {
  const [searchResults, setSearchResults] = useState<TrendData | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearchResults = async (results: TrendData) => {
    try {
      setIsLoading(true);
      console.log("Search results received:", results);
      setSearchResults(results);
    } catch (error) {
      console.error("Error handling search results:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <PageSEO 
        title="Market Analysis & Opportunities"
        description="Track and analyze market trends in real-time with our comprehensive market analysis tools and insights."
      />
      <div className="container mx-auto p-8 space-y-8">
        <h1 className="text-3xl font-bold text-center mb-8">Market Analysis</h1>
        <TrendSearch onSearchResults={handleSearchResults} />
        {isLoading ? (
          <div className="flex justify-center items-center min-h-[200px]">
            <Loader2 className="h-8 w-8 animate-spin" />
          </div>
        ) : (
          searchResults && <MarketResults data={searchResults} />
        )}
      </div>
    </>
  );
};

export default Markets;