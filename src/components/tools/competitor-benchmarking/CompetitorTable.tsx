import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Trash2 } from "lucide-react";
import { Competitor } from "./types";

interface CompetitorTableProps {
  competitors: Competitor[];
  onRemove: (index: number) => void;
}

export const CompetitorTable = ({ competitors, onRemove }: CompetitorTableProps) => {
  return (
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
                  onClick={() => onRemove(index)}
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};