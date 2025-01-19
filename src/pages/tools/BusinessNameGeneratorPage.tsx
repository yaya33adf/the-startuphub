import { BusinessNameGenerator } from "@/components/tools/BusinessNameGenerator";
import { PageSEO } from "@/components/seo/PageSEO";

const BusinessNameGeneratorPage = () => {
  return (
    <>
      <PageSEO 
        title="Business Name Generator | Business Tools"
        description="Generate creative and unique business names for your startup or company."
      />
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-6">Business Name Generator</h1>
        <BusinessNameGenerator />
      </div>
    </>
  );
};

export default BusinessNameGeneratorPage;