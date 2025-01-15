import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import type { TrendData } from "@/types/trends";
import { calculateTrendIndicators } from "@/utils/trendDataUtils";

interface TrendScoreTableProps {
  data: TrendData;
}

export const TrendScoreTable = ({ data }: TrendScoreTableProps) => {
  console.log('TrendScoreTable raw data:', data); // Debug log

  const {
    avgScore,
    interestLevel,
    searchVolume,
    growthRate,
    communitySize
  } = calculateTrendIndicators(data.score);

  // Create platform data array with proper score formatting
  const platformData = [
    { name: 'GitHub', score: Math.round(data.metadata?.github?.score || 0) },
    { name: 'Google Trends', score: Math.round(data.metadata?.google_trends?.score || 0) },
    { name: 'Hacker News', score: Math.round(data.metadata?.hacker_news?.score || 0) },
    { name: 'Stack Overflow', score: Math.round(data.metadata?.stack_overflow?.score || 0) },
    { name: 'Wikipedia', score: Math.round(data.metadata?.wikipedia?.score || 0) },
    { name: 'NPM', score: Math.round(data.metadata?.npm?.score || 0) },
    { name: 'PyPI', score: Math.round(data.metadata?.pypi?.score || 0) }
  ].sort((a, b) => b.score - a.score);

  console.log('Processed platform scores:', platformData); // Debug log

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[200px]">Platform/Metric</TableHead>
          <TableHead>Score</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow className="font-medium bg-muted/50">
          <TableCell>Overall Trend Score</TableCell>
          <TableCell>{Math.round(data.score)}/100</TableCell>
          <TableCell>
            {data.score > 70 ? "🔥 Strong" : data.score > 50 ? "📈 Moderate" : "📉 Weak"}
          </TableCell>
        </TableRow>
        
        {platformData.map((platform, index) => (
          platform.score > 0 && (
            <TableRow key={index}>
              <TableCell>{platform.name}</TableCell>
              <TableCell>{platform.score}/100</TableCell>
              <TableCell>
                {platform.score > 70 ? "🌟 High Impact" : 
                 platform.score > 50 ? "⭐ Significant" : 
                 platform.score > 30 ? "✨ Moderate" : "⚪ Low Impact"}
              </TableCell>
            </TableRow>
          )
        ))}

        <TableRow className="bg-muted/30">
          <TableCell>Interest Level</TableCell>
          <TableCell>{interestLevel}</TableCell>
          <TableCell>{interestLevel === "High" ? "🔥 Trending" : "📊 Stable"}</TableCell>
        </TableRow>
        
        <TableRow className="bg-muted/30">
          <TableCell>Search Volume</TableCell>
          <TableCell>{searchVolume}</TableCell>
          <TableCell>{searchVolume === "Growing" ? "📈 Increasing" : "➡️ Stable"}</TableCell>
        </TableRow>
        
        <TableRow className="bg-muted/30">
          <TableCell>Growth Rate</TableCell>
          <TableCell>{growthRate}</TableCell>
          <TableCell>{parseFloat(growthRate) > 0 ? "📈 Positive" : "📉 Negative"}</TableCell>
        </TableRow>
        
        <TableRow className="bg-muted/30">
          <TableCell>Community Size</TableCell>
          <TableCell>{communitySize}</TableCell>
          <TableCell>{communitySize === "Growing" ? "👥 Expanding" : "👤 Stable"}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};