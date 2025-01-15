import { Card } from "@/components/ui/card";
import { TeamRole } from "./types";

interface RecommendationCardProps {
  id: string;
  project_name: string;
  project_description: string;
  recommended_roles: TeamRole[];
}

export const RecommendationCard = ({
  id,
  project_name,
  project_description,
  recommended_roles,
}: RecommendationCardProps) => (
  <Card key={id} className="p-4">
    <h3 className="font-semibold text-lg mb-2">{project_name}</h3>
    <p className="text-sm text-muted-foreground mb-4">
      {project_description}
    </p>
    <div className="grid gap-2">
      {recommended_roles.map((role, index) => (
        <div
          key={index}
          className="flex justify-between items-center p-2 bg-secondary/50 rounded-md"
        >
          <span>{role.role}</span>
          <span className="text-sm text-muted-foreground">
            × {role.count}
          </span>
        </div>
      ))}
    </div>
  </Card>
);