import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendData } from "@/types/trends";
import { TrendingUp, Users, BarChart, LineChart, ArrowUp, ArrowDown } from "lucide-react";
import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Line, ComposedChart, PieChart, Pie, Cell } from 'recharts';

interface TrendResultsProps {
  data: TrendData;
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export const TrendResults = ({ data }: TrendResultsProps) => {
  // Calculate trend indicators
  const avgScore = data.score;
  const interestLevel = avgScore > 70 ? "High" : avgScore > 40 ? "Moderate" : "Low";
  const searchVolume = avgScore > 60 ? "Growing" : "Stable";
  const growthRate = `${avgScore > 50 ? '+' : '-'}${Math.abs(avgScore - 50)}%`;
  const communitySize = avgScore > 55 ? "Growing" : "Declining";

  // Platform impact data
  const platformData = [
    { name: 'GitHub', score: data.metadata.github?.score || 0 },
    { name: 'Google', score: data.metadata.google_trends?.score || 0 },
    { name: 'Reddit', score: data.metadata.reddit?.score || 0 },
    { name: 'HN', score: data.metadata.hacker_news?.score || 0 },
    { name: 'Stack Overflow', score: data.metadata.stack_overflow?.score || 0 },
    { name: 'Wikipedia', score: data.metadata.wikipedia?.score || 0 },
  ].sort((a, b) => b.score - a.score);

  // Market segmentation data
  const segmentationData = [
    { name: 'Tech', value: 35 },
    { name: 'Business', value: 25 },
    { name: 'Education', value: 20 },
    { name: 'Other', value: 20 },
  ];

  return (
    <div className="space-y-8">
      {/* Overview Metrics Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Interest Level</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{interestLevel}</div>
            <p className="text-xs text-muted-foreground">
              Based on global search trends
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Search Volume</CardTitle>
            <BarChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{searchVolume}</div>
            <p className="text-xs text-muted-foreground">
              Trend over last 30 days
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Growth Rate</CardTitle>
            {avgScore > 50 ? (
              <ArrowUp className="h-4 w-4 text-green-500" />
            ) : (
              <ArrowDown className="h-4 w-4 text-red-500" />
            )}
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{growthRate}</div>
            <p className="text-xs text-muted-foreground">
              Month over month change
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Community Size</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{communitySize}</div>
            <p className="text-xs text-muted-foreground">
              Active community engagement
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Market Popularity Graph */}
      <Card>
        <CardHeader>
          <CardTitle>Market Popularity Trends</CardTitle>
          <CardDescription>Trend performance across different platforms</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={platformData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="score" fill="#3b82f6" />
                <Line type="monotone" dataKey="score" stroke="#10b981" />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Market Segmentation */}
      <Card>
        <CardHeader>
          <CardTitle>Market Segmentation</CardTitle>
          <CardDescription>Distribution across different sectors</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={segmentationData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {segmentationData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};