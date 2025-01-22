import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AddTeamMemberForm } from "./AddTeamMemberForm";
import { TeamMembersList } from "./TeamMembersList";
import { useTeamManagement } from "./useTeamManagement";
import { StartupRecommendationForm } from "./StartupRecommendationForm";

export const TeamManagementContainer = () => {
  const { 
    teamMembers, 
    isLoading, 
    deletingId, 
    addMemberMutation, 
    deleteMemberMutation 
  } = useTeamManagement();

  return (
    <div className="space-y-6">
      <StartupRecommendationForm />
      
      <AddTeamMemberForm
        onSubmit={(member) => addMemberMutation.mutate(member)}
        isSubmitting={addMemberMutation.isPending}
      />

      <Card>
        <CardHeader>
          <CardTitle>Team Members</CardTitle>
          <CardDescription>Manage your team members and their assignments</CardDescription>
        </CardHeader>
        <CardContent>
          <TeamMembersList
            members={teamMembers}
            onDelete={(id) => deleteMemberMutation.mutate(id)}
            isDeletingId={deletingId}
          />
        </CardContent>
      </Card>
    </div>
  );
};