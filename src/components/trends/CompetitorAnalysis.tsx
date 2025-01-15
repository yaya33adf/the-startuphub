import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { cn } from "@/lib/utils";

interface CompetitorAnalysisProps {
  data: Array<{
    date: string;
    current: number;
    [key: string]: number | string;
  }>;
  competitors: string[];
}

const COLORS = ['#0EA5E9', '#9333EA', '#10B981', '#F59E0B'];

export const CompetitorAnalysis = ({ data, competitors }: CompetitorAnalysisProps) => {
  const handleExportData = () => {
    const csvContent = [
      ['Period', 'Your Search', ...competitors],
      ...data.map(period => [
        period.date,
        period.current,
        ...competitors.map(competitor => period[competitor])
      ])
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'competitor-analysis.csv';
    link.click();
  };

  const getWinnerForPeriod = (period: typeof data[0]) => {
    const scores = {
      'Your Search': period.current,
      ...Object.fromEntries(
        competitors.map(competitor => [competitor, period[competitor]])
      )
    };
    const winner = Object.entries(scores).reduce((a, b) => a[1] > b[1] ? a : b);
    return { name: winner[0], score: winner[1] };
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
        <h3 className="font-semibold">Trend Score Comparison</h3>
        <Button 
          variant="outline" 
          size="sm"
          onClick={handleExportData}
          className="hidden sm:flex"
        >
          <Download className="w-4 h-4 mr-2" />
          Export Data
        </Button>
      </CardHeader>
      <CardContent className="space-y-8">
        <div className="h-[300px] sm:h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart 
              data={data}
              margin={{ 
                top: 5, 
                right: 5, 
                bottom: 30,
                left: 0
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="date" 
                label={{ 
                  value: 'Time Period', 
                  position: 'bottom',
                  offset: 20
                }}
                tick={{ fontSize: 12 }}
              />
              <YAxis 
                domain={[0, 100]}
                label={{ 
                  value: 'Trend Score', 
                  angle: -90, 
                  position: 'insideLeft',
                  offset: 10
                }}
                tick={{ fontSize: 12 }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend 
                verticalAlign="bottom" 
                height={36}
                wrapperStyle={{ paddingTop: '20px' }}
              />
              <Line 
                type="monotone" 
                dataKey="current" 
                name="Your Search"
                stroke={COLORS[0]}
                strokeWidth={3}
                dot={{ strokeWidth: 2 }}
              />
              {competitors.map((competitor, index) => (
                <Line
                  key={competitor}
                  type="monotone"
                  dataKey={competitor}
                  name={competitor}
                  stroke={COLORS[index + 1]}
                  strokeWidth={2}
                  dot={{ strokeWidth: 2 }}
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="space-y-4 overflow-x-auto">
          <h4 className="font-medium text-lg">Score Comparison Table</h4>
          <div className="min-w-[600px]">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Period</TableHead>
                  <TableHead>Your Search</TableHead>
                  {competitors.map((competitor) => (
                    <TableHead key={competitor}>{competitor}</TableHead>
                  ))}
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
                      </TableCell>
                      {competitors.map((competitor) => (
                        <TableCell 
                          key={competitor}
                          className={cn(
                            winner.name === competitor && "text-primary font-bold"
                          )}
                        >
                          {period[competitor]}
                        </TableCell>
                      ))}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
          <Button 
            variant="outline" 
            size="sm"
            onClick={handleExportData}
            className="w-full sm:hidden mt-4"
          >
            <Download className="w-4 h-4 mr-2" />
            Export Data
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};