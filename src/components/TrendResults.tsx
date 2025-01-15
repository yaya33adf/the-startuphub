import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Globe, Calendar, Download } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useRef, memo } from "react";
import { usePDF } from 'react-to-pdf';
import { 
  calculateTrendIndicators,
  preparePlatformData,
  sampleInsightsAndRecommendations,
} from "@/utils/trendDataUtils";
import type { TrendData } from "@/types/trends";

interface TrendResultsProps {
  data: TrendData;
}

export const TrendResults = memo(({ data }: TrendResultsProps) => {
  const { toast } = useToast();
  const tableRef = useRef<HTMLDivElement>(null);
  const { toPDF, targetRef } = usePDF({filename: 'trend-analysis-report.pdf'});

  const {
    avgScore,
    interestLevel,
    searchVolume,
    growthRate,
    communitySize
  } = calculateTrendIndicators(data.score);

  const platformData = preparePlatformData(data.metadata);
  const { insights } = sampleInsightsAndRecommendations;

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
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Trend Analysis Results</h2>
        <Button onClick={handleExportPDF} variant="outline">
          <Download className="w-4 h-4 mr-2" />
          Export PDF
        </Button>
      </div>

      <div ref={targetRef} className="bg-white p-6 rounded-lg shadow">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Metric</TableHead>
              <TableHead>Value</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">Overall Trend Score</TableCell>
              <TableCell>{avgScore}/100</TableCell>
              <TableCell>{avgScore > 70 ? "Strong" : avgScore > 50 ? "Moderate" : "Weak"}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Interest Level</TableCell>
              <TableCell>{interestLevel}</TableCell>
              <TableCell>{interestLevel === "High" ? "🔥 Trending" : "📊 Stable"}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Search Volume</TableCell>
              <TableCell>{searchVolume}</TableCell>
              <TableCell>{searchVolume === "Growing" ? "📈 Increasing" : "➡️ Stable"}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Growth Rate</TableCell>
              <TableCell>{growthRate}</TableCell>
              <TableCell>{parseFloat(growthRate) > 0 ? "📈 Positive" : "📉 Negative"}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Community Size</TableCell>
              <TableCell>{communitySize}</TableCell>
              <TableCell>{communitySize === "Growing" ? "👥 Expanding" : "👤 Stable"}</TableCell>
            </TableRow>
            {platformData.map((platform, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{platform.name} Score</TableCell>
                <TableCell>{platform.score}/100</TableCell>
                <TableCell>
                  {platform.score > 70 ? "🌟 High" : platform.score > 50 ? "⭐ Medium" : "⚪ Low"}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Key Insights</h3>
          <ul className="list-disc list-inside space-y-2">
            {insights.map((insight, index) => (
              <li key={index} className="text-gray-700">{insight}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
});

TrendResults.displayName = "TrendResults";