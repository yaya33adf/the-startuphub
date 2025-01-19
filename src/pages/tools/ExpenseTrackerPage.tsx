import { ExpenseTracker } from "@/components/tools/ExpenseTracker";
import { PageSEO } from "@/components/seo/PageSEO";

const ExpenseTrackerPage = () => {
  return (
    <>
      <PageSEO 
        title="Expense Tracker | Business Tools"
        description="Track and manage your business expenses."
      />
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-6">Expense Tracker</h1>
        <ExpenseTracker />
      </div>
    </>
  );
};

export default ExpenseTrackerPage;