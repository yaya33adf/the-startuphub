import { useState } from "react";
import { MarketHeader } from "@/components/markets/MarketHeader";
import { MarketResults } from "@/components/markets/MarketResults";
import { TrendSearch } from "@/components/TrendSearch";
import type { TrendData } from "@/types/trends";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { PageSEO } from "@/components/seo/PageSEO";

const Markets = () => {
  const [searchResults, setSearchResults] = useState<TrendData | null>(null);

  const { data: marketData, isLoading, error } = useQuery({
    queryKey: ['markets'],
    queryFn: async () => {
      console.log("Fetching market data");
      const { data, error } = await supabase
        .from('side_hustles')
        .select('*')
        .order('trend_score', { ascending: false })
        .limit(10);

      if (error) {
        console.error("Error fetching market data:", error);
        throw error;
      }

      return data.map(market => ({
        name: market.name,
        trendScore: market.trend_score || 0,
        potentialEarnings: market.monthly_earnings_max || 0,
      }));
    }
  });

  const handleSearchResults = async (results: TrendData) => {
    try {
      console.log("Market search results:", results);
      setSearchResults(results);
    } catch (error) {
      console.error("Error handling market search:", error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <PageSEO 
        title="Market Analysis & Trends"
        description="Analyze market trends, discover business opportunities, and make data-driven decisions with our comprehensive market analysis tools."
      />
      <h1 className="text-4xl font-bold mb-8">Market Analysis & Trends</h1>
      <div className="space-y-8">
        <TrendSearch onSearchResults={handleSearchResults} />
        <MarketResults 
          trendResults={searchResults}
          marketData={marketData || []}
          isLoading={isLoading}
          error={error as Error | null}
        />
      </div>
    </div>
  );
};

export default Markets;