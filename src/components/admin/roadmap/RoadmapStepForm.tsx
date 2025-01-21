import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  status: z.enum(["required", "recommended", "optional"]),
  order_index: z.number(),
  skills: z.string().transform((val) => val.split(',').map(s => s.trim())).optional(),
  resources: z.string().transform((val) => {
    if (!val) return [];
    try {
      return val.split('\n')
        .filter(line => line.trim())
        .map(line => {
          const [name, url] = line.split('|').map(s => s.trim());
          if (!name || !url) throw new Error("Invalid format");
          return { name, url };
        });
    } catch (e) {
      return [];
    }
  }),
});

type FormValues = z.infer<typeof formSchema>;

interface RoadmapStepFormProps {
  sectionId: string;
  step?: {
    id: string;
    title: string;
    description: string;
    status: "required" | "recommended" | "optional";
    order_index: number;
    skills: string[];
    resources: Array<{ name: string; url: string; }>;
  };
  onSuccess: () => void;
  onCancel: () => void;
}

export function RoadmapStepForm({ sectionId, step, onSuccess, onCancel }: RoadmapStepFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: step?.title || "",
      description: step?.description || "",
      status: step?.status || "required",
      order_index: step?.order_index || 0,
      skills: step?.skills?.join(', ') || "",
      resources: step?.resources?.map(r => `${r.name}|${r.url}`).join('\n') || "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    console.log("Submitting step form:", values);

    try {
      const formattedData = {
        title: values.title,
        description: values.description,
        status: values.status,
        order_index: values.order_index,
        skills: values.skills || [],
        resources: values.resources || [],
      };

      if (step) {
        const { error } = await supabase
          .from('roadmap_steps')
          .update(formattedData)
          .eq('id', step.id);

        if (error) throw error;
        
        toast({
          title: "Success",
          description: "Step updated successfully",
        });
      } else {
        const { error } = await supabase
          .from('roadmap_steps')
          .insert({
            ...formattedData,
            section_id: sectionId,
          });

        if (error) throw error;
        
        toast({
          title: "Success",
          description: "Step created successfully",
        });
      }

      onSuccess();
    } catch (error) {
      console.error("Error saving step:", error);
      toast({
        title: "Error",
        description: "Failed to save step",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 bg-card p-6 rounded-lg">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Learn HTML Basics" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Understanding the fundamentals of HTML..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="status"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Status</FormLabel>
              <Select 
                onValueChange={field.onChange} 
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="required">Required</SelectItem>
                  <SelectItem value="recommended">Recommended</SelectItem>
                  <SelectItem value="optional">Optional</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="order_index"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Order</FormLabel>
              <FormControl>
                <Input 
                  type="number" 
                  {...field}
                  onChange={(e) => field.onChange(parseInt(e.target.value))}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

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

        <div className="flex justify-end gap-4">
          <Button
            type="button"
            variant="outline"
            onClick={onCancel}
            disabled={isSubmitting}
          >
            Cancel
          </Button>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {step ? 'Update' : 'Create'} Step
          </Button>
        </div>
      </form>
    </Form>
  );
}