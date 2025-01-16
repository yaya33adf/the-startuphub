import { useQuery } from "@tanstack/react-query";
import { MarketSearch } from "@/components/search/MarketSearch";
import { supabase } from "@/integrations/supabase/client";
import { PageSEO } from "@/components/seo/PageSEO";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Globe, TrendingUp, ChartBar, Lightbulb, DollarSign } from "lucide-react";

const Markets = () => {
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

  const handleSearch = async (query: string, region: string, timeframe: string) => {
    console.log("Searching markets with:", { query, region, timeframe });
    // Implement search logic here
  };

  // Handle loading state
  if (isLoading) {
    return (
      <div className="p-8">
        <MarketSearch onSearch={handleSearch} />
        <div className="mt-8 space-y-4">
          <Card>
            <CardHeader>
              <div className="h-6 bg-gray-200 rounded animate-pulse w-1/3"></div>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] bg-gray-100 rounded animate-pulse"></div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // Handle error state
  if (error) {
    return (
      <div className="p-8">
        <MarketSearch onSearch={handleSearch} />
        <Card className="mt-8 bg-red-50">
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
    <>
      <PageSEO 
        title="Market Analysis & Opportunities"
        description="Analyze market trends, discover growth opportunities, and make data-driven decisions with our comprehensive market analysis tools."
      />
      <div className="p-8">
        <h1 className="text-4xl font-bold mb-6">Market Analysis Dashboard</h1>
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
                  <YAxis yAxisId="left" orientation="left" stroke="#4f46e5" />
                  <YAxis yAxisId="right" orientation="right" stroke="#2563eb" />
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
                    name="Potential Earnings"
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Market Cards */}
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
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {market.description || "No description available"}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default Markets;
