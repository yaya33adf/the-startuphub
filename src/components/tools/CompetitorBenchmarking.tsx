import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Download, Plus, Trash2 } from "lucide-react";
import html2canvas from "html2canvas";

interface Competitor {
  name: string;
  strengths: string;
  weaknesses: string;
  marketShare: string;
  pricing: string;
  uniqueValue: string;
}

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
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div>
          <label className="text-sm font-medium">Competitor Name</label>
          <Input
            value={newCompetitor.name}
            onChange={(e) =>
              setNewCompetitor({ ...newCompetitor, name: e.target.value })
            }
            placeholder="Enter competitor name"
          />
        </div>
        <div>
          <label className="text-sm font-medium">Market Share</label>
          <Select
            value={newCompetitor.marketShare}
            onValueChange={(value) =>
              setNewCompetitor({ ...newCompetitor, marketShare: value })
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Select market share" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="high">High (&gt;30%)</SelectItem>
              <SelectItem value="medium">Medium (10-30%)</SelectItem>
              <SelectItem value="low">Low (&lt;10%)</SelectItem>
              <SelectItem value="unknown">Unknown</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <label className="text-sm font-medium">Pricing Level</label>
          <Select
            value={newCompetitor.pricing}
            onValueChange={(value) =>
              setNewCompetitor({ ...newCompetitor, pricing: value })
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Select pricing level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="premium">Premium</SelectItem>
              <SelectItem value="mid-range">Mid-range</SelectItem>
              <SelectItem value="budget">Budget</SelectItem>
              <SelectItem value="unknown">Unknown</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="md:col-span-2 lg:col-span-3">
          <label className="text-sm font-medium">Key Strengths</label>
          <Textarea
            value={newCompetitor.strengths}
            onChange={(e) =>
              setNewCompetitor({ ...newCompetitor, strengths: e.target.value })
            }
            placeholder="Enter key strengths"
          />
        </div>
        <div className="md:col-span-2 lg:col-span-3">
          <label className="text-sm font-medium">Key Weaknesses</label>
          <Textarea
            value={newCompetitor.weaknesses}
            onChange={(e) =>
              setNewCompetitor({ ...newCompetitor, weaknesses: e.target.value })
            }
            placeholder="Enter key weaknesses"
          />
        </div>
        <div className="md:col-span-2 lg:col-span-3">
          <label className="text-sm font-medium">Unique Value Proposition</label>
          <Textarea
            value={newCompetitor.uniqueValue}
            onChange={(e) =>
              setNewCompetitor({ ...newCompetitor, uniqueValue: e.target.value })
            }
            placeholder="Enter unique value proposition"
          />
        </div>
      </div>

      <Button onClick={handleAddCompetitor} className="w-full">
        <Plus className="w-4 h-4 mr-2" />
        Add Competitor
      </Button>

      <div className="rounded-md border" id="competitor-table">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Competitor</TableHead>
              <TableHead>Market Share</TableHead>
              <TableHead>Pricing</TableHead>
              <TableHead>Strengths</TableHead>
              <TableHead>Weaknesses</TableHead>
              <TableHead>Unique Value</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {competitors.map((competitor, index) => (
              <TableRow key={index}>
                <TableCell>{competitor.name}</TableCell>
                <TableCell>{competitor.marketShare}</TableCell>
                <TableCell>{competitor.pricing}</TableCell>
                <TableCell>{competitor.strengths}</TableCell>
                <TableCell>{competitor.weaknesses}</TableCell>
                <TableCell>{competitor.uniqueValue}</TableCell>
                <TableCell>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleRemoveCompetitor(index)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {competitors.length > 0 && (
        <Button onClick={handleDownload} className="w-full">
          <Download className="w-4 h-4 mr-2" />
          Download Analysis
        </Button>
      )}
    </div>
  );
};