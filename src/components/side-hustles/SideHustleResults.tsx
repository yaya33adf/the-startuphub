import { TrendResults } from "@/components/TrendResults";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, DollarSign, Clock, Briefcase } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import type { TrendData } from "@/types/trends";
import type { SideHustle } from "@/types/side-hustles";

interface SideHustleResultsProps {
  trendResults: TrendData | null;
  sideHustles: SideHustle[] | undefined;
  isLoading: boolean;
  error: Error | null;
}

export const SideHustleResults = ({ trendResults, sideHustles, isLoading, error }: SideHustleResultsProps) => {
  if (isLoading) {
    return (
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
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 p-6 rounded-lg">
        <h2 className="text-red-600 text-lg font-semibold">Error Loading Side Hustles</h2>
        <p className="text-red-500">There was an error loading the side hustles. Please try again later.</p>
      </div>
    );
  }

  return (
    <>
      {trendResults && (
        <div className="mt-8">
          <TrendResults data={trendResults} />
        </div>
      )}
      
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
    </>
  );
};