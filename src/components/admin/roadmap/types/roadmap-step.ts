import * as z from "zod";

// Define valid roles based on your application's needs
export const validRoles = [
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "UI/UX Designer",
  "DevOps Engineer",
  "Data Scientist",
  "Mobile Developer",
  "Cybersecurity Specialist",
  "Cloud Engineer",
  "Machine Learning Engineer",
] as const;

export const roadmapStepFormSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  status: z.enum(["required", "recommended", "optional"]),
  order_index: z.number(),
  skills: z.string(),
  resources: z.string(),
  role: z.enum(validRoles, {
    required_error: "Please select a role",
    invalid_type_error: "Please select a valid role",
  }),
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
    role?: (typeof validRoles)[number];
  };
  onSuccess: () => void;
  onCancel: () => void;
}