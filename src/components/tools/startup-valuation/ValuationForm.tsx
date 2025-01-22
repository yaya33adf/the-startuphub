import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

const formSchema = z.object({
  revenue: z.number().default(0),
  growthRate: z.number().default(0),
  marketSize: z.number().default(0),
  margins: z.number().default(0),
});

export type ValuationFormValues = z.infer<typeof formSchema>;

interface ValuationFormProps {
  onCalculate: (data: ValuationFormValues) => void;
}

export const ValuationForm = ({ onCalculate }: ValuationFormProps) => {
  const form = useForm<ValuationFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      revenue: 0,
      growthRate: 0,
      marketSize: 0,
      margins: 0,
    },
  });

  return (
    <Card className="p-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onCalculate)} className="space-y-6">
          <FormField
            control={form.control}
            name="revenue"
            render={({ field: { onChange, ...field } }) => (
              <FormItem>
                <FormLabel>Annual Revenue ($)</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Enter annual revenue"
                    onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Your company's annual revenue in USD
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="growthRate"
            render={({ field: { onChange, ...field } }) => (
              <FormItem>
                <FormLabel>Annual Growth Rate (%)</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Enter growth rate"
                    onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Year-over-year revenue growth rate
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="marketSize"
            render={({ field: { onChange, ...field } }) => (
              <FormItem>
                <FormLabel>Total Addressable Market Size ($)</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Enter market size"
                    onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Total addressable market size in USD
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="margins"
            render={({ field: { onChange, ...field } }) => (
              <FormItem>
                <FormLabel>Profit Margins (%)</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Enter profit margins"
                    onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Current or projected profit margins
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full">
            Calculate Valuation
          </Button>
        </form>
      </Form>
    </Card>
  );
};