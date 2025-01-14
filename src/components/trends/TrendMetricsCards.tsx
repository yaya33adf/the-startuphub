import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Users, BarChart, ArrowUp, ArrowDown } from "lucide-react";

interface TrendMetricsCardsProps {
  avgScore: number;
  interestLevel: string;
  searchVolume: string;
  growthRate: string;
  communitySize: string;
}

export const TrendMetricsCards = ({
  avgScore,
  interestLevel,
  searchVolume,
  growthRate,
  communitySize,
}: TrendMetricsCardsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Interest Level</CardTitle>
          <TrendingUp className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{interestLevel}</div>
          <p className="text-xs text-muted-foreground">
            Based on global search trends
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Search Volume</CardTitle>
          <BarChart className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{searchVolume}</div>
          <p className="text-xs text-muted-foreground">
            Trend over last 30 days
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Growth Rate</CardTitle>
          {avgScore > 50 ? (
            <ArrowUp className="h-4 w-4 text-green-500" />
          ) : (
            <ArrowDown className="h-4 w-4 text-red-500" />
          )}
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{growthRate}</div>
          <p className="text-xs text-muted-foreground">
            Month over month change
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Community Size</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{communitySize}</div>
          <p className="text-xs text-muted-foreground">
            Active community engagement
          </p>
        </CardContent>
      </Card>
    </div>
  );
};