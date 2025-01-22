import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export const RunwayCalculator = () => {
  const [currentFunds, setCurrentFunds] = useState<number>(0);
  const [monthlyBurnRate, setMonthlyBurnRate] = useState<number>(0);
  const [runway, setRunway] = useState<number | null>(null);

  const calculateRunway = () => {
    if (monthlyBurnRate === 0) {
      setRunway(null);
      return;
    }
    const runwayMonths = currentFunds / monthlyBurnRate;
    setRunway(Math.round(runwayMonths * 10) / 10);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Runway Calculator</h2>
      <div className="space-y-4">
        <div>
          <Label htmlFor="currentFunds">Current Funds ($)</Label>
          <Input
            id="currentFunds"
            type="number"
            min="0"
            value={currentFunds}
            onChange={(e) => setCurrentFunds(Number(e.target.value))}
            className="mt-1"
          />
        </div>
        <div>
          <Label htmlFor="burnRate">Monthly Burn Rate ($)</Label>
          <Input
            id="burnRate"
            type="number"
            min="0"
            value={monthlyBurnRate}
            onChange={(e) => setMonthlyBurnRate(Number(e.target.value))}
            className="mt-1"
          />
        </div>
        <Button onClick={calculateRunway} className="w-full">
          Calculate Runway
        </Button>
        {runway !== null && (
          <div className="mt-4 p-4 bg-secondary rounded-lg">
            <p className="text-lg">
              Your runway is approximately{" "}
              <span className="font-bold">{runway} months</span>
            </p>
          </div>
        )}
      </div>
    </Card>
  );
};