import { useState } from "react";
import { SideHustleHeader } from "@/components/side-hustles/SideHustleHeader";
import { SideHustleResults } from "@/components/side-hustles/SideHustleResults";
import { TrendSearch } from "@/components/TrendSearch";
import type { TrendData } from "@/types/trends";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Loader2 } from "lucide-react";

const SideHustles = () => {
  const [searchResults, setSearchResults] = useState<TrendData | null>(null);

  const { data: sideHustles, isLoading, error } = useQuery({
    queryKey: ['sideHustles'],
    queryFn: async () => {
      console.log("Fetching side hustles data");
      const { data, error } = await supabase
        .from('side_hustles')
        .select('*')
        .order('trend_score', { ascending: false });

      if (error) {
        console.error("Error fetching side hustles:", error);
        throw error;
      }

      return data;
    }
  });

  const handleSearchResults = async (results: TrendData) => {
    try {
      console.log("Side hustles search results:", results);
      setSearchResults(results);
    } catch (error) {
      console.error("Error handling side hustles search:", error);
    }
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <SideHustleHeader />
      <div className="space-y-8">
        <TrendSearch onSearchResults={handleSearchResults} />
        <SideHustleResults 
          trendResults={searchResults}
          sideHustles={sideHustles}
          isLoading={isLoading}
          error={error as Error | null}
        />
      </div>
    </div>
  );
};

export default SideHustles;