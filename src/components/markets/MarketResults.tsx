import { TrendResults } from "@/components/TrendResults";
import type { TrendData } from "@/types/trends";

interface MarketResultsProps {
  data: TrendData;
}

export const MarketResults = ({ data }: MarketResultsProps) => {
  console.log("Rendering MarketResults with data:", data);
  
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-semibold mb-6">Market Analysis Results</h2>
        <TrendResults data={data} />
      </div>
    </div>
  );
};