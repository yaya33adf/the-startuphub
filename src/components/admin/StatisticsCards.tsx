import { UserStatsCard } from "./cards/UserStatsCard";
import { ContentStatsCard } from "./cards/ContentStatsCard";
import { AnalyticsStatsCard } from "./cards/AnalyticsStatsCard";

export const StatisticsCards = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
      <UserStatsCard />
      <ContentStatsCard />
      <AnalyticsStatsCard />
    </div>
  );
};