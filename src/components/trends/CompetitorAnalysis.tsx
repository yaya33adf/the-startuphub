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
      { name: 'Your Search', score: period.current },
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
    'Your Search': '#3b82f6', // Blue for current trend
    [competitors[0]]: '#ef4444', // Red
    [competitors[1]]: '#10b981', // Green
    [competitors[2]]: '#f59e0b'  // Yellow
  };

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 rounded-lg shadow border">
          <p className="font-semibold mb-2">{label}</p>
          <div className="space-y-1">
            {payload.map((entry: any) => (
              <div key={entry.name} className="flex items-center gap-2">
                <div 
                  className="w-3 h-3 rounded-full" 
                  style={{ backgroundColor: entry.color }}
                />
                <span>{entry.name}: {entry.value}</span>
              </div>
            ))}
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Trend Score Comparison</CardTitle>
          <CardDescription>
            Compare your search trend with competitors over time (0-100 scale)
          </CardDescription>
        </div>
        <Button onClick={handleExport} variant="outline" size="sm">
          <Download className="h-4 w-4 mr-2" />
          Export Data
        </Button>
      </CardHeader>
      <CardContent className="space-y-8">
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 5, right: 5, bottom: 5, left: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="date" 
                label={{ 
                  value: 'Time Period', 
                  position: 'bottom',
                  offset: -5
                }}
              />
              <YAxis 
                domain={[0, 100]}
                label={{ 
                  value: 'Trend Score', 
                  angle: -90, 
                  position: 'left',
                  offset: -5
                }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend verticalAlign="bottom" height={36} />
              <Line 
                type="monotone" 
                dataKey="current" 
                stroke={competitorColors['Your Search']}
                name="Your Search" 
                strokeWidth={3}
                dot={{ strokeWidth: 2 }}
              />
              {competitors.map((competitor, index) => (
                <Line 
                  key={competitor}
                  type="monotone" 
                  dataKey={competitor}
                  stroke={competitorColors[competitor]}
                  name={competitor}
                  strokeWidth={2}
                  strokeDasharray={`${(index + 1) * 3} ${(index + 1) * 3}`}
                  dot={{ strokeWidth: 2 }}
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="space-y-4">
          <h4 className="font-medium text-lg">Score Comparison Table</h4>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Period</TableHead>
                <TableHead>Your Search</TableHead>
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
                    <TableCell className="font-medium">{period.date}</TableCell>
                    <TableCell className={cn(
                      winner.name === 'Your Search' && "text-primary font-bold"
                    )}>
                      {period.current}
                      {winner.name === 'Your Search' && (
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
        </div>
      </CardContent>
    </Card>
  );
};