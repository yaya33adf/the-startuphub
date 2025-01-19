import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
  BarChart3,
  AlertCircle
} from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

export const SalesAnalytics = () => {
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
      icon: DollarSign,
      insight: "Sales are growing steadily. Consider increasing inventory for top-selling items."
    },
    {
      title: "Average Order",
      value: "$85.50",
      trend: "up",
      percentage: "+5.2%",
      icon: BarChart3,
      insight: "Higher average orders suggest successful upselling. Continue bundle promotions."
    },
    {
      title: "Conversion Rate",
      value: "3.2%",
      trend: "down",
      percentage: "-0.8%",
      icon: TrendingDown,
      insight: "Declining conversions - review your checkout process and consider A/B testing."
    }
  ];

  // Helper function to get insights based on timeframe
  const getTimeframeInsights = () => {
    switch(timeframe) {
      case 'daily':
        return "Daily view helps identify peak sales hours and staff accordingly. Your best performing day is Monday - consider running promotions on slower days.";
      case 'weekly':
        return "Weekly trends show consistent performance. Week 1 had highest sales - analyze what marketing campaigns were active then.";
      case 'monthly':
        return "Monthly view reveals seasonal patterns. April shows strongest performance - plan inventory and promotions for similar peak seasons.";
    }
  };

  return (
    <div className="w-full space-y-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">How to Use This Tool</h2>
        <p className="text-muted-foreground mb-4">
          This analytics dashboard helps you make data-driven decisions for your business. 
          Track sales performance, identify trends, and get actionable insights to grow your revenue.
        </p>
        <Alert>
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            Pro tip: Switch between timeframes to identify patterns and optimize your business strategy.
          </AlertDescription>
        </Alert>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {metrics.map((metric) => (
          <Card key={metric.title} className="w-full">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-2">
                <div>
                  <p className="text-2xl font-bold">{metric.value}</p>
                  <div className="flex items-center mt-1">
                    {metric.trend === 'up' ? (
                      <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                    ) : (
                      <TrendingDown className="h-4 w-4 text-red-500 mr-1" />
                    )}
                    <span className={metric.trend === 'up' ? 'text-green-500' : 'text-red-500'}>
                      {metric.percentage}
                    </span>
                  </div>
                </div>
                <metric.icon className="h-8 w-8 text-primary opacity-75" />
              </div>
              <p className="text-sm text-muted-foreground">{metric.insight}</p>
            </CardContent>
          </Card>
        ))}
      </div>

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

      <Card className="w-full">
        <CardHeader>
          <CardTitle>Sales & Profit Analysis</CardTitle>
          <p className="text-sm text-muted-foreground">{getTimeframeInsights()}</p>
        </CardHeader>
        <CardContent className="p-6">
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

      <Card>
        <CardHeader>
          <CardTitle>Recommended Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-4 space-y-2">
            <li>Review your pricing strategy during peak sales periods (Mondays and early week)</li>
            <li>Investigate the successful factors behind Week 1's performance</li>
            <li>Plan marketing campaigns for lower-performing periods</li>
            <li>Set up inventory alerts based on sales patterns</li>
            <li>Consider customer loyalty programs to improve conversion rates</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};