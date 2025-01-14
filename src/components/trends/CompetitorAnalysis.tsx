import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

interface CompetitorAnalysisProps {
  data: Array<{
    date: string;
    current: number;
    competitor1: number;
    competitor2: number;
  }>;
}

export const CompetitorAnalysis = ({ data }: CompetitorAnalysisProps) => {
  const handleExport = () => {
    // TODO: Implement export functionality
    console.log("Exporting data...");
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Competitor Analysis</CardTitle>
          <CardDescription>Market share comparison</CardDescription>
        </div>
        <Button onClick={handleExport} variant="outline" size="sm">
          <Download className="h-4 w-4 mr-2" />
          Export
        </Button>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="current" stroke="#3b82f6" name="Current Trend" />
              <Line type="monotone" dataKey="competitor1" stroke="#6b7280" name="Competitor 1" />
              <Line type="monotone" dataKey="competitor2" stroke="#9ca3af" name="Competitor 2" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};