import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface StartupBasicInfoProps {
  name: string;
  description: string;
  websiteUrl: string;
  onNameChange: (value: string) => void;
  onDescriptionChange: (value: string) => void;
  onWebsiteUrlChange: (value: string) => void;
}

export const StartupBasicInfo = ({
  name,
  description,
  websiteUrl,
  onNameChange,
  onDescriptionChange,
  onWebsiteUrlChange,
}: StartupBasicInfoProps) => {
  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Name
        </label>
        <Input
          id="name"
          value={name}
          onChange={(e) => onNameChange(e.target.value)}
          required
          placeholder="Enter startup name"
        />
      </div>
      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
          Description
        </label>
        <Textarea
          id="description"
          value={description}
          onChange={(e) => onDescriptionChange(e.target.value)}
          required
          placeholder="Describe your startup"
          className="min-h-[100px]"
        />
      </div>
      <div>
        <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">
          Website URL
        </label>
        <Input
          id="website"
          type="url"
          value={websiteUrl}
          onChange={(e) => onWebsiteUrlChange(e.target.value)}
          placeholder="https://example.com"
        />
      </div>
    </div>
  );
};