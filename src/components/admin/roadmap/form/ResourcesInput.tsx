import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { UseFormReturn } from "react-hook-form";
import { RoadmapStepFormValues } from "../types/roadmap-step";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Link } from "lucide-react";

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
          <FormLabel className="flex items-center gap-2">
            <Link className="h-4 w-4" />
            Learning Resources
          </FormLabel>
          <Alert className="mb-2">
            <AlertDescription>
              Add one resource per line in the format: name|url
              <br />
              Example:
              <br />
              MDN Web Docs|https://developer.mozilla.org
              <br />
              W3Schools|https://www.w3schools.com
            </AlertDescription>
          </Alert>
          <FormControl>
            <Textarea 
              placeholder="MDN Web Docs|https://developer.mozilla.org
W3Schools|https://www.w3schools.com"
              {...field}
              className="font-mono text-sm"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};