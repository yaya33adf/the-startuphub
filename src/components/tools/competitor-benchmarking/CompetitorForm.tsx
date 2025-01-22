import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus } from "lucide-react";
import { Competitor } from "./types";

interface CompetitorFormProps {
  competitor: Competitor;
  onCompetitorChange: (competitor: Competitor) => void;
  onAdd: () => void;
}

export const CompetitorForm = ({ competitor, onCompetitorChange, onAdd }: CompetitorFormProps) => {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div>
          <label className="text-sm font-medium">Competitor Name</label>
          <Input
            value={competitor.name}
            onChange={(e) =>
              onCompetitorChange({ ...competitor, name: e.target.value })
            }
            placeholder="Enter competitor name"
          />
        </div>
        <div>
          <label className="text-sm font-medium">Market Share</label>
          <Select
            value={competitor.marketShare}
            onValueChange={(value) =>
              onCompetitorChange({ ...competitor, marketShare: value })
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
            value={competitor.pricing}
            onValueChange={(value) =>
              onCompetitorChange({ ...competitor, pricing: value })
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
            value={competitor.strengths}
            onChange={(e) =>
              onCompetitorChange({ ...competitor, strengths: e.target.value })
            }
            placeholder="Enter key strengths"
          />
        </div>
        <div className="md:col-span-2 lg:col-span-3">
          <label className="text-sm font-medium">Key Weaknesses</label>
          <Textarea
            value={competitor.weaknesses}
            onChange={(e) =>
              onCompetitorChange({ ...competitor, weaknesses: e.target.value })
            }
            placeholder="Enter key weaknesses"
          />
        </div>
        <div className="md:col-span-2 lg:col-span-3">
          <label className="text-sm font-medium">Unique Value Proposition</label>
          <Textarea
            value={competitor.uniqueValue}
            onChange={(e) =>
              onCompetitorChange({ ...competitor, uniqueValue: e.target.value })
            }
            placeholder="Enter unique value proposition"
          />
        </div>
      </div>

      <Button onClick={onAdd} className="w-full">
        <Plus className="w-4 h-4 mr-2" />
        Add Competitor
      </Button>
    </div>
  );
};