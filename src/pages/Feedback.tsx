import { PageSEO } from "@/components/seo/PageSEO";

const Feedback = () => {
  return (
    <div className="container py-8">
      <PageSEO
        title="Feedback | Share Your Thoughts"
        description="Share your feedback and help us improve our platform for startups and entrepreneurs."
      />
      <h1 className="text-4xl font-bold mb-8">Feedback</h1>
      <div className="prose max-w-none">
        <p className="text-lg text-muted-foreground">
          Your feedback helps us improve. Share your thoughts, suggestions, and ideas to help us better serve the startup community.
        </p>
      </div>
    </div>
  );
};

export default Feedback;