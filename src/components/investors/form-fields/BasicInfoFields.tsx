import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User, Mail } from "lucide-react";

interface BasicInfoFieldsProps {
  name: string;
  email: string;
  onNameChange: (value: string) => void;
  onEmailChange: (value: string) => void;
}

export function BasicInfoFields({ name, email, onNameChange, onEmailChange }: BasicInfoFieldsProps) {
  return (
    <>
      <div className="space-y-2">
        <Label htmlFor="name">
          <User className="h-4 w-4 inline mr-2" />
          Name
        </Label>
        <Input
          id="name"
          value={name}
          onChange={(e) => onNameChange(e.target.value)}
          placeholder="Enter investor name"
          required
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="email">
          <Mail className="h-4 w-4 inline mr-2" />
          Email
        </Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => onEmailChange(e.target.value)}
          placeholder="Enter email address"
          required
        />
      </div>
    </>
  );
}