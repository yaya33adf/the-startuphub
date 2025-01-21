import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { UseFormReturn } from "react-hook-form";
import { RoadmapStepFormValues } from "../types/roadmap-step";

interface ResourcesInputProps {
  form: UseFormReturn<RoadmapStepFormValues>;
}

export const ResourcesInput = ({ form }: ResourcesInputProps) => {
  return (
    <FormField
      control={form.control}
      name="resources"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Resources (one per line, format: name|url)</FormLabel>
          <FormControl>
            <Textarea 
              placeholder="MDN Web Docs|https://developer.mozilla.org
W3Schools|https://www.w3schools.com"
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};