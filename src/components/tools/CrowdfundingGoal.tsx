import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export const CrowdfundingGoal = () => {
  const [productionCosts, setProductionCosts] = useState<number>(0);
  const [marketingCosts, setMarketingCosts] = useState<number>(0);
  const [platformFeePercentage, setPlatformFeePercentage] = useState<number>(5);
  const [bufferPercentage, setBufferPercentage] = useState<number>(10);
  const [totalGoal, setTotalGoal] = useState<number | null>(null);

  const calculateGoal = () => {
    const subtotal = productionCosts + marketingCosts;
    const platformFee = (subtotal * platformFeePercentage) / 100;
    const buffer = (subtotal * bufferPercentage) / 100;
    const total = subtotal + platformFee + buffer;
    setTotalGoal(Math.ceil(total));
  };

  return (
    <Card className="w-full max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Crowdfunding Goal Calculator</h2>
      <div className="space-y-4">
        <div>
          <Label htmlFor="productionCosts">Production Costs ($)</Label>
          <Input
            id="productionCosts"
            type="number"
            min="0"
            value={productionCosts}
            onChange={(e) => setProductionCosts(Number(e.target.value))}
            className="mt-1"
          />
        </div>
        <div>
          <Label htmlFor="marketingCosts">Marketing Costs ($)</Label>
          <Input
            id="marketingCosts"
            type="number"
            min="0"
            value={marketingCosts}
            onChange={(e) => setMarketingCosts(Number(e.target.value))}
            className="mt-1"
          />
        </div>
        <div>
          <Label htmlFor="platformFee">Platform Fee (%)</Label>
          <Input
            id="platformFee"
            type="number"
            min="0"
            max="100"
            value={platformFeePercentage}
            onChange={(e) => setPlatformFeePercentage(Number(e.target.value))}
            className="mt-1"
          />
        </div>
        <div>
          <Label htmlFor="buffer">Buffer Percentage (%)</Label>
          <Input
            id="buffer"
            type="number"
            min="0"
            max="100"
            value={bufferPercentage}
            onChange={(e) => setBufferPercentage(Number(e.target.value))}
            className="mt-1"
          />
        </div>
        <Button onClick={calculateGoal} className="w-full">
          Calculate Funding Goal
        </Button>
        {totalGoal !== null && (
          <div className="mt-4 p-4 bg-secondary rounded-lg">
            <p className="text-lg">
              Recommended funding goal:{" "}
              <span className="font-bold">${totalGoal.toLocaleString()}</span>
            </p>
          </div>
        )}
      </div>
    </Card>
  );
};