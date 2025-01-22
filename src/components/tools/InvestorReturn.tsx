import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export const InvestorReturn = () => {
  const [initialInvestment, setInitialInvestment] = useState<number>(0);
  const [projectedValue, setProjectedValue] = useState<number>(0);
  const [timeframe, setTimeframe] = useState<number>(0);
  const [roi, setRoi] = useState<number | null>(null);

  const calculateROI = () => {
    if (initialInvestment === 0) {
      setRoi(null);
      return;
    }
    const totalReturn = ((projectedValue - initialInvestment) / initialInvestment) * 100;
    const annualizedReturn = (totalReturn / timeframe);
    setRoi(Math.round(annualizedReturn * 100) / 100);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Investor Return Calculator</h2>
      <div className="space-y-4">
        <div>
          <Label htmlFor="initialInvestment">Initial Investment ($)</Label>
          <Input
            id="initialInvestment"
            type="number"
            min="0"
            value={initialInvestment}
            onChange={(e) => setInitialInvestment(Number(e.target.value))}
            className="mt-1"
          />
        </div>
        <div>
          <Label htmlFor="projectedValue">Projected Value ($)</Label>
          <Input
            id="projectedValue"
            type="number"
            min="0"
            value={projectedValue}
            onChange={(e) => setProjectedValue(Number(e.target.value))}
            className="mt-1"
          />
        </div>
        <div>
          <Label htmlFor="timeframe">Investment Timeframe (years)</Label>
          <Input
            id="timeframe"
            type="number"
            min="0"
            value={timeframe}
            onChange={(e) => setTimeframe(Number(e.target.value))}
            className="mt-1"
          />
        </div>
        <Button onClick={calculateROI} className="w-full">
          Calculate Annual ROI
        </Button>
        {roi !== null && (
          <div className="mt-4 p-4 bg-secondary rounded-lg">
            <p className="text-lg">
              Expected annual ROI:{" "}
              <span className="font-bold">{roi}%</span>
            </p>
          </div>
        )}
      </div>
    </Card>
  );
};