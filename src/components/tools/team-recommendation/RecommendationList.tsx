import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RecommendationCard } from "./RecommendationCard";
import { TeamRecommendation } from "./types";

interface RecommendationListProps {
  recommendations: TeamRecommendation[];
}

export const RecommendationList = ({ recommendations }: RecommendationListProps) => {
  if (recommendations.length === 0) return null;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Team Recommendations</CardTitle>
        <CardDescription>Based on your project requirements</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recommendations.map((rec) => (
            <RecommendationCard
              key={rec.id}
              id={rec.id}
              project_name={rec.project_name}
              project_description={rec.project_description}
              recommended_roles={rec.recommended_roles}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};