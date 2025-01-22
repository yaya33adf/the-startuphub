import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { Download, Building2 } from "lucide-react";
import html2canvas from "html2canvas";

interface BusinessModelSection {
  keyPartners: string;
  keyActivities: string;
  keyResources: string;
  valueProposition: string;
  customerRelationships: string;
  channels: string;
  customerSegments: string;
  costStructure: string;
  revenueStreams: string;
}

export const BusinessModelGenerator = () => {
  const { toast } = useToast();
  const [model, setModel] = useState<BusinessModelSection>({
    keyPartners: "",
    keyActivities: "",
    keyResources: "",
    valueProposition: "",
    customerRelationships: "",
    channels: "",
    customerSegments: "",
    costStructure: "",
    revenueStreams: "",
  });

  const handleInputChange = (
    field: keyof BusinessModelSection,
    value: string
  ) => {
    setModel((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const downloadCanvas = async () => {
    const canvas = document.getElementById("business-model-canvas");
    if (canvas) {
      try {
        const dataUrl = await html2canvas(canvas);
        const link = document.createElement("a");
        link.download = "business-model-canvas.png";
        link.href = dataUrl.toDataURL();
        link.click();

        toast({
          title: "Success",
          description: "Business Model Canvas downloaded successfully!",
        });
      } catch (error) {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Failed to download the canvas. Please try again.",
        });
      }
    }
  };

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold mb-2">Business Model Generator</h1>
          <p className="text-muted-foreground">
            Create your business model canvas using the template below
          </p>
        </div>
        <Button onClick={downloadCanvas} variant="outline">
          <Download className="w-4 h-4 mr-2" />
          Download Canvas
        </Button>
      </div>

      <div
        id="business-model-canvas"
        className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-background p-6 rounded-lg border"
      >
        <Card className="p-4 space-y-3">
          <Label>Key Partners</Label>
          <Textarea
            placeholder="Who are your key partners and suppliers?"
            value={model.keyPartners}
            onChange={(e) => handleInputChange("keyPartners", e.target.value)}
          />
        </Card>

        <Card className="p-4 space-y-3">
          <Label>Key Activities</Label>
          <Textarea
            placeholder="What are your most important activities?"
            value={model.keyActivities}
            onChange={(e) => handleInputChange("keyActivities", e.target.value)}
          />
        </Card>

        <Card className="p-4 space-y-3">
          <Label>Key Resources</Label>
          <Textarea
            placeholder="What key resources does your value proposition require?"
            value={model.keyResources}
            onChange={(e) => handleInputChange("keyResources", e.target.value)}
          />
        </Card>

        <Card className="p-4 space-y-3 md:col-span-3">
          <Label>Value Proposition</Label>
          <Textarea
            placeholder="What value do you deliver to the customer?"
            value={model.valueProposition}
            onChange={(e) => handleInputChange("valueProposition", e.target.value)}
          />
        </Card>

        <Card className="p-4 space-y-3">
          <Label>Customer Relationships</Label>
          <Textarea
            placeholder="What type of relationship does each customer segment expect?"
            value={model.customerRelationships}
            onChange={(e) =>
              handleInputChange("customerRelationships", e.target.value)
            }
          />
        </Card>

        <Card className="p-4 space-y-3">
          <Label>Channels</Label>
          <Textarea
            placeholder="Through which channels do your customers want to be reached?"
            value={model.channels}
            onChange={(e) => handleInputChange("channels", e.target.value)}
          />
        </Card>

        <Card className="p-4 space-y-3">
          <Label>Customer Segments</Label>
          <Textarea
            placeholder="For whom are you creating value?"
            value={model.customerSegments}
            onChange={(e) => handleInputChange("customerSegments", e.target.value)}
          />
        </Card>

        <Card className="p-4 space-y-3 md:col-span-2">
          <Label>Cost Structure</Label>
          <Textarea
            placeholder="What are the most important costs inherent in your business model?"
            value={model.costStructure}
            onChange={(e) => handleInputChange("costStructure", e.target.value)}
          />
        </Card>

        <Card className="p-4 space-y-3">
          <Label>Revenue Streams</Label>
          <Textarea
            placeholder="For what value are your customers willing to pay?"
            value={model.revenueStreams}
            onChange={(e) => handleInputChange("revenueStreams", e.target.value)}
          />
        </Card>
      </div>
    </div>
  );
};