import { PageSEO } from "@/components/seo/PageSEO";

const Events = () => {
  return (
    <div className="container py-8">
      <PageSEO
        title="Startup Events | Connect and Learn"
        description="Discover upcoming startup events, workshops, and networking opportunities in the entrepreneurial community."
      />
      <h1 className="text-4xl font-bold mb-8">Startup Events</h1>
      <div className="prose max-w-none">
        <p className="text-lg text-muted-foreground">
          Stay updated with the latest startup events, workshops, and networking opportunities. Connect with fellow entrepreneurs and industry experts.
        </p>
      </div>
    </div>
  );
};

export default Events;