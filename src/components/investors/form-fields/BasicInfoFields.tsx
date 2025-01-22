import { FormField } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface BasicInfoFieldsProps {
  name: string;
  email: string;
  previousWork: string;
  onNameChange: (value: string) => void;
  onEmailChange: (value: string) => void;
  onPreviousWorkChange: (value: string) => void;
}

export const BasicInfoFields = ({
  name,
  email,
  previousWork,
  onNameChange,
  onEmailChange,
  onPreviousWorkChange,
}: BasicInfoFieldsProps) => {
  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          value={name}
          onChange={(e) => onNameChange(e.target.value)}
          placeholder="Enter your full name"
          required
        />
      </div>

      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => onEmailChange(e.target.value)}
          placeholder="Enter your email"
          required
        />
      </div>

      <div>
        <Label htmlFor="previousWork">Previous Work Experience</Label>
        <Textarea
          id="previousWork"
          value={previousWork}
          onChange={(e) => onPreviousWorkChange(e.target.value)}
          placeholder="Describe your previous work experience and notable investments"
          className="min-h-[100px]"
        />
      </div>
    </div>
  );
};