import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { MarketSearch } from "@/components/markets/MarketSearch";
import { MarketHeader } from "@/components/markets/MarketHeader";
import { MarketResults } from "@/components/markets/MarketResults";
import { toast } from "@/hooks/use-toast";
import type { TrendData } from "@/types/trends";

const Markets = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [country, setCountry] = useState("global");
  const [period, setPeriod] = useState("7d");
  const [trendResults, setTrendResults] = useState<TrendData | null>(null);

  const { data: marketData, isLoading, error, refetch } = useQuery({
    queryKey: ["marketOpportunities", searchQuery, country, period],
    queryFn: async () => {
      console.log("Starting market opportunities fetch with filters:", { searchQuery, country, period });
      
      try {
        let query = supabase
          .from("trend_scores")
          .select("*")
          .order('total_score', { ascending: false });

        if (searchQuery) {
          console.log("Applying search filter:", searchQuery);
          query = query.ilike('query', `%${searchQuery}%`);
        }

        const { data, error } = await query.limit(10);

        if (error) {
          console.error("Error fetching market data:", error);
          throw error;
        }

        const transformedData = data.map(score => ({
          id: score.id,
          name: score.query,
          description: "Market opportunity based on trend analysis",
          trend_score: score.total_score || 0,
          monthly_earnings_min: 1000,
          monthly_earnings_max: 5000,
          category: "Market Trend",
          difficulty: "Medium",
          skills: ["Research", "Analysis", "Marketing"],
          platforms: ["Online", "Digital"],
        }));

        console.log("Successfully fetched market opportunities:", transformedData);
        return transformedData;
      } catch (err) {
        console.error("Unexpected error in market data fetch:", err);
        throw err;
      }
    },
  });

  const handleSearch = () => {
    console.log("Searching markets with:", { searchQuery, country, period });
    toast({
      title: "Exploring Markets",
      description: `Searching for "${searchQuery || 'all markets'}" in ${country}`,
    });
    refetch();
  };

  const handleTrendResults = (results: TrendData) => {
    console.log("Received trend results:", results);
    setTrendResults(results);
  };

  return (
    <div className="container mx-auto p-8">
      <MarketHeader />
      
      <MarketSearch
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        country={country}
        setCountry={setCountry}
        period={period}
        setPeriod={setPeriod}
        onSearch={handleSearch}
        onTrendResults={handleTrendResults}
      />

      <MarketResults 
        trendResults={trendResults}
        marketData={marketData || []}
        isLoading={isLoading}
        error={error as Error}
      />
    </div>
  );
};

export default Markets;