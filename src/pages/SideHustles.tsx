import { useQuery } from "@tanstack/react-query";
import { MarketSearch } from "@/components/search/MarketSearch";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Briefcase, Clock, DollarSign, TrendingUp, Trophy } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

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
  const { data: sideHustles, isLoading, error } = useQuery({
    queryKey: ["sideHustles"],
    queryFn: async () => {
      console.log("Fetching side hustles...");
      const { data, error } = await supabase
        .from("side_hustles")
        .select("*")
        .order("trend_score", { ascending: false });

      if (error) {
        console.error("Error fetching side hustles:", error);
        throw error;
      }

      console.log("Fetched side hustles:", data);
      return data as SideHustle[];
    },
  });

  const handleSearch = async (query: string, region: string, timeframe: string) => {
    console.log("Searching side hustles with:", { query, region, timeframe });
  };

  if (error) {
    return (
      <div className="container mx-auto p-8">
        <MarketSearch onSearch={handleSearch} />
        <div className="text-center text-red-500 mt-8">
          Error loading side hustles. Please try again later.
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-8">
      <MarketSearch onSearch={handleSearch} />
      
      <div className="mt-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
            <Briefcase className="h-8 w-8" />
            Top Side Hustles
          </h2>
          <p className="text-muted-foreground">
            Discover trending opportunities to earn extra income, ranked by market demand and growth potential
          </p>
        </div>

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
                      <Trophy className="h-4 w-4" />
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
    </div>
  );
};

export default SideHustles;