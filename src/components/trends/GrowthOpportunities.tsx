import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, TrendingUp } from "lucide-react";

interface Recommendation {
  title: string;
  description: string;
}

interface GrowthOpportunitiesProps {
  insights: string[];
  recommendations: Recommendation[];
}

export const GrowthOpportunities = ({ insights, recommendations }: GrowthOpportunitiesProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Growth Opportunities</CardTitle>
        <CardDescription>Key insights and recommendations</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="font-semibold flex items-center mb-3">
            <TrendingUp className="h-4 w-4 mr-2" />
            Key Insights
          </h3>
          <ul className="space-y-2">
            {insights.map((insight, index) => (
              <li key={index} className="text-sm text-muted-foreground">
                • {insight}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold flex items-center mb-3">
            <Check className="h-4 w-4 mr-2" />
            Recommendations
          </h3>
          <ul className="space-y-4">
            {recommendations.map((rec, index) => (
              <li key={index} className="space-y-1">
                <p className="font-medium text-sm">{rec.title}</p>
                <p className="text-sm text-muted-foreground">{rec.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};