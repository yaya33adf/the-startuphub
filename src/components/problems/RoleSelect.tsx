import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { jobCategories } from "@/data/jobCategories";

interface RoleSelectProps {
  selectedCategory: string;
  selectedRole: string;
  onRoleChange: (role: string) => void;
}

export const RoleSelect = ({ selectedCategory, selectedRole, onRoleChange }: RoleSelectProps) => {
  const roles = selectedCategory
    ? jobCategories.find((cat) => cat.title === selectedCategory)?.roles || []
    : [];

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">Role</label>
      <Select
        value={selectedRole}
        onValueChange={onRoleChange}
        disabled={!selectedCategory}
      >
        <SelectTrigger>
          <SelectValue placeholder="Select a role" />
        </SelectTrigger>
        <SelectContent>
          {roles.map((role) => (
            <SelectItem key={role} value={role}>
              {role}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};