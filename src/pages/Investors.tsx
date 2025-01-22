import { PageSEO } from "@/components/seo/PageSEO";

const Investors = () => {
  return (
    <div className="container py-8">
      <PageSEO 
        title="Investors Hub" 
        description="Connect with investors and explore investment opportunities"
      />
      <h1 className="text-4xl font-bold mb-6">Investors Hub</h1>
      <p className="text-muted-foreground mb-8">
        Connect with potential investors, explore investment opportunities, and grow your business.
      </p>
    </div>
  );
};

export default Investors;