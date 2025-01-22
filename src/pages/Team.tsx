import { PageSEO } from "@/components/seo/PageSEO";

const Team = () => {
  return (
    <div className="container py-8">
      <PageSEO 
        title="Team Building & Management" 
        description="Build and manage effective teams for your startup or business project"
      />
      <h1 className="text-4xl font-bold mb-6">Team Building & Management</h1>
      <p className="text-muted-foreground mb-8">
        Learn how to build, manage, and grow effective teams for your business ventures.
      </p>
    </div>
  );
};

export default Team;