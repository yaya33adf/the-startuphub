import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Plus, Trash, Edit } from "lucide-react";
import { RoadmapStepForm } from "./RoadmapStepForm";
import { Card, CardContent } from "@/components/ui/card";

const formSchema = z.object({
  title: z.string().min(1, "Title is required"),
  order_index: z.number(),
});

interface RoadmapSectionFormProps {
  roadmapId: string;
  section?: {
    id: string;
    title: string;
    order_index: number;
  };
  onSuccess: () => void;
  onCancel: () => void;
}

export function RoadmapSectionForm({ roadmapId, section, onSuccess, onCancel }: RoadmapSectionFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showStepForm, setShowStepForm] = useState(false);
  const [editingStep, setEditingStep] = useState<any>(null);
  const [steps, setSteps] = useState<any[]>([]);
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: section?.title || "",
      order_index: section?.order_index || 0,
    },
  });

  useEffect(() => {
    if (section?.id) {
      fetchSteps();
    }
  }, [section?.id]);

  const fetchSteps = async () => {
    if (!section?.id) return;

    const { data, error } = await supabase
      .from('roadmap_steps')
      .select('*')
      .eq('section_id', section.id)
      .order('order_index');

    if (error) {
      console.error("Error fetching steps:", error);
      return;
    }

    setSteps(data || []);
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    console.log("Submitting section form:", values);

    try {
      if (section) {
        const { error } = await supabase
          .from('roadmap_sections')
          .update({
            title: values.title,
            order_index: values.order_index,
          })
          .eq('id', section.id);

        if (error) throw error;
        
        toast({
          title: "Success",
          description: "Section updated successfully",
        });
      } else {
        const { error } = await supabase
          .from('roadmap_sections')
          .insert({
            roadmap_id: roadmapId,
            title: values.title,
            order_index: values.order_index,
          });

        if (error) throw error;
        
        toast({
          title: "Success",
          description: "Section created successfully",
        });
      }

      onSuccess();
    } catch (error) {
      console.error("Error saving section:", error);
      toast({
        title: "Error",
        description: "Failed to save section",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDeleteStep = async (stepId: string) => {
    try {
      const { error } = await supabase
        .from('roadmap_steps')
        .delete()
        .eq('id', stepId);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Step deleted successfully",
      });

      fetchSteps();
    } catch (error) {
      console.error("Error deleting step:", error);
      toast({
        title: "Error",
        description: "Failed to delete step",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="space-y-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 bg-card p-6 rounded-lg">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Section Title</FormLabel>
                <FormControl>
                  <Input placeholder="Getting Started" {...field} />
                </FormControl>
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
              {section ? 'Update' : 'Create'} Section
            </Button>
          </div>
        </form>
      </Form>

      {section && (
        <div className="mt-8">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Steps</h3>
            <Button onClick={() => {
              setEditingStep(null);
              setShowStepForm(true);
            }} disabled={showStepForm}>
              <Plus className="h-4 w-4 mr-2" />
              Add Step
            </Button>
          </div>

          <div className="space-y-4">
            {steps.map((step) => (
              <Card key={step.id} className="relative">
                <CardContent className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium">{step.title}</h4>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => {
                          setEditingStep(step);
                          setShowStepForm(true);
                        }}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDeleteStep(step.id)}
                      >
                        <Trash className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {showStepForm && (
            <div className="mt-4">
              <RoadmapStepForm
                sectionId={section.id}
                step={editingStep}
                onSuccess={() => {
                  setShowStepForm(false);
                  setEditingStep(null);
                  fetchSteps();
                  onSuccess();
                }}
                onCancel={() => {
                  setShowStepForm(false);
                  setEditingStep(null);
                }}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}