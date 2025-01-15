import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

interface TrendHeaderProps {
  onExport: () => void;
}

export const TrendHeader = ({ onExport }: TrendHeaderProps) => {
  return (
    <div className="flex justify-between items-center">
      <h2 className="text-2xl font-bold">Trend Analysis Results</h2>
      <Button onClick={onExport} variant="outline">
        <Download className="w-4 h-4 mr-2" />
        Export PDF
      </Button>
    </div>
  );
};