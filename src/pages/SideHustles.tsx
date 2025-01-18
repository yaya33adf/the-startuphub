import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Briefcase, Clock, DollarSign, TrendingUp } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { PageSEO } from "@/components/seo/PageSEO";
import { MarketSearch } from "@/components/markets/MarketSearch";
import { toast } from "@/hooks/use-toast";
import { useState } from "react";

interface SideHustle {
  id: string;
  name: string;
  description: string;
  category: string;
  monthly_earnings_min: number;
  monthly_earnings_max: number;
  time_commitment: string;
  difficulty: string;
  skills: string[];
  platforms: string[];
  trend_score: number;
}

const SideHustles = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [country, setCountry] = useState("global");
  const [period, setPeriod] = useState("7d");

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
      return data as SideHustle[];
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

  return (
    <>
      <PageSEO 
        title="Side Hustles & Business Opportunities"
        description="Find profitable side hustle ideas, explore business opportunities, and learn how to monetize your skills with our comprehensive guide."
      />
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-4">Side Hustles</h1>
        <p className="text-muted-foreground mb-8">
          Discover profitable side business opportunities and start earning extra income
        </p>

        <MarketSearch
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          country={country}
          setCountry={setCountry}
          period={period}
          setPeriod={setPeriod}
          onSearch={handleSearch}
          buttonText="Explore Side Hustles"
        />

        {isLoading ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, i) => (
              <Card key={i} className="w-full">
                <CardHeader>
                  <Skeleton className="h-8 w-3/4" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-2/3" />
                </CardContent>
              </Card>
            ))}
          </div>
        ) : error ? (
          <div className="bg-red-50 p-6 rounded-lg">
            <h2 className="text-red-600 text-lg font-semibold">Error Loading Side Hustles</h2>
            <p className="text-red-500">There was an error loading the side hustles. Please try again later.</p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sideHustles?.map((hustle) => (
              <Card key={hustle.id} className="w-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{hustle.name}</CardTitle>
                    <Badge variant="secondary" className="flex items-center gap-1">
                      <TrendingUp className="h-4 w-4" />
                      <span>{hustle.trend_score}</span>
                    </Badge>
                  </div>
                  <CardDescription className="mt-2">{hustle.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <DollarSign className="h-4 w-4" />
                    <span>
                      ${hustle.monthly_earnings_min?.toLocaleString()} - ${hustle.monthly_earnings_max?.toLocaleString()}/month
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{hustle.time_commitment}</span>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Briefcase className="h-4 w-4" />
                      Required Skills
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {hustle.skills?.map((skill, index) => (
                        <Badge key={index} variant="outline">
                          {skill}
                        </Badge>
                      ))}
                    </div>
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

export default SideHustles;
