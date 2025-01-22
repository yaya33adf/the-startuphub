import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { jobCategories } from "@/data/jobCategories";

interface CategorySelectProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export const CategorySelect = ({ selectedCategory, onCategoryChange }: CategorySelectProps) => {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">Category</label>
      <Select
        value={selectedCategory}
        onValueChange={onCategoryChange}
      >
        <SelectTrigger>
          <SelectValue placeholder="Select a category" />
        </SelectTrigger>
        <SelectContent>
          {jobCategories.map((category) => (
            <SelectItem key={category.title} value={category.title}>
              {category.title}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};