import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export const BreakEvenAnalysis = () => {
  const [fixedCosts, setFixedCosts] = useState("");
  const [pricePerUnit, setPricePerUnit] = useState("");
  const [variableCostPerUnit, setVariableCostPerUnit] = useState("");
  const [breakEvenUnits, setBreakEvenUnits] = useState<number | null>(null);
  const { toast } = useToast();

  const calculateBreakEven = () => {
    const fixed = parseFloat(fixedCosts);
    const price = parseFloat(pricePerUnit);
    const variable = parseFloat(variableCostPerUnit);

    if (isNaN(fixed) || isNaN(price) || isNaN(variable)) {
      toast({
        title: "Invalid Input",
        description: "Please enter valid numbers for all fields",
        variant: "destructive",
      });
      return;
    }

    if (price <= variable) {
      toast({
        title: "Invalid Pricing",
        description: "Price per unit must be greater than variable cost per unit",
        variant: "destructive",
      });
      return;
    }

    const breakEven = Math.ceil(fixed / (price - variable));
    setBreakEvenUnits(breakEven);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Break-even Analysis</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Fixed Costs ($)</label>
          <Input
            type="number"
            value={fixedCosts}
            onChange={(e) => setFixedCosts(e.target.value)}
            placeholder="Enter total fixed costs"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Price per Unit ($)</label>
          <Input
            type="number"
            value={pricePerUnit}
            onChange={(e) => setPricePerUnit(e.target.value)}
            placeholder="Enter selling price per unit"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Variable Cost per Unit ($)</label>
          <Input
            type="number"
            value={variableCostPerUnit}
            onChange={(e) => setVariableCostPerUnit(e.target.value)}
            placeholder="Enter variable cost per unit"
          />
        </div>
        <Button onClick={calculateBreakEven} className="w-full">Calculate Break-even Point</Button>
        {breakEvenUnits !== null && (
          <div className="mt-4 p-4 bg-secondary rounded-lg">
            <p className="text-center">
              You need to sell <span className="font-bold">{breakEvenUnits} units</span> to break even
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};