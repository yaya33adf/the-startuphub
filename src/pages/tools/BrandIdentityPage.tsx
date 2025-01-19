import { BrandIdentityTool } from "@/components/tools/BrandIdentityTool";
import { PageSEO } from "@/components/seo/PageSEO";

const BrandIdentityPage = () => {
  return (
    <>
      <PageSEO 
        title="Brand Identity Tool | Creative Tools"
        description="Create and manage your brand identity."
      />
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-6">Brand Identity Tool</h1>
        <BrandIdentityTool />
      </div>
    </>
  );
};

export default BrandIdentityPage;