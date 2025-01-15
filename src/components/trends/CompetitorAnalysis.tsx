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
    [key: string]: number | string; // Allow dynamic competitor names
  }>;
  competitors: string[];
}

export const CompetitorAnalysis = ({ data, competitors }: CompetitorAnalysisProps) => {
  const handleExport = () => {
    // TODO: Implement export functionality
    console.log("Exporting competitor analysis data...");
  };

  const getWinnerForPeriod = (period: typeof data[0]) => {
    const scores = [
      { name: 'Current Trend', score: period.current },
      ...competitors.map(competitor => ({
        name: competitor,
        score: period[competitor] as number
      }))
    ].filter(item => item.score !== undefined);

    return scores.reduce((max, current) => 
      current.score > max.score ? current : max
    );
  };

  // Generate unique colors for each competitor
  const competitorColors = {
    'Current Trend': '#3b82f6',
    [competitors[0]]: '#6b7280',
    [competitors[1]]: '#9ca3af',
    [competitors[2]]: '#d1d5db'
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
                stroke={competitorColors['Current Trend']}
                name="Current Trend" 
                strokeWidth={2}
              />
              {competitors.map((competitor, index) => (
                <Line 
                  key={competitor}
                  type="monotone" 
                  dataKey={competitor}
                  stroke={competitorColors[competitor]}
                  name={competitor}
                  strokeDasharray={`${(index + 1) * 2} ${(index + 1) * 2}`}
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Numerical Comparison Table */}
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Period</TableHead>
              <TableHead>Current Trend</TableHead>
              {competitors.map((competitor) => (
                <TableHead key={competitor}>{competitor}</TableHead>
              ))}
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
                  {competitors.map((competitor) => (
                    <TableCell 
                      key={competitor}
                      className={cn(
                        winner.name === competitor && "text-primary font-bold"
                      )}
                    >
                      {period[competitor]}
                      {winner.name === competitor && (
                        <Trophy className="h-4 w-4 inline ml-2 text-yellow-500" />
                      )}
                    </TableCell>
                  ))}
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