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
        const query = supabase
          .from("side_hustles")
          .select("*");

        // Log the base query
        console.log("Initial query created");

        // Add search filter if query exists
        if (searchQuery) {
          console.log("Applying search filter:", searchQuery);
          // Split the conditions for better readability and debugging
          const nameFilter = `name.ilike.%${searchQuery}%`;
          const descFilter = `description.ilike.%${searchQuery}%`;
          query.or(`${nameFilter},${descFilter}`);
          console.log("Search filters applied:", { nameFilter, descFilter });
        }

        // Execute query with ordering and limit
        const { data, error } = await query
          .order('trend_score', { ascending: false })
          .limit(10);

        // Log the response
        console.log("Query executed, response:", { data, error });

        if (error) {
          console.error("Supabase error fetching market data:", error);
          toast({
            title: "Error",
            description: "Failed to fetch market data. Please try again.",
            variant: "destructive",
          });
          throw error;
        }

        // Ensure we have data
        if (!data) {
          console.log("No data returned from query");
          return [];
        }
        
        console.log("Successfully fetched market opportunities:", data.length, "results");
        return data;
      } catch (err) {
        console.error("Unexpected error in market data fetch:", err);
        throw err;
      }
    },
    enabled: true,
  });

  const handleSearch = () => {
    console.log("Triggering market search with:", { searchQuery, country, period });
    toast({
      title: "Exploring Markets",
      description: `Searching for "${searchQuery || 'all markets'}" in ${country}`,
    });
    refetch();
  };

  if (error) {
    console.error("Error in Markets component:", error);
    return (
      <div className="p-8">
        <MarketSearch
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          country={country}
          setCountry={setCountry}
          period={period}
          setPeriod={setPeriod}
          onSearch={handleSearch}
        />
        <div className="mt-8 bg-red-50 p-6 rounded-lg">
          <h2 className="text-red-600 text-lg font-semibold">Error Loading Market Data</h2>
          <p className="text-red-500">There was an error loading the market opportunities. Please try again later.</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <PageSEO 
        title="Market Analysis & Opportunities"
        description="Analyze market trends, discover growth opportunities, and make data-driven decisions with our comprehensive market analysis tools."
      />
      <div className="p-8">
        <h1 className="text-4xl font-bold mb-6">Market Analysis Dashboard</h1>
        <MarketSearch
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          country={country}
          setCountry={setCountry}
          period={period}
          setPeriod={setPeriod}
          onSearch={handleSearch}
        />
        {isLoading ? (
          <div className="mt-8 space-y-4">
            <div className="h-6 bg-gray-200 rounded animate-pulse w-1/3"></div>
            <div className="h-[400px] bg-gray-100 rounded animate-pulse"></div>
          </div>
        ) : (
          <>
            <MarketChart data={marketData?.map(market => ({
              name: market.name,
              trendScore: market.trend_score,
              potentialEarnings: market.monthly_earnings_min && market.monthly_earnings_max
                ? (market.monthly_earnings_min + market.monthly_earnings_max) / 2
                : 0,
            })) || []} />
            <MarketCards markets={marketData || []} />
          </>
        )}
      </div>
    </>
  );
};

export default Markets;