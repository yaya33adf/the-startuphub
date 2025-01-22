import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export const BreakEvenAnalysis = () => {
  const [fixedCosts, setFixedCosts] = useState<number>(0);
  const [pricePerUnit, setPricePerUnit] = useState<number>(0);
  const [variableCostPerUnit, setVariableCostPerUnit] = useState<number>(0);
  const [breakEvenPoint, setBreakEvenPoint] = useState<number | null>(null);

  const calculateBreakEven = () => {
    if (pricePerUnit - variableCostPerUnit === 0) {
      setBreakEvenPoint(null);
      return;
    }
    const breakEvenUnits = fixedCosts / (pricePerUnit - variableCostPerUnit);
    setBreakEvenPoint(Math.ceil(breakEvenUnits));
  };

  return (
    <Card className="w-full max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Break-Even Analysis</h2>
      <div className="space-y-4">
        <div>
          <Label htmlFor="fixedCosts">Fixed Costs ($)</Label>
          <Input
            id="fixedCosts"
            type="number"
            min="0"
            value={fixedCosts}
            onChange={(e) => setFixedCosts(Number(e.target.value))}
            className="mt-1"
          />
        </div>
        <div>
          <Label htmlFor="pricePerUnit">Price per Unit ($)</Label>
          <Input
            id="pricePerUnit"
            type="number"
            min="0"
            value={pricePerUnit}
            onChange={(e) => setPricePerUnit(Number(e.target.value))}
            className="mt-1"
          />
        </div>
        <div>
          <Label htmlFor="variableCost">Variable Cost per Unit ($)</Label>
          <Input
            id="variableCost"
            type="number"
            min="0"
            value={variableCostPerUnit}
            onChange={(e) => setVariableCostPerUnit(Number(e.target.value))}
            className="mt-1"
          />
        </div>
        <Button onClick={calculateBreakEven} className="w-full">
          Calculate Break-Even Point
        </Button>
        {breakEvenPoint !== null && (
          <div className="mt-4 p-4 bg-secondary rounded-lg">
            <p className="text-lg">
              You need to sell{" "}
              <span className="font-bold">{breakEvenPoint} units</span> to break
              even
            </p>
          </div>
        )}
      </div>
    </Card>
  );
};