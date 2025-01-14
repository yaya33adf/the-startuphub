import { Card, CardContent } from "@/components/ui/card";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Line,
  ComposedChart,
  Legend
} from 'recharts';
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  BarChart3 
} from "lucide-react";

export const SalesAnalytics = () => {
  // Sample data - in a real app, this would come from your backend
  const [timeframe, setTimeframe] = useState<'daily' | 'weekly' | 'monthly'>('daily');
  
  const data = {
    daily: [
      { name: 'Mon', sales: 4000, profit: 2400 },
      { name: 'Tue', sales: 3000, profit: 1398 },
      { name: 'Wed', sales: 2000, profit: 9800 },
      { name: 'Thu', sales: 2780, profit: 3908 },
      { name: 'Fri', sales: 1890, profit: 4800 },
      { name: 'Sat', sales: 2390, profit: 3800 },
      { name: 'Sun', sales: 3490, profit: 4300 },
    ],
    weekly: [
      { name: 'Week 1', sales: 24000, profit: 12000 },
      { name: 'Week 2', sales: 21000, profit: 10000 },
      { name: 'Week 3', sales: 19000, profit: 9500 },
      { name: 'Week 4', sales: 22000, profit: 11000 },
    ],
    monthly: [
      { name: 'Jan', sales: 95000, profit: 47000 },
      { name: 'Feb', sales: 88000, profit: 43000 },
      { name: 'Mar', sales: 92000, profit: 45000 },
      { name: 'Apr', sales: 98000, profit: 48000 },
    ],
  };

  const metrics = [
    {
      title: "Total Sales",
      value: "$12,345",
      trend: "up",
      percentage: "+12.5%",
      icon: DollarSign
    },
    {
      title: "Average Order",
      value: "$85.50",
      trend: "up",
      percentage: "+5.2%",
      icon: BarChart3
    },
    {
      title: "Conversion Rate",
      value: "3.2%",
      trend: "down",
      percentage: "-0.8%",
      icon: TrendingDown
    }
  ];

  return (
    <div className="space-y-6 p-4">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {metrics.map((metric) => (
          <Card key={metric.title}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{metric.title}</p>
                  <p className="text-2xl font-bold">{metric.value}</p>
                </div>
                <metric.icon className="h-8 w-8 text-primary opacity-75" />
              </div>
              <div className="mt-2 flex items-center">
                {metric.trend === 'up' ? (
                  <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                ) : (
                  <TrendingDown className="h-4 w-4 text-red-500 mr-1" />
                )}
                <span className={metric.trend === 'up' ? 'text-green-500' : 'text-red-500'}>
                  {metric.percentage}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Time Frame Selector */}
      <div className="flex gap-2">
        <Button 
          variant={timeframe === 'daily' ? 'default' : 'outline'}
          onClick={() => setTimeframe('daily')}
        >
          Daily
        </Button>
        <Button 
          variant={timeframe === 'weekly' ? 'default' : 'outline'}
          onClick={() => setTimeframe('weekly')}
        >
          Weekly
        </Button>
        <Button 
          variant={timeframe === 'monthly' ? 'default' : 'outline'}
          onClick={() => setTimeframe('monthly')}
        >
          Monthly
        </Button>
      </div>

      {/* Sales Chart */}
      <Card>
        <CardContent className="p-4">
          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={data[timeframe]}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="sales" fill="#3b82f6" name="Sales" />
                <Line 
                  type="monotone" 
                  dataKey="profit" 
                  stroke="#10b981" 
                  name="Profit"
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};