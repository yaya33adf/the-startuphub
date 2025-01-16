import { PageSEO } from "@/components/seo/PageSEO";
import { StartupList } from "@/components/startups/StartupList";

const Startups = () => {
  return (
    <div className="container py-8">
      <PageSEO
        title="Discover Innovative Startups"
        description="Explore and rate innovative startups in our community. Find the next big thing and connect with emerging businesses."
      />
      <h1 className="text-4xl font-bold mb-8">Innovative Startups</h1>
      <StartupList />
    </div>
  );
};

export default Startups;