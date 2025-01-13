import { useQuery } from "@tanstack/react-query";
import { Globe, TrendingUp, ChartBar } from "lucide-react";
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
  // Fetch trend scores data
  const { data: trendScores, isLoading } = useQuery({
    queryKey: ["trendScores"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("trend_scores")
        .select("*")
        .order("total_score", { ascending: false })
        .limit(10);

      if (error) throw error;
      console.log("Fetched trend scores:", data);
      return data;
    },
  });

  if (isLoading) {
    return (
      <div className="p-8">
        <div className="flex items-center space-x-2">
          <Globe className="w-6 h-6" />
          <h1 className="text-2xl font-bold">Markets</h1>
        </div>
        <div className="mt-4">Loading market data...</div>
      </div>
    );
  }

  // Transform data for the chart
  const chartData = trendScores?.map((score) => ({
    name: score.query,
    totalScore: score.total_score,
    githubScore: score.github_score,
    googleScore: score.google_trends_score,
    wikipediaScore: score.wikipedia_score,
  }));

  return (
    <div className="p-8">
      <div className="flex items-center space-x-2 mb-6">
        <Globe className="w-6 h-6" />
        <h1 className="text-2xl font-bold">Markets</h1>
      </div>

      <div className="grid gap-6">
        {/* Trend Overview Chart */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Market Trends Overview
            </CardTitle>
            <CardDescription>
              Top 10 markets by trend score analysis
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
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar
                    dataKey="totalScore"
                    fill="#4f46e5"
                    name="Total Score"
                  />
                  <Line
                    type="monotone"
                    dataKey="totalScore"
                    stroke="#2563eb"
                    strokeWidth={2}
                    dot={false}
                    name="Trend Line"
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Market Details */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trendScores?.map((market) => (
            <Card key={market.id}>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="text-lg">{market.query}</span>
                  <ChartBar className="w-5 h-5" />
                </CardTitle>
                <CardDescription>
                  Trend Score: {market.total_score}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>GitHub Activity:</span>
                    <span>{market.github_score}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Google Trends:</span>
                    <span>{market.google_trends_score}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Wikipedia Interest:</span>
                    <span>{market.wikipedia_score}</span>
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