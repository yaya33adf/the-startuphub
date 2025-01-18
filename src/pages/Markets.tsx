import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { PageSEO } from "@/components/seo/PageSEO";
import { toast } from "@/components/ui/use-toast";
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
      console.log("Fetching market opportunities with filters:", { searchQuery, country, period });
      const query = supabase
        .from("side_hustles")
        .select("*")
        .order("trend_score", { ascending: false });

      if (searchQuery) {
        query.ilike("name", `%${searchQuery}%`);
      }

      const { data, error } = await query.limit(10);

      if (error) {
        console.error("Error fetching market data:", error);
        toast({
          title: "Error",
          description: "Failed to fetch market data. Please try again.",
          variant: "destructive",
        });
        throw error;
      }
      
      console.log("Fetched market opportunities:", data);
      return data;
    },
  });

  const handleSearch = () => {
    console.log("Triggering search with:", { searchQuery, country, period });
    refetch();
  };

  // Transform data for the chart
  const chartData = marketData?.map((market) => ({
    name: market.name,
    trendScore: market.trend_score,
    potentialEarnings: market.monthly_earnings_min && market.monthly_earnings_max
      ? (market.monthly_earnings_min + market.monthly_earnings_max) / 2
      : 0,
  }));

  if (isLoading || error) {
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
        {isLoading ? (
          <div className="mt-8 space-y-4">
            <div className="h-6 bg-gray-200 rounded animate-pulse w-1/3"></div>
            <div className="h-[400px] bg-gray-100 rounded animate-pulse"></div>
          </div>
        ) : (
          <div className="mt-8 bg-red-50 p-6 rounded-lg">
            <h2 className="text-red-600 text-lg font-semibold">Error Loading Market Data</h2>
            <p className="text-red-500">There was an error loading the market opportunities. Please try again later.</p>
          </div>
        )}
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
        <MarketChart data={chartData} />
        <MarketCards markets={marketData} />
      </div>
    </>
  );
};

export default Markets;