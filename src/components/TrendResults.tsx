import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TrendData } from "@/types/trends";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Line, ComposedChart, Scatter } from 'recharts';

interface TrendResultsProps {
  data: TrendData;
}

export const TrendResults = ({ data }: TrendResultsProps) => {
  const chartData = [
    { name: 'GitHub', score: data.metadata.github?.score || 0 },
    { name: 'Google', score: data.metadata.google_trends?.score || 0 },
    { name: 'Reddit', score: data.metadata.reddit?.score || 0 },
    { name: 'HN', score: data.metadata.hacker_news?.score || 0 },
    { name: 'Stack Overflow', score: data.metadata.stack_overflow?.score || 0 },
    { name: 'Wikipedia', score: data.metadata.wikipedia?.score || 0 },
    { name: 'NPM', score: data.metadata.npm?.score || 0 },
    { name: 'PyPI', score: data.metadata.pypi?.score || 0 },
  ];

  // Calculate future predictions
  const avgScore = chartData.reduce((acc, curr) => acc + curr.score, 0) / chartData.length;
  const predictedData = [
    { name: 'Prediction 1', score: avgScore * 1.1 },
    { name: 'Prediction 2', score: avgScore * 1.2 },
    { name: 'Prediction 3', score: avgScore * 1.3 },
  ];

  // Combine actual and predicted data
  const combinedData = [
    ...chartData,
    ...predictedData.map(item => ({
      ...item,
      isPrediction: true,
      actualScore: null,
      predictedScore: item.score
    }))
  ];

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Overall Trend Score</CardTitle>
          <CardDescription>Combined score across all platforms</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-4xl font-bold">{data.score}/100</div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Platform Breakdown</CardTitle>
          <CardDescription>Individual scores by platform with trend prediction</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={combinedData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis domain={[0, 100]} />
                <Tooltip />
                <Bar dataKey="score" fill="#3b82f6" />
                <Line
                  type="monotone"
                  dataKey="score"
                  stroke="#10b981"
                  strokeWidth={2}
                  dot={{ fill: '#10b981' }}
                  connectNulls
                />
                <Scatter
                  data={predictedData}
                  fill="#ef4444"
                  name="Predicted"
                  dataKey="score"
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};