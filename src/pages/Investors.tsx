import { PageSEO } from "@/components/seo/PageSEO";

const Investors = () => {
  return (
    <div className="container py-8">
      <PageSEO
        title="Investors | Connect with Startup Investors"
        description="Connect with investors interested in funding innovative startups and business ventures."
      />
      <h1 className="text-4xl font-bold mb-8">Investors</h1>
      <div className="prose max-w-none">
        <p className="text-lg text-muted-foreground">
          Connect with investors who are looking to fund the next big thing. This page will help you find and engage with potential investors for your startup.
        </p>
      </div>
    </div>
  );
};

export default Investors;