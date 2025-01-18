import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import type { TrendData } from "@/types/trends";
import { TrendResults } from "@/components/TrendResults";
import { CrowdfundingHeader } from "@/components/crowdfunding/CrowdfundingHeader";
import { CrowdfundingSearch } from "@/components/crowdfunding/CrowdfundingSearch";
import { CrowdfundingList } from "@/components/crowdfunding/CrowdfundingList";

const Crowdfunding = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [country, setCountry] = useState("global");
  const [period, setPeriod] = useState("7d");
  const [trendResults, setTrendResults] = useState<TrendData | null>(null);

  const { data: companies = [], isLoading, refetch } = useQuery({
    queryKey: ["crowdfunding-companies", searchQuery, country, period],
    queryFn: async () => {
      console.log("Fetching crowdfunding companies with search:", searchQuery, "country:", country, "period:", period);
      let query = supabase
        .from("crowdfunding_companies")
        .select("*")
        .order("score", { ascending: false });

      if (searchQuery) {
        query = query.or(`name.ilike.%${searchQuery}%,description.ilike.%${searchQuery}%,category.ilike.%${searchQuery}%`);
      }

      if (country !== "global") {
        query = query.eq("region", country);
      }

      const { data, error } = await query;
      
      if (error) {
        console.error("Error fetching crowdfunding companies:", error);
        throw error;
      }
      
      console.log("Fetched companies:", data);
      return data;
    },
  });

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
        onTrendResults={setTrendResults}
        refetchCompanies={refetch}
      />

      {trendResults && <TrendResults data={trendResults} />}

      <CrowdfundingList 
        companies={companies} 
        isLoading={isLoading} 
      />
    </div>
  );
};

export default Crowdfunding;