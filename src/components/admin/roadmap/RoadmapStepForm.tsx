import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import { SkillsInput } from "./form/SkillsInput";
import { ResourcesInput } from "./form/ResourcesInput";
import { BasicFormFields } from "./form/BasicFormFields";
import { StatusOrderFields } from "./form/StatusOrderFields";
import { roadmapStepFormSchema, RoadmapStepFormProps, RoadmapStepFormValues, validRoles } from "./types/roadmap-step";

export function RoadmapStepForm({ sectionId, step, onSuccess, onCancel }: RoadmapStepFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<RoadmapStepFormValues>({
    resolver: zodResolver(roadmapStepFormSchema),
    defaultValues: {
      title: step?.title || "",
      description: step?.description || "",
      status: step?.status || "required",
      order_index: step?.order_index || 0,
      skills: step?.skills?.join(', ') || "",
      resources: step?.resources?.map(r => `${r.name}|${r.url}`).join('\n') || "",
      role: step?.role || validRoles[0],
    },
  });

  const onSubmit = async (values: RoadmapStepFormValues) => {
    setIsSubmitting(true);
    console.log("Submitting step form:", values);

    try {
      const formattedData = {
        title: values.title,
        description: values.description,
        status: values.status,
        order_index: values.order_index,
        skills: values.skills.split(',').map(s => s.trim()).filter(Boolean),
        resources: values.resources.split('\n')
          .filter(line => line.trim())
          .map(line => {
            const [name, url] = line.split('|').map(s => s.trim());
            return { name, url };
          })
          .filter(r => r.name && r.url),
        role: values.role,
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
        <BasicFormFields form={form} />
        <StatusOrderFields form={form} />
        <SkillsInput form={form} />
        <ResourcesInput form={form} />

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