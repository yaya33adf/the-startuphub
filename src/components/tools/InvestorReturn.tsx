import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export const InvestorReturn = () => {
  const [initialInvestment, setInitialInvestment] = useState("");
  const [projectedValue, setProjectedValue] = useState("");
  const [timeframe, setTimeframe] = useState("");
  const [roi, setRoi] = useState<number | null>(null);
  const { toast } = useToast();

  const calculateROI = () => {
    const investment = parseFloat(initialInvestment);
    const value = parseFloat(projectedValue);
    const years = parseFloat(timeframe);

    if (isNaN(investment) || isNaN(value) || isNaN(years)) {
      toast({
        title: "Invalid Input",
        description: "Please enter valid numbers for all fields",
        variant: "destructive",
      });
      return;
    }

    if (investment <= 0 || years <= 0) {
      toast({
        title: "Invalid Values",
        description: "Investment and timeframe must be greater than zero",
        variant: "destructive",
      });
      return;
    }

    const totalReturn = ((value - investment) / investment) * 100;
    const annualizedROI = (Math.pow(value / investment, 1 / years) - 1) * 100;
    setRoi(annualizedROI);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Investor Return Calculator</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Initial Investment ($)</label>
          <Input
            type="number"
            value={initialInvestment}
            onChange={(e) => setInitialInvestment(e.target.value)}
            placeholder="Enter initial investment amount"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Projected Future Value ($)</label>
          <Input
            type="number"
            value={projectedValue}
            onChange={(e) => setProjectedValue(e.target.value)}
            placeholder="Enter projected value"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Investment Timeframe (Years)</label>
          <Input
            type="number"
            value={timeframe}
            onChange={(e) => setTimeframe(e.target.value)}
            placeholder="Enter number of years"
          />
        </div>
        <Button onClick={calculateROI} className="w-full">Calculate ROI</Button>
        {roi !== null && (
          <div className="mt-4 p-4 bg-secondary rounded-lg">
            <p className="text-center">
              Annualized ROI: <span className="font-bold">{roi.toFixed(2)}%</span>
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};