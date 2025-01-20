import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { EmailInput } from "./EmailInput";
import { UserTypeSelect } from "./UserTypeSelect";

interface ProfileFormProps {
  name: string;
  email: string;
  userType: string | null;
  onNameChange: (value: string) => void;
  onEmailChange: (value: string) => void;
  onUserTypeChange: (value: string) => void;
}

export function ProfileForm({
  name,
  email,
  userType,
  onNameChange,
  onEmailChange,
  onUserTypeChange,
}: ProfileFormProps) {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Display Name</Label>
        <Input
          id="name"
          type="text"
          value={name}
          onChange={(e) => onNameChange(e.target.value)}
          placeholder="Enter your display name"
        />
      </div>
      
      <EmailInput 
        email={email} 
        onEmailChange={onEmailChange} 
      />
      
      <UserTypeSelect 
        userType={userType} 
        onUserTypeChange={onUserTypeChange} 
      />
    </div>
  );
}