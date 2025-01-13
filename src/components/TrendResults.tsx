import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TrendData } from "@/types/trends";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Line, ComposedChart } from 'recharts';

interface TrendResultsProps {
  data: TrendData;
}

export const TrendResults = ({ data }: TrendResultsProps) => {
  // Sort data by score to show platforms from highest to lowest impact
  const chartData = [
    { name: 'GitHub', score: data.metadata.github?.score || 0 },
    { name: 'Google', score: data.metadata.google_trends?.score || 0 },
    { name: 'Reddit', score: data.metadata.reddit?.score || 0 },
    { name: 'HN', score: data.metadata.hacker_news?.score || 0 },
    { name: 'Stack Overflow', score: data.metadata.stack_overflow?.score || 0 },
    { name: 'Wikipedia', score: data.metadata.wikipedia?.score || 0 },
    { name: 'NPM', score: data.metadata.npm?.score || 0 },
    { name: 'PyPI', score: data.metadata.pypi?.score || 0 },
  ].sort((a, b) => b.score - a.score);

  // Calculate trend indicators
  const avgScore = chartData.reduce((acc, curr) => acc + curr.score, 0) / chartData.length;
  const trendStrength = avgScore > 60 ? "Strong" : avgScore > 40 ? "Moderate" : "Weak";
  const trendDirection = avgScore > 50 ? "Positive" : "Needs More Research";

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Overall Trend Analysis</CardTitle>
          <CardDescription>Comprehensive trend evaluation across platforms</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-background rounded-lg border">
              <div className="text-sm text-muted-foreground">Overall Score</div>
              <div className="text-4xl font-bold">{data.score}/100</div>
            </div>
            <div className="p-4 bg-background rounded-lg border">
              <div className="text-sm text-muted-foreground">Trend Strength</div>
              <div className="text-2xl font-semibold">{trendStrength}</div>
            </div>
            <div className="p-4 bg-background rounded-lg border">
              <div className="text-sm text-muted-foreground">Recommendation</div>
              <div className="text-2xl font-semibold">{trendDirection}</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Platform Impact Analysis</CardTitle>
          <CardDescription>Breakdown of trend signals across different platforms</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="name" 
                  angle={-45}
                  textAnchor="end"
                  height={60}
                />
                <YAxis 
                  domain={[0, 100]}
                  label={{ 
                    value: 'Impact Score', 
                    angle: -90, 
                    position: 'insideLeft',
                    style: { textAnchor: 'middle' }
                  }}
                />
                <Tooltip 
                  formatter={(value: number) => [`${value}/100`, 'Impact Score']}
                  labelStyle={{ color: 'var(--foreground)' }}
                />
                <Bar 
                  dataKey="score" 
                  fill="#3b82f6"
                  name="Platform Impact"
                />
                <Line
                  type="monotone"
                  dataKey="score"
                  stroke="#10b981"
                  strokeWidth={2}
                  dot={{ fill: '#10b981' }}
                  name="Trend Line"
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 text-sm text-muted-foreground">
            <p>
              {trendStrength === "Strong" 
                ? "This trend shows significant momentum across multiple platforms, suggesting a robust market opportunity."
                : trendStrength === "Moderate"
                ? "The trend shows moderate potential, consider further research or niche targeting."
                : "Current signals suggest limited momentum, consider alternative opportunities or wait for stronger indicators."}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};