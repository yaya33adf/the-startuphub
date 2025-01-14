import { useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Trash2, UserPlus, Calendar } from "lucide-react";

interface TeamMember {
  id: string;
  member_name: string;
  role: string;
  email: string;
  status: string;
  assignment?: string;
  due_date?: string;
  user_id: string;
}

export const TeamManagement = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [userId, setUserId] = useState<string | null>(null);
  const [newMember, setNewMember] = useState({
    member_name: "",
    role: "",
    email: "",
    assignment: "",
    due_date: "",
  });

  useEffect(() => {
    const getCurrentUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        setUserId(user.id);
        console.log("Current user ID:", user.id);
      }
    };
    getCurrentUser();
  }, []);

  const { data: teamMembers = [], isLoading } = useQuery({
    queryKey: ["team-members"],
    queryFn: async () => {
      console.log("Fetching team members...");
      const { data, error } = await supabase
        .from("teams")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching team members:", error);
        throw error;
      }

      console.log("Team members fetched:", data);
      return data as TeamMember[];
    },
  });

  const addMemberMutation = useMutation({
    mutationFn: async (memberData: Omit<TeamMember, "id" | "status">) => {
      if (!userId) throw new Error("User not authenticated");

      console.log("Adding team member:", memberData);
      const { data, error } = await supabase
        .from("teams")
        .insert([{ ...memberData, user_id: userId, status: "active" }])
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["team-members"] });
      toast({
        title: "Success",
        description: "Team member added successfully",
      });
      setNewMember({
        member_name: "",
        role: "",
        email: "",
        assignment: "",
        due_date: "",
      });
    },
    onError: (error) => {
      console.error("Error adding team member:", error);
      toast({
        title: "Error",
        description: "Failed to add team member",
        variant: "destructive",
      });
    },
  });

  const deleteMemberMutation = useMutation({
    mutationFn: async (memberId: string) => {
      console.log("Deleting team member:", memberId);
      const { error } = await supabase
        .from("teams")
        .delete()
        .eq("id", memberId);

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["team-members"] });
      toast({
        title: "Success",
        description: "Team member removed successfully",
      });
    },
    onError: (error) => {
      console.error("Error deleting team member:", error);
      toast({
        title: "Error",
        description: "Failed to remove team member",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMember.member_name || !newMember.role || !newMember.email) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }
    addMemberMutation.mutate(newMember);
  };

  if (isLoading) {
    return <div className="text-center p-4">Loading team members...</div>;
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Add Team Member</CardTitle>
          <CardDescription>Add a new member to your team</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="member_name">Name</Label>
                <Input
                  id="member_name"
                  value={newMember.member_name}
                  onChange={(e) =>
                    setNewMember({ ...newMember, member_name: e.target.value })
                  }
                  placeholder="Enter member name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="role">Role</Label>
                <Select
                  value={newMember.role}
                  onValueChange={(value) =>
                    setNewMember({ ...newMember, role: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="developer">Developer</SelectItem>
                    <SelectItem value="designer">Designer</SelectItem>
                    <SelectItem value="manager">Manager</SelectItem>
                    <SelectItem value="marketing">Marketing</SelectItem>
                    <SelectItem value="sales">Sales</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={newMember.email}
                  onChange={(e) =>
                    setNewMember({ ...newMember, email: e.target.value })
                  }
                  placeholder="Enter email address"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="assignment">Current Assignment</Label>
                <Input
                  id="assignment"
                  value={newMember.assignment}
                  onChange={(e) =>
                    setNewMember({ ...newMember, assignment: e.target.value })
                  }
                  placeholder="Enter current assignment"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="due_date">Due Date</Label>
                <Input
                  id="due_date"
                  type="date"
                  value={newMember.due_date}
                  onChange={(e) =>
                    setNewMember({ ...newMember, due_date: e.target.value })
                  }
                />
              </div>
            </div>
            <Button type="submit" className="w-full">
              <UserPlus className="mr-2" />
              Add Team Member
            </Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Team Members</CardTitle>
          <CardDescription>Manage your team members and their assignments</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-4">
            {teamMembers.map((member) => (
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
                      onClick={() => deleteMemberMutation.mutate(member.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};