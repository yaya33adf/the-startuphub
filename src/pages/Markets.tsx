import { useQuery } from "@tanstack/react-query";
import { MarketSearch } from "@/components/search/MarketSearch";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChartLine, TrendingUp, DollarSign } from "lucide-react";
import { ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { supabase } from "@/integrations/supabase/client";

const Markets = () => {
  const { data: marketData, isLoading } = useQuery({
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
  };

  // Market-specific images
  const marketImages = {
    "solar energy": "https://images.unsplash.com/photo-1509391366360-2e959784a276",
    "electric vehicles": "https://images.unsplash.com/photo-1593941707882-a5bba14938c7",
    "artificial intelligence": "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    "blockchain": "https://images.unsplash.com/photo-1639762681485-074b7f938ba0",
    "machine learning": "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
    "cloud computing": "https://images.unsplash.com/photo-1544197150-b99a580bb7a8",
    "cybersecurity": "https://images.unsplash.com/photo-1496307653780-42ee777d4833",
    "renewable energy": "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e",
    "healthcare tech": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d",
    "sustainable agriculture": "https://images.unsplash.com/photo-1625246333195-78d9c38ad449",
    "default": "https://images.unsplash.com/photo-1524230572899-a752b3835840"
  };

  // Transform data for the chart
  const chartData = marketData?.map((market) => ({
    name: market.name,
    trendScore: market.trend_score,
    potentialEarnings: market.monthly_earnings_min && market.monthly_earnings_max
      ? (market.monthly_earnings_min + market.monthly_earnings_max) / 2
      : 0,
  }));

  // Sample emerging markets data
  const emergingMarkets = [
    {
      name: "Solar Energy",
      category: "Renewable Energy",
      trendScore: 95,
      description: "Residential and commercial solar installation and consulting",
      monthlyEarningsMin: 3000,
      monthlyEarningsMax: 15000,
    },
    {
      name: "Electric Vehicle Services",
      category: "Automotive",
      trendScore: 92,
      description: "EV charging station installation and maintenance",
      monthlyEarningsMin: 4000,
      monthlyEarningsMax: 12000,
    },
    {
      name: "Sustainable Agriculture",
      category: "Agriculture",
      trendScore: 88,
      description: "Urban farming and sustainable agriculture consulting",
      monthlyEarningsMin: 2000,
      monthlyEarningsMax: 8000,
    },
    {
      name: "Healthcare Tech",
      category: "Healthcare",
      trendScore: 90,
      description: "Telemedicine and digital health solutions",
      monthlyEarningsMin: 5000,
      monthlyEarningsMax: 20000,
    }
  ];

  return (
    <div className="container mx-auto p-8">
      <MarketSearch onSearch={handleSearch} />
      
      <div className="mt-8">
        {/* Emerging Markets Section */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          {emergingMarkets.map((market) => (
            <Card key={market.name} className="overflow-hidden">
              <img
                src={marketImages[market.name.toLowerCase() as keyof typeof marketImages] || marketImages.default}
                alt={market.name}
                className="h-48 w-full object-cover"
              />
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">{market.name}</CardTitle>
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <TrendingUp className="h-4 w-4" />
                    {market.trendScore}
                  </Badge>
                </div>
                <CardDescription className="mt-2">
                  {market.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <DollarSign className="h-4 w-4" />
                  <span>
                    ${market.monthlyEarningsMin.toLocaleString()} - ${market.monthlyEarningsMax.toLocaleString()}/month
                  </span>
                </div>
                <Badge variant="outline">{market.category}</Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Market Overview Chart */}
        {!isLoading && chartData && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ChartLine className="w-5 h-5" />
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
        )}
      </div>
    </div>
  );
};

export default Markets;