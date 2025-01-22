import { Link } from "react-router-dom";
import { Check, X } from "lucide-react";
import { roadmaps } from "@/data/roadmapData";

interface JobListProps {
  roles: string[];
}

export const JobList = ({ roles }: JobListProps) => {
  const getJobSlug = (role: string) => {
    const slug = role.toLowerCase().replace(/\s+/g, '-');
    console.log(`Converting role "${role}" to slug "${slug}"`); // Debug log
    return slug;
  };

  const hasRoadmap = (role: string) => {
    const slug = getJobSlug(role);
    console.log("Checking roadmap for slug:", slug); // Debug log
    console.log("Available roadmaps:", Object.keys(roadmaps)); // Debug log
    const exists = !!roadmaps[slug];
    console.log("Roadmap exists:", exists); // Debug log
    return exists;
  };

  return (
    <ul className="space-y-2">
      {roles.map((role, roleIndex) => {
        const slug = getJobSlug(role);
        console.log(`Processing role: ${role}, Generated slug: ${slug}`); // Debug log
        return (
          <li key={roleIndex} className="flex items-center justify-between">
            <Link
              to={`/roadmap/${slug}`}
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
        );
      })}
    </ul>
  );
};