import { PageSEO } from "@/components/seo/PageSEO";
import { TeamManagementContainer } from "@/components/tools/team/TeamManagementContainer";

const TeamManagementPage = () => {
  return (
    <>
      <PageSEO 
        title="Team Management Tool"
        description="Manage your team members, assignments, and track progress effectively."
      />
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-8">Team Management</h1>
        <TeamManagementContainer />
      </div>
    </>
  );
};

export default TeamManagementPage;