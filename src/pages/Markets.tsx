import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { PageSEO } from "@/components/seo/PageSEO";
import { toast } from "@/hooks/use-toast";
import { MarketSearch } from "@/components/markets/MarketSearch";
import { MarketChart } from "@/components/markets/MarketChart";
import { MarketCards } from "@/components/markets/MarketCards";
import { TrendResults } from "@/components/TrendResults";
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

        // Transform the data for market cards
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

  const handleTrendResults = (results: TrendData) => {
    console.log("Received trend results:", results);
    setTrendResults(results);
  };

  // Sample market data for initial view
  const sampleMarkets = [
    {
      id: '1',
      name: "AI Development",
      description: "Artificial Intelligence and Machine Learning solutions",
      trend_score: 95,
      monthly_earnings_min: 5000,
      monthly_earnings_max: 15000,
    },
    {
      id: '2',
      name: "Sustainable Energy",
      description: "Green energy and sustainability solutions",
      trend_score: 88,
      monthly_earnings_min: 3000,
      monthly_earnings_max: 10000,
    },
    {
      id: '3',
      name: "Digital Health",
      description: "Healthcare technology and telemedicine",
      trend_score: 92,
      monthly_earnings_min: 4000,
      monthly_earnings_max: 12000,
    }
  ];

  // Only show sample markets if no search has been performed and no results exist
  const displayData = marketData?.length ? marketData : (!searchQuery ? sampleMarkets : []);

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
          onTrendResults={handleTrendResults}
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
            {trendResults && (
              <div className="mt-8">
                <TrendResults data={trendResults} />
              </div>
            )}
            <div className="mt-8">
              <MarketChart data={displayData.map(market => ({
                name: market.name,
                trendScore: market.trend_score || 0,
                potentialEarnings: market.monthly_earnings_max || 0,
              })) || []} />
            </div>
            <div className="mt-8">
              <MarketCards markets={displayData} />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Markets;