import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Button } from "@/components/ui/button";
import { Download, Trophy } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { cn } from "@/lib/utils";

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

  const getWinnerForPeriod = (period: typeof data[0]) => {
    const scores = [
      { name: 'Current Trend', score: period.current },
      { name: 'Competitor 1', score: period.competitor1 },
      { name: 'Competitor 2', score: period.competitor2 },
      { name: 'Competitor 3', score: period.competitor3 }
    ].filter(item => item.score !== undefined);

    return scores.reduce((max, current) => 
      current.score > max.score ? current : max
    );
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
      <CardContent className="space-y-6">
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

        {/* Numerical Comparison Table */}
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Period</TableHead>
              <TableHead>Current Trend</TableHead>
              <TableHead>Competitor 1</TableHead>
              <TableHead>Competitor 2</TableHead>
              <TableHead>Competitor 3</TableHead>
              <TableHead>Winner</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((period) => {
              const winner = getWinnerForPeriod(period);
              return (
                <TableRow key={period.date}>
                  <TableCell>{period.date}</TableCell>
                  <TableCell className={cn(
                    "font-medium",
                    winner.name === 'Current Trend' && "text-primary font-bold"
                  )}>
                    {period.current}
                    {winner.name === 'Current Trend' && (
                      <Trophy className="h-4 w-4 inline ml-2 text-yellow-500" />
                    )}
                  </TableCell>
                  <TableCell className={cn(
                    winner.name === 'Competitor 1' && "text-primary font-bold"
                  )}>
                    {period.competitor1}
                    {winner.name === 'Competitor 1' && (
                      <Trophy className="h-4 w-4 inline ml-2 text-yellow-500" />
                    )}
                  </TableCell>
                  <TableCell className={cn(
                    winner.name === 'Competitor 2' && "text-primary font-bold"
                  )}>
                    {period.competitor2}
                    {winner.name === 'Competitor 2' && (
                      <Trophy className="h-4 w-4 inline ml-2 text-yellow-500" />
                    )}
                  </TableCell>
                  <TableCell className={cn(
                    winner.name === 'Competitor 3' && "text-primary font-bold"
                  )}>
                    {period.competitor3}
                    {winner.name === 'Competitor 3' && (
                      <Trophy className="h-4 w-4 inline ml-2 text-yellow-500" />
                    )}
                  </TableCell>
                  <TableCell className="font-medium">
                    {winner.name}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};