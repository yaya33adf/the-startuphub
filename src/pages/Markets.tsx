import { useQuery } from "@tanstack/react-query";
import { Globe, TrendingUp, ChartBar, Lightbulb, DollarSign } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Markets = () => {
  // Fetch market opportunities data with proper error handling
  const { data: marketData, isLoading, error } = useQuery({
    queryKey: ["marketOpportunities"],
    queryFn: async () => {
      console.log("Fetching market opportunities...");
      const { data, error } = await supabase
        .from("side_hustles")
        .select("*")
        .order("trend_score", { ascending: false })
        .limit(10);

      if (error) {
        console.error("Error fetching market data:", error);
        throw error;
      }
      
      console.log("Fetched market opportunities:", data);
      return data;
    },
  });

  // Handle loading state with a better UI
  if (isLoading) {
    return (
      <div className="p-8">
        <div className="flex items-center space-x-2 mb-6">
          <Globe className="w-6 h-6" />
          <h1 className="text-2xl font-bold">Market Opportunities</h1>
        </div>
        <div className="grid gap-4">
          <Card>
            <CardHeader>
              <div className="h-6 bg-gray-200 rounded animate-pulse w-1/3"></div>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] bg-gray-100 rounded animate-pulse"></div>
            </CardContent>
          </Card>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="flex flex-col">
                <CardHeader>
                  <div className="h-6 bg-gray-200 rounded animate-pulse w-2/3"></div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="h-4 bg-gray-100 rounded animate-pulse"></div>
                    <div className="h-4 bg-gray-100 rounded animate-pulse w-5/6"></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Handle error state
  if (error) {
    return (
      <div className="p-8">
        <div className="flex items-center space-x-2 mb-6">
          <Globe className="w-6 h-6" />
          <h1 className="text-2xl font-bold">Market Opportunities</h1>
        </div>
        <Card className="bg-red-50">
          <CardHeader>
            <CardTitle className="text-red-600">Error Loading Market Data</CardTitle>
            <CardDescription>
              There was an error loading the market opportunities. Please try again later.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    );
  }

  // Transform data for the chart
  const chartData = marketData?.map((market) => ({
    name: market.name,
    trendScore: market.trend_score,
    potentialEarnings: market.monthly_earnings_min && market.monthly_earnings_max
      ? (market.monthly_earnings_min + market.monthly_earnings_max) / 2
      : 0,
  }));

  return (
    <div className="p-8">
      <div className="flex items-center space-x-2 mb-6">
        <Globe className="w-6 h-6" />
        <h1 className="text-2xl font-bold">Market Opportunities</h1>
      </div>

      <div className="grid gap-6">
        {/* Market Overview Chart */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Market Trends & Potential
            </CardTitle>
            <CardDescription>
              Top market opportunities by trend score and earnings potential
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    dataKey="name"
                    angle={-45}
                    textAnchor="end"
                    height={70}
                  />
                  <YAxis yAxisId="left" orientation="left" stroke="#4f46e5" label={{ value: 'Trend Score', angle: -90, position: 'insideLeft' }} />
                  <YAxis yAxisId="right" orientation="right" stroke="#2563eb" label={{ value: 'Potential Monthly Earnings ($)', angle: 90, position: 'insideRight' }} />
                  <Tooltip />
                  <Legend />
                  <Bar
                    yAxisId="left"
                    dataKey="trendScore"
                    fill="#4f46e5"
                    name="Trend Score"
                  />
                  <Line
                    yAxisId="right"
                    type="monotone"
                    dataKey="potentialEarnings"
                    stroke="#2563eb"
                    strokeWidth={2}
                    name="Potential Earnings"
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Market Opportunities Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {marketData?.map((market) => (
            <Card key={market.id} className="flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="text-lg">{market.name}</span>
                  <div className="flex items-center gap-2">
                    <Lightbulb className="w-5 h-5" />
                    <span className="text-sm font-normal">
                      Score: {market.trend_score}
                    </span>
                  </div>
                </CardTitle>
                <CardDescription className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4" />
                  {market.monthly_earnings_min && market.monthly_earnings_max ? (
                    <span>
                      ${market.monthly_earnings_min.toLocaleString()} - $
                      {market.monthly_earnings_max.toLocaleString()}/month
                    </span>
                  ) : (
                    "Earnings vary"
                  )}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Description</h4>
                    <p className="text-sm text-muted-foreground">
                      {market.description || "No description available"}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Required Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {market.skills?.map((skill: string, index: number) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-secondary text-secondary-foreground rounded-full text-xs"
                        >
                          {skill}
                        </span>
                      )) || "No specific skills listed"}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Time Commitment</h4>
                    <span className="text-sm text-muted-foreground">
                      {market.time_commitment || "Flexible"}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Difficulty Level</h4>
                    <span className="text-sm capitalize text-muted-foreground">
                      {market.difficulty || "Not specified"}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Markets;