import { PageSEO } from "@/components/seo/PageSEO";

const Team = () => {
  return (
    <div className="container py-8">
      <PageSEO
        title="Our Team | Meet the Innovators"
        description="Meet our team of dedicated professionals working to support startups and innovation."
      />
      <h1 className="text-4xl font-bold mb-8">Our Team</h1>
      <div className="prose max-w-none">
        <p className="text-lg text-muted-foreground">
          Meet the team behind our platform. We're a group of dedicated professionals committed to helping startups succeed.
        </p>
      </div>
    </div>
  );
};

export default Team;