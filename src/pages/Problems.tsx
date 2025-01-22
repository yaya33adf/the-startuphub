import { PageSEO } from "@/components/seo/PageSEO";
import { ProblemForm } from "@/components/problems/ProblemForm";
import { SampleProblems } from "@/components/problems/SampleProblems";

const Problems = () => {
  return (
    <>
      <PageSEO
        title="Submit a Problem"
        description="Submit your business or technical problems and get help from the community"
      />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto space-y-12">
          <SampleProblems />
          <ProblemForm />
        </div>
      </div>
    </>
  );
};

export default Problems;