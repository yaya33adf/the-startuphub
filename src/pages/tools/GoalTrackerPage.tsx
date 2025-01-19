import { PageSEO } from "@/components/seo/PageSEO";
import { GoalTracker } from "@/components/tools/GoalTracker";

const GoalTrackerPage = () => {
  return (
    <>
      <PageSEO 
        title="Goal Tracker"
        description="Set and track your business goals and objectives effectively."
      />
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-8">Goal Tracker</h1>
        <GoalTracker />
      </div>
    </>
  );
};

export default GoalTrackerPage;