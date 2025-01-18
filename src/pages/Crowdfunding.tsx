import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, DollarSign, Trophy, Users, Rocket } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { PageSEO } from "@/components/seo/PageSEO";
import { useToast } from "@/components/ui/use-toast";
import { MarketSearch } from "@/components/markets/MarketSearch";
import { calculateTrendScores } from "@/services/trendService";

const Crowdfunding = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [country, setCountry] = useState("global");
  const [period, setPeriod] = useState("7d");
  const { toast } = useToast();

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

  const handleSearch = async () => {
    console.log("Exploring opportunities:", searchQuery);
    if (!searchQuery) {
      toast({
        title: "Search query required",
        description: "Please enter a market or topic to explore",
        variant: "destructive",
      });
      return;
    }

    try {
      const trendResults = await calculateTrendScores(searchQuery);
      console.log("Trend results:", trendResults);
      
      if (trendResults) {
        toast({
          title: "Market Analysis Complete",
          description: `Trend score for "${searchQuery}": ${trendResults.score}/100`,
        });
      }
      
      refetch();
    } catch (error) {
      console.error("Error calculating trends:", error);
      toast({
        title: "Error analyzing market trends",
        description: error instanceof Error ? error.message : "An unexpected error occurred",
        variant: "destructive",
      });
    }
  };

  return (
    <>
      <PageSEO 
        title="Crowdfunding Projects"
        description="Discover innovative crowdfunding projects, track funding progress, and find investment opportunities in trending startups."
      />
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Trending Crowdfunding Projects</h1>
        
        <MarketSearch
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          country={country}
          setCountry={setCountry}
          period={period}
          setPeriod={setPeriod}
          onSearch={handleSearch}
          buttonText="Explore Projects"
        />

        {isLoading ? (
          <div className="text-center">Loading projects...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {companies.map((company) => (
              <Card key={company.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-xl">{company.name}</CardTitle>
                    <div className="flex items-center gap-1 text-green-600">
                      <Trophy className="w-5 h-5" />
                      <span className="font-bold">{company.score}</span>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">{company.category}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{company.description}</p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Funding Goal:</span>
                      <span className="font-medium">${company.funding_goal?.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Current Funding:</span>
                      <span className="font-medium">${company.current_funding?.toLocaleString()}</span>
                    </div>
                    <div className="relative pt-1">
                      <div className="overflow-hidden h-2 text-xs flex rounded bg-green-100">
                        <div
                          style={{
                            width: `${Math.min(
                              (company.current_funding / company.funding_goal) * 100,
                              100
                            )}%`,
                          }}
                          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
                        />
                      </div>
                    </div>
                    <Button className="w-full mt-4" asChild>
                      <a href={company.website_url} target="_blank" rel="noopener noreferrer">
                        <Rocket className="w-4 h-4 mr-2" />
                        View Project
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Crowdfunding;