import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import { RoadmapStepFormValues } from "../types/roadmap-step";

interface SkillsInputProps {
  form: UseFormReturn<RoadmapStepFormValues>;
}

export const SkillsInput = ({ form }: SkillsInputProps) => {
  return (
    <FormField
      control={form.control}
      name="skills"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Skills (comma-separated)</FormLabel>
          <FormControl>
            <Input 
              placeholder="HTML, CSS, JavaScript"
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};