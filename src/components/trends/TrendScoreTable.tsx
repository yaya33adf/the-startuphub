import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import type { TrendData } from "@/types/trends";
import { calculateTrendIndicators } from "@/utils/trendDataUtils";

interface TrendScoreTableProps {
  data: TrendData;
}

export const TrendScoreTable = ({ data }: TrendScoreTableProps) => {
  console.log('TrendScoreTable data:', data); // Debug log to see incoming data

  const {
    avgScore,
    interestLevel,
    searchVolume,
    growthRate,
    communitySize
  } = calculateTrendIndicators(data.score);

  // Create platform data array with proper metadata access
  const platformData = [
    { name: 'GitHub', score: data.metadata?.github?.score || 0 },
    { name: 'Google', score: data.metadata?.google_trends?.score || 0 },
    { name: 'HN', score: data.metadata?.hacker_news?.score || 0 },
    { name: 'Stack Overflow', score: data.metadata?.stack_overflow?.score || 0 },
    { name: 'Wikipedia', score: data.metadata?.wikipedia?.score || 0 },
    { name: 'NPM', score: data.metadata?.npm?.score || 0 },
    { name: 'PyPI', score: data.metadata?.pypi?.score || 0 }
  ].sort((a, b) => b.score - a.score);

  console.log('Platform scores:', platformData); // Debug log to see processed scores

  return (
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
  );
};