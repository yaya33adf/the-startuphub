import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { UserPlus } from "lucide-react";

interface AddTeamMemberFormProps {
  onSubmit: (member: {
    member_name: string;
    role: string;
    email: string;
    assignment: string;
    due_date: string;
  }) => void;
  isSubmitting: boolean;
}

export const AddTeamMemberForm = ({ onSubmit, isSubmitting }: AddTeamMemberFormProps) => {
  const [newMember, setNewMember] = useState({
    member_name: "",
    role: "",
    email: "",
    assignment: "",
    due_date: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(newMember);
    setNewMember({
      member_name: "",
      role: "",
      email: "",
      assignment: "",
      due_date: "",
    });
  };

  return (
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
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="role">Role</Label>
              <Select
                value={newMember.role}
                onValueChange={(value) =>
                  setNewMember({ ...newMember, role: value })
                }
                required
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
                required
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
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            <UserPlus className="mr-2" />
            Add Team Member
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};