import { sampleInsightsAndRecommendations } from "@/utils/trendDataUtils";

export const TrendInsights = () => {
  const { insights } = sampleInsightsAndRecommendations;

  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold mb-2">Key Insights</h3>
      <ul className="list-disc list-inside space-y-2">
        {insights.map((insight, index) => (
          <li key={index} className="text-gray-700">{insight}</li>
        ))}
      </ul>
    </div>
  );
};