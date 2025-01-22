import { PageSEO } from "@/components/seo/PageSEO";
import { ProblemForm } from "@/components/problems/ProblemForm";

const Problems = () => {
  return (
    <>
      <PageSEO
        title="Submit a Problem"
        description="Submit your business or technical problems and get help from the community"
      />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <ProblemForm />
        </div>
      </div>
    </>
  );
};

export default Problems;