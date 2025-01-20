import { z } from "zod";

export const profileFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  userType: z.enum(['startup', 'investor']).optional(),
  newPassword: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }).optional(),
  confirmPassword: z.string().optional(),
}).refine((data) => {
  if (data.newPassword && data.confirmPassword) {
    return data.newPassword === data.confirmPassword;
  }
  return true;
}, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

export type ProfileFormValues = z.infer<typeof profileFormSchema>;