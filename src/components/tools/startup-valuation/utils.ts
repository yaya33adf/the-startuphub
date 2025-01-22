import { ValuationFormValues } from "./ValuationForm";

export const calculateValuation = (data: ValuationFormValues): number => {
  const growthMultiple = 1 + (data.growthRate / 100);
  const marketSizeMultiple = Math.log10(data.marketSize / 1000000) || 1;
  const marginMultiple = (data.margins / 100) || 0.1;
  
  const baseMultiple = 5;
  const revenueMultiple = baseMultiple * growthMultiple * marketSizeMultiple * marginMultiple;
  
  return Math.round(data.revenue * revenueMultiple);
};