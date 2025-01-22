import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Download } from "lucide-react";
import html2canvas from "html2canvas";
import { CompetitorForm } from "./competitor-benchmarking/CompetitorForm";
import { CompetitorTable } from "./competitor-benchmarking/CompetitorTable";
import { Competitor } from "./competitor-benchmarking/types";

export const CompetitorBenchmarking = () => {
  const [competitors, setCompetitors] = useState<Competitor[]>([]);
  const { toast } = useToast();
  const [newCompetitor, setNewCompetitor] = useState<Competitor>({
    name: "",
    strengths: "",
    weaknesses: "",
    marketShare: "",
    pricing: "",
    uniqueValue: "",
  });

  const handleAddCompetitor = () => {
    if (!newCompetitor.name) {
      toast({
        title: "Error",
        description: "Competitor name is required",
        variant: "destructive",
      });
      return;
    }

    setCompetitors([...competitors, newCompetitor]);
    setNewCompetitor({
      name: "",
      strengths: "",
      weaknesses: "",
      marketShare: "",
      pricing: "",
      uniqueValue: "",
    });

    toast({
      title: "Success",
      description: "Competitor added successfully",
    });
  };

  const handleRemoveCompetitor = (index: number) => {
    const newCompetitors = competitors.filter((_, i) => i !== index);
    setCompetitors(newCompetitors);
    toast({
      title: "Success",
      description: "Competitor removed successfully",
    });
  };

  const handleDownload = async () => {
    const element = document.getElementById("competitor-table");
    if (!element) return;

    try {
      const canvas = await html2canvas(element);
      const data = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = data;
      link.download = "competitor-analysis.png";
      link.click();

      toast({
        title: "Success",
        description: "Analysis downloaded successfully",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to download analysis",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="space-y-6">
      <CompetitorForm
        competitor={newCompetitor}
        onCompetitorChange={setNewCompetitor}
        onAdd={handleAddCompetitor}
      />

      <CompetitorTable 
        competitors={competitors}
        onRemove={handleRemoveCompetitor}
      />

      {competitors.length > 0 && (
        <Button onClick={handleDownload} className="w-full">
          <Download className="w-4 h-4 mr-2" />
          Download Analysis
        </Button>
      )}
    </div>
  );
};