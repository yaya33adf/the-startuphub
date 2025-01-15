import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FormData } from "./types";

interface RecommendationFormProps {
  formData: FormData;
  onFormDataChange: (formData: FormData) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export const RecommendationForm = ({
  formData,
  onFormDataChange,
  onSubmit,
}: RecommendationFormProps) => (
  <form onSubmit={onSubmit} className="space-y-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="space-y-2">
        <Label htmlFor="project_name">Project Name</Label>
        <Input
          id="project_name"
          value={formData.project_name}
          onChange={(e) =>
            onFormDataChange({ ...formData, project_name: e.target.value })
          }
          placeholder="Enter project name"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="project_type">Project Type</Label>
        <Select
          value={formData.project_type}
          onValueChange={(value) =>
            onFormDataChange({ ...formData, project_type: value })
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="Select project type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="web">Web Development</SelectItem>
            <SelectItem value="mobile">Mobile App</SelectItem>
            <SelectItem value="marketing">Marketing Campaign</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="project_size">Project Size</Label>
        <Select
          value={formData.project_size}
          onValueChange={(value) =>
            onFormDataChange({ ...formData, project_size: value })
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="Select project size" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="small">Small</SelectItem>
            <SelectItem value="medium">Medium</SelectItem>
            <SelectItem value="large">Large</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="budget_range">Budget Range</Label>
        <Select
          value={formData.budget_range}
          onValueChange={(value) =>
            onFormDataChange({ ...formData, budget_range: value })
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="Select budget range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="low">$10k - $50k</SelectItem>
            <SelectItem value="medium">$50k - $100k</SelectItem>
            <SelectItem value="high">$100k+</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2 md:col-span-2">
        <Label htmlFor="project_description">Project Description</Label>
        <Textarea
          id="project_description"
          value={formData.project_description}
          onChange={(e) =>
            onFormDataChange({ ...formData, project_description: e.target.value })
          }
          placeholder="Describe your project"
          className="min-h-[100px]"
        />
      </div>
    </div>
    <Button type="submit" className="w-full">
      Generate Recommendation
    </Button>
  </form>
);