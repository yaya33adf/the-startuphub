import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Download } from "lucide-react";
import { toPng } from 'html-to-image';
import { LeanCanvasFields, formSchema, type LeanCanvasFormValues } from "./lean-canvas/LeanCanvasFields";
import { LeanCanvasDisplay } from "./lean-canvas/LeanCanvasDisplay";

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
        const dataUrl = await toPng(canvas);
        const link = document.createElement('a');
        link.download = 'lean-canvas.png';
        link.href = dataUrl;
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
              <LeanCanvasFields form={form} />
              
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
            <div id="lean-canvas">
              <LeanCanvasDisplay data={form.getValues()} />
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};