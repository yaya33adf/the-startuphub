import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { ValuationForm, type ValuationFormValues } from "./startup-valuation/ValuationForm";
import { ValuationResult } from "./startup-valuation/ValuationResult";
import { calculateValuation } from "./startup-valuation/utils";

export const StartupValuation = () => {
  const [valuation, setValuation] = useState<number | null>(null);
  const { toast } = useToast();

  const handleCalculate = (data: ValuationFormValues) => {
    console.log("Form submitted with data:", data);
    const calculatedValuation = calculateValuation(data);
    setValuation(calculatedValuation);
    
    toast({
      title: "Valuation Calculated",
      description: `Estimated valuation: $${calculatedValuation.toLocaleString()}`,
    });
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Startup Valuation Calculator</h1>
      <p className="text-muted-foreground mb-8">
        Estimate your startup's valuation based on key metrics including revenue,
        growth rate, market size, and profit margins.
      </p>

      <div className="grid gap-8 md:grid-cols-2">
        <ValuationForm onCalculate={handleCalculate} />
        <ValuationResult valuation={valuation} />
      </div>
    </div>
  );
};