import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Download } from "lucide-react";
import html2canvas from "html-to-image";

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

export const LeanCanvasGenerator = () => {
  const { toast } = useToast();
  const [showCanvas, setShowCanvas] = useState(false);

  const form = useForm<LeanCanvasFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      problem: "",
      solution: "",
      uniqueValue: "",
      customerSegments: "",
      channels: "",
      revenue: "",
      costs: "",
      metrics: "",
      unfairAdvantage: "",
    },
  });

  const onSubmit = (data: LeanCanvasFormValues) => {
    console.log("Form submitted:", data);
    setShowCanvas(true);
    toast({
      title: "Canvas Generated",
      description: "Your lean canvas has been generated successfully.",
    });
  };

  const downloadCanvas = async () => {
    const canvas = document.getElementById('lean-canvas');
    if (canvas) {
      try {
        const dataUrl = await html2canvas(canvas);
        const link = document.createElement('a');
        link.download = 'lean-canvas.png';
        link.href = dataUrl.toDataURL();
        link.click();
        
        toast({
          title: "Download Success",
          description: "Your lean canvas has been downloaded successfully.",
        });
      } catch (error) {
        console.error('Error downloading canvas:', error);
        toast({
          variant: "destructive",
          title: "Download Failed",
          description: "There was an error downloading your canvas.",
        });
      }
    }
  };

  return (
    <div className="container max-w-4xl mx-auto py-6">
      <Card>
        <CardHeader>
          <CardTitle>Lean Canvas Generator</CardTitle>
          <CardDescription>
            Create a one-page business plan using the Lean Canvas methodology
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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

              <div className="flex justify-end gap-4">
                <Button type="submit">Generate Canvas</Button>
                {showCanvas && (
                  <Button type="button" onClick={downloadCanvas} variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    Download Canvas
                  </Button>
                )}
              </div>
            </form>
          </Form>

          {showCanvas && (
            <div id="lean-canvas" className="mt-8 p-6 border rounded-lg bg-white">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {Object.entries(form.getValues()).map(([key, value]) => (
                  <div key={key} className="p-4 border rounded">
                    <h3 className="font-semibold capitalize mb-2">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </h3>
                    <p className="text-sm text-muted-foreground">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};