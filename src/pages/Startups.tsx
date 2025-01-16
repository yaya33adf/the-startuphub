import { PageSEO } from "@/components/seo/PageSEO";
import { StartupList } from "@/components/startups/StartupList";
import { CreateStartupForm } from "@/components/startups/CreateStartupForm";

const Startups = () => {
  return (
    <div className="container py-8">
      <PageSEO
        title="Discover Innovative Startups"
        description="Explore and rate innovative startups in our community. Find the next big thing and connect with emerging businesses."
      />
      <h1 className="text-4xl font-bold mb-8">Innovative Startups</h1>
      <div className="mb-12">
        <CreateStartupForm />
      </div>
      <StartupList />
    </div>
  );
};

export default Startups;