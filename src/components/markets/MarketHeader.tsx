import { TrendingUp } from "lucide-react";

export const MarketHeader = () => {
  return (
    <div className="flex items-center gap-3 mb-8">
      <TrendingUp className="h-8 w-8 text-primary" />
      <div>
        <h1 className="text-3xl font-bold">Market Trend Analysis</h1>
        <p className="text-muted-foreground mt-1">
          Analyze market trends and opportunities across different platforms
        </p>
      </div>
    </div>
  );
};