import { PageSEO } from "@/components/seo/PageSEO";

const Feedback = () => {
  return (
    <div className="container py-8">
      <PageSEO 
        title="Feedback & Suggestions" 
        description="Share your feedback and suggestions to help improve our platform"
      />
      <h1 className="text-4xl font-bold mb-6">Feedback & Suggestions</h1>
      <p className="text-muted-foreground mb-8">
        Share your thoughts, ideas, and suggestions to help us improve and better serve the community.
      </p>
    </div>
  );
};

export default Feedback;