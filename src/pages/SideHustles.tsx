import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { ChartLine, Clock, DollarSign, Lightbulb, Trophy } from "lucide-react";
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

  if (error) {
    return (
      <div className="container mx-auto p-8">
        <div className="text-center text-red-500">
          Error loading side hustles. Please try again later.
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Top Side Hustles</h1>
        <p className="text-muted-foreground">
          Discover trending opportunities to earn extra income, ranked by market demand and growth potential
        </p>
      </div>

      {isLoading ? (
        <div className="space-y-4">
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
        <div className="space-y-4">
          {sideHustles?.map((hustle) => (
            <Card key={hustle.id} className="w-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Lightbulb className="h-6 w-6 text-primary" />
                    <CardTitle>{hustle.name}</CardTitle>
                  </div>
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <ChartLine className="h-4 w-4" />
                    <span>Trend Score: {hustle.trend_score || 'N/A'}</span>
                  </Badge>
                </div>
                <CardDescription className="mt-2">{hustle.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">
                      ${hustle.monthly_earnings_min || 0} - ${hustle.monthly_earnings_max || '1000+'}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{hustle.time_commitment || 'Flexible'}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {hustle.skills?.map((skill) => (
                    <Badge key={skill} variant="outline">
                      {skill}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <Trophy className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{hustle.difficulty || 'Beginner Friendly'}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default SideHustles;