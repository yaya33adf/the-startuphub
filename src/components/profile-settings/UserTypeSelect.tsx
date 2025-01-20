import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

interface UserTypeSelectProps {
  userType: string | null;
  onUserTypeChange: (value: string) => void;
}

export function UserTypeSelect({ userType, onUserTypeChange }: UserTypeSelectProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor="userType">User Type</Label>
      <Select
        value={userType || undefined}
        onValueChange={onUserTypeChange}
      >
        <SelectTrigger>
          <SelectValue placeholder="Select user type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="startup">Startup</SelectItem>
          <SelectItem value="investor">Investor</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}