import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export const CrowdfundingGoal = () => {
  const [productionCosts, setProductionCosts] = useState("");
  const [marketingCosts, setMarketingCosts] = useState("");
  const [platformFeePercentage, setPlatformFeePercentage] = useState("5");
  const [totalGoal, setTotalGoal] = useState<number | null>(null);
  const { toast } = useToast();

  const calculateGoal = () => {
    const production = parseFloat(productionCosts);
    const marketing = parseFloat(marketingCosts);
    const feePercentage = parseFloat(platformFeePercentage);

    if (isNaN(production) || isNaN(marketing) || isNaN(feePercentage)) {
      toast({
        title: "Invalid Input",
        description: "Please enter valid numbers for all fields",
        variant: "destructive",
      });
      return;
    }

    if (feePercentage < 0 || feePercentage > 100) {
      toast({
        title: "Invalid Fee Percentage",
        description: "Platform fee percentage must be between 0 and 100",
        variant: "destructive",
      });
      return;
    }

    const subtotal = production + marketing;
    const platformFee = (subtotal * feePercentage) / 100;
    const total = subtotal + platformFee;
    setTotalGoal(total);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Crowdfunding Goal Calculator</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Production Costs ($)</label>
          <Input
            type="number"
            value={productionCosts}
            onChange={(e) => setProductionCosts(e.target.value)}
            placeholder="Enter production costs"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Marketing Costs ($)</label>
          <Input
            type="number"
            value={marketingCosts}
            onChange={(e) => setMarketingCosts(e.target.value)}
            placeholder="Enter marketing costs"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Platform Fee (%)</label>
          <Input
            type="number"
            value={platformFeePercentage}
            onChange={(e) => setPlatformFeePercentage(e.target.value)}
            placeholder="Enter platform fee percentage"
          />
        </div>
        <Button onClick={calculateGoal} className="w-full">Calculate Funding Goal</Button>
        {totalGoal !== null && (
          <div className="mt-4 p-4 bg-secondary rounded-lg">
            <p className="text-center">
              Recommended funding goal: <span className="font-bold">${totalGoal.toFixed(2)}</span>
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};