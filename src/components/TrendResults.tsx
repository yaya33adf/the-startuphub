import { TrendData } from "@/types/trends";
import { TrendMetricsCards } from "./trends/TrendMetricsCards";
import { TrendingItemsGrid } from "./trends/TrendingItemsGrid";
import { ChartSection } from "./trends/ChartSection";

interface TrendResultsProps {
  data: TrendData;
}

export const TrendResults = ({ data }: TrendResultsProps) => {
  const avgScore = data.score;
  const interestLevel = avgScore > 70 ? "High" : avgScore > 40 ? "Moderate" : "Low";
  const searchVolume = avgScore > 60 ? "Growing" : "Stable";
  const growthRate = `${avgScore > 50 ? '+' : '-'}${Math.abs(avgScore - 50)}%`;
  const communitySize = avgScore > 55 ? "Growing" : "Declining";

  // Platform impact data
  const platformData = [
    { name: 'GitHub', score: data.metadata.github?.score || 0 },
    { name: 'Google', score: data.metadata.google_trends?.score || 0 },
    { name: 'Reddit', score: data.metadata.reddit?.score || 0 },
    { name: 'HN', score: data.metadata.hacker_news?.score || 0 },
    { name: 'Stack Overflow', score: data.metadata.stack_overflow?.score || 0 },
    { name: 'Wikipedia', score: data.metadata.wikipedia?.score || 0 },
  ].sort((a, b) => b.score - a.score);

  // Market segmentation data
  const segmentationData = [
    { name: 'Tech', value: 35 },
    { name: 'Business', value: 25 },
    { name: 'Education', value: 20 },
    { name: 'Other', value: 20 },
  ];

  // Sample sentiment data
  const sentimentData = [
    { date: '2024-01', positive: 65, neutral: 25, negative: 10 },
    { date: '2024-02', positive: 70, neutral: 20, negative: 10 },
    { date: '2024-03', positive: 75, neutral: 15, negative: 10 },
  ];

  // Sample competitor data
  const competitorData = [
    { date: '2024-01', current: 45, competitor1: 30, competitor2: 25 },
    { date: '2024-02', current: 48, competitor1: 32, competitor2: 20 },
    { date: '2024-03', current: 52, competitor1: 28, competitor2: 20 },
  ];

  // Sample predictive data
  const predictiveData = [
    { date: '2024-01', actual: 45, predicted: null },
    { date: '2024-02', actual: 48, predicted: null },
    { date: '2024-03', actual: 52, predicted: 52 },
    { date: '2024-04', actual: null, predicted: 55 },
    { date: '2024-05', actual: null, predicted: 58 },
  ];

  // Sample insights and recommendations
  const insights = [
    "Strong growth in tech sector adoption",
    "Increasing interest from educational institutions",
    "Positive sentiment trending upward",
  ];

  const recommendations = [
    {
      title: "Focus on Educational Market",
      description: "Expand presence in educational institutions to capture growing interest.",
    },
    {
      title: "Technical Content Creation",
      description: "Develop more technical content to address growing developer interest.",
    },
    {
      title: "Regional Expansion",
      description: "Consider expanding into emerging markets showing high growth potential.",
    },
  ];

  // Top trending items data with diverse categories and real images
  const trendingItems = [
    {
      name: "ChatGPT",
      type: "AI App",
      score: 95,
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format&fit=crop&q=60",
      description: "Leading AI chatbot platform revolutionizing conversations",
    },
    {
      name: "Clean Energy",
      type: "Market",
      score: 88,
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&auto=format&fit=crop&q=60",
      description: "Renewable energy market showing exceptional growth",
    },
    {
      name: "Web3",
      type: "Technology",
      score: 86,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=60",
      description: "Decentralized internet technologies gaining momentum",
    },
    {
      name: "Remote Work Tools",
      type: "Market",
      score: 85,
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop&q=60",
      description: "Growing market for remote collaboration solutions",
    },
    {
      name: "Cybersecurity",
      type: "Market",
      score: 92,
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=60",
      description: "Rapidly expanding digital security sector",
    },
    {
      name: "AI Development",
      type: "Technology",
      score: 94,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=60",
      description: "Artificial Intelligence development tools and platforms",
    },
    {
      name: "Digital Health",
      type: "Market",
      score: 87,
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&auto=format&fit=crop&q=60",
      description: "Healthcare technology solutions and telemedicine",
    },
    {
      name: "Smart Devices",
      type: "Technology",
      score: 83,
      image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=800&auto=format&fit=crop&q=60",
      description: "Connected devices and IoT technology trends",
    },
    {
      name: "Cloud Computing",
      type: "Technology",
      score: 91,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=60",
      description: "Cloud infrastructure and services market",
    }
  ];

  return (
    <div className="space-y-8">
      <TrendMetricsCards
        avgScore={avgScore}
        interestLevel={interestLevel}
        searchVolume={searchVolume}
        growthRate={growthRate}
        communitySize={communitySize}
      />

      <TrendingItemsGrid items={trendingItems} />
      
      <ChartSection
        platformData={platformData}
        segmentationData={segmentationData}
        sentimentData={sentimentData}
        competitorData={competitorData}
        predictiveData={predictiveData}
        insights={insights}
        recommendations={recommendations}
      />
    </div>
  );
};
