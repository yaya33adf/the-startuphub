import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Trash2 } from "lucide-react";

interface TeamMember {
  id: string;
  member_name: string;
  role: string;
  email: string;
  assignment: string | null;
  due_date: string | null;
}

interface TeamMembersListProps {
  members: TeamMember[];
  onDelete: (id: string) => void;
  isDeletingId: string | null;
}

export const TeamMembersList = ({ members, onDelete, isDeletingId }: TeamMembersListProps) => {
  if (!members.length) {
    return (
      <div className="text-center p-4 text-muted-foreground">
        No team members added yet. Add your first team member above.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4">
      {members.map((member) => (
        <Card key={member.id}>
          <CardContent className="p-4">
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <h4 className="font-semibold">{member.member_name}</h4>
                <p className="text-sm text-muted-foreground">{member.role}</p>
                <p className="text-sm">{member.email}</p>
                {member.assignment && (
                  <p className="text-sm">
                    <span className="font-medium">Assignment:</span>{" "}
                    {member.assignment}
                  </p>
                )}
                {member.due_date && (
                  <p className="text-sm flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    Due: {new Date(member.due_date).toLocaleDateString()}
                  </p>
                )}
              </div>
              <Button
                variant="destructive"
                size="icon"
                onClick={() => onDelete(member.id)}
                disabled={isDeletingId === member.id}
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};