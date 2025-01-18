import { Input } from "@/components/ui/input";

interface StartupContactInfoProps {
  hyperEmail: string;
  onHyperEmailChange: (value: string) => void;
}

export const StartupContactInfo = ({
  hyperEmail,
  onHyperEmailChange,
}: StartupContactInfoProps) => {
  return (
    <div>
      <label htmlFor="hyperEmail" className="block text-sm font-medium text-gray-700 mb-1">
        Hyper Email
      </label>
      <Input
        id="hyperEmail"
        type="email"
        value={hyperEmail}
        onChange={(e) => onHyperEmailChange(e.target.value)}
        placeholder="Enter hyper email"
      />
    </div>
  );
};