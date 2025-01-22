import { FormField, FormItem, FormLabel, FormControl, FormDescription } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  problem: z.string().min(1, "Problem is required"),
  solution: z.string().min(1, "Solution is required"),
  uniqueValue: z.string().min(1, "Unique value proposition is required"),
  customerSegments: z.string().min(1, "Customer segments are required"),
  channels: z.string(),
  revenue: z.string(),
  costs: z.string(),
  metrics: z.string(),
  unfairAdvantage: z.string(),
});

type LeanCanvasFormValues = z.infer<typeof formSchema>;

interface LeanCanvasFieldsProps {
  form: UseFormReturn<LeanCanvasFormValues>;
}

export const LeanCanvasFields = ({ form }: LeanCanvasFieldsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <FormField
        control={form.control}
        name="problem"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Problem</FormLabel>
            <FormControl>
              <Textarea placeholder="List your top 3 problems" {...field} />
            </FormControl>
            <FormDescription>What problems are you solving?</FormDescription>
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="solution"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Solution</FormLabel>
            <FormControl>
              <Textarea placeholder="Outline your solution" {...field} />
            </FormControl>
            <FormDescription>How do you solve these problems?</FormDescription>
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="uniqueValue"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Unique Value Proposition</FormLabel>
            <FormControl>
              <Textarea placeholder="Your unique value proposition" {...field} />
            </FormControl>
            <FormDescription>What makes your solution special?</FormDescription>
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="customerSegments"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Customer Segments</FormLabel>
            <FormControl>
              <Textarea placeholder="Who are your customers?" {...field} />
            </FormControl>
            <FormDescription>Define your target customers</FormDescription>
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="channels"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Channels</FormLabel>
            <FormControl>
              <Input placeholder="How will you reach customers?" {...field} />
            </FormControl>
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="revenue"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Revenue Streams</FormLabel>
            <FormControl>
              <Input placeholder="How will you make money?" {...field} />
            </FormControl>
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="costs"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Cost Structure</FormLabel>
            <FormControl>
              <Input placeholder="What are your costs?" {...field} />
            </FormControl>
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="metrics"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Key Metrics</FormLabel>
            <FormControl>
              <Input placeholder="What metrics matter most?" {...field} />
            </FormControl>
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="unfairAdvantage"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Unfair Advantage</FormLabel>
            <FormControl>
              <Input placeholder="What can't be copied?" {...field} />
            </FormControl>
          </FormItem>
        )}
      />
    </div>
  );
};

export { formSchema, type LeanCanvasFormValues };