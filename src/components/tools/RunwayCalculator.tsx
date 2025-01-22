import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export const RunwayCalculator = () => {
  const [monthlyBurnRate, setMonthlyBurnRate] = useState("");
  const [currentFunds, setCurrentFunds] = useState("");
  const [runway, setRunway] = useState<number | null>(null);
  const { toast } = useToast();

  const calculateRunway = () => {
    const burn = parseFloat(monthlyBurnRate);
    const funds = parseFloat(currentFunds);

    if (isNaN(burn) || isNaN(funds)) {
      toast({
        title: "Invalid Input",
        description: "Please enter valid numbers for both fields",
        variant: "destructive",
      });
      return;
    }

    if (burn <= 0) {
      toast({
        title: "Invalid Burn Rate",
        description: "Monthly burn rate must be greater than zero",
        variant: "destructive",
      });
      return;
    }

    const runwayMonths = Math.floor(funds / burn);
    setRunway(runwayMonths);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Runway Calculator</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Monthly Burn Rate ($)</label>
          <Input
            type="number"
            value={monthlyBurnRate}
            onChange={(e) => setMonthlyBurnRate(e.target.value)}
            placeholder="Enter monthly expenses"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Current Funds ($)</label>
          <Input
            type="number"
            value={currentFunds}
            onChange={(e) => setCurrentFunds(e.target.value)}
            placeholder="Enter available funds"
          />
        </div>
        <Button onClick={calculateRunway} className="w-full">Calculate Runway</Button>
        {runway !== null && (
          <div className="mt-4 p-4 bg-secondary rounded-lg">
            <p className="text-center">
              Your runway is approximately <span className="font-bold">{runway} months</span>
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};