import { TotalUsersCard } from "./statistics/TotalUsersCard";
import { PublishedPostsCard } from "./statistics/PublishedPostsCard";
import { ActiveUsersCard } from "./statistics/ActiveUsersCard";

export const StatisticsCards = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <TotalUsersCard />
      <PublishedPostsCard />
      <ActiveUsersCard />
    </div>
  );
};