import { Link } from "react-router-dom";

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

  return (
    <ul className="space-y-2">
      {roles.map((role, roleIndex) => (
        <li key={roleIndex}>
          <Link
            to={`/roadmap/${getJobSlug(role)}`}
            className="text-sm text-muted-foreground hover:text-primary transition-colors hover:underline"
          >
            {role}
          </Link>
        </li>
      ))}
    </ul>
  );
};