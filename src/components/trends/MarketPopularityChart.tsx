import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Line, ComposedChart } from 'recharts';

interface MarketPopularityChartProps {
  platformData: Array<{
    name: string;
    score: number;
  }>;
}

export const MarketPopularityChart = ({ platformData }: MarketPopularityChartProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Market Popularity Trends</CardTitle>
        <CardDescription>Trend performance across different platforms</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={platformData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="score" fill="#3b82f6" />
              <Line type="monotone" dataKey="score" stroke="#10b981" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};