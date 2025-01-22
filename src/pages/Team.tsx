import { PageSEO } from "@/components/seo/PageSEO";
import { TeamManagement } from "@/components/tools/TeamManagement";

const Team = () => {
  return (
    <div className="container py-8">
      <PageSEO
        title="Team Management | Build Your Dream Team"
        description="Manage your team members, assign roles, and track projects efficiently."
      />
      
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold">Team Management</h1>
          <p className="text-lg text-muted-foreground mt-2">
            Build and manage your team effectively. Add team members, assign roles, and track their progress.
          </p>
        </div>
      </div>

      <TeamManagement />
    </div>
  );
};

export default Team;