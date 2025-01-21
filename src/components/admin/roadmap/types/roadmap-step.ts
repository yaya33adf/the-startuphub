import * as z from "zod";

export const roadmapStepFormSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  status: z.enum(["required", "recommended", "optional"]),
  order_index: z.number(),
  skills: z.string(),
  resources: z.string(),
});

export type RoadmapStepFormValues = z.infer<typeof roadmapStepFormSchema>;

export interface RoadmapStepFormProps {
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