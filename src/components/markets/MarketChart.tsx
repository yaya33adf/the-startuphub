import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { TrendingUp } from "lucide-react";

interface MarketChartProps {
  data: any[];
}

export const MarketChart = ({ data }: MarketChartProps) => {
  return (
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
            <ComposedChart data={data}>
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
  );
};