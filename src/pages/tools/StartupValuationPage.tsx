import { StartupValuation } from "@/components/tools/StartupValuation";
import { PageSEO } from "@/components/seo/PageSEO";

const StartupValuationPage = () => {
  return (
    <>
      <PageSEO 
        title="Startup Valuation Calculator | Calculate Your Startup's Worth"
        description="Estimate your startup's valuation based on revenue, growth rate, and market size using our simple calculator tool."
      />
      <StartupValuation />
    </>
  );
};

export default StartupValuationPage;