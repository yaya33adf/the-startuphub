import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

interface CompetitorAnalysisProps {
  data: Array<{
    date: string;
    current: number;
    competitor1?: number;
    competitor2?: number;
    competitor3?: number;
  }>;
}

export const CompetitorAnalysis = ({ data }: CompetitorAnalysisProps) => {
  const handleExport = () => {
    // TODO: Implement export functionality
    console.log("Exporting competitor analysis data...");
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Market Position Analysis</CardTitle>
          <CardDescription>Trend score comparison over time</CardDescription>
        </div>
        <Button onClick={handleExport} variant="outline" size="sm">
          <Download className="h-4 w-4 mr-2" />
          Export Data
        </Button>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis domain={[0, 100]} />
              <Tooltip />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="current" 
                stroke="#3b82f6" 
                name="Current Trend" 
                strokeWidth={2}
              />
              <Line 
                type="monotone" 
                dataKey="competitor1" 
                stroke="#6b7280" 
                name="Competitor 1" 
                strokeDasharray="5 5"
              />
              <Line 
                type="monotone" 
                dataKey="competitor2" 
                stroke="#9ca3af" 
                name="Competitor 2" 
                strokeDasharray="3 3"
              />
              <Line 
                type="monotone" 
                dataKey="competitor3" 
                stroke="#d1d5db" 
                name="Competitor 3" 
                strokeDasharray="1 1"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};