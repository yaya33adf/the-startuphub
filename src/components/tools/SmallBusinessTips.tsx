import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const businessTips = [
  "Focus on customer service excellence - happy customers become brand advocates",
  "Build a strong online presence through social media and a professional website",
  "Track your expenses meticulously to maintain healthy cash flow",
  "Network actively within your local business community",
  "Invest in employee training and development",
  "Create a unique value proposition that sets you apart",
  "Stay updated with industry trends and adapt accordingly",
  "Implement feedback systems to improve your products/services",
  "Develop a clear business plan with measurable goals",
  "Build an emergency fund for unexpected expenses",
  "Automate repetitive tasks to improve efficiency",
  "Focus on building long-term customer relationships",
  "Regularly analyze your competition",
  "Invest in digital marketing strategies",
  "Create systems and processes for scalability"
];

export const SmallBusinessTips = () => {
  const [currentTip, setCurrentTip] = useState("");
  const { toast } = useToast();

  const generateTip = () => {
    const randomIndex = Math.floor(Math.random() * businessTips.length);
    setCurrentTip(businessTips[randomIndex]);
  };

  const copyToClipboard = async () => {
    if (!currentTip) return;
    
    try {
      await navigator.clipboard.writeText(currentTip);
      toast({
        title: "Tip copied!",
        description: "The business tip has been copied to your clipboard.",
      });
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="container mx-auto p-4">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="h-6 w-6" />
            Small Business Tips Generator
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {currentTip && (
            <div className="bg-muted p-6 rounded-lg">
              <p className="text-lg">{currentTip}</p>
            </div>
          )}
          <div className="flex flex-wrap gap-4">
            <Button onClick={generateTip}>Generate Tip</Button>
            <Button
              variant="outline"
              onClick={copyToClipboard}
              disabled={!currentTip}
            >
              Copy to Clipboard
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};