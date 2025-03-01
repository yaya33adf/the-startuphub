import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import type { TrendData } from "@/types/trends";
import type { Database } from "@/integrations/supabase/types";
import { TrendResults } from "@/components/TrendResults";
import { CrowdfundingHeader } from "@/components/crowdfunding/CrowdfundingHeader";
import { CrowdfundingSearch } from "@/components/crowdfunding/CrowdfundingSearch";
import { CrowdfundingList } from "@/components/crowdfunding/CrowdfundingList";
import { Loader2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

type CrowdfundingCompany = Database['public']['Tables']['crowdfunding_companies']['Row'];

const Crowdfunding = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [country, setCountry] = useState("global");
  const [period, setPeriod] = useState("7d");
  const [trendResults, setTrendResults] = useState<TrendData | null>(null);
  const [isSearching, setIsSearching] = useState(false);
  const { toast } = useToast();

  const { data: companies = [], isLoading, refetch } = useQuery({
    queryKey: ["crowdfunding-companies", searchQuery, country, period],
    queryFn: async () => {
      try {
        console.log("Fetching crowdfunding companies with search:", searchQuery, "country:", country, "period:", period);
        const query = supabase
          .from("crowdfunding_companies")
          .select("*")
          .order("score", { ascending: false });

        if (searchQuery) {
          const searchFilter = `name.ilike.%${searchQuery}%,description.ilike.%${searchQuery}%,category.ilike.%${searchQuery}%`;
          query.or(searchFilter);
        }

        if (country !== "global") {
          query.eq("region", country);
        }

        const { data, error } = await query;
        
        if (error) {
          console.error("Error fetching crowdfunding companies:", error);
          toast({
            title: "Error fetching companies",
            description: "Please try again later",
            variant: "destructive",
          });
          return [];
        }
        
        console.log("Fetched companies:", data);
        return (data || []) as CrowdfundingCompany[];
      } catch (error) {
        console.error("Unexpected error:", error);
        toast({
          title: "Error fetching companies",
          description: "An unexpected error occurred",
          variant: "destructive",
        });
        return [];
      }
    },
    retry: 2,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  const handleTrendResults = (results: TrendData) => {
    setIsSearching(true);
    try {
      setTrendResults(results);
    } catch (error) {
      console.error("Error handling trend results:", error);
      toast({
        title: "Error",
        description: "Failed to process trend results",
        variant: "destructive",
      });
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <CrowdfundingHeader />
      
      <CrowdfundingSearch
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        country={country}
        setCountry={setCountry}
        period={period}
        setPeriod={setPeriod}
        onTrendResults={handleTrendResults}
        refetchCompanies={refetch}
      />

      {isSearching ? (
        <div className="flex justify-center items-center min-h-[200px]">
          <Loader2 className="h-8 w-8 animate-spin" />
        </div>
      ) : (
        trendResults && <TrendResults data={trendResults} />
      )}

      <CrowdfundingList 
        companies={companies} 
        isLoading={isLoading} 
      />
    </div>
  );
};

export default Crowdfunding;