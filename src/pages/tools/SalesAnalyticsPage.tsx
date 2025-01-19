import { PageSEO } from "@/components/seo/PageSEO";
import { SalesAnalytics } from "@/components/tools/SalesAnalytics";

const SalesAnalyticsPage = () => {
  return (
    <>
      <PageSEO 
        title="Sales Analytics Tool"
        description="Track and analyze your sales performance with detailed metrics and charts."
      />
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-8">Sales Analytics</h1>
        <SalesAnalytics />
      </div>
    </>
  );
};

export default SalesAnalyticsPage;