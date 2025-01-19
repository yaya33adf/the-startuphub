import { StartupIdeaGenerator } from "@/components/tools/StartupIdeaGenerator";
import { PageSEO } from "@/components/seo/PageSEO";

const StartupIdeaGeneratorPage = () => {
  return (
    <>
      <PageSEO 
        title="Startup Idea Generator | Business Tools"
        description="Generate innovative startup ideas based on industry trends and technologies."
      />
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-6">Startup Idea Generator</h1>
        <StartupIdeaGenerator />
      </div>
    </>
  );
};

export default StartupIdeaGeneratorPage;