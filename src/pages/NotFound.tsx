import { PageSEO } from "@/components/seo/PageSEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <PageSEO
        title="Page Not Found - The Startup Hub"
        description="The page you're looking for cannot be found. Return to The Startup Hub homepage."
      />
      <div className="container mx-auto px-4 py-24 text-center">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-muted-foreground mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button asChild>
          <Link to="/">Return to Homepage</Link>
        </Button>
      </div>
    </>
  );
};

export default NotFound;