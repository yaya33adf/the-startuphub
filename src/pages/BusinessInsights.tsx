import { useState } from "react";
import { TrendSearch } from "@/components/TrendSearch";
import { TrendResults } from "@/components/TrendResults";
import type { TrendData } from "@/types/trends";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MarketSearch } from "@/components/search/MarketSearch";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Globe, TrendingUp, ChartBar, Lightbulb, DollarSign, Trophy, Clock, Briefcase } from "lucide-react";

const BusinessInsights = () => {
  const [searchResults, setSearchResults] = useState<TrendData | null>(null);

  const { data: marketData, isLoading: marketsLoading } = useQuery({
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

  const { data: trendScores, isLoading: trendsLoading } = useQuery({
    queryKey: ["trendScores"],
    queryFn: async () => {
      console.log("Fetching trend scores...");
      const { data, error } = await supabase
        .from("trend_scores")
        .select("*")
        .order("total_score", { ascending: false })
        .limit(6);

      if (error) {
        console.error("Error fetching trend scores:", error);
        throw error;
      }
      
      console.log("Fetched trend scores:", data);
      return data;
    },
  });

  const { data: sideHustles, isLoading: sideHustlesLoading } = useQuery({
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
      return data;
    },
  });

  const handleSearchResults = (results: TrendData) => {
    setSearchResults(results);
    console.log("Search results received:", results);
  };

  const handleMarketSearch = async (query: string, region: string, timeframe: string) => {
    console.log("Searching markets with:", { query, region, timeframe });
  };

  const marketImages = {
    "artificial intelligence": "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
    "blockchain": "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    "machine learning": "https://images.unsplash.com/photo-1500673922987-e212871fec22",
    "cloud computing": "https://images.unsplash.com/photo-1439337153520-7082a56a81f4",
    "cybersecurity": "https://images.unsplash.com/photo-1496307653780-42ee777d4833",
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

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Business Intelligence Hub</h1>
      
      <Tabs defaultValue="trends" className="space-y-8">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="trends" className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4" />
            Market Trends
          </TabsTrigger>
          <TabsTrigger value="markets" className="flex items-center gap-2">
            <Globe className="w-4 h-4" />
            Market Analysis
          </TabsTrigger>
          <TabsTrigger value="sidehustles" className="flex items-center gap-2">
            <Briefcase className="w-4 h-4" />
            Side Hustles
          </TabsTrigger>
        </TabsList>

        <TabsContent value="trends" className="space-y-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
            {trendsLoading ? (
              Array(6).fill(0).map((_, i) => (
                <Card key={i} className="overflow-hidden">
                  <div className="h-48 bg-gray-200 animate-pulse" />
                  <CardHeader>
                    <div className="h-6 bg-gray-200 rounded animate-pulse w-3/4 mb-2" />
                    <div className="h-4 bg-gray-200 rounded animate-pulse w-1/2" />
                  </CardHeader>
                </Card>
              ))
            ) : (
              trendScores?.map((trend) => (
                <Card key={trend.id} className="overflow-hidden">
                  <img
                    src={marketImages[trend.query.toLowerCase() as keyof typeof marketImages] || marketImages.default}
                    alt={trend.query}
                    className="h-48 w-full object-cover"
                  />
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span className="capitalize">{trend.query}</span>
                      <Badge variant="secondary" className="flex items-center gap-1">
                        <TrendingUp className="h-4 w-4" />
                        {trend.total_score}
                      </Badge>
                    </CardTitle>
                    <CardDescription>
                      Trend score based on multiple data sources including Google Trends, GitHub, and Reddit
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))
            )}
          </div>
          
          <TrendSearch onSearchResults={handleSearchResults} />
          {searchResults && <TrendResults data={searchResults} />}
        </TabsContent>

        <TabsContent value="markets" className="space-y-8">
          <MarketSearch onSearch={handleMarketSearch} />
          
          {marketsLoading ? (
            <Card>
              <CardHeader>
                <div className="h-6 bg-gray-200 rounded animate-pulse w-1/3"></div>
              </CardHeader>
              <CardContent>
                <div className="h-[400px] bg-gray-100 rounded animate-pulse"></div>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-6">
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
            </div>
          )}
        </TabsContent>

        <TabsContent value="sidehustles" className="space-y-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
              <Briefcase className="h-8 w-8" />
              Top Side Hustles
            </h2>
            <p className="text-muted-foreground">
              Discover trending opportunities to earn extra income, ranked by market demand and growth potential
            </p>
          </div>

          {sideHustlesLoading ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[...Array(6)].map((_, i) => (
                <Card key={i} className="w-full">
                  <CardHeader>
                    <div className="h-6 bg-gray-200 rounded animate-pulse w-1/3"></div>
                  </CardHeader>
                  <CardContent>
                    <div className="h-4 bg-gray-100 rounded animate-pulse w-full mb-2"></div>
                    <div className="h-4 bg-gray-100 rounded animate-pulse w-2/3"></div>
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
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default BusinessInsights;
