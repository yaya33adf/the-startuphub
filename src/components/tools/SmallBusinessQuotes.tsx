import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const businessQuotes = [
  "Success is not final; failure is not fatal: it is the courage to continue that counts.",
  "The best way to predict the future is to create it.",
  "Don't wait for opportunity. Create it.",
  "Success usually comes to those who are too busy to be looking for it.",
  "The secret of getting ahead is getting started.",
  "Your most unhappy customers are your greatest source of learning.",
  "The only way to do great work is to love what you do.",
  "Chase the vision, not the money; the money will end up following you.",
  "Success is walking from failure to failure with no loss of enthusiasm.",
  "The road to success and the road to failure are almost exactly the same.",
  "If you're not willing to risk the usual, you will have to settle for the ordinary.",
  "The best marketing doesn't feel like marketing.",
  "A goal without a plan is just a wish.",
  "Growth is never by mere chance; it is the result of forces working together.",
  "The harder you work, the luckier you get."
];

export const SmallBusinessQuotes = () => {
  const [currentQuote, setCurrentQuote] = useState("");
  const { toast } = useToast();

  const generateQuote = () => {
    const randomIndex = Math.floor(Math.random() * businessQuotes.length);
    setCurrentQuote(businessQuotes[randomIndex]);
  };

  const copyToClipboard = async () => {
    if (!currentQuote) return;
    
    try {
      await navigator.clipboard.writeText(currentQuote);
      toast({
        title: "Quote copied!",
        description: "The quote has been copied to your clipboard.",
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
            <Quote className="h-6 w-6" />
            Small Business Quotes Generator
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {currentQuote && (
            <div className="bg-muted p-6 rounded-lg">
              <p className="text-lg italic">{currentQuote}</p>
            </div>
          )}
          <div className="flex flex-wrap gap-4">
            <Button onClick={generateQuote}>Generate Quote</Button>
            <Button
              variant="outline"
              onClick={copyToClipboard}
              disabled={!currentQuote}
            >
              Copy to Clipboard
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};