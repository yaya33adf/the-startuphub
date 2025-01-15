import { useToast } from "@/components/ui/use-toast";
import { memo, useState } from "react";
import { usePDF } from 'react-to-pdf';
import type { TrendData } from "@/types/trends";
import { TrendHeader } from "./trends/TrendHeader";
import { TrendScoreTable } from "./trends/TrendScoreTable";
import { TrendInsights } from "./trends/TrendInsights";
import { CompetitorAnalysis } from "./trends/CompetitorAnalysis";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";
import { Input } from "./ui/input";

interface TrendResultsProps {
  data: TrendData;
}

export const TrendResults = memo(({ data }: TrendResultsProps) => {
  const { toast } = useToast();
  const { toPDF, targetRef } = usePDF({filename: 'trend-analysis-report.pdf'});
  const [competitors, setCompetitors] = useState<string[]>([]);
  const [newCompetitor, setNewCompetitor] = useState('');

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

  const handleAddCompetitor = () => {
    if (!newCompetitor.trim()) {
      toast({
        title: "Invalid competitor",
        description: "Please enter a competitor name",
        variant: "destructive",
      });
      return;
    }

    if (competitors.length >= 3) {
      toast({
        title: "Maximum competitors reached",
        description: "You can only add up to 3 competitors",
        variant: "destructive",
      });
      return;
    }

    if (competitors.includes(newCompetitor)) {
      toast({
        title: "Duplicate competitor",
        description: "This competitor has already been added",
        variant: "destructive",
      });
      return;
    }

    setCompetitors([...competitors, newCompetitor]);
    setNewCompetitor('');
  };

  const handleRemoveCompetitor = (competitor: string) => {
    setCompetitors(competitors.filter(c => c !== competitor));
  };

  const competitorData = competitors.length > 0 ? [
    { 
      date: '2024-01', 
      current: data.score,
      ...Object.fromEntries(competitors.map((c, i) => [c, 65 - i * 10]))
    },
    { 
      date: '2024-02', 
      current: data.score + 2,
      ...Object.fromEntries(competitors.map((c, i) => [c, 68 - i * 10]))
    },
    { 
      date: '2024-03', 
      current: data.score + 5,
      ...Object.fromEntries(competitors.map((c, i) => [c, 70 - i * 10]))
    }
  ] : [];

  return (
    <div className="space-y-8 px-4 md:px-0">
      <TrendHeader onExport={handleExportPDF} />
      <div ref={targetRef} className="bg-white p-4 md:p-6 rounded-lg shadow space-y-6">
        <TrendScoreTable data={data} />
        <TrendInsights />
        
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <h3 className="text-lg font-semibold">Competitor Analysis</h3>
            <div className="flex flex-col sm:flex-row gap-2">
              <Input
                placeholder="Add competitor"
                value={newCompetitor}
                onChange={(e) => setNewCompetitor(e.target.value)}
                className="w-full sm:w-48"
                disabled={competitors.length >= 3}
              />
              <Button
                onClick={handleAddCompetitor}
                disabled={competitors.length >= 3}
                size="sm"
                className="w-full sm:w-auto"
              >
                <Plus className="w-4 h-4 mr-1" />
                Add
              </Button>
            </div>
          </div>
          
          {competitors.length > 0 && (
            <div className="space-y-4">
              <div className="flex gap-2 flex-wrap">
                {competitors.map((competitor) => (
                  <Button
                    key={competitor}
                    variant="secondary"
                    size="sm"
                    onClick={() => handleRemoveCompetitor(competitor)}
                    className="text-sm"
                  >
                    {competitor} ×
                  </Button>
                ))}
              </div>
              <CompetitorAnalysis 
                data={competitorData}
                competitors={competitors}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
});

TrendResults.displayName = "TrendResults";