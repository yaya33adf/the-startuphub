import { PageSEO } from "@/components/seo/PageSEO";
import { LeanCanvasGenerator } from "@/components/tools/LeanCanvasGenerator";

const LeanCanvasGeneratorPage = () => {
  return (
    <>
      <PageSEO
        title="Lean Canvas Generator - Business Planning Tool"
        description="Create a comprehensive one-page business plan using our Lean Canvas Generator tool. Perfect for startups and entrepreneurs."
      />
      <LeanCanvasGenerator />
    </>
  );
};

export default LeanCanvasGeneratorPage;