import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { PageSEO } from "@/components/seo/PageSEO";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Globe, TrendingUp, ChartBar, Lightbulb, DollarSign, Search } from "lucide-react";
import { SearchBar } from "@/components/community/SearchBar";
import { LocationPeriodSelect } from "@/components/search/LocationPeriodSelect";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";

const Markets = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [country, setCountry] = useState("global");
  const [period, setPeriod] = useState("7d");

  const { data: marketData, isLoading, error, refetch } = useQuery({
    queryKey: ["marketOpportunities", searchQuery, country, period],
    queryFn: async () => {
      console.log("Fetching market opportunities with filters:", { searchQuery, country, period });
      const query = supabase
        .from("side_hustles")
        .select("*")
        .order("trend_score", { ascending: false });

      if (searchQuery) {
        query.ilike("name", `%${searchQuery}%`);
      }

      const { data, error } = await query.limit(10);

      if (error) {
        console.error("Error fetching market data:", error);
        toast({
          title: "Error",
          description: "Failed to fetch market data. Please try again.",
          variant: "destructive",
        });
        throw error;
      }
      
      console.log("Fetched market opportunities:", data);
      return data;
    },
  });

  const handleSearch = () => {
    console.log("Triggering search with:", { searchQuery, country, period });
    refetch();
  };

  // Handle loading state
  if (isLoading) {
    return (
      <div className="p-8">
        <div className="flex flex-col gap-4 mb-8">
          <div className="flex gap-4">
            <SearchBar searchQuery={searchQuery} onSearchChange={setSearchQuery} />
            <Button onClick={handleSearch}>
              <Search className="w-4 h-4 mr-2" />
              Search
            </Button>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <LocationPeriodSelect
              country={country}
              setCountry={setCountry}
              period={period}
              setPeriod={setPeriod}
            />
          </div>
        </div>
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
        <div className="flex flex-col gap-4 mb-8">
          <div className="flex gap-4">
            <SearchBar searchQuery={searchQuery} onSearchChange={setSearchQuery} />
            <Button onClick={handleSearch}>
              <Search className="w-4 h-4 mr-2" />
              Search
            </Button>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <LocationPeriodSelect
              country={country}
              setCountry={setCountry}
              period={period}
              setPeriod={setPeriod}
            />
          </div>
        </div>
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
        
        {/* Search and Filter Section */}
        <div className="flex flex-col gap-4 mb-8">
          <div className="flex gap-4">
            <SearchBar searchQuery={searchQuery} onSearchChange={setSearchQuery} />
            <Button onClick={handleSearch}>
              <Search className="w-4 h-4 mr-2" />
              Search
            </Button>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <LocationPeriodSelect
              country={country}
              setCountry={setCountry}
              period={period}
              setPeriod={setPeriod}
            />
          </div>
        </div>

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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
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