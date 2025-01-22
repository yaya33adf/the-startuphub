import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { PageSEO } from "@/components/seo/PageSEO";
import { useToast } from "@/components/ui/use-toast";

const StartupValuationPage = () => {
  const [revenue, setRevenue] = useState("");
  const [growthRate, setGrowthRate] = useState("");
  const [marketSize, setMarketSize] = useState("");
  const [valuation, setValuation] = useState<number | null>(null);
  const { toast } = useToast();

  const calculateValuation = () => {
    // Basic valuation formula: (Annual Revenue * Growth Rate Multiple) + Market Size Factor
    const annualRev = parseFloat(revenue) || 0;
    const growth = parseFloat(growthRate) || 0;
    const market = parseFloat(marketSize) || 0;

    if (annualRev === 0 || growth === 0 || market === 0) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields to calculate valuation.",
        variant: "destructive",
      });
      return;
    }

    // Growth rate multiple (higher growth = higher multiple)
    const growthMultiple = 1 + (growth / 100);
    
    // Market size factor (larger market = higher potential)
    const marketFactor = Math.log10(market) * 0.5;
    
    // Calculate valuation
    const calculatedValuation = (annualRev * growthMultiple) + (annualRev * marketFactor);
    
    setValuation(Math.round(calculatedValuation * 100) / 100);
    
    toast({
      title: "Valuation Calculated",
      description: "Your startup valuation has been estimated based on the provided metrics.",
    });
  };

  return (
    <>
      <PageSEO 
        title="Startup Valuation Calculator | Calculate Your Startup's Worth"
        description="Estimate your startup's valuation based on revenue, growth rate, and market size using our simple calculator tool."
      />
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-6">Startup Valuation Calculator</h1>
        <p className="text-muted-foreground mb-8">
          Estimate your startup's worth based on key metrics like revenue, growth rate, and market size.
        </p>

        <Card className="p-6 max-w-2xl">
          <div className="space-y-6">
            <div>
              <Label htmlFor="revenue">Annual Revenue ($)</Label>
              <Input
                id="revenue"
                type="number"
                placeholder="Enter annual revenue"
                value={revenue}
                onChange={(e) => setRevenue(e.target.value)}
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="growthRate">Annual Growth Rate (%)</Label>
              <Input
                id="growthRate"
                type="number"
                placeholder="Enter growth rate"
                value={growthRate}
                onChange={(e) => setGrowthRate(e.target.value)}
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="marketSize">Total Addressable Market Size ($)</Label>
              <Input
                id="marketSize"
                type="number"
                placeholder="Enter market size"
                value={marketSize}
                onChange={(e) => setMarketSize(e.target.value)}
                className="mt-1"
              />
            </div>

            <Button 
              onClick={calculateValuation}
              className="w-full"
            >
              Calculate Valuation
            </Button>

            {valuation !== null && (
              <div className="mt-6 p-4 bg-muted rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Estimated Valuation</h3>
                <p className="text-2xl font-bold text-primary">
                  ${valuation.toLocaleString()}
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Note: This is a simplified estimation. Actual startup valuations depend on many additional factors.
                </p>
              </div>
            )}
          </div>
        </Card>
      </div>
    </>
  );
};

export default StartupValuationPage;