import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, DollarSign } from "lucide-react";

interface Market {
  id: string;
  name: string;
  description?: string;
  trend_score: number;
  monthly_earnings_min?: number;
  monthly_earnings_max?: number;
}

interface MarketCardsProps {
  markets: Market[];
}

export const MarketCards = ({ markets }: MarketCardsProps) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {markets?.map((market) => (
        <Card key={market.id} className="flex flex-col">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span className="text-lg">{market.name}</span>
              <div className="flex items-center gap-2">
                <Lightbulb className="w-5 h-5" />
                <span className="text-sm font-normal">
                  Score: {market.trend_score}
                </span>
              </div>
            </CardTitle>
            <CardDescription className="flex items-center gap-2">
              <DollarSign className="w-4 h-4" />
              {market.monthly_earnings_min && market.monthly_earnings_max ? (
                <span>
                  ${market.monthly_earnings_min.toLocaleString()} - $
                  {market.monthly_earnings_max.toLocaleString()}/month
                </span>
              ) : (
                "Earnings vary"
              )}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              {market.description || "No description available"}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};