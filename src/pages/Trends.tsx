import { TrendSearch } from "@/components/TrendSearch";
import { TrendResults } from "@/components/TrendResults";
import { TrendingTopics } from "@/components/trends/TrendingTopics";
import { useState } from "react";
import type { TrendData } from "@/types/trends";
import { PageSEO } from "@/components/seo/PageSEO";
import { Loader2 } from "lucide-react";

const Trends = () => {
  const [searchResults, setSearchResults] = useState<TrendData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [country, setCountry] = useState("US");
  const [period, setPeriod] = useState("7d");

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

  const handleCountryChange = (newCountry: string) => {
    console.log("Country changed to:", newCountry);
    setCountry(newCountry);
  };

  const handlePeriodChange = (newPeriod: string) => {
    console.log("Period changed to:", newPeriod);
    setPeriod(newPeriod);
  };

  return (
    <>
      <PageSEO 
        title="Market Trend Analysis"
        description="Track and analyze market trends in real-time with our comprehensive trend analysis tools and insights."
      />
      <div className="container mx-auto p-8 space-y-8">
        <h1 className="text-3xl font-bold text-center mb-8">Market Trend Analysis</h1>
        
        <div className="space-y-8">
          <div className="space-y-8">
            <TrendSearch 
              onSearchResults={handleSearchResults} 
              onCountryChange={handleCountryChange}
              onPeriodChange={handlePeriodChange}
            />
            <TrendingTopics country={country} period={period} />
          </div>

          {isLoading ? (
            <div className="flex justify-center items-center min-h-[200px]">
              <Loader2 className="h-8 w-8 animate-spin" />
            </div>
          ) : (
            searchResults && <TrendResults data={searchResults} />
          )}
        </div>
      </div>
    </>
  );
};

export default Trends;