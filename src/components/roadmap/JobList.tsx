import { Link } from "react-router-dom";
import { Check, X } from "lucide-react";
import { roadmaps } from "@/data/roadmapData";

interface JobListProps {
  roles: string[];
}

export const JobList = ({ roles }: JobListProps) => {
  const getJobSlug = (role: string) => {
    return role
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-');
  };

  const hasRoadmap = (role: string) => {
    const slug = getJobSlug(role);
    return !!roadmaps[slug];
  };

  return (
    <ul className="space-y-2">
      {roles.map((role, roleIndex) => (
        <li key={roleIndex} className="flex items-center justify-between">
          <Link
            to={`/roadmap/${getJobSlug(role)}`}
            className="text-sm text-muted-foreground hover:text-primary transition-colors hover:underline"
          >
            {role}
          </Link>
          {hasRoadmap(role) ? (
            <Check className="h-4 w-4 text-green-500" />
          ) : (
            <X className="h-4 w-4 text-red-500" />
          )}
        </li>
      ))}
    </ul>
  );
};