import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { MarketSearch } from "@/components/markets/MarketSearch";
import { SideHustleHeader } from "@/components/side-hustles/SideHustleHeader";
import { SideHustleResults } from "@/components/side-hustles/SideHustleResults";
import { toast } from "@/hooks/use-toast";
import type { TrendData } from "@/types/trends";

const SideHustles = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [country, setCountry] = useState("global");
  const [period, setPeriod] = useState("7d");
  const [trendResults, setTrendResults] = useState<TrendData | null>(null);

  const { data: sideHustles, isLoading, error, refetch } = useQuery({
    queryKey: ["sideHustles", searchQuery, country, period],
    queryFn: async () => {
      console.log("Fetching side hustles with search:", searchQuery, "country:", country, "period:", period);
      let query = supabase
        .from("side_hustles")
        .select("*");

      if (searchQuery) {
        query = query.or(`name.ilike.%${searchQuery}%,description.ilike.%${searchQuery}%,category.ilike.%${searchQuery}%`);
      }

      if (country !== "global") {
        query = query.eq("region", country);
      }

      const { data, error } = await query.order("trend_score", { ascending: false });

      if (error) {
        console.error("Error fetching side hustles:", error);
        throw error;
      }

      console.log("Fetched side hustles:", data);
      return data;
    },
  });

  const handleSearch = () => {
    console.log("Exploring side hustles:", searchQuery);
    if (!searchQuery && country === "global") {
      toast({
        title: "Please enter search criteria",
        description: "Enter a side hustle idea or select a region to explore opportunities",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Exploring Side Hustles",
      description: `Looking for opportunities in ${country === 'global' ? 'Global' : country} market`,
    });
    refetch();
  };

  const handleTrendResults = (results: TrendData) => {
    console.log("Received trend results:", results);
    setTrendResults(results);
  };

  return (
    <div className="container mx-auto p-8">
      <SideHustleHeader />

      <MarketSearch
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        country={country}
        setCountry={setCountry}
        period={period}
        setPeriod={setPeriod}
        onSearch={handleSearch}
        onTrendResults={handleTrendResults}
        buttonText="Explore Side Hustles"
      />

      <SideHustleResults 
        trendResults={trendResults}
        sideHustles={sideHustles}
        isLoading={isLoading}
        error={error as Error}
      />
    </div>
  );
};

export default SideHustles;