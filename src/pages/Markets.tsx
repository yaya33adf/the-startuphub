import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { PageSEO } from "@/components/seo/PageSEO";
import { toast } from "@/hooks/use-toast";
import { MarketSearch } from "@/components/markets/MarketSearch";
import { MarketChart } from "@/components/markets/MarketChart";
import { MarketCards } from "@/components/markets/MarketCards";

const Markets = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [country, setCountry] = useState("global");
  const [period, setPeriod] = useState("7d");

  const { data: marketData, isLoading, error, refetch } = useQuery({
    queryKey: ["marketOpportunities", searchQuery, country, period],
    queryFn: async () => {
      console.log("Starting market opportunities fetch with filters:", { searchQuery, country, period });
      
      try {
        let query = supabase
          .from("trend_scores")
          .select("*");

        if (searchQuery) {
          console.log("Applying search filter:", searchQuery);
          query = query.ilike('query', `%${searchQuery}%`);
        }

        const { data, error } = await query
          .order('total_score', { ascending: false })
          .limit(10);

        if (error) {
          console.error("Error fetching market data:", error);
          throw error;
        }

        console.log("Successfully fetched market opportunities:", data);
        return data;
      } catch (err) {
        console.error("Unexpected error in market data fetch:", err);
        throw err;
      }
    },
    enabled: true,
  });

  const handleSearch = () => {
    console.log("Searching markets with:", { searchQuery, country, period });
    toast({
      title: "Exploring Markets",
      description: `Searching for "${searchQuery || 'all markets'}" in ${country}`,
    });
    refetch();
  };

  return (
    <>
      <PageSEO 
        title="Market Analysis & Opportunities"
        description="Analyze market trends, discover growth opportunities, and make data-driven decisions with our comprehensive market analysis tools."
      />
      <div className="p-8">
        <h1 className="text-4xl font-bold mb-6">Market Analysis Dashboard</h1>
        <p className="text-muted-foreground mb-8">
          Discover emerging market trends and analyze global business opportunities
        </p>
        
        <MarketSearch
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          country={country}
          setCountry={setCountry}
          period={period}
          setPeriod={setPeriod}
          onSearch={handleSearch}
        />

        {error ? (
          <div className="mt-8 bg-red-50 p-6 rounded-lg">
            <h2 className="text-red-600 text-lg font-semibold">Error Loading Market Data</h2>
            <p className="text-red-500">There was an error loading the market opportunities. Please try again later.</p>
          </div>
        ) : isLoading ? (
          <div className="mt-8 space-y-4">
            <div className="h-6 bg-gray-200 rounded animate-pulse w-1/3"></div>
            <div className="h-[400px] bg-gray-100 rounded animate-pulse"></div>
          </div>
        ) : (
          <>
            <MarketChart data={marketData?.map(market => ({
              name: market.query,
              trendScore: market.total_score,
              potentialEarnings: market.metadata?.estimated_earnings || 0,
            })) || []} />
            <MarketCards markets={marketData || []} />
          </>
        )}
      </div>
    </>
  );
};

export default Markets;