import { useState } from "react";
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
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  revenue: z.string().transform((val) => parseFloat(val) || 0),
  growthRate: z.string().transform((val) => parseFloat(val) || 0),
  marketSize: z.string().transform((val) => parseFloat(val) || 0),
  margins: z.string().transform((val) => parseFloat(val) || 0),
});

type ValuationFormValues = z.infer<typeof formSchema>;

export const StartupValuation = () => {
  const [valuation, setValuation] = useState<number | null>(null);
  const { toast } = useToast();

  const form = useForm<ValuationFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      revenue: "0",
      growthRate: "0",
      marketSize: "0",
      margins: "0",
    },
  });

  const calculateValuation = (data: ValuationFormValues) => {
    const growthMultiple = 1 + (data.growthRate / 100);
    const marketSizeMultiple = Math.log10(data.marketSize / 1000000) || 1;
    const marginMultiple = (data.margins / 100) || 0.1;
    
    const baseMultiple = 5;
    const revenueMultiple = baseMultiple * growthMultiple * marketSizeMultiple * marginMultiple;
    
    return Math.round(data.revenue * revenueMultiple);
  };

  const onSubmit = (data: ValuationFormValues) => {
    console.log("Form submitted with data:", data);
    const calculatedValuation = calculateValuation(data);
    setValuation(calculatedValuation);
    
    toast({
      title: "Valuation Calculated",
      description: `Estimated valuation: $${calculatedValuation.toLocaleString()}`,
    });
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Startup Valuation Calculator</h1>
      <p className="text-muted-foreground mb-8">
        Estimate your startup's valuation based on key metrics including revenue,
        growth rate, market size, and profit margins.
      </p>

      <div className="grid gap-8 md:grid-cols-2">
        <Card className="p-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="revenue"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Annual Revenue ($)</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Enter annual revenue"
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
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Annual Growth Rate (%)</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Enter growth rate"
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
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Total Addressable Market Size ($)</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Enter market size"
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
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Profit Margins (%)</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Enter profit margins"
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

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Valuation Result</h2>
          {valuation !== null ? (
            <div className="space-y-4">
              <p className="text-2xl font-bold text-primary">
                ${valuation.toLocaleString()}
              </p>
              <p className="text-muted-foreground">
                This is an estimated valuation based on the provided metrics.
                Actual valuations may vary significantly based on many other
                factors including market conditions, competitive landscape,
                intellectual property, and team experience.
              </p>
            </div>
          ) : (
            <p className="text-muted-foreground">
              Fill out the form to see your estimated startup valuation.
            </p>
          )}
        </Card>
      </div>
    </div>
  );
};