import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface SentimentAnalysisProps {
  data: Array<{
    date: string;
    positive: number;
    neutral: number;
    negative: number;
  }>;
}

export const SentimentAnalysis = ({ data }: SentimentAnalysisProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Market Sentiment Analysis</CardTitle>
        <CardDescription>Sentiment trends over time</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="positive" stroke="#10b981" name="Positive" />
              <Line type="monotone" dataKey="neutral" stroke="#6b7280" name="Neutral" />
              <Line type="monotone" dataKey="negative" stroke="#ef4444" name="Negative" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};