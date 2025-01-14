import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Progress } from "@/components/ui/progress";

interface PredictiveAnalysisProps {
  data: Array<{
    date: string;
    actual: number;
    predicted: number;
  }>;
  confidenceScore: number;
}

export const PredictiveAnalysis = ({ data, confidenceScore }: PredictiveAnalysisProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Predictive Analysis</CardTitle>
        <CardDescription>Future trend predictions</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="actual" stroke="#3b82f6" name="Historical Data" />
              <Line type="monotone" dataKey="predicted" strokeDasharray="5 5" stroke="#10b981" name="Prediction" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Prediction Confidence</span>
            <span>{confidenceScore}%</span>
          </div>
          <Progress value={confidenceScore} className="h-2" />
        </div>
      </CardContent>
    </Card>
  );
};