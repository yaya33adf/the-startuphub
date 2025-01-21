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
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  slug: z.string().min(1, "Slug is required").regex(/^[a-z0-9-]+$/, {
    message: "Slug can only contain lowercase letters, numbers, and hyphens",
  }),
});

interface RoadmapFormProps {
  roadmap?: {
    id: string;
    title: string;
    description: string;
    slug: string;
  };
  onSuccess: () => void;
  onCancel: () => void;
}

export function RoadmapForm({ roadmap, onSuccess, onCancel }: RoadmapFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: roadmap?.title || "",
      description: roadmap?.description || "",
      slug: roadmap?.slug || "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    console.log("Submitting roadmap form:", values);

    try {
      if (roadmap) {
        // Update existing roadmap
        const { error } = await supabase
          .from('roadmap_templates')
          .update({
            title: values.title,
            description: values.description,
            slug: values.slug
          })
          .eq('id', roadmap.id);

        if (error) throw error;
        
        toast({
          title: "Success",
          description: "Roadmap updated successfully",
        });
      } else {
        // Create new roadmap
        const { error } = await supabase
          .from('roadmap_templates')
          .insert({
            title: values.title,
            description: values.description,
            slug: values.slug
          });

        if (error) throw error;
        
        toast({
          title: "Success",
          description: "Roadmap created successfully",
        });
      }

      onSuccess();
    } catch (error) {
      console.error("Error saving roadmap:", error);
      toast({
        title: "Error",
        description: "Failed to save roadmap",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 bg-card p-6 rounded-lg mb-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Frontend Developer Roadmap" {...field} />
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
                  placeholder="A comprehensive guide to becoming a frontend developer..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="slug"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Slug</FormLabel>
              <FormControl>
                <Input 
                  placeholder="frontend-developer"
                  {...field}
                  onChange={(e) => {
                    const value = e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, '-');
                    field.onChange(value);
                  }}
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
            {roadmap ? 'Update' : 'Create'} Roadmap
          </Button>
        </div>
      </form>
    </Form>
  );
}