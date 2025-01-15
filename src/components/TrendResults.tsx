import { useToast } from "@/components/ui/use-toast";
import { useRef, memo } from "react";
import { usePDF } from 'react-to-pdf';
import type { TrendData } from "@/types/trends";
import { TrendHeader } from "./trends/TrendHeader";
import { TrendScoreTable } from "./trends/TrendScoreTable";
import { TrendInsights } from "./trends/TrendInsights";

interface TrendResultsProps {
  data: TrendData;
}

export const TrendResults = memo(({ data }: TrendResultsProps) => {
  const { toast } = useToast();
  const { toPDF, targetRef } = usePDF({filename: 'trend-analysis-report.pdf'});

  const handleExportPDF = async () => {
    try {
      await toPDF();
      toast({
        title: "Report exported successfully",
        description: "Your trend analysis report has been downloaded as PDF",
      });
    } catch (error) {
      console.error('PDF export error:', error);
      toast({
        title: "Export failed",
        description: "Failed to export the report. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="space-y-8">
      <TrendHeader onExport={handleExportPDF} />
      <div ref={targetRef} className="bg-white p-6 rounded-lg shadow">
        <TrendScoreTable data={data} />
        <TrendInsights />
      </div>
    </div>
  );
});

TrendResults.displayName = "TrendResults";